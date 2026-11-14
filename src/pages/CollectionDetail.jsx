import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Empty } from 'antd';
import WordListView from '../components/WordListView';
import { getWordIndex, ensureStages } from '../utils/words';
import { getState, whenReady } from '../utils/state';
import { hasRecord } from '../utils/records';

// 生词本 / 收藏 的阶段详情: 一次性取该阶段被标记的词(冻结列表), 之后标记变化只改状态不移除卡片
export default function CollectionDetail() {
    const { collection, stage: rawStage } = useParams();
    const stage = decodeURIComponent(rawStage);
    const [words, setWords] = useState(null);

    useEffect(() => {
        let alive = true;
        whenReady()
            .then(() => ensureStages([stage]))
            .then(() => {
                if (!alive) return;
                const marked = getState()[collection] || [];
                const index = getWordIndex();
                const items = (index.byStage[stage] || []).filter(word => hasRecord(marked, word.id));
                setWords(items);
            });
        return () => {
            alive = false;
        };
    }, [collection, stage]);

    if (!words) {
        return <div className="text-center text-[#999] py-20">正在载入...</div>;
    }
    if (!words.length) {
        return <Empty className="py-20" description={`这个阶段还没有${collection === 'favorites' ? '收藏' : '生词'}`} />;
    }
    return <WordListView words={words} filterable={false} />;
}
