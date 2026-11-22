import { Empty, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WordListView from '@/components/WordListView';
import { vocabularyCatalog } from '@/data/catalog';
import { loadCollocationLevel } from '@/utils/collocations';
import { whenReady } from '@/utils/state';
import { loadTopicCategory } from '@/utils/topic';
import { loadRootCategory } from '@/utils/word-roots';
import { loadSpecialCategory } from '@/utils/special';
import { ensureBookWords } from '@/utils/words';

// 词书详情 / 主题 / 特殊单词 / 词缀 / 固定搭配 共用: 根据 mode 加载词表, 交给 WordListView 渲染
export default function Book({ mode = 'book' }) {
    const params = useParams();
    const [words, setWords] = useState(null);
    const [notFound, setNotFound] = useState(false);

    const key = params.id || params.title || params.level;

    useEffect(() => {
        let alive = true;
        const resolve = async () => {
            if (mode === 'book') {
                const book = vocabularyCatalog.find(item => item.id === params.id);
                if (!book) {
                    setNotFound(true);
                    return [];
                }
                return ensureBookWords(book.id);
            }
            if (mode === 'topic') {
                return (await loadTopicCategory(decodeURIComponent(params.title))).words;
            }
            if (mode === 'special') {
                return loadSpecialCategory(decodeURIComponent(params.title)).words;
            }
            if (mode === 'root') {
                return (await loadRootCategory(decodeURIComponent(params.title))).words;
            }
            if (mode === 'collocation') {
                return loadCollocationLevel(decodeURIComponent(params.level));
            }
            return [];
        };
        setWords(null);
        setNotFound(false);
        const load = async () => {
            await whenReady();
            const list = await resolve();
            if (alive) {
                setWords(list);
            }
        };
        load();
        return () => {
            alive = false;
        };
    }, [mode, key]); // eslint-disable-line react-hooks/exhaustive-deps

    if (notFound) {
        return <Empty className="py-20" description="找不到这个词库" />;
    }
    if (!words) {
        return (
            <div className="py-20 flex justify-center">
                <Spin />
            </div>
        );
    }
    if (!words.length) {
        return <Empty className="py-20" description="暂无单词" />;
    }

    const special = mode !== 'book';
    return (
        <WordListView
            words={words}
            filterable={!special}
            showMeaningToggle={special}
            meaningKey={special ? `EnglishWord:show-meaning:${mode}:${key}` : undefined}
            quizEnabled={!special}
        />
    );
}
