import { DeleteOutlined, ExportOutlined, ImportOutlined } from '@ant-design/icons';
import { App, Button, Calendar, Card, Select, Statistic, Typography } from 'antd';
import dayjs from 'dayjs';
import { useMemo, useState } from 'react';
import { vocabularyCatalog } from '../data/catalog';
import { VOICE_SOURCES, getVoiceSource, setVoiceSource } from '../utils/settings';
import { merge, reset } from '../utils/state';
import { toFlatProgress, toNestedProgress } from '../utils/storage';
import { useLearningState } from '../utils/useStore';

const { Text } = Typography;

const PROGRESS_KEYS = ['primary', 'junior', 'senior', 'cet4', 'cet6'];
vocabularyCatalog.forEach(book => {
    if (book.category && !PROGRESS_KEYS.includes(book.category)) PROGRESS_KEYS.push(book.category);
});

const pad = v => String(v).padStart(2, '0');
const formatDate = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const buildActivity = state => {
    const activity = {};
    [...state.known, ...state.unknown].forEach(record => {
        const date = new Date(record.time);
        if (Number.isNaN(date.getTime())) return;
        const key = formatDate(date);
        activity[key] = (activity[key] || 0) + 1;
    });
    return activity;
};

export default function Profile() {
    const state = useLearningState();
    const { message, modal } = App.useApp();
    const [monthDate, setMonthDate] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1));
    const [mode, setMode] = useState('month');
    const [voice, setVoice] = useState(getVoiceSource);

    const activity = useMemo(() => buildActivity(state), [state]);
    const todayCount = activity[formatDate(new Date())] || 0;

    const exportProgress = () => {
        const content = JSON.stringify({ app: '背单词', version: 1, exportedAt: new Date().toISOString(), progress: toNestedProgress(state) }, null, 2);
        const stamp = `${pad(new Date().getMonth() + 1)}${pad(new Date().getDate())}`;
        const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
        Object.assign(document.createElement('a'), { href: url, download: `学习进度-${stamp}.json` }).click();
        URL.revokeObjectURL(url);
        message.success('已导出');
    };

    const importProgress = async () => {
        try {
            const [handle] = await window.showOpenFilePicker({ types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }] });
            const file = await handle.getFile();
            const value = JSON.parse(await file.text());
            const p = value.progress;
            const looksValid = p && typeof p === 'object' && (Array.isArray(p.favorites) || PROGRESS_KEYS.some(k => p[k]));
            if (!looksValid) throw new Error('invalid');
            merge(toFlatProgress(p));
            message.success('学习进度已合并');
        } catch {
            message.error('请导入学习进度文件');
        }
    };

    const confirmReset = () => {
        modal.confirm({
            title: '清除用户数据?',
            content: '将删除本机保存的收藏, 认识/不认识标记; 此操作不可恢复. 词库数据不会受影响.',
            okText: '确认清除',
            cancelText: '取消',
            okButtonProps: { danger: true },
            onOk: async () => {
                await reset();
                message.success('已清除');
            }
        });
    };

    return (
        <div className="max-w-250 mx-auto">
            <Card className="text-center" title="今日学习">
                <Statistic value={todayCount} valueStyle={{ color: '#6652d1' }} />
            </Card>

            <div className="grid grid-cols-3 gap-3 mt-3">
                <Card className="text-center">
                    <Text type="success" className="text-2xl font-semibold">
                        {state.known.length}
                    </Text>
                    <div className="text-xs text-[#333] mt-1">已认识</div>
                </Card>
                <Card className="text-center">
                    <Text type="danger" className="text-2xl font-semibold">
                        {state.unknown.length}
                    </Text>
                    <div className="text-xs text-[#333] mt-1">不认识</div>
                </Card>
                <Card className="text-center">
                    <Text type="warning" className="text-2xl font-semibold">
                        {state.favorites.length}
                    </Text>
                    <div className="text-xs text-[#333] mt-1">收藏</div>
                </Card>
            </div>

            <Card className="mt-3!">
                <div className="max-w-[560px] mx-auto">
                    <Calendar
                        fullscreen={false}
                        value={dayjs(monthDate)}
                        mode={mode}
                        fullCellRender={(current, info) => {
                            if (info.type !== 'date') return info.originNode;
                            const inMonth = current.isSame(dayjs(monthDate), 'month');
                            if (!inMonth) return <div className="h-full w-full" />;
                            const count = activity[current.format('YYYY-MM-DD')] || 0;
                            return (
                                <div
                                    className={`flex h-full w-full flex-col items-center justify-center gap-0.5 border-t ${
                                        count ? 'border-t-[#6652d1]' : 'border-t-[#e2e2e2]'
                                    }`}
                                    style={{
                                        background: count ? '#f7f5fc' : '#fff',
                                        color: count ? '#6652d1' : '#555'
                                    }}
                                    title={count ? `标记 ${count} 词` : undefined}
                                >
                                    <span className="text-sm leading-tight">{current.date()}</span>
                                    {count ? <span className="text-[11px] font-semibold leading-tight">{count}</span> : null}
                                </div>
                            );
                        }}
                        onPanelChange={(value, nextMode) => {
                            setMonthDate(value.toDate());
                            setMode(nextMode);
                        }}
                        onChange={value => {
                            setMonthDate(value.toDate());
                            setMode('month');
                        }}
                    />
                </div>
            </Card>

            <Card
                className="mt-4!"
                title="设置"
                extra={
                    <Select
                        value={voice}
                        options={VOICE_SOURCES.map(s => ({ value: s.id, label: s.name }))}
                        style={{ width: 140 }}
                        onChange={v => {
                            setVoiceSource(v);
                            setVoice(v);
                        }}
                    />
                }
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button size="large" icon={<ExportOutlined />} onClick={exportProgress}>
                        导出进度
                    </Button>
                    <Button size="large" icon={<ImportOutlined />} onClick={importProgress}>
                        导入进度
                    </Button>
                    <Button size="large" danger icon={<DeleteOutlined />} onClick={confirmReset}>
                        清除数据
                    </Button>
                </div>
            </Card>
        </div>
    );
}
