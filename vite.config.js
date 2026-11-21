import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

// 百度 dlink 会 302 到 CDN 域名(无 CORS 头), 由服务端 fetch 跟随重定向后返回内容
const baiduDl = () => ({
    name: 'baidu-dl',
    configureServer(server) {
        server.middlewares.use('/baidu-dl', async (req, res) => {
            const target = new URL(req.url, 'http://localhost').searchParams.get('url');
            if (!target) {
                res.statusCode = 400;
                res.end('missing url');
                return;
            }
            try {
                const host = new URL(target).hostname;
                if (!/(^|\.)baidu(pcs)?\.com$/.test(host)) {
                    res.statusCode = 403;
                    res.end('host not allowed');
                    return;
                }
                const upstream = await fetch(target);
                const buf = Buffer.from(await upstream.arrayBuffer());
                res.statusCode = upstream.status;
                res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
                res.end(buf);
            } catch (e) {
                res.statusCode = 502;
                res.end(e.message);
            }
        });
    }
});

export default defineConfig({
    plugins: [react(), tailwindcss(), baiduDl()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
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
            },
            '/baidu-aip': {
                target: 'https://aip.baidubce.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/baidu-aip/, '')
            },
            '/baidu-tts': {
                target: 'https://tsn.baidu.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/baidu-tts/, '')
            },
            '/doubao-tts': {
                target: 'https://openspeech.bytedance.com',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/doubao-tts/, '')
            }
        }
    },
    build: {
        outDir: 'docs'
    }
});
