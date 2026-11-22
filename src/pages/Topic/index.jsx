import { Card, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listTopicsWithStats } from '@/utils/topic';

const { Text } = Typography;

export default function Topic() {
    const navigate = useNavigate();
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                setTopics(await listTopicsWithStats());
            } catch {
                // 加载失败时保留空列表
            }
            setLoading(false);
        };
        load();
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
            {topics.map(item => (
                <Card key={item.title} hoverable onClick={() => navigate(`/topic/${encodeURIComponent(item.title)}`)} className="cursor-pointer">
                    <div className="text-base font-semibold text-[#1f1a33]">{item.title}</div>
                    <div className="text-xs text-[#333] mt-1">{item.count} 词</div>
                    <div className="flex gap-3 mt-2 text-[11px]">
                        <Text type="success">认识 {item.known}</Text>
                        <Text type="danger">不识 {item.unknown}</Text>
                        <Text type="secondary">未读 {item.unread}</Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}
