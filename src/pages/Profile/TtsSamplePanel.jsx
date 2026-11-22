import { TTS_SAMPLE_GROUPS } from '@/pages/Profile/tts-samples';
import { speakSentence } from '@/utils/audio';
import { hasSentenceTtsConfig, readSentenceTtsInfo } from '@/utils/sentence-tts';
import { ReloadOutlined, SoundOutlined, SoundTwoTone } from '@ant-design/icons';
import { App, Button, Input, Space, Tooltip, Typography } from 'antd';
import { useMemo, useRef, useState } from 'react';

const { Text } = Typography;

export default function TtsSamplePanel({ source, version }) {
    const { message } = App.useApp();
    const [playing, setPlaying] = useState(-1);
    const playingRef = useRef(-1);
    const [batch, setBatch] = useState(0);
    const [customText, setCustomText] = useState('');
    const [customPlaying, setCustomPlaying] = useState(false);
    const customPlayingRef = useRef(false);
    const samples = TTS_SAMPLE_GROUPS[batch];
    const hasConfig = useMemo(() => hasSentenceTtsConfig(source, readSentenceTtsInfo(source)), [source, version]);

    const setPlayingIndex = index => {
        playingRef.current = index;
        setPlaying(index);
    };

    const nextBatch = () => {
        setBatch(current => (current + 1) % TTS_SAMPLE_GROUPS.length);
        setPlayingIndex(-1);
    };

    const test = index => {
        customPlayingRef.current = false;
        setCustomPlaying(false);
        setPlayingIndex(index);
        speakSentence(
            samples[index],
            () => {
                if (playingRef.current === index) setPlayingIndex(-1);
            },
            error => {
                if (playingRef.current === index) setPlayingIndex(-1);
                message.error(`合成失败: ${error.message}`);
            },
            source
        );
    };

    const testCustom = () => {
        const text = customText.trim();
        if (!text) {
            return;
        }
        setPlayingIndex(-1);
        customPlayingRef.current = true;
        setCustomPlaying(true);
        speakSentence(
            text,
            () => {
                if (customPlayingRef.current) {
                    customPlayingRef.current = false;
                    setCustomPlaying(false);
                }
            },
            error => {
                if (customPlayingRef.current) {
                    customPlayingRef.current = false;
                    setCustomPlaying(false);
                }
                message.error(`合成失败: ${error.message}`);
            },
            source
        );
    };

    return (
        <div className="border-t border-[#eee] pt-4 mt-4">
            <Space className="mb-3">
                <Text type="secondary" className="text-xs">
                    {hasConfig ? '测试以下例句的发音' : '未配置凭证时无法发音'}
                </Text>
                <Tooltip title="换一批">
                    <ReloadOutlined className="text-sm text-[#98a2b3] cursor-pointer hover:text-[#6652d1]" onClick={nextBatch} />
                </Tooltip>
            </Space>
            <Space.Compact block className="mb-3">
                <Input
                    value={customText}
                    onChange={e => setCustomText(e.target.value)}
                    onPressEnter={testCustom}
                    placeholder="输入单词或句子测试发音"
                    disabled={!hasConfig}
                />
                <Button type="primary" icon={<SoundOutlined />} loading={customPlaying} disabled={!hasConfig || !customText.trim()} onClick={testCustom} />
            </Space.Compact>
            <div className="flex flex-col gap-1">
                {samples.map((sentence, index) => (
                    <div key={sentence} className="flex items-start gap-2 py-1.5">
                        <span className="flex-1 text-[13px] leading-relaxed text-[#344054]">{sentence}</span>
                        {playing === index ? (
                            <SoundTwoTone className="mt-0.5 text-base cursor-pointer shrink-0" onClick={() => test(index)} />
                        ) : (
                            <SoundOutlined
                                className="mt-0.5 text-base cursor-pointer shrink-0 text-[#98a2b3] hover:text-[#6652d1]"
                                onClick={() => test(index)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
