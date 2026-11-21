import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

// 专题入口: 对应小程序的 pages/topics, 从词库页独立出来作为一级 tab
const ENTRIES = [
    { title: '主题分类', sub: '按场景批量记忆', to: '/topic', background: 'linear-gradient(135deg, #6652d1, #8b7ae8)' },
    { title: '不规则动词', sub: '原形/过去式/过去分词时态表', to: '/irregulars', background: 'linear-gradient(135deg, #2f80ed, #6aa9f0)' },
    { title: '词根词缀', sub: '按前缀/后缀/词组批量记忆', to: '/roots', background: 'linear-gradient(135deg, #4caf8a, #7fd4b5)' },
    { title: '固定搭配', sub: 'be good at / look forward to 等短语', to: '/collocations', background: 'linear-gradient(135deg, #f0a04b, #f5c089)' }
];

export default function Topics() {
    const navigate = useNavigate();

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {ENTRIES.map(entry => (
                <Card
                    key={entry.to}
                    hoverable
                    onClick={() => navigate(entry.to)}
                    className="cursor-pointer"
                    styles={{ body: { padding: '24px 22px' } }}
                    style={{ background: entry.background, border: 'none', borderRadius: 16, color: '#fff' }}
                >
                    <div className="text-lg font-bold mb-2">{entry.title}</div>
                    <div className="text-xs opacity-85">{entry.sub}</div>
                </Card>
            ))}
        </div>
    );
}
