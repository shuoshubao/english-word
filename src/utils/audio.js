// 发音: 统一经 vercel 代理(fetch+blob 播放), 规避第三方域无 CORS 头与媒体 Range 请求问题.
// 单词/释义按设置走有道 dictvoice 或百度 gettts; 例句走百度 gettts(有道只收录单词, 整句会 500)
import { getVoiceSource } from './settings';

const PROXY = 'https://truethy.vercel.app/proxy';
const youdaoUrl = (text, lang) => `${PROXY}/youdao/dictvoice?audio=${encodeURIComponent(text)}&type=2${lang === 'zh' ? '&le=zh' : ''}`;
const baiduTtsUrl = (text, lang) => `${PROXY}/fanyi/gettts?lan=${lang}&text=${encodeURIComponent(text)}&spd=5&source=web`;

let current = null; // 当前播放中的 Audio
let currentSrc = null; // 当前播放的 blob URL, 播完/中断后回收
const blobCache = new Map(); // url -> objectURL(同 URL 复用, 提高二次点击速度)
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
    if (currentSrc) {
        try {
            URL.revokeObjectURL(currentSrc);
        } catch {
            // ignore
        }
        currentSrc = null;
    }
};

const play = async (url, onEnd) => {
    try {
        stopCurrent();
        // 已有缓存 blob 直接播, 避免重复请求
        let objectUrl = blobCache.get(url);
        if (!objectUrl) {
            if (inflight.has(url)) {
                return; // 正在下载同一句, 忽略连点
            }
            inflight.add(url);
            const res = await fetch(url);
            if (!res.ok) {
                inflight.delete(url);
                if (onEnd) onEnd();
                return;
            }
            const blob = await res.blob();
            objectUrl = URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' }));
            blobCache.set(url, objectUrl);
            inflight.delete(url);
        }
        const audio = new Audio(objectUrl);
        current = audio;
        currentSrc = objectUrl;
        const finish = () => {
            if (current === audio) {
                current = null;
                if (currentSrc) {
                    URL.revokeObjectURL(currentSrc);
                    currentSrc = null;
                }
            }
            if (onEnd) onEnd();
        };
        audio.onended = finish;
        audio.onerror = finish;
        await audio.play();
    } catch (error) {
        console.warn('发音播放失败', error);
        blobCache.delete(url);
        if (onEnd) onEnd();
    }
};

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

// 例句朗读: 固定百度 gettts(支持整句, 有道整句会 500)
export const speakSentence = (text, onEnd) => {
    if (!text) {
        if (onEnd) onEnd();
        return;
    }
    play(baiduTtsUrl(text, 'en'), onEnd);
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
