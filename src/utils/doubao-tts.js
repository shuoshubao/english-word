// 豆包 TTS 大模型 2.0 (V3 SSE), 例句朗读与调试卡片共用
const VERCEL_PROXY = 'https://truethy.vercel.app';
const isLocal = window.location.hostname === 'localhost';
const API = isLocal ? '/doubao-tts/api/v3/tts/unidirectional/sse' : `${VERCEL_PROXY}/doubaotts/api/v3/tts/unidirectional/sse`;

export const DOUBAO_INFO_KEY = 'DoubaoTtsInfo';
export const DEFAULT_VOICE = 'en_female_mel_uranus_bigtts';

export const readDoubaoInfo = () => {
    try {
        return JSON.parse(localStorage.getItem(DOUBAO_INFO_KEY)) ?? {};
    } catch {
        return {};
    }
};

export const hasDoubaoConfig = info => Boolean(info?.apiKey);

const base64ToBytes = data => {
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
};

// event 与 data 可能跨网络分片, 按空行合并后再处理; 352 音频片段, 153 失败
export const synthesize = async (text, info) => {
    const reqid = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    const body = {
        user: { uid: 'english-word' },
        req_params: {
            text,
            speaker: info.voice || DEFAULT_VOICE,
            audio_params: {
                format: 'mp3',
                speech_rate: Number(info.speed) || 0
            },
            // V3 接口要求 additions 是 JSON 字符串, 传对象会被服务端反序列化拒绝
            additions: JSON.stringify({ explicit_language: 'en' })
        }
    };
    const headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': info.apiKey,
        'X-Api-Resource-Id': 'seed-tts-2.0',
        'X-Api-Request-Id': reqid
    };
    const res = await fetch(API, { method: 'POST', headers, body: JSON.stringify(body) });
    if (!res.ok) {
        const detail = await res.text();
        throw new Error(detail || `HTTP ${res.status}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    const chunks = [];
    let buffer = '';
    let event = '';
    let dataLines = [];
    const flushEvent = () => {
        if (!event || !dataLines.length) {
            event = '';
            dataLines = [];
            return;
        }
        let json;
        try {
            json = JSON.parse(dataLines.join('\n'));
        } catch {
            event = '';
            dataLines = [];
            return;
        }
        if (event === '352' && json.data) {
            chunks.push(base64ToBytes(json.data));
        } else if (event === '153') {
            throw new Error(json.message || `合成失败 (code ${json.code})`);
        }
        event = '';
        dataLines = [];
    };
    while (true) {
        const { value, done } = await reader.read();
        if (done) {
            break;
        }
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
            const textLine = line.replace(/\r$/, '');
            if (!textLine) {
                flushEvent();
            } else if (textLine.startsWith('event:')) {
                event = textLine.slice(6).trim();
            } else if (textLine.startsWith('data:')) {
                dataLines.push(textLine.slice(5).trimStart());
            }
        }
    }
    flushEvent();
    if (!chunks.length) {
        throw new Error('未获取到音频');
    }
    return new Blob(chunks, { type: 'audio/mpeg' });
};
