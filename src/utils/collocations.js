// 固定搭配: 自带释义, 不依赖词书
import collocationData from '@/data/collocations/index';
import * as stateStore from '@/utils/state';
import { hasRecord } from '@/utils/records';

export const listCollocationLevels = () => collocationData.map(c => c.level);

export const loadCollocationLevel = level => {
    const group = collocationData.find(c => c.level === level);
    if (!group) {
        return [];
    }
    return group.phrases.map(p => ({
        ...p,
        id: `collocation__${p.word}`,
        phonetic: '',
        partOfSpeech: 'phrase',
        examples: []
    }));
};

export const listCollocationsWithStats = async () => {
    await stateStore.whenReady();
    const state = stateStore.getState();
    return collocationData.map(group => {
        const words = group.phrases.map(p => ({ id: `collocation__${p.word}` }));
        let known = 0;
        let unknown = 0;
        words.forEach(word => {
            if (hasRecord(state.known, word.id)) known += 1;
            else if (hasRecord(state.unknown, word.id)) unknown += 1;
        });
        return { level: group.level, count: words.length, known, unknown, unread: words.length - known - unknown };
    });
};
