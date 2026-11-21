// 主题分类词表加载: 按 word 跨词书查完整词条, 跨书合并去重
import topicList from '@/data/topic/index';
import { vocabularyCatalog } from '@/data/catalog';
import { getBookWords, ensureStages } from '@/utils/words';
import * as stateStore from '@/utils/state';
import { hasRecord } from '@/utils/records';

let builtIndex = null; // word(lowercase) -> 合并后的词条

// 合并两个词条: examples 去重合并, translation 取更长的, phonetic 优先取有值的
const mergeWord = (a, b) => {
    const merged = { ...a };
    if (b.examples) {
        const enSet = new Set((merged.examples || []).map(e => e.en));
        b.examples.forEach(e => {
            if (!enSet.has(e.en)) {
                merged.examples = merged.examples || [];
                merged.examples.push(e);
            }
        });
    }
    if ((b.translation || '').length > (merged.translation || '').length) {
        merged.translation = b.translation;
    }
    if (!merged.phonetic && b.phonetic) {
        merged.phonetic = b.phonetic;
    }
    if (!merged.partOfSpeech && b.partOfSpeech) {
        merged.partOfSpeech = b.partOfSpeech;
    }
    return merged;
};

// 构建全局 word -> 词条 索引(只对已加载的词书)
const buildIndex = () => {
    const index = {};
    vocabularyCatalog.forEach(book => {
        const words = getBookWords(book.id);
        words.forEach(word => {
            const key = word.word.toLowerCase();
            if (!index[key]) {
                index[key] = { ...word };
            } else {
                index[key] = mergeWord(index[key], word);
            }
        });
    });
    return index;
};

// 确保所有阶段词书已加载(主题分类需要跨书查词条)
export const loadTopicCategory = async title => {
    const category = topicList.find(c => c.title === title);
    if (!category) {
        return { category: null, words: [] };
    }
    if (!builtIndex) {
        console.log('[主题] 首次加载, 构建索引...');
        await ensureStages(['小学', '初中', '高中', 'CET4', 'CET6']);
        builtIndex = buildIndex();
        console.log('[主题] 索引构建完成, 共', Object.keys(builtIndex).length, '词');
    }
    // 按分类 words 列表取词条, 保持分类顺序; 查不到的词跳过.
    // 不覆盖 id: 保留词书里原有的 id(如 middle__January), 学习进度与词书互通.
    const words = category.words.map(w => builtIndex[w.toLowerCase()]).filter(Boolean);
    console.log('[主题]', title, '匹配到', words.length, '/', category.words.length, '词');
    return { category, words };
};

// 所有分类(带单词数, 供列表页展示)
export const listTopics = () => topicList;

// 所有分类(带统计: 总数/已认识/不认识/未读)
export const listTopicsWithStats = async () => {
    if (!builtIndex) {
        await ensureStages(['小学', '初中', '高中', 'CET4', 'CET6']);
        builtIndex = buildIndex();
    }
    await stateStore.whenReady();
    const state = stateStore.getState();
    return topicList.map(t => {
        const words = t.words.map(w => builtIndex[w.toLowerCase()]).filter(Boolean);
        let known = 0;
        let unknown = 0;
        words.forEach(word => {
            if (hasRecord(state.known, word.id)) known += 1;
            else if (hasRecord(state.unknown, word.id)) unknown += 1;
        });
        return { title: t.title, count: words.length, known, unknown, unread: words.length - known - unknown };
    });
};
