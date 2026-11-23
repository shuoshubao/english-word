import { DEFAULT_VOICE, DOUBAO_INFO_KEY, readDoubaoInfo } from '@/utils/doubao-tts';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Form, Input, Select, Space, Tooltip } from 'antd';
import { useState } from 'react';

// TTS 大模型 2.0 音色
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

const saveInfo = info => {
    try {
        localStorage.setItem(DOUBAO_INFO_KEY, JSON.stringify(info));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

export default function DoubaoTtsCard({ onSaved, active }) {
    const [form] = Form.useForm();
    const [info, setInfo] = useState(readDoubaoInfo);

    const handleValuesChange = (changed, allValues) => {
        const next = {
            apiKey: typeof allValues.apiKey === 'string' ? allValues.apiKey.trim() : allValues.apiKey,
            voice: allValues.voice,
            speed: allValues.speed
        };
        saveInfo(next);
        setInfo(next);
        if (onSaved) {
            onSaved();
        }
    };

    return (
        <Card
            size="small"
            className="w-full!"
            style={active ? { boxShadow: '0 4px 16px rgba(102,82,209,0.18)' } : undefined}
            title={
                <Space>
                    <span>豆包TTS</span>
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
                                <span>开通TTS, 获取 API Key</span>
                            </>
                        }
                    >
                        <QuestionCircleOutlined className="text-[#98a2b3] text-xs cursor-help" />
                    </Tooltip>
                </Space>
            }
        >
            <Form
                name="doubaoTtsForm"
                form={form}
                layout="vertical"
                autoComplete="off"
                initialValues={{ voice: DEFAULT_VOICE, speed: 0, ...info }}
                onValuesChange={handleValuesChange}
            >
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
            </Form>
        </Card>
    );
}
