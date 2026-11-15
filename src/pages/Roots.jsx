import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { listRoots } from '../utils/word-roots';

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
                    <div className="text-base font-semibold text-[#1f1a33] mb-3">{group.title}</div>
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
