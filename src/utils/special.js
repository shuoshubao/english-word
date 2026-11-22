// 特殊单词: 词条自带释义, 不依赖词书索引; id 保留原词书前缀以沿用学习记录
import specialList from '@/data/special';
import * as stateStore from '@/utils/state';
import { hasRecord } from '@/utils/records';

export const loadSpecialCategory = title => {
    const category = specialList.find(item => item.title === title);
    return { category: category ?? null, words: category?.words ?? [] };
};

export const listSpecialWithStats = async () => {
    await stateStore.whenReady();
    const state = stateStore.getState();
    return specialList.map(category => {
        let known = 0;
        let unknown = 0;
        category.words.forEach(word => {
            if (hasRecord(state.known, word.id)) {
                known += 1;
            } else if (hasRecord(state.unknown, word.id)) {
                unknown += 1;
            }
        });
        return { title: category.title, count: category.words.length, known, unknown, unread: category.words.length - known - unknown };
    });
};
