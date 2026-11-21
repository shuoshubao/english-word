import { Card, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listCollocationsWithStats } from '@/utils/collocations';

const { Text } = Typography;

export default function Collocations() {
    const navigate = useNavigate();
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listCollocationsWithStats()
            .then(list => {
                setLevels(list);
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
            {levels.map(item => (
                <Card key={item.level} hoverable onClick={() => navigate(`/collocations/${encodeURIComponent(item.level)}`)} className="cursor-pointer">
                    <div className="text-base font-semibold text-[#1f1a33]">固定搭配 · {item.level}</div>
                    <div className="text-xs text-[#333] mt-1">{item.count} 个</div>
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
