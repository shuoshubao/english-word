// 持久化: localStorage. 对外(存储/导出)用「阶段嵌套 + word」结构, 内存用扁平 id 结构
//   (id = category__word), 读写边界互转.
import { toRecords } from './records';
import { vocabularyCatalog } from '../data/catalog';

const STORAGE_KEY = 'EnglishWord:state';

// 阶段 key 与内部 id 前缀(category)的映射:
const STAGE_KEYS = ['primary', 'junior', 'senior', 'cet4', 'cet6', 'collocation'];
const STAGEKEY2CAT = { primary: 'primary', junior: 'middle', senior: 'high', cet4: 'cet4', cet6: 'cet6', collocation: 'collocation' };
const CAT2STAGEKEY = { primary: 'primary', middle: 'junior', high: 'senior', cet4: 'cet4', cet6: 'cet6', collocation: 'collocation' };
// PTE 等显式声明 category 的词书: 每分类一个独立 stageKey(与 category 同名), 动态加入
vocabularyCatalog.forEach(book => {
    if (book.category) {
        STAGE_KEYS.push(book.category);
        STAGEKEY2CAT[book.category] = book.category;
        CAT2STAGEKEY[book.category] = book.category;
    }
});

// 扁平(id) -> 嵌套(word): 用于写入 / 导出
export const toNestedProgress = state => {
    const out = {};
    STAGE_KEYS.forEach(key => {
        out[key] = { favorites: [], known: [], unknown: [] };
    });
    ['favorites', 'known', 'unknown'].forEach(bucket => {
        (state?.[bucket] || []).forEach(record => {
            const id = String(record?.id || '');
            const i = id.indexOf('__');
            if (i < 0 || !Number.isFinite(record.time)) {
                return;
            }
            const stageKey = CAT2STAGEKEY[id.slice(0, i)];
            if (stageKey) {
                out[stageKey][bucket].push({ word: id.slice(i + 2), time: record.time });
            }
        });
    });
    return out;
};

// 嵌套(word)或旧版扁平(id) -> 扁平(id): 用于读取 / 导入, 兼容旧格式
export const toFlatProgress = progress => {
    if (!progress || typeof progress !== 'object') {
        return { favorites: [], known: [], unknown: [] };
    }
    // 旧版: 顶层直接是 favorites/known/unknown(记录已含 id)
    if ('favorites' in progress || 'known' in progress || 'unknown' in progress) {
        return normalizeState(progress);
    }
    // 新版: 阶段嵌套
    const flat = { favorites: [], known: [], unknown: [] };
    STAGE_KEYS.forEach(stageKey => {
        const cat = STAGEKEY2CAT[stageKey];
        const stage = progress[stageKey];
        if (!stage) {
            return;
        }
        ['favorites', 'known', 'unknown'].forEach(bucket => {
            (stage[bucket] || []).forEach(record => {
                if (record && record.word && Number.isFinite(record.time)) {
                    flat[bucket].push({ id: `${cat}__${record.word}`, time: record.time });
                }
            });
        });
    });
    return flat;
};

export const normalizeState = state => ({
    favorites: toRecords(state?.favorites),
    known: toRecords(state?.known),
    unknown: toRecords(state?.unknown)
});

export const getSyncStatus = () => ({ enabled: false, error: '' });

const readLocal = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    } catch {
        return null;
    }
};

export const loadState = async () => {
    const raw = readLocal();
    const progress = raw ? raw.progress || raw : null;
    return toFlatProgress(progress);
};

export const saveState = state => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ progress: toNestedProgress(state), updatedAt: Date.now() }));
    } catch (error) {
        console.error('本地保存失败', error);
    }
};

export const clearState = async () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch {
        // ignore
    }
};
