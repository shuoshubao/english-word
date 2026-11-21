import { QuestionCircleOutlined, ReloadOutlined, SoundOutlined, SoundTwoTone } from '@ant-design/icons';
import { App, Button, Card, Form, Input, Select, Tooltip, Typography } from 'antd';
import { useRef, useState } from 'react';
import { playBuffer } from '../../utils/audio';
import { hasTtsConfig, readTtsInfo, synthesize } from '../../utils/baidu-tts';

const { Text } = Typography;

const TTS_INFO_KEY = 'BaiduTtsInfo';
// 基础音库发音人: 英文句子用这几个即可(接口 lan 固定 zh, 中英混合模式)
const TTS_VOICES = [
    { value: 0, label: '度小美 (女)' },
    { value: 1, label: '度小宇 (男)' },
    { value: 3, label: '度逍遥' },
    { value: 4, label: '度丫丫' }
];
const TTS_SPEEDS = [
    { value: 3, label: '偏慢' },
    { value: 5, label: '正常' },
    { value: 7, label: '偏快' }
];
const saveTtsInfo = info => {
    try {
        localStorage.setItem(TTS_INFO_KEY, JSON.stringify(info));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

// 音频缓存: key -> objectURL 的 Promise, 连点复用同一个请求
const audioCache = new Map();
const audioKey = (text, info) => `${info?.apiKey || ''}|${info?.secretKey || ''}|${info?.voice || 0}|${info?.speed || 5}|${text}`;
const getAudio = (text, info) => {
    const key = audioKey(text, info);
    let task = audioCache.get(key);
    if (!task) {
        task = synthesize(text, info).then(
            blob => URL.createObjectURL(new Blob([blob], { type: 'audio/mpeg' })),
            error => {
                audioCache.delete(key);
                throw error;
            }
        );
        audioCache.set(key, task);
    }
    return task;
};

// TTS 调试句库: 5 批 x 5 句, 每批长短句混排(覆盖标点/数字/破折号), 点「换一批」切换
const TTS_SAMPLE_GROUPS = [
    [
        'A picture is worth a thousand words.',
        'I have no idea what you are talking about.',
        'The quick brown fox jumps over the lazy dog, which was sleeping under the warm afternoon sun.',
        'If you had asked me a year ago whether I would ever consider moving to another country, I would have said you were crazy.',
        'Studies have shown that regular exercise — even just thirty minutes a day — can significantly improve both physical and mental health, especially when combined with a balanced diet and enough sleep.'
    ],
    [
        'Nice to meet you.',
        'Could you tell me where the nearest train station is?',
        'She has been working at this company for over ten years and still arrives before anyone else every morning.',
        'Although the weather was far from perfect, we decided to continue our hike and were rewarded with a breathtaking view at the summit.',
        'The conference, which brought together researchers from more than thirty countries, focused on how artificial intelligence can be used to address some of the most pressing environmental challenges of our time.'
    ],
    [
        'Let us begin.',
        'I will call you as soon as I arrive.',
        'My brother has collected vintage stamps since he was a child, and his collection now fills an entire room.',
        'If you need any help with the project, do not hesitate to send me a message, because I am always happy to lend a hand when things get busy.',
        'It is widely believed that learning a second language not only opens up new career opportunities but also improves memory, sharpens problem-solving skills, and deepens our understanding of other cultures.'
    ],
    [
        'That sounds great.',
        'What did you have for lunch today?',
        'The train was delayed by nearly an hour, so we missed the beginning of the concert and had to wait outside in the rain.',
        'When I was younger, I used to spend every summer at my grandparents house, where there was no television and we entertained ourselves with books and long walks.',
        'Despite decades of research, scientists still disagree about the exact reasons why some people can learn a language quickly while others struggle for years to reach the same level of fluency.'
    ],
    [
        'Good morning, everyone.',
        'Do you mind if I borrow this book for a few days?',
        'By the time the ambulance arrived, the doctors had already been treating the patient for twenty minutes.',
        'I would rather take the scenic route through the countryside, even if it adds an extra hour to the journey, because the views along the way are absolutely worth it.',
        'In a world where information is available instantly at our fingertips, the ability to think critically and tell reliable sources from misleading ones has become more important than ever before.'
    ]
];

export default function BaiduTtsCard() {
    const { message } = App.useApp();
    const [form] = Form.useForm();
    const [ttsInfo, setTtsInfo] = useState(readTtsInfo);
    const [playing, setPlaying] = useState(-1);
    const playingRef = useRef(-1);
    const setPlayingIndex = index => {
        playingRef.current = index;
        setPlaying(index);
    };
    const [batch, setBatch] = useState(0);
    const samples = TTS_SAMPLE_GROUPS[batch];

    const saveTts = async () => {
        try {
            const values = await form.validateFields();
            saveTtsInfo(values);
            setTtsInfo(values);
            message.success('百度语音合成配置已保存');
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
        // 取表单当前值, 使未保存的音色/语速也能即时试听
        const info = form.getFieldsValue();
        if (!hasTtsConfig(info)) {
            done();
            return;
        }
        setPlayingIndex(index);
        try {
            const objectUrl = await getAudio(text, info);
            if (playingRef.current === index) playBuffer(objectUrl, done);
        } catch {
            if (playingRef.current === index) done();
        }
    };

    return (
        <Card
            title={
                <span className="flex items-center gap-1.5">
                    百度语音合成
                    <Tooltip
                        title={
                            <>
                                <span>请到</span>
                                <a
                                    href="https://console.bce.baidu.com/ai-engine/speech/app/list"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#91caff] underline mx-0.5"
                                >
                                    百度智能云控制台
                                </a>
                                <span>开通语音合成, 获取 API Key / Secret Key</span>
                            </>
                        }
                    >
                        <QuestionCircleOutlined className="text-[#98a2b3] text-xs cursor-help" />
                    </Tooltip>
                </span>
            }
        >
            <Form form={form} layout="vertical" autoComplete="off" initialValues={{ voice: 0, speed: 5, ...ttsInfo }}>
                <Form.Item name="apiKey" label="API Key" rules={[{ required: true, whitespace: true, message: '请输入 API Key' }]}>
                    <Input placeholder="百度智能云 API Key" />
                </Form.Item>
                <Form.Item name="secretKey" label="Secret Key" rules={[{ required: true, whitespace: true, message: '请输入 Secret Key' }]}>
                    <Input.Password placeholder="百度智能云 Secret Key" />
                </Form.Item>
                <div className="grid grid-cols-2 gap-3">
                    <Form.Item name="voice" label="音色">
                        <Select options={TTS_VOICES} />
                    </Form.Item>
                    <Form.Item name="speed" label="语速">
                        <Select options={TTS_SPEEDS} />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" onClick={saveTts}>
                        保存
                    </Button>
                </Form.Item>
            </Form>

            <div className="border-t border-[#eee] pt-4 mt-2">
                <div className="flex items-center gap-1.5 mb-3">
                    <Text type="secondary" className="text-xs">
                        {hasTtsConfig(ttsInfo) ? '点击句子右侧图标测试发音效果' : '未配置凭证时无法发音'}
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
