import { Card, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';
import { stages, vocabularyCatalog } from '../../data/catalog';
import { useLearningState } from '../../utils/useStore';

// 记录 id 前缀(category) -> 阶段名
const CATEGORY_STAGE = { primary: '小学', middle: '初中', high: '高中', cet4: 'CET4', cet6: 'CET6' };
vocabularyCatalog.forEach(book => {
    if (book.category) CATEGORY_STAGE[book.category] = book.stage;
});

// 每个阶段词汇总数
const STAGE_TOTAL = {};
vocabularyCatalog.forEach(book => {
    STAGE_TOTAL[book.stage] = (STAGE_TOTAL[book.stage] || 0) + book.wordCount;
});

// 生词本 / 收藏 概览页: 按标记记录的 category 前缀统计各阶段数量
export default function Collection({ collection, emptyText }) {
    const state = useLearningState();
    const navigate = useNavigate();

    const marked = state[collection] || [];
    const countBy = {};
    marked.forEach(record => {
        const stage = CATEGORY_STAGE[String(record.id || '').split('__')[0]];
        if (stage) countBy[stage] = (countBy[stage] || 0) + 1;
    });
    const overview = stages.filter(s => countBy[s]).map(s => ({ stage: s, count: countBy[s], total: STAGE_TOTAL[s] || 0 }));

    if (!overview.length) {
        return <Empty className="py-20" description={emptyText} />;
    }

    return (
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
            {overview.map(item => (
                <Card
                    key={item.stage}
                    hoverable
                    onClick={() => navigate(`/collection/${collection}/${encodeURIComponent(item.stage)}`)}
                    className="cursor-pointer"
                >
                    <div className="text-base font-semibold text-[#1f1a33]">{item.stage}</div>
                    <div className="mt-2 text-xs text-[#333]">
                        <span className="text-[#6652d1] text-3xl font-semibold mr-1.5">{item.count}</span>/ {item.total} 词
                    </div>
                </Card>
            ))}
        </div>
    );
}
