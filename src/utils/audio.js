// 发音: 统一经 vercel 代理(fetch+blob 播放), 规避第三方域无 CORS 头与媒体 Range 请求问题.
// 单词按设置走有道 dictvoice 或百度 gettts; 例句按设置走百度智能云或豆包 TTS
import { Modal } from 'antd';
import { getSentenceTtsSource, hasSentenceTtsConfig, readSentenceTtsInfo, synthesizeSentence } from '@/utils/sentence-tts';
import { getVoiceSource } from '@/utils/settings';

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
const playByKey = async (key, load, onEnd, onError) => {
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
                if (onError) {
                    onError(error);
                }
                if (onEnd) {
                    onEnd();
                }
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
            if (onEnd) {
                onEnd();
            }
        };
        audio.onended = finish;
        audio.onerror = finish;
        await audio.play();
    } catch (error) {
        console.warn('发音播放失败', error);
        if (onError) {
            onError(error);
        }
        if (onEnd) {
            onEnd();
        }
    }
};

const play = (url, onEnd) =>
    playByKey(
        url,
        async () => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }
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
        if (current === audio) {
            current = null;
        }
        if (onEnd) {
            onEnd();
        }
    };
    audio.onended = finish;
    audio.onerror = finish;
    audio.play().catch(finish);
};

// 单词发音设置里的 TTS 来源 -> 句子 TTS 的音源
const WORD_TTS_SOURCES = {
    'baidu-tts': 'baidu',
    'doubao-tts': 'doubao'
};

const ttsCredentials = (source, info) =>
    source === 'doubao' ? `${info.apiKey}|${info.voice || ''}|${info.speed ?? 0}` : `${info.apiKey}|${info.secretKey}|${info.voice || 0}|${info.speed ?? 5}`;

// 按发音来源设置选择有道或百度翻译
const sourceUrl = text => (getVoiceSource() === 'baidu' ? baiduTtsUrl(text) : youdaoUrl(text));

// 英文句子(例句/调试句)朗读: 按当前音源走百度或豆包, 失败不回退
// 缓存由 playByKey 统一处理, key 含音源+凭证+音色+语速+文本, 命中不再请求接口.
export const speakSentence = (text, onEnd, onError, sourceOverride) => {
    if (!text) {
        if (onEnd) {
            onEnd();
        }
        return;
    }
    const source = sourceOverride || getSentenceTtsSource();
    const info = readSentenceTtsInfo(source);
    if (!hasSentenceTtsConfig(source, info)) {
        Modal.error({
            title: '未配置TTS',
            content: `请先到「我的 - 句子发音」配置${source === 'baidu' ? '百度TTS' : '豆包TTS'}的必填项`
        });
        if (onEnd) {
            onEnd();
        }
        return;
    }
    const key = `tts-${source}-${ttsCredentials(source, info)}-${text}`;
    playByKey(key, () => synthesizeSentence(text, source, info), onEnd, onError);
};

// SSML 朗读(逐字母等): 复用句子 TTS 的凭证校验和缓存, 但单独标记缓存避免与纯文本混淆
export const speakSsml = (ssml, onEnd, onError, sourceOverride) => {
    if (!ssml) {
        if (onEnd) {
            onEnd();
        }
        return;
    }
    const source = sourceOverride || getSentenceTtsSource();
    const info = readSentenceTtsInfo(source);
    if (!hasSentenceTtsConfig(source, info)) {
        Modal.error({
            title: '未配置TTS',
            content: `请先到「我的 - 句子发音」配置${source === 'baidu' ? '百度TTS' : '豆包TTS'}的必填项`
        });
        if (onEnd) {
            onEnd();
        }
        return;
    }
    // 百度 SSML 语速固定为 0, 缓存 key 用标记与其他语速隔离
    const speedMark = source === 'baidu' ? 'spd0' : 'default';
    const key = `ssml-${source}-${speedMark}-${ttsCredentials(source, info)}-${ssml}`;
    playByKey(key, () => synthesizeSentence(ssml, source, info, { ssml: true }), onEnd, onError);
};

// 英文单词发音: 普通音源走词典接口, TTS 来源走对应音源
export const speak = (word, onEnd, onError) => {
    if (!word) {
        if (onEnd) {
            onEnd();
        }
        return;
    }
    const ttsSource = WORD_TTS_SOURCES[getVoiceSource()];
    if (ttsSource) {
        speakSentence(word, onEnd, onError, ttsSource);
        return;
    }
    play(sourceUrl(word), onEnd);
};
