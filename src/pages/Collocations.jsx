import { Card } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listCollocationsWithStats } from '../utils/collocations';

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
        return <div className="text-center text-[#999] py-20">正在载入...</div>;
    }

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {levels.map(item => (
                <Card
                    key={item.level}
                    hoverable
                    onClick={() => navigate(`/collocations/${encodeURIComponent(item.level)}`)}
                    className="cursor-pointer"
                >
                    <div className="text-base font-semibold text-[#1f1a33]">固定搭配 · {item.level}</div>
                    <div className="text-xs text-[#999] mt-1">{item.count} 个</div>
                    <div className="flex gap-3 mt-2 text-[11px]">
                        <span className="text-[#18a058]">认识 {item.known}</span>
                        <span className="text-[#d03050]">不识 {item.unknown}</span>
                        <span className="text-[#888]">未读 {item.unread}</span>
                    </div>
                </Card>
            ))}
        </div>
    );
}
