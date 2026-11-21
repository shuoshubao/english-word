import { FileOutlined } from '@ant-design/icons';
import { App, Button, Card, Empty, Skeleton, Typography } from 'antd';
import { useMemo, useRef, useState } from 'react';
import { Tree } from 'react-arborist';
import { listAllFiles, readFileText } from '../../utils/baidu-pan';
import MonacoJsonViewer from './MonacoJsonViewer';

const { Text } = Typography;
const BAIDU_PAN_KEY = 'BaiduPanInfo';

const readBaiduPanInfo = () => {
    try {
        return JSON.parse(localStorage.getItem(BAIDU_PAN_KEY)) || {};
    } catch {
        return {};
    }
};

const ERROR_LABEL = { files: '拉取文件', read: '读取文件' };
// 已读取过的文件内容按 fsId 缓存，避免重复点击时再次请求网盘
const fileContentCache = new Map();

const formatSize = size => (size < 1024 ? `${size} B` : size < 1024 * 1024 ? `${(size / 1024).toFixed(1)} KB` : `${(size / 1024 / 1024).toFixed(1)} MB`);

export default function BaiduPanDebug() {
    const { message } = App.useApp();
    const [busy, setBusy] = useState('');
    const [fileTree, setFileTree] = useState(null);
    const [activeFile, setActiveFile] = useState(null);
    const [fileContent, setFileContent] = useState('');
    const readSeq = useRef(0);

    const run = async (action, key) => {
        setBusy(key);
        try {
            await action();
        } catch (error) {
            if (error.message === 'AUTH_REQUIRED') {
                message.warning('请先完成百度网盘授权');
            } else {
                message.error(`${ERROR_LABEL[key] || '操作'}失败: ${error.message}`);
            }
        } finally {
            setBusy('');
        }
    };

    const pullAllFiles = () =>
        run(async () => {
            const tree = await listAllFiles(readBaiduPanInfo());
            readSeq.current += 1;
            setFileTree(tree);
            setActiveFile(null);
            setFileContent('');
            message.success(`已拉取 ${tree.length} 个顶层项`);
        }, 'files');

    const openFile = node => {
        const file = node.data;
        const seq = ++readSeq.current;
        setActiveFile(file);
        if (fileContentCache.has(file.fsId)) {
            setFileContent(fileContentCache.get(file.fsId));
            return;
        }
        return run(async () => {
            const text = await readFileText(readBaiduPanInfo(), file.fsId);
            fileContentCache.set(file.fsId, text);
            if (seq === readSeq.current) {
                setFileContent(text);
            }
        }, 'read');
    };

    // 尽量按 JSON 缩进展示, 非合法 JSON 则原样输出
    const prettyContent = useMemo(() => {
        try {
            return JSON.stringify(JSON.parse(fileContent), null, 2);
        } catch {
            return fileContent;
        }
    }, [fileContent]);

    return (
        <Card title="百度网盘调试">
            <div className="flex flex-col gap-4">
                <Card
                    size="small"
                    title="获取所有文件"
                    extra={
                        <Button size="small" loading={busy === 'files'} onClick={pullAllFiles}>
                            拉取
                        </Button>
                    }
                >
                    {fileTree === null || fileTree.length === 0 ? (
                        <div className="flex justify-center py-6">
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={fileTree === null ? undefined : '没有可显示的文件'} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-[minmax(200px,280px)_1fr] gap-3">
                            <div className="h-80 box-border rounded-lg border border-[#e8edf3] bg-white overflow-hidden p-1">
                                <Tree
                                    key="baidu-pan-tree"
                                    data={fileTree}
                                    width="100%"
                                    height={304}
                                    indent={16}
                                    rowHeight={28}
                                    openByDefault={false}
                                    selectionFollowsFocus
                                    disableDrag
                                    disableDrop
                                    disableMultiSelection
                                >
                                    {({ node, style }) => {
                                        const isDir = node.data.isDir;
                                        // react-arborist 的 paddingLeft = indent × level, 再叠加基础缩进避免一级节点贴边
                                        const nodeStyle = { ...style, paddingLeft: (style.paddingLeft || 0) + 4 };
                                        return (
                                            <div
                                                style={nodeStyle}
                                                className={`group flex h-full w-full cursor-pointer items-center gap-1.5 rounded-md pr-1 ${
                                                    activeFile?.fsId === node.data.fsId
                                                        ? 'bg-[rgba(102,82,209,0.14)] text-[#6652d1]'
                                                        : 'text-[#182230] hover:bg-[#f7f9fc]'
                                                }`}
                                                onClick={() => (isDir ? node.toggle() : openFile(node))}
                                            >
                                                <span className="inline-flex text-[#667085]">
                                                    {isDir ? (
                                                        <svg
                                                            viewBox="0 0 16 16"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            style={{ transform: node.isOpen ? 'rotate(90deg)' : 'none' }}
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <FileOutlined />
                                                    )}
                                                </span>
                                                <span className="min-w-0 flex-1 truncate text-[13px]">{node.data.name}</span>
                                                {!isDir && node.data.size != null ? (
                                                    <span className="shrink-0 text-[11px] text-[#98a2b3]">{formatSize(node.data.size)}</span>
                                                ) : null}
                                            </div>
                                        );
                                    }}
                                </Tree>
                            </div>
                            <div className="h-80 rounded-lg border border-[#e8e6f0] bg-[#fcfcfe] overflow-hidden">
                                {busy === 'read' ? (
                                    <div className="h-full p-3">
                                        <Skeleton active title={false} paragraph={{ rows: 8 }} />
                                    </div>
                                ) : activeFile ? (
                                    <MonacoJsonViewer value={prettyContent} />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-[#999] text-sm">点击左侧 JSON 文件查看内容</div>
                                )}
                            </div>
                        </div>
                    )}
                </Card>
            </div>
        </Card>
    );
}
