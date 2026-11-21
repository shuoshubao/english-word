// 百度智能云语音合成(短文本在线合成 text2audio), 专用于整句朗读.
// 本地走 Vite 代理(/baidu-aip /baidu-tts), 线上走 Vercel 转发(/proxy/aip /proxy/bdaitts).
// 凭证: API Key / Secret Key 从百度智能云控制台获取, 与百度网盘开放平台是两套.
const VERCEL_PROXY = 'https://truethy.vercel.app/proxy';
const isLocal = window.location.hostname === 'localhost';
const PREFIX = { aip: '/baidu-aip', tts: '/baidu-tts' };
const TARGET = { aip: 'aip', tts: 'bdaitts' };
const apiBase = key => (isLocal ? PREFIX[key] : `${VERCEL_PROXY}/${TARGET[key]}`);

const INFO_KEY = 'BaiduTtsInfo';
const TOKEN_KEY = 'BaiduTtsToken';
const CUID_KEY = 'BaiduTtsCuid';

const read = (key, fallback) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
        return fallback;
    }
};

const write = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

export const readTtsInfo = () => read(INFO_KEY, {});

export const hasTtsConfig = info => Boolean(info?.apiKey && info?.secretKey);

const readToken = () => read(TOKEN_KEY, null);
const getCuid = () => {
    let cuid = read(CUID_KEY, null);
    if (!cuid) {
        cuid = `ew-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`;
        write(CUID_KEY, cuid);
    }
    return cuid;
};

// 用 API Key / Secret Key 换 access_token(有效期约 30 天), 缓存并在过期前刷新
const getAccessToken = async info => {
    if (!hasTtsConfig(info)) throw new Error('请先填写百度 TTS 的 API Key 和 Secret Key');
    const cached = readToken();
    if (cached && cached.apiKey === info.apiKey && cached.expiresAt > Date.now() + 60 * 1000) {
        return cached.accessToken;
    }
    const params = new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: info.apiKey,
        client_secret: info.secretKey
    });
    const res = await fetch(`${apiBase('aip')}/oauth/2.0/token?${params}`);
    if (!res.ok) throw new Error(`获取 token 失败 (HTTP ${res.status})`);
    const data = await res.json();
    if (!data.access_token) throw new Error(data.error_description || data.error || '获取 token 失败');
    write(TOKEN_KEY, {
        apiKey: info.apiKey,
        accessToken: data.access_token,
        expiresAt: Date.now() + (Number(data.expires_in) || 2592000) * 1000
    });
    return data.access_token;
};

// 合成整句, 返回 mp3 Blob. 失败抛错(内容为 application/json 时读取 err_msg)
export const synthesize = async (text, info) => {
    const token = await getAccessToken(info);
    const voice = Number(info?.voice) || 0;
    const speed = Number(info?.speed) || 5;
    // tex 走 URLSearchParams 序列化一次 + 传值前手动 encode 一次 = 接口要求的 2 次 urlencode
    // (代理对 form body 会 decode 一次再 encode 一次, 到百度仍是 2 次)
    const body = new URLSearchParams({
        tex: encodeURIComponent(text),
        lan: 'zh',
        ctp: '1',
        cuid: getCuid(),
        tok: token,
        per: String(voice),
        spd: String(speed),
        aue: '3'
    });
    const res = await fetch(`${apiBase('tts')}/text2audio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.startsWith('audio')) {
        let detail = '';
        try {
            const json = await res.json();
            detail = json.err_msg || json.message || JSON.stringify(json);
        } catch {
            detail = `HTTP ${res.status}`;
        }
        throw new Error(detail);
    }
    return res.blob();
};
