// 特殊单词: 从主词库剔除的专名类词条, 只在专题里单独学习
// 词条自带 id 与释义, 不依赖词书索引; id 保留原词书前缀
export default [
    {
        title: '人名',
        words: [
            {
                word: 'Julie',
                translation: '朱莉（女名）',
                phonetic: "'dʒu:li",
                partOfSpeech: '',
                examples: [
                    { en: 'Julie, do you know why we celebrate Easter?', cn: '朱莉，你知道我们为什么庆祝复活节吗？' },
                    { en: 'Julie: And then what do you do with that log?', cn: '朱莉：然后你要拿那些记录做什么呢？' },
                    {
                        en: 'The St. Lawrence River held a particular poetry and beauty to me and (I) decided to live there with our daughter, Julie.',
                        cn: '圣劳伦斯河对我来说有着特殊的诗意和美感，(我) 决定和我的女儿朱莉一起生活在那里。'
                    }
                ],
                id: 'middle__Julie',
                category: 'middle'
            },
            {
                word: 'Becky',
                translation: '贝姬（女名）',
                phonetic: "'beki",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'So John and Becky and their two little girls go on with their semi-rural life in Alaska.',
                        cn: '约翰和贝基以及他们的两个小女儿继续着在阿拉斯加的半乡村式的生活。'
                    },
                    {
                        en: 'John and Becky were then in their late twenties and had no need of our permission, but we encouraged them to give it a try.',
                        cn: '当时约翰和贝基已经是二十八九，做这个决定并没有必要得到我们的批准，但我们还是鼓励他们去试试。'
                    }
                ],
                id: 'middle__Becky',
                category: 'middle'
            },
            {
                word: 'Annie',
                translation: '安妮（女名）',
                phonetic: "'æni",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'After the movie was finished, my husband reminded me that I am an Annie Sullivan.',
                        cn: '看完电影后，我丈夫提醒我说，我就是一个安妮·莎莉文式的人。'
                    },
                    {
                        en: "Dear Annie: I hope you and your readers have some suggestions for me, because I'm just about at the end of my rope.",
                        cn: '亲爱的安妮： 我希望您和您的读者可以给我提些建议，因为我实在是山穷水尽，毫无办法了。'
                    }
                ],
                id: 'middle__Annie',
                category: 'middle'
            },
            {
                word: 'Clara',
                translation: '克拉拉（女名）',
                phonetic: "'klærə",
                partOfSpeech: '',
                examples: [
                    { en: 'Clara, I heard nothing of what you said but that du.', cn: '克拉拉，你说的其他话我都没听见，只听见了那个“你”。' },
                    { en: 'Everyone’s worried about me, Clara said one afternoon.', cn: '大家担心的是我，一天下午克拉拉说。' },
                    {
                        en: 'All the years since I had met Clara suddenly came tumbling down on top of me, everything my life had been, most of it nothing to do with her.',
                        cn: '自从我遇见克拉拉以来，那些年的一景一幕一股脑涌上了我的心头，我所过的生活，我的一切大多都与她没有任何关联。'
                    }
                ],
                id: 'middle__Clara',
                category: 'middle'
            },
            {
                word: 'Charles  Dickens',
                translation: '查尔斯 • 狄更斯（英国作家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Charles  Dickens',
                category: 'middle'
            },
            {
                word: 'Kevin',
                translation: '凯文（男名）',
                phonetic: "'kevin",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Kevin',
                category: 'middle'
            },
            {
                word: 'Tim',
                translation: '蒂姆（男名）',
                phonetic: 'tim',
                partOfSpeech: '',
                examples: [
                    {
                        en: "I realize that I'm seeing Tim as he is in the world, with no reference to me at all.",
                        cn: '我意识到我所看到的，是蒂姆在他的世界里的生活，而这个世界和我一点关系也没有。'
                    },
                    {
                        en: '"Tim Howard was \'Man Of The Match\' and that was proof of how strong we were, " said David James, without flinching.',
                        cn: '大卫詹姆斯没有任何畏惧的说：“蒂姆霍华德是比赛的救星，而这证明了我们的强大。”'
                    }
                ],
                id: 'middle__Tim',
                category: 'middle'
            },
            {
                word: 'Paula',
                translation: '葆拉 （女名）',
                phonetic: "'pɔ:lə",
                partOfSpeech: '',
                examples: [
                    { en: 'Peter asks Paula to go to dinner.', cn: '彼得请保拉去共进晚餐。' },
                    {
                        en: "Peter says, 'We could order some pizza and then watch the golf on TV!' Paula becomes silent.",
                        cn: '彼得说：“我们叫比萨饼外卖，然后一边吃一边开电视看高尔夫球！” 保拉不说话了。'
                    }
                ],
                id: 'middle__Paula',
                category: 'middle'
            },
            {
                word: 'Alfred',
                translation: '艾尔弗雷德（男名）',
                phonetic: "'ælfrɪd",
                partOfSpeech: '',
                examples: [
                    { en: '"On going around with the boys, I guess." said Alfred.', cn: '“我想是和朋友们一起出去，”艾尔弗雷德说。' },
                    {
                        en: "I admire Jay's and Alfred's translations, but I just do my own thing, my own take on what Murakami should sound like in English.",
                        cn: '我很欣赏杰和阿尔弗雷德的译文，但我只会做我自己的事情。 我在翻译中坚持译文应该是地道的目标语言。'
                    },
                    {
                        en: 'Neither Alfred nor I had had any training as teachers, and I at least had no books for the lessons in French, maths and physics that I was supposed to give.',
                        cn: '阿尔弗雷德来自南罗得西亚，我俩谁也没有接受过任何正规的教学培训，至少，我连任何要教授的法语、数学和物理课程的书籍都没有。'
                    }
                ],
                id: 'middle__Alfred',
                category: 'middle'
            },
            {
                word: 'Billy',
                translation: '比利（男名）',
                phonetic: "'bili",
                partOfSpeech: '',
                examples: [
                    { en: 'Billy：But what if my friends see me.', cn: '比利：但要是我朋友看到怎幺办。' },
                    { en: 'I tell you, Billy, she’s an angel.', cn: '我对你说，比利，她真是一个天使。' }
                ],
                id: 'middle__Billy',
                category: 'middle'
            },
            {
                word: 'Candy',
                translation: '坎迪（女名）',
                phonetic: "'kændi:",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Candy',
                category: 'middle'
            },
            {
                word: 'Jerry',
                translation: '杰里（男名）；杰丽（女名）',
                phonetic: "'dʒeri",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Jerry',
                category: 'middle'
            },
            {
                word: 'Emily',
                translation: '埃米莉（女名）',
                phonetic: "'emili",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'At times, Henrietta would tell me she felt slightly guilty that Emily enjoyed staying with her so much.',
                        cn: '有时，亨利埃塔会对我说，埃米莉如此喜欢和她待在一起，让她感到有些内疚。'
                    },
                    {
                        en: 'With my family –my wife Mona and our children Emily, Dylan, and Madeline –we’re excited to have this opportunity to serve the President and the people of the United States of America.',
                        cn: '我和我的家人──即我的夫人蒙娜以及我们的孩子埃米莉、迪伦和梅德林──都很兴奋有这个机会为美国总统及美国人民效劳。'
                    }
                ],
                id: 'middle__Emily',
                category: 'middle'
            },
            {
                word: 'Pam',
                translation: '帕姆（女名）',
                phonetic: 'pæm',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Pam',
                category: 'middle'
            },
            {
                word: 'Picasso',
                translation: '毕加索（西班牙画家）',
                phonetic: "pi'kæsəu",
                partOfSpeech: '',
                examples: [
                    { en: 'The painter modeled his style after that of Picasso.', cn: '这位画家模仿毕加索的绘画风格。' },
                    { en: 'She claimed to be the greatest living fan of Picasso.', cn: '这位姑娘声称自己是活着的头号毕加索迷。' }
                ],
                id: 'middle__Picasso',
                category: 'middle'
            },
            {
                word: 'Carla',
                translation: '卡拉（女名）',
                phonetic: "'kɑ:lə",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Thank you so much, Carla, and thanks for your leadership in this undertaking as well as so much else.',
                        cn: '非常感谢，卡拉，谢谢你在这项事业和其他众多事务中发挥的领导作用。'
                    },
                    {
                        en: '"The unauthorized use of the image of Carla Bruni caused her moral and economic damage," a court in the island capital Saint Denis de la Reunion said on Thursday.',
                        cn: '在该岛首府圣丹尼斯日留尼汪的法院周四表示这代表了“未经授权使用卡拉布鲁尼的图片，在道德名誉和经济上对她造成的损失 ”。'
                    }
                ],
                id: 'middle__Carla',
                category: 'middle'
            },
            {
                word: 'J. K. Rowling',
                translation: 'J. K. 罗琳（英国作家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__J. K. Rowling',
                category: 'middle'
            },
            {
                word: 'Victor',
                translation: '维克托（男名）',
                phonetic: "'vɪktɚ",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Victor',
                category: 'middle'
            },
            {
                word: 'Jean',
                translation: '琼（女名）',
                phonetic: 'dʒiːn',
                partOfSpeech: '',
                examples: [
                    {
                        en: "Jean knew the only way to be content without her husband's love was to seek an expression of love from God.",
                        cn: '琼知道，在没有丈夫的爱的情况下也能得到满足的唯一方式就是寻求上帝表达对她的爱。'
                    }
                ],
                id: 'middle__Jean',
                category: 'middle'
            },
            {
                word: 'Carmen',
                translation: '卡门（女名）',
                phonetic: "'kɑ:mən",
                partOfSpeech: '',
                examples: [
                    { en: 'I like Carmen very much.', cn: '我非常喜欢歌剧“卡门”。' },
                    { en: 'You seem like a ‘Carmen’ to me anyhow.', cn: '不管怎么说，你就像是我的‘卡门’。' }
                ],
                id: 'middle__Carmen',
                category: 'middle'
            },
            {
                word: 'Maria',
                translation: '玛丽亚（女名）',
                phonetic: "'mɛərɪr",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Steven: Yes, but Maria might not be back in. You might have to help me.',
                        cn: '史蒂文： 是的， 但是玛丽亚有可能回不来， 你可能得帮帮我。'
                    }
                ],
                id: 'middle__Maria',
                category: 'middle'
            },
            {
                word: 'Katie',
                translation: '凯蒂（女名）',
                phonetic: "'keiti",
                partOfSpeech: '',
                examples: [
                    { en: 'But Katie, my older sister, is not there.', cn: '但是凯蒂，我的姐姐，她不在那里。' },
                    {
                        en: 'She’d ask me about my girlfriend, Katie, what we did on our dates, whether I said nice things to her.',
                        cn: '她问起我的女朋友凯蒂，问我们约会时都做些什么，以及我是否对她说过好听的。'
                    },
                    {
                        en: 'Katie will not be clapping for me when I finally get my college diploma or giving me advice on my wedding day.',
                        cn: '在我拿到大学文凭那一刻，再也不会有凯蒂为我鼓掌了，在我结婚那天，她也不能从旁给我任何意见。'
                    }
                ],
                id: 'middle__Katie',
                category: 'middle'
            },
            {
                word: 'Sato',
                translation: '佐藤（日本姓氏）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: '"I have reason to think this person is missing," a friend seeking Kimiko Sato wrote on the site.',
                        cn: '“我有理由认为这个人失踪了”，一个寻找佐藤林睿君的朋友在网上写道。'
                    },
                    {
                        en: 'During a date with Ms. Sato one evening, his boss phoned Mr. Shaw on the pretext of asking him to stop by the office to test some teleconferencing gear.',
                        cn: '一天晚上，当肖尔先生和佐藤女士约会的时候，他的老板如两人事先约好的计划打来电话，要求肖尔先生到办公室测试一下某种电话会议系统。'
                    }
                ],
                id: 'middle__Sato',
                category: 'middle'
            },
            {
                word: 'Marie',
                translation: '玛丽（女名）；马里（男名）',
                phonetic: "'mɑ:ri",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Marie',
                category: 'middle'
            },
            {
                word: 'Teresa Lopez Upez',
                translation: '特蕾莎 • 洛佩斯（人名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Teresa Lopez Upez',
                category: 'middle'
            },
            {
                word: 'Marc LeBlanc',
                translation: '马克 • 勒布朗（人名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Marc LeBlanc',
                category: 'middle'
            },
            {
                word: 'Bert',
                translation: '伯特（男名）',
                phonetic: 'bə:t',
                partOfSpeech: '',
                examples: [
                    { en: 'These two guys, in case you forgot, are called Bert and Ernie.', cn: '以防忘记，我告诉大家这两个人物叫伯特和尔尼。' },
                    { en: 'And I remembered Bert Jeffries’s letter telling me to stay away.', cn: '我记得伯特.杰弗里斯的来信告诫我远离战场。' }
                ],
                id: 'middle__Bert',
                category: 'middle'
            },
            {
                word: 'Holly',
                translation: '霍莉（女名）',
                phonetic: "'hɑli",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Holly',
                category: 'middle'
            },
            {
                word: 'Carl',
                translation: '卡尔（男名）',
                phonetic: 'kɑ:l',
                partOfSpeech: '',
                examples: [{ en: 'Call me Carl.', cn: '叫我卡尔吧。' }],
                id: 'middle__Carl',
                category: 'middle'
            },
            {
                word: 'Mark',
                translation: '马克（男名）',
                phonetic: 'mɑːk',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Mark',
                category: 'middle'
            },
            {
                word: 'Jason',
                translation: '杰森（男名）',
                phonetic: "'dʒesən",
                partOfSpeech: '',
                examples: [
                    { en: 'Jason: No, I just want to accumulate some useful experience there.', cn: '杰森:不想，我只想在那里积累一些有用的经验。' },
                    { en: 'Jason: So, can you help me to do this work?', cn: '杰森: 那么你能帮我做这个工作吗？' }
                ],
                id: 'middle__Jason',
                category: 'middle'
            },
            {
                word: 'Ken',
                translation: '肯（男名）',
                phonetic: 'ken',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Do they associate with Mary and Ken out of genuine affection, or because spending time with such miserable types makes them feel (and look) better?',
                        cn: '他们陪伴玛丽和肯恩真的是出于诚挚的感情吗？ 亦或是这些悲惨的人能令他们感觉（或是看起来）更好?'
                    }
                ],
                id: 'middle__Ken',
                category: 'middle'
            },
            {
                word: 'Hayes',
                translation: '海斯（姓）',
                phonetic: 'heiz',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Hayes',
                category: 'middle'
            },
            {
                word: 'Jessica',
                translation: '杰茜卡（女名）',
                phonetic: "'dʒesikə",
                partOfSpeech: '',
                examples: [{ en: 'You can ask Jessica what it’s like to be his sister.', cn: '你可以问问杰西卡，做乔伊的姐姐是个什么感觉。' }],
                id: 'middle__Jessica',
                category: 'middle'
            },
            {
                word: 'Brian',
                translation: '布莱恩（男名）',
                phonetic: "'braɪən",
                partOfSpeech: '',
                examples: [{ en: 'Brian: So I could wear my swimmers to the office?', cn: '布莱恩：那么我可以穿我的游泳衣去办公室了？' }],
                id: 'middle__Brian',
                category: 'middle'
            },
            {
                word: 'Luke',
                translation: '卢克（男名）',
                phonetic: 'luk',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'So the first casualty of the expedition was Luke himself, who decided to leave.',
                        cn: '因此这次探险的第一个受害者是卢克自己，他决定离开。'
                    }
                ],
                id: 'middle__Luke',
                category: 'middle'
            },
            {
                word: 'Griffin',
                translation: '格里芬（姓）',
                phonetic: "'ɡrifin",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Griffin',
                category: 'middle'
            },
            {
                word: 'Trent',
                translation: '特伦特（姓）',
                phonetic: 'trent',
                partOfSpeech: '',
                examples: [
                    { en: 'For Tom and Trent, the trap demonstration was a setup on a stage.', cn: '对汤姆和特伦特来说，这只是个设置在舞台上的陷阱。' },
                    {
                        en: 'Trent would like to see the technology spread among companies as an open-source solution.',
                        cn: '特伦特希望该技术可以作为一种开源的解决方案在公司间共享。'
                    }
                ],
                id: 'middle__Trent',
                category: 'middle'
            },
            {
                word: 'Kitty',
                translation: 'n. 基蒂（女名）',
                phonetic: "'kɪti",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Kitty was down on the junior typist.', cn: '基蒂仇视那个年轻的打字员。' },
                    { en: 'What do you like,Kitty?', cn: '你喜欢什么，基蒂？' },
                    { en: 'Kitty, what do you usually do with your aunt?', cn: '基蒂，你通常与你的姑母做什么？' }
                ],
                id: 'high__Kitty',
                category: 'high'
            },
            {
                word: 'Margot',
                translation: 'n. 玛戈（女名）',
                phonetic: "'mɑɡo",
                partOfSpeech: 'n',
                examples: [
                    { en: 'My sister Margot was born in Frankfurt am Main in Germany in 1926.', cn: '我姐姐玛戈特1926年出生在德国美因河畔的法兰克福。' },
                    {
                        en: "At the end of the year we were both in tears as we said a heartbreaking farewell, because I'd been accepted at the Jewish Lyceum, where Margot also went to school.",
                        cn: '六年级结束的时候，我和科普卢斯夫人都流下了离别的眼泪，因为我被犹太公立中学录取了，而玛戈特也在那里读中学。'
                    }
                ],
                id: 'high__Margot',
                category: 'high'
            },
            {
                word: 'Amy',
                translation: 'n. 艾米（女名）',
                phonetic: "'emɪ",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Amy, do you like mouse?', cn: '艾米，你喜欢老鼠吗？' },
                    { en: '"Bye, Amy, " we said.', cn: '再见,艾米,“我们说。' }
                ],
                id: 'high__Amy',
                category: 'high'
            },
            {
                word: 'Shakespeare',
                translation: '莎士比亚（英国剧作家，诗人）',
                phonetic: "'ʃekspɪr",
                partOfSpeech: '',
                examples: [
                    { en: 'He turned to the study of Shakespeare.', cn: '他致力于莎士比亚的研究。' },
                    { en: 'As a playwriter,Shakespeare belongs to the 16th century.', cn: '作为一位剧作家，莎士比亚属于16世纪。' },
                    {
                        en: 'He was reading the plays of Shakespeare when I met him in the library the other day.',
                        cn: '前几天我在图书馆遇见他时，他正在阅读莎士比亚的戏剧。'
                    }
                ],
                id: 'high__Shakespeare',
                category: 'high'
            },
            {
                word: 'Samuel Johnson',
                translation: '塞缪尔•约翰逊（英国作家，批评家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'One side of today’s political spectrum looks upon it with suspicion and distrust, echoing Samuel Johnson’s witticism that “patriotism is the last refuge of the scoundrel.',
                        cn: '今天政治光谱的一个侧面带着猜疑和不信任的眼光看它，呼应了塞缪尔·约翰逊的俏皮话：“爱国主义是歹徒最后的避难所。”'
                    },
                    {
                        en: 'You have developed a habit that you depend on.As Samuel Johnson so eloquently said, “The chains of habit are generally too small to be felt until they are too strong to be broken.',
                        cn: '你发展了一种你依赖的习惯，正如塞缪尔·约翰逊富有表现力地说：“习惯的链条一般都太微弱了，根本感觉不到，直到它们强大到难以被打破时才感觉得出来。”'
                    },
                    {
                        en: "It's reasonable, I think, to invoke Dr. Johnson here, Samuel Johnson, who writes in his Life of Milton that Milton's unskillful allegory appears to be one of the greatest faults of the poem.",
                        cn: '我认为在这引用塞缪尔·约翰逊的话是很合理的，他一生都在写关于弥尔顿的文章,他指出弥尔顿不熟练的寓言成为了这部诗的大败笔之一。'
                    }
                ],
                id: 'high__Samuel Johnson',
                category: 'high'
            },
            {
                word: 'Lori',
                translation: 'n. 罗丽（女名）',
                phonetic: 'lɔri',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: "There are a few dolphin studies out there, but they don't add up to much, says Lori Marino, a neuroscience and behavioral biology researcher at Emory University in Atlanta.",
                        cn: '现在已有少数关于海豚的研究，但是总计并不多，亚特兰大埃默里大学的神经科学和行为生物学研究者--罗莉马里诺说道。'
                    }
                ],
                id: 'high__Lori',
                category: 'high'
            },
            {
                word: 'Buford',
                translation: 'n. 布福德（姓氏；男名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: "The battle began at 5.30 a.m., when shots were exchanged over Marsh Creek. In the face of Buford's resistance, Heth pushed on cautiously until he reached a point about two miles west of Gettysburg.",
                        cn: '上午5点30分，双方在沼泽溪一带交火，面对巴福德的顽强抵御，海斯步步为营，谨慎前进，一直推进到葛底士堡大约2英里之处，随后他以两个旅的兵力列队进攻。'
                    }
                ],
                id: 'high__Buford',
                category: 'high'
            },
            {
                word: 'Lester',
                translation: 'n. 莱斯特（姓错；男名）',
                phonetic: "'lestə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Lester： I already have a job.', cn: '莱斯特：我已经有工作了。' },
                    { en: 'Lester: I’ve been writing for this magazine for fourteen years, Brad.', cn: '莱斯特：布莱德，我为这家杂志社写了十四年的文章。' }
                ],
                id: 'high__Lester',
                category: 'high'
            },
            {
                word: 'Nelson Mandela',
                translation: '纳尔逊•曼德拉（前南非共和国总统）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Nelson Mandela had received tens of thousands of votes more than anyone else in the initial poll.',
                        cn: '调查一开始，纳尔逊·曼德拉就收到了数以万计的选票，远超过其他任何人。'
                    },
                    {
                        en: 'The next day, at the White House, I held a reception for Nelson Mandela with African-American religious leaders.',
                        cn: '第二天，我和非裔美国宗教领袖们一起在白宫主持接待了纳尔逊·曼德拉。'
                    },
                    {
                        en: 'The exchange is said to have happened when both were in South Africa as guests of President Nelson Mandela in 1997.',
                        cn: '据说，这场交易发生在1997年，当 时她和泰勒都作为南非总统纳尔逊·曼德拉的客人访问南非。'
                    }
                ],
                id: 'high__Nelson Mandela',
                category: 'high'
            },
            {
                word: 'Elias',
                translation: 'n. 伊莱亚斯（男名）',
                phonetic: "ɪ'laɪəs",
                partOfSpeech: 'n',
                examples: [
                    { en: 'There are those who say he is Elias.', cn: '还有人说他就是伊莱亚斯呢。' },
                    { en: 'Elias Sory is the director general of health services in Ghana.', cn: '伊莱亚斯·索瑞是加纳健康服务的处长。' },
                    {
                        en: 'President Elias Hrawi of Lebanon was at the White House at a tense moment in the Middle East.',
                        cn: '在中东局势紧张的时刻，黎巴嫩总统埃利亚斯·赫拉维正在白宫。'
                    }
                ],
                id: 'high__Elias',
                category: 'high'
            },
            {
                word: 'Frederick William I',
                translation: '腓特烈•威廉一世（普鲁士国王）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'However, the next king of Prussia, Frederick William I.', cn: '然而，下一位普鲁士国王，腓特烈威廉一世。' },
                    {
                        en: 'However, the next King of Prussia, Frederick William I, to whom the amber room belonged, decided not to keep it.',
                        cn: '然而，下一位普鲁士国王，腓特烈·威廉一世，这个琥珀屋的主人却决定不要它了。'
                    },
                    {
                        en: 'The Great Elector, Frederick William I, adopted a similar course when he encouraged the French Huguenots to emigrate to Brandenburg-Prussia.',
                        cn: '伟大的选候腓得列威廉一世在鼓励法国的新教徒移居普鲁士的布兰登堡时采取类似的手法。'
                    }
                ],
                id: 'high__Frederick William I',
                category: 'high'
            },
            {
                word: 'Peter the Great',
                translation: '彼得大帝（俄国皇帝）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: "But she knew that was only because, like Peter the Great in a shipwright's yard, he was studying what he wanted to know.",
                        cn: '但是苔丝知道，那只是因为他要学习他想学习的东西，就像彼得大帝到造船厂里去学习一样。'
                    },
                    {
                        en: 'But nonetheless, Peter the Great creates this huge empire that will have over the long run, an enormous influence in European affairs.',
                        cn: '即使如此,彼得大帝还是一手创造了,这个庞大的帝国,长远来看将对欧洲事务产生极大影响'
                    },
                    {
                        en: 'The best example I can think of offhand, I should let this wait, but Peter the Great, the czar of the Russians, who may or may not have beaten his son to death, at least he ordered him tortured.',
                        cn: '我现在临时能想到的最好的例子,就是沙皇彼得大帝,本来要等会再说的,彼得大帝是否判处了自己儿子死刑 还有争论,但至少他曾下令用酷刑折磨他的儿子'
                    }
                ],
                id: 'high__Peter the Great',
                category: 'high'
            },
            {
                word: 'Jan Hasek',
                translation: '简•哈兹克（男名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Jan Hasek',
                category: 'high'
            },
            {
                word: 'Hans Braun',
                translation: '汉斯•布朗（男名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Hans Braun',
                category: 'high'
            },
            {
                word: 'Anna Petrov',
                translation: '安娜•帕特罗夫（女名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Anna Petrov',
                category: 'high'
            },
            {
                word: 'Johann Webber',
                translation: '约翰•韦伯（男名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Johann Webber',
                category: 'high'
            },
            {
                word: 'Pausanias',
                translation: '帕萨尼亚斯（男名；古希腊人名）',
                phonetic: "pɔ:'seiniæs",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'What is in question is properly speaking the same theme which is proposed to us by the discourse of Pausanias.',
                        cn: '受到质疑的，适当来说，是相同的主题，由保撒尼亚斯的论述跟我们建议。'
                    },
                    {
                        en: 'Pausanias, who was a Greek writer 2000 years ago, has come on a magical journey to find out about the present day Olympic Games.',
                        cn: '帕萨尼亚斯是一位2000年前的古希腊作家，经过一路不可思议的跋涉后，来询问有关现代奥运会情况。'
                    }
                ],
                id: 'high__Pausanias',
                category: 'high'
            },
            {
                word: 'Hippomenes',
                translation: 'n. 希波墨涅斯（男名；古希腊人名）',
                phonetic: "hi'pɔməni:z",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Do you think Hippomenes deserved to win the race?', cn: '你认为希波墨涅斯应该（算）赢吗？' },
                    {
                        en: 'However, when he saw Atlanta come out of her house to run, Hippomenes changed his mind.',
                        cn: '然而，当他看到亚特兰大从她的房子出来跑步的时候，希波墨涅斯改变了他的心意。'
                    }
                ],
                id: 'high__Hippomenes',
                category: 'high'
            },
            {
                word: 'Daisy',
                translation: 'n. 戴茜（女名）',
                phonetic: "'deɪzɪ",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Daisy',
                category: 'high'
            },
            {
                word: 'Freddy',
                translation: 'n. 弗雷迪（男名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Freddy the Pharisee: Rigid, narrow-minded, and legalistic, he has a rule for everything.',
                        cn: '弗雷迪 法利赛人：顽固，狭隘，墨守陈规，他对一切事物都制定了规则。'
                    },
                    {
                        en: "This week's episode brought back Freddy Rumsen hoping that Pond's cold cream would be his ticket back into the ad business.",
                        cn: '本周播放的这一集，弗雷迪•拉姆森重新出现在剧情里，他希望自己带来的旁氏冷霜的订单能帮他重回广告业。'
                    }
                ],
                id: 'high__Freddy',
                category: 'high'
            },
            {
                word: 'Christopher Columbus',
                translation: '克利斯朵夫•哥伦布（意大利航海家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'But the real question for Christopher Columbus was: How do I best get to the West Indies?',
                        cn: '但对克里斯多夫·哥伦布而言，真正的问题是，我怎样才能最快到达西印度？'
                    },
                    { en: 'This may be the spot where Christopher Columbus rached America.', cn: '这里也许是克里斯托弗.哥伦布到达美洲的地点.' }
                ],
                id: 'high__Christopher Columbus',
                category: 'high'
            },
            {
                word: 'Hari',
                translation: 'n. 哈利（男名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [{ en: 'Johann Hari is a writer for the Independent newspaper.', cn: '约翰 • 哈里是《独立报》作家。' }],
                id: 'high__Hari',
                category: 'high'
            },
            {
                word: 'Mark Twain',
                translation: '马克•吐温(美国作家)',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Mark Twain travel anywhere in all his life , his adventure aboard is the material of his works.',
                        cn: '马克·吐温一生中到处旅游，他在国外的历险经历是他一些作品的素材。'
                    },
                    {
                        en: 'Ron Powers is the author of Mark Twain: A Life, and Sam and Laura, a play about Twain and his lost love.',
                        cn: '罗恩·鲍沃斯，《山姆和劳拉：马克·吐温的爱情人生》的作者，一部关于马克·吐温失去的爱情的戏剧。'
                    },
                    {
                        en: '“On one of my visits we happened to be talking about Mark Twain, ” Byrd wrote to Gold.',
                        cn: '“一次拜访中，我们碰巧谈到了马克·吐温，”伯德在给古尔特的信中写道。'
                    }
                ],
                id: 'high__Mark Twain',
                category: 'high'
            },
            {
                word: 'Tom Sawyer',
                translation: 'n. 汤姆•索亚（人名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Tom Sawyer',
                category: 'high'
            },
            {
                word: 'Huckleberry Finn',
                translation: '哈克贝利•费恩（人名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Huckleberry Finn',
                category: 'high'
            },
            {
                word: 'Samuel Langhorne Clemens',
                translation: '塞缪尔•兰霍恩•克莱门斯（人名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: "Samuel Langhorne Clemens earned his steamboat pilot 's license.", cn: '塞缪尔·朗荷恩·克列门斯拿到了轮船舵手执照。' },
                    {
                        en: 'Samuel Langhorne Clemens more commonly known by his pen name Mark Twain was a great American author.',
                        cn: '萨缪尔·兰亨·克莱门是一位伟大的美国作家，他的笔名马克·吐温更为人熟知。'
                    }
                ],
                id: 'high__Samuel Langhorne Clemens',
                category: 'high'
            },
            {
                word: 'Roderick',
                translation: 'n. 罗德里克（男名）',
                phonetic: "'rɔdərik",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Roderick Lewis did three odd things yesterday.', cn: '罗德里克刘易斯昨天做了三件怪事。' },
                    {
                        en: 'We were joined by Roderick Hawkins, director of communications for the Chicago Urban League.',
                        cn: '和我们一起去的还有芝加哥城市联盟的总监罗德里克霍金斯。'
                    },
                    {
                        en: 'Roderick Lewis, 23, reportedly approached Officer Scott Bloom in West Haven and yelled, "I need a bag of dust."',
                        cn: '据报道，这位名为罗德里克 路易斯的23岁男子在西天堂接近警官斯科特布鲁姆、并大喊“我要一包粉！”'
                    }
                ],
                id: 'high__Roderick',
                category: 'high'
            },
            {
                word: 'Oliver',
                translation: 'n. 奥利弗（男名）',
                phonetic: "'ɑləvɚ",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Oliver Stone finally opened the door for you.', cn: '奥利弗斯通最后为你打开了那扇门。' },
                    {
                        en: 'James and Oliver admit to occasionally pretending to be each other when they were much younger, but not as much as another set of twins at their school, on whom they based the Weasleys.',
                        cn: '詹姆斯和奥利弗承认，他们很小的时候，偶尔会假扮对方，但是扮的次数远不及当时他们学校的另一对双胞胎，韦斯莱兄弟就象这另一对双胞胎一样。'
                    },
                    {
                        en: '"We were relatively good," says Oliver, laughing, "but these boys would swap lessons – one was good at cricket, the other was good at science.',
                        cn: '“我们相对来说还是挺乖的，”奥利弗笑着说，“但这些男孩子会交换身份上课——他们一个板球打得好，一个比较喜欢科学。'
                    }
                ],
                id: 'high__Oliver',
                category: 'high'
            },
            {
                word: 'Horace',
                translation: 'n. 霍勒斯（男名）',
                phonetic: "'hɔrəs",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Horace',
                category: 'high'
            },
            {
                word: 'Isaac Newton',
                translation: '艾萨克•牛顿（英国科学家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'What Sir Isaac Newton was doing late at night may surprise you.', cn: '在深夜艾萨克·牛顿先生做的事可能会令你感到惊奇。' },
                    {
                        en: 'Sir Isaac Newton supposedly discovered gravity through the fall of an apple.',
                        cn: '据称艾萨克·牛顿爵士通过苹果落地，发现了万有引力。'
                    },
                    {
                        en: 'One of the most well known tenets of physics — for every action, there is an equal and opposite reaction — was first discovered by Isaac Newton.',
                        cn: '物理学最广为人知的一条定律——对任何一个动作而言，存在一个相同大小的反作用——由艾萨克·牛顿发现。'
                    }
                ],
                id: 'high__Isaac Newton',
                category: 'high'
            },
            {
                word: 'Albert Einstein',
                translation: '阿尔伯特•爱因斯坦（德裔美国科学家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'This could be done because of the way gravity bends light, as demonstrated by Albert Einstein.',
                        cn: '这所以能够这么做，是因为阿尔伯特·爱因斯坦已经证明了的重力弯曲光线的方式。'
                    },
                    {
                        en: 'At the dawn of the nuclear age that he helped to unleash, Albert Einstein said: “Now everything has changed…” And he warned: “We are drifting towards a catastrophe beyond comparison.',
                        cn: '在他帮助开创的核时代来临之际，阿尔伯特·爱因斯坦说：“现在，一切都改变了……”。 他还警告说：“我们正在向一场无法比拟的灾难滑落。'
                    },
                    {
                        en: 'Albert Einstein was able to conceive his theory of relativity because he thought that time and space might not be immutable.',
                        cn: '阿尔伯特·爱因斯坦能够演算出相对论，是因为他认为时间和空间不可能一成不变。'
                    }
                ],
                id: 'high__Albert Einstein',
                category: 'high'
            },
            {
                word: 'Stephen Hawking',
                translation: '斯蒂芬•霍金（英国科学家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'British scientist Stephen Hawking is worried that any extraterrestrial life we find is likely to be a creature out of the movie Predator – not ET.',
                        cn: '英国科学家史蒂芬·霍金曾担心，我们找到的任何一种地外生命都更有可能类似《掠食者》，而不像《ET外星人》那么友善。'
                    },
                    {
                        en: "Professor Stephen Hawking, one of the world's foremost physicists, is seriously ill and in hospital in Cambridge, Cambridge University said in a statement on Monday.",
                        cn: '(路透社)-在周一的声明中，剑桥大学称，史蒂芬·霍金教授，世界上最顶尖的物理学家之一，因患重病而在剑桥住院。'
                    }
                ],
                id: 'high__Stephen Hawking',
                category: 'high'
            },
            {
                word: 'Joan of Arc',
                translation: '圣女贞德（法国民族女英雄）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Joan of Arc',
                category: 'high'
            },
            {
                word: 'Edward Lear',
                translation: '爱德华•李尔（英国作家、画家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Edward Lear',
                category: 'high'
            },
            {
                word: 'Garcia',
                translation: '加西亚（姓）',
                phonetic: "'ga:ʃjə",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'After more than two hours in the chocolate, does he still have a taste for it?"Not so much anymore, " Garcia said.',
                        cn: '在身陷巧克力两个多小时之后，加西亚还有胃口吃巧克力么？ 他说：“再不要像这样多了！”'
                    },
                    {
                        en: 'Garcia and Youngdahl live in a house for students with an interest in Russian studies.',
                        cn: '住在一起的加西亚和扬达尔都对关于俄罗斯的研究抱有兴趣。'
                    }
                ],
                id: 'high__Garcia',
                category: 'high'
            },
            {
                word: 'Casey',
                translation: '凯西（姓）',
                phonetic: "'keisi:",
                partOfSpeech: '',
                examples: [{ en: 'Jim and Casey are old friends from college.', cn: '吉姆和凯西是大学时代的老朋友。' }],
                id: 'high__Casey',
                category: 'high'
            },
            {
                word: 'Janson',
                translation: '詹森（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [{ en: 'Operator makes a call to Janson.', cn: '接线员给詹森打电话。' }],
                id: 'high__Janson',
                category: 'high'
            },
            {
                word: 'Slade',
                translation: '斯莱德（姓）',
                phonetic: 'sleid',
                partOfSpeech: '',
                examples: [{ en: 'Slade: No, I’m just getting warmed up.', cn: '斯莱德：没有，我这才刚刚热身。' }],
                id: 'high__Slade',
                category: 'high'
            },
            {
                word: 'Southerton',
                translation: '萨瑟顿（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Southerton',
                category: 'high'
            },
            {
                word: 'Giotto di Bondone',
                translation: '乔托（意大利画家、雕刻家、建筑师）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Giotto di Bondone',
                category: 'high'
            },
            {
                word: 'Masaccio',
                translation: '马萨乔（意大利画家）',
                phonetic: "mɑ:'sɑ:ttʃɔ:",
                partOfSpeech: '',
                examples: [],
                id: 'high__Masaccio',
                category: 'high'
            },
            {
                word: 'Leonardo da Vinci',
                translation: '列奥纳多•达•芬奇（意大利著名画家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Two previously unseen paintings by Leonardo da Vinci have gone on public display for the first time in Italy.',
                        cn: '绘画大师莱昂纳多·达芬奇的两幅未曾露面的作品近日在意大利首次公开展出。'
                    },
                    {
                        en: 'Using computer scans she found that the face on the Turin Shroud and a self portrait of Leonardo da Vinci share the same dimensions.',
                        cn: '她在使用计算机扫描之后发现，都灵裹尸布的遗像与列奥纳多·达·芬奇的自画像具有诸多相同的特点。'
                    }
                ],
                id: 'high__Leonardo da Vinci',
                category: 'high'
            },
            {
                word: 'Michelangelo',
                translation: '米开朗基罗（意大利文艺复兴雕刻家、画家、建筑师和诗人）',
                phonetic: 'ˌmaɪkəlˈændʒəˌlo',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'It took Michelangelo 4 years to paint the ceiling. He painted it while lying on his back.',
                        cn: '米开朗基罗在天花板上作画花了4年时间, 且是用仰卧的姿势进行的。'
                    }
                ],
                id: 'high__Michelangelo',
                category: 'high'
            },
            {
                word: 'Matisse',
                translation: '马蒂斯（法国画家）',
                phonetic: "mə'ti:s",
                partOfSpeech: '',
                examples: [{ en: 'His paintings have outstanding style of Matisse.', cn: '他的绘画具有明显的马蒂斯的绘画风格。' }],
                id: 'high__Matisse',
                category: 'high'
            },
            {
                word: 'Monet',
                translation: '莫奈（法国画家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Monet described his attempts to observe and capture the colors in nature thus: “I’m chasing the merest sliver of color.',
                        cn: '莫奈如此描述自己观察和捕捉大自然中的色彩的尝试：“我追逐最最细微的色彩。'
                    },
                    {
                        en: "But this rarely works-after all, a knowledgeable collector isn't going to buy a stolen Monet that he can't display publicly.",
                        cn: '但这种情况很少，毕竟知识渊博的藏家不会买一副被盗而无法公开展示的莫奈名画。'
                    },
                    {
                        en: 'Monet said: “Color owes its brightness to force of contrast rather than to its inherent qualities … primary colors look brightest when they are brought into contrast with their complementaries.',
                        cn: '莫奈说过：“色彩的亮度，是源于对比的力度，而非其固有特质……原色在与其补色对比时，看起来最亮。”'
                    }
                ],
                id: 'high__Monet',
                category: 'high'
            },
            {
                word: 'Sophie',
                translation: '索菲（女名）',
                phonetic: "'səufi",
                partOfSpeech: '',
                examples: [{ en: 'Sophie: Look! Who is that guy on the stage?', cn: '索菲：看那边，舞台上的那个人是谁啊？' }],
                id: 'high__Sophie',
                category: 'high'
            },
            {
                word: 'Armstrong',
                translation: '阿姆斯特朗（姓）',
                phonetic: "'ɑ:mstrɔŋ",
                partOfSpeech: '',
                examples: [
                    { en: '"One small step for man, " Neil Armstrong said.', cn: '“个人一小步”，尼尔.阿姆斯特朗说道。' },
                    {
                        en: 'Aldrin soon followed Armstrong down the ladder to become the second man to stand on the moon.',
                        cn: '奥尔德林不久跟随阿姆斯特朗走下舷梯，成为在月球上登陆的第二个人。'
                    }
                ],
                id: 'high__Armstrong',
                category: 'high'
            },
            {
                word: 'Janice',
                translation: '贾尼丝（女名）',
                phonetic: "'dʒænis",
                partOfSpeech: '',
                examples: [{ en: "Janice: It's been three years!", cn: '贾尼斯：三年了！' }],
                id: 'high__Janice',
                category: 'high'
            },
            {
                word: 'Rosalyn',
                translation: 'n. 罗莎琳（女名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'While studying the chemistry of human body , Dr. Rosalyn Yalow won a Nobel Prize for the research she conducted on the role of hormones .',
                        cn: '罗莎琳，雅罗博士在研究人体化学组成的过程中，因为荷尔蒙的作用所进行的研究而获得了一项诺贝尔奖。'
                    }
                ],
                id: 'high__Rosalyn',
                category: 'high'
            },
            {
                word: 'Sally',
                translation: 'n. 萨利（女名）',
                phonetic: "'sæli",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Felicity (to Sally): I guess what I’m saying is this might all be a colossal mistake, as my dad would say, but on the other hand it may…maybe it’ll save my life or something.',
                        cn: '费利西蒂(对莎莉说): 我猜我想要说的这个可能是个巨大的错误，如同我爸爸说的那样，但是另一方面也许……也许它可拯救我的生命或者别的什么。'
                    },
                    { en: 'But watch out for a duck I call Sally.', cn: '不过请注意一只被我叫做萨莉的鸭子。' }
                ],
                id: 'high__Sally',
                category: 'high'
            },
            {
                word: 'Sanders',
                translation: 'n. 桑德斯（姓）',
                phonetic: "'sændəz",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Judge Sanders: Get out of the chair!', cn: '法官桑德斯：离开这把椅子！' },
                    {
                        en: '"She taught me confidence, and with confidence I could do anything at all, " says Sanders.',
                        cn: '桑德斯说，“她教会了我自信，拥有自信我就敢于面对一切。'
                    },
                    {
                        en: 'She said Sanders will be teaching a class for parents and caregivers of adolescents or children with brain disorders.',
                        cn: '桑德斯也说她将要一直为那些有智力障碍的儿童或青少年的父母或看护人上课。'
                    }
                ],
                id: 'high__Sanders',
                category: 'high'
            },
            {
                word: 'Claire',
                translation: 'n. 克莱尔（女名）',
                phonetic: 'klεə',
                partOfSpeech: 'n',
                examples: [
                    { en: 'Oh, yes, of course. Some old woman, Claire something I guess.', cn: '啊，是的，当然，一个老太太，叫克莱尔还是什么。' },
                    {
                        en: 'I spent time with Claire [Danes], and her portrayal of me back then is very authentic. She was me.',
                        cn: '我和克莱尔相处了一段时间，她对于那时的我的演绎是很可信的，她就是曾经的我。'
                    },
                    {
                        en: 'He knew they had wanted to have a baby, but Claire had suffered a miscarriage after becoming pregnant by another donor.',
                        cn: '当时他知道她们很想要有个小孩，而克莱儿却通过另外一个捐精者的精子怀孕后不幸流产。'
                    }
                ],
                id: 'high__Claire',
                category: 'high'
            },
            {
                word: 'Marion',
                translation: 'n. 玛丽安（女名）',
                phonetic: "'mɛəriən",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Marion',
                category: 'high'
            },
            {
                word: 'Clancy',
                translation: 'n. 克兰西（男名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Clancy however says the announcement of the shortfall could be used positively.',
                        cn: '不过克兰西说，可以正面地利用关于援助不足的消息。'
                    },
                    {
                        en: "By 1958 he had teamed up with his friend Liam Clancy and Liam's brothers Paddy and Tom, who had come from Tipperary to America before him, and the gold continued to accrue.",
                        cn: '1958年他伙同他的朋友雷姆-克兰西(他先于汤米从蒂帕雷里来到美国)以及雷姆的兄弟派蒂和汤姆一起成立了乐队，随后财源就滚滚而来。'
                    },
                    {
                        en: 'Moreover, the spy game that the two superpowers have played for years, which was so breathtakingly described by Ian Fleming, Tom Clancy, and John le Carré, has outlived its ideological value.',
                        cn: '而且，间谍游戏在两个大国之间持续了很多年，在伊恩弗莱明，汤姆克兰西和约翰勒卡雷笔下被描绘的如此令人激动，已经远超越了意识形态的价值。'
                    }
                ],
                id: 'high__Clancy',
                category: 'high'
            },
            {
                word: 'Abigail',
                translation: 'n. 阿比盖尔（女名）',
                phonetic: "'æbɪ,gel",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Like other women of the time, Abigail lacked formal education; but her curiosity spurred her keen intelligence, and she read avidly the books at hand.',
                        cn: '与同时代其他的妇女一样，阿比盖尔缺乏正式的教育。 但是她的好奇心使她生性聪敏。'
                    },
                    {
                        en: 'He complained to his wife Abigail, "My country has in its wisdom contrived for me the most insignificant office that ever the invention of man contrived or his imagination conceived.',
                        cn: '他曾对他的妻子阿比盖尔抱怨，“我们的国家自做聪明，拿那个最不起眼的职位给我，可能就是某个人即兴杰作或者是他的想象。”'
                    },
                    {
                        en: 'As wife of the first Vice President, Abigail became a good friend to Mrs. Washington and a valued help in official entertaining, drawing on her experience of courts and society abroad.',
                        cn: '作为第一副总统夫人，阿比盖尔成为华盛顿夫人要好的朋友，依靠她在法院和国外的生活经验，对于官方娱乐活动提供了有益的帮助。'
                    }
                ],
                id: 'high__Abigail',
                category: 'high'
            },
            {
                word: 'Jamie',
                translation: 'n. 杰米（男名）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: '"Contractors are using fine print to deny women like Jamie Leigh Jones their day in court, " he said in a Senate debate.',
                        cn: '“承包商钻了法律的空子，拒绝类似杰米·雷·琼斯遭遇的妇女走向法庭。” 他在参议院辩论上说。'
                    },
                    {
                        en: 'Some reports in the past week had even said she planned to name the child Jamilyn, after her younger sister Jamie and her mother Lynne.',
                        cn: '在过去的一周内，有报道称她 计划给孩子起名叫杰米琳，名字取自于她妹妹的名字杰米和母亲的名字琳。'
                    },
                    {
                        en: "Previous winners include Bono and Jamie Oliver, and the money is given to the winner's chosen charity.",
                        cn: '以前的获奖者有波诺和杰米·奥利弗，奖金将赠予获奖者选择的慈善机构。'
                    }
                ],
                id: 'high__Jamie',
                category: 'high'
            },
            {
                word: 'Sam',
                translation: 'n. 萨姆（男名）',
                phonetic: 'sæm',
                partOfSpeech: 'n',
                examples: [
                    { en: 'Sam and John are pulling the rope.', cn: '山姆和约翰在拔河。' },
                    { en: 'Sam and I have been together for over a year.', cn: '山姆和我在一起已经有一年多了。' },
                    {
                        en: 'Over several hours, Sam explained my assignment, should I choose to accept it.',
                        cn: '过了几个小时，我的任务山姆解释说，我应该选择接受它。'
                    }
                ],
                id: 'high__Sam',
                category: 'high'
            },
            {
                word: 'Lia',
                translation: 'n. 莉亚（女名）',
                phonetic: "æ'fi:ljə",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Lia',
                category: 'high'
            },
            {
                word: 'George Bernard Shaw',
                translation: '乔治•伯纳德•萧 （也译萧伯纳，英国剧作家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'The general population feels a connection to it and its popularity is best described by George Bernard Shaw when he said, "The problem with political jokes is that they get elected.',
                        cn: '普通大众感觉得到某种与政治的关联； 而其最为盛行的方面，乔治·萧伯纳描述得最好，他说：“问题是，他们总是与政治笑话一起当选。”'
                    }
                ],
                id: 'high__George Bernard Shaw',
                category: 'high'
            },
            {
                word: 'Higgins',
                translation: '希金斯 （姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Hey, this may be a way of getting rid of Dean Higgins.', cn: '嘿，这可能是一个摆脱希金斯院长的一个方法。' },
                    { en: 'He interpreted the role of Professor Higgins wonderfully.', cn: '他非常出色地扮演了希金斯这个角色。' },
                    {
                        en: 'He is also, like Higgins, one of the coolest and most tenacious of competitors.',
                        cn: '如同希金斯一样，他也是最为优秀，最为顽强的选手之一。'
                    }
                ],
                id: 'high__Higgins',
                category: 'high'
            },
            {
                word: 'Pickering',
                translation: '皮克林（姓）',
                phonetic: "'pikəriŋ",
                partOfSpeech: '',
                examples: [
                    {
                        en: '“We are now at the beginning of the beginning” of a new relationship, Pickering said.',
                        cn: '皮克林说，我们现在处于两国新关系的“开端的开端”。'
                    },
                    {
                        en: '" Pickering agrees that the paper is "very important and original," adding that "it provides strong evidence that the neural coupling underlies the way that speakers come to understand each other.',
                        cn: '皮克林同意这篇论文“非常重要并且十分新颖”，他还补充说，“这项研究为奠定了交谈双方能够彼此理解的神经耦合提供了强有力的证据。”'
                    }
                ],
                id: 'high__Pickering',
                category: 'high'
            },
            {
                word: 'Pearce',
                translation: '皮尔斯（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: '"Rather like blood circulating in our veins, inside the termites nest it is air that is moved by external temperature and pressures," Pearce explained.',
                        cn: '皮尔斯说：“就象我们血管里的血液循环，在白蚁巢穴内部，空气随着外界的温度和压力而流动。'
                    },
                    {
                        en: "We've seen it all before with Stuart Pearce, Gareth Southgate and Chris Waddle, who've missed penalties and got the blame of the nation.",
                        cn: '我们以前也曾见过，斯图亚特皮尔斯，加雷斯索斯盖特以及克里斯·沃德尔，那么曾罚丢点球，受到国家的责备。'
                    },
                    {
                        en: "Jolie receives a secret note. She's to take a train from Paris to Venice, pick an average tourist and fool her pursuers into thinking that this stranger is Pearce.",
                        cn: '很快，朱莉收到了一张神秘的纸条，纸条上指示她搭上从巴黎到威尼斯的火车，在火车上选择一名普通的游客，伺机使监视者相信这个人就是皮尔斯。'
                    }
                ],
                id: 'high__Pearce',
                category: 'high'
            },
            {
                word: 'Bahmad',
                translation: '巴姆德（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Bahmad',
                category: 'high'
            },
            {
                word: 'Dempsey',
                translation: '登普西（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Prior to the start of the fight, promoter Tex Rickard visits Dempsey and his manager in his dressing room.',
                        cn: '比赛开始前，赞助人特克斯·里卡德在更衣室里拜访了邓普西和他的经理人（卡恩斯）。'
                    },
                    {
                        en: 'We had to find a lawyer to help us understand the actions of Dempsey but Blatter came in and said he understood our plight.',
                        cn: '我们必须找一个律师来帮助我们理解邓普西的行为，但是布拉特进来说，他理解我们的苦境。'
                    },
                    {
                        en: "Speaking about the conference, Noel Dempsey TD, minister for transport, commented, “It's a proven fact that speed has a direct relationship with collision severity.",
                        cn: '在会议上，交通运输部部长诺尔·邓普西指出：“这是一个速度和车祸的严重程度之间有直接关系的事实证明。'
                    }
                ],
                id: 'high__Dempsey',
                category: 'high'
            },
            {
                word: 'Shipley',
                translation: '希普利（姓）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'The Linthicum Zip Code, which includes the community of Linthicum, Linthicum Heights, and Shipley, is just minutes from Baltimore.',
                        cn: '林西克姆距巴尔的摩只有几分钟路程，它的邮政区域包括林西克姆社区、林西克姆高地和钢皮普利。'
                    }
                ],
                id: 'high__Shipley',
                category: 'high'
            },
            {
                word: 'Arthur Conan Doyle',
                translation: '亚瑟.柯南道尔（1859-1930，英国医师、小说家、推理小说家，创造了私人侦探福尔摩斯的形象）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Arthur Conan Doyle, himself a physician, imbued his character with the kind of keen observational skills so essential to a good physician.',
                        cn: '内科医生亚瑟柯南道尔笔下的角色，具有敏锐的观察力，这对一个好医生来说相当重要。'
                    },
                    {
                        en: 'They admitted they had made cut-out fairies and held them up with hatpins, and said they realized the joke had gone too far when Arthur Conan Doyle was duped.',
                        cn: '他们承认他们只是用纸剪出小精灵的形状然后用别针固定照了几张相，直到柯南·道尔也上当之后他们才意识到这玩笑开大了。'
                    }
                ],
                id: 'high__Arthur Conan Doyle',
                category: 'high'
            },
            {
                word: 'Sherlock Holmes',
                translation: 'n. 夏洛克•福尔摩斯',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [{ en: 'By the way, do you like the Sherlock Holmes in movies?', cn: '顺便问一下，你喜欢电影中的夏洛克•福尔摩斯吗？' }],
                id: 'high__Sherlock Holmes',
                category: 'high'
            },
            {
                word: 'Theseus',
                translation: '忒修斯（希腊神话雅典王子）',
                phonetic: "'θi:sju:s; -siəs",
                partOfSpeech: '',
                examples: [
                    { en: 'Nietzsche often spoke of Ariadne, a faithful companion of Theseus.', cn: '尼采经常提到阿里阿德涅，她是提修斯忠实的伴侣。' },
                    {
                        en: 'However, to come to those who have become princes by means of their own virtue and not because of Fortune, I say that the most outstanding are Moses, Cyrus, Romulus, Theseus, and others of their kind.',
                        cn: '不管怎样，对于那些通过他们自己的才干而非命运成为君主的人，我要说最杰出的就是摩西、居鲁士、罗穆卢斯、忒修斯，以及其他像他们这般的人物*。'
                    }
                ],
                id: 'high__Theseus',
                category: 'high'
            },
            {
                word: 'Grace',
                translation: '- n. 优雅；恩惠；慈悲；魅力\n- vt. 使优美\n\nGracen. 格雷斯（女子名）\n\n时 态:  \ngraced, gracing, graces',
                phonetic: 'ɡreɪs',
                partOfSpeech: 'n / vt',
                examples: [],
                id: 'pte_junior__Grace',
                category: 'pte_junior'
            },
            {
                word: 'Bishop',
                translation: 'n. 主教\n\nBishop毕晓普, 伊丽莎白((1911-1979) 美国诗人, 以其大量的, 描述性的著作闻名, 如“加油站”(1965年))',
                phonetic: 'ˈbɪʃəp',
                partOfSpeech: 'n',
                examples: [],
                id: 'pte_fib_r_senior__Bishop',
                category: 'pte_fib_r_senior'
            },
            {
                word: 'Christ',
                translation: 'n. 基督， 救世主',
                phonetic: 'kraɪst',
                partOfSpeech: 'n',
                examples: [{ en: 'a follower of Christ', cn: '耶稣的门徒' }],
                id: 'cet4__Christ',
                category: 'cet4'
            },
            {
                word: 'Jesus',
                translation: 'n. 耶稣',
                phonetic: "'dʒizəs",
                partOfSpeech: 'n',
                examples: [
                    { en: 'As a scientist,he disbelieves in Jesus.', cn: '作为一名科学家，他不信耶稣。' },
                    { en: 'What do you want with us, Jesus of Nazareth?', cn: '拿撒勒的耶稣，我们与你有什么相干？' },
                    { en: 'According to the Christian religion,Jesus Christ resurrected from death.', cn: '根据基督教的说法，耶稣基督曾死而复生。' }
                ],
                id: 'high__Jesus',
                category: 'high'
            },
            {
                word: 'Cyclops',
                translation: '塞克罗伯斯（希腊神话独眼巨人）',
                phonetic: "'saɪklɑps",
                partOfSpeech: '',
                examples: [],
                id: 'high__Cyclops',
                category: 'high'
            },
            {
                word: 'Circe',
                translation: '瑟茜（希腊神话女巫，有把人变成猪的法术）',
                phonetic: "'sə:si",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Cookery means the knowledge of Medea and of Circe and of Helen and of the Queen of Sheba.',
                        cn: '烹饪术包含着美狄娅、瑟西、海伦和希巴女王的学问。'
                    },
                    {
                        en: 'Among the characters Harry learns of is Circe , a powerful witch who turns men into pigs in one of the greatest stories ever told, The Odssey.',
                        cn: '哈利学习的人物之一是瑟茜，瑟茜是法力高强的女巫，能把人变成猪。她出现在最伟大的故事之一----《奥德赛》中。'
                    }
                ],
                id: 'high__Circe',
                category: 'high'
            },
            {
                word: 'Sinis',
                translation: '西尼斯（古希腊神话中的一个强盗）',
                phonetic: '',
                partOfSpeech: '',
                examples: [{ en: 'Sinis caught sight of Theseus and hailed him.', cn: '辛尼斯看到忒修思，就和 他打招呼。' }],
                id: 'high__Sinis',
                category: 'high'
            },
            {
                word: 'Procrustes',
                translation: '普罗克拉斯提斯（古希腊神话传说中 Attica 的一个强盗）',
                phonetic: "prəu'krʌsti:z",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Near to the banks of the Cephissus lived the giant Procrustes , of whom (as was the case with other giants) Theseus had heard long before he met him.',
                        cn: '在科菲索斯河岸边住着巨人普洛克洛斯忒斯，就象其它的巨人一样，忒修斯早就听说了他的情况。'
                    },
                    {
                        en: 'Procrustes was accustomed to invite strangers to spend a night in his cave, and if the guest were tall he would lead him to the shorter bed.',
                        cn: '普洛克洛斯忒斯总是请陌生人到山洞中过夜，如果客人很高，他就把他领到较短的床上。'
                    }
                ],
                id: 'high__Procrustes',
                category: 'high'
            },
            {
                word: 'Pygmalion',
                translation: 'n. 皮格马利翁（希腊神话）',
                phonetic: "piɡ'meiljən",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Pygmalion',
                category: 'high'
            }
        ]
    },
    {
        title: '国家语言',
        words: [
            {
                word: 'China',
                translation: '中国',
                phonetic: 'ˈtʃaɪnə',
                partOfSpeech: 'n',
                examples: [],
                id: 'primary__China',
                category: 'primary'
            },
            {
                word: 'Chinese',
                translation: 'n. 汉语，中文；中国菜，中餐；中餐馆',
                phonetic: 'tʃaɪniːz',
                partOfSpeech: 'n',
                examples: [{ en: 'Do you fancy going out for a Chinese?', cn: '你想不想出去吃顿中餐？' }],
                id: 'middle__Chinese',
                category: 'middle'
            },
            {
                word: 'America',
                translation: 'n. 美洲；美国',
                phonetic: 'əˈmɛrɪkə',
                partOfSpeech: 'n',
                examples: [
                    { en: 'I may go to America or I may not,it all depends.', cn: '我也许去美国，也许不去，要视情况而定。' },
                    { en: 'She scampered in London then went back to America.', cn: '她在伦敦匆忙地游览了一番，然后回到了美国。' },
                    { en: 'Some of the mountains in America have not yet been mapped out.', cn: '美洲有些山脉还没有在地图上标出来。' }
                ],
                id: 'cet4__America',
                category: 'cet4'
            },
            {
                word: 'American',
                translation: '美国的',
                phonetic: 'əˈmɛrɪkən',
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'Her mother is American.', cn: '她妈妈是美国人。' },
                    { en: 'a famous American writer', cn: '一位著名的美国作家' }
                ],
                id: 'primary__American',
                category: 'primary'
            },
            {
                word: 'the United States',
                translation: 'n. 美国；美利坚合众国',
                phonetic: 'ði juˈnaɪtɪd stets',
                partOfSpeech: 'n',
                examples: [],
                id: 'middle__the United States',
                category: 'middle'
            },
            {
                word: 'the UK',
                translation: 'n. 英国',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    { en: "It is not known if they will return to the UK for the child's birth .", cn: '现在还不知道他们是否会为了孩子的出生而回到英国。' }
                ],
                id: 'middle__the UK',
                category: 'middle'
            },
            {
                word: 'England',
                translation: 'n. 英格兰；英国',
                phonetic: "'iŋɡlənd",
                partOfSpeech: 'n',
                examples: [],
                id: 'middle__England',
                category: 'middle'
            },
            {
                word: 'English',
                translation: 'n. 英语; adj. 英格兰的；英格兰人的；英语的',
                phonetic: "'ɪŋɡlɪʃ",
                partOfSpeech: 'n / adj',
                examples: [
                    { en: 'Do you speak English?', cn: '你会说英语吗？' },
                    { en: 'leaflets written in plain English', cn: '用简单英语写的传单' },
                    { en: 'the English countryside', cn: '英格兰乡村' },
                    { en: 'English grammar', cn: '英语语法' }
                ],
                id: 'middle__English',
                category: 'middle'
            },
            {
                word: 'Englishman',
                translation: 'n. 英国男子',
                phonetic: "'iŋɡliʃmən",
                partOfSpeech: 'n',
                examples: [
                    { en: 'He was the only Englishman present.', cn: '他是在场的唯一一名英国人。' },
                    {
                        en: 'Report writing, like motor car driving and lovemaking, is one of those activities that every Englishman thinks he can do well without instruction.',
                        cn: '写报告，像开车和做爱一样，是每个英国人都以为自己毋需指导就能做好的事。'
                    },
                    {
                        en: 'I wish I could be acquainted with the feelings and thoughts which must agitate the heart and present themselves to the mind of an enlightened Englishman, when he first lands on this continent.',
                        cn: '赫克托．圣约翰．克雷夫科尔 但愿我能熟悉那种必将鼓动人心的感情和思想，并且在一个开明的英国人首次踏上这片大陆时，将这种思想和感情原原本本地展现在他眼前。'
                    }
                ],
                id: 'cet4__Englishman',
                category: 'cet4'
            },
            {
                word: 'British',
                translation: 'adj. 英国的；英国人的',
                phonetic: "'brɪtɪʃ",
                partOfSpeech: 'adj',
                examples: [
                    { en: 'the British government', cn: '英国政府' },
                    { en: 'a British-born scientist', cn: '一名英国出生的科学家' }
                ],
                id: 'middle__British',
                category: 'middle'
            },
            {
                word: 'Scottish',
                translation: 'adj. 苏格兰的，苏格兰人的，苏格兰英语的',
                phonetic: "'skɔtiʃ",
                partOfSpeech: 'adj',
                examples: [
                    {
                        en: 'These cases are dealt with by the Foreign Office, while Hague cases go through the Ministry of Justice in England and Wales, and the Scottish and Northern Irish court services.',
                        cn: '这些案件由外交部负责处理，而海牙公约缔约国的案件则由英格兰和威尔士司法部、以及苏格兰和北爱尔兰法庭进行处理。'
                    }
                ],
                id: 'high__Scottish',
                category: 'high'
            },
            {
                word: 'Japan',
                translation: 'n. 日本，日本国',
                phonetic: "dʒə'pæn",
                partOfSpeech: 'n',
                examples: [],
                id: 'cet4__Japan',
                category: 'cet4'
            },
            {
                word: 'Japanese',
                translation: 'adj. 日本的; n. 日本人；日语',
                phonetic: ",dʒæpə'niz",
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'Her familiarity with Japanese surprised me.', cn: '她对日语的熟谙使我惊奇。' },
                    { en: 'a Japanese car', cn: '日本(汽)车' }
                ],
                id: 'middle__Japanese',
                category: 'middle'
            },
            {
                word: 'France',
                translation: '法国',
                phonetic: 'frɑːns',
                partOfSpeech: '',
                examples: [
                    { en: 'Germany borders on France.', cn: '德国与法国接壤。' },
                    { en: 'Red wine made in France is famous for its high quality.', cn: '法国出产的红葡萄酒以质优而闻名。' }
                ],
                id: 'middle__France',
                category: 'middle'
            },
            {
                word: 'French',
                translation: 'n. 法语; adj. 法国人（的）',
                phonetic: 'frentʃ',
                partOfSpeech: 'n / adj',
                examples: [
                    { en: 'How do you ask for directions in French?', cn: '上等的法国葡萄酒' },
                    { en: 'an excellent French wine', cn: '用法语怎么问路？' }
                ],
                id: 'middle__French',
                category: 'middle'
            },
            {
                word: 'Germany',
                translation: '德国',
                phonetic: "'dʒɝməni",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Germany borders on France.', cn: '德国与法国接壤。' },
                    { en: 'The news aroused much fear in Germany.', cn: '这消息在德国引起很大恐慌。' },
                    { en: 'The new Nazism is resurging in some places in Germany.', cn: '新纳粹主义正在德国的一些地方复活。' }
                ],
                id: 'primary__Germany',
                category: 'primary'
            },
            {
                word: 'German',
                translation: 'n. 德语；德国人; adj. 德国的；德国人的；德语的',
                phonetic: "'dʒɜːmən",
                partOfSpeech: 'n / adj',
                examples: [
                    { en: 'Half of the books are in German.', cn: '这些书有一半是德语的。' },
                    { en: 'German history', cn: '德国历史' }
                ],
                id: 'middle__German',
                category: 'middle'
            },
            {
                word: 'Australia',
                translation: 'n. 澳大利亚',
                phonetic: "ɔ'streljə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'He transplanted his family to Australia.', cn: '他把家迁到澳大利亚。' },
                    { en: 'He went out to Australia about five years ago.', cn: '他大约在五年前移居澳大利亚。' },
                    { en: 'In the past, English criminals were transported to Australia.', cn: '过去，英国犯人被流放到澳大利亚。' }
                ],
                id: 'middle__Australia',
                category: 'middle'
            },
            {
                word: 'Australian',
                translation: 'adj. 澳大利亚的；澳大利亚人的; n. 澳大利亚人',
                phonetic: "ɑ'strelɪən",
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'She went solo backpacking for eight months in the Australian outback.', cn: '她在澳大利亚内陆独自背包旅行了八个月。' },
                    {
                        en: 'Whoever they are, they will never know that they are a blood brother or sister to an Australian! ＃',
                        cn: '不管他们是谁，他们绝不会知道自己是一个澳大利亚人的血亲兄弟或姐妹。'
                    }
                ],
                id: 'middle__Australian',
                category: 'middle'
            },
            {
                word: 'Canada',
                translation: '加拿大',
                phonetic: "'kænədə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'She was domiciliated in Canada.', cn: '她在加拿大定居。' },
                    { en: 'Canada produces wheat and furs.', cn: '加拿大出产小麦和毛皮。' },
                    {
                        en: 'He has lived in Canada for more than twenty years and is completely Canadianized now.',
                        cn: '他在加拿大已经住了二十多年了，现在完全加拿大化了。'
                    }
                ],
                id: 'primary__Canada',
                category: 'primary'
            },
            {
                word: 'Canadian',
                translation: '加拿大的',
                phonetic: "kə'nedɪən",
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'What about the Canadian policy?', cn: '那么加拿大的政策呢？' },
                    { en: 'The fugitive is believed to be headed for the Canadian border.', cn: '据信，逃亡者正向加拿大边界方向逃窜。' },
                    { en: 'Most English people bracket American and Canadian accents together.', cn: '大多数英国人都把美国音和加拿大音相提并论。' }
                ],
                id: 'primary__Canadian',
                category: 'primary'
            },
            {
                word: 'India',
                translation: 'n. 印度',
                phonetic: "'ɪndɪə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Burma borders on India.', cn: '缅甸与印度毗邻。' },
                    { en: 'This book treats of the caste system in India.', cn: '这本书论述了印度的种姓制度。' },
                    { en: 'If you come to India for just one thing, this should be it.', cn: '如果你只为一件事来到印度，那就到这儿来吧。' }
                ],
                id: 'middle__India',
                category: 'middle'
            },
            {
                word: 'Indian',
                translation: 'adj. 印度的，印度人的',
                phonetic: "'ɪndɪən",
                partOfSpeech: 'adj',
                examples: [{ en: '...the Indian government.', cn: '...印度政府。' }],
                id: 'middle__Indian',
                category: 'middle'
            },
            {
                word: 'Asia',
                translation: 'n. 亚洲',
                phonetic: 'ˈeɪʒn; eʒən',
                partOfSpeech: 'n',
                examples: [
                    { en: 'The European powers extended their authority in Asia.', cn: '欧洲列强在亚洲扩大他们的管辖权。' },
                    { en: 'The teacher chalked out a map of Asia on the blackboard.', cn: '老师用粉笔在黑板上画了一张亚洲地图。' },
                    {
                        en: 'His extensive experience in other parts of Asia helped him to overcome cultural barriers.',
                        cn: '在亚洲其他地区的广泛经历帮助他克服了文化障碍。'
                    }
                ],
                id: 'middle__Asia',
                category: 'middle'
            },
            {
                word: 'Asian',
                translation: 'adj. 亚洲的；亚洲人的; n. 亚洲人',
                phonetic: 'ˈeʒən, ˈeʃən',
                partOfSpeech: 'adj / n',
                examples: [{ en: 'Many of the shops were run by Asians.', cn: '这些商店中有许多是由亚洲人经营的。' }],
                id: 'middle__Asian',
                category: 'middle'
            },
            {
                word: 'Africa',
                translation: 'n. 非洲',
                phonetic: 'ˈæfrɪkə',
                partOfSpeech: 'n',
                examples: [
                    { en: 'The giraffe ranges in Africa.', cn: '长颈鹿生长在非洲。' },
                    { en: 'The practice still prevails in some parts of Africa.', cn: '这种做法在非洲某些地区仍然很盛行。' },
                    { en: 'He traversed alone the whole continent of Africa from east to west.', cn: '他独自一人从东到西横越整个非洲大陆。' }
                ],
                id: 'middle__Africa',
                category: 'middle'
            },
            {
                word: 'African',
                translation: 'adj. 非洲的；非洲人的；非洲语言的',
                phonetic: "'æfrɪkən",
                partOfSpeech: 'adj',
                examples: [{ en: '...the African continent.', cn: '…非洲大陆。' }],
                id: 'high__African',
                category: 'high'
            },
            {
                word: 'Europe',
                translation: 'n. 欧洲',
                phonetic: "'jʊrəp",
                partOfSpeech: 'n',
                examples: [{ en: 'eastern Europe', cn: '东欧' }],
                id: 'middle__Europe',
                category: 'middle'
            },
            {
                word: 'European',
                translation: 'adj. 欧洲的；欧洲人的',
                phonetic: "'jʊrə'piən",
                partOfSpeech: 'adj',
                examples: [
                    { en: 'European languages', cn: '欧洲的语言' },
                    { en: 'our European partners', cn: '我们的欧洲伙伴' }
                ],
                id: 'middle__European',
                category: 'middle'
            },
            {
                word: 'Oceania',
                translation: 'n. 大洋洲',
                phonetic: ",oʃɪ'ænɪə",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Future research will be required to determine if these findings hold true for other territories in Asia and Oceania with similar malaria epidemiology.',
                        cn: '然而，还需做进一步研究以确定该发现是否适用于有类似疟疾流行病的亚洲和大洋洲。'
                    },
                    {
                        en: 'Interested library associations outside of Latin America and the Caribbean, Africa, and Asia and Oceania should contact the Management of Library Associations section.',
                        cn: '在拉美地区以外以及加勒比海，非洲和亚洲以及大洋洲的感兴趣的图书馆联盟可以联系图书馆联盟管理部门。'
                    },
                    {
                        en: 'Findings and experiences were presented by around 100 clinicians, scientists, and public health professionals from the Americas, Europe, Asia, Africa, the Middle East and Oceania.',
                        cn: '来自美洲、欧洲、亚洲、非洲、中东和大洋洲的大约100名临床医生、科学家以及公共卫生专业人员介绍了取得的结果和经验。'
                    }
                ],
                id: 'high__Oceania',
                category: 'high'
            },
            {
                word: 'Mediterranean',
                translation: 'n. 地中海; adj. 地中海的',
                phonetic: ",mɛdətə'renɪən",
                partOfSpeech: 'n / adj',
                examples: [
                    {
                        en: 'You have the choice of night fishing in the Mediterranean, or windsurfing on a lake in Switzerland.',
                        cn: '你可选择在地中海夜间垂钓，或是在瑞士的湖上玩帆板。'
                    }
                ],
                id: 'cet4__Mediterranean',
                category: 'cet4'
            },
            {
                word: 'Atlantic',
                translation: 'adj. 大西洋的; n. 大西洋',
                phonetic: "ət'læntɪk",
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'They underlaid the Atlantic with a cable.', cn: '他们在大西洋海底铺设了一条电缆。' },
                    {
                        en: 'The Straits of Gibraltar are the strategic passage between the Mediterranean and the Atlantic.',
                        cn: '直布罗陀海峡是地中海通向大西洋的咽喉。'
                    }
                ],
                id: 'cet4__Atlantic',
                category: 'cet4'
            },
            {
                word: 'Thailand',
                translation: 'n. 泰国',
                phonetic: "'taɪlænd; -lənd",
                partOfSpeech: 'n',
                examples: [
                    { en: 'In Thailand?', cn: '在泰国吗？' },
                    { en: 'I was born in Thailand.', cn: '我可是在泰国出生的。' }
                ],
                id: 'middle__Thailand',
                category: 'middle'
            },
            {
                word: 'Thai',
                translation: 'n. 泰国（人的）；泰语（的)',
                phonetic: 'taɪ',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'She was interviewed about the death of the Thai worker on Israeli TV and she plans to continue to work for peace.',
                        cn: '她接受了以色列电视台关于这位泰国工人致死的报道，并且她计划继续致力于为和平而工作。'
                    },
                    {
                        en: 'So the next time you and your brother go out for Thai food you can make him look like a total wimp (I hate my brother).',
                        cn: '所以改天你和你的兄弟去吃泰国菜，你就可以让他像个胆小鬼眼巴巴地看着你（我讨厌我的兄弟）。'
                    }
                ],
                id: 'middle__Thai',
                category: 'middle'
            },
            {
                word: 'Russian',
                translation: 'adj. 俄罗斯的；俄罗斯人的；俄语的',
                phonetic: "'rʌʃən",
                partOfSpeech: 'adj',
                examples: [{ en: '...the Russian parliament.', cn: '...俄罗斯国会。' }],
                id: 'middle__Russian',
                category: 'middle'
            },
            {
                word: 'Netherlands',
                translation: 'n. 荷兰（西欧国家）',
                phonetic: "'neðələndz",
                partOfSpeech: 'n',
                examples: [
                    { en: "Now that we're in Europe we ought to visit the Netherlands.", cn: '既然我们到了欧洲，就应当去荷兰。' },
                    {
                        en: 'So to come back to your question if the Netherlands inspired me in what I do.',
                        cn: '回到你的问题上：荷兰大地是否赋予了我艺术创作的灵感？'
                    }
                ],
                id: 'high__Netherlands',
                category: 'high'
            },
            {
                word: 'Danish',
                translation: 'n. 丹麦语; adj. 丹麦的；丹麦人的；丹麦语的',
                phonetic: "'denɪʃ",
                partOfSpeech: 'n / adj',
                examples: [
                    {
                        en: 'There is no inherent right to some particular quantity of any commodity whether it’s oil, gold, coffee, or Danish pastry.',
                        cn: '任何一种商品的具体数量本身是没有正确性的，不论它是石油，黄金，咖啡或者丹麦点心。'
                    },
                    {
                        en: 'Like all Danish students, they study for free and receive a monthly stipend equivalent to about $900 per person from the government.',
                        cn: '和其他丹麦学生一样，他们免费学习，并且每人每月可从政府领取约合900美元的津贴。'
                    },
                    {
                        en: 'The Danish study, to be published next year, should leave us the wiser about the role they play in turning our children into adults before their time.',
                        cn: '此项丹麦研究，明年将会公布。 届时，应当会让我们对这些物质在使我们的孩子提早进入成年中起到的作用，了解多一点。'
                    }
                ],
                id: 'high__Danish',
                category: 'high'
            },
            {
                word: 'Singapore',
                translation: '新加坡城',
                phonetic: "ˌsɪŋgə'pɔ:",
                partOfSpeech: 'n',
                examples: [
                    { en: 'I come from Singapore.', cn: '我来自新加坡。' },
                    { en: 'But not in Singapore.', cn: '但是在新加坡就不同了。' },
                    { en: 'After staying a few days in Shanghai, he moved on to Singapore.', cn: '在上海逗留了几天之后，他又启程去新加坡。' }
                ],
                id: 'primary__Singapore',
                category: 'primary'
            },
            {
                word: 'Malaysia',
                translation: '马来西亚',
                phonetic: "mə'leʒə",
                partOfSpeech: '',
                examples: [
                    { en: 'He settled in Malaysia.', cn: '他定居马来西亚。' },
                    { en: 'But in all of Malaysia?', cn: '但是在整个马来西亚呢？' },
                    { en: 'I come from Malaysia.', cn: '我来自马来西亚。' }
                ],
                id: 'middle__Malaysia',
                category: 'middle'
            },
            {
                word: 'spanish',
                translation: '- adj. 西班牙的；西班牙人的；西班牙语的\n- n. 西班牙语；西班牙人',
                phonetic: 'ˈspænɪʃ',
                partOfSpeech: 'adj / n',
                examples: [],
                id: 'pte_senior__spanish',
                category: 'pte_senior'
            },
            {
                word: 'Laos',
                translation: 'n. 老挝（东南亚国家）',
                phonetic: 'laʊz',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Today, Tony from the Vientiane International School in Laos asks the scientists about how long we - or our descendants - might live.',
                        cn: '今天，来自老挝万象国际学校的托尼向科学家提出了关于我们或我们的后代可以活多久的问题。'
                    },
                    {
                        en: 'At a meeting of the Mekong River Commission in the Lao capital, Vientiane, Laos insisted the Xayaburi dam go ahead, saying it will be up to international standards.',
                        cn: '在湄公河委员会在老挝首都万象举行的一个会议上，老挝坚持让沙耶武里水坝破土动工，并且说工程将达到国际标准。'
                    },
                    {
                        en: 'Laos says the dam will cause no serious problems, while its neighbors say more information is needed about its environmental and economic effects.',
                        cn: '老挝说，这座大坝不会造成严重问题，但是其他邻国认为，在环境和经济影响方面还需要更多信息。'
                    }
                ],
                id: 'high__Laos',
                category: 'high'
            },
            {
                word: 'Laotian',
                translation: 'n. 老挝人; adj. 老挝（人）的',
                phonetic: "lei'əuʃən",
                partOfSpeech: 'n / adj',
                examples: [
                    { en: 'Laotian villages, without electricity, rent solar energy panels for a weekend.', cn: '老挝没有电力的村庄周末租用太阳能电池板。' },
                    {
                        en: 'and they do the same damage to the Vietnamese countryside and the Laotian people.',
                        cn: '他们对越南乡村和老挝人民造成的破坏也是一样的。'
                    }
                ],
                id: 'high__Laotian',
                category: 'high'
            },
            {
                word: 'Transkei',
                translation: 'n. 特兰斯凯（南非东南部一地区）',
                phonetic: "træns'kei; -'kai",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Nelson Mandela was born in a small village in the Transkei region of South Africa. He eas born on 18th July, 1918.',
                        cn: '纳尔森·曼德拉1918年七月18日出生在南非特兰斯凯地区的一个小村庄。'
                    },
                    {
                        en: 'The capital of Transkei, in the west-central part of the homeland. It was founded in1860 as a military post. Population, 30, 000.',
                        cn: '乌姆塔塔特兰斯凯首都，在“黑人家园”班图斯坦的中西部，做为一军事要塞建于1860年，人口30，000。'
                    }
                ],
                id: 'high__Transkei',
                category: 'high'
            },
            {
                word: 'Czech Republic',
                translation: '捷克共和国（东欧国家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'We do not have signed agreement with Poland or the Czech Republic, we do not have ratified agreements with their parliaments.',
                        cn: '我们还没有和波兰或捷克共和国签订条约，我们和他们的议会间也没有已经得到批准的协议。'
                    },
                    {
                        en: 'And the US has not relented on anti-missile installations in Poland and the Czech Republic.',
                        cn: '此外，美国并没有放慢在波兰和捷克共和国部署反导弹装置的步伐。'
                    },
                    {
                        en: 'But some in Poland and the Czech Republic will view it as a betrayal of efforts over the years to accommodate US requests in the face of domestic opposition.',
                        cn: '但在波兰和捷克共和国有人会认为，这是对多年来为满足美国的要求而面对国内反对派压力所做的努力的背叛。'
                    }
                ],
                id: 'high__Czech Republic',
                category: 'high'
            },
            {
                word: 'Greece',
                translation: 'n. 希腊',
                phonetic: 'ɡriːs',
                partOfSpeech: 'n',
                examples: [
                    { en: 'Alexander the Great beat every opponent between Greece and India.', cn: '亚历山大大帝打败了希腊和印度之间的每个敌手。' },
                    { en: 'Spain and Greece have not.', cn: '西班牙和希腊还没有。' },
                    { en: 'But there are no special arrangements for Greece or for any other country.', cn: '但是对于希腊和任何别的国家，我们都不会特别对待。' }
                ],
                id: 'high__Greece',
                category: 'high'
            },
            {
                word: 'Greek',
                translation: 'adj. 希腊（人）的；希腊语的; n. 希腊人；希腊语',
                phonetic: 'grik',
                partOfSpeech: 'adj / n',
                examples: [{ en: 'Greek yoghurt', cn: '希腊式酸奶' }],
                id: 'high__Greek',
                category: 'high'
            },
            {
                word: 'Zimbabwe',
                translation: 'n. 津巴布韦（非洲东南部国家）',
                phonetic: "zim'bɑ:bwei; -wi",
                partOfSpeech: 'n',
                examples: [
                    { en: 'But is it right for the people of Zimbabwe?', cn: '但是这对津巴布韦人民真的有好处吗？' },
                    { en: 'What does this all have to do with Zimbabwe?', cn: '这跟津巴布韦有什么关系呢？' }
                ],
                id: 'high__Zimbabwe',
                category: 'high'
            },
            {
                word: 'Indonesia',
                translation: 'n. 印度尼西亚（东南亚岛国）',
                phonetic: "'indəu'ni:zjə,-ʒə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'We have the example of Aceh, Indonesia, to guide us.', cn: '我们可用印尼亚齐省这一范例指导我们的工作。' },
                    {
                        en: 'In Indonesia, for example, on the coast of Aceh, only one hospital remains operational.',
                        cn: '例如，在印度尼西亚的亚齐海岸，只有一所医院仍在运转。'
                    }
                ],
                id: 'high__Indonesia',
                category: 'high'
            },
            {
                word: 'Mauritius',
                translation: 'n. 毛里求斯（非洲东部岛国）',
                phonetic: "mə'rɪʃɚs",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'I started in France, but my father was a British citizen, born in Mauritius.',
                        cn: '我生在法国，但是我的父亲是英国人，出生于毛里求斯。'
                    },
                    {
                        en: 'However, as the exhibit shows, Mauritius faces significant economic and social challenges as it transitions from dependence on trade preferences to open competition in the global economy.',
                        cn: '然而，正如本次展览所示，在从依赖贸易优惠向参与全球经济竞争过渡的过程中，毛里求斯面临巨大经济社会挑战。'
                    },
                    {
                        en: 'Of these, Kenya, Malawi, Mauritius, South Africa and Zimbabwe have all at one time or other used bioethanol as a transport or domestic fuel.',
                        cn: '在这些国家中，肯尼亚、马拉维、毛里求斯、南非和津巴布韦都曾经使用生物乙醇作为交通和家用燃料。'
                    }
                ],
                id: 'high__Mauritius',
                category: 'high'
            },
            {
                word: 'Mexico',
                translation: '墨西哥',
                phonetic: "'mɛksɪko",
                partOfSpeech: '',
                examples: [
                    { en: 'We want to prove that in Mexico.', cn: '我们要在墨西哥证明这一点。' },
                    { en: 'The United States bounds on Mexico in the south.', cn: '美国的南面与墨西哥接壤。' },
                    { en: 'All but one of the deaths were in Mexico, the epicenter of the outbreak.', cn: '除一人外，其他死亡患者都在疾病爆发的中心地墨西哥。' }
                ],
                id: 'middle__Mexico',
                category: 'middle'
            },
            {
                word: 'Vietnam',
                translation: 'n. 越南（东南亚国家）',
                phonetic: ",vjɛt'næm",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'He encouraged me to bag the safety of my present course, join the marines, and go to Vietnam, where at least I’d really learn something.',
                        cn: '他鼓励我走出当前寻求安全庇护的路线，加入海军陆战队开赴越南，至少我在那里真的可以学到点东西。'
                    }
                ],
                id: 'high__Vietnam',
                category: 'high'
            },
            {
                word: 'Switzerland',
                translation: '瑞士',
                phonetic: "'swɪtsələnd",
                partOfSpeech: '',
                examples: [
                    { en: 'The River Rhine rises in Switzerland.', cn: '莱茵河发源于瑞士。' },
                    {
                        en: 'The problem is Switzerland is a smaller country and you can not compare it with other leagues like Germany, French or Great Britain.',
                        cn: '问题在于瑞士是一个较小的国家，你不能把它与像德国、法国或英国这样的大国的国家队相比。'
                    }
                ],
                id: 'middle__Switzerland',
                category: 'middle'
            },
            {
                word: 'Colombia',
                translation: 'n. 哥伦比亚（南美洲国家）',
                phonetic: "kə'lʌmbiə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'I have had similar experiences all over Brazil and Colombia.', cn: '在巴西和哥伦比亚各地我都有类似的经历。' },
                    { en: 'That study should begin in Colombia next year.', cn: '这项研究将于明年在哥伦比亚开始。' }
                ],
                id: 'high__Colombia',
                category: 'high'
            },
            {
                word: 'Colombia  VmbI',
                translation: '哥伦比亚（南美洲国家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Colombia  VmbI',
                category: 'middle'
            },
            {
                word: 'Jordan',
                translation: 'n. 约旦（西亚国家）',
                phonetic: "'dʒɔrdn",
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Jordan',
                category: 'high'
            },
            {
                word: 'Spain',
                translation: '西班牙',
                phonetic: 'spen',
                partOfSpeech: 'n',
                examples: [
                    { en: 'They are touring in Spain.', cn: '他们正在西班牙旅游。' },
                    { en: 'Spain ceded the Philippines to the United States.', cn: '西班牙将菲律宾群岛割让给美国。' },
                    { en: 'This island was ceded to Spain more than one hundred years ago.', cn: '这个岛屿在一百多年以前就割让给西班牙了。' }
                ],
                id: 'primary__Spain',
                category: 'primary'
            },
            {
                word: 'Italy',
                translation: '意大利',
                phonetic: "'ɪtəlɪ",
                partOfSpeech: '',
                examples: [
                    { en: 'They decided to swan around Italy this summer.', cn: '他们决定今年夏天去意大利游逛。' },
                    { en: 'French troops negotiated the Alps and went on the road in Italy.', cn: '法军成功地越过了阿尔卑斯山脉，行军在意大利的国土上。' },
                    { en: 'All the newspapers reported on the football match of France versus Italy.', cn: '所有的报纸都报道了法国队对意大利队的足球比赛。' }
                ],
                id: 'middle__Italy',
                category: 'middle'
            },
            {
                word: 'Egypt',
                translation: 'n. 埃及（东北非国家）',
                phonetic: "'idʒɪpt",
                partOfSpeech: 'n',
                examples: [
                    { en: 'They caravaned through Egypt.', cn: '他们结队在埃及坐大篷车旅行。' },
                    { en: 'The established religion of Egypt is Islam.', cn: '埃及的国教是伊斯兰教。' },
                    { en: 'Glazes had been used from ancient times in Egypt.', cn: '埃及自古代起就使用釉料。' }
                ],
                id: 'high__Egypt',
                category: 'high'
            },
            {
                word: 'Egyptian',
                translation: 'adj. 埃及的；埃及人的',
                phonetic: "ɪ'dʒɪpʃ(ə)n",
                partOfSpeech: 'adj',
                examples: [{ en: '...the Egyptian pharaoh.', cn: '...古埃及法老。' }],
                id: 'high__Egyptian',
                category: 'high'
            },
            {
                word: 'Kenya',
                translation: 'n. 肯尼亚（非洲国家）',
                phonetic: 'ˈkiːnjə',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Let us now fuse together now as one people who want to do something for the people of Kenya. Let us strengthen the foundation of multiparty democracy in our country.',
                        cn: '现在让我们融汇在一起，团结起来，就像希望为肯尼亚人民作一些事情的同一个人，让我们一起巩固我国多党民主制的基础。'
                    },
                    { en: 'In Kenya, the government plans cooperation with Japan to produce biofuels.', cn: '在肯尼亚，政府打算与日本合作生产生物燃料。' },
                    { en: 'It wants to keep some taxes on goods from Kenya.', cn: '它希望能保持对来自肯尼亚的某些商品的关税。' }
                ],
                id: 'high__Kenya',
                category: 'high'
            },
            {
                word: 'Bangladesh',
                translation: 'n. 孟加拉国（亚洲国家）',
                phonetic: ",ba:ŋglə'deʃ",
                partOfSpeech: 'n',
                examples: [
                    { en: 'As you know, in Bangladesh rumors go around so fast.', cn: '你也知道，在孟加拉国流言蜚语传播很快。' },
                    { en: 'Come to Singapore is no good, I want to go back to Bangladesh.', cn: '他用蹩脚英语说：“来新加坡一点都不好，我想回孟加拉国。' },
                    {
                        en: 'In 2002 Bangladesh became the first country to ban plastic bags outright after discovering the bags blocked drains and was one of the main causes of the devastating floods of 1988 and 1998.',
                        cn: '2002年，在发现塑料袋堵塞排水管道是导致1988至1998年的毁灭性的洪涝灾害的罪魁祸首后，孟加拉国第一个彻底禁止了塑料袋的使用。'
                    }
                ],
                id: 'high__Bangladesh',
                category: 'high'
            },
            {
                word: 'Tanzania',
                translation: 'n. 坦桑尼亚（东非国家）',
                phonetic: 'ˌtænzəˈniə',
                partOfSpeech: 'n',
                examples: [
                    { en: 'We have a good example in Tanzania.', cn: '我们在坦桑尼亚有一个很好的例子。' },
                    {
                        en: 'After his visit to South Africa, he will also continue to visit Tanzania and Uganda.',
                        cn: '在结束对南非的访问后，他还将继续访问坦桑尼亚和乌干达。'
                    },
                    {
                        en: 'Some countries, ranging from Rwanda and Tanzania in East Africa, to Egypt and Morocco in the North and South Africa in the South, have steadily increased their science spending.',
                        cn: '从东非的卢旺达和坦桑尼亚，到北非的埃及和摩洛哥，再到非洲南部的南非，一些国家已经稳步增加了它们的科学开支。'
                    }
                ],
                id: 'high__Tanzania',
                category: 'high'
            },
            {
                word: 'Nepal',
                translation: 'n. 尼泊尔（亚洲国家）',
                phonetic: 'nɪˈpɔːl',
                partOfSpeech: 'n',
                examples: [
                    { en: 'This is Nepal.', cn: '这是尼泊尔。' },
                    {
                        en: '“We have plans to distribute the filter in India and Nepal,” Hussam said.',
                        cn: '胡珊说，"我们还计划在印度和尼泊尔分发这种过滤器。"'
                    }
                ],
                id: 'high__Nepal',
                category: 'high'
            },
            {
                word: 'Uganda',
                translation: 'n. 乌干达（东非国家）',
                phonetic: "ju:'ɡændə",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'You can spend one hour tracking here, whereas in Uganda it can take all day.',
                        cn: '这里你只要花一小时既可以找到他们，但是在乌干达需要一整天。'
                    },
                    {
                        en: 'After his visit to South Africa, he will also continue to visit Tanzania and Uganda.',
                        cn: '在结束对南非的访问后，他还将继续访问坦桑尼亚和乌干达。'
                    },
                    {
                        en: 'Many others, he says, have moved in with relatives in Gisenyi or crossed the border to Uganda.',
                        cn: '他说，另外许多人搬到吉塞尼的亲戚家里，或者越过边境进入乌干达。'
                    }
                ],
                id: 'high__Uganda',
                category: 'high'
            },
            {
                word: 'Sudan',
                translation: 'n. 苏丹（非洲国家）',
                phonetic: "sʊ'dæn",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'An option could be to redeploy to the border troops based in other areas of south Sudan.',
                        cn: '他通过翻译说：“一种选择可能是重新部署南部苏丹其它地区的边境部队。'
                    }
                ],
                id: 'high__Sudan',
                category: 'high'
            },
            {
                word: 'Malawi',
                translation: 'n. 马拉维（非洲国家）',
                phonetic: "mɑ:'lɑ:wi",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: "Adopting jatropha, he thinks, will be a first step out of poverty for Malawi's farmers, and they seem willing to try.",
                        cn: '他认为，种植麻疯树将是马拉维农民摆脱贫困的第一步，而这些农民似乎也愿意尝试一下。'
                    },
                    {
                        en: '"Anyone could come to Malawi and quickly arrange for an adoption that might have grave consequences on the very children that the law seeks to protect," she said.',
                        cn: '她说：“任何人都可以到马拉维很快办理收养事宜，这可能会对那些法律寻求保护的孩子产生严重后果。”'
                    },
                    {
                        en: 'The main section of the valley in Africa continues from the Red Sea across Ethiopia and across Kenya, Tanzania, and Malawi to the lower Zambezi River valley in Mozambique.',
                        cn: '大峡谷的主体部分来自非洲，延伸自红海穿过埃塞俄比亚，横跨两岸的肯尼亚、坦桑尼亚、马拉维到莫桑比克的赞比西河流域下游.'
                    }
                ],
                id: 'high__Malawi',
                category: 'high'
            },
            {
                word: 'Peru',
                translation: 'n. 秘鲁（南美国家）',
                phonetic: "pə'rʊ",
                partOfSpeech: 'n',
                examples: [
                    { en: 'It sounds as though you enjoyed Peru.', cn: '这听起来好像你喜欢秘鲁。' },
                    {
                        en: 'Well, in Peru you had to negotiate like that to get the freshest fish at the market.',
                        cn: '在秘鲁你必须这样还价你才能在市场上拿到最新鲜的鱼。'
                    }
                ],
                id: 'high__Peru',
                category: 'high'
            },
            {
                word: 'Denmark',
                translation: 'n. 丹麦（北欧国家）',
                phonetic: "'denma:k",
                partOfSpeech: 'n',
                examples: [
                    { en: 'They tried to chart the sea area between Norway and Denmark.', cn: '他们企图绘制挪威与丹麦之间的海域图。' },
                    {
                        en: 'Weeks later it wiped out fields in the Netherlands, Germany, Denmark and England.',
                        cn: '几周以后它彻底横扫了荷兰、德国、丹麦和英格兰的田野。'
                    },
                    {
                        en: 'I think they should be careful about that, but I applaud them for taking up the mantle out there in Denmark.',
                        cn: '我认为他们应该注意那一点，但是我赞赏他们为填补丹麦在这方面的空白所作出的贡献。'
                    }
                ],
                id: 'high__Denmark',
                category: 'high'
            },
            {
                word: 'Korea',
                translation: '朝鲜；韩国',
                phonetic: "kə'rɪr",
                partOfSpeech: '',
                examples: [{ en: 'Korea lies (to the) west of Japan.', cn: '韩国在日本以西。' }],
                id: 'middle__Korea',
                category: 'middle'
            },
            {
                word: 'Korean',
                translation: 'n. 韩国/朝鲜人；朝鲜/韩语; adj. 韩国（人/语）的；朝鲜（人/语）的',
                phonetic: "kə'riən",
                partOfSpeech: 'n / adj',
                examples: [
                    {
                        en: 'As for whether they will touch upon the situation on the Korean Peninsula, we will know after their meetings.',
                        cn: '至于是否会谈到你所提到的朝鲜半岛局势，这要等他们谈了之后才能知道。'
                    },
                    {
                        en: 'Another aunt — this one elderly and a real lover of palm wine — went on and on about a family friend who married a Korean woman.',
                        cn: '另一个伯母——这位年岁较大，是一个真正的棕榈酒爱好者——不停地谈论着一位和韩国女人结婚的家族朋友。'
                    },
                    { en: 'We both want stability on the Korean Peninsula and in Pakistan.', cn: '我们都希望朝鲜半岛和巴基斯坦的稳定。' }
                ],
                id: 'high__Korean',
                category: 'high'
            },
            {
                word: 'New Zealand',
                translation: '新西兰',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Meat from New Zealand is frozen and brought to England in special ships.', cn: '从新西兰运来的肉被冷冻保藏，用特殊的船运往英国。' },
                    {
                        en: 'If you live in Australia, the US, the UK, Canada or New Zealand, then you live in the same place as me; Fat City.',
                        cn: '如果你是生活在澳大利亚，美国，加拿大或者新西兰，那么你其实就是和我住在同一个地方：肥胖国。'
                    },
                    {
                        en: 'Unfortunately, we know that one effect of climate change in New Zealand will be more extreme weather like this.',
                        cn: '遗憾的是，我们知道，气候变化在新西兰的影响之一是会有更多像这样的极端天气。'
                    }
                ],
                id: 'middle__New Zealand',
                category: 'middle'
            },
            {
                word: 'Latin',
                translation: 'n. 拉丁文，拉丁语; adj. 拉丁文的，拉丁语的',
                phonetic: "'lætn",
                partOfSpeech: 'n / adj',
                examples: [
                    { en: 'He is well grounded in Latin.', cn: '他拉丁语的功底很扎实。' },
                    { en: 'I must brush up on my Latin.', cn: '我必须把拉丁语重温一下。' },
                    { en: 'a Latin inscription', cn: '拉丁语碑文' }
                ],
                id: 'high__Latin',
                category: 'high'
            },
            {
                word: 'Spanish',
                translation: '西班牙的',
                phonetic: "'spænɪʃ",
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'First-year students may elect  French, Spanish, or German.', cn: '一年级学生可选修法语、西班牙语或德语。' },
                    { en: 'The English and the Spanish were among the first to colonize North America.', cn: '英国人和西班牙人是首先向北美洲开拓殖民地的。' },
                    {
                        en: "At his lordship's death in the Spanish campaign in the year 1811,his estate fell in to the family of the Tiptoffs.",
                        cn: '这位爵爷在1811年西班牙战役中死亡后，他的产业归蒂普托夫家族支配。'
                    }
                ],
                id: 'primary__Spanish',
                category: 'primary'
            },
            {
                word: 'Italian',
                translation: '意大利的',
                phonetic: 'ɪˈtæljən',
                partOfSpeech: 'adj / n',
                examples: [
                    { en: 'Her beauty is of the Italian type.', cn: '她的美是意大利型的。' },
                    { en: 'The game terminated in a victory for Italian team.', cn: '比赛以意大利队获胜告终。' },
                    { en: 'How could they be Italian?', cn: '他们怎么会是意大利人呢？' }
                ],
                id: 'primary__Italian',
                category: 'primary'
            }
        ]
    },
    {
        title: '城市',
        words: [
            {
                word: 'Chiang Mai',
                translation: '清迈（泰国城市）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'I caught the trees in the water for this shot, which is the one that reminds me of my time in Chiang Mai.',
                        cn: '我拍到了这张树木倒影在水面的照片，这样的景象也让我想起了那段在清迈的时光。'
                    },
                    {
                        en: 'Despite being banned from streetwalking in Bangkok and Chiang Mai, roving elephants are relatively common on city outskirts.',
                        cn: '尽管曼谷和清迈都禁止大象上街，但是在城市的郊区，大象还是随处可见的。'
                    }
                ],
                id: 'middle__Chiang Mai',
                category: 'middle'
            },
            {
                word: 'San Francisco',
                translation: '圣弗朗西斯科（旧金山，美国城市）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__San Francisco',
                category: 'middle'
            },
            {
                word: 'Berlin',
                translation: '柏林（德国城市）',
                phonetic: "bɝ'lɪn",
                partOfSpeech: '',
                examples: [
                    { en: 'He captained the siege of Berlin.', cn: '他指挥了围攻柏林的战役。' },
                    {
                        en: 'Once you have a flat in central Berlin,you can always monetize it when the prices rise.',
                        cn: '如果在柏林市中心有一套公寓，价格上涨时就可以随时把它变现。'
                    },
                    {
                        en: 'But I remember an anecdote I once heard from one of my German friends. Shortly after the unification, an Ossie and a Weissie meet in Berlin.',
                        cn: '但我记得从一个德国朋友那里听来的这样一件轶事：统一后不久，一个东德人与一个西德人在柏林相遇。'
                    }
                ],
                id: 'middle__Berlin',
                category: 'middle'
            },
            {
                word: 'Cali',
                translation: '卡利（哥伦比亚城市）',
                phonetic: "'kɑ:li",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'We spent close to two months together in Cali, and we met up again in Buenos Aires for two more months.',
                        cn: '我们曾在卡利（哥伦比亚西部城市）一起度过近两个月，又在布宜诺期艾利斯相遇相聚了两个月。'
                    },
                    {
                        en: 'The executive order invoked the International Emergency Economic Powers Act, which we had earlier used successfully against the Cali drug cartel in Colombia.',
                        cn: '该决策令援引了《国际紧急经济权力法》，我们曾成功运用该法令打击哥伦比亚的卡利派毒品垄断组织。'
                    }
                ],
                id: 'middle__Cali',
                category: 'middle'
            },
            {
                word: 'Lausanne',
                translation: '洛桑（瑞士城市）',
                phonetic: "lo'zæn",
                partOfSpeech: '',
                examples: [
                    {
                        en: "Well, he was still helping her a year later, then; for somebody met 'em living at Lausanne together.",
                        cn: '可一年之后他仍然在继续帮助她呢。 有人在洛桑亲眼看见他们住在一起。'
                    }
                ],
                id: 'middle__Lausanne',
                category: 'middle'
            },
            {
                word: 'Houston',
                translation: 'n. 休斯顿（美国城市）',
                phonetic: "'hju:stən",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: '"I do think if you can do this work in Houston, then you can do it anywhere, " Spanjian says.',
                        cn: '斯潘健说：“我认为，如果能在休斯顿开展环保项目，那么在其他任何地方都可以做到。”'
                    },
                    {
                        en: 'I have nothing but sincere gratitude for the city of Houston and the generous peoplewho live in it.',
                        cn: '对此我只有真挚的感激，对休斯顿这座城市和对居住在这里的慷慨的人们。'
                    },
                    {
                        en: 'On top of that, I hurt my knee against Houston just six games into the season.',
                        cn: '不仅如此，在新赛季的第六场比赛，我就在休斯顿伤到了膝盖。'
                    }
                ],
                id: 'high__Houston',
                category: 'high'
            },
            {
                word: 'Johannesburg',
                translation: 'n. 约翰内斯堡（南非城市）',
                phonetic: "dʒəu'hænisbə:ɡ",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'She was also one of the first lesbians to live openly in her township near Johannesburg.',
                        cn: '她还是约翰内斯堡附近她所在的镇区第一个公开同性恋身份的人。'
                    },
                    {
                        en: 'Players are measured first at sea level and then at the altitude of Johannesburg - artificially set by the machine - to see how the body responds.',
                        cn: '运动员先是在海平面的高度测试，然后由机器自动的转到约翰内斯堡的海拔高度，来看看身体有怎样的反应。'
                    },
                    {
                        en: '"Every mayor in Brazil can tell you the vaccination rate in their town, " he told me at the recent International Paediatric Congress in Johannesburg.',
                        cn: '最近他在约翰内斯堡的国际儿科协会对我说，"巴西的每一位市长都会告诉你他们城镇的接种率。"'
                    }
                ],
                id: 'high__Johannesburg',
                category: 'high'
            },
            {
                word: 'St Petersburg',
                translation: 'n. 圣彼得堡（俄罗斯城市）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Imagine what it must have been like being a resident of St Petersburg in 1917, in the months before Lenin and the Bolsheviks finally seized power.',
                        cn: '想象一下，在1917年圣彼得堡，在列宁和布尔什维克最后夺取政权的几个月前，居民应该是怎么样的。'
                    },
                    {
                        en: 'It is only three years since a judge in St Petersburg, Russia, threw out a case on the ground that: “If we had no sexual harassment we would have no children.',
                        cn: '仅仅在三年前，俄罗斯的圣彼得堡还有过这样一个法官，他把诉讼状丢在地上说：“如果没有性骚扰，俄罗斯不就要绝种了吗。”'
                    }
                ],
                id: 'high__St Petersburg',
                category: 'high'
            },
            {
                word: 'Leningrad',
                translation: 'n. 列宁格勒（苏联城市）',
                phonetic: "'leninɡræd",
                partOfSpeech: 'n',
                examples: [
                    { en: 'A farewell in Leningrad, in the spring of 1942.', cn: '1942年春天，在列宁格勒的一场送别仪式。' },
                    { en: "He entered Leningrad State University's law department in 1970.", cn: '1970年，普京进入列宁格勒州立大学法律系。' },
                    {
                        en: 'First of all, it reflects the fact that some schools practiced separate education for boys and girls, which was introduced in 1943 in Moscow, Leningrad and some other big cities of the USSR.',
                        cn: '首先，教材表明当时城市中的一些学校是男女分开教学的，这种教学实践是苏联（USSR）在1943年引入到如莫斯科、列宁格勒和其他一些这类的大城市。'
                    }
                ],
                id: 'high__Leningrad',
                category: 'high'
            },
            {
                word: 'Atlanta',
                translation: 'n. 亚特兰大（女名；城市名）',
                phonetic: "æt'læntə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Atlanta is below Washington.', cn: '亚特兰大比华盛顿更靠南。' },
                    { en: 'The terrorist dusted for Atlanta.', cn: '那名恐怖分子逃往亚特兰大。' },
                    {
                        en: 'They communicated at least once a day, and it was still late afternoon in Atlanta.',
                        cn: '他们每周至少沟通一次，而此时在亚特兰大还是下午晚些时候。'
                    }
                ],
                id: 'high__Atlanta',
                category: 'high'
            },
            {
                word: 'Seattle',
                translation: 'n. 西雅图（美国城市）',
                phonetic: "si'ætl",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Where do you live in Seattle?', cn: '你住在西雅图的哪里？' },
                    { en: 'But we live in Seattle now.', cn: '但是我们现在住在西雅图。' },
                    { en: 'They still live in Seattle, where they have three children together.', cn: '他们依旧居住在西雅图，并且有了三个孩子。' }
                ],
                id: 'high__Seattle',
                category: 'high'
            },
            {
                word: 'Hannibal',
                translation: 'n. 汉尼拔（美国城市）',
                phonetic: "'hænibəl",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'And in fact it is just shown in percentages, less than a quarter of the painting itself deals with Hannibal and his army, and the rest is this swollen angry sky with the sun just flickering through.',
                        cn: '事实上这从画面的比例中就显示出来，整个画面中只有不到四分之一的画幅是描绘汉尼拔和他的军队的，而其余的空间都给了昏暗的天空、躁动的云以及闪烁不定的阳光。'
                    }
                ],
                id: 'high__Hannibal',
                category: 'high'
            },
            {
                word: 'Vancouver',
                translation: 'n. 温哥华（加拿大城市）',
                phonetic: "væn'ku:və",
                partOfSpeech: 'n',
                examples: [
                    { en: 'Have you been to Vancouver before?', cn: '你以前去过温哥华吗？' },
                    { en: 'I was in Vancouver about a month ago.', cn: '大约一个月之前我就呆在温哥华。' },
                    { en: 'Well, what if I ask you what happens after Vancouver?', cn: '好吧 如果我是在问你去温哥华后的事呢？' }
                ],
                id: 'high__Vancouver',
                category: 'high'
            },
            {
                word: 'Toronto',
                translation: '多伦多',
                phonetic: "tə'rɑnto",
                partOfSpeech: '',
                examples: [
                    { en: 'Julia: What can you do in Toronto?', cn: '朱莉娅：在多伦多能玩些什么？' },
                    {
                        en: 'About 830 people on Facebook have replied they would attend the event in Toronto.',
                        cn: '大约有830人在脸书上回覆称他们会参与这个多伦多的活动。'
                    },
                    {
                        en: 'That’s why our customers come in often, ” the Toronto store manager said.',
                        cn: '这就是为什么我们的顾客会经常光顾，”多伦多的店面经理说。'
                    }
                ],
                id: 'middle__Toronto',
                category: 'middle'
            },
            {
                word: 'Calgary',
                translation: 'n. 卡尔加里（加拿大城市）',
                phonetic: "'kælɡəri",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'We also have a women working group in our Consulate General in Calgary. And the chair of the group, Ms. Yan, is just sitting over there.',
                        cn: '驻卡尔加里总领馆也有一个妇女工作小组，严萍女士就是这个小组的组长，她也参加了今天的活动。'
                    },
                    {
                        en: 'The psychologist, from the University of Calgary, has subsequently formed an equation for why people procrastinate, which began by studying 250 college students.',
                        cn: '来自卡尔加里大学的心理学家随后提出了解释人们拖延的方程式，并已开始在250名大学生身上进行研究。'
                    },
                    {
                        en: '"It was half the size of a domestic cat and probably hunted and ate whatever it could for its size, " said Nick Longrich, a palaeontologist at the University of Calgary, who led the expedition.',
                        cn: '“它的大小只是家猫的一半，它只可能猎食力所能及的任何动物，”领导这项探险的卡尔加里大学古生物学家尼克·朗瑞奇说到。'
                    }
                ],
                id: 'high__Calgary',
                category: 'high'
            },
            {
                word: 'Greenwich',
                translation: 'n. 格林尼治（英城市）',
                phonetic: "'ɡri:nidʒ",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'After the 1884 Convention, Greenwich officially became the place where every day, year and century began.',
                        cn: '1884年大会以后，格林威治正式成为每一天、每一年及每一世纪开始的地方。'
                    }
                ],
                id: 'high__Greenwich',
                category: 'high'
            },
            {
                word: 'Boston',
                translation: '波士顿',
                phonetic: "'bɔstən",
                partOfSpeech: '',
                examples: [],
                id: 'middle__Boston',
                category: 'middle'
            },
            {
                word: 'Cuzco',
                translation: 'n. 库斯科（秘鲁南部城市）',
                phonetic: "'ku:skəu",
                partOfSpeech: 'n',
                examples: [
                    { en: 'In total, slides have killed five people in the Cuzco region.', cn: '在库斯科地区泥石流总共已使5人丧生。' },
                    {
                        en: 'Cuzco the capital city, was said by the Spanish to be "as fine as any city in Spain".',
                        cn: '库斯科首都被西班牙人认为“其精致可以媲美西班牙的任何城市”。'
                    },
                    {
                        en: 'Andean dancers wearingfeathered hats walk during celebrations in honor of the Lord of "QoyllurRit\'i" near the town of Tayankani in Cuzco, on June 22, 2011.',
                        cn: '2011年6月22日，库斯科的塔亚卡尼镇附近举办的节庆活动中，安第斯山脉的舞者身着羽毛做成的帽子行走在山间。'
                    }
                ],
                id: 'high__Cuzco',
                category: 'high'
            },
            {
                word: 'Barcelona',
                translation: '巴塞罗那（西班牙东北部港口城市）',
                phonetic: ",ba:si'ləunə",
                partOfSpeech: '',
                examples: [{ en: 'The aeroplane landed us at the airport in Barcelona.', cn: '飞机把我们降落在巴塞罗那机场。' }],
                id: 'high__Barcelona',
                category: 'high'
            },
            {
                word: 'Perth',
                translation: '珀思（澳大利亚西南部港口城市）',
                phonetic: 'pɜrθ',
                partOfSpeech: '',
                examples: [
                    { en: '"I see no basis in any of that speculation, " he told reporters in Perth.', cn: '他在珀斯告诉记者：“我看不到那种推测有任何根据。”' }
                ],
                id: 'high__Perth',
                category: 'high'
            },
            {
                word: 'Montgommery',
                translation: '蒙哥马利（城市名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Montgommery',
                category: 'high'
            },
            {
                word: 'Auckland',
                translation: 'n. 奥克兰（新西兰北岛西北岸港口城市）',
                phonetic: 'ˈɔːklənd',
                partOfSpeech: 'n',
                examples: [
                    { en: 'I lived in Auckland, New Zealand, in my own flat with my dog.', cn: '我住在新西兰的奥克兰，我与我的狗住在我自己的公寓里。' },
                    {
                        en: 'Vancouver, Auckland and Sydney were the only non-European cities in the top 10.',
                        cn: '在前10名中，温哥华、奥克兰和悉尼是仅有的几个非欧洲城市。'
                    },
                    {
                        en: 'For me the ultimate voyage is the Bank Line voyage from Auckland, New Zealand, to Singapore.',
                        cn: '对我来说，最长的行程是新西兰奥克兰前往新加坡的海岸线航行。'
                    }
                ],
                id: 'high__Auckland',
                category: 'high'
            },
            {
                word: 'Christchurch',
                translation: '克莱斯特彻奇（新西兰南岛东岸港口城市）',
                phonetic: "'kraisttʃə:tʃ",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'The United States stands ready to provide assistance to the government of New Zealand and to the brave people of Christchurch.',
                        cn: '克林顿说：“美国随时准备向新西兰政府和克赖斯特彻奇勇敢的人民提供援助。'
                    }
                ],
                id: 'high__Christchurch',
                category: 'high'
            },
            {
                word: 'Napier',
                translation: '内皮尔（新西兰北岛东岸港口城市）；纳皮尔（人名）',
                phonetic: "'neipiə",
                partOfSpeech: '',
                examples: [],
                id: 'high__Napier',
                category: 'high'
            },
            {
                word: 'Hobart',
                translation: '奥巴特（澳大利亚塔斯马尼亚岛东南岸港市）',
                phonetic: "'həuba:t",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Hobart Town, by degrees, grew to be a fine city, with handsome buildings and well kept streets.',
                        cn: '霍巴特镇在一定程度上已经演变为一个惬意的城市，街道整齐，建筑物大方气派；'
                    },
                    {
                        en: 'There, at the very foot of the lofty Mount Wellington, Hobart Town began to grow in its new situation.',
                        cn: '这里正处于高耸的威灵顿山脚下，一个新的霍巴特镇开始在这里成长。'
                    }
                ],
                id: 'high__Hobart',
                category: 'high'
            },
            {
                word: 'London',
                translation: '伦敦',
                phonetic: 'ˈlʌndən',
                partOfSpeech: 'n',
                examples: [
                    { en: 'I trained to London.', cn: '我乘火车到伦敦。' },
                    { en: 'You have to hurdle to London and get the intelligence back.', cn: '你得克服困难到达伦敦把那份情报取回来。' },
                    { en: 'He hopped to and fro between London and Paris for the business.', cn: '为了这笔生意他曾不停地往返于伦敦和巴黎。' }
                ],
                id: 'primary__London',
                category: 'primary'
            },
            {
                word: 'Tokyo',
                translation: 'n. 东京(日本首都)',
                phonetic: 'ˈtoʊkiˌoʊ',
                partOfSpeech: 'n',
                examples: [],
                id: 'pte_senior__Tokyo',
                category: 'pte_senior'
            },
            {
                word: 'Sydney',
                translation: '悉尼',
                phonetic: "'sɪdnɪ",
                partOfSpeech: '',
                examples: [
                    { en: 'My brother is living in Sydney.', cn: '我兄弟居住于悉尼。' },
                    { en: 'It is designed on the model of the Sydney Opera House.', cn: '它是仿效悉尼歌剧院设计的。' },
                    { en: 'My brother has just left Sydney for a tour of the world.', cn: '我哥哥刚离开悉尼去周游世界。' }
                ],
                id: 'primary__Sydney',
                category: 'primary'
            },
            {
                word: 'Moscow',
                translation: '莫斯科',
                phonetic: 'ˈmɑsˌkaʊ',
                partOfSpeech: '',
                examples: [
                    { en: 'Must go... to Moscow!', cn: '一定要去莫斯科！' },
                    {
                        en: 'Many of them are coming to Moscow from quite far away for an opportunity to have this kind of educational experience.',
                        cn: '为了这样一个有教育意义的体验，他们中的很多人都是从很远的地方赶到莫斯科来的。'
                    }
                ],
                id: 'primary__Moscow',
                category: 'primary'
            }
        ]
    },
    {
        title: '岛屿 / 山川河湖',
        words: [
            {
                word: 'Niagara',
                translation: 'n. 尼亚加拉（河；瀑布）',
                phonetic: "naɪ'æɡrə",
                partOfSpeech: 'n',
                examples: [
                    { en: 'There a friendly captain pointed across the Niagara River.', cn: '在那儿，一位友善的船长指着尼亚加拉河对岸。' },
                    {
                        en: 'Niagara belongs to the heavyweights - where a whole solid river plunges bodily over a cliff The real sight from above is the gigantic movement of the falls themselves， digging the gorge.',
                        cn: '尼亚加拉瀑布属于重量级——一股巨流全部从悬崖上冲泻下来。 从上往下看到的现实景像是瀑布自身的强烈运动在凿峡谷。'
                    }
                ],
                id: 'high__Niagara',
                category: 'high'
            },
            {
                word: 'Mount Etna',
                translation: '埃特纳火山（意大利西西里岛东北部）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Mount Etna holds a place in Roman mythology as the furnace of the god of fire and blacksmithing.',
                        cn: '埃特纳火山在罗马神话中占有一席之地。 它是火与锻冶之神的熔炉。'
                    }
                ],
                id: 'high__Mount Etna',
                category: 'high'
            },
            {
                word: 'the Parana River',
                translation: '巴拉那河(位于南美洲中南部，该州第二大河)',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'This project involves the construction of a road and a large number of bridges across the Parana River waterway.',
                        cn: '这项工程包括一条路和横跨巴拿马运河的几座桥梁的建设。'
                    }
                ],
                id: 'high__the Parana River',
                category: 'high'
            },
            {
                word: 'the Danube River',
                translation: '多瑙河（位于欧洲）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Romania is situated in southeastern Europe, bordered by Ukraine and Moldova in the northeast; Hungary in the west; Serbia and Bulgaria to the south along the Danube River.',
                        cn: '罗马尼亚位于欧洲东南部，东北面和乌克兰及摩尔多瓦接壤，西面和匈牙利接壤，南面隔着多瑙河的是塞尔维亚和保加利亚。'
                    }
                ],
                id: 'high__the Danube River',
                category: 'high'
            },
            {
                word: 'Greenland',
                translation: '格林兰（位于北美洲东北部，世界第一大岛）',
                phonetic: "'grinlənd",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Regardless of which version of Santa Claus you believe in, however, there is only one thing you need to know – that Santa Claus lives in Greenland.',
                        cn: '不过 无论你相信的是那一个版本的圣诞老人 你只需要知道一件事-圣诞老人居住在格陵兰。'
                    }
                ],
                id: 'high__Greenland',
                category: 'high'
            },
            {
                word: 'Stewart Island',
                translation: '斯图尔特岛（新西兰一岛屿）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'The Little Blue Penguin and the Stewart Island Shag can also be seen here in their natural environment.',
                        cn: '在这里，还可以看到自然生态环境中的小蓝企鹅和斯图尔特岛鹭鸶。'
                    }
                ],
                id: 'high__Stewart Island',
                category: 'high'
            },
            {
                word: 'Ithaca',
                translation: 'n. 伊萨卡岛（希腊西部爱奥尼海中亚群岛之一）',
                phonetic: "'iθəkə",
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Oxford and Cambridge (England) feel like Ithaca or Hanover: the message is there, but not as strong.',
                        cn: '英国的牛津和剑桥感觉就像伊萨卡岛或者汉诺威：虽然也在发着类似的消息，但是比较微弱。'
                    }
                ],
                id: 'high__Ithaca',
                category: 'high'
            },
            {
                word: 'Crete',
                translation: '克里特岛（希腊位于地中海西部的一个岛屿）',
                phonetic: 'kri:t',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Pavlos Tsimas says some people commit suicide in a public way, like the businessman in Crete.',
                        cn: '特斯马斯表示一些人以公开的方式自杀，就像克里特岛这位小商人。'
                    },
                    {
                        en: 'LinearB dates from around 1450 BC. It is an archaic form of written Greek used by Greek-speakers who conquered parts of Crete around that time.',
                        cn: '线形文字B大约始于公元前1450年，为当时征服了克里特岛部分地区的希腊人使用，是一种古老的书面希腊语。'
                    }
                ],
                id: 'high__Crete',
                category: 'high'
            },
            {
                word: 'Lake Taupo',
                translation: '陶波湖（新西兰最大湖）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: "Lake Taupo's shore is covered with pieces of pumice.", cn: '陶波湖岸上布满了一片片的浮石。' },
                    {
                        en: "Today, New Zealand's Lake Taupo is a serene sheet of fresh water, beloved of crayfish and hikers alike.",
                        cn: '今天，新西兰的陶波湖是一片宁静的淡水湖，为小龙虾和徒步旅行者所喜欢。'
                    },
                    {
                        en: 'This large eruption, known as the Oruanui, formed the caldera that holds Lake Taupo in the centre of New Zealand’s North Island.',
                        cn: '陶波湖火山的巨大喷发在新西兰北岛的中部形成了承载陶波湖的火山喷口。'
                    }
                ],
                id: 'high__Lake Taupo',
                category: 'high'
            },
            {
                word: 'Himalaya',
                translation: 'n. 喜马拉雅山脉',
                phonetic: 'ˌhɪməˈlaɪə',
                partOfSpeech: 'n',
                examples: [],
                id: 'pte_senior__Himalaya',
                category: 'pte_senior'
            },
            {
                word: 'Mount Kilimanjaro',
                translation: 'n. 乞力马扎罗山（位于坦桑尼亚；非洲最高山）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Couple Mikey and Tanya Carr-Hartley have a 56.56-hectare estate in the shadow of Mount Kilimanjaro.',
                        cn: '麦基和坦雅夫妇在乞力马扎罗山脚下拥有一个占地56.56公顷的庄园。'
                    },
                    {
                        en: 'The ice atop Mount Kilimanjaro in Tanzania has continued to retreat rapidly, declining 26 percent since 2000, scientists say in a new report.',
                        cn: '科学家在一份最新报告中称，2000年到现在，坦桑尼亚乞力马扎罗山顶的冰层已经持续快速消退了26%。'
                    },
                    {
                        en: 'Q: So you don’t have to do an extraordinary thing like climb Mount Kilimanjaro?',
                        cn: '问：这么说你也不必去做一些特别与众不同的事，像攀登乞力马扎罗山之类？'
                    }
                ],
                id: 'high__Mount Kilimanjaro',
                category: 'high'
            },
            {
                word: 'Alps',
                translation: 'n. 阿尔卑斯山',
                phonetic: 'ælps',
                partOfSpeech: 'n',
                examples: [
                    { en: 'They headed the storm crossing over Alps to Italy.', cn: '他们迎着暴风雪越过了阿尔卑斯山脉，朝着意大利进发。' },
                    { en: 'French troops negotiated the Alps and went on the road in Italy.', cn: '法军成功地越过了阿尔卑斯山脉，行军在意大利的国土上。' },
                    {
                        en: 'The high mountainous Alps in the west of Austria flatten somewhat into low lands and plains in the east of the country.',
                        cn: '奥地利西面的阿尔卑斯高山变得有些平坦，直接和国家的东面的低地和平原融为一体。'
                    }
                ],
                id: 'high__Alps',
                category: 'high'
            }
        ]
    },
    {
        title: '书名 / 电影名 / 公园名',
        words: [
            {
                word: 'Titanic',
                translation: '泰坦尼克号（轮船名）；《泰坦尼克号》（电影名）',
                phonetic: "taɪ'tænɪk",
                partOfSpeech: '',
                examples: [
                    {
                        en: 'Directly in back of the building is a lake from which the tips of icebergs protrude, and anchored there is a ship named Titanic, whose deck chairs can be rearranged.',
                        cn: '在建筑物正后面有一个湖，湖里露出冰山的小角，有一艘名叫泰坦尼克的船停在那里，它的甲板椅子可以重新排列。'
                    },
                    {
                        en: 'Dean had enjoyed her celebrity status as the last survivor, but remembered the doomed voyage with sadness. She said, "Until the wreckage of the Titanic was found in 1985, nobody was interested in me.',
                        cn: '迪安很喜欢她作为最后一名幸存者的名人地位，但回忆那次注定难逃一劫的航程时，她充满悲伤地说道：“直到1985年泰坦尼克号的残骸被发现，才有人对我感兴趣。'
                    }
                ],
                id: 'middle__Titanic',
                category: 'middle'
            },
            {
                word: 'Dollywood',
                translation: 'n. 多莱坞（公园名，位于美国）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [],
                id: 'high__Dollywood',
                category: 'high'
            },
            {
                word: 'Futuroscope',
                translation: 'n. 观测未来（公园名，位于法国）',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    {
                        en: 'Futuroscope is not only for individuals, but is also the perfect mix of fun and learning for class outings.',
                        cn: '“观测未来”主题公园不仅适合个人，也适合学生全班出游，因为它是娱乐与学习的完美结合。'
                    }
                ],
                id: 'high__Futuroscope',
                category: 'high'
            },
            {
                word: 'Jurassic Park',
                translation: '侏罗纪公园（美国电影名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: '"This is my Jurassic Park, " he said at a meeting of the American Geophysical Union meeting in San Francisco.',
                        cn: '“这就是我的‘侏罗纪公园’。” 马施在旧金山召开的美国地球物理学协会会议上发言说。'
                    }
                ],
                id: 'high__Jurassic Park',
                category: 'high'
            },
            {
                word: 'Agnes Grey',
                translation: '艾格妮斯.格雷（人名，书名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: "And 19th century literature was transformed by Anne's Agnes Grey, Emily's Wuthering Heights, and Charlotte's Jane Eyre.",
                        cn: '安妮的艾格妮斯·格雷，艾米丽的呼啸山庄，和夏洛特的简爱极大改变了19世纪的文学创作。'
                    }
                ],
                id: 'high__Agnes Grey',
                category: 'high'
            },
            {
                word: 'Tess of d’Urbevilles',
                translation: '德伯家的苔丝（书名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Tess of d’Urbevilles',
                category: 'high'
            },
            {
                word: 'Wuthering Heights',
                translation: '呼啸山庄（书名）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    {
                        en: 'As we rode the four miles to Wuthering Heights, he kept asking me questions about his new home, and the father he had never seen.',
                        cn: '在我们骑马去呼啸山庄的四英里路途中，他一直在问我有关他的新家和他那从未见过面的父亲的事。'
                    }
                ],
                id: 'high__Wuthering Heights',
                category: 'high'
            },
            {
                word: 'Central Park',
                translation: 'n. 中央公园',
                phonetic: '',
                partOfSpeech: 'n',
                examples: [
                    { en: 'The Central Park is not so well grassed as it used to be.', cn: '中央公园不如过去那样芳草如茵了。' },
                    {
                        en: 'But they find themselves drawn back to their elm in Central Park. Spending a night there is spiritually restorative, they said, if a bit chilly of late.',
                        cn: '但他们还是带着疲倦的身躯回到了中央公园的橡树那儿，并说，尽管最近有点儿冷，但在这棵树上睡一夜有助于恢复精神。'
                    }
                ],
                id: 'middle__Central Park',
                category: 'middle'
            }
        ]
    }
];
