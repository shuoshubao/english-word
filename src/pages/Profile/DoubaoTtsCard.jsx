import { QuestionCircleOutlined } from '@ant-design/icons';
import { App, Button, Card, Form, Input, Select, Tooltip } from 'antd';
import { useState } from 'react';
import { DEFAULT_VOICE, DOUBAO_INFO_KEY, readDoubaoInfo } from '../../utils/doubao-tts';

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

const saveInfo = info => {
    try {
        localStorage.setItem(DOUBAO_INFO_KEY, JSON.stringify(info));
    } catch {
        // 隐私模式下 localStorage 可能不可写, 静默忽略
    }
};

export default function DoubaoTtsCard({ onSaved }) {
    const { message } = App.useApp();
    const [form] = Form.useForm();
    const [info, setInfo] = useState(readDoubaoInfo);

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
            if (onSaved) onSaved();
            message.success('豆包语音合成配置已保存');
        } catch {
            message.error('请检查表单');
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
        </Card>
    );
}
