import { ShakeOutlined, SoundOutlined } from '@ant-design/icons';
import { Button, Checkbox, Segmented, Table, Tooltip } from 'antd';
import { useEffect, useRef, useState } from 'react';
import books from '../data/irregular-verbs';
import { speak, speakZh } from '../utils/audio';

const PAGE_SIZE = 20;
const STAGES = ['小学', '初中', '高中', '四级', '六级'];
const MASTER_KEY = 'EnglishWord:irregular-mastered';

const readMastered = () => {
    try {
        const arr = JSON.parse(localStorage.getItem(MASTER_KEY) || '[]');
        const map = {};
        (Array.isArray(arr) ? arr : []).forEach(w => {
            map[w] = true;
        });
        return map;
    } catch {
        return {};
    }
};

export default function Irregulars() {
    const [stage, setStage] = useState(STAGES[0]);
    const [words, setWords] = useState(books[STAGES[0]] || []);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(PAGE_SIZE);
    const [mastered, setMastered] = useState(readMastered);
    const [playing, setPlaying] = useState(false);
    const [highlightWord, setHighlightWord] = useState(null);
    const playRef = useRef({ stop: false, index: 0 });
    const timer = useRef(null);

    const visible = words.slice((page - 1) * pageSize, page * pageSize);

    const stopAutoPlay = () => {
        playRef.current.stop = true;
        clearTimeout(timer.current);
        setPlaying(false);
    };

    useEffect(() => stopAutoPlay, []);

    const switchStage = s => {
        stopAutoPlay();
        setStage(s);
        setWords(books[s] || []);
        setPage(1);
        setHighlightWord(null);
    };

    const toggleMaster = word => {
        setMastered(prev => {
            const next = { ...prev };
            if (next[word]) delete next[word];
            else next[word] = true;
            localStorage.setItem(MASTER_KEY, JSON.stringify(Object.keys(next)));
            return next;
        });
    };

    // 顺序朗读一行: 原形 -> 过去式 -> 过去分词 -> 中文
    const playItem = (item, done) => {
        const parts = [
            { text: item.word, fn: speak },
            { text: item.past, fn: speak },
            { text: item.participle, fn: speak },
            { text: item.cn, fn: speakZh }
        ];
        let i = 0;
        const next = () => {
            if (playRef.current.stop) return;
            if (i >= parts.length) {
                if (done) done();
                return;
            }
            const part = parts[i];
            part.fn(part.text, () => {
                if (playRef.current.stop) return;
                i += 1;
                timer.current = setTimeout(next, 400);
            });
        };
        next();
    };

    const startAutoPlay = () => {
        if (!visible.length) return;
        playRef.current = { stop: false, index: 0 };
        setPlaying(true);
        const playNext = () => {
            if (playRef.current.stop) return;
            if (playRef.current.index >= visible.length) {
                stopAutoPlay();
                return;
            }
            const item = visible[playRef.current.index];
            setHighlightWord(item.word);
            playItem(item, () => {
                if (playRef.current.stop) return;
                playRef.current.index += 1;
                timer.current = setTimeout(playNext, 1500);
            });
        };
        playNext();
    };

    const toggleAutoPlay = () => {
        if (playing) stopAutoPlay();
        else startAutoPlay();
    };

    const shuffle = () => {
        stopAutoPlay();
        const arr = [...words];
        for (let i = arr.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        setWords(arr);
        setPage(1);
        setHighlightWord(null);
    };

    const playRow = item => {
        stopAutoPlay();
        playRef.current.stop = false;
        playItem(item);
    };

    const columns = [
        {
            title: 'v. 原形',
            dataIndex: 'word',
            render: (v, record) => (
                <span className="inline-flex items-baseline gap-2.5 cursor-pointer" onClick={() => playRow(record)}>
                    <SoundOutlined style={{ color: '#6652d1' }} />
                    <span className="text-base font-semibold text-[#1f1a33]">{v}</span>
                </span>
            )
        },
        { title: 'pt. 过去式', dataIndex: 'past', render: v => <span className="text-[#555]">{v}</span> },
        { title: 'pp. 过去分词', dataIndex: 'participle', render: v => <span className="text-[#555]">{v}</span> },
        { title: '类型', dataIndex: 'type', width: 90, render: v => <span>{v}</span> },
        { title: '词义', dataIndex: 'cn', render: v => <span className="text-[#888]">{v}</span> },
        {
            title: '已学',
            width: 70,
            render: (_, record) => <Checkbox checked={!!mastered[record.word]} onChange={() => toggleMaster(record.word)} />
        }
    ];

    return (
        <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <Segmented size="large" value={stage} options={STAGES} onChange={switchStage} />
                <div className="ml-auto flex items-center gap-2">
                    <Tooltip title="乱序">
                        <Button icon={<ShakeOutlined />} onClick={shuffle} />
                    </Tooltip>
                    <Button type={playing ? 'primary' : 'default'} icon={<SoundOutlined />} onClick={toggleAutoPlay}>
                        {playing ? '停止播放' : '自动播放本页'}
                    </Button>
                </div>
            </div>

            <Table
                rowKey="word"
                columns={columns}
                dataSource={words}
                size="middle"
                pagination={{
                    current: page,
                    pageSize,
                    total: words.length,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    pageSizeOptions: [10, 20, 50, 100],
                    showTotal: total => `共 ${total} 个`,
                    onChange: p => {
                        stopAutoPlay();
                        setPage(p);
                    },
                    onShowSizeChange: (_, size) => {
                        stopAutoPlay();
                        setPageSize(size);
                        setPage(1);
                    }
                }}
                rowClassName={record => (highlightWord === record.word ? 'row-blink' : '')}
            />
        </div>
    );
}
