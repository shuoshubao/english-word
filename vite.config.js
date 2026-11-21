import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: './',
    server: {
        proxy: {
            '/baidu-api': {
                target: 'https://pan.baidu.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/baidu-api/, '')
            },
            '/baidu-oauth': {
                target: 'https://openapi.baidu.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/baidu-oauth/, '')
            },
            '/baidu-upload': {
                target: 'https://d.pcs.baidu.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/baidu-upload/, '')
            }
        }
    },
    build: {
        outDir: 'docs'
    }
});
