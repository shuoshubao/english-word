import {
    CheckCircleFilled,
    CloseCircleFilled,
    DislikeFilled,
    DislikeOutlined,
    EditTwoTone,
    EyeInvisibleOutlined,
    EyeOutlined,
    HeartFilled,
    HeartOutlined,
    LikeFilled,
    LikeOutlined,
    RightOutlined,
    ShakeOutlined,
    SoundOutlined
} from '@ant-design/icons';
import { Button, Input, Listy, message, Progress, Segmented, Space, Table, Tag, Tooltip } from 'antd';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { speak, speakSentence } from '@/utils/audio';
import { hasRecord } from '@/utils/records';
import { setKnowledge, toggleFavorite } from '@/utils/state';
import { useLearningState } from '@/utils/useStore';

const PAGE_SIZE = 20;

const FILTERS = [
    { value: 'all', label: '全部' },
    { value: 'unread', label: '未读' },
    { value: 'unknown', label: '不认识' },
    { value: 'known', label: '认识' },
    { value: 'favorite', label: '收藏' }
];

// 释义多词性拆行
const POS_ALT = 'modal\\s+verb|convention|determiner|interj|abbr|prep|pron|conj|aux|art|num|det|adj|adv|int|vt|vi|n|v';
const POS_SPLIT_RE = new RegExp(`;\\s*((?:${POS_ALT})\\s*\\.)\\s*`, 'gi');
const toLines = text =>
    String(text || '')
        .replace(POS_SPLIT_RE, '\n$1 ')
        .split('\n')
        .map(item => item.trim().replace(/;+$/, '').trim())
        .filter(Boolean);

// 新结构词条: { ph_en, ph_am, parts, exchange, examples: [{ src, dst }], synonyms, antonyms, confuse }
// 旧结构词条(主题/特殊单词等): { phonetic, partOfSpeech, translation, examples: [{ en, cn }] }
const getMeaningLines = record => {
    if (record.parts) {
        return record.parts.map(part => part.means.join('; '));
    }
    return toLines(record.translation);
};

const getExchangeItems = record => {
    const { pl, past, ing } = record.exchange ?? {};
    return [
        ['复数', pl],
        ['过去式', past],
        ['ing', ing]
    ].filter(([, value]) => value);
};

const hasDetail = record => {
    return Boolean(
        record.examples?.length || record.synonyms?.length || record.antonyms?.length || record.confuse?.length || getExchangeItems(record).length
    );
};

const renderPhonetic = record => {
    if (record.ph_en || record.ph_am) {
        return (
            <span className="inline-flex flex-wrap items-baseline gap-x-3 text-[#6652d1] text-sm">
                {record.ph_en ? <span>英 {record.ph_en}</span> : null}
                {record.ph_am ? <span>美 {record.ph_am}</span> : null}
            </span>
        );
    }
    return record.phonetic ? <span className="text-[#6652d1] text-sm">/{record.phonetic}/</span> : null;
};

const renderWordTags = (label, list) => {
    if (!list?.length) {
        return null;
    }
    return (
        <div className="flex flex-wrap items-center gap-1.5 pl-4">
            <span className="text-[12px] text-[#666]">{label}</span>
            {list.map(item => {
                return <Tag key={item}>{item}</Tag>;
            })}
        </div>
    );
};

const renderDetail = record => {
    const exchangeItems = getExchangeItems(record);
    return (
        <div className="ml-[100px] pr-4 py-2 bg-white flex flex-col gap-4">
            {exchangeItems.length ? (
                <div className="text-[13px] text-[#1f1a33] pl-4">
                    {exchangeItems.map(([label, value]) => {
                        return (
                            <span key={label} className="mr-4">
                                <span className="text-[12px] text-[#666]">{label} </span>
                                {value}
                            </span>
                        );
                    })}
                </div>
            ) : null}
            {renderWordTags('近义词', record.synonyms)}
            {renderWordTags('反义词', record.antonyms)}
            {record.confuse?.length ? (
                <div className="flex flex-col gap-0.5 pl-4">
                    {record.confuse.map(item => {
                        return (
                            <div key={item.word} className="text-[13px]">
                                <span className="text-[12px] text-[#666]">易混 </span>
                                <span className="font-semibold text-[#1f1a33]">{item.word}</span>
                                <span className="text-[#333]"> {item.diff}</span>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {record.examples?.length ? (
                <Listy
                    items={record.examples}
                    rowKey={(ex, i) => i}
                    itemRender={ex => {
                        const english = ex.src ?? ex.en;
                        const chinese = ex.dst ?? ex.cn;
                        return (
                            <div className="flex items-start gap-1 cursor-pointer rounded-lg" onClick={() => english && speakSentence(english)}>
                                <SoundOutlined className="mt-1 shrink-0 text-[#6652d1] text-sm" />
                                <div className="min-w-0 flex-1">
                                    <div className="text-[13px] leading-relaxed text-[#1f1a33]">{english}</div>
                                    {chinese ? <div className="text-[12px]">{chinese}</div> : null}
                                </div>
                            </div>
                        );
                    }}
                />
            ) : null}
        </div>
    );
};

// 桌面版单词列表: 顶部工具栏 + antd Table(例句可展开)
export default function WordListView({ words, filterable = true, showMeaningToggle = false, meaningKey, quizEnabled = false }) {
    const state = useLearningState();
    const [order, setOrder] = useState(words);
    const [filter, setFilter] = useState('all');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZE);
    const [revealed, setRevealed] = useState(() => new Set());
    const [highlightId, setHighlightId] = useState(null);
    const [showAll, setShowAll] = useState(() => (meaningKey ? localStorage.getItem(meaningKey) === '1' : false));
    const [quizMode, setQuizMode] = useState(() => quizEnabled && localStorage.getItem('EnglishWord:exam') === '1');
    const [answers, setAnswers] = useState({}); // wordId -> { value, status: 'correct'|'wrong'|null }
    const [revealedWords, setRevealedWords] = useState(() => new Set()); // 默写模式下被眼睛点开显示单词的行
    const focusIdRef = useRef(null);
    const blinkTimer = useRef(null);

    useEffect(() => {
        setOrder(words);
        setPage(1);
        focusIdRef.current = null;
    }, [words]);

    const toggleQuiz = () => {
        setQuizMode(prev => {
            localStorage.setItem('EnglishWord:exam', prev ? '0' : '1');
            return !prev;
        });
        setAnswers({});
        setRevealedWords(new Set());
    };

    const toggleRevealWord = id => {
        setRevealedWords(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    const setAnswer = (id, value) => setAnswers(prev => ({ ...prev, [id]: { ...prev[id], value, status: null } }));
    // 校验归一化: 忽略大小写、去掉问号、把智能撇号 ’(U+2019) 归一成直撇号 '(U+0027)
    const normalizeWord = text =>
        String(text || '')
            .trim()
            .toLowerCase()
            .replace(/\u2019/g, "'")
            .replace(/[?？]/g, '');
    const checkAnswer = (id, word) => {
        const correct = normalizeWord(answers[id]?.value) === normalizeWord(word);
        setAnswers(prev => ({ ...prev, [id]: { ...prev[id], status: correct ? 'correct' : 'wrong' } }));
    };

    const list = useMemo(() => {
        if (!filterable || filter === 'all') {
            return order;
        }
        const preds = {
            unread: item => !hasRecord(state.known, item.id) && !hasRecord(state.unknown, item.id),
            unknown: item => hasRecord(state.unknown, item.id),
            known: item => hasRecord(state.known, item.id),
            favorite: item => hasRecord(state.favorites, item.id)
        };
        return order.filter(preds[filter]);
    }, [order, filter, filterable, state]);

    const counts = useMemo(() => {
        let unread = 0;
        let unknown = 0;
        let known = 0;
        let favorite = 0;
        order.forEach(item => {
            if (hasRecord(state.favorites, item.id)) {
                favorite += 1;
            }
            if (hasRecord(state.known, item.id)) {
                known += 1;
            } else if (hasRecord(state.unknown, item.id)) {
                unknown += 1;
            } else {
                unread += 1;
            }
        });
        return { all: order.length, unread, unknown, known, favorite };
    }, [order, state]);

    const reveal = id => setRevealed(prev => new Set(prev).add(id));

    const focusWord = useCallback(
        index => {
            if (index < 0 || index >= list.length) {
                return;
            }
            const targetPage = Math.floor(index / pageSize) + 1;
            const id = list[index].id;
            focusIdRef.current = id;
            setPage(targetPage);
            setHighlightId(id);
            requestAnimationFrame(() => {
                const el = document.querySelector(`[data-row-id="${CSS.escape(id)}"]`);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
            clearTimeout(blinkTimer.current);
            blinkTimer.current = setTimeout(() => setHighlightId(null), 1800);
        },
        [list, pageSize]
    );

    const speakWord = item => {
        focusIdRef.current = item.id;
        speak(item.word);
    };

    const focusNextUnread = () => {
        const unmarked = item => !hasRecord(state.known, item.id) && !hasRecord(state.unknown, item.id);
        const cursorIndex = focusIdRef.current === null ? -1 : list.findIndex(item => item.id === focusIdRef.current);
        const from = cursorIndex + 1;
        let next = list.findIndex((item, index) => index >= from && unmarked(item));
        if (next === -1 && from > 0) {
            next = list.findIndex(unmarked);
        }
        if (next === -1) {
            const hint = filter === 'all' || filter === 'unread' ? '没有未读单词了' : '当前筛选下没有未读单词';
            message.info(hint);
            return;
        }
        focusWord(next);
    };

    const shuffle = () => {
        const arr = [...order];
        for (let i = arr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setOrder(arr);
        setPage(1);
        focusIdRef.current = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMeaning = () => {
        const next = !showAll;
        setShowAll(next);
        if (meaningKey) {
            localStorage.setItem(meaningKey, next ? '1' : '0');
        }
    };

    const knownCount = counts.known;
    const percent = order.length ? Math.round((knownCount / order.length) * 100) : 0;

    const columns = [
        { title: '#', width: 64, render: (_, __, index) => (page - 1) * pageSize + index + 1 },
        {
            title: '单词',
            dataIndex: 'word',
            width: 300,
            render: (word, record) => {
                if (quizMode) {
                    if (revealedWords.has(record.id)) {
                        return (
                            <div className="flex items-center gap-2">
                                <span className="inline-flex flex-wrap items-baseline gap-x-2.5 cursor-pointer" onClick={() => speakWord(record)}>
                                    <SoundOutlined style={{ color: '#6652d1' }} />
                                    <span className="text-base font-semibold text-[#1f1a33]">{word}</span>
                                    {renderPhonetic(record)}
                                </span>
                                <Tooltip title="收起单词">
                                    <Button type="text" icon={<EyeInvisibleOutlined />} onClick={() => toggleRevealWord(record.id)} />
                                </Tooltip>
                            </div>
                        );
                    }
                    return (
                        <Tooltip title="查看单词">
                            <Button type="text" icon={<EyeOutlined />} onClick={() => toggleRevealWord(record.id)} />
                        </Tooltip>
                    );
                }
                return (
                    <span className="inline-flex flex-wrap items-baseline gap-x-2.5 cursor-pointer" onClick={() => speakWord(record)}>
                        <SoundOutlined style={{ color: '#6652d1' }} />
                        <span className="text-base font-semibold text-[#1f1a33]">{word}</span>
                        {renderPhonetic(record)}
                    </span>
                );
            }
        },
        ...(quizMode
            ? [
                  {
                      title: '默写',
                      key: 'quiz',
                      width: 240,
                      render: (_, record) => {
                          const a = answers[record.id];
                          const status = a?.status;
                          return (
                              <div className="flex items-center gap-2">
                                  <Input
                                      placeholder="拼写英文单词"
                                      style={{ width: 160 }}
                                      value={a?.value || ''}
                                      status={status === 'wrong' ? 'error' : undefined}
                                      onChange={e => setAnswer(record.id, e.target.value)}
                                      onPressEnter={() => checkAnswer(record.id, record.word)}
                                      onBlur={() => checkAnswer(record.id, record.word)}
                                  />
                                  <span className="flex w-5 shrink-0 items-center justify-center">
                                      {status === 'correct' ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : null}
                                      {status === 'wrong' ? <CloseCircleFilled style={{ color: '#ff4d4f' }} /> : null}
                                  </span>
                              </div>
                          );
                      }
                  }
              ]
            : []),
        {
            title: '词性',
            key: 'pos',
            width: 90,
            render: (_, record) => {
                if (!record.parts) {
                    return <span>{record.partOfSpeech || '-'}</span>;
                }
                return (
                    <div className="leading-relaxed">
                        {record.parts.map((part, index) => {
                            return <div key={index}>{part.pos}</div>;
                        })}
                    </div>
                );
            }
        },
        {
            title: '中文释义',
            key: 'meaning',
            render: (_, record) => {
                const show = quizMode || showAll || hasRecord(state.known, record.id) || revealed.has(record.id);
                if (!show) {
                    return (
                        <Button type="primary" onClick={() => reveal(record.id)}>
                            查看释义
                        </Button>
                    );
                }
                const lines = getMeaningLines(record);
                return <div className="leading-relaxed">{lines.length ? lines.map((item, index) => <div key={index}>{item}</div>) : '暂无释义'}</div>;
            }
        },
        {
            title: '操作',
            key: 'actions',
            width: 140,
            render: (_, record) => {
                const known = hasRecord(state.known, record.id);
                const unknown = hasRecord(state.unknown, record.id);
                const favorite = hasRecord(state.favorites, record.id);
                return (
                    <Space>
                        <Tooltip title={known ? '取消认识' : '认识'}>
                            <Button
                                type="text"
                                icon={known ? <LikeFilled /> : <LikeOutlined />}
                                style={known ? { background: '#e6f7ef', color: '#18a058' } : undefined}
                                onClick={() => setKnowledge(record, known ? null : 'known')}
                            />
                        </Tooltip>
                        <Tooltip title={unknown ? '取消不认识' : '不认识'}>
                            <Button
                                type="text"
                                icon={unknown ? <DislikeFilled /> : <DislikeOutlined />}
                                style={unknown ? { background: '#fdecec', color: '#d03050' } : undefined}
                                onClick={() => setKnowledge(record, unknown ? null : 'unknown')}
                            />
                        </Tooltip>
                        <Tooltip title={favorite ? '取消收藏' : '收藏'}>
                            <Button
                                type="text"
                                icon={favorite ? <HeartFilled /> : <HeartOutlined />}
                                style={favorite ? { background: '#fff3e6', color: '#e07714' } : undefined}
                                onClick={() => toggleFavorite(record)}
                            />
                        </Tooltip>
                    </Space>
                );
            }
        }
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-[#333] whitespace-nowrap">
                        已认识 {knownCount} / {order.length}
                    </span>
                    <Progress percent={percent} showInfo={false} strokeColor="#6652d1" style={{ width: 140 }} />
                </div>
                {filterable ? (
                    <Segmented
                        value={filter}
                        options={FILTERS.map(item => ({ value: item.value, label: `${item.label} ${counts[item.value]}` }))}
                        onChange={v => {
                            setFilter(v);
                            setPage(1);
                            focusIdRef.current = null;
                        }}
                    />
                ) : null}
                <div className="ml-auto flex items-center gap-2">
                    {quizEnabled ? (
                        <Tooltip title={quizMode ? '退出默写' : '默写单词'}>
                            <Button icon={<EditTwoTone />} type={quizMode ? 'primary' : 'default'} onClick={toggleQuiz} />
                        </Tooltip>
                    ) : null}
                    {showMeaningToggle ? (
                        <Button type={showAll ? 'primary' : 'default'} onClick={toggleMeaning}>
                            {showAll ? '隐藏释义' : '显示释义'}
                        </Button>
                    ) : null}
                    <Tooltip title="乱序">
                        <Button icon={<ShakeOutlined />} onClick={shuffle} />
                    </Tooltip>
                    <Tooltip title="下一个未读">
                        <Button type="primary" icon={<RightOutlined />} onClick={focusNextUnread} />
                    </Tooltip>
                </div>
            </div>

            <Table
                rowKey="id"
                columns={columns}
                dataSource={list}
                size="middle"
                expandable={
                    quizMode
                        ? undefined
                        : {
                              rowExpandable: hasDetail,
                              expandedRowRender: renderDetail
                          }
                }
                pagination={{
                    current: page,
                    pageSize,
                    total: list.length,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    pageSizeOptions: [10, 20, 50, 100],
                    showTotal: total => `共 ${total} 词`,
                    onChange: setPage,
                    onShowSizeChange: (_, size) => {
                        setPageSize(size);
                        setPage(1);
                    }
                }}
                locale={{ emptyText: '没有符合条件的单词' }}
                rowClassName={record => (highlightId === record.id ? 'row-blink' : '')}
                onRow={record => ({ 'data-row-id': record.id })}
            />
        </div>
    );
}
