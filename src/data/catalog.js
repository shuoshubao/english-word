// 词库目录与加载器
// - 小学(Primary)静态打进主包; 初中/高中/四六级/PTE 放分包, 运行时「分包异步化」按需加载.
// - data/<Stage>/*.js 每条词形如 { word, translation, phonetic, partOfSpeech, examples? }, 不含 id;
//   加载时在 decorate 里合成 id = `${category}__${word}`(与改版前一致, 保证已有学习进度不丢).
import p31 from '@/data/Primary/3-1.js';
import p32 from '@/data/Primary/3-2.js';
import p41 from '@/data/Primary/4-1.js';
import p42 from '@/data/Primary/4-2.js';
import p51 from '@/data/Primary/5-1.js';
import p52 from '@/data/Primary/5-2.js';
import p61 from '@/data/Primary/6-1.js';
import p62 from '@/data/Primary/6-2.js';

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
        wordCount: 129
    },
    {
        id: 'p6-2',
        stage: '小学',
        title: '六年级下册',
        wordCount: 107
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
        wordCount: 415
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
        wordCount: 488
    },
    {
        id: 'h-bx1',
        stage: '高中',
        title: '必修一',
        wordCount: 289
    },
    {
        id: 'h-bx2',
        stage: '高中',
        title: '必修二',
        wordCount: 298
    },
    {
        id: 'h-bx3',
        stage: '高中',
        title: '必修三',
        wordCount: 345
    },
    {
        id: 'h-bx4',
        stage: '高中',
        title: '必修四',
        wordCount: 294
    },
    {
        id: 'h-bx5',
        stage: '高中',
        title: '必修五',
        wordCount: 352
    },
    {
        id: 'h-xx6',
        stage: '高中',
        title: '选修六',
        wordCount: 377
    },
    {
        id: 'h-xx7',
        stage: '高中',
        title: '选修七',
        wordCount: 362
    },
    {
        id: 'h-xx8',
        stage: '高中',
        title: '选修八',
        wordCount: 408
    },
    {
        id: 'h-xx9',
        stage: '高中',
        title: '选修九',
        wordCount: 344
    },
    {
        id: 'h-xx10',
        stage: '高中',
        title: '选修十',
        wordCount: 354
    },
    {
        id: 'h-xx11',
        stage: '高中',
        title: '选修十一',
        wordCount: 291
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
    'm7-1': () => import('./Junior/7-1.js'),
    'm7-2': () => import('./Junior/7-2.js'),
    'm8-1': () => import('./Junior/8-1.js'),
    'm8-2': () => import('./Junior/8-2.js'),
    'm9-1': () => import('./Junior/9-1.js'),
    'h-bx1': () => import('./Senior/bixiu-1.js'),
    'h-bx2': () => import('./Senior/bixiu-2.js'),
    'h-bx3': () => import('./Senior/bixiu-3.js'),
    'h-bx4': () => import('./Senior/bixiu-4.js'),
    'h-bx5': () => import('./Senior/bixiu-5.js'),
    'h-xx6': () => import('./Senior/xuanxiu-6.js'),
    'h-xx7': () => import('./Senior/xuanxiu-7.js'),
    'h-xx8': () => import('./Senior/xuanxiu-8.js'),
    'h-xx9': () => import('./Senior/xuanxiu-9.js'),
    'h-xx10': () => import('./Senior/xuanxiu-10.js'),
    'h-xx11': () => import('./Senior/xuanxiu-11.js'),
    cet4: () => import('./CET/CET4/index.js'),
    cet6: () => import('./CET/CET6/index.js'),
    'pte-junior': () => import('./PTE/junior.js'),
    'pte-senior': () => import('./PTE/senior.js'),
    'pte-fib-r-junior': () => import('./PTE/fib-r-junior.js'),
    'pte-fib-r-senior': () => import('./PTE/fib-r-senior.js'),
    'pte-wfd': () => import('./PTE2/wfd.js'),
    'pte-fib-l': () => import('./PTE2/fib-l.js'),
    'pte-basic': () => import('./PTE2/basic.js'),
    'pte-advanced': () => import('./PTE2/advanced.js'),
    'pte-read': () => import('./PTE2/read.js'),
    'pte-listening': () => import('./PTE2/listening.js'),
    'pte-phrases': () => import('./PTE2/phrases.js')
};

// id 前缀 = 改版前的 category(保证旧进度 id 仍能命中): 小学 primary / 初中 middle / 高中 high / 四六级 cet4|cet6
const categoryOf = id => (id[0] === 'p' ? 'primary' : id[0] === 'm' ? 'middle' : id[0] === 'h' ? 'high' : id);

// 多音/变体音标清洗: 源数据里有的词(多为名/动不同重音, 如 survey、record, 或美音变体)把多个读音
// 塞进一个字符串, 形如 "ˈsɝˌve; (for v.) sɝˈve"、"(for v.) rɪˈkɔrd; (for n.) ˈrɛkɚd"、"dʌv; dov".
// 业界词典会分词性列多个读音, 但背单词类 App 通常只展示一个"主读音"保持简洁.
// 这里取第一个读音并去掉 (for v.)/(also)/strong form 等注释与斜杠, 只保留一条干净 IPA.
const cleanPhonetic = raw => {
    let s = String(raw || '').trim();
    if (!s) {
        return '';
    }
    s = s
        .replace(/\([^)]*\)/g, ' ')
        .replace(/strong form/gi, ' ')
        .replace(/\bor\b/gi, ';');
    s = s.split(/[;,]/)[0]; // 取第一个读音
    return s.replace(/\//g, '').replace(/\s+/g, ' ').trim();
};

// 给原始词条补上运行期字段: 合成 id、category、categoryLabel; 音标清洗成单一主读音
// category 优先取词书显式声明的(PTE 每分类一个独立一级 key), 否则按 id 前缀推断(保证旧进度 id 命中).
const decorate = (words, book) => {
    const category = book.category || categoryOf(book.id);
    return words.map(item => {
        return {
            ...item,
            phonetic: cleanPhonetic(item.phonetic),
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
