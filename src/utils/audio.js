// 发音: 统一经 vercel 代理(fetch+blob 播放), 规避第三方域无 CORS 头与媒体 Range 请求问题.
// 单词/释义按设置走有道 dictvoice 或百度 gettts; 例句优先走百度智能云正式 TTS, 未配置时回退 gettts
import { hasTtsConfig, readTtsInfo, synthesize } from './baidu-tts';
import { getVoiceSource } from './settings';

const PROXY = 'https://truethy.vercel.app/proxy';
const youdaoUrl = (text, lang) => `${PROXY}/youdao/dictvoice?audio=${encodeURIComponent(text)}&type=2${lang === 'zh' ? '&le=zh' : ''}`;
const baiduTtsUrl = (text, lang) => `${PROXY}/fanyi/gettts?lan=${lang}&text=${encodeURIComponent(text)}&spd=5&source=web`;

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

// 统一播放: key 命中缓存直接播; load() 负责产出音频 blob; onFail 在加载失败时调用(用于 TTS 回退)
const playByKey = async (key, load, onEnd, onFail) => {
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
                if (onFail) {
                    onFail();
                } else if (onEnd) {
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

// 英文句子走百度翻译 gettts(不经正式 TTS), 供配置缺失或合成失败时回退
export const speakSentenceFallback = (text, onEnd) => play(baiduTtsUrl(text, 'en'), onEnd);

// 按发音来源设置选择有道或百度; lang: 'en' 单词 / 'zh' 中文释义
const sourceUrl = (text, lang) => (getVoiceSource() === 'baidu' ? baiduTtsUrl(text, lang) : youdaoUrl(text, lang));

const playText = (text, lang, onEnd) => {
    if (!text) {
        if (onEnd) onEnd();
        return;
    }
    play(sourceUrl(text, lang), onEnd);
};

// 英文单词发音(按"发音来源"设置走有道或百度)
export const speak = (word, onEnd) => playText(word, 'en', onEnd);

// 例句朗读: 配置了百度智能云 TTS 则走正式接口, 否则回退百度翻译 gettts(有道整句会 500)
export const speakSentence = (text, onEnd, overrideInfo) => {
    if (!text) {
        if (onEnd) onEnd();
        return;
    }
    const info = overrideInfo || readTtsInfo();
    if (!hasTtsConfig(info)) {
        play(baiduTtsUrl(text, 'en'), onEnd);
        return;
    }
    const key = `tts-${info.voice || 0}-${info.speed || 5}-${text}`;
    playByKey(
        key,
        () => synthesize(text, info),
        onEnd,
        () => play(baiduTtsUrl(text, 'en'), onEnd) // 正式 TTS 失败时回退 gettts
    );
};

// 中文释义朗读前的清洗:
//   1. 去掉词性缩写(n./v./adj. 等), 不念给 TTS
//   2. 连续英文句点归并成停顿符(半角逗号)
//   3. 斜杠/竖线换成停顿符
const SPEAK_POS = 'adj|adv|vt|vi|prep|pron|conj|interj|intery|inter|int|num|art|aux|determiner|det|modal|abbr|ad|pl|n|v|a|u|c';
export const toSpeakText = text =>
    String(text || '')
        .replace(new RegExp(`(^|[;；,，、/|])\\s*(?:${SPEAK_POS})\\s*\\.\\s*`, 'gi'), '$1')
        .replace(/\.{2,}/g, ',')
        .replace(/[/|]/g, ',')
        .replace(/^[\s;；,，、]+/, '')
        .replace(/\s+/g, ' ')
        .trim();

// 中文释义发音
export const speakZh = (translation, onEnd) => {
    const text = toSpeakText(translation);
    if (!text) {
        if (onEnd) onEnd();
        return;
    }
    playText(text, 'zh', onEnd);
};
