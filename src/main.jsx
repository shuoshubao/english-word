import { App as AntApp, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import '@/styles.scss';
import { theme } from '@/theme';

dayjs.locale('zh-cn');

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ConfigProvider theme={theme} locale={zhCN}>
            <AntApp>
                <HashRouter>
                    <App />
                </HashRouter>
            </AntApp>
        </ConfigProvider>
    </StrictMode>
);
