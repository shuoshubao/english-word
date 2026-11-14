import { Card } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listTopicsWithStats } from '../utils/topic';

export default function Topic() {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listTopicsWithStats()
            .then(list => {
                setTopics(list);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return <div className="text-center text-[#999] py-20">正在载入...</div>;
    }

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {topics.map(t => (
                <Card
                    key={t.title}
                    hoverable
                    onClick={() => navigate(`/topic/${encodeURIComponent(t.title)}`)}
                    className="cursor-pointer"
                >
                    <div className="text-base font-semibold text-[#1f1a33]">{t.title}</div>
                    <div className="text-xs text-[#999] mt-1">{t.count} 词</div>
                    <div className="flex gap-3 mt-2 text-[11px]">
                        <span className="text-[#18a058]">认识 {t.known}</span>
                        <span className="text-[#d03050]">不识 {t.unknown}</span>
                        <span className="text-[#888]">未读 {t.unread}</span>
                    </div>
                </Card>
            ))}
        </div>
    );
}
