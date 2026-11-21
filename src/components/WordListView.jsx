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
import { Button, Input, Listy, Progress, Segmented, Space, Table, Tooltip } from 'antd';
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
        .map(l => l.trim().replace(/;+$/, '').trim())
        .filter(Boolean);

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
    const focusIndexRef = useRef(-1);
    const blinkTimer = useRef(null);

    useEffect(() => {
        setOrder(words);
        setPage(1);
        focusIndexRef.current = -1;
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
            if (next.has(id)) next.delete(id);
            else next.add(id);
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
        if (!filterable || filter === 'all') return order;
        const preds = {
            unread: w => !hasRecord(state.known, w.id) && !hasRecord(state.unknown, w.id),
            unknown: w => hasRecord(state.unknown, w.id),
            known: w => hasRecord(state.known, w.id),
            favorite: w => hasRecord(state.favorites, w.id)
        };
        return order.filter(preds[filter]);
    }, [order, filter, filterable, state]);

    const counts = useMemo(() => {
        let unread = 0;
        let unknown = 0;
        let known = 0;
        let favorite = 0;
        order.forEach(w => {
            if (hasRecord(state.favorites, w.id)) favorite += 1;
            if (hasRecord(state.known, w.id)) known += 1;
            else if (hasRecord(state.unknown, w.id)) unknown += 1;
            else unread += 1;
        });
        return { all: order.length, unread, unknown, known, favorite };
    }, [order, state]);

    const reveal = id => setRevealed(prev => new Set(prev).add(id));

    const focusWord = useCallback(
        index => {
            if (index < 0 || index >= list.length) return;
            const targetPage = Math.floor(index / pageSize) + 1;
            const id = list[index].id;
            focusIndexRef.current = index;
            setPage(targetPage);
            setHighlightId(id);
            requestAnimationFrame(() => {
                const el = document.querySelector(`[data-row-id="${CSS.escape(id)}"]`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            clearTimeout(blinkTimer.current);
            blinkTimer.current = setTimeout(() => setHighlightId(null), 1800);
        },
        [list, pageSize]
    );

    const focusNextUnread = () => {
        const unmarked = w => !hasRecord(state.known, w.id) && !hasRecord(state.unknown, w.id);
        const from = focusIndexRef.current + 1;
        let next = list.findIndex((w, i) => i >= from && unmarked(w));
        if (next === -1) next = list.findIndex(unmarked);
        if (next !== -1) focusWord(next);
    };

    const shuffle = () => {
        const arr = [...order];
        for (let i = arr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setOrder(arr);
        setPage(1);
        focusIndexRef.current = -1;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMeaning = () => {
        const next = !showAll;
        setShowAll(next);
        if (meaningKey) localStorage.setItem(meaningKey, next ? '1' : '0');
    };

    const knownCount = counts.known;
    const percent = order.length ? Math.round((knownCount / order.length) * 100) : 0;

    const columns = [
        { title: '#', width: 64, render: (_, __, index) => (page - 1) * pageSize + index + 1 },
        {
            title: '单词',
            dataIndex: 'word',
            width: 240,
            render: (word, record) => {
                if (quizMode) {
                    if (revealedWords.has(record.id)) {
                        return (
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-baseline gap-2.5 cursor-pointer" onClick={() => speak(record.word)}>
                                    <SoundOutlined style={{ color: '#6652d1' }} />
                                    <span className="text-base font-semibold text-[#1f1a33]">{word}</span>
                                    {record.phonetic ? <span className="text-[#6652d1] text-sm">/{record.phonetic}/</span> : null}
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
                    <span className="inline-flex items-baseline gap-2.5 cursor-pointer" onClick={() => speak(record.word)}>
                        <SoundOutlined style={{ color: '#6652d1' }} />
                        <span className="text-base font-semibold text-[#1f1a33]">{word}</span>
                        {record.phonetic ? <span className="text-[#6652d1] text-sm">/{record.phonetic}/</span> : null}
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
            dataIndex: 'partOfSpeech',
            width: 90,
            render: v => <span>{v || '-'}</span>
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
                const lines = toLines(record.translation);
                return <div className="leading-relaxed">{lines.length ? lines.map((l, i) => <div key={i}>{l}</div>) : '暂无释义'}</div>;
            }
        },
        {
            title: '操作',
            key: 'actions',
            width: 300,
            render: (_, record) => {
                const known = hasRecord(state.known, record.id);
                const unknown = hasRecord(state.unknown, record.id);
                const favorite = hasRecord(state.favorites, record.id);
                return (
                    <Space size={6}>
                        <Button
                            icon={known ? <LikeFilled /> : <LikeOutlined />}
                            style={known ? { background: '#e6f7ef', color: '#18a058', borderColor: '#b7e8cf' } : undefined}
                            onClick={() => setKnowledge(record, known ? null : 'known')}
                        >
                            认识
                        </Button>
                        <Button
                            icon={unknown ? <DislikeFilled /> : <DislikeOutlined />}
                            style={unknown ? { background: '#fdecec', color: '#d03050', borderColor: '#f5c2c7' } : undefined}
                            onClick={() => setKnowledge(record, unknown ? null : 'unknown')}
                        >
                            不认识
                        </Button>
                        <Button
                            icon={favorite ? <HeartFilled /> : <HeartOutlined />}
                            style={favorite ? { background: '#fff3e6', color: '#e07714', borderColor: '#f3d6b3' } : undefined}
                            onClick={() => toggleFavorite(record)}
                        >
                            {favorite ? '已收藏' : '收藏'}
                        </Button>
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
                        options={FILTERS.map(f => ({ value: f.value, label: `${f.label} ${counts[f.value]}` }))}
                        onChange={v => {
                            setFilter(v);
                            setPage(1);
                            focusIndexRef.current = -1;
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
                              rowExpandable: record => Boolean(record.examples && record.examples.length),
                              expandedRowRender: record => (
                                  <div className="ml-[100px] pr-4 bg-white">
                                      <Listy
                                          items={record.examples}
                                          rowKey={(ex, i) => i}
                                          itemRender={ex => (
                                              <div className="flex items-start gap-1 cursor-pointer rounded-lg" onClick={() => ex.en && speakSentence(ex.en)}>
                                                  <SoundOutlined className="mt-1 shrink-0 text-[#6652d1] text-sm" />
                                                  <div className="min-w-0 flex-1">
                                                      <div className="text-[13px] leading-relaxed text-[#1f1a33]">{ex.en}</div>
                                                      {ex.cn ? <div className="text-[12px]">{ex.cn}</div> : null}
                                                  </div>
                                              </div>
                                          )}
                                      />
                                  </div>
                              )
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
