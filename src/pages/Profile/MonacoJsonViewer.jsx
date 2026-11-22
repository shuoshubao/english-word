import { useEffect, useRef } from 'react';

// Monaco 从 CDN 按需加载, 全局只初始化一次
let monacoPromise;
export const loadMonacoEditor = async () => {
    if (!monacoPromise) {
        monacoPromise = (async () => {
            const { default: MonacoEditorLoader } = await import('https://esm.sh/@monaco-editor/loader@1.5.0');
            MonacoEditorLoader.config({
                paths: {
                    vs: 'https://code.bdstatic.com/npm/monaco-editor@0.44.0/min/vs'
                }
            });
            return await MonacoEditorLoader.init();
        })();
    }
    return monacoPromise;
};

// 只读文本查看器: 语法高亮 + 折叠 + 行号, 不含编辑能力
export default function MonacoJsonViewer({ value = '', height = 320, language = 'json' }) {
    const hostRef = useRef(null);
    const editorRef = useRef(null);
    const monacoRef = useRef(null);
    const valueRef = useRef(value);
    valueRef.current = value;

    useEffect(() => {
        let disposed = false;
        const createEditor = async () => {
            try {
                const monaco = await loadMonacoEditor();
                if (disposed || !hostRef.current) {
                    return;
                }
                monacoRef.current = monaco;
                editorRef.current = monaco.editor.create(hostRef.current, {
                    value: valueRef.current,
                    language,
                    theme: 'vs-dark',
                    readOnly: true,
                    domReadOnly: true,
                    automaticLayout: true,
                    minimap: { enabled: true, scale: 1, showSlider: 'mouseover' },
                    fontSize: 12,
                    lineHeight: 20,
                    fontFamily: 'Menlo, Monaco, Consolas, monospace',
                    scrollBeyondLastLine: false,
                    wordWrap: 'on',
                    folding: true,
                    lineNumbersMinChars: 3,
                    renderLineHighlight: 'none',
                    contextmenu: false,
                    overviewRulerLanes: 0,
                    scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
                    padding: { top: 10, bottom: 10 }
                });
            } catch {
                // 加载失败时组件仍保留容器, 由上层决定提示
            }
        };
        createEditor();
        return () => {
            disposed = true;
            editorRef.current?.dispose();
            editorRef.current = null;
        };
        // 编辑器只创建一次, value 更新走下方 effect
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) {
            return;
        }
        if (editor.getValue() !== value) {
            editor.setValue(value);
        }
        const model = editor.getModel();
        if (model && monacoRef.current) {
            monacoRef.current.editor.setModelLanguage(model, language);
        }
    }, [value, language]);

    return <div ref={hostRef} style={{ width: '100%', height }} />;
}
