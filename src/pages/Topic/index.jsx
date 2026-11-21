import { Card, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listTopicsWithStats } from '../../utils/topic';

const { Text } = Typography;

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
        return (
            <div className="py-20 flex justify-center">
                <Spin />
            </div>
        );
    }

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {topics.map(t => (
                <Card key={t.title} hoverable onClick={() => navigate(`/topic/${encodeURIComponent(t.title)}`)} className="cursor-pointer">
                    <div className="text-base font-semibold text-[#1f1a33]">{t.title}</div>
                    <div className="text-xs text-[#333] mt-1">{t.count} 词</div>
                    <div className="flex gap-3 mt-2 text-[11px]">
                        <Text type="success">认识 {t.known}</Text>
                        <Text type="danger">不识 {t.unknown}</Text>
                        <Text type="secondary">未读 {t.unread}</Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}
