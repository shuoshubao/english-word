import { useSyncExternalStore, useEffect } from 'react';
import { subscribe, getState, whenReady } from './state';

// 把全局学习状态(state.js 的 pub/sub store)接入 React.
// 首次挂载触发 whenReady 异步读取本地进度; 之后任意组件通过本 hook 订阅同一份状态.
export const useLearningState = () => {
    useEffect(() => {
        whenReady();
    }, []);
    return useSyncExternalStore(subscribe, getState);
};
