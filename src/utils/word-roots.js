// 词根词缀词组: 按规则从所有词书里筛单词
import rootList from '../data/word-roots/index';
import { vocabularyCatalog } from '../data/catalog';
import { getBookWords, ensureStages } from './words';

let builtWords = null; // 所有词书的扁平单词列表

const buildAllWords = () => {
    const seen = new Set();
    const all = [];
    vocabularyCatalog.forEach(book => {
        const words = getBookWords(book.id);
        words.forEach(word => {
            const key = word.word.toLowerCase();
            if (!seen.has(key)) {
                seen.add(key);
                all.push(word);
            }
        });
    });
    return all;
};

export const loadRootCategory = async title => {
    const category = rootList.find(c => c.title === title);
    if (!category) {
        return { category: null, words: [] };
    }
    if (!builtWords) {
        await ensureStages(['小学', '初中', '高中', 'CET4', 'CET6']);
        builtWords = buildAllWords();
    }
    let matched;
    if (category.type === 'prefix') {
        const m = category.match.toLowerCase();
        matched = builtWords.filter(w => w.word.toLowerCase().startsWith(m));
    } else if (category.type === 'suffix') {
        const m = category.match.toLowerCase();
        matched = builtWords.filter(w => w.word.toLowerCase().endsWith(m));
    } else {
        // exact: 指定词组列表
        const set = new Set(category.match.map(w => w.toLowerCase()));
        matched = builtWords.filter(w => set.has(w.word.toLowerCase()));
    }
    const words = [];
    const seen = new Set();
    matched.forEach(word => {
        const key = word.word.trim().toLowerCase();
        if (!seen.has(key)) {
            seen.add(key);
            words.push(word);
        }
    });
    console.log('[词根]', title, '匹配到', words.length, '词');
    return { category, words };
};

export const listRoots = () => rootList;
