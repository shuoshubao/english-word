import { QuestionCircleOutlined, ReloadOutlined, SoundOutlined, SoundTwoTone } from '@ant-design/icons';
import { App, Button, Card, Form, Input, Select, Tooltip, Typography } from 'antd';
import { useRef, useState } from 'react';
import { playBuffer } from '../../utils/audio';
import { TTS_SAMPLE_GROUPS } from './tts-samples';

const { Text } = Typography;

const INFO_KEY = 'DoubaoTtsInfo';
const isLocal = window.location.hostname === 'localhost';
const API = isLocal ? '/doubao-tts/api/v3/tts/unidirectional/sse' : 'https://truethy.vercel.app/proxy/doubaotts/api/v3/tts/unidirectional/sse';

const DEFAULT_VOICE = 'zh_female_vv_uranus_bigtts';

// 语音合成大模型 2.0 音色
const VOICES = [
    { value: 'zh_female_vv_uranus_bigtts', label: 'Vivi 2.0 (女, 多语种)' },
    { value: 'zh_female_xiaohe_uranus_bigtts', label: '小何 2.0 (女)' },
    { value: 'zh_male_m191_uranus_bigtts', label: '云舟 2.0 (男)' },
    { value: 'zh_male_taocheng_uranus_bigtts', label: '小天 2.0 (男)' },
    { value: 'en_female_dacey_uranus_bigtts', label: 'Dacey (英文女声)' },
    { value: 'en_male_tim_uranus_bigtts', label: 'Tim (英文男声)' }
];
const SPEEDS = [
    { value: -20, label: '偏慢' },
    { value: 0, label: '正常' },
    { value: 30, label: '偏快' }
];

const readInfo = () => {
    try {
        return JSON.parse(localStorage.getItem(INFO_KEY)) || {};
    } catch {
        return {};
    }
};

const saveInfo = info => {
    try {
        localStorage.setItem(INFO_KEY, JSON.stringify(info));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

const hasConfig = info => Boolean(info?.apiKey);

const base64ToBytes = data => {
    const binary = atob(data);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes;
};

// SSE 流: event 352 带 base64 音频片段, 152 结束, 153 失败
const synthesize = async (text, info) => {
    const reqid = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`;
    const body = {
        user: { uid: 'english-word' },
        req_params: {
            text,
            speaker: info.voice || DEFAULT_VOICE,
            audio_params: {
                format: 'mp3',
                speech_rate: Number(info.speed) || 0
            },
            // V3 接口要求 additions 是 JSON 字符串, 传对象会被服务端反序列化拒绝
            additions: JSON.stringify({ explicit_language: 'en' })
        }
    };
    const res = await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': info.apiKey,
            'X-Api-Resource-Id': 'seed-tts-2.0',
            'X-Api-Request-Id': reqid
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) {
        const detail = await res.text();
        throw new Error(detail || `HTTP ${res.status}`);
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    const chunks = [];
    let buffer = '';
    let event = '';
    let dataLines = [];
    // SSE 事件可能跨网络分片, event 与 data 要按空行合并后再处理
    const flushEvent = () => {
        if (!event || !dataLines.length) {
            event = '';
            dataLines = [];
            return;
        }
        let json;
        try {
            json = JSON.parse(dataLines.join('\n'));
        } catch {
            event = '';
            dataLines = [];
            return;
        }
        if (event === '352' && json.data) {
            chunks.push(base64ToBytes(json.data));
        } else if (event === '153') {
            throw new Error(json.message || `合成失败 (code ${json.code})`);
        }
        event = '';
        dataLines = [];
    };
    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
            const text = line.replace(/\r$/, '');
            if (!text) {
                flushEvent();
            } else if (text.startsWith('event:')) {
                event = text.slice(6).trim();
            } else if (text.startsWith('data:')) {
                dataLines.push(text.slice(5).trimStart());
            }
        }
    }
    flushEvent();
    if (!chunks.length) throw new Error('未获取到音频');
    return new Blob(chunks, { type: 'audio/mpeg' });
};

const audioCache = new Map();
const audioKey = (text, info) => `${info?.apiKey || ''}|${info?.voice || ''}|${info?.speed || ''}|${text}`;
const getAudio = (text, info) => {
    const key = audioKey(text, info);
    let task = audioCache.get(key);
    if (!task) {
        task = synthesize(text, info).then(
            blob => URL.createObjectURL(blob),
            error => {
                audioCache.delete(key);
                throw error;
            }
        );
        audioCache.set(key, task);
    }
    return task;
};

export default function DoubaoTtsCard() {
    const { message } = App.useApp();
    const [form] = Form.useForm();
    const [info, setInfo] = useState(readInfo);
    const [playing, setPlaying] = useState(-1);
    const playingRef = useRef(-1);
    const setPlayingIndex = index => {
        playingRef.current = index;
        setPlaying(index);
    };
    const [batch, setBatch] = useState(0);
    const samples = TTS_SAMPLE_GROUPS[batch];

    const save = async () => {
        try {
            const values = await form.validateFields();
            const next = {
                apiKey: values.apiKey.trim(),
                voice: values.voice,
                speed: values.speed
            };
            saveInfo(next);
            setInfo(next);
            message.success('豆包语音合成配置已保存');
        } catch {
            message.error('请检查表单');
        }
    };

    const nextBatch = () => {
        setBatch(current => (current + 1) % TTS_SAMPLE_GROUPS.length);
        setPlayingIndex(-1);
    };

    const testTts = async index => {
        const done = () => setPlayingIndex(-1);
        const text = samples[index];
        const values = form.getFieldsValue();
        if (typeof values.apiKey === 'string') values.apiKey = values.apiKey.trim();
        if (!hasConfig(values)) {
            done();
            return;
        }
        setPlayingIndex(index);
        try {
            const objectUrl = await getAudio(text, values);
            if (playingRef.current === index) playBuffer(objectUrl, done);
        } catch (error) {
            if (playingRef.current === index) done();
            message.error(`合成失败: ${error.message}`);
        }
    };

    return (
        <Card
            title={
                <span className="flex items-center gap-1.5">
                    豆包语音合成
                    <Tooltip
                        title={
                            <>
                                <span>请到</span>
                                <a
                                    href="https://console.volcengine.com/speech/new/setting/apikeys?projectName=default"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#91caff] underline mx-0.5"
                                >
                                    火山引擎控制台
                                </a>
                                <span>获取 API Key</span>
                            </>
                        }
                    >
                        <QuestionCircleOutlined className="text-[#98a2b3] text-xs cursor-help" />
                    </Tooltip>
                </span>
            }
        >
            <Form form={form} layout="vertical" autoComplete="off" initialValues={{ voice: DEFAULT_VOICE, speed: 0, ...info }}>
                <Form.Item name="apiKey" label="API Key" rules={[{ required: true, whitespace: true, message: '请输入 API Key' }]}>
                    <Input.Password placeholder="火山引擎 API Key" />
                </Form.Item>
                <div className="grid grid-cols-2 gap-3">
                    <Form.Item name="voice" label="音色">
                        <Select options={VOICES} />
                    </Form.Item>
                    <Form.Item name="speed" label="语速">
                        <Select options={SPEEDS} />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" onClick={save}>
                        保存
                    </Button>
                </Form.Item>
            </Form>

            <div className="border-t border-[#eee] pt-4 mt-2">
                <div className="flex items-center gap-1.5 mb-3">
                    <Text type="secondary" className="text-xs">
                        {hasConfig(info) ? '点击句子右侧图标测试发音效果' : '未配置凭证时无法发音'}
                    </Text>
                    <Tooltip title="换一批">
                        <ReloadOutlined className="text-sm text-[#98a2b3] cursor-pointer hover:text-[#6652d1]" onClick={nextBatch} />
                    </Tooltip>
                </div>
                <div className="flex flex-col gap-1">
                    {samples.map((sentence, index) => (
                        <div key={sentence} className="flex items-start gap-2 py-1.5">
                            <span className="flex-1 text-[13px] leading-relaxed text-[#344054]">{sentence}</span>
                            {playing === index ? (
                                <SoundTwoTone className="mt-0.5 text-base cursor-pointer shrink-0" onClick={() => testTts(index)} />
                            ) : (
                                <SoundOutlined
                                    className="mt-0.5 text-base cursor-pointer shrink-0 text-[#98a2b3] hover:text-[#6652d1]"
                                    onClick={() => testTts(index)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
