// 不规则动词时态表: 数据来自用户提供的 xlsx(不规则动词清单.xlsx)
// 二级分类按阶段分块(小学/初中/高中/四级/六级)
// 四级保留全部; 六级去掉与四级重复的原形, 只留四级没有的
// 结构: { word 原形, past 过去式, participle 过去分词, type 类型, cn 词义 }
// 已学会进度以原形 word 为 key 统一存储, 不分阶段
export default {
    小学: [
        {
            word: 'be',
            past: 'was/were',
            participle: 'been',
            type: 'ABC',
            cn: '是；存在'
        },
        {
            word: 'begin',
            past: 'began',
            participle: 'begun',
            type: 'ABC',
            cn: '开始'
        },
        {
            word: 'bring',
            past: 'brought',
            participle: 'brought',
            type: 'ABB',
            cn: '带来'
        },
        {
            word: 'buy',
            past: 'bought',
            participle: 'bought',
            type: 'ABB',
            cn: '买'
        },
        {
            word: 'catch',
            past: 'caught',
            participle: 'caught',
            type: 'ABB',
            cn: '抓住'
        },
        {
            word: 'come',
            past: 'came',
            participle: 'come',
            type: 'ABA',
            cn: '来'
        },
        {
            word: 'cut',
            past: 'cut',
            participle: 'cut',
            type: 'AAA',
            cn: '切；剪'
        },
        {
            word: 'do',
            past: 'did',
            participle: 'done',
            type: 'ABC',
            cn: '做'
        },
        {
            word: 'drink',
            past: 'drank',
            participle: 'drunk',
            type: 'ABC',
            cn: '喝'
        },
        {
            word: 'eat',
            past: 'ate',
            participle: 'eaten',
            type: 'ABC',
            cn: '吃'
        },
        {
            word: 'find',
            past: 'found',
            participle: 'found',
            type: 'ABB',
            cn: '找到'
        },
        {
            word: 'fly',
            past: 'flew',
            participle: 'flown',
            type: 'ABC',
            cn: '飞'
        },
        {
            word: 'get',
            past: 'got',
            participle: 'got',
            type: 'ABB',
            cn: '得到；变得'
        },
        {
            word: 'give',
            past: 'gave',
            participle: 'given',
            type: 'ABC',
            cn: '给'
        },
        {
            word: 'go',
            past: 'went',
            participle: 'gone',
            type: 'ABC',
            cn: '去'
        },
        {
            word: 'grow',
            past: 'grew',
            participle: 'grown',
            type: 'ABC',
            cn: '生长'
        },
        {
            word: 'have',
            past: 'had',
            participle: 'had',
            type: 'ABB',
            cn: '有'
        },
        {
            word: 'know',
            past: 'knew',
            participle: 'known',
            type: 'ABC',
            cn: '知道'
        },
        {
            word: 'make',
            past: 'made',
            participle: 'made',
            type: 'ABB',
            cn: '制作'
        },
        {
            word: 'put',
            past: 'put',
            participle: 'put',
            type: 'AAA',
            cn: '放'
        },
        {
            word: 'read',
            past: 'read',
            participle: 'read',
            type: 'AAA',
            cn: '读'
        },
        {
            word: 'run',
            past: 'ran',
            participle: 'run',
            type: 'ABA',
            cn: '跑'
        },
        {
            word: 'see',
            past: 'saw',
            participle: 'seen',
            type: 'ABC',
            cn: '看见'
        },
        {
            word: 'sing',
            past: 'sang',
            participle: 'sung',
            type: 'ABC',
            cn: '唱'
        },
        {
            word: 'sit',
            past: 'sat',
            participle: 'sat',
            type: 'ABB',
            cn: '坐'
        },
        {
            word: 'speak',
            past: 'spoke',
            participle: 'spoken',
            type: 'ABC',
            cn: '说'
        },
        {
            word: 'swim',
            past: 'swam',
            participle: 'swum',
            type: 'ABC',
            cn: '游泳'
        },
        {
            word: 'take',
            past: 'took',
            participle: 'taken',
            type: 'ABC',
            cn: '拿；带走'
        },
        {
            word: 'teach',
            past: 'taught',
            participle: 'taught',
            type: 'ABB',
            cn: '教'
        },
        {
            word: 'think',
            past: 'thought',
            participle: 'thought',
            type: 'ABB',
            cn: '想'
        },
        {
            word: 'write',
            past: 'wrote',
            participle: 'written',
            type: 'ABC',
            cn: '写'
        }
    ],
    初中: [
        {
            word: 'be',
            past: 'was/were',
            participle: 'been',
            type: 'ABC',
            cn: '是；存在'
        },
        {
            word: 'beat',
            past: 'beat',
            participle: 'beaten',
            type: 'AAB',
            cn: '打；击败'
        },
        {
            word: 'become',
            past: 'became',
            participle: 'become',
            type: 'ABA',
            cn: '变成'
        },
        {
            word: 'begin',
            past: 'began',
            participle: 'begun',
            type: 'ABC',
            cn: '开始'
        },
        {
            word: 'bind',
            past: 'bound',
            participle: 'bound',
            type: 'ABB',
            cn: '捆绑；束缚'
        },
        {
            word: 'bite',
            past: 'bit',
            participle: 'bitten',
            type: 'ABC',
            cn: '咬'
        },
        {
            word: 'blow',
            past: 'blew',
            participle: 'blown',
            type: 'ABC',
            cn: '吹'
        },
        {
            word: 'break',
            past: 'broke',
            participle: 'broken',
            type: 'ABC',
            cn: '打破'
        },
        {
            word: 'bring',
            past: 'brought',
            participle: 'brought',
            type: 'ABB',
            cn: '带来'
        },
        {
            word: 'build',
            past: 'built',
            participle: 'built',
            type: 'ABB',
            cn: '建造'
        },
        {
            word: 'burn',
            past: 'burnt/burned',
            participle: 'burnt/burned',
            type: 'ABB',
            cn: '燃烧；烧'
        },
        {
            word: 'burst',
            past: 'burst',
            participle: 'burst',
            type: 'AAA',
            cn: '爆裂；爆发'
        },
        {
            word: 'buy',
            past: 'bought',
            participle: 'bought',
            type: 'ABB',
            cn: '买'
        },
        {
            word: 'catch',
            past: 'caught',
            participle: 'caught',
            type: 'ABB',
            cn: '抓住'
        },
        {
            word: 'choose',
            past: 'chose',
            participle: 'chosen',
            type: 'ABC',
            cn: '选择'
        },
        {
            word: 'come',
            past: 'came',
            participle: 'come',
            type: 'ABA',
            cn: '来'
        },
        {
            word: 'cost',
            past: 'cost',
            participle: 'cost',
            type: 'AAA',
            cn: '花费'
        },
        {
            word: 'cut',
            past: 'cut',
            participle: 'cut',
            type: 'AAA',
            cn: '切；剪'
        },
        {
            word: 'deal',
            past: 'dealt',
            participle: 'dealt',
            type: 'ABB',
            cn: '处理；交易'
        },
        {
            word: 'dig',
            past: 'dug',
            participle: 'dug',
            type: 'ABB',
            cn: '挖'
        },
        {
            word: 'do',
            past: 'did',
            participle: 'done',
            type: 'ABC',
            cn: '做'
        },
        {
            word: 'draw',
            past: 'drew',
            participle: 'drawn',
            type: 'ABC',
            cn: '画；拉'
        },
        {
            word: 'dream',
            past: 'dreamt/dreamed',
            participle: 'dreamt/dreamed',
            type: 'ABB',
            cn: '做梦；梦想'
        },
        {
            word: 'drink',
            past: 'drank',
            participle: 'drunk',
            type: 'ABC',
            cn: '喝'
        },
        {
            word: 'drive',
            past: 'drove',
            participle: 'driven',
            type: 'ABC',
            cn: '驾驶'
        },
        {
            word: 'eat',
            past: 'ate',
            participle: 'eaten',
            type: 'ABC',
            cn: '吃'
        },
        {
            word: 'fall',
            past: 'fell',
            participle: 'fallen',
            type: 'ABC',
            cn: '落下；跌倒'
        },
        {
            word: 'feed',
            past: 'fed',
            participle: 'fed',
            type: 'ABB',
            cn: '喂养'
        },
        {
            word: 'feel',
            past: 'felt',
            participle: 'felt',
            type: 'ABB',
            cn: '感觉'
        },
        {
            word: 'fight',
            past: 'fought',
            participle: 'fought',
            type: 'ABB',
            cn: '战斗；打架'
        },
        {
            word: 'find',
            past: 'found',
            participle: 'found',
            type: 'ABB',
            cn: '找到'
        },
        {
            word: 'fly',
            past: 'flew',
            participle: 'flown',
            type: 'ABC',
            cn: '飞'
        },
        {
            word: 'forget',
            past: 'forgot',
            participle: 'forgotten',
            type: 'ABC',
            cn: '忘记'
        },
        {
            word: 'forgive',
            past: 'forgave',
            participle: 'forgiven',
            type: 'ABC',
            cn: '原谅'
        },
        {
            word: 'get',
            past: 'got',
            participle: 'got',
            type: 'ABB',
            cn: '得到；变得'
        },
        {
            word: 'give',
            past: 'gave',
            participle: 'given',
            type: 'ABC',
            cn: '给'
        },
        {
            word: 'go',
            past: 'went',
            participle: 'gone',
            type: 'ABC',
            cn: '去'
        },
        {
            word: 'grow',
            past: 'grew',
            participle: 'grown',
            type: 'ABC',
            cn: '生长'
        },
        {
            word: 'hang',
            past: 'hung',
            participle: 'hung',
            type: 'ABB',
            cn: '悬挂；吊'
        },
        {
            word: 'have',
            past: 'had',
            participle: 'had',
            type: 'ABB',
            cn: '有'
        },
        {
            word: 'hear',
            past: 'heard',
            participle: 'heard',
            type: 'ABB',
            cn: '听见'
        },
        {
            word: 'hide',
            past: 'hid',
            participle: 'hidden',
            type: 'ABC',
            cn: '藏；躲'
        },
        {
            word: 'hit',
            past: 'hit',
            participle: 'hit',
            type: 'AAA',
            cn: '打；击中'
        },
        {
            word: 'hold',
            past: 'held',
            participle: 'held',
            type: 'ABB',
            cn: '握住；举行'
        },
        {
            word: 'hurt',
            past: 'hurt',
            participle: 'hurt',
            type: 'AAA',
            cn: '伤害'
        },
        {
            word: 'keep',
            past: 'kept',
            participle: 'kept',
            type: 'ABB',
            cn: '保持'
        },
        {
            word: 'know',
            past: 'knew',
            participle: 'known',
            type: 'ABC',
            cn: '知道'
        },
        {
            word: 'lead',
            past: 'led',
            participle: 'led',
            type: 'ABB',
            cn: '带领；领导'
        },
        {
            word: 'learn',
            past: 'learnt/learned',
            participle: 'learnt/learned',
            type: 'ABB',
            cn: '学习'
        },
        {
            word: 'leave',
            past: 'left',
            participle: 'left',
            type: 'ABB',
            cn: '离开'
        },
        {
            word: 'lend',
            past: 'lent',
            participle: 'lent',
            type: 'ABB',
            cn: '借出'
        },
        {
            word: 'let',
            past: 'let',
            participle: 'let',
            type: 'AAA',
            cn: '让；允许'
        },
        {
            word: 'light',
            past: 'lit/lighted',
            participle: 'lit/lighted',
            type: 'ABB',
            cn: '点燃；照亮'
        },
        {
            word: 'lose',
            past: 'lost',
            participle: 'lost',
            type: 'ABB',
            cn: '失去；输'
        },
        {
            word: 'make',
            past: 'made',
            participle: 'made',
            type: 'ABB',
            cn: '制作'
        },
        {
            word: 'mean',
            past: 'meant',
            participle: 'meant',
            type: 'ABB',
            cn: '意味着；打算'
        },
        {
            word: 'meet',
            past: 'met',
            participle: 'met',
            type: 'ABB',
            cn: '遇见；会面'
        },
        {
            word: 'pay',
            past: 'paid',
            participle: 'paid',
            type: 'ABB',
            cn: '支付'
        },
        {
            word: 'put',
            past: 'put',
            participle: 'put',
            type: 'AAA',
            cn: '放'
        },
        {
            word: 'read',
            past: 'read',
            participle: 'read',
            type: 'AAA',
            cn: '读'
        },
        {
            word: 'ride',
            past: 'rode',
            participle: 'ridden',
            type: 'ABC',
            cn: '骑'
        },
        {
            word: 'ring',
            past: 'rang',
            participle: 'rung',
            type: 'ABC',
            cn: '响铃；打电话'
        },
        {
            word: 'rise',
            past: 'rose',
            participle: 'risen',
            type: 'ABC',
            cn: '升起；上涨'
        },
        {
            word: 'run',
            past: 'ran',
            participle: 'run',
            type: 'ABA',
            cn: '跑'
        },
        {
            word: 'say',
            past: 'said',
            participle: 'said',
            type: 'ABB',
            cn: '说'
        },
        {
            word: 'see',
            past: 'saw',
            participle: 'seen',
            type: 'ABC',
            cn: '看见'
        },
        {
            word: 'sell',
            past: 'sold',
            participle: 'sold',
            type: 'ABB',
            cn: '卖'
        },
        {
            word: 'send',
            past: 'sent',
            participle: 'sent',
            type: 'ABB',
            cn: '送；寄'
        },
        {
            word: 'set',
            past: 'set',
            participle: 'set',
            type: 'AAA',
            cn: '设置；放置'
        },
        {
            word: 'shake',
            past: 'shook',
            participle: 'shaken',
            type: 'ABC',
            cn: '摇；震动'
        },
        {
            word: 'shine',
            past: 'shone',
            participle: 'shone',
            type: 'ABB',
            cn: '照耀；发光'
        },
        {
            word: 'shoot',
            past: 'shot',
            participle: 'shot',
            type: 'ABB',
            cn: '射击'
        },
        {
            word: 'shut',
            past: 'shut',
            participle: 'shut',
            type: 'AAA',
            cn: '关闭'
        },
        {
            word: 'sing',
            past: 'sang',
            participle: 'sung',
            type: 'ABC',
            cn: '唱'
        },
        {
            word: 'sink',
            past: 'sank',
            participle: 'sunk',
            type: 'ABC',
            cn: '下沉'
        },
        {
            word: 'sit',
            past: 'sat',
            participle: 'sat',
            type: 'ABB',
            cn: '坐'
        },
        {
            word: 'sleep',
            past: 'slept',
            participle: 'slept',
            type: 'ABB',
            cn: '睡觉'
        },
        {
            word: 'smell',
            past: 'smelt/smelled',
            participle: 'smelt/smelled',
            type: 'ABB',
            cn: '闻；有气味'
        },
        {
            word: 'speak',
            past: 'spoke',
            participle: 'spoken',
            type: 'ABC',
            cn: '说'
        },
        {
            word: 'spend',
            past: 'spent',
            participle: 'spent',
            type: 'ABB',
            cn: '花费（时间/钱）'
        },
        {
            word: 'spring',
            past: 'sprang/sprung',
            participle: 'sprung',
            type: 'ABC',
            cn: '跳跃；涌现'
        },
        {
            word: 'stand',
            past: 'stood',
            participle: 'stood',
            type: 'ABB',
            cn: '站'
        },
        {
            word: 'steal',
            past: 'stole',
            participle: 'stolen',
            type: 'ABC',
            cn: '偷'
        },
        {
            word: 'stick',
            past: 'stuck',
            participle: 'stuck',
            type: 'ABB',
            cn: '粘；卡住'
        },
        {
            word: 'strike',
            past: 'struck',
            participle: 'struck',
            type: 'ABB',
            cn: '打击；罢工'
        },
        {
            word: 'swim',
            past: 'swam',
            participle: 'swum',
            type: 'ABC',
            cn: '游泳'
        },
        {
            word: 'swing',
            past: 'swung',
            participle: 'swung',
            type: 'ABB',
            cn: '摇摆'
        },
        {
            word: 'take',
            past: 'took',
            participle: 'taken',
            type: 'ABC',
            cn: '拿；带走'
        },
        {
            word: 'teach',
            past: 'taught',
            participle: 'taught',
            type: 'ABB',
            cn: '教'
        },
        {
            word: 'tear',
            past: 'tore',
            participle: 'torn',
            type: 'ABC',
            cn: '撕；流泪'
        },
        {
            word: 'tell',
            past: 'told',
            participle: 'told',
            type: 'ABB',
            cn: '告诉'
        },
        {
            word: 'think',
            past: 'thought',
            participle: 'thought',
            type: 'ABB',
            cn: '想；认为'
        },
        {
            word: 'throw',
            past: 'threw',
            participle: 'thrown',
            type: 'ABC',
            cn: '扔'
        },
        {
            word: 'understand',
            past: 'understood',
            participle: 'understood',
            type: 'ABB',
            cn: '理解'
        },
        {
            word: 'wake',
            past: 'woke',
            participle: 'woken',
            type: 'ABC',
            cn: '醒来；唤醒'
        },
        {
            word: 'wear',
            past: 'wore',
            participle: 'worn',
            type: 'ABC',
            cn: '穿；戴'
        },
        {
            word: 'win',
            past: 'won',
            participle: 'won',
            type: 'ABB',
            cn: '赢'
        },
        {
            word: 'write',
            past: 'wrote',
            participle: 'written',
            type: 'ABC',
            cn: '写'
        }
    ],
    高中: [
        {
            word: 'arise',
            past: 'arose',
            participle: 'arisen',
            type: 'ABC',
            cn: '出现；升起'
        },
        {
            word: 'awake',
            past: 'awoke',
            participle: 'awoken',
            type: 'ABC',
            cn: '唤醒；醒来'
        },
        {
            word: 'be',
            past: 'was/were',
            participle: 'been',
            type: 'ABC',
            cn: '是；存在'
        },
        {
            word: 'bear',
            past: 'bore',
            participle: 'borne',
            type: 'ABC',
            cn: '忍受；承担'
        },
        {
            word: 'beat',
            past: 'beat',
            participle: 'beaten',
            type: 'AAB',
            cn: '打；击败'
        },
        {
            word: 'become',
            past: 'became',
            participle: 'become',
            type: 'ABA',
            cn: '变成'
        },
        {
            word: 'begin',
            past: 'began',
            participle: 'begun',
            type: 'ABC',
            cn: '开始'
        },
        {
            word: 'bend',
            past: 'bent',
            participle: 'bent',
            type: 'ABB',
            cn: '弯曲；弯腰'
        },
        {
            word: 'bind',
            past: 'bound',
            participle: 'bound',
            type: 'ABB',
            cn: '捆绑；束缚'
        },
        {
            word: 'bite',
            past: 'bit',
            participle: 'bitten',
            type: 'ABC',
            cn: '咬'
        },
        {
            word: 'bleed',
            past: 'bled',
            participle: 'bled',
            type: 'ABB',
            cn: '流血'
        },
        {
            word: 'blow',
            past: 'blew',
            participle: 'blown',
            type: 'ABC',
            cn: '吹'
        },
        {
            word: 'break',
            past: 'broke',
            participle: 'broken',
            type: 'ABC',
            cn: '打破'
        },
        {
            word: 'breed',
            past: 'bred',
            participle: 'bred',
            type: 'ABB',
            cn: '繁殖；饲养'
        },
        {
            word: 'bring',
            past: 'brought',
            participle: 'brought',
            type: 'ABB',
            cn: '带来'
        },
        {
            word: 'build',
            past: 'built',
            participle: 'built',
            type: 'ABB',
            cn: '建造'
        },
        {
            word: 'burn',
            past: 'burnt/burned',
            participle: 'burnt/burned',
            type: 'ABB',
            cn: '燃烧；烧'
        },
        {
            word: 'burst',
            past: 'burst',
            participle: 'burst',
            type: 'AAA',
            cn: '爆裂；爆发'
        },
        {
            word: 'buy',
            past: 'bought',
            participle: 'bought',
            type: 'ABB',
            cn: '买'
        },
        {
            word: 'cast',
            past: 'cast',
            participle: 'cast',
            type: 'AAA',
            cn: '投掷；铸造'
        },
        {
            word: 'catch',
            past: 'caught',
            participle: 'caught',
            type: 'ABB',
            cn: '抓住'
        },
        {
            word: 'choose',
            past: 'chose',
            participle: 'chosen',
            type: 'ABC',
            cn: '选择'
        },
        {
            word: 'cling',
            past: 'clung',
            participle: 'clung',
            type: 'ABB',
            cn: '紧贴；依附'
        },
        {
            word: 'come',
            past: 'came',
            participle: 'come',
            type: 'ABA',
            cn: '来'
        },
        {
            word: 'cost',
            past: 'cost',
            participle: 'cost',
            type: 'AAA',
            cn: '花费'
        },
        {
            word: 'creep',
            past: 'crept',
            participle: 'crept',
            type: 'ABB',
            cn: '爬行；悄悄移动'
        },
        {
            word: 'cut',
            past: 'cut',
            participle: 'cut',
            type: 'AAA',
            cn: '切；剪'
        },
        {
            word: 'deal',
            past: 'dealt',
            participle: 'dealt',
            type: 'ABB',
            cn: '处理；交易'
        },
        {
            word: 'dig',
            past: 'dug',
            participle: 'dug',
            type: 'ABB',
            cn: '挖'
        },
        {
            word: 'do',
            past: 'did',
            participle: 'done',
            type: 'ABC',
            cn: '做'
        },
        {
            word: 'draw',
            past: 'drew',
            participle: 'drawn',
            type: 'ABC',
            cn: '画；拉'
        },
        {
            word: 'dream',
            past: 'dreamt/dreamed',
            participle: 'dreamt/dreamed',
            type: 'ABB',
            cn: '做梦；梦想'
        },
        {
            word: 'drink',
            past: 'drank',
            participle: 'drunk',
            type: 'ABC',
            cn: '喝'
        },
        {
            word: 'drive',
            past: 'drove',
            participle: 'driven',
            type: 'ABC',
            cn: '驾驶'
        },
        {
            word: 'dwell',
            past: 'dwelt/dwelled',
            participle: 'dwelt/dwelled',
            type: 'ABB',
            cn: '居住；停留'
        },
        {
            word: 'eat',
            past: 'ate',
            participle: 'eaten',
            type: 'ABC',
            cn: '吃'
        },
        {
            word: 'fall',
            past: 'fell',
            participle: 'fallen',
            type: 'ABC',
            cn: '落下；跌倒'
        },
        {
            word: 'feed',
            past: 'fed',
            participle: 'fed',
            type: 'ABB',
            cn: '喂养'
        },
        {
            word: 'feel',
            past: 'felt',
            participle: 'felt',
            type: 'ABB',
            cn: '感觉'
        },
        {
            word: 'fight',
            past: 'fought',
            participle: 'fought',
            type: 'ABB',
            cn: '战斗；打架'
        },
        {
            word: 'find',
            past: 'found',
            participle: 'found',
            type: 'ABB',
            cn: '找到'
        },
        {
            word: 'flee',
            past: 'fled',
            participle: 'fled',
            type: 'ABB',
            cn: '逃跑'
        },
        {
            word: 'fly',
            past: 'flew',
            participle: 'flown',
            type: 'ABC',
            cn: '飞'
        },
        {
            word: 'forbid',
            past: 'forbade',
            participle: 'forbidden',
            type: 'ABC',
            cn: '禁止'
        },
        {
            word: 'forget',
            past: 'forgot',
            participle: 'forgotten',
            type: 'ABC',
            cn: '忘记'
        },
        {
            word: 'forgive',
            past: 'forgave',
            participle: 'forgiven',
            type: 'ABC',
            cn: '原谅'
        },
        {
            word: 'freeze',
            past: 'froze',
            participle: 'frozen',
            type: 'ABC',
            cn: '冻结；结冰'
        },
        {
            word: 'get',
            past: 'got',
            participle: 'got',
            type: 'ABB',
            cn: '得到；变得'
        },
        {
            word: 'give',
            past: 'gave',
            participle: 'given',
            type: 'ABC',
            cn: '给'
        },
        {
            word: 'go',
            past: 'went',
            participle: 'gone',
            type: 'ABC',
            cn: '去'
        },
        {
            word: 'grind',
            past: 'ground',
            participle: 'ground',
            type: 'ABB',
            cn: '磨碎；碾压'
        },
        {
            word: 'grow',
            past: 'grew',
            participle: 'grown',
            type: 'ABC',
            cn: '生长'
        },
        {
            word: 'hang',
            past: 'hung',
            participle: 'hung',
            type: 'ABB',
            cn: '悬挂；吊'
        },
        {
            word: 'have',
            past: 'had',
            participle: 'had',
            type: 'ABB',
            cn: '有'
        },
        {
            word: 'hear',
            past: 'heard',
            participle: 'heard',
            type: 'ABB',
            cn: '听见'
        },
        {
            word: 'hide',
            past: 'hid',
            participle: 'hidden',
            type: 'ABC',
            cn: '藏；躲'
        },
        {
            word: 'hit',
            past: 'hit',
            participle: 'hit',
            type: 'AAA',
            cn: '打；击中'
        },
        {
            word: 'hold',
            past: 'held',
            participle: 'held',
            type: 'ABB',
            cn: '握住；举行'
        },
        {
            word: 'hurt',
            past: 'hurt',
            participle: 'hurt',
            type: 'AAA',
            cn: '伤害'
        },
        {
            word: 'keep',
            past: 'kept',
            participle: 'kept',
            type: 'ABB',
            cn: '保持'
        },
        {
            word: 'kneel',
            past: 'knelt/kneeled',
            participle: 'knelt/kneeled',
            type: 'ABB',
            cn: '跪下'
        },
        {
            word: 'know',
            past: 'knew',
            participle: 'known',
            type: 'ABC',
            cn: '知道'
        },
        {
            word: 'lay',
            past: 'laid',
            participle: 'laid',
            type: 'ABB',
            cn: '放置；下蛋'
        },
        {
            word: 'lead',
            past: 'led',
            participle: 'led',
            type: 'ABB',
            cn: '带领；领导'
        },
        {
            word: 'lean',
            past: 'leant/leaned',
            participle: 'leant/leaned',
            type: 'ABB',
            cn: '倚靠；倾斜'
        },
        {
            word: 'leap',
            past: 'leapt/leaped',
            participle: 'leapt/leaped',
            type: 'ABB',
            cn: '跳跃'
        },
        {
            word: 'learn',
            past: 'learnt/learned',
            participle: 'learnt/learned',
            type: 'ABB',
            cn: '学习'
        },
        {
            word: 'leave',
            past: 'left',
            participle: 'left',
            type: 'ABB',
            cn: '离开'
        },
        {
            word: 'lend',
            past: 'lent',
            participle: 'lent',
            type: 'ABB',
            cn: '借出'
        },
        {
            word: 'let',
            past: 'let',
            participle: 'let',
            type: 'AAA',
            cn: '让；允许'
        },
        {
            word: 'lie',
            past: 'lay',
            participle: 'lain',
            type: 'ABC',
            cn: '躺；位于'
        },
        {
            word: 'light',
            past: 'lit/lighted',
            participle: 'lit/lighted',
            type: 'ABB',
            cn: '点燃；照亮'
        },
        {
            word: 'lose',
            past: 'lost',
            participle: 'lost',
            type: 'ABB',
            cn: '失去；输'
        },
        {
            word: 'make',
            past: 'made',
            participle: 'made',
            type: 'ABB',
            cn: '制作'
        },
        {
            word: 'mean',
            past: 'meant',
            participle: 'meant',
            type: 'ABB',
            cn: '意味着；打算'
        },
        {
            word: 'meet',
            past: 'met',
            participle: 'met',
            type: 'ABB',
            cn: '遇见；会面'
        },
        {
            word: 'mistake',
            past: 'mistook',
            participle: 'mistaken',
            type: 'ABC',
            cn: '弄错；误解'
        },
        {
            word: 'mow',
            past: 'mowed',
            participle: 'mown',
            type: 'ABC',
            cn: '割（草）'
        },
        {
            word: 'overtake',
            past: 'overtook',
            participle: 'overtaken',
            type: 'ABC',
            cn: '超越；超过'
        },
        {
            word: 'pay',
            past: 'paid',
            participle: 'paid',
            type: 'ABB',
            cn: '支付'
        },
        {
            word: 'prove',
            past: 'proved',
            participle: 'proven/proved',
            type: 'ABC',
            cn: '证明'
        },
        {
            word: 'put',
            past: 'put',
            participle: 'put',
            type: 'AAA',
            cn: '放'
        },
        {
            word: 'read',
            past: 'read',
            participle: 'read',
            type: 'AAA',
            cn: '读'
        },
        {
            word: 'ride',
            past: 'rode',
            participle: 'ridden',
            type: 'ABC',
            cn: '骑'
        },
        {
            word: 'ring',
            past: 'rang',
            participle: 'rung',
            type: 'ABC',
            cn: '响铃；打电话'
        },
        {
            word: 'rise',
            past: 'rose',
            participle: 'risen',
            type: 'ABC',
            cn: '升起；上涨'
        },
        {
            word: 'run',
            past: 'ran',
            participle: 'run',
            type: 'ABA',
            cn: '跑'
        },
        {
            word: 'say',
            past: 'said',
            participle: 'said',
            type: 'ABB',
            cn: '说'
        },
        {
            word: 'see',
            past: 'saw',
            participle: 'seen',
            type: 'ABC',
            cn: '看见'
        },
        {
            word: 'seek',
            past: 'sought',
            participle: 'sought',
            type: 'ABB',
            cn: '寻找；追求'
        },
        {
            word: 'sell',
            past: 'sold',
            participle: 'sold',
            type: 'ABB',
            cn: '卖'
        },
        {
            word: 'send',
            past: 'sent',
            participle: 'sent',
            type: 'ABB',
            cn: '送；寄'
        },
        {
            word: 'set',
            past: 'set',
            participle: 'set',
            type: 'AAA',
            cn: '设置；放置'
        },
        {
            word: 'sew',
            past: 'sewed',
            participle: 'sewn',
            type: 'ABC',
            cn: '缝'
        },
        {
            word: 'shake',
            past: 'shook',
            participle: 'shaken',
            type: 'ABC',
            cn: '摇；震动'
        },
        {
            word: 'shine',
            past: 'shone',
            participle: 'shone',
            type: 'ABB',
            cn: '照耀；发光'
        },
        {
            word: 'shoot',
            past: 'shot',
            participle: 'shot',
            type: 'ABB',
            cn: '射击'
        },
        {
            word: 'show',
            past: 'showed',
            participle: 'shown',
            type: 'ABC',
            cn: '展示；表明'
        },
        {
            word: 'shut',
            past: 'shut',
            participle: 'shut',
            type: 'AAA',
            cn: '关闭'
        },
        {
            word: 'sing',
            past: 'sang',
            participle: 'sung',
            type: 'ABC',
            cn: '唱'
        },
        {
            word: 'sink',
            past: 'sank',
            participle: 'sunk',
            type: 'ABC',
            cn: '下沉'
        },
        {
            word: 'sit',
            past: 'sat',
            participle: 'sat',
            type: 'ABB',
            cn: '坐'
        },
        {
            word: 'sleep',
            past: 'slept',
            participle: 'slept',
            type: 'ABB',
            cn: '睡觉'
        },
        {
            word: 'slide',
            past: 'slid',
            participle: 'slid',
            type: 'ABB',
            cn: '滑动'
        },
        {
            word: 'smell',
            past: 'smelt/smelled',
            participle: 'smelt/smelled',
            type: 'ABB',
            cn: '闻；有气味'
        },
        {
            word: 'sow',
            past: 'sowed',
            participle: 'sown',
            type: 'ABC',
            cn: '播种'
        },
        {
            word: 'speak',
            past: 'spoke',
            participle: 'spoken',
            type: 'ABC',
            cn: '说'
        },
        {
            word: 'speed',
            past: 'sped',
            participle: 'sped',
            type: 'ABB',
            cn: '加速；疾行'
        },
        {
            word: 'spell',
            past: 'spelt/spelled',
            participle: 'spelt/spelled',
            type: 'ABB',
            cn: '拼写'
        },
        {
            word: 'spend',
            past: 'spent',
            participle: 'spent',
            type: 'ABB',
            cn: '花费（时间/钱）'
        },
        {
            word: 'spin',
            past: 'spun',
            participle: 'spun',
            type: 'ABB',
            cn: '旋转；纺'
        },
        {
            word: 'spit',
            past: 'spat/spit',
            participle: 'spat/spit',
            type: 'ABB',
            cn: '吐'
        },
        {
            word: 'split',
            past: 'split',
            participle: 'split',
            type: 'AAA',
            cn: '劈开；分裂'
        },
        {
            word: 'spring',
            past: 'sprang/sprung',
            participle: 'sprung',
            type: 'ABC',
            cn: '跳跃；涌现'
        },
        {
            word: 'stand',
            past: 'stood',
            participle: 'stood',
            type: 'ABB',
            cn: '站'
        },
        {
            word: 'steal',
            past: 'stole',
            participle: 'stolen',
            type: 'ABC',
            cn: '偷'
        },
        {
            word: 'stick',
            past: 'stuck',
            participle: 'stuck',
            type: 'ABB',
            cn: '粘；卡住'
        },
        {
            word: 'stride',
            past: 'strode',
            participle: 'stridden',
            type: 'ABC',
            cn: '大步走'
        },
        {
            word: 'strike',
            past: 'struck',
            participle: 'struck',
            type: 'ABB',
            cn: '打击；罢工'
        },
        {
            word: 'strive',
            past: 'strove/strived',
            participle: 'striven/strived',
            type: 'ABC',
            cn: '努力；奋斗'
        },
        {
            word: 'swear',
            past: 'swore',
            participle: 'sworn',
            type: 'ABC',
            cn: '发誓；咒骂'
        },
        {
            word: 'sweep',
            past: 'swept',
            participle: 'swept',
            type: 'ABB',
            cn: '扫；打扫'
        },
        {
            word: 'swim',
            past: 'swam',
            participle: 'swum',
            type: 'ABC',
            cn: '游泳'
        },
        {
            word: 'swing',
            past: 'swung',
            participle: 'swung',
            type: 'ABB',
            cn: '摇摆'
        },
        {
            word: 'take',
            past: 'took',
            participle: 'taken',
            type: 'ABC',
            cn: '拿；带走'
        },
        {
            word: 'teach',
            past: 'taught',
            participle: 'taught',
            type: 'ABB',
            cn: '教'
        },
        {
            word: 'tear',
            past: 'tore',
            participle: 'torn',
            type: 'ABC',
            cn: '撕；流泪'
        },
        {
            word: 'tell',
            past: 'told',
            participle: 'told',
            type: 'ABB',
            cn: '告诉'
        },
        {
            word: 'think',
            past: 'thought',
            participle: 'thought',
            type: 'ABB',
            cn: '想；认为'
        },
        {
            word: 'throw',
            past: 'threw',
            participle: 'thrown',
            type: 'ABC',
            cn: '扔'
        },
        {
            word: 'thrust',
            past: 'thrust',
            participle: 'thrust',
            type: 'AAA',
            cn: '刺；猛推'
        },
        {
            word: 'understand',
            past: 'understood',
            participle: 'understood',
            type: 'ABB',
            cn: '理解'
        },
        {
            word: 'undertake',
            past: 'undertook',
            participle: 'undertaken',
            type: 'ABC',
            cn: '承担；从事'
        },
        {
            word: 'wake',
            past: 'woke',
            participle: 'woken',
            type: 'ABC',
            cn: '醒来；唤醒'
        },
        {
            word: 'wear',
            past: 'wore',
            participle: 'worn',
            type: 'ABC',
            cn: '穿；戴'
        },
        {
            word: 'weave',
            past: 'wove',
            participle: 'woven',
            type: 'ABC',
            cn: '编织'
        },
        {
            word: 'weep',
            past: 'wept',
            participle: 'wept',
            type: 'ABB',
            cn: '哭泣'
        },
        {
            word: 'win',
            past: 'won',
            participle: 'won',
            type: 'ABB',
            cn: '赢'
        },
        {
            word: 'wind',
            past: 'wound',
            participle: 'wound',
            type: 'ABB',
            cn: '缠绕；蜿蜒'
        },
        {
            word: 'withdraw',
            past: 'withdrew',
            participle: 'withdrawn',
            type: 'ABC',
            cn: '撤退；取款'
        },
        {
            word: 'write',
            past: 'wrote',
            participle: 'written',
            type: 'ABC',
            cn: '写'
        }
    ],
    四级: [
        {
            word: 'arise',
            past: 'arose',
            participle: 'arisen',
            type: 'ABC',
            cn: '出现；升起'
        },
        {
            word: 'awake',
            past: 'awoke',
            participle: 'awoken',
            type: 'ABC',
            cn: '唤醒；醒来'
        },
        {
            word: 'be',
            past: 'was/were',
            participle: 'been',
            type: 'ABC',
            cn: '是；存在'
        },
        {
            word: 'bear',
            past: 'bore',
            participle: 'borne',
            type: 'ABC',
            cn: '忍受；承担'
        },
        {
            word: 'beat',
            past: 'beat',
            participle: 'beaten',
            type: 'AAB',
            cn: '打；击败'
        },
        {
            word: 'become',
            past: 'became',
            participle: 'become',
            type: 'ABA',
            cn: '变成'
        },
        {
            word: 'begin',
            past: 'began',
            participle: 'begun',
            type: 'ABC',
            cn: '开始'
        },
        {
            word: 'bend',
            past: 'bent',
            participle: 'bent',
            type: 'ABB',
            cn: '弯曲；弯腰'
        },
        {
            word: 'bet',
            past: 'bet/betted',
            participle: 'bet/betted',
            type: 'AAA',
            cn: '打赌'
        },
        {
            word: 'bid',
            past: 'bid/bade',
            participle: 'bid/bidden',
            type: 'ABC',
            cn: '出价；投标'
        },
        {
            word: 'bind',
            past: 'bound',
            participle: 'bound',
            type: 'ABB',
            cn: '捆绑；束缚'
        },
        {
            word: 'bite',
            past: 'bit',
            participle: 'bitten',
            type: 'ABC',
            cn: '咬'
        },
        {
            word: 'bleed',
            past: 'bled',
            participle: 'bled',
            type: 'ABB',
            cn: '流血'
        },
        {
            word: 'blow',
            past: 'blew',
            participle: 'blown',
            type: 'ABC',
            cn: '吹'
        },
        {
            word: 'break',
            past: 'broke',
            participle: 'broken',
            type: 'ABC',
            cn: '打破'
        },
        {
            word: 'breed',
            past: 'bred',
            participle: 'bred',
            type: 'ABB',
            cn: '繁殖；饲养'
        },
        {
            word: 'bring',
            past: 'brought',
            participle: 'brought',
            type: 'ABB',
            cn: '带来'
        },
        {
            word: 'broadcast',
            past: 'broadcast',
            participle: 'broadcast',
            type: 'AAA',
            cn: '广播；播放'
        },
        {
            word: 'build',
            past: 'built',
            participle: 'built',
            type: 'ABB',
            cn: '建造'
        },
        {
            word: 'burn',
            past: 'burnt/burned',
            participle: 'burnt/burned',
            type: 'ABB',
            cn: '燃烧；烧'
        },
        {
            word: 'burst',
            past: 'burst',
            participle: 'burst',
            type: 'AAA',
            cn: '爆裂；爆发'
        },
        {
            word: 'buy',
            past: 'bought',
            participle: 'bought',
            type: 'ABB',
            cn: '买'
        },
        {
            word: 'cast',
            past: 'cast',
            participle: 'cast',
            type: 'AAA',
            cn: '投掷；铸造'
        },
        {
            word: 'catch',
            past: 'caught',
            participle: 'caught',
            type: 'ABB',
            cn: '抓住'
        },
        {
            word: 'choose',
            past: 'chose',
            participle: 'chosen',
            type: 'ABC',
            cn: '选择'
        },
        {
            word: 'cling',
            past: 'clung',
            participle: 'clung',
            type: 'ABB',
            cn: '紧贴；依附'
        },
        {
            word: 'come',
            past: 'came',
            participle: 'come',
            type: 'ABA',
            cn: '来'
        },
        {
            word: 'cost',
            past: 'cost',
            participle: 'cost',
            type: 'AAA',
            cn: '花费'
        },
        {
            word: 'creep',
            past: 'crept',
            participle: 'crept',
            type: 'ABB',
            cn: '爬行；悄悄移动'
        },
        {
            word: 'cut',
            past: 'cut',
            participle: 'cut',
            type: 'AAA',
            cn: '切；剪'
        },
        {
            word: 'deal',
            past: 'dealt',
            participle: 'dealt',
            type: 'ABB',
            cn: '处理；交易'
        },
        {
            word: 'dig',
            past: 'dug',
            participle: 'dug',
            type: 'ABB',
            cn: '挖'
        },
        {
            word: 'do',
            past: 'did',
            participle: 'done',
            type: 'ABC',
            cn: '做'
        },
        {
            word: 'draw',
            past: 'drew',
            participle: 'drawn',
            type: 'ABC',
            cn: '画；拉'
        },
        {
            word: 'dream',
            past: 'dreamt/dreamed',
            participle: 'dreamt/dreamed',
            type: 'ABB',
            cn: '做梦；梦想'
        },
        {
            word: 'drink',
            past: 'drank',
            participle: 'drunk',
            type: 'ABC',
            cn: '喝'
        },
        {
            word: 'drive',
            past: 'drove',
            participle: 'driven',
            type: 'ABC',
            cn: '驾驶'
        },
        {
            word: 'dwell',
            past: 'dwelt/dwelled',
            participle: 'dwelt/dwelled',
            type: 'ABB',
            cn: '居住；停留'
        },
        {
            word: 'eat',
            past: 'ate',
            participle: 'eaten',
            type: 'ABC',
            cn: '吃'
        },
        {
            word: 'fall',
            past: 'fell',
            participle: 'fallen',
            type: 'ABC',
            cn: '落下；跌倒'
        },
        {
            word: 'feed',
            past: 'fed',
            participle: 'fed',
            type: 'ABB',
            cn: '喂养'
        },
        {
            word: 'feel',
            past: 'felt',
            participle: 'felt',
            type: 'ABB',
            cn: '感觉'
        },
        {
            word: 'fight',
            past: 'fought',
            participle: 'fought',
            type: 'ABB',
            cn: '战斗；打架'
        },
        {
            word: 'find',
            past: 'found',
            participle: 'found',
            type: 'ABB',
            cn: '找到'
        },
        {
            word: 'flee',
            past: 'fled',
            participle: 'fled',
            type: 'ABB',
            cn: '逃跑'
        },
        {
            word: 'fly',
            past: 'flew',
            participle: 'flown',
            type: 'ABC',
            cn: '飞'
        },
        {
            word: 'forbid',
            past: 'forbade',
            participle: 'forbidden',
            type: 'ABC',
            cn: '禁止'
        },
        {
            word: 'forecast',
            past: 'forecast/forecasted',
            participle: 'forecast/forecasted',
            type: 'AAA',
            cn: '预测；预报'
        },
        {
            word: 'forget',
            past: 'forgot',
            participle: 'forgotten',
            type: 'ABC',
            cn: '忘记'
        },
        {
            word: 'forgive',
            past: 'forgave',
            participle: 'forgiven',
            type: 'ABC',
            cn: '原谅'
        },
        {
            word: 'freeze',
            past: 'froze',
            participle: 'frozen',
            type: 'ABC',
            cn: '冻结；结冰'
        },
        {
            word: 'get',
            past: 'got',
            participle: 'got',
            type: 'ABB',
            cn: '得到；变得'
        },
        {
            word: 'give',
            past: 'gave',
            participle: 'given',
            type: 'ABC',
            cn: '给'
        },
        {
            word: 'go',
            past: 'went',
            participle: 'gone',
            type: 'ABC',
            cn: '去'
        },
        {
            word: 'grind',
            past: 'ground',
            participle: 'ground',
            type: 'ABB',
            cn: '磨碎；碾压'
        },
        {
            word: 'grow',
            past: 'grew',
            participle: 'grown',
            type: 'ABC',
            cn: '生长'
        },
        {
            word: 'hang',
            past: 'hung',
            participle: 'hung',
            type: 'ABB',
            cn: '悬挂；吊'
        },
        {
            word: 'have',
            past: 'had',
            participle: 'had',
            type: 'ABB',
            cn: '有'
        },
        {
            word: 'hear',
            past: 'heard',
            participle: 'heard',
            type: 'ABB',
            cn: '听见'
        },
        {
            word: 'hide',
            past: 'hid',
            participle: 'hidden',
            type: 'ABC',
            cn: '藏；躲'
        },
        {
            word: 'hit',
            past: 'hit',
            participle: 'hit',
            type: 'AAA',
            cn: '打；击中'
        },
        {
            word: 'hold',
            past: 'held',
            participle: 'held',
            type: 'ABB',
            cn: '握住；举行'
        },
        {
            word: 'hurt',
            past: 'hurt',
            participle: 'hurt',
            type: 'AAA',
            cn: '伤害'
        },
        {
            word: 'input',
            past: 'input',
            participle: 'input',
            type: 'AAA',
            cn: '输入'
        },
        {
            word: 'keep',
            past: 'kept',
            participle: 'kept',
            type: 'ABB',
            cn: '保持'
        },
        {
            word: 'kneel',
            past: 'knelt/kneeled',
            participle: 'knelt/kneeled',
            type: 'ABB',
            cn: '跪下'
        },
        {
            word: 'know',
            past: 'knew',
            participle: 'known',
            type: 'ABC',
            cn: '知道'
        },
        {
            word: 'lay',
            past: 'laid',
            participle: 'laid',
            type: 'ABB',
            cn: '放置；下蛋'
        },
        {
            word: 'lead',
            past: 'led',
            participle: 'led',
            type: 'ABB',
            cn: '带领；领导'
        },
        {
            word: 'lean',
            past: 'leant/leaned',
            participle: 'leant/leaned',
            type: 'ABB',
            cn: '倚靠；倾斜'
        },
        {
            word: 'leap',
            past: 'leapt/leaped',
            participle: 'leapt/leaped',
            type: 'ABB',
            cn: '跳跃'
        },
        {
            word: 'learn',
            past: 'learnt/learned',
            participle: 'learnt/learned',
            type: 'ABB',
            cn: '学习'
        },
        {
            word: 'leave',
            past: 'left',
            participle: 'left',
            type: 'ABB',
            cn: '离开'
        },
        {
            word: 'lend',
            past: 'lent',
            participle: 'lent',
            type: 'ABB',
            cn: '借出'
        },
        {
            word: 'let',
            past: 'let',
            participle: 'let',
            type: 'AAA',
            cn: '让；允许'
        },
        {
            word: 'lie',
            past: 'lay',
            participle: 'lain',
            type: 'ABC',
            cn: '躺；位于'
        },
        {
            word: 'light',
            past: 'lit/lighted',
            participle: 'lit/lighted',
            type: 'ABB',
            cn: '点燃；照亮'
        },
        {
            word: 'lose',
            past: 'lost',
            participle: 'lost',
            type: 'ABB',
            cn: '失去；输'
        },
        {
            word: 'make',
            past: 'made',
            participle: 'made',
            type: 'ABB',
            cn: '制作'
        },
        {
            word: 'mean',
            past: 'meant',
            participle: 'meant',
            type: 'ABB',
            cn: '意味着；打算'
        },
        {
            word: 'meet',
            past: 'met',
            participle: 'met',
            type: 'ABB',
            cn: '遇见；会面'
        },
        {
            word: 'mislead',
            past: 'misled',
            participle: 'misled',
            type: 'ABB',
            cn: '误导'
        },
        {
            word: 'misread',
            past: 'misread',
            participle: 'misread',
            type: 'AAA',
            cn: '读错；误解'
        },
        {
            word: 'mistake',
            past: 'mistook',
            participle: 'mistaken',
            type: 'ABC',
            cn: '弄错；误解'
        },
        {
            word: 'mow',
            past: 'mowed',
            participle: 'mown',
            type: 'ABC',
            cn: '割（草）'
        },
        {
            word: 'output',
            past: 'output',
            participle: 'output',
            type: 'AAA',
            cn: '输出'
        },
        {
            word: 'overdo',
            past: 'overdid',
            participle: 'overdone',
            type: 'ABC',
            cn: '做得过火；煮过头'
        },
        {
            word: 'overhear',
            past: 'overheard',
            participle: 'overheard',
            type: 'ABB',
            cn: '无意中听到'
        },
        {
            word: 'override',
            past: 'overrode',
            participle: 'overridden',
            type: 'ABC',
            cn: '推翻；凌驾于'
        },
        {
            word: 'overtake',
            past: 'overtook',
            participle: 'overtaken',
            type: 'ABC',
            cn: '超越；超过'
        },
        {
            word: 'pay',
            past: 'paid',
            participle: 'paid',
            type: 'ABB',
            cn: '支付'
        },
        {
            word: 'prove',
            past: 'proved',
            participle: 'proven/proved',
            type: 'ABC',
            cn: '证明'
        },
        {
            word: 'put',
            past: 'put',
            participle: 'put',
            type: 'AAA',
            cn: '放'
        },
        {
            word: 'quit',
            past: 'quit/quitted',
            participle: 'quit/quitted',
            type: 'AAA',
            cn: '放弃；辞职'
        },
        {
            word: 'read',
            past: 'read',
            participle: 'read',
            type: 'AAA',
            cn: '读'
        },
        {
            word: 'rebuild',
            past: 'rebuilt',
            participle: 'rebuilt',
            type: 'ABB',
            cn: '重建'
        },
        {
            word: 'redo',
            past: 'redid',
            participle: 'redone',
            type: 'ABC',
            cn: '重做'
        },
        {
            word: 'remake',
            past: 'remade',
            participle: 'remade',
            type: 'ABB',
            cn: '重制'
        },
        {
            word: 'repay',
            past: 'repaid',
            participle: 'repaid',
            type: 'ABB',
            cn: '偿还；报答'
        },
        {
            word: 'reset',
            past: 'reset',
            participle: 'reset',
            type: 'AAA',
            cn: '重置；复位'
        },
        {
            word: 'rethink',
            past: 'rethought',
            participle: 'rethought',
            type: 'ABB',
            cn: '重新考虑'
        },
        {
            word: 'rid',
            past: 'rid',
            participle: 'rid',
            type: 'AAA',
            cn: '摆脱；除去'
        },
        {
            word: 'ride',
            past: 'rode',
            participle: 'ridden',
            type: 'ABC',
            cn: '骑'
        },
        {
            word: 'ring',
            past: 'rang',
            participle: 'rung',
            type: 'ABC',
            cn: '响铃；打电话'
        },
        {
            word: 'rise',
            past: 'rose',
            participle: 'risen',
            type: 'ABC',
            cn: '升起；上涨'
        },
        {
            word: 'run',
            past: 'ran',
            participle: 'run',
            type: 'ABA',
            cn: '跑'
        },
        {
            word: 'say',
            past: 'said',
            participle: 'said',
            type: 'ABB',
            cn: '说'
        },
        {
            word: 'see',
            past: 'saw',
            participle: 'seen',
            type: 'ABC',
            cn: '看见'
        },
        {
            word: 'seek',
            past: 'sought',
            participle: 'sought',
            type: 'ABB',
            cn: '寻找；追求'
        },
        {
            word: 'sell',
            past: 'sold',
            participle: 'sold',
            type: 'ABB',
            cn: '卖'
        },
        {
            word: 'send',
            past: 'sent',
            participle: 'sent',
            type: 'ABB',
            cn: '送；寄'
        },
        {
            word: 'set',
            past: 'set',
            participle: 'set',
            type: 'AAA',
            cn: '设置；放置'
        },
        {
            word: 'sew',
            past: 'sewed',
            participle: 'sewn',
            type: 'ABC',
            cn: '缝'
        },
        {
            word: 'shake',
            past: 'shook',
            participle: 'shaken',
            type: 'ABC',
            cn: '摇；震动'
        },
        {
            word: 'shed',
            past: 'shed',
            participle: 'shed',
            type: 'AAA',
            cn: '脱落；流（泪/血）'
        },
        {
            word: 'shine',
            past: 'shone',
            participle: 'shone',
            type: 'ABB',
            cn: '照耀；发光'
        },
        {
            word: 'shoot',
            past: 'shot',
            participle: 'shot',
            type: 'ABB',
            cn: '射击'
        },
        {
            word: 'show',
            past: 'showed',
            participle: 'shown',
            type: 'ABC',
            cn: '展示；表明'
        },
        {
            word: 'shut',
            past: 'shut',
            participle: 'shut',
            type: 'AAA',
            cn: '关闭'
        },
        {
            word: 'sing',
            past: 'sang',
            participle: 'sung',
            type: 'ABC',
            cn: '唱'
        },
        {
            word: 'sink',
            past: 'sank',
            participle: 'sunk',
            type: 'ABC',
            cn: '下沉'
        },
        {
            word: 'sit',
            past: 'sat',
            participle: 'sat',
            type: 'ABB',
            cn: '坐'
        },
        {
            word: 'sleep',
            past: 'slept',
            participle: 'slept',
            type: 'ABB',
            cn: '睡觉'
        },
        {
            word: 'slide',
            past: 'slid',
            participle: 'slid',
            type: 'ABB',
            cn: '滑动'
        },
        {
            word: 'slit',
            past: 'slit',
            participle: 'slit',
            type: 'AAA',
            cn: '切开；割开'
        },
        {
            word: 'smell',
            past: 'smelt/smelled',
            participle: 'smelt/smelled',
            type: 'ABB',
            cn: '闻；有气味'
        },
        {
            word: 'sow',
            past: 'sowed',
            participle: 'sown',
            type: 'ABC',
            cn: '播种'
        },
        {
            word: 'speak',
            past: 'spoke',
            participle: 'spoken',
            type: 'ABC',
            cn: '说'
        },
        {
            word: 'speed',
            past: 'sped',
            participle: 'sped',
            type: 'ABB',
            cn: '加速；疾行'
        },
        {
            word: 'spell',
            past: 'spelt/spelled',
            participle: 'spelt/spelled',
            type: 'ABB',
            cn: '拼写'
        },
        {
            word: 'spend',
            past: 'spent',
            participle: 'spent',
            type: 'ABB',
            cn: '花费（时间/钱）'
        },
        {
            word: 'spin',
            past: 'spun',
            participle: 'spun',
            type: 'ABB',
            cn: '旋转；纺'
        },
        {
            word: 'spit',
            past: 'spat/spit',
            participle: 'spat/spit',
            type: 'ABB',
            cn: '吐'
        },
        {
            word: 'split',
            past: 'split',
            participle: 'split',
            type: 'AAA',
            cn: '劈开；分裂'
        },
        {
            word: 'spring',
            past: 'sprang/sprung',
            participle: 'sprung',
            type: 'ABC',
            cn: '跳跃；涌现'
        },
        {
            word: 'stand',
            past: 'stood',
            participle: 'stood',
            type: 'ABB',
            cn: '站'
        },
        {
            word: 'steal',
            past: 'stole',
            participle: 'stolen',
            type: 'ABC',
            cn: '偷'
        },
        {
            word: 'stick',
            past: 'stuck',
            participle: 'stuck',
            type: 'ABB',
            cn: '粘；卡住'
        },
        {
            word: 'stride',
            past: 'strode',
            participle: 'stridden',
            type: 'ABC',
            cn: '大步走'
        },
        {
            word: 'strike',
            past: 'struck',
            participle: 'struck',
            type: 'ABB',
            cn: '打击；罢工'
        },
        {
            word: 'strive',
            past: 'strove/strived',
            participle: 'striven/strived',
            type: 'ABC',
            cn: '努力；奋斗'
        },
        {
            word: 'swear',
            past: 'swore',
            participle: 'sworn',
            type: 'ABC',
            cn: '发誓；咒骂'
        },
        {
            word: 'sweep',
            past: 'swept',
            participle: 'swept',
            type: 'ABB',
            cn: '扫；打扫'
        },
        {
            word: 'swim',
            past: 'swam',
            participle: 'swum',
            type: 'ABC',
            cn: '游泳'
        },
        {
            word: 'swing',
            past: 'swung',
            participle: 'swung',
            type: 'ABB',
            cn: '摇摆'
        },
        {
            word: 'take',
            past: 'took',
            participle: 'taken',
            type: 'ABC',
            cn: '拿；带走'
        },
        {
            word: 'teach',
            past: 'taught',
            participle: 'taught',
            type: 'ABB',
            cn: '教'
        },
        {
            word: 'tear',
            past: 'tore',
            participle: 'torn',
            type: 'ABC',
            cn: '撕；流泪'
        },
        {
            word: 'tell',
            past: 'told',
            participle: 'told',
            type: 'ABB',
            cn: '告诉'
        },
        {
            word: 'think',
            past: 'thought',
            participle: 'thought',
            type: 'ABB',
            cn: '想；认为'
        },
        {
            word: 'throw',
            past: 'threw',
            participle: 'thrown',
            type: 'ABC',
            cn: '扔'
        },
        {
            word: 'thrust',
            past: 'thrust',
            participle: 'thrust',
            type: 'AAA',
            cn: '刺；猛推'
        },
        {
            word: 'undergo',
            past: 'underwent',
            participle: 'undergone',
            type: 'ABC',
            cn: '经历；承受'
        },
        {
            word: 'understand',
            past: 'understood',
            participle: 'understood',
            type: 'ABB',
            cn: '理解'
        },
        {
            word: 'undertake',
            past: 'undertook',
            participle: 'undertaken',
            type: 'ABC',
            cn: '承担；从事'
        },
        {
            word: 'undo',
            past: 'undid',
            participle: 'undone',
            type: 'ABC',
            cn: '解开；取消'
        },
        {
            word: 'upset',
            past: 'upset',
            participle: 'upset',
            type: 'AAA',
            cn: '使不安；打翻'
        },
        {
            word: 'wake',
            past: 'woke',
            participle: 'woken',
            type: 'ABC',
            cn: '醒来；唤醒'
        },
        {
            word: 'wear',
            past: 'wore',
            participle: 'worn',
            type: 'ABC',
            cn: '穿；戴'
        },
        {
            word: 'weave',
            past: 'wove',
            participle: 'woven',
            type: 'ABC',
            cn: '编织'
        },
        {
            word: 'weep',
            past: 'wept',
            participle: 'wept',
            type: 'ABB',
            cn: '哭泣'
        },
        {
            word: 'win',
            past: 'won',
            participle: 'won',
            type: 'ABB',
            cn: '赢'
        },
        {
            word: 'wind',
            past: 'wound',
            participle: 'wound',
            type: 'ABB',
            cn: '缠绕；蜿蜒'
        },
        {
            word: 'withdraw',
            past: 'withdrew',
            participle: 'withdrawn',
            type: 'ABC',
            cn: '撤退；取款'
        },
        {
            word: 'withhold',
            past: 'withheld',
            participle: 'withheld',
            type: 'ABB',
            cn: '扣留；忍住'
        },
        {
            word: 'withstand',
            past: 'withstood',
            participle: 'withstood',
            type: 'ABB',
            cn: '承受；抵挡'
        },
        {
            word: 'write',
            past: 'wrote',
            participle: 'written',
            type: 'ABC',
            cn: '写'
        }
    ],
    六级: [
        {
            word: 'forbear',
            past: 'forbore',
            participle: 'forborne',
            type: 'ABC',
            cn: '忍耐；克制'
        },
        {
            word: 'forsake',
            past: 'forsook',
            participle: 'forsaken',
            type: 'ABC',
            cn: '抛弃；放弃'
        },
        {
            word: 'heave',
            past: 'hove/heaved',
            participle: 'hove/heaved',
            type: 'ABB',
            cn: '举起；起伏'
        },
        {
            word: 'hew',
            past: 'hewed',
            participle: 'hewn',
            type: 'ABC',
            cn: '砍；劈'
        },
        {
            word: 'inlay',
            past: 'inlaid',
            participle: 'inlaid',
            type: 'ABB',
            cn: '镶嵌'
        },
        {
            word: 'interweave',
            past: 'interwove',
            participle: 'interwoven',
            type: 'ABC',
            cn: '交织；混杂'
        },
        {
            word: 'outdo',
            past: 'outdid',
            participle: 'outdone',
            type: 'ABC',
            cn: '胜过；超越'
        },
        {
            word: 'outgrow',
            past: 'outgrew',
            participle: 'outgrown',
            type: 'ABC',
            cn: '长过；不再适合'
        },
        {
            word: 'outrun',
            past: 'outran',
            participle: 'outrun',
            type: 'ABA',
            cn: '跑得比…快'
        },
        {
            word: 'overbear',
            past: 'overbore',
            participle: 'overborne',
            type: 'ABC',
            cn: '压服；压倒'
        },
        {
            word: 'overdraw',
            past: 'overdrew',
            participle: 'overdrawn',
            type: 'ABC',
            cn: '透支；夸大'
        },
        {
            word: 'overhang',
            past: 'overhung',
            participle: 'overhung',
            type: 'ABB',
            cn: '悬垂；突出于'
        },
        {
            word: 'overrun',
            past: 'overran',
            participle: 'overrun',
            type: 'ABA',
            cn: '蔓延；超时'
        },
        {
            word: 'oversee',
            past: 'oversaw',
            participle: 'overseen',
            type: 'ABC',
            cn: '监督；管理'
        },
        {
            word: 'overthrow',
            past: 'overthrew',
            participle: 'overthrown',
            type: 'ABC',
            cn: '推翻'
        },
        {
            word: 'overwind',
            past: 'overwound',
            participle: 'overwound',
            type: 'ABB',
            cn: '上得过紧'
        },
        {
            word: 'recast',
            past: 'recast',
            participle: 'recast',
            type: 'AAA',
            cn: '重铸；改写'
        },
        {
            word: 'rewind',
            past: 'rewound',
            participle: 'rewound',
            type: 'ABB',
            cn: '倒回；重绕'
        },
        {
            word: 'sling',
            past: 'slung',
            participle: 'slung',
            type: 'ABB',
            cn: '抛掷；悬挂'
        },
        {
            word: 'stink',
            past: 'stank/stunk',
            participle: 'stunk',
            type: 'ABC',
            cn: '发臭'
        },
        {
            word: 'tread',
            past: 'trod',
            participle: 'trodden/trod',
            type: 'ABC',
            cn: '踩；踏'
        }
    ]
};
