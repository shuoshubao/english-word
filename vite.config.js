import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            external: id => ['react', 'react-dom', 'react-dom/client', 'antd', 'dayjs'].some(mod => id === mod),
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react-dom/client': 'ReactDOM',
                    antd: 'antd',
                    dayjs: 'dayjs'
                }
            }
        }
    }
});
