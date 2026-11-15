import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { listRoots } from '../utils/word-roots';

const { Title } = Typography;

export default function Roots() {
    const navigate = useNavigate();
    const roots = listRoots();
    const groups = [
        { title: '前缀', items: roots.filter(r => r.type === 'prefix') },
        { title: '后缀', items: roots.filter(r => r.type === 'suffix') },
        { title: '词组', items: roots.filter(r => r.type === 'exact') }
    ];

    return (
        <div className="flex flex-col gap-6">
            {groups.map(group => (
                <div key={group.title}>
                    <Title level={5} className="mb-3">
                        {group.title}
                    </Title>
                    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
                        {group.items.map(root => (
                            <Card key={root.title} hoverable onClick={() => navigate(`/roots/${encodeURIComponent(root.title)}`)} className="cursor-pointer">
                                <div className="text-base font-semibold text-[#1f1a33]">{root.title}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
