// 词根词缀词组: 运行时按规则从所有词书里筛单词
// type: prefix(前缀, startsWith) / suffix(后缀, endsWith) / exact(精确匹配, 词组)
export default [
    // ===== 前缀 =====
    {
        title: 'un- 不',
        type: 'prefix',
        match: 'un'
    },
    {
        title: 're- 再/回',
        type: 'prefix',
        match: 're'
    },
    {
        title: 'dis- 否定',
        type: 'prefix',
        match: 'dis'
    },
    {
        title: 'in-/im- 不/进入',
        type: 'prefix',
        match: 'in'
    },
    {
        title: 'mis- 错误',
        type: 'prefix',
        match: 'mis'
    },
    {
        title: 'pre- 预先',
        type: 'prefix',
        match: 'pre'
    },
    {
        title: 'over- 过度',
        type: 'prefix',
        match: 'over'
    },
    {
        title: 'under- 不足',
        type: 'prefix',
        match: 'under'
    },
    {
        title: 'inter- 相互',
        type: 'prefix',
        match: 'inter'
    },
    {
        title: 'trans- 横跨',
        type: 'prefix',
        match: 'trans'
    },
    {
        title: 'sub- 下/次',
        type: 'prefix',
        match: 'sub'
    },
    {
        title: 'super- 超级',
        type: 'prefix',
        match: 'super'
    },
    {
        title: 'tele- 远',
        type: 'prefix',
        match: 'tele'
    },

    // ===== 后缀 =====
    {
        title: '-er/-or 人/物',
        type: 'suffix',
        match: 'er'
    },
    {
        title: '-tion 名词',
        type: 'suffix',
        match: 'tion'
    },
    {
        title: '-ment 名词',
        type: 'suffix',
        match: 'ment'
    },
    {
        title: '-ness 名词',
        type: 'suffix',
        match: 'ness'
    },
    {
        title: '-ful 形容词',
        type: 'suffix',
        match: 'ful'
    },
    {
        title: '-less 无',
        type: 'suffix',
        match: 'less'
    },
    {
        title: '-able 能...的',
        type: 'suffix',
        match: 'able'
    },
    {
        title: '-ly 副词',
        type: 'suffix',
        match: 'ly'
    },
    {
        title: '-ous 形容词',
        type: 'suffix',
        match: 'ous'
    },
    {
        title: '-ive 形容词',
        type: 'suffix',
        match: 'ive'
    },
    {
        title: '-ist 人',
        type: 'suffix',
        match: 'ist'
    },
    {
        title: '-ize 动词',
        type: 'suffix',
        match: 'ize'
    },

    // ===== 高频动词词组 =====
    {
        title: 'look 词组',
        type: 'exact',
        match: ['look up', 'look for', 'look after', 'look forward to', 'look out', 'look like']
    },
    {
        title: 'take 词组',
        type: 'exact',
        match: ['take off', 'take care of', 'take part in', 'take place', 'take away', 'take out']
    },
    {
        title: 'get 词组',
        type: 'exact',
        match: ['get up', 'get on', 'get off', 'get along with', 'get back', 'get over']
    },
    {
        title: 'put 词组',
        type: 'exact',
        match: ['put on', 'put off', 'put up with', 'put away', 'put out']
    },
    {
        title: 'turn 词组',
        type: 'exact',
        match: ['turn on', 'turn off', 'turn down', 'turn out', 'turn up']
    },
    {
        title: 'give 词组',
        type: 'exact',
        match: ['give up', 'give in', 'give away', 'give back']
    },
    {
        title: 'make 词组',
        type: 'exact',
        match: ['make up', 'make sure', 'make progress', 'make a decision']
    }
];
