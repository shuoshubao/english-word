// 百度网盘同步: 本地走 Vite 代理, 线上走 Vercel 转发
// 应用根目录 /apps/EnglishWord, 备份存其下 progress/, 文件名: <毫秒时间戳>.json
const VERCEL_PROXY = 'https://truethy.vercel.app/proxy';
export const isLocal = window.location.hostname === 'localhost';
// 本地前缀对应 vite.config.js 的 proxy, 线上 target 对应 Vercel proxy/config.js
const API_PREFIX = { pan: '/baidu-api', upload: '/baidu-upload' };
const API_TARGET = { pan: 'baidupan', upload: 'baiduupload' };
const apiBase = key => (isLocal ? API_PREFIX[key] : `${VERCEL_PROXY}/${API_TARGET[key]}`);
const NETDISK = `${apiBase('pan')}/rest/2.0/xpan`;
const UPLOAD = `${apiBase('upload')}/rest/2.0/pcs`;
// 授权 URL 与 token 换取走服务端专用端点, 密钥不下发浏览器
const PAN_AUTH_URL = `${VERCEL_PROXY}/pan-auth-url`;
const PAN_TOKEN_URL = `${VERCEL_PROXY}/pan-token`;
// dlink 会 302 到 CDN 域名(无 CORS 头), 交给服务端代理跟随重定向后再返回
const DL = isLocal ? '/baidu-dl' : `${VERCEL_PROXY}/dl`;
const APP_DIR = '/apps/EnglishWord';
const DIR = `${APP_DIR}/progress`;
// 百度官方不允许本地地址做授权回调, 本地只能用 oob 手动复制授权码; 线上用标准回调
const OOB_REDIRECT = 'oob';
const STATE_KEY = 'BaiduPanOAuthState';
const RETURN_KEY = 'BaiduPanOAuthReturn';
const TOKEN_KEY = 'BaiduPanToken';
// 与百度控制台「授权回调页」一致: origin + pathname, 不含 hash/query
const REDIRECT_URI = () => `${window.location.origin}${window.location.pathname}`;
// ---- MD5 (百度 precreate 需要 block_list) ----
const K = new Uint32Array([
    0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee, 0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501, 0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be, 0x6b901122,
    0xfd987193, 0xa679438e, 0x49b40821, 0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa, 0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8, 0x21e1cde6, 0xc33707d6,
    0xf4d50d87, 0x455a14ed, 0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a, 0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c, 0xa4beea44, 0x4bdecfa9, 0xf6bb4b60,
    0xbebfbc70, 0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05, 0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665, 0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039,
    0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1, 0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1, 0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391
]);
const S = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21];

export const md5 = bytes => {
    const len = bytes.length;
    const size = Math.ceil((len + 9) / 64) * 64;
    const buf = new Uint8Array(size);
    buf.set(bytes);
    buf[len] = 0x80;
    const view = new DataView(buf.buffer);
    const bits = len * 8;
    view.setUint32(size - 8, bits >>> 0, true);
    view.setUint32(size - 4, Math.floor(bits / 0x100000000) >>> 0, true);

    let a0 = 0x67452301;
    let b0 = 0xefcdab89;
    let c0 = 0x98badcfe;
    let d0 = 0x10325476;
    for (let offset = 0; offset < size; offset += 64) {
        const m = new Uint32Array(16);
        for (let i = 0; i < 16; i += 1) {
            m[i] = view.getUint32(offset + i * 4, true);
        }
        let a = a0;
        let b = b0;
        let c = c0;
        let d = d0;
        for (let i = 0; i < 64; i += 1) {
            let f;
            let g;
            if (i < 16) {
                f = (b & c) | (~b & d);
                g = i;
            } else if (i < 32) {
                f = (d & b) | (~d & c);
                g = (5 * i + 1) % 16;
            } else if (i < 48) {
                f = b ^ c ^ d;
                g = (3 * i + 5) % 16;
            } else {
                f = c ^ (b | ~d);
                g = (7 * i) % 16;
            }
            const s = S[Math.floor(i / 16) * 4 + (i % 4)];
            const tmp = (a + f + K[i] + m[g]) >>> 0;
            const rotated = ((tmp << s) | (tmp >>> (32 - s))) >>> 0;
            a = d;
            d = c;
            c = b;
            b = (b + rotated) >>> 0;
        }
        a0 = (a0 + a) >>> 0;
        b0 = (b0 + b) >>> 0;
        c0 = (c0 + c) >>> 0;
        d0 = (d0 + d) >>> 0;
    }
    const hex = n => [n & 255, (n >>> 8) & 255, (n >>> 16) & 255, (n >>> 24) & 255].map(item => item.toString(16).padStart(2, '0')).join('');
    return hex(a0) + hex(b0) + hex(c0) + hex(d0);
};

// ---- token ----
const readToken = () => {
    try {
        return JSON.parse(localStorage.getItem(TOKEN_KEY)) ?? null;
    } catch {
        return null;
    }
};

const writeToken = token => localStorage.setItem(TOKEN_KEY, JSON.stringify(token));

const checkError = data => {
    if (data?.error) {
        throw new Error(data.error_description || data.error);
    }
    if (data?.error_code && data.error_code !== 0) {
        throw new Error(`${data.error_msg || '百度接口错误'} (${data.error_code})`);
    }
    if (data?.errno && data.errno !== 0) {
        throw new Error(data.error_msg || `百度接口错误 ${data.errno}`);
    }
    return data;
};

const getJson = async url => checkError(await (await fetch(url)).json());

// token 接口: 参数放 body
const postForm = async (url, params) => {
    const body = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => body.set(key, String(value)));
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });
    return checkError(await response.json());
};

// xpan 文件接口: method 必须在 URL query(放 body 报 error_code 3)
const postQuery = async (url, params) => {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => query.set(key, String(value)));
    return checkError(await (await fetch(`${url}?${query}`, { method: 'POST' })).json());
};

// create 特殊: method+access_token 在 query, 其余参数必须在 body(全放 query 报 errno 2)
const postCreate = async (url, params) => {
    const query = new URLSearchParams();
    query.set('method', params.method);
    query.set('access_token', params.access_token);
    const body = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (key !== 'method' && key !== 'access_token') {
            body.set(key, String(value));
        }
    });
    const response = await fetch(`${url}?${query}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });
    return checkError(await response.json());
};

// 授权页由服务端拼好(含 client_id), 前端只决定用哪种回调方式
const fetchAuthUrl = async params => {
    const data = checkError(await (await fetch(`${PAN_AUTH_URL}?${new URLSearchParams(params)}`)).json());
    return data.url;
};

// 方式一: oob 授权, 新窗口显示授权码, 手动粘贴. 本地/线上都可用.
export const startOobAuth = async () => {
    const url = await fetchAuthUrl({ oob: '1' });
    window.open(url, '_blank');
};

// 方式二: 标准授权码回调, 同窗口跳转, 带 state. 仅线上可用(百度不允许本地回调地址).
export const startRedirectAuth = async () => {
    const state = Math.random().toString(36).slice(2);
    sessionStorage.setItem(STATE_KEY, state);
    // 回调会丢掉 hash, 记下当前路由, 授权完成后恢复
    sessionStorage.setItem(RETURN_KEY, window.location.hash || '#/');
    window.location.href = await fetchAuthUrl({ redirect_uri: REDIRECT_URI(), state });
};

// 用 oob 授权码换取 token
export const exchangeCode = async code => {
    const clean = (code ?? '').trim();
    if (!clean) {
        throw new Error('请粘贴授权码');
    }
    const data = await postForm(PAN_TOKEN_URL, {
        grant_type: 'authorization_code',
        code: clean,
        redirect_uri: OOB_REDIRECT
    });
    writeToken({ accessToken: data.access_token, refreshToken: data.refresh_token, expiresAt: Date.now() + data.expires_in * 1000 });
};

// 检测回调 code, 校验 state 后换取 token; 返回需要恢复的路由, 没有回调返回 null
let authInFlight = false;
export const finishAuth = async () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code || authInFlight) {
        return null;
    }
    authInFlight = true;
    try {
        const state = params.get('state');
        if (!state || state !== sessionStorage.getItem(STATE_KEY)) {
            throw new Error('授权状态校验失败');
        }
        const data = await postForm(PAN_TOKEN_URL, {
            grant_type: 'authorization_code',
            code,
            redirect_uri: REDIRECT_URI()
        });
        writeToken({ accessToken: data.access_token, refreshToken: data.refresh_token, expiresAt: Date.now() + data.expires_in * 1000 });
        const returnHash = sessionStorage.getItem(RETURN_KEY) || '#/';
        sessionStorage.removeItem(STATE_KEY);
        sessionStorage.removeItem(RETURN_KEY);
        // 清掉 URL 上的 code/state, 由调用方 navigate 回原路由
        window.history.replaceState(null, '', window.location.pathname);
        return returnHash.replace(/^#/, '') || '/';
    } finally {
        authInFlight = false;
    }
};

const validToken = async () => {
    const token = readToken();
    if (token?.accessToken && token.expiresAt > Date.now() + 60_000) {
        return token.accessToken;
    }
    if (!token?.refreshToken) {
        throw new Error('AUTH_REQUIRED');
    }
    const data = await postForm(PAN_TOKEN_URL, {
        grant_type: 'refresh_token',
        refresh_token: token.refreshToken
    });
    writeToken({ accessToken: data.access_token, refreshToken: data.refresh_token, expiresAt: Date.now() + data.expires_in * 1000 });
    return data.access_token;
};

// 百度头像返回 http, 线上 https 页面会被浏览器拦截, 换成 https
const toHttps = url => (url ? url.replace(/^http:\/\//, 'https://') : '');

// 校验当前是否已授权: 确保 token 有效后调 uinfo 让百度确认, 同时取回登录用户名和头像
// 合并并发调用, 避免 StrictMode 下重复挂载触发两次请求
let authCheckInFlight = null;
export const checkAuthStatus = () => {
    if (authCheckInFlight) {
        return authCheckInFlight;
    }
    authCheckInFlight = (async () => {
        try {
            const accessToken = await validToken();
            const params = new URLSearchParams({ method: 'uinfo', access_token: accessToken });
            const data = await getJson(`${NETDISK}/nas?${params}`);
            return data?.uk
                ? { authorized: true, name: data.baidu_name || '', avatar: toHttps(data.avatar_url) }
                : { authorized: false, name: '', avatar: '' };
        } catch {
            return { authorized: false, name: '', avatar: '' };
        } finally {
            authCheckInFlight = null;
        }
    })();
    return authCheckInFlight;
};

// ---- files ----
export const listBackups = async () => {
    const token = await validToken();
    const params = new URLSearchParams({
        method: 'list',
        dir: DIR,
        order: 'time',
        desc: '1',
        limit: '50',
        access_token: token
    });
    const data = await getJson(`${NETDISK}/file?${params}`);
    return (data.list ?? []).filter(file => {
        return !file.isdir && /^\d+\.json$/.test(file.server_filename);
    }).map(file => {
        return { fsId: file.fs_id, name: file.server_filename, mtime: file.server_mtime };
    });
};

// 拉取指定目录下的直接子项(不递归), 默认从网盘根目录开始。目录节点带空 children 占位, 供 react-arborist 识别为可展开
export const listDir = async (dir = '/') => {
    const token = await validToken();
    const items = [];
    let start = 0;
    while (true) {
        const params = new URLSearchParams({
            method: 'list',
            dir,
            order: 'name',
            limit: '1000',
            start: String(start),
            access_token: token
        });
        const data = await getJson(`${NETDISK}/file?${params}`);
        const list = data.list ?? [];
        items.push(...list);
        if (list.length < 1000) {
            break;
        }
        start += list.length;
    }
    return items.map(item => {
        return {
            id: String(item.fs_id),
            name: item.server_filename,
            isDir: !!item.isdir,
            path: item.path,
            fsId: item.fs_id,
            size: item.size,
            mtime: item.server_mtime,
            ...(item.isdir ? { children: [], loaded: false } : {})
        };
    });
};

// 把带签名的 dlink 交给服务端代理 fetch(自动跟随 302 且无 CORS 限制)
const proxyDlink = dlink => `${DL}?url=${encodeURIComponent(dlink)}`;

const fetchFileResponse = async fsId => {
    const token = await validToken();
    const params = new URLSearchParams({
        method: 'filemetas',
        fsids: JSON.stringify([fsId]),
        dlink: '1',
        access_token: token
    });
    const meta = await getJson(`${NETDISK}/multimedia?${params}`);
    const dlink = meta.list?.[0]?.dlink;
    if (!dlink) {
        throw new Error('获取下载地址失败');
    }
    // dlink 鉴权仍需要 access_token, 缺了会 403 error_code 31045
    const withToken = `${dlink}${dlink.includes('?') ? '&' : '?'}access_token=${token}`;
    const response = await fetch(proxyDlink(withToken));
    if (!response.ok) {
        throw new Error(`下载失败 (${response.status})`);
    }
    return response;
};

const downloadFile = async fsId => (await fetchFileResponse(fsId)).text();

export const downloadBackup = async fsId => JSON.parse(await downloadFile(fsId));

// 调试用: 读取文件原始文本
export const readFileText = fsId => downloadFile(fsId);
// 调试用: 读取文件二进制(图片等)
export const readFileBlob = async fsId => (await fetchFileResponse(fsId)).blob();

// 百度接口不会自动创建父目录, 先确保 progress 目录存在
const ensureDir = async (token, dir) => {
    const parent = dir.slice(0, dir.lastIndexOf('/')) || '/';
    const name = dir.slice(dir.lastIndexOf('/') + 1);
    const params = new URLSearchParams({ method: 'list', dir: parent, access_token: token });
    const data = await getJson(`${NETDISK}/file?${params}`);
    if ((data.list || []).some(item => item.isdir && item.server_filename === name)) {
        return;
    }
    await postCreate(`${NETDISK}/file`, { method: 'create', access_token: token, path: dir, isdir: 1, rtype: 0 });
};

export const uploadBackup = async content => {
    const token = await validToken();
    const bytes = new TextEncoder().encode(content);
    const hash = md5(bytes);
    await ensureDir(token, DIR);
    const path = `${DIR}/${Date.now()}.json`;
    const pre = await postQuery(`${NETDISK}/file`, {
        method: 'precreate',
        access_token: token,
        path,
        size: bytes.length,
        isdir: 0,
        autoinit: 1,
        rtype: 3,
        block_list: JSON.stringify([hash])
    });
    if (pre.return_type !== 2) {
        const uploadParams = new URLSearchParams({
            method: 'upload',
            access_token: token,
            type: 'tmpfile',
            path,
            uploadid: pre.uploadid,
            partseq: '0'
        });
        const form = new FormData();
        form.append('file', new Blob([bytes], { type: 'application/json' }), path.split('/').pop());
        checkError(await (await fetch(`${UPLOAD}/superfile2?${uploadParams}`, { method: 'POST', body: form })).json());
        await postCreate(`${NETDISK}/file`, {
            method: 'create',
            access_token: token,
            path,
            size: bytes.length,
            isdir: 0,
            uploadid: pre.uploadid,
            block_list: JSON.stringify([hash]),
            rtype: 3
        });
    }
    return path.split('/').pop();
};
