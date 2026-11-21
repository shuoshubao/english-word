import { QuestionCircleOutlined } from '@ant-design/icons';
import { App, Button, Card, Form, Input, Select, Tooltip } from 'antd';
import { useState } from 'react';
import { readTtsInfo } from '@/utils/baidu-tts';

const TTS_INFO_KEY = 'BaiduTtsInfo';
// per 参数即音色编号; 音库档次越高越自然, 臻品/大模型需在百度控制台开通
const TTS_LIBRARIES = [
    {
        value: 'large',
        label: '大模型音库',
        voices: [
            { value: 4189, label: '度涵竹 (开朗女声)' },
            { value: 4194, label: '度嫣然 (活泼女声)' },
            { value: 4193, label: '度泽言 (开朗男声)' },
            { value: 4195, label: '度怀安 (磁性男声)' },
            { value: 4196, label: '度清影 (甜美女声)' },
            { value: 4197, label: '度沁遥 (知性女声)' },
            { value: 4179, label: '度泽言 (温暖男声)' },
            { value: 4146, label: '度禧禧 (阳光女声)' },
            { value: 6567, label: '度小柔 (温柔女声)' },
            { value: 20100, label: '度小粤 (粤语女声)' },
            { value: 20101, label: '度晓芸 (粤语女声)' },
            { value: 4257, label: '四川小哥' },
            { value: 4132, label: '度阿闽' },
            { value: 4139, label: '度小蓉' },
            { value: 5977, label: '台媒女声' },
            { value: 4007, label: '度小台' },
            { value: 4150, label: '度湘玉' },
            { value: 4134, label: '度阿锦' },
            { value: 4172, label: '度筱林' }
        ]
    },
    {
        value: 'fine',
        label: '臻品音库',
        voices: [
            { value: 4003, label: '度逍遥 (臻品)' },
            { value: 4106, label: '度博文' },
            { value: 4115, label: '度小贤' },
            { value: 4119, label: '度小鹿' },
            { value: 4105, label: '度灵儿' },
            { value: 4117, label: '度小乔' },
            { value: 4100, label: '度小雯' },
            { value: 4103, label: '度米朵' },
            { value: 4144, label: '度姗姗' },
            { value: 4278, label: '度小贝' },
            { value: 4143, label: '度清风' },
            { value: 4140, label: '度小新' },
            { value: 4129, label: '度小彦' },
            { value: 4149, label: '度星河' },
            { value: 4254, label: '度小清' },
            { value: 4206, label: '度博文 (臻品)' },
            { value: 4226, label: '南方' }
        ]
    },
    {
        value: 'premium',
        label: '精品音库',
        voices: [
            { value: 5003, label: '度逍遥 (精品)' },
            { value: 5118, label: '度小鹿 (知性女声)' },
            { value: 106, label: '度博文' },
            { value: 110, label: '度小童' },
            { value: 111, label: '度小萌' },
            { value: 103, label: '度米朵' },
            { value: 5, label: '度小娇' }
        ]
    },
    {
        value: 'basic',
        label: '基础音库',
        voices: [
            { value: 0, label: '度小美 (女)' },
            { value: 1, label: '度小宇 (男)' },
            { value: 3, label: '度逍遥' },
            { value: 4, label: '度丫丫 (童声)' }
        ]
    }
];
const voicesOf = library => TTS_LIBRARIES.find(item => item.value === library)?.voices || TTS_LIBRARIES[0].voices;
const speedOf = speed => (speed === undefined || speed === null || speed === '' ? 5 : Number(speed));
const TTS_SPEEDS = [
    { value: 0, label: '最慢 (0)' },
    { value: 3, label: '偏慢 (3)' },
    { value: 5, label: '正常 (5)' },
    { value: 8, label: '偏快 (8)' },
    { value: 15, label: '最快 (15)' }
];
const saveTtsInfo = info => {
    try {
        localStorage.setItem(TTS_INFO_KEY, JSON.stringify(info));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

export default function BaiduTtsCard({ onSaved }) {
    const { message } = App.useApp();
    const [form] = Form.useForm();
    const [ttsInfo, setTtsInfo] = useState(readTtsInfo);
    const initialLibrary = ttsInfo.library || TTS_LIBRARIES[0].value;
    const initialVoice = ttsInfo.voice ?? voicesOf(initialLibrary)[0].value;
    const watchedLibrary = Form.useWatch('library', form) || initialLibrary;

    const saveTts = async () => {
        try {
            const values = await form.validateFields();
            saveTtsInfo(values);
            setTtsInfo(values);
            if (onSaved) onSaved();
            message.success('百度语音合成配置已保存');
        } catch {
            message.error('请检查表单');
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
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                initialValues={{ ...ttsInfo, library: initialLibrary, voice: initialVoice, speed: speedOf(ttsInfo.speed) }}
            >
                <Form.Item name="apiKey" label="API Key" rules={[{ required: true, whitespace: true, message: '请输入 API Key' }]}>
                    <Input placeholder="百度智能云 API Key" />
                </Form.Item>
                <Form.Item name="secretKey" label="Secret Key" rules={[{ required: true, whitespace: true, message: '请输入 Secret Key' }]}>
                    <Input.Password placeholder="百度智能云 Secret Key" />
                </Form.Item>
                <div className="grid grid-cols-2 gap-3">
                    <Form.Item
                        name="library"
                        label={
                            <span className="flex items-center gap-1">
                                音库
                                <Tooltip title="基础/精品开通后可用; 臻品/大模型需在百度控制台申请, 单价更高">
                                    <QuestionCircleOutlined className="text-[#98a2b3] text-xs cursor-help" />
                                </Tooltip>
                            </span>
                        }
                    >
                        <Select
                            options={TTS_LIBRARIES.map(({ value, label }) => ({ value, label }))}
                            onChange={value => form.setFieldsValue({ voice: voicesOf(value)[0].value })}
                        />
                    </Form.Item>
                    <Form.Item name="voice" label="音色">
                        <Select options={voicesOf(watchedLibrary)} />
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
        </Card>
    );
}
