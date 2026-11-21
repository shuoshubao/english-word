import { CloudDownloadOutlined, CloudUploadOutlined, DeleteOutlined, ExportOutlined, ImportOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { App, Button, Calendar, Card, Form, Input, InputNumber, Modal, Select, Statistic, Tooltip, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import BaiduPanDebug from '../components/BaiduPanDebug';
import { vocabularyCatalog } from '../data/catalog';
import { checkAuthStatus, downloadBackup, exchangeCode, isLocal, listBackups, startOobAuth, startRedirectAuth, uploadBackup } from '../utils/baidu-pan';
import { VOICE_SOURCES, getVoiceSource, setVoiceSource } from '../utils/settings';
import { merge, reset } from '../utils/state';
import { toFlatProgress, toNestedProgress } from '../utils/storage';
import { useLearningState } from '../utils/useStore';

const { Text } = Typography;

const PROGRESS_KEYS = ['primary', 'junior', 'senior', 'cet4', 'cet6'];
vocabularyCatalog.forEach(book => {
    if (book.category && !PROGRESS_KEYS.includes(book.category)) PROGRESS_KEYS.push(book.category);
});

const BAIDU_PAN_KEY = 'BaiduPanInfo';

const readBaiduPanInfo = () => {
    try {
        return JSON.parse(localStorage.getItem(BAIDU_PAN_KEY)) || {};
    } catch {
        return {};
    }
};

const saveBaiduPanInfo = values => {
    try {
        localStorage.setItem(BAIDU_PAN_KEY, JSON.stringify(values));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

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
    const [baiduPanForm] = Form.useForm();
    const [baiduPanInfo, setBaiduPanInfo] = useState(readBaiduPanInfo);
    const [baiduBusy, setBaiduBusy] = useState('');
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authCode, setAuthCode] = useState('');
    const [authLoading, setAuthLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState('');

    useEffect(() => {
        checkAuthStatus(baiduPanInfo).then(ok => setAuthStatus(ok ? 'ok' : 'fail'));
    }, []);

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

    const saveBaiduPan = async () => {
        try {
            const values = await baiduPanForm.validateFields();
            saveBaiduPanInfo(values);
            setBaiduPanInfo(values);
            message.success('百度网盘配置已保存');
        } catch {
            message.error('请检查表单');
        }
    };

    const openOobAuth = () => {
        try {
            startOobAuth(baiduPanInfo);
            setAuthCode('');
            setAuthModalOpen(true);
        } catch (error) {
            message.error(error.message);
        }
    };

    const openRedirectAuth = () => {
        try {
            startRedirectAuth(baiduPanInfo);
        } catch (error) {
            message.error(error.message);
        }
    };

    const submitAuthCode = async () => {
        setAuthLoading(true);
        try {
            await exchangeCode(baiduPanInfo, authCode);
            setAuthModalOpen(false);
            setAuthCode('');
            setAuthStatus('ok');
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
            const files = await listBackups(baiduPanInfo);
            if (!files.length) {
                message.warning('云端还没有备份文件');
                return;
            }
            const payload = await downloadBackup(baiduPanInfo, files[0].fs_id);
            const progress = payload?.progress;
            if (!progress || typeof progress !== 'object') throw new Error('备份文件格式不正确');
            merge(toFlatProgress(progress));
            message.success(`已同步 ${files[0].server_filename}`);
        }, 'sync');

    const backupToCloud = () =>
        runBaidu(async () => {
            const content = JSON.stringify({
                app: '背单词',
                version: 1,
                exportedAt: new Date().toISOString(),
                progress: toNestedProgress(state)
            });
            const name = await uploadBackup(baiduPanInfo, content);
            message.success(`已备份为 ${name}`);
        }, 'backup');

    return (
        <div className="flex flex-col gap-3 max-w-250 mx-auto">
            <Card title="数据概览">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Statistic className="text-center" title="今日学习" value={todayCount} styles={{ content: { color: '#6652d1' } }} />
                    <Statistic className="text-center" title="已认识" value={state.known.length} styles={{ content: { color: '#52c41a' } }} />
                    <Statistic className="text-center" title="不认识" value={state.unknown.length} styles={{ content: { color: '#ff4d4f' } }} />
                    <Statistic className="text-center" title="收藏" value={state.favorites.length} styles={{ content: { color: '#faad14' } }} />
                </div>
            </Card>

            <Card title="学习日历">
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

            <Card
                title={
                    <span className="flex items-center gap-1.5">
                        百度网盘
                        <Tooltip
                            title={
                                <>
                                    <span>请到</span>
                                    <a
                                        href="https://pan.baidu.com/union/console/applist"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[#91caff] underline mx-0.5"
                                    >
                                        百度网盘开放平台
                                    </a>
                                    <span>获取 AppID / AppKey / SecretKey / SignKey</span>
                                </>
                            }
                        >
                            <QuestionCircleOutlined className="text-[#98a2b3] text-xs cursor-help" />
                        </Tooltip>
                    </span>
                }
                extra={
                    <div className="flex gap-2">
                        <Button size="small" icon={<CloudDownloadOutlined />} loading={baiduBusy === 'sync'} onClick={syncFromCloud}>
                            同步到本地
                        </Button>
                        <Button size="small" icon={<CloudUploadOutlined />} loading={baiduBusy === 'backup'} onClick={backupToCloud}>
                            备份到云端
                        </Button>
                    </div>
                }
            >
                <Form form={baiduPanForm} layout="vertical" autoComplete="off" initialValues={baiduPanInfo}>
                    <Form.Item name="appId" label="AppID" rules={[{ required: true, message: '请输入 AppID' }]}>
                        <InputNumber style={{ width: '100%' }} min={0} precision={0} placeholder="应用 AppID" />
                    </Form.Item>
                    <Form.Item name="appKey" label="AppKey" rules={[{ required: true, whitespace: true, message: '请输入 AppKey' }]}>
                        <Input placeholder="应用 AppKey" />
                    </Form.Item>
                    <Form.Item name="secretKey" label="SecretKey" rules={[{ required: true, whitespace: true, message: '请输入 SecretKey' }]}>
                        <Input.Password placeholder="应用 SecretKey" />
                    </Form.Item>
                    <Form.Item name="signKey" label="SignKey" rules={[{ required: true, whitespace: true, message: '请输入 SignKey' }]}>
                        <Input.Password placeholder="应用 SignKey" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={saveBaiduPan}>
                            保存
                        </Button>
                    </Form.Item>
                </Form>

                <div className="border-t border-[#eee] pt-4 mt-2 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Text type="secondary" className="text-xs">
                            授权状态:
                        </Text>
                        {authStatus === 'ok' ? (
                            <Text type="success" className="text-xs">
                                已授权
                            </Text>
                        ) : authStatus === 'fail' ? (
                            <Text type="danger" className="text-xs">
                                未授权
                            </Text>
                        ) : (
                            <Text type="secondary" className="text-xs">
                                校验中...
                            </Text>
                        )}
                    </div>
                    <div className="border-t border-[#eee] pt-3">
                        <Text type="secondary" className="text-xs block mb-2">
                            {isLocal ? '' : '方式一: '}点 [获取授权码] 在新窗口登录百度并同意授权, 复制页面显示的授权码, 在弹窗中完成授权
                        </Text>
                        <Button size="small" onClick={openOobAuth}>
                            获取授权码
                        </Button>
                    </div>
                    {!isLocal ? (
                        <div className="border-t border-[#eee] pt-3">
                            <Text type="secondary" className="text-xs block mb-2">
                                方式二: 点 [跳转授权] 跳转到百度登录并同意, 完成后自动返回本页.
                            </Text>
                            <Button size="small" onClick={openRedirectAuth}>
                                跳转授权
                            </Button>
                        </div>
                    ) : null}
                </div>
            </Card>

            <BaiduPanDebug />

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
        </div>
    );
}
