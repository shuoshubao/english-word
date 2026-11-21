import { Card, Progress, Segmented, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stages, vocabularyCatalog } from '../../data/catalog';
import { hasRecord } from '../../utils/records';
import { useLearningState } from '../../utils/useStore';
import { ensureStages, getBookWords } from '../../utils/words';

const { Text } = Typography;

const STAGE_KEY = 'EnglishWord:selected-stage';

export default function Library() {
    const state = useLearningState();
    const navigate = useNavigate();
    const [stage, setStage] = useState(() => localStorage.getItem(STAGE_KEY) || '小学');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        let alive = true;
        ensureStages([stage]).then(() => {
            if (!alive) return;
            const list = vocabularyCatalog
                .filter(book => book.stage === stage)
                .map(book => {
                    let known = 0;
                    let unknown = 0;
                    getBookWords(book.id).forEach(word => {
                        if (hasRecord(state.known, word.id)) known += 1;
                        else if (hasRecord(state.unknown, word.id)) unknown += 1;
                    });
                    const total = book.wordCount;
                    return {
                        id: book.id,
                        title: book.title,
                        stage: book.stage,
                        total,
                        known,
                        unknown,
                        unread: total - known - unknown,
                        percent: Math.round((known / total) * 100)
                    };
                });
            setBooks(list);
        });
        return () => {
            alive = false;
        };
    }, [stage, state]);

    const selectStage = s => {
        localStorage.setItem(STAGE_KEY, s);
        setStage(s);
    };

    return (
        <div>
            <div className="mb-5">
                <Segmented size="large" value={stage} options={stages} onChange={selectStage} />
            </div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
                {books.map(book => (
                    <Card
                        key={book.id}
                        hoverable
                        onClick={() => navigate(`/book/${book.id}`)}
                        className="cursor-pointer"
                        title={book.title}
                        extra={<span className="text-xs text-[#333]">共 {book.total} 词</span>}
                    >
                        <Progress percent={book.percent} strokeColor="#6652d1" trailColor="#ece9f8" size="small" />
                        <div className="flex justify-between mt-2 text-center">
                            <div className="flex flex-col">
                                <Text type="success" className="font-semibold">
                                    {book.known}
                                </Text>
                                <span className="text-[11px] text-[#333]">认识</span>
                            </div>
                            <div className="flex flex-col">
                                <Text type="danger" className="font-semibold">
                                    {book.unknown}
                                </Text>
                                <span className="text-[11px] text-[#333]">不认识</span>
                            </div>
                            <div className="flex flex-col">
                                <Text type="secondary" className="font-semibold">
                                    {book.unread}
                                </Text>
                                <span className="text-[11px] text-[#333]">未读</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
