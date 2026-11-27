// 词库目录与加载器
// - 小学(Primary)静态打进主包; 初中/高中/四六级/PTE 放分包, 运行时「分包异步化」按需加载.
// - 词书是 data/<Stage>/*.json, 每条词形如 { word, ph_en, ph_am, parts, exchange, examples: [{ src, dst }], synonyms, antonyms, confuse }, 不含 id;
//   加载时在 decorate 里合成 id = `${category}__${word}`(与改版前一致, 保证已有学习进度不丢).
import p31 from '@/data/Primary/3-1.json';
import p32 from '@/data/Primary/3-2.json';
import p41 from '@/data/Primary/4-1.json';
import p42 from '@/data/Primary/4-2.json';
import p51 from '@/data/Primary/5-1.json';
import p52 from '@/data/Primary/5-2.json';
import p61 from '@/data/Primary/6-1.json';
import p62 from '@/data/Primary/6-2.json';

export const vocabularyCatalog = [
    {
        id: 'p3-1',
        stage: '小学',
        title: '三年级上册',
        wordCount: 64
    },
    {
        id: 'p3-2',
        stage: '小学',
        title: '三年级下册',
        wordCount: 70
    },
    {
        id: 'p4-1',
        stage: '小学',
        title: '四年级上册',
        wordCount: 84
    },
    {
        id: 'p4-2',
        stage: '小学',
        title: '四年级下册',
        wordCount: 100
    },
    {
        id: 'p5-1',
        stage: '小学',
        title: '五年级上册',
        wordCount: 131
    },
    {
        id: 'p5-2',
        stage: '小学',
        title: '五年级下册',
        wordCount: 152
    },
    {
        id: 'p6-1',
        stage: '小学',
        title: '六年级上册',
        wordCount: 124
    },
    {
        id: 'p6-2',
        stage: '小学',
        title: '六年级下册',
        wordCount: 106
    },
    {
        id: 'm7-1',
        stage: '初中',
        title: '七年级上册',
        wordCount: 389
    },
    {
        id: 'm7-2',
        stage: '初中',
        title: '七年级下册',
        wordCount: 475
    },
    {
        id: 'm8-1',
        stage: '初中',
        title: '八年级上册',
        wordCount: 413
    },
    {
        id: 'm8-2',
        stage: '初中',
        title: '八年级下册',
        wordCount: 458
    },
    {
        id: 'm9-1',
        stage: '初中',
        title: '九年级上册',
        wordCount: 479
    },
    {
        id: 'h-bx1',
        stage: '高中',
        title: '必修一',
        wordCount: 284
    },
    {
        id: 'h-bx2',
        stage: '高中',
        title: '必修二',
        wordCount: 295
    },
    {
        id: 'h-bx3',
        stage: '高中',
        title: '必修三',
        wordCount: 341
    },
    {
        id: 'h-bx4',
        stage: '高中',
        title: '必修四',
        wordCount: 285
    },
    {
        id: 'h-bx5',
        stage: '高中',
        title: '必修五',
        wordCount: 344
    },
    {
        id: 'h-xx6',
        stage: '高中',
        title: '选修六',
        wordCount: 369
    },
    {
        id: 'h-xx7',
        stage: '高中',
        title: '选修七',
        wordCount: 353
    },
    {
        id: 'h-xx8',
        stage: '高中',
        title: '选修八',
        wordCount: 399
    },
    {
        id: 'h-xx9',
        stage: '高中',
        title: '选修九',
        wordCount: 323
    },
    {
        id: 'h-xx10',
        stage: '高中',
        title: '选修十',
        wordCount: 320
    },
    {
        id: 'h-xx11',
        stage: '高中',
        title: '选修十一',
        wordCount: 286
    },
    {
        id: 'cet4',
        stage: 'CET4',
        title: '大学英语四级',
        wordCount: 4511
    },
    {
        id: 'cet6',
        stage: 'CET6',
        title: '大学英语六级',
        wordCount: 3988
    },
    // PTE 阶段: 11 个分类, 每分类一个独立 category(一级 key, 不与其它词书共用), 顺序同词库页截图
    {
        id: 'pte-junior',
        stage: 'PTE',
        title: '基础词汇',
        category: 'pte_junior',
        wordCount: 2649
    },
    {
        id: 'pte-senior',
        stage: 'PTE',
        title: '高阶词汇',
        category: 'pte_senior',
        wordCount: 3164
    },
    {
        id: 'pte-fib-r-junior',
        stage: 'PTE',
        title: '阅读FIB基础机经词汇',
        category: 'pte_fib_r_junior',
        wordCount: 941
    },
    {
        id: 'pte-fib-r-senior',
        stage: 'PTE',
        title: '阅读FIB高阶机经词汇',
        category: 'pte_fib_r_senior',
        wordCount: 1271
    },
    {
        id: 'pte-wfd',
        stage: 'PTE',
        title: 'WFD机经词汇',
        category: 'pte_wfd',
        wordCount: 1208
    },
    {
        id: 'pte-fib-l',
        stage: 'PTE',
        title: '听力FIB机经词汇',
        category: 'pte_fib_l',
        wordCount: 645
    },
    {
        id: 'pte-basic',
        stage: 'PTE',
        title: '基础词汇猩际',
        category: 'pte_basic',
        wordCount: 2649
    },
    {
        id: 'pte-advanced',
        stage: 'PTE',
        title: '高阶词汇猩际',
        category: 'pte_advanced',
        wordCount: 3163
    },
    {
        id: 'pte-read',
        stage: 'PTE',
        title: '阅读FIB机经词汇猩际',
        category: 'pte_read',
        wordCount: 629
    },
    {
        id: 'pte-listening',
        stage: 'PTE',
        title: '听力FIB机经词汇猩际',
        category: 'pte_listening',
        wordCount: 671
    },
    {
        id: 'pte-phrases',
        stage: 'PTE',
        title: '常用短语',
        category: 'pte_phrases',
        wordCount: 274
    }
];

// 展示顺序: PTE 在最前(六级前), 其余倒序, 小学放最后
export const stages = ['PTE', 'CET6', 'CET4', '高中', '初中', '小学'];

// 主包词书(小学): 静态打进主包
const mainBooks = {
    'p3-1': p31,
    'p3-2': p32,
    'p4-1': p41,
    'p4-2': p42,
    'p5-1': p51,
    'p5-2': p52,
    'p6-1': p61,
    'p6-2': p62
};

// 分包词书: 动态 import() 按需加载(自动代码分割)
const pick = mod => (mod?.default ? mod.default : mod);
const subLoaders = {
    'm7-1': () => import('./Junior/7-1.json'),
    'm7-2': () => import('./Junior/7-2.json'),
    'm8-1': () => import('./Junior/8-1.json'),
    'm8-2': () => import('./Junior/8-2.json'),
    'm9-1': () => import('./Junior/9-1.json'),
    'h-bx1': () => import('./Senior/bixiu-1.json'),
    'h-bx2': () => import('./Senior/bixiu-2.json'),
    'h-bx3': () => import('./Senior/bixiu-3.json'),
    'h-bx4': () => import('./Senior/bixiu-4.json'),
    'h-bx5': () => import('./Senior/bixiu-5.json'),
    'h-xx6': () => import('./Senior/xuanxiu-6.json'),
    'h-xx7': () => import('./Senior/xuanxiu-7.json'),
    'h-xx8': () => import('./Senior/xuanxiu-8.json'),
    'h-xx9': () => import('./Senior/xuanxiu-9.json'),
    'h-xx10': () => import('./Senior/xuanxiu-10.json'),
    'h-xx11': () => import('./Senior/xuanxiu-11.json'),
    cet4: () => import('./CET/CET4/index.json'),
    cet6: () => import('./CET/CET6/index.json'),
    'pte-junior': () => import('./PTE/junior.json'),
    'pte-senior': () => import('./PTE/senior.json'),
    'pte-fib-r-junior': () => import('./PTE/fib-r-junior.json'),
    'pte-fib-r-senior': () => import('./PTE/fib-r-senior.json'),
    'pte-wfd': () => import('./PTE2/wfd.json'),
    'pte-fib-l': () => import('./PTE2/fib-l.json'),
    'pte-basic': () => import('./PTE2/basic.json'),
    'pte-advanced': () => import('./PTE2/advanced.json'),
    'pte-read': () => import('./PTE2/read.json'),
    'pte-listening': () => import('./PTE2/listening.json'),
    'pte-phrases': () => import('./PTE2/phrases.json')
};

// id 前缀 = 改版前的 category(保证旧进度 id 仍能命中): 小学 primary / 初中 middle / 高中 high / 四六级 cet4|cet6
const categoryOf = id => (id[0] === 'p' ? 'primary' : id[0] === 'm' ? 'middle' : id[0] === 'h' ? 'high' : id);

// 给原始词条补上运行期字段: 合成 id、category、categoryLabel
// category 优先取词书显式声明的(PTE 每分类一个独立一级 key), 否则按 id 前缀推断(保证旧进度 id 命中).
const decorate = (words, book) => {
    const category = book.category || categoryOf(book.id);
    return words.map(item => {
        return {
            ...item,
            id: `${category}__${item.word}`,
            category,
            categoryLabel: book.stage
        };
    });
};

// 分包异步化: 用动态 import() 异步拉起分包里的词书模块
const loadSub = async id => {
    const loader = subLoaders[id];
    if (!loader) {
        throw new Error(`未知词书: ${id}`);
    }
    const mod = await loader();
    return pick(mod);
};

export const isMainBook = id => Boolean(mainBooks[id]);

// 同步加载(仅主包小学可用); 分包词书返回 null, 需走 loadBookWordsAsync
export const loadBookWordsSync = id => {
    const book = vocabularyCatalog.find(item => item.id === id);
    if (!book || !mainBooks[id]) {
        return null;
    }
    return decorate(mainBooks[id], book);
};

// 异步加载(任意词书); 主包直接返回, 分包按需下载
export const loadBookWordsAsync = async id => {
    const book = vocabularyCatalog.find(item => item.id === id);
    if (!book) {
        return [];
    }
    if (mainBooks[id]) {
        return decorate(mainBooks[id], book);
    }
    const words = await loadSub(id);
    return decorate(words, book);
};
