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
                word: 'Charles Dickens',
                translation: '查尔斯 • 狄更斯（英国作家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Charles Dickens',
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
            },
            {
                word: 'Jacob Marley',
                translation: '雅各布 • 马利',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Jacob Marley',
                category: 'middle'
            },
            {
                word: 'Jayce Coziar',
                translation: '杰斯 • 克里亚',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Jayce Coziar',
                category: 'middle'
            },
            {
                word: 'Julie Thompson',
                translation: '朱莉 • 汤普森',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Julie Thompson',
                category: 'middle'
            },
            {
                word: 'Whitcomb Judson',
                translation: '惠特科姆 • 贾德森',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Whitcomb Judson',
                category: 'middle'
            },
            {
                word: 'Thomas Watson',
                translation: '托马斯 • 沃森',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Thomas Watson',
                category: 'middle'
            },
            {
                word: 'George Crum',
                translation: '乔治 • 克拉姆',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__George Crum',
                category: 'middle'
            },
            {
                word: 'James Naismith',
                translation: '詹姆斯 • 奈史密斯',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__James Naismith',
                category: 'middle'
            },
            {
                word: 'Alexander Graham Bell',
                translation: '亚历山大 • 格雷厄姆 • 贝尔',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'It is the story of Alexander Graham Bell.', cn: '这就是亚历山大·格雷厄姆·贝尔的故事。' },
                    { en: 'WHEN Alexander Graham Bell invented the telephone in 1876, he could never have predicted what it would be able to do in the future.', cn: '在1876年亚历山大·格雷厄姆·贝尔发明电话之时，他绝对不会料到电话在未来能做何用途。' }
                ],
                id: 'middle__Alexander Graham Bell',
                category: 'middle'
            },

            {
                word: 'Chelsea Lanmon',
                translation: '切尔西 • 兰曼',
                phonetic: '',
                partOfSpeech: '',
                id: 'middle__Chelsea Lanmon',
                category: 'middle'
            },

            {
                word: 'Jamie Ellsworth',
                translation: '杰米 • 埃尔斯沃恩',
                phonetic: '',
                partOfSpeech: '',
                id: 'middle__Jamie Ellsworth',
                category: 'middle'
            },

            {
                word: 'Paul Stoker',
                translation: '保罗 • 斯托克',
                phonetic: '',
                partOfSpeech: '',
                id: 'middle__Paul Stoker',
                category: 'middle'
            },

            {
                word: 'Dan',
                translation: '丹 • 德维什',
                phonetic: 'dæn',
                partOfSpeech: '',
                id: 'middle__Dan',
                category: 'middle'
            },

            {
                word: 'Orson',
                translation: '奥森',
                phonetic: '\'ɔ:sən',
                partOfSpeech: '',
                id: 'middle__Orson',
                category: 'middle'
            },

            {
                word: 'Noah Webster',
                translation: '诺厄•韦伯斯特（美国词典编纂家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Fifty years later across the pond Noah Webster produced his first dictionary.', cn: '五十年后，诺亚·韦伯斯特在海洋之外的另一片大陆上编成了他的第一本词典。' },
                    { en: 'First published in 1783, this reference book by the American man of letters Noah Webster (1758-1843) remained a bestseller in the U.S. throughout the 19th century.', cn: '1783年初版后，这本由研究语言文字的美国男子诺亚·韦伯斯特(1758-1843)编写的参考书在整个19世界都一直占据美国畅销书榜。' }
                ],
                id: 'high__Noah Webster',
                category: 'high'
            },

            {
                word: 'William Tyndale',
                translation: '威廉•廷代尔（英国早期新教改革者）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__William Tyndale',
                category: 'high'
            },

            {
                word: 'Norman Bethune',
                translation: '诺曼•白求恩（加拿大胸外科医师）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Norman Bethune was a well-known international human itarian.', cn: '诺尔曼·白求恩是众所周知的国际友人。' }
                ],
                id: 'high__Norman Bethune',
                category: 'high'
            },

            {
                word: 'Mohandas Gandhi',
                translation: '莫罕达斯•甘地（印度国民大会党领袖）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'In India, a Hindu extremist assassinates Mohandas Gandhi, the spiritual and political leader.', cn: '在印度，一名印度教极端分子刺杀了精神及政治领袖莫汉达斯·甘地。' }
                ],
                id: 'high__Mohandas Gandhi',
                category: 'high'
            },

            {
                word: 'Charles Babbage',
                translation: '查尔斯•巴比奇（英国数学教授）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Theworld\'s first computer printer was a 19th century mechanically drivenapparatus invented by Charles Babbage for his Difference Engine.', cn: '世界上第一台计算机的打印机是一种19世纪的机械驱动装置发明的查尔斯巴贝奇的差分机。' },
                    { en: 'I like your story of Charles Babbage, who in the 1820s basically invented the concept of computer a century before anyone, including him, could make one.', cn: '你书中关于查尔斯·巴贝奇（Charles Babbage）的故事我很喜欢，他在十九世纪二十年代就发明了计算机概念，而真正的计算机却是在一个世纪之后出现的。' }
                ],
                id: 'high__Charles Babbage',
                category: 'high'
            },

            {
                word: 'Alan Turing',
                translation: '艾伦•图灵（英国数学家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'In addition to the Curie clan, Einstein, Newton and Alan Turing —founder of modern computer science —all were left-handed as well.', cn: '除了居里夫人一家之外，爱因斯坦、牛顿和现代电脑科学的创始人阿兰·图灵都是左撇子。' }
                ],
                id: 'high__Alan Turing',
                category: 'high'
            },

            {
                word: 'CatherineⅡ',
                translation: '叶卡捷琳娜二世（俄国女皇）',
                phonetic: '\'kæθərin',
                partOfSpeech: '',
                id: 'high__CatherineⅡ',
                category: 'high'
            },

            {
                word: 'Elizabeth Fry',
                translation: '伊丽莎白•弗赖伊（英国慈善家）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Elizabeth Fry',
                category: 'high'
            },

            {
                word: 'Jane Goodall',
                translation: '简•古道尔(英国动物学家)',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Jane Goodall',
                category: 'high'
            },

            {
                word: 'Jody Williams',
                translation: '乔迪•威廉斯（美国诺贝尔和平奖得者）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Jody Williams',
                category: 'high'
            },

            {
                word: 'Charlie Chaplin',
                translation: '查理•卓别林（英国喜剧大师）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Charlie Chaplin',
                category: 'high'
            },

            {
                word: 'Victor Hugo',
                translation: '维克多•雨果（法国文学家）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Victor Hugo',
                category: 'high'
            },

            {
                word: 'Ahmed Aziz',
                translation: '艾哈迈德•阿齐兹',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Ahmed Aziz is a businessman from Jordan .', cn: '艾哈迈德·阿齐兹是一位来自约旦的商人。' }
                ],
                id: 'high__Ahmed Aziz',
                category: 'high'
            },

            {
                word: 'Darlene Coulon',
                translation: '达琳•库隆',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'When Darlene Coulon from France came dashing through the door, she recognized Tony Garcia\'s smiling face.', cn: '当来自法国的达琳•库隆匆忙走进门的时候，她认出了托尼•加西亚微笑的面孔。' }
                ],
                id: 'high__Darlene Coulon',
                category: 'high'
            },

            {
                word: 'Akira Nagata',
                translation: '永田明',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Then Akira Nagata from Japan came in smiling, together with George Cook from Canada.', cn: '随后，来自日本的永田明微笑着走了进来，同时进来的还有加拿大的乔治•库克。' }
                ],
                id: 'high__Akira Nagata',
                category: 'high'
            },

            {
                word: 'Merlin the Wizard',
                translation: '魔术师梅林',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'In one place, you can watch magic shows with Merlin the Wizard.', cn: '在有的地方，你还能和大魔术师梅林一起观看魔术表演。' }
                ],
                id: 'high__Merlin the Wizard',
                category: 'high'
            },

            {
                word: 'Nicolaus Copernicus',
                translation: '尼古拉•哥白尼（波兰天文学家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Nicolaus Copernicus, the Polish astronomer noted for his revolutionary theory about the earth revolving around the sun, is often credited with a gastronomic achievement.', cn: '波兰天文学家尼古劳斯． 哥白尼除了以其革新的「 地球环绕太阳旋转」 论著称， 据说在美食上也有成就。' }
                ],
                id: 'high__Nicolaus Copernicus',
                category: 'high'
            },

            {
                word: 'Whitney',
                translation: '惠特尼',
                phonetic: '\'hwɪtni',
                partOfSpeech: '',
                examples: [
                    { en: 'That may be extreme, but Ms. Whitney argues that the boom years are not coming back anytime soon.', cn: '这也许有点极端，但是惠特尼女士还是坚持繁荣的年代还没有到来的观点。' },
                    { en: 'Prof. CROSS: You know the - you remember that song that Whitney Houston wrote, "The Greatest Love of All"?', cn: '克洛斯教授：你知道——你记得惠特尼休斯顿写的那首歌《最伟大的爱》吗？' },
                    { en: 'And now there’s a brand new paper in Psychological Science by Faraz Farzin, Susan Rivera and David Whitney that provides some of the best evidence yet for the lantern hypothesis.', cn: '法拉兹-法曾，苏珊-里维拉和大卫-惠特尼在"心理科学"杂志上有一篇新论文，为灯笼的假设提供了到目前为止最好的证据。' }
                ],
                id: 'high__Whitney',
                category: 'high'
            },

            {
                word: 'Foster',
                translation: '福斯特（姓或男名）',
                phonetic: '\'fɔstɚ',
                partOfSpeech: '',
                id: 'high__Foster',
                category: 'high'
            },

            {
                word: 'Charles Keeling',
                translation: '查尔斯•基林',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'It was Charles Keeling who measured the carbon dioxide content in the atmosphere between 1957 and 1997.', cn: '是查尔斯。奎林把1957-1997年期间大气层中二氧化碳的含量作了精确的统计。' }
                ],
                id: 'high__Charles Keeling',
                category: 'high'
            },

            {
                word: 'George Hambley',
                translation: '乔治•汗布利',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'On the other hand, there are those, like George Hambley, who are opposed to this view, believe that we should not worry about high levels of carbon dioxide in the air.', cn: '另一方面，还有一些人，像科学家乔治治·汉布利，反对上面的观点，他们认为我们不必担心空气中会有高含量的二氧化碳。' }
                ],
                id: 'high__George Hambley',
                category: 'high'
            },

            {
                word: 'Marty',
                translation: '马蒂•菲尔丁',
                phonetic: '\'mɑ:ti',
                partOfSpeech: '',
                id: 'high__Marty',
                category: 'high'
            },

            {
                word: 'Barry Minto',
                translation: '巴里•明托',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Barry Minto',
                category: 'high'
            },

            {
                word: 'Isaac Asimov',
                translation: '艾萨克•阿西莫夫',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'As Isaac Asimov once commented, we scored a touchdown, then took our football and went home.', cn: '正如艾萨克·阿西莫夫评论的那样，我们只赢得一次达阵，然后便收起球回家了。' },
                    { en: 'One of the most celebrated science fiction authors, Isaac Asimov, outlined \'Three Laws of Robotics\' in a novel featuring human-like robots. The rules were designed to protect people from harm.', cn: '最著名的科幻小说作者之一，艾萨克·阿西莫夫，在一本以仿生机器人为特写的小说中，他概述了“机器人三定律”，旨在保护人类免受伤害。' },
                    { en: 'Isaac Asimov is the only author to have a book in every Dewey-decimal category.', cn: '艾萨克·阿西莫夫（Isaac Asimov）是美国唯一位在每一版杜威图书里都有出现他的书的作家。' }
                ],
                id: 'high__Isaac Asimov',
                category: 'high'
            },

            {
                word: 'Larry Belmont',
                translation: '拉里•贝尔蒙特',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Larry Belmont worked for a company that made robots.', cn: '拉里·贝尔蒙特的工作，这家公司制造的机器人。' }
                ],
                id: 'high__Larry Belmont',
                category: 'high'
            },

            {
                word: 'Gladys Claffern',
                translation: '格拉迪斯•克拉芬',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'As she turned around, there stood Gladys Claffern.', cn: '她刚一转身，就看到格拉蒂斯·克拉芬站在那里。' },
                    { en: 'As she turned around , there stood Gladys Claffern.', cn: '当她转过身去时，格拉雷斯·克拉芬站在那里。' }
                ],
                id: 'high__Gladys Claffern',
                category: 'high'
            },

            {
                word: 'Andrew Hallidie',
                translation: '安德鲁•海利迪',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Built in 1873, the cable car system was invented by Andrew Hallidie, who wanted to find a better form of transport than horse-drawn trams.', cn: '缆车系统建于1873年，是由安德鲁·海利迪发明的，他试图找到一种比马拉轨道车更好的交通方式。' }
                ],
                id: 'high__Andrew Hallidie',
                category: 'high'
            },

            {
                word: 'George Stephenson',
                translation: '乔治•斯蒂芬森（英国发明家，蒸汽机的发明人）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Travel and transportation were changed when the steamship was invented, and they were changed even more when the locomotive was invented by George Stephenson in 1814.', cn: '发明蒸汽船之后，人们的旅行和交通运输都改变了。而在1814年，乔治·史蒂芬逊发明蒸汽机车后，变化更大了。' },
                    { en: 'It begins with an evocative description of George Stephenson’s Rocket, a famous early steam engine, and traces the developments needed to make each of its individual components possible.', cn: '书的开头以动人的笔触描述了早期著名的蒸汽机工程师乔治·斯蒂文森的火箭发明，然后追溯了使每个个体发明成为可能的发展条件。' },
                    { en: 'It is before 1848 because it was referred to by George Stephenson in that year.', cn: '这是1848年之前，因为它是所提到乔治斯蒂芬森在这一年。' }
                ],
                id: 'high__George Stephenson',
                category: 'high'
            },

            {
                word: 'Alexander Graham',
                translation: '亚历山大•格雷厄姆•贝尔',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'It is the story of Alexander Graham Bell.', cn: '这就是亚历山大·格雷厄姆·贝尔的故事。' },
                    { en: 'Alexander Graham Bell and Elisha Gray filed patent applications on the very same day in 1876.', cn: '亚历山大·格拉汉姆·贝尔和伊莱莎·格雷在1876年的某个时间几乎同时递交了专利申请。' }
                ],
                id: 'high__Alexander Graham',
                category: 'high'
            },

            {
                word: 'James Dyson',
                translation: '詹姆斯•戴森（英国发明家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'An Australian designer has won this year\'s James Dyson Award with an invention that sounds more like magic than science - and the inventor owes his success to an unassuming little beetle.', cn: '一位澳大利亚设计师获得了本年度的杰姆斯戴森奖，他的发明与其说是科学不如说是一个神话。 而且这位发明者将他的成功归功于看起来不起眼的小甲虫。' },
                    { en: 'The James Dyson Award is an international design award that celebrates, encourages and inspires the next generation of design engineers.', cn: '詹姆斯·戴森奖是一项鼓励新人的设计奖项。' }
                ],
                id: 'high__James Dyson',
                category: 'high'
            },

            {
                word: 'Ashrita Furman',
                translation: '阿什里塔.弗曼',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Ashrita Furman',
                category: 'high'
            },

            {
                word: 'Sri chinmoy',
                translation: '斯里琴摩',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Sri chinmoy',
                category: 'high'
            },

            {
                word: 'Marco Polo',
                translation: '马可.波罗',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The most famous of these travelers was Marco Polo, whose thoughts and adventures were later recorded and embellished by an Italian romance writer.', cn: '这些旅行者中最出名的就是马可波罗，他的所见所闻后来被一位意大利传奇小说家记载下来，并加以润色。' }
                ],
                id: 'high__Marco Polo',
                category: 'high'
            },

            {
                word: 'Samuel',
                translation: '塞缪尔',
                phonetic: 'ˈsæmjuəl',
                partOfSpeech: '',
                examples: [
                    { en: '“Look at you,” she says pointing at Samuel, age five.', cn: '“看看你，”她指着照片中的五岁塞缪尔说到。' }
                ],
                id: 'high__Samuel',
                category: 'high'
            },

            {
                word: 'Captain Bligh',
                translation: '布莱船长',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The drawback of staying on the ship seemed to grow as I thought about how wrong it was to treat Captain Bligh in this way.', cn: '留在船舶上的缺点似乎成长，我想到它是这样对待布莱船长错误。' },
                    { en: 'In appointing Captain Bligh to rule the colony, the English Government spoiled an excellent seaman to make a very inefficient governor.', cn: '英国政府将布赖任命为殖民地长官，使得他从一个优秀海员演变成一个极其无能的管理者。' }
                ],
                id: 'high__Captain Bligh',
                category: 'high'
            },

            {
                word: 'Joseph',
                translation: '约瑟夫',
                phonetic: 'ˈdʒozəf, -səf',
                partOfSpeech: '',
                examples: [
                    { en: 'Why? Cannot you tell her who I am, eh, Joseph?', cn: '为什么？ 你就不能告诉她我是谁吗，呃，约瑟夫？' },
                    { en: 'Joseph is the right man for the job. You should recommend him.', cn: '约瑟夫是这份工作的合适人选，你该推荐他。' },
                    { en: 'Joseph pulled the nurse into a corner and muttered something to her.', cn: '约瑟夫把护士拉到一个角落里，和她嘀咕着什么。' }
                ],
                id: 'high__Joseph',
                category: 'high'
            },

            {
                word: 'Nathaniel Ward',
                translation: '纳撒尼尔.沃德',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Nathaniel Ward',
                category: 'high'
            },

            {
                word: 'Father Farges',
                translation: '法尔热神父（法）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Father Farges',
                category: 'high'
            },

            {
                word: 'Perce Blackborrow',
                translation: '珀斯.布莱克鲍罗',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Perce Blackborrow',
                category: 'high'
            },

            {
                word: 'Sir Ernest Shackleton',
                translation: '欧内斯特.沙克尔顿爵士',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The rare whisky was found 3 years ago below the floorboards of the hut used by renowned explorer Sir Ernest Shackleton. They had been buried in 1909.', cn: '这些珍贵的威士忌酒是著名探险家欧内斯特·沙克尔顿1909年进行南极探险时埋在探险小屋地板下的，3年前方得重见天日。' },
                    { en: 'It includes sites on every continent, among them Sir Ernest Shackleton\'s 1908 expedition hut in Antarctica and Australia\'s Dampier Rock art complex, which dates from 8000BC.', cn: '名单涵盖了各大洲的古迹，包括欧内斯特，沙克尔顿爵士1908年远征南极洲时住的小屋、始于公元前8000年前的澳大利亚丹皮尔地区的岩画群。' }
                ],
                id: 'high__Sir Ernest Shackleton',
                category: 'high'
            },

            {
                word: 'Tom Orde-Lees',
                translation: '汤姆.奥德.利兹',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Tom Orde-Lees is a selfish and bad-tempered member of the crew and his attitude may upset other people.', cn: '汤姆·奥德·利兹是船员中自私而又脾气暴躁的人，他的态度会使别人不安。' }
                ],
                id: 'high__Tom Orde-Lees',
                category: 'high'
            },

            {
                word: 'Hussey',
                translation: '赫西',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Mr. Hussey has, in other words, devoted 15 years of his life to rebuilding the trade center.', cn: '换句话说，赫西已经把生命中的15年奉献给了世贸中心的重建。' }
                ],
                id: 'high__Hussey',
                category: 'high'
            },

            {
                word: 'Frank Worsley',
                translation: '弗兰克.沃斯利',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Frank Worsley',
                category: 'high'
            },

            {
                word: 'Hubert Hudson',
                translation: '休伯特.哈德逊',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Hubert Hudson',
                category: 'high'
            },

            {
                word: 'Lionel Greenstreet',
                translation: '莱昂内尔.格林斯特里特',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Lionel Greenstreet',
                category: 'high'
            },

            {
                word: 'Regan',
                translation: '里根',
                phonetic: '\'ri:gən',
                partOfSpeech: '',
                examples: [
                    { en: 'She also says that on one occasion, Regan hung up on her in the middle of a phone conversation.', cn: '她还表示，有一次，在电话交谈中，里根挂了她的电话。' }
                ],
                id: 'high__Regan',
                category: 'high'
            },

            {
                word: 'Goneril',
                translation: '贡纳莉',
                phonetic: '\'ɡɔnəril',
                partOfSpeech: '',
                examples: [
                    { en: 'This part is equal in value to what I give to Goneril.', cn: '这部份和我给贡纳莉的那部份价值相等。' }
                ],
                id: 'high__Goneril',
                category: 'high'
            },

            {
                word: 'Cordelia',
                translation: '科迪莉亚',
                phonetic: 'kɔ:\'di:ljə',
                partOfSpeech: '',
                examples: [
                    { en: 'Don\'t grudge Anne Cordelia her fancies, Diana. I\'m always sorry for children who don\'t spend a few years in fairyland.', cn: '不要对安妮.科迪莉亚的想象力不满，戴安娜，我总是为没有在童话世界中度过一段岁月的孩子感到遗憾。' }
                ],
                id: 'high__Cordelia',
                category: 'high'
            },

            {
                word: 'Albany',
                translation: '奥尔巴尼',
                phonetic: '\'ɔ:bəni',
                partOfSpeech: '',
                examples: [
                    { en: 'One of my students from Albany, NY was suffering from bouts of severe depression.', cn: '我一个来自纽约奥尔巴尼的学生曾患有严重的抑郁症。' }
                ],
                id: 'high__Albany',
                category: 'high'
            },

            {
                word: 'Cornwall',
                translation: '康沃尔',
                phonetic: '\'kɔ:nwɔ:l',
                partOfSpeech: '',
                examples: [
                    { en: 'Prince Charles leads an expensive life and the Duchy of Cornwall is there to fund it.', cn: '查尔斯王子过着一种奢侈的生活，这些都由康沃尔公国进行资助。' },
                    { en: 'But the move to abolish shared berths for rail passengers travelling alone from London to Cornwall shows that, like Greta Garbo, we all now want to be alone.', cn: '但废除从伦敦到康沃尔的单身旅行者共用铺位的运动却表明，如同葛丽泰·嘉宝那样，现在的我们希望独处。' }
                ],
                id: 'high__Cornwall',
                category: 'high'
            },

            {
                word: 'Burgundy',
                translation: '勃艮第',
                phonetic: '\'bɝɡəndi',
                partOfSpeech: '',
                examples: [
                    { en: '...a bottle of white burgundy.', cn: '...一瓶勃艮第白葡萄酒。' }
                ],
                id: 'high__Burgundy',
                category: 'high'
            },

            {
                word: 'Oswald',
                translation: '奥斯瓦尔德',
                phonetic: '\'ɔzwəld',
                partOfSpeech: '',
                examples: [
                    { en: 'But Oswald stressed that the research looked at the average person, and could not account for everyone.', cn: '不过奥斯瓦德强调研究只是针对普通大众，不见得适用于所有人。' },
                    { en: '"We find a very strong link between cash falling on you and higher contentment and better mental health in the following year," said Oswald.', cn: '“我们发现意外的财产收入与之后一年内较高的满足感以及更好的精神状况有十分密切的联系，”奥斯瓦德说。' }
                ],
                id: 'high__Oswald',
                category: 'high'
            },

            {
                word: 'Caius',
                translation: '凯厄斯',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'On June 5, 1976, Needham delivered his last sermon as Master of Caius College. I quote from that sermon.', cn: '1976年6月5日，李约瑟作为剑桥大学凯斯学院的院长进行了他最后一次说教或演讲，下边就是他的讲话的引用。' }
                ],
                id: 'high__Caius',
                category: 'high'
            },

            {
                word: 'Maryann Jines',
                translation: '玛丽安.琼斯',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Maryann Jines',
                category: 'high'
            },

            {
                word: 'Martin Luther King Jr.',
                translation: '马丁.路德.金',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Here in the US, today is Martin Luther King Jr. Day.', cn: '今天是美国的马丁.路德.金纪念日。' },
                    { en: 'For this day, we celebrate Dr. Martin Luther King Jr.’s return to the National Mall.', cn: '在这一天，我们欢庆马丁·路德·金博士重返国家大草坪。' }
                ],
                id: 'high__Martin Luther King Jr.',
                category: 'high'
            },

            {
                word: 'Serena',
                translation: '赛丽娜',
                phonetic: 'sə\'reinə',
                partOfSpeech: '',
                examples: [
                    { en: 'Her next two films are slated to be Cleopatra and Serena, the story of a frontier woman who, among many other things, tries to kill her stepson.', cn: '朱莉接下来的计划包括《新埃及艳后》和《塞丽娜》两部电影，后一部讲述的是一个女人试图杀死继子的故事。' }
                ],
                id: 'high__Serena',
                category: 'high'
            },

            {
                word: 'Scout',
                translation: '斯考特',
                phonetic: 'skaʊt',
                partOfSpeech: '',
                id: 'high__Scout',
                category: 'high'
            },

            {
                word: 'Atticus',
                translation: '阿提斯库',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Greeks still use some ancient sites, such as the Pnyx and the Theater of Herodes Atticus.', cn: '希腊人仍在使用一些古代的场所，如普尼克斯和希罗德•阿提库剧场。' }
                ],
                id: 'high__Atticus',
                category: 'high'
            },

            {
                word: 'Jem',
                translation: '杰姆',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Jem',
                category: 'high'
            },

            {
                word: 'Arthur',
                translation: '亚瑟',
                phonetic: 'ˈɑːθə',
                partOfSpeech: '',
                examples: [
                    { en: 'Arthur and Carl don\'t like each other. But Bill is friendly with them both.', cn: '亚瑟和卡尔都很讨厌对方，但是比尔却和他们两个都很好。' }
                ],
                id: 'high__Arthur',
                category: 'high'
            },

            {
                word: 'Walter Cunningham',
                translation: '沃尔特.坎宁安',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Walter Cunningham',
                category: 'high'
            },

            {
                word: 'Caroline',
                translation: '卡罗琳',
                phonetic: '\'kærə,laɪn',
                partOfSpeech: '',
                examples: [
                    { en: 'Caroline, will you be there?', cn: '卡罗琳，你会出席吗？' },
                    { en: 'Caroline and Douglas will be there too.', cn: '卡罗琳和道格拉斯也将出席。' }
                ],
                id: 'high__Caroline',
                category: 'high'
            },

            {
                word: 'Ewell',
                translation: '尤厄尔',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Ewell',
                category: 'high'
            },

            {
                word: 'Mayella',
                translation: '梅耶拉',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Mayella',
                category: 'high'
            },

            {
                word: 'Jane Austin',
                translation: '简.奥斯丁',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The story is about Jane Austin , the author of "Pride and Prejudice".', cn: '这部电影讲述的是《傲慢与偏见》的作者简·奥斯汀的故事。' },
                    { en: 'In Jane Austin\'s time, when men and women lived in separate worlds, their primary attraction to each other was romantic and/or sexual.', cn: '在简奥斯汀的时代，男人和女人生活在各自的世界里，他们对于彼此的吸引只能发生在浪漫/性这方面。' },
                    { en: 'This is the second book (that) I have read written by Jane Austin.', cn: '这是我读过的简·奥斯汀的第二本书。' }
                ],
                id: 'high__Jane Austin',
                category: 'high'
            },

            {
                word: 'Charlotte Bronte',
                translation: '夏洛蒂.勃朗特',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Charlotte Bronte used it in a story published in 1849.', cn: '夏洛蒂·勃朗特在1849年发表的故事中用到了这种说法。' },
                    { en: 'An electronic-book firm is adding background noises and music to the works of Charlotte Bronte, Sir Arthur Conan Doyle and William Shakespeare in the hope of attracting younger readers.', cn: '一家电子书公司正在为夏洛蒂·勃朗特、柯南和莎士比亚的作品添加背景音乐，以期望吸引年轻读者。' }
                ],
                id: 'high__Charlotte Bronte',
                category: 'high'
            },

            {
                word: 'Margaret Mitchell',
                translation: '玛格丽特.米切尔',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'American writer, Margaret Mitchell, who wrote "Gone With The Wind", was knocked down and killed by a speeding vehicle in 1949.', cn: '写了《飘》的美国作家玛格丽特米歇尔，1949被一辆飞驰而来的汽车撞倒身亡。' }
                ],
                id: 'high__Margaret Mitchell',
                category: 'high'
            },

            {
                word: 'Rudyard Kipling',
                translation: '拉迪亚德.吉普林',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Rudyard Kipling',
                category: 'high'
            },

            {
                word: 'George Eliot',
                translation: '乔治.艾略特',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'As the great English writer George Eliot predicted over a century ago, that once established, the Jewish state will "shine like a bright star of freedom amid the despotisms of the East."', cn: '正如伟大的英国作家乔治·艾略特一个世纪以前所预言，一旦建立，这个犹太国家将“在东方的专制暴政中间像一颗明星一样发光”。' }
                ],
                id: 'high__George Eliot',
                category: 'high'
            },

            {
                word: 'Betsy Trotwood',
                translation: '贝特西.特洛特伍德',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Betsy Trotwood',
                category: 'high'
            },

            {
                word: 'Jaez Wilson',
                translation: '杰贝兹.威尔逊',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Jaez Wilson',
                category: 'high'
            },

            {
                word: 'Odysseus',
                translation: '奥德修斯',
                phonetic: 'əu\'disju:s',
                partOfSpeech: '',
                examples: [
                    { en: 'In order to steal it out, Odysseus and Diomedes slipped into the capital one night in  disguise , known to none but Hellen.', cn: '为了将神像偷出城, 一天夜里奥德修斯和狄俄墨德斯乔装改扮潜入首都, 这一切只有海伦知道。' },
                    { en: 'There he helped Odysseus when the hero came to him for advice.', cn: '在那儿，当奥德修斯前去征求他的意见时，泰瑞西斯帮助了他。' }
                ],
                id: 'high__Odysseus',
                category: 'high'
            },

            {
                word: 'Telemachus',
                translation: '忒勒玛科斯（Odysseus 和 Penelope 之子）',
                phonetic: 'ti\'leməkəs; tə-',
                partOfSpeech: '',
                examples: [
                    { en: 'Telemachus, in Homer’s story of the Odyssey, tipped his vehicle vertically against a wall, while others removed their wheels in the evening (Gordon, 1978) to prevent warping.', cn: '荷马史诗里的忒勒马科斯在晚上把他的车竖直靠墙，而其他的车则被卸去了轮毂以防止变形（戈登，1978）。' }
                ],
                id: 'high__Telemachus',
                category: 'high'
            },

            {
                word: 'Penelope',
                translation: '珀涅罗珀（Odysseus 的忠实妻子）',
                phonetic: 'pə\'nɛləpi',
                partOfSpeech: '',
                id: 'high__Penelope',
                category: 'high'
            },

            {
                word: 'Perseus',
                translation: '珀尔休斯（希腊主神宙斯之女，杀死怪 Medusa 的英雄）',
                phonetic: '\'pə:sju:s; -siəs',
                partOfSpeech: '',
                examples: [
                    { en: 'The hero is Perseus, called a demi-god, because his father is Zeus the god, while his mother a human.', cn: '我们的主角是珀尔修斯，他是一个半人神，因为他的爸爸是一个神，宙斯，而他的妈妈是一个人。' }
                ],
                id: 'high__Perseus',
                category: 'high'
            },

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
                word: 'Colombia VmbI',
                translation: '哥伦比亚（南美洲国家）',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__Colombia VmbI',
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
            },
            {
                word: 'South Africa',
                translation: '南非',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'middle__South Africa',
                category: 'middle'
            },

            {
                word: 'Alaska',
                translation: '阿拉斯加州',
                phonetic: 'ə\'læskə',
                partOfSpeech: 'n',
                examples: [
                    { en: 'Like I said, perfect, if you live in Alaska.', cn: '像我说过的，完美，如果你住在阿拉斯加的话。' },
                    { en: 'Alaska and Hawaii were dependencies of the United States.', cn: '阿拉斯加和夏威夷过去是美国的属地。' },
                    { en: 'Once they went camping with friends who had moved to Alaska.', cn: '有一次，他们和几个搬到阿拉斯加的朋友去野营。' }
                ],
                id: 'primary__Alaska',
                category: 'primary'
            },

            {
                word: 'Macao',
                translation: '澳门',
                phonetic: 'mə\'kau',
                partOfSpeech: '',
                examples: [
                    { en: 'These are ferries that ply between Hong Kong and Macao.', cn: '这些是往返香港和澳门间的渡轮。' }
                ],
                id: 'middle__Macao',
                category: 'middle'
            },

            {
                word: 'Brazil',
                translation: '巴西',
                phonetic: 'brə\'zil',
                partOfSpeech: '',
                examples: [
                    { en: 'Brazil has a big surplus of coffee.', cn: '巴西有很多剩余咖啡。' },
                    { en: 'Today\'s football match is France versus Brazil.', cn: '今天的足球赛是法国队对巴西队。' },
                    { en: 'Brazil has thrown up many world-famous footballers.', cn: '巴西出了许多闻名世界的足球运动员。' }
                ],
                id: 'middle__Brazil',
                category: 'middle'
            },

            {
                word: 'Norway',
                translation: '挪威',
                phonetic: '\'nɔrweɪ',
                partOfSpeech: '',
                examples: [
                    { en: 'Sweden borders Norway and Finland.', cn: '瑞典与挪威、芬兰接壤。' },
                    { en: 'They tried to chart the sea area between Norway and Denmark.', cn: '他们企图绘制挪威与丹麦之间的海域图。' },
                    { en: 'Now we know that someone from Norway can do it.', cn: '现在我们知道挪威的某些人可以这么做。' }
                ],
                id: 'middle__Norway',
                category: 'middle'
            },

            {
                word: 'Cantonese',
                translation: 'n & adj. 广东人（的）；广州人（的）; 广东话（的）',
                phonetic: ',kæntə\'ni:z',
                partOfSpeech: 'n & adj',
                examples: [
                    { en: 'Cantonese cooking', cn: '粤菜' }
                ],
                id: 'high__Cantonese',
                category: 'high'
            },

            {
                word: 'Wales',
                translation: '威尔士（英）',
                phonetic: 'weilz',
                partOfSpeech: '',
                examples: [
                    { en: 'England, Scotland and Wales compose the island of Great Britain.', cn: '英格兰、苏格兰和威尔士组成大不列颠岛国。' },
                    { en: 'The longer he stayed in London the more he hated it, but he could not go back to Wales for he had no job there.', cn: '他在伦敦呆得时间越长，越憎恶伦敦。 可是，他却不能回到威尔士，因为那里没有他的工作。' }
                ],
                id: 'high__Wales',
                category: 'high'
            },

            {
                word: 'Northern Ireland',
                translation: '北爱尔兰（英）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Northern Ireland',
                category: 'high'
            },

            {
                word: 'Midlands',
                translation: '英格兰中部地区（英）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The plotters escaped from London for the Midlands.', cn: '密谋者迅速从伦敦撤往中部地区。' }
                ],
                id: 'high__Midlands',
                category: 'high'
            },

            {
                word: 'Papua',
                translation: '巴布亚新几内亚',
                phonetic: '\'pæpjuə',
                partOfSpeech: '',
                examples: [
                    { en: 'The extremely limited road system in Papua New Guinea means that we flew to our destination.', cn: '巴布亚新几内亚极其狭窄的道路系统意味着我们需要飞入目的地。' },
                    { en: 'Our idea is that the ancestors of Melanesians met the Denisovans in Southeast Asia and interbred, and the ancestors of Melanesians then moved on to Papua New Guinea.', cn: '我们的观点是，美拉尼亚人的祖先在亚洲东南部与丹尼索万人相遇并通婚，然后美拉尼亚人的祖先来到巴布亚新几内亚。' }
                ],
                id: 'high__Papua',
                category: 'high'
            },

            {
                word: 'California',
                translation: '加利福尼亚（州）',
                phonetic: ',kælɪ\'fɔnjə',
                partOfSpeech: '',
                examples: [
                    { en: 'California borders the Pacific Ocean.', cn: '加利福尼亚州与太平洋毗连。' },
                    { en: 'She lived in California during the winter.', cn: '整个冬天她住在加利福尼亚州。' },
                    { en: 'Many people prospected for gold in California in the 1850s.', cn: '19世纪50年代许多人在加利福尼亚勘探金矿。' }
                ],
                id: 'high__California',
                category: 'high'
            },

            {
                word: 'Californian',
                translation: '加利福尼亚（州）人',
                phonetic: 'ˌkælɪˈfɔːnɪən',
                partOfSpeech: '',
                id: 'high__Californian',
                category: 'high'
            },


            {
                word: 'Slovenia',
                translation: '斯洛文尼亚（国名）',
                phonetic: 'sləu\'vi:niə',
                partOfSpeech: '',
                examples: [
                    { en: 'Have you ever been to Slovenia?', cn: '你去过斯洛文尼亚吗？' }
                ],
                id: 'high__Slovenia',
                category: 'high'
            },

            {
                word: 'Alabama',
                translation: '阿拉巴马州（美国的一个州）',
                phonetic: ',ælə\'bæmə',
                partOfSpeech: '',
                examples: [
                    { en: 'One of the latest casualties is the sewer system of Jefferson county, Alabama.', cn: '最近的一个受害者是阿拉巴马州杰弗逊县的下水道系统。' }
                ],
                id: 'high__Alabama',
                category: 'high'
            },

            {
                word: 'Inca',
                translation: '印加帝国',
                phonetic: '\'iŋkə',
                partOfSpeech: '',
                examples: [
                    { en: 'With this big stick, Inca kings began eyeing the lands and resources of others.', cn: '有了这根军事大棒，印加帝王开始觊觎别人的土地和资源。' },
                    { en: 'But within a hundred years after the Inca began building this impressive city, they started to abandon it.', cn: '但在开始建设这个城市之后一百年，他们又放弃了这个令人印象深刻的印加城市。' },
                    { en: 'He believed the Inca dynasty had far deeper roots, and Maukallacta seemed the logical place to look for them.', cn: '他认为印加王朝有着更渊源的根，要找出来，毛卡拉塔似乎是个合理的地方。' }
                ],
                id: 'high__Inca',
                category: 'high'
            },

            {
                word: 'Scotland',
                translation: '苏格兰（英）',
                phonetic: '\'skɔtlənd',
                partOfSpeech: '',
                examples: [
                    { en: 'He traveled Scotland last year.', cn: '他去年在苏格兰旅行。' },
                    { en: 'England, Scotland and Wales compose the island of Great Britain.', cn: '英格兰、苏格兰和威尔士组成大不列颠岛国。' },
                    { en: 'Why should they not go on to Scotland, if that had been the case?', cn: '要是真象你所想的那样，那他们干吗不到苏格兰去呢？' }
                ],
                id: 'high__Scotland',
                category: 'high'
            },
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
            },
            {
                word: 'Munich',
                translation: '慕尼黑',
                phonetic: '\'mju:nik',
                partOfSpeech: '',
                examples: [
                    { en: 'And then we went to Munich.', cn: '然后我们去了慕尼黑。' },
                    { en: 'She urgently phones her contact, and he orders her to go to Munich and remain untraceable.', cn: '她急切地打电话给她的联络人，对方指令她前往慕尼黑，并保持不被他人找到。' }
                ],
                id: 'primary__Munich',
                category: 'primary'
            },

            {
                word: 'Canberra',
                translation: '堪培拉',
                phonetic: '\'kænbərə',
                partOfSpeech: '',
                examples: [
                    { en: 'In Australia, climate change is a political football, kicked about in the power game played in Canberra.', cn: '在澳大利亚，气候变化是政治足球，在堪培拉的权力游戏中被踢来踢去。' },
                    { en: 'Canberra needs the relationship - and the guarantees of military assistance that go with it - far more than Washington does.', cn: '堪培拉需要这种关系，以及随之而来的军援保证，远远超过华盛顿对这种关系的需要。' },
                    { en: 'Kylie Catchpole, a research fellow at the Australian National University in Canberra, says the design is promising because it works over a broad band of the spectrum.', cn: '凯莉·卡崔布尔，堪培拉的澳洲国立大学的一名女研究员，说道这项设计很有前景因为研究的是宽频带的光谱。' }
                ],
                id: 'primary__Canberra',
                category: 'primary'
            },

            {
                word: 'Turpan',
                translation: '吐鲁番',
                phonetic: '\'tuə\'pɑ:n',
                partOfSpeech: '',
                examples: [
                    { en: 'Ahmed then took me for a drive outside Turpan to a small Uyghur village at the foot of a mountain where I could see their style of housing, farming, etc.', cn: '然后，艾哈迈德载我去吐鲁番郊外的、山脚下的一个维族小村庄，在那我可以看到他们的建筑风格，以及农事等等。' }
                ],
                id: 'primary__Turpan',
                category: 'primary'
            },

            {
                word: 'Georgetown',
                translation: '乔治城（圭亚那首都）',
                phonetic: '\'dʒɔdʒtaun',
                partOfSpeech: '',
                id: 'middle__Georgetown',
                category: 'middle'
            },

            {
                word: 'Cape Town',
                translation: '开普敦（南非立法首都）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'I travelled from Cairo to Cape Town in 2002.', cn: '2002年，我从开罗一路旅行到了开普敦。' },
                    { en: 'Given that Capello refused to back Green after the game, Hart should get his chance against Algeria in Cape Town on Friday.', cn: '假定卡佩罗在赛后不支持格林，那哈特就有机会参加星期五开普敦与阿尔及利亚的比赛。' },
                    { en: 'But their confidence never wavered as Blatter remarked during the team draw in Cape Town six months ago. "You are ready. I am ready.', cn: '但是他们的信心从未动摇，布拉特六个月前在开普敦小组抽签时重申：“你们准备好了，我准备好了。' }
                ],
                id: 'high__Cape Town',
                category: 'high'
            },

            {
                word: 'Pompeii',
                translation: '庞培（意大利古都）',
                phonetic: 'pɔm\'peii:; -\'pei',
                partOfSpeech: '',
                examples: [
                    { en: 'Pompeii was a cultural center and vacation destination for Roman high society until it was destroyed in 79 A.D. by the eruption of Mount Vesuvius.', cn: '公元79年维苏威火山爆发并摧毁该城市以前，意大利古城庞培一直是罗马帝国上流社会贵族们的度假天堂，也是罗马帝国的文化中心。' },
                    { en: 'Mount Nyiragongo is one of the most dangerous volcanoes in the world - and scientists say it is only a matter of time before it makes the city below a modern day Pompeii.', cn: '尼拉贡戈火山是世界上最危险的火山之一，科学家表示，山脚下的城镇重现庞培古城的悲剧只是时间的问题。' }
                ],
                id: 'high__Pompeii',
                category: 'high'
            },


            {
                word: 'Melbourne',
                translation: '墨尔本（澳大利亚东南部港市，维多利亚州首府）',
                phonetic: '\'mɛlbən',
                partOfSpeech: '',
                examples: [
                    { en: 'All works are handmade in Melbourne, with sterling silver, human hair and human teeth.', cn: '所有的作品都以纯银、人的头发和牙齿在墨尔本手工制作而成。' },
                    { en: 'Father and son even attended university together when Daniel began his masters degree in genetics, aged 15, and his dad studied mathematics and physics at the University of Melbourne.', cn: '这对父子甚至一起上大学：当15岁的达尼埃尔在墨尔本大学开始攻读遗传学硕士的时候，他父亲正在学习数学和物理学。' },
                    { en: 'We went to bed to rise early the next day and set off along the Great Ocean Road, which stretches for around 160 miles along the coast between Adelaide and Melbourne.', cn: '我们早早上床睡觉，第二天早起后出发驶上大洋路，这条路从阿德雷德到墨尔本，沿着海岸线延伸160英里。' }
                ],
                id: 'high__Melbourne',
                category: 'high'
            },

            {
                word: 'Adelaide',
                translation: '阿德莱德（澳大利亚东南部港市，南澳大利亚前首府）',
                phonetic: '\'ædəleid',
                partOfSpeech: '',
                examples: [
                    { en: '"We were lucky to find a site like that, " said lead study author Wolfgang Haak, from the University of Adelaide in Australia.', cn: '“能找到这样的遗址我们真是太幸运了，”来自澳洲阿德莱德大学的主要研究员沃夫冈·哈克说到。' }
                ],
                id: 'high__Adelaide',
                category: 'high'
            },

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
            },
            {
                word: 'Mount Kilauea',
                translation: '基拉韦厄火山',
                phonetic: '',
                partOfSpeech: '',
                examples: [],
                id: 'high__Mount Kilauea',
                category: 'high'
            },
            {
                word: 'Papa Westray',
                translation: '帕帕韦斯特雷岛',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Papa Westray has a population of just 70 and no secondary school.', cn: '帕帕韦斯特雷岛人口只有70，岛上没有中学。' }
                ],
                id: 'primary__Papa Westray',
                category: 'primary'
            },

            {
                word: 'Penang Hill',
                translation: '马来西亚槟榔山（升旗山）',
                phonetic: '',
                partOfSpeech: '',
                id: 'middle__Penang Hill',
                category: 'middle'
            },

            {
                word: 'Thunder Bay',
                translation: '桑德湾',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Lake is the main port of Duluth United States and Canada Thunder Bay, and so on.', cn: '主要湖港有美国的德卢斯和加拿大的桑德贝等。' }
                ],
                id: 'high__Thunder Bay',
                category: 'high'
            },

            {
                word: 'Lake Superior',
                translation: '苏必利尔湖',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The Lake Superior National Marine Conservation Area offers unparalleled waters for trout, whitefish, lake herring, and walleye.', cn: '苏必利尔湖国家海洋保护区为鳟鱼，白鱼，湖鲱鱼，角膜白斑提供了无与伦比的水域。' },
                    { en: 'Travel to Algoma Country on the northern part of Lake Superior then bait-up, cast your line and wait for something juicy to bite which can then be cooked a crackling fire.', cn: '首先前往苏必利尔湖北面的艾柯玛县，接下来你就可以上饵、放线，然后等着那鲜美多汁的家伙上钩，最后用一堆柴火烹制你的佳肴啦。' },
                    { en: 'The result is a narrow lake 410 miles (660 kilometers) long—60 miles (97 kilometers) longer than Lake Superior—and 3, 600 feet (1, 100 meters) wide, twice the width of the natural river channel.', cn: '蓄水完成后，将形成一个长度达440英里（660公里），宽3600英尺（1100米）的狭长型大湖，其长度比苏必利尔湖长处60英里（97公里），宽度是长江自然河道的两倍。' }
                ],
                id: 'high__Lake Superior',
                category: 'high'
            },

            {
                word: 'St Lawrence River',
                translation: '圣劳伦斯河',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'As they sat in a café looking over the broad St Lawrence River, a young man sat down with them.', cn: '正当她们坐在咖啡馆里向外瞭望宽阔的圣劳伦斯河的时候，一个年轻人和他们坐到了一起。' },
                    { en: 'The capital of Francophone Canada offers an annual Winter Carnival with snow sculptures, an Ice Palace and tower and a legendary canoe race along the St Lawrence River.', cn: '雪雕，冰宫，冰塔都是冬季嘉年华上必不可少的项目。 还会有著名的圣劳伦斯河独木舟比赛。' }
                ],
                id: 'high__St Lawrence River',
                category: 'high'
            },

            {
                word: 'River Avon',
                translation: '埃文河',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__River Avon',
                category: 'high'
            },

            {
                word: 'River Thames',
                translation: '泰晤士河',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The skeleton of a whale which died after becoming stranded swimming up the River Thames is going on public display.', cn: '这具鲸鱼骨架是一条在英国泰晤士河中因搁浅致死的鲸鱼的骨架，目前它被公开展出。' },
                    { en: 'Researchers working in the Black Sea have found currents of water 350 times greater than the River Thames flowing along the sea bed, carving out channels much like a river on the land.', cn: '在黑海进行研究工作的科研人员发现了在海床上奔涌的水流，它们的流量是泰晤士河的350倍，如同陆地上的河流一样冲刷蚀刻出水道。' },
                    { en: 'After his conviction of piracy and murder charges in a sensational London trial, he was left to hang over the River Thames for two years.', cn: '在伦敦，他被认定海盗和谋杀罪成立的审判轰动一时，之后他的尸体被悬在泰晤士河长达两年。' }
                ],
                id: 'high__River Thames',
                category: 'high'
            },

            {
                word: 'River Severn',
                translation: '塞文河',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Shrewsbury also suffered flooding after the River Severn burst its banks.', cn: '在塞文河的河水漫过堤岸后，什鲁斯伯里市也遭遇了洪水袭击。' }
                ],
                id: 'high__River Severn',
                category: 'high'
            },

            {
                word: 'Sicily',
                translation: '西西里岛（意大利南部）',
                phonetic: '\'sisili',
                partOfSpeech: '',
                examples: [
                    { en: 'A group of wealthy friends are cruising the sea near Sicily on a yacht.', cn: '一群有钱人开着游艇在西西里岛附近的海上游弋。' }
                ],
                id: 'high__Sicily',
                category: 'high'
            },

            {
                word: 'Mount Vesuvius',
                translation: '维苏威火山',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The protesters were demonstrating against the opening of a new dump on the slopes of Mount Vesuvius.', cn: '反对者们抗议在维苏威火山的半坡上启用一处新的垃圾场。' }
                ],
                id: 'high__Mount Vesuvius',
                category: 'high'
            },

            {
                word: 'Lake Titicaca',
                translation: '的的喀喀湖',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'A girl runs on one ofthe Uros floating islands on Lake Titicaca in Puno, Peru, on May 29, 2011.', cn: '2011年5月29日，秘鲁普诺市的的喀喀湖上的漂流岛，一个女孩正在奔跑。' },
                    { en: 'Ubinas is one of many volcanoes that dot the high desert plateau east of Lake Titicaca in southern Peru.', cn: '乌比纳斯火山是众多火山群中的一个，这些火山群位于秘鲁南部，的的喀喀湖以东的沙漠高原上。' },
                    { en: 'Theprotesters oppose the Canadian Santa Ana silver mining project they say willpollute the Desaguadero River and Lake Titicaca.', cn: '抗议者反对加拿大圣安娜银矿开采项目，声称该项目会污染德萨瓜德罗河和的的喀喀湖。' }
                ],
                id: 'high__Lake Titicaca',
                category: 'high'
            },

            {
                word: 'Machu Picchu',
                translation: '马丘比丘（秘鲁）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'The next day the Espinar water strike spreads to communities near Machu Picchu.', cn: '第二天，埃斯皮纳水罢工扩大到马丘比丘附近的社区。' },
                    { en: 'Machu Picchu in Peru, which means ‘Old Peak, ” is one of the most enigmatic ancient sites in the world.', cn: '马丘比丘在秘鲁是“古老的顶峰”的意思。 这是世界上最具神秘色彩的古老建筑。' },
                    { en: 'As archaeologists learn more about what happened here, new questions continue to arise, guaranteeing that Machu Picchu will remain a place of mystery for years to come.', cn: '作为考古学家了解这里发生的事情更多，新的问题继续出现，马丘比丘将在未来几年保持它神秘的面貌。' }
                ],
                id: 'high__Machu Picchu',
                category: 'high'
            },

            {
                word: 'Angel Island',
                translation: '天使岛',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Angel Island Company offers a number of activities, such as bicycling , sailing and surfing.', cn: '天使岛公司提供许多活动，例如骑单车、出帆和冲浪。' },
                    { en: 'Invitingly green Angel Island, once a military installation, contains meandering trails and picnic spots ideal for a day\'s excursion.', cn: '迷人的天使岛郁郁葱葱，小径蜿蜒，是一日游的理想野餐场所。但在它却是军事基地。（名词短语分译）' }
                ],
                id: 'high__Angel Island',
                category: 'high'
            },

            {
                word: 'Bering',
                translation: '白令海峡',
                phonetic: '\'bɛriŋ',
                partOfSpeech: '',
                examples: [
                    { en: 'I first came to North American in prehistoric times when I crossed the Bering Strait land bridge from Eurasia.', cn: '在史前时期，我从欧亚大陆穿越白令海峡、走过陆地、桥第一次来到了北美。' },
                    { en: 'As they report online this week in Nature Geoscience, the model shows that the Bering Strait\'s status was directly responsible for the ice-sheet oscillations.', cn: '他们在本周《自然-地球科学》杂志在线版上报道：模拟显示，白令海峡的状况是造成冰盖振荡的直接原因。' },
                    { en: 'Its modern distribution suggests that Japanese sailors were the first people to reach the Americas, millennia before Siberians wandered across the Bering Strait.', cn: '其现代分布表明，日本船员首先到达美洲，比西伯利亚人越过白令海峡早了一千年。' }
                ],
                id: 'high__Bering',
                category: 'high'
            },

            {
                word: 'Tahiti',
                translation: '塔西提岛（位于太平洋）',
                phonetic: 'tɑ:\'hi:ti; tə-',
                partOfSpeech: '',
                examples: [
                    { en: 'Tahiti lies in the South Pacific.', cn: '塔希提岛位于南太平洋。' },
                    { en: 'The hulls were built by Choco Indians in the Darien Providence of Panama and shipped to Tahiti.', cn: '它的船身是在巴拿马的达里恩省由巧克族印第安人做的，然后运到塔希提岛来。' },
                    { en: 'How about a 55-day round trip from California to Australia and New Zealand via Tahiti and Mexico?', cn: '从加州途径塔希提岛和墨西哥前往澳大利亚和新西兰往返55天的行程怎么样？' }
                ],
                id: 'high__Tahiti',
                category: 'high'
            },

            {
                word: 'Timor',
                translation: '帝汶岛（位于东南亚）',
                phonetic: '\'ti:mɔ:; \'tai-; ti\'mɔ:',
                partOfSpeech: '',
                examples: [
                    { en: 'Although Timor Leste is a new country, it is already part of the international sport scene.', cn: '东帝汶虽然是一个新国家，但是它已经是国际体育运动的一部分了。' }
                ],
                id: 'high__Timor',
                category: 'high'
            },

            {
                word: 'Shetland Islands',
                translation: '设得兰群岛（位于英国苏格兰北部）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Shetland Islands',
                category: 'high'
            },

            {
                word: 'Kakadu',
                translation: '卡卡杜湾',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Many of its world-renowned attractions are specific, such as the Great Barrier Reef, Ayers Rock, Kakadu National Park, and Sydney Opera House.', cn: '澳大利亚世界闻名的景点中有许多是其独有的，如大堡礁、艾尔斯巨石、卡卡杜国家公园和悉尼歌剧院等。' }
                ],
                id: 'high__Kakadu',
                category: 'high'
            },

            {
                word: 'Uluru',
                translation: '乌卢鲁，埃尔斯岩（Ayres Rock）的土著名',
                phonetic: '\'u:ləru:',
                partOfSpeech: '',
                id: 'high__Uluru',
                category: 'high'
            },

            {
                word: 'Great Barrier Reef',
                translation: '大堡礁',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Great Barrier Reef',
                category: 'high'
            },

            {
                word: 'Kosciuszko',
                translation: '科西阿斯科山（位于澳大利亚东南部）',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Kosciuszko',
                category: 'high'
            },

            {
                word: 'Nullarbor',
                translation: '纳拉伯平原（位于澳大利亚西南部，火箭制造基地和试验场）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'We needed it, for the last leg was the toughest of all: the Nullarbor Plain, which stretches across the south of the country.', cn: '我们需要这么做，因为我们最后一段路程是最艰难的，那就是绵延在澳大利亚南部的纳拉伯平原。' }
                ],
                id: 'high__Nullarbor',
                category: 'high'
            },

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
            },
            {
                word: 'Mona Lisa',
                translation: '蒙娜•丽莎（达•芬奇所作的一幅著名肖像画）',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Almost everyone knows the painting, Mona Lisa, but not everyone knows of its bizarre history.', cn: '每个人都知道蒙娜·丽莎这幅画，可是并非人人了解她的离奇的历史。' },
                    { en: 'And he painted her portrait--one of the great paintings of all time, right up there with the "Mona Lisa"--as a final, loving tribute.', cn: '他还为她画了肖像，作为最后的爱的信物。 这张肖像一直被认为是一幅伟大的杰作，和蒙娜·丽莎齐名。' },
                    { en: 'The true identity of Mona Lisa and her enigmatic smile have intrigued art lovers around the world.', cn: '蒙娜丽莎的真实身份和她神秘的微笑令全世界的艺术爱好者为之着迷。' }
                ],
                id: 'high__Mona Lisa',
                category: 'high'
            },

            {
                word: 'Guiness Book of World Records',
                translation: '《吉尼斯世界纪录大全》',
                phonetic: '',
                partOfSpeech: '',
                id: 'high__Guiness Book of World Records',
                category: 'high'
            },

            {
                word: 'King Lear',
                translation: '李尔王',
                phonetic: '',
                partOfSpeech: '',
                examples: [
                    { en: 'Land rose from its womb, usurped its throne, and ever since the maddened old creature, with hoary crest of foam, wails and laments continually, like King Lear exposed to the fury of the elements.', cn: '大地从它的腹中隆起，篡夺了它的王位。 从那以后，暴怒的老家伙就开始顶着灰白色的泡沫不断的哀号恸哭，一如暴风骤雨之中的李尔王。' },
                    { en: 'The original ending of King Lear wasn’t performed for nearly 150 years because it was thought too upsetting.', cn: '《李尔王》的原始结尾在长达150年的时间里没有上演过，因为人们认为它太悲伤了。' }
                ],
                id: 'high__King Lear',
                category: 'high'
            },

        ]
    }
];
