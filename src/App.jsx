import { vocabularyCatalog } from '@/data/catalog';
import Book from '@/pages/Book';
import Collection from '@/pages/Collection';
import CollectionDetail from '@/pages/CollectionDetail';
import Collocations from '@/pages/Collocations';
import Irregulars from '@/pages/Irregulars';
import Library from '@/pages/Library';
import Profile from '@/pages/Profile';
import Roots from '@/pages/Roots';
import Special from '@/pages/Special';
import Topic from '@/pages/Topic';
import Topics from '@/pages/Topics';
import { finishAuth } from '@/utils/baidu-pan';
import { isMobile } from '@/utils/device';
import { AppstoreOutlined, BookOutlined, FileTextOutlined, HeartOutlined, LeftOutlined, UserOutlined } from '@ant-design/icons';
import { App as AntApp, Button, Divider, Layout, Segmented, Space, Tooltip, Typography } from 'antd';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

const NAV = [
    { key: '/', label: '词库', icon: <BookOutlined /> },
    { key: '/words', label: '生词', icon: <FileTextOutlined /> },
    { key: '/favorites', label: '收藏', icon: <HeartOutlined /> },
    { key: '/topics', label: '专题', icon: <AppstoreOutlined /> },
    { key: '/profile', label: '我的', icon: <UserOutlined /> }
];

const NAV_OPTIONS = NAV.map(({ key, label, icon }) => ({ value: key, label, icon }));

const TAB_PATHS = NAV.map(n => n.key);
// 专题 tab 下的子页面, 高亮归属到 /topics
const TOPIC_SUBROUTES = ['topic', 'special', 'roots', 'collocations', 'irregulars'];

// 根据路由推导页面标题
const titleOf = pathname => {
    const parts = pathname.split('/').filter(Boolean);
    const dec = s => decodeURIComponent(s || '');
    if (parts.length === 0) return '词库';
    switch (parts[0]) {
        case 'words':
            return '生词';
        case 'favorites':
            return '收藏';
        case 'topics':
            return '专题';
        case 'profile':
            return '我的';
        case 'book': {
            const book = vocabularyCatalog.find(b => b.id === parts[1]);
            return book ? book.title : '词书';
        }
        case 'topic':
            return parts[1] ? `主题 · ${dec(parts[1])}` : '主题分类';
        case 'special':
            return parts[1] ? `特殊单词 · ${dec(parts[1])}` : '特殊单词';
        case 'roots':
            return parts[1] ? `词缀 · ${dec(parts[1])}` : '词缀';
        case 'collocations':
            return parts[1] ? `固定搭配 · ${dec(parts[1])}` : '固定搭配';
        case 'irregulars':
            return '不规则动词';
        case 'collection':
            return `${dec(parts[2])}${parts[1] === 'favorites' ? '收藏' : '生词'}`;
        default:
            return '词库';
    }
};

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const { message } = AntApp.useApp();

    // 百度网盘 OAuth 回调: 回调会整页重载到根路径, 需在顶层检测 code 换取 token
    useEffect(() => {
        finishAuth()
            .then(path => {
                if (path) {
                    message.success('百度网盘已授权');
                    navigate(path, { replace: true });
                }
            })
            .catch(error => message.error(`百度网盘授权失败: ${error.message}`));
    }, [message]);

    const isTab = TAB_PATHS.includes(location.pathname);
    // 顶层菜单高亮: tab 用自身路径; 子路由按归属推导
    //   /collection/favorites/:stage -> /favorites, /collection/unknown/:stage -> /words
    const segs = location.pathname.split('/').filter(Boolean);
    let selectedKey = '/';
    if (segs[0] === 'collection') {
        selectedKey = segs[1] === 'favorites' ? '/favorites' : '/words';
    } else if (TOPIC_SUBROUTES.includes(segs[0])) {
        selectedKey = '/topics';
    } else {
        const firstSeg = `/${segs[0] || ''}`;
        selectedKey = TAB_PATHS.includes(firstSeg) ? firstSeg : '/';
    }
    const title = titleOf(location.pathname);

    const content = (
        <>
            {!isTab ? (
                <>
                    <Space>
                        <Tooltip title="返回">
                            <Button type="text" shape="circle" icon={<LeftOutlined />} onClick={() => navigate(-1)} />
                        </Tooltip>
                        <Title level={4} style={{ margin: 0 }}>
                            {title}
                        </Title>
                    </Space>
                    <Divider size="small" />
                </>
            ) : null}

            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/words" element={<Collection collection="unknown" emptyText='在词库里把单词标记为"不认识", 就会集中出现在这里复习' />} />
                <Route path="/favorites" element={<Collection collection="favorites" emptyText='点单词的"收藏", 随时回来复习你的词汇本' />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/book/:id" element={<Book mode="book" />} />
                <Route path="/topic" element={<Topic />} />
                <Route path="/topic/:title" element={<Book mode="topic" />} />
                <Route path="/special" element={<Special />} />
                <Route path="/special/:title" element={<Book mode="special" />} />
                <Route path="/roots" element={<Roots />} />
                <Route path="/roots/:title" element={<Book mode="root" />} />
                <Route path="/collocations" element={<Collocations />} />
                <Route path="/collocations/:level" element={<Book mode="collocation" />} />
                <Route path="/irregulars" element={<Irregulars />} />
                <Route path="/collection/:collection/:stage" element={<CollectionDetail />} />
            </Routes>
        </>
    );

    return (
        <Layout className="bg-white!" style={{ minHeight: '100vh' }}>
            <Header
                className={`sticky top-0 z-50 h-auto! flex items-center border-b border-[#ededf3] shadow-[0_1px_8px_rgba(102,82,209,0.04)] ${isMobile ? 'px-1! py-2!' : 'px-6! py-2!'}`}
                style={{ background: '#fff' }}
            >
                <Segmented block={isMobile} options={NAV_OPTIONS} value={selectedKey} onChange={navigate} />
            </Header>
            <Content className={`w-full mx-auto ${isMobile ? 'p-1' : 'p-6'}`} style={{ background: '#fff' }}>
                {content}
            </Content>
        </Layout>
    );
}
