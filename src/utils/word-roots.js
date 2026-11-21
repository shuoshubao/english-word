// 词根词缀词组: 按 title 取分类的 id 列表, 运行时还原词条
import rootList from '@/data/word-roots/index';
import { vocabularyCatalog } from '@/data/catalog';
import { getWordIndex, ensureStages } from '@/utils/words';

let stagesLoaded = false;

const ensureAllStages = async () => {
    if (stagesLoaded) {
        return;
    }
    const stages = [...new Set(vocabularyCatalog.map(book => book.stage))];
    await ensureStages(stages);
    stagesLoaded = true;
};

export const loadRootCategory = async title => {
    const category = rootList.find(c => c.title === title);
    if (!category) {
        return { category: null, words: [] };
    }
    await ensureAllStages();
    const { byId } = getWordIndex();
    const words = category.ids.map(id => byId[id]).filter(Boolean);
    console.log('[词根]', title, '匹配到', words.length, '词');
    return { category, words };
};

// 页面只需 title/type 分组, 不带 ids
export const listRoots = () => rootList.map(({ title, type }) => ({ title, type }));
