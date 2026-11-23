import { vocabularyCatalog } from '@/data/catalog';
import BaiduTtsCard from '@/pages/Profile/BaiduTtsCard';
import DebugZone from '@/pages/Profile/DebugZone';
import DoubaoTtsCard from '@/pages/Profile/DoubaoTtsCard';
import TtsSamplePanel from '@/pages/Profile/TtsSamplePanel';
import { checkAuthStatus, downloadBackup, exchangeCode, isLocal, listBackups, startOobAuth, startRedirectAuth, uploadBackup } from '@/utils/baidu-pan';
import { getSentenceTtsSource, setSentenceTtsSource } from '@/utils/sentence-tts';
import { VOICE_SOURCES, getVoiceSource, setVoiceSource } from '@/utils/settings';
import { merge, reset } from '@/utils/state';
import { toFlatProgress, toNestedProgress } from '@/utils/storage';
import { useLearningState } from '@/utils/useStore';
import { CloudDownloadOutlined, CloudUploadOutlined, DeleteOutlined, ExportOutlined, ImportOutlined } from '@ant-design/icons';
import { App, Avatar, Button, Calendar, Card, Divider, Input, Modal, Segmented, Select, Space, Statistic, Typography } from 'antd';
import dayjs from 'dayjs';
import pLimit from 'p-limit';
import { useEffect, useMemo, useState } from 'react';

const { Text } = Typography;

const PROGRESS_KEYS = ['primary', 'junior', 'senior', 'cet4', 'cet6'];
vocabularyCatalog.forEach(book => {
    if (book.category && !PROGRESS_KEYS.includes(book.category)) {
        PROGRESS_KEYS.push(book.category);
    }
});

const pad = v => String(v).padStart(2, '0');
const formatDate = date => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

const backupSummary = progress => {
    const flat = toFlatProgress(progress);
    return `生词 ${flat.unknown.length} · 收藏 ${flat.favorites.length} · 认识 ${flat.known.length}`;
};

const SummaryLimit = pLimit(5);

// 备份文件按时间戳命名、写完不改, 同一 fsId 的内容固定, 下载结果可复用
const BackupCache = new Map();
const fetchBackup = async fsId => {
    try {
        return await downloadBackup(fsId);
    } catch (error) {
        BackupCache.delete(String(fsId));
        throw error;
    }
};
const getBackup = fsId => {
    const key = String(fsId);
    if (!BackupCache.has(key)) {
        BackupCache.set(key, fetchBackup(fsId));
    }
    return BackupCache.get(key);
};

const buildActivity = state => {
    const activity = {};
    [...state.known, ...state.unknown].forEach(record => {
        const date = new Date(record.time);
        if (Number.isNaN(date.getTime())) {
            return;
        }
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
    const [baiduBusy, setBaiduBusy] = useState('');
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const [authLoading, setAuthLoading] = useState(false);
    const [auth, setAuth] = useState({ status: '', name: '', avatar: '' });
    const [restoreOpen, setRestoreOpen] = useState(false);
    const [restoreFiles, setRestoreFiles] = useState([]);
    const [restoreFsId, setRestoreFsId] = useState('');
    const [ttsSource, setTtsSource] = useState(getSentenceTtsSource);
    const [ttsVersion, setTtsVersion] = useState(0);

    useEffect(() => {
        const checkAuth = async () => {
            const { authorized, name, avatar } = await checkAuthStatus();
            setAuth({ status: authorized ? 'ok' : 'fail', name, avatar });
        };
        checkAuth();
    }, []);

    const activity = useMemo(() => buildActivity(state), [state]);
    const todayCount = activity[formatDate(new Date())] || 0;

    const exportProgress = () => {
        const content = JSON.stringify({ app: '背单词', version: 1, exportedAt: new Date().toISOString(), progress: toNestedProgress(state) }, null, 2);
        const stamp = `${pad(new Date().getMonth() + 1)}${pad(new Date().getDate())}`;
        const url = URL.createObjectURL(new Blob([content], { type: 'application/json' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `学习进度-${stamp}.json`;
        link.click();
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
            if (!looksValid) {
                throw new Error('invalid');
            }
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

    const openOobAuth = async () => {
        try {
            await startOobAuth();
            setAuthCode('');
            setAuthModalOpen(true);
        } catch (error) {
            message.error(error.message);
        }
    };

    const openRedirectAuth = async () => {
        try {
            await startRedirectAuth();
        } catch (error) {
            message.error(error.message);
        }
    };

    const submitAuthCode = async () => {
        setAuthLoading(true);
        try {
            await exchangeCode(authCode);
            setAuthModalOpen(false);
            setAuthCode('');
            const { name, avatar } = await checkAuthStatus();
            setAuth({ status: 'ok', name, avatar });
            message.success('百度网盘已授权');
        } catch (error) {
            message.error(`授权失败: ${error.message}`);
        } finally {
            setAuthLoading(false);
        }
    };

    const runBaidu = async (action, key) => {
        setBaiduBusy(key);
        try {
            await action();
        } catch (error) {
            if (error.message === 'AUTH_REQUIRED') {
                message.warning('请先完成百度网盘授权');
            } else {
                message.error(`${key === 'sync' ? '同步' : '备份'}失败: ${error.message}`);
            }
        } finally {
            setBaiduBusy('');
        }
    };

    const syncFromCloud = () =>
        runBaidu(async () => {
            const files = (await listBackups()).slice(0, 20);
            if (!files.length) {
                message.warning('云端还没有备份文件');
                return;
            }
            const enriched = await Promise.all(files.map(item => {
                return SummaryLimit(async () => {
                    try {
                        const { progress } = await getBackup(item.fsId);
                        return { ...item, summary: backupSummary(progress) };
                    } catch {
                        return { ...item, summary: '摘要读取失败' };
                    }
                });
            }));
            setRestoreFiles(enriched);
            setRestoreFsId(String(enriched[0].fsId));
            setRestoreOpen(true);
        }, 'sync');

    const confirmRestore = () => {
        const chosen = restoreFiles.find(item => String(item.fsId) === restoreFsId);
        setRestoreOpen(false);
        if (!chosen) {
            return;
        }
        runBaidu(async () => {
            const payload = await getBackup(chosen.fsId);
            const progress = payload?.progress;
            if (!progress || typeof progress !== 'object') {
                throw new Error('备份文件格式不正确');
            }
            merge(toFlatProgress(progress));
            message.success(`已恢复 ${chosen.name}`);
        }, 'sync');
    };

    const backupToCloud = () =>
        runBaidu(async () => {
            const content = JSON.stringify({
                app: '背单词',
                version: 1,
                exportedAt: new Date().toISOString(),
                updatedAt: Date.now(),
                progress: toNestedProgress(state)
            });
            const name = await uploadBackup(content);
            message.success(`已备份为 ${name}`);
        }, 'backup');

    return (
        <div className="flex flex-col gap-3">
            <Card
                title="数据概览"
                extra={
                    <Space>
                        <Text type="secondary">单词发音</Text>
                        <Select
                            value={voice}
                            options={VOICE_SOURCES}
                            style={{ width: 140 }}
                            onChange={v => {
                                setVoiceSource(v);
                                setVoice(v);
                            }}
                        />
                    </Space>
                }
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5">
                    <div className="flex flex-col gap-5 justify-center">
                        <div className="grid grid-cols-4 gap-3">
                            <Statistic className="text-center" title="今日学习" value={todayCount} styles={{ content: { color: '#6652d1' } }} />
                            <Statistic className="text-center" title="已认识" value={state.known.length} styles={{ content: { color: '#52c41a' } }} />
                            <Statistic className="text-center" title="不认识" value={state.unknown.length} styles={{ content: { color: '#ff4d4f' } }} />
                            <Statistic className="text-center" title="收藏" value={state.favorites.length} styles={{ content: { color: '#faad14' } }} />
                        </div>
                        <Divider className="!my-0" />
                        <div className="grid grid-cols-3 gap-3">
                            <Button icon={<ExportOutlined />} onClick={exportProgress}>
                                导出进度
                            </Button>
                            <Button icon={<ImportOutlined />} onClick={importProgress}>
                                导入进度
                            </Button>
                            <Button danger icon={<DeleteOutlined />} onClick={confirmReset}>
                                清除数据
                            </Button>
                        </div>
                    </div>
                    <Divider orientation="vertical" className="hidden lg:block !h-full !m-0" />
                    <Calendar
                        fullscreen={false}
                        value={dayjs(monthDate)}
                        mode={mode}
                        fullCellRender={(current, info) => {
                            if (info.type !== 'date') {
                                return info.originNode;
                            }
                            const inMonth = current.isSame(dayjs(monthDate), 'month');
                            if (!inMonth) {
                                return <div className="h-full w-full" />;
                            }
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
                title="句子发音"
                extra={
                    <Segmented
                        value={ttsSource}
                        options={[
                            { label: '百度TTS', value: 'baidu' },
                            { label: '豆包TTS', value: 'doubao' }
                        ]}
                        onChange={value => {
                            setSentenceTtsSource(value);
                            setTtsSource(value);
                        }}
                    />
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <BaiduTtsCard active={ttsSource === 'baidu'} onSaved={() => setTtsVersion(v => v + 1)} />
                    <DoubaoTtsCard active={ttsSource === 'doubao'} onSaved={() => setTtsVersion(v => v + 1)} />
                </div>

                <TtsSamplePanel source={ttsSource} version={ttsVersion} />
            </Card>

            <Card
                title={
                    <Space align="center">
                        <span>百度网盘</span>
                        {auth.status === 'ok' ? (
                            <Space size={6} align="center">
                                {auth.avatar ? <Avatar src={auth.avatar} size={24} /> : null}
                                {auth.name ? <Text type="secondary" className="text-sm font-normal">{auth.name}</Text> : null}
                            </Space>
                        ) : null}
                    </Space>
                }
                extra={
                    <Space>
                        <Button icon={<CloudDownloadOutlined />} loading={baiduBusy === 'sync'} onClick={syncFromCloud}>
                            同步到本地
                        </Button>
                        <Button icon={<CloudUploadOutlined />} loading={baiduBusy === 'backup'} onClick={backupToCloud}>
                            备份到云端
                        </Button>
                    </Space>
                }
            >
                <div className="flex flex-col gap-3">
                    <Space>
                        <Text type="secondary" className="text-xs">
                            授权状态:
                        </Text>
                        {auth.status === 'ok' ? (
                            <Text type="success" className="text-xs">
                                已授权
                            </Text>
                        ) : auth.status === 'fail' ? (
                            <Text type="danger" className="text-xs">
                                未授权
                            </Text>
                        ) : (
                            <Text type="secondary" className="text-xs">
                                校验中...
                            </Text>
                        )}
                    </Space>
                    <div className="border-t border-[#eee] pt-3">
                        <Text type="secondary" className="text-xs block mb-2">
                            {isLocal ? '' : '方式一: '}点 [获取授权码] 在新窗口登录百度并同意授权, 复制页面显示的授权码, 在弹窗中完成授权
                        </Text>
                        <Button onClick={openOobAuth}>获取授权码</Button>
                    </div>
                    {!isLocal ? (
                        <div className="border-t border-[#eee] pt-3">
                            <Text type="secondary" className="text-xs block mb-2">
                                方式二: 点 [跳转授权] 跳转到百度登录并同意, 完成后自动返回本页.
                            </Text>
                            <Button onClick={openRedirectAuth}>跳转授权</Button>
                        </div>
                    ) : null}
                </div>
            </Card>

            <DebugZone />

            <Modal
                title="百度网盘授权"
                open={authModalOpen}
                onCancel={() => setAuthModalOpen(false)}
                footer={
                    <div className="flex justify-end gap-2">
                        <Button onClick={() => setAuthModalOpen(false)}>取消</Button>
                        <Button type="primary" loading={authLoading} onClick={submitAuthCode}>
                            完成授权
                        </Button>
                    </div>
                }
            >
                <Text type="secondary" className="text-xs block mb-2">
                    复制百度页面显示的授权码粘贴到下方.
                </Text>
                <Input value={authCode} onChange={e => setAuthCode(e.target.value)} placeholder="粘贴百度授权码" />
            </Modal>

            <Modal
                title="选择要恢复的备份"
                open={restoreOpen}
                onCancel={() => setRestoreOpen(false)}
                onOk={confirmRestore}
                okText="恢复"
                cancelText="取消"
                destroyOnHidden
            >
                <Select
                    className="w-full"
                    popupMatchSelectWidth={false}
                    value={restoreFsId}
                    onChange={setRestoreFsId}
                    options={restoreFiles.map(item => {
                        return { value: String(item.fsId), label: new Date(item.mtime * 1000).toLocaleString('zh-CN', { hour12: false }) };
                    })}
                    optionRender={option => {
                        const chosen = restoreFiles.find(item => String(item.fsId) === option.value);
                        return (
                            <div className="flex flex-col gap-0.5 py-1">
                                <span>{option.label}</span>
                                <span className="text-xs text-[#999]">{chosen?.summary}</span>
                            </div>
                        );
                    }}
                />
            </Modal>
        </div>
    );
}
