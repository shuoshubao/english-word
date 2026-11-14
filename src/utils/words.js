// 词库数据访问
// - 主包小学词书可同步取; 初中/高中/四六级在分包, 必须先 ensureBookWords 异步加载, 之后才能同步取.
// - getWordIndex 只索引"已加载"的词书(生词本/收藏页会先 ensureStages 把需要的阶段拉起来).
import { vocabularyCatalog, loadBookWordsSync, loadBookWordsAsync, isMainBook } from '../data/catalog';

const bookCache = {};

// 同步取某本词书(仅主包小学或已缓存的分包); 其余返回空数组
export const getBookWords = bookId => {
    if (!bookCache[bookId]) {
        const sync = loadBookWordsSync(bookId);
        if (sync) {
            bookCache[bookId] = sync;
        }
    }
    return bookCache[bookId] || [];
};

// 异步确保某本词书已加载(分包会按需下载); 返回该书单词
export const ensureBookWords = async bookId => {
    if (!bookCache[bookId]) {
        bookCache[bookId] = await loadBookWordsAsync(bookId);
    }
    return bookCache[bookId];
};

// 异步确保若干阶段的全部词书已加载; 单本失败不影响其它(至少主包小学能正常展示)
export const ensureStages = async stageList => {
    const ids = vocabularyCatalog.filter(book => stageList.includes(book.stage)).map(book => book.id);
    await Promise.all(
        ids.map(id =>
            ensureBookWords(id).catch(error => {
                console.warn('分包词书加载失败', id, error);
                return null;
            })
        )
    );
};

// 预加载主包的小学词书(同步, 启动即可用)
const preloadMain = () => {
    vocabularyCatalog.forEach(book => {
        if (isMainBook(book.id)) {
            getBookWords(book.id);
        }
    });
};

// 基于"当前已加载"的词书构建索引: { byId, byStage }. 不会触发分包下载.
export const getWordIndex = () => {
    preloadMain();
    const byId = {};
    const byStage = {};
    vocabularyCatalog.forEach(book => {
        byStage[book.stage] = byStage[book.stage] || [];
        const words = bookCache[book.id];
        if (!words) {
            return;
        }
        const stageIds = new Set(byStage[book.stage].map(word => word.id));
        words.forEach(word => {
            byId[word.id] = word;
            if (!stageIds.has(word.id)) {
                stageIds.add(word.id);
                byStage[book.stage].push(word);
            }
        });
    });
    return { byId, byStage };
};
