// 应用设置: 持久化到 localStorage, 目前包含发音来源.
const STORAGE_KEY = 'EnglishWord:settings';

// 发音来源可选项
export const VOICE_SOURCES = [
    { id: 'baidu', name: '百度翻译', desc: '百度发音' },
    { id: 'youdao', name: '网易有道', desc: '网易有道发音' }
];

const DEFAULTS = {
    voiceSource: 'baidu'
};

let settings = null;

const load = () => {
    if (!settings) {
        let saved = {};
        try {
            saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {};
        } catch {
            saved = {};
        }
        settings = { ...DEFAULTS, ...saved };
        // 历史遗留但已不存在的来源回退到默认, 避免读到失效设置
        if (!VOICE_SOURCES.some(source => source.id === settings.voiceSource)) {
            settings.voiceSource = DEFAULTS.voiceSource;
        }
    }
    return settings;
};

const persist = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
        console.warn('设置保存失败(忽略)', error);
    }
};

export const getSettings = () => ({ ...load() });

export const getVoiceSource = () => load().voiceSource;

export const setVoiceSource = id => {
    if (!VOICE_SOURCES.some(source => source.id === id)) {
        return;
    }
    load();
    settings.voiceSource = id;
    persist();
};
