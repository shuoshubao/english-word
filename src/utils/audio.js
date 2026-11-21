// 发音: 统一经 vercel 代理(fetch+blob 播放), 规避第三方域无 CORS 头与媒体 Range 请求问题.
// 单词按设置走有道 dictvoice 或百度 gettts; 例句走百度智能云 TTS
import { hasTtsConfig, readTtsInfo, synthesize } from './baidu-tts';
import { getVoiceSource } from './settings';

const PROXY = 'https://truethy.vercel.app/proxy';
const youdaoUrl = text => `${PROXY}/youdao/dictvoice?audio=${encodeURIComponent(text)}&type=2`;
const baiduTtsUrl = text => `${PROXY}/fanyi/gettts?lan=uk&text=${encodeURIComponent(text)}&spd=3&source=web`;

let current = null; // 当前播放中的 Audio
const blobCache = new Map(); // url -> objectURL(同一 URL 复用, 不重复请求; 会话内保留, 不 revoke)
const inflight = new Set(); // 正在下载的去重, 连点同一句只发一次

const stopCurrent = () => {
    if (current) {
        try {
            current.pause();
        } catch {
            // ignore
        }
        current = null;
    }
};

// 统一播放: key 命中缓存直接播; load() 负责产出音频 blob
const playByKey = async (key, load, onEnd) => {
    try {
        stopCurrent();
        let objectUrl = blobCache.get(key);
        if (!objectUrl) {
            if (inflight.has(key)) {
                return; // 正在下载同一句, 忽略连点
            }
            inflight.add(key);
            let blob;
            try {
                blob = await load();
            } catch (error) {
                inflight.delete(key);
                console.warn('音频加载失败', error);
                if (onEnd) onEnd();
                return;
            }
            objectUrl = URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' }));
            blobCache.set(key, objectUrl);
            inflight.delete(key);
        }
        const audio = new Audio(objectUrl);
        current = audio;
        const finish = () => {
            if (current === audio) {
                current = null;
            }
            if (onEnd) onEnd();
        };
        audio.onended = finish;
        audio.onerror = finish;
        await audio.play();
    } catch (error) {
        console.warn('发音播放失败', error);
        if (onEnd) onEnd();
    }
};

const play = (url, onEnd) =>
    playByKey(
        url,
        async () => {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.blob();
        },
        onEnd
    );

// 播放已缓存的 objectURL, 复用同一套播放状态管理(供组件级缓存命中时直接播放)
export const playBuffer = (objectUrl, onEnd) => {
    stopCurrent();
    const audio = new Audio(objectUrl);
    current = audio;
    const finish = () => {
        if (current === audio) current = null;
        if (onEnd) onEnd();
    };
    audio.onended = finish;
    audio.onerror = finish;
    audio.play().catch(finish);
};

// 按发音来源设置选择有道或百度
const sourceUrl = text => (getVoiceSource() === 'baidu' ? baiduTtsUrl(text) : youdaoUrl(text));

// 英文单词发音(按"发音来源"设置走有道或百度)
export const speak = (word, onEnd) => {
    if (!word) {
        if (onEnd) onEnd();
        return;
    }
    play(sourceUrl(word), onEnd);
};

// 英文句子(例句/调试句)朗读: 走百度智能云 TTS
// 缓存由 playByKey 统一处理, key 含凭证+音色+语速+文本, 命中不再请求接口.
export const speakSentence = (text, onEnd, infoOverride) => {
    if (!text) {
        if (onEnd) onEnd();
        return;
    }
    const info = infoOverride || readTtsInfo();
    if (!hasTtsConfig(info)) {
        if (onEnd) onEnd();
        return;
    }
    const key = `tts-${info.apiKey}|${info.secretKey}|${info.voice || 0}|${info.speed || 5}|${text}`;
    playByKey(key, () => synthesize(text, info), onEnd);
};
