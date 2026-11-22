import { Card, Spin, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { listSpecialWithStats } from '@/utils/special';

const { Text } = Typography;

export default function Special() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listSpecialWithStats()
            .then(list => {
                setCategories(list);
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
            {categories.map(category => (
                <Card key={category.title} hoverable onClick={() => navigate(`/special/${encodeURIComponent(category.title)}`)} className="cursor-pointer">
                    <div className="text-base font-semibold text-[#1f1a33]">{category.title}</div>
                    <div className="text-xs text-[#333] mt-1">{category.count} 词</div>
                    <div className="flex gap-3 mt-2 text-[11px]">
                        <Text type="success">认识 {category.known}</Text>
                        <Text type="danger">不识 {category.unknown}</Text>
                        <Text type="secondary">未读 {category.unread}</Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}
