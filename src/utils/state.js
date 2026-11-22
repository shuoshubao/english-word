// 学习状态全局管理: favorites / known / unknown([{ id, time }] 记录数组), 改动后通知订阅者刷新
import { loadState, saveState, clearState } from '@/utils/storage';
import { hasRecord, removeRecord, upsertRecord, toRecords } from '@/utils/records';

export const blankState = { favorites: [], known: [], unknown: [] };

let state = { favorites: [], known: [], unknown: [] };
let ready = false;
let readyPromise = null;
const listeners = new Set();

const notify = () => {
    listeners.forEach(listener => listener(state));
};

export const getState = () => state;

export const isReady = () => ready;

// 分包按需加载, 启动时无法索引全部词库, 故不在此剔除词库中不存在的记录;
// 这类残留记录无害, 展示时按当前已加载词库过滤, 命不中就不显示.
export const whenReady = () => {
    if (!readyPromise) {
        readyPromise = (async () => {
            try {
                state = await loadState();
            } catch (error) {
                console.error('学习进度读取失败', error);
            }
            ready = true;
            notify();
        })();
    }
    return readyPromise;
};

export const subscribe = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

export const toggleFavorite = word => {
    const favorites = hasRecord(state.favorites, word.id) ? removeRecord(state.favorites, word.id) : upsertRecord(state.favorites, word.id, Date.now());
    state = { ...state, favorites };
    saveState(state);
    notify();
};

export const setKnowledge = (word, status) => {
    const known = removeRecord(state.known, word.id);
    const unknown = removeRecord(state.unknown, word.id);
    const time = Date.now();
    if (status === 'known') {
        known.push({ id: word.id, time });
    } else if (status === 'unknown') {
        unknown.push({ id: word.id, time });
    }
    state = { ...state, known, unknown };
    saveState(state);
    notify();
};

// 合并导入的进度: 所有记录按时间戳取最新; 一条记录最终归入 known 还是 unknown,
// 取决于它最新一次出现是在 known 还是 unknown 集合里(与 Web 版 merge 逻辑一致)
export const merge = next => {
    const imported = {
        favorites: toRecords(next?.favorites),
        known: toRecords(next?.known),
        unknown: toRecords(next?.unknown)
    };
    const latestById = records =>
        [...records].reduce((result, record) => {
            const existing = result.get(record.id);
            if (!existing || record.time > existing.time) {
                result.set(record.id, record);
            }
            return result;
        }, new Map());

    const favorites = [...latestById([...state.favorites, ...imported.favorites]).values()];
    const knowledge = latestById([...state.known, ...state.unknown, ...imported.known, ...imported.unknown]);
    const known = [...knowledge.values()].filter(record =>
        [...state.known, ...imported.known].some(item => item.id === record.id && item.time === record.time)
    );
    const unknown = [...knowledge.values()].filter(record =>
        [...state.unknown, ...imported.unknown].some(item => item.id === record.id && item.time === record.time)
    );
    state = { favorites, known, unknown };
    saveState(state);
    notify();
};

export const reset = async () => {
    await clearState();
    state = { favorites: [], known: [], unknown: [] };
    notify();
};
