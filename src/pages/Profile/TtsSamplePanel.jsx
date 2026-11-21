import { ReloadOutlined, SoundOutlined, SoundTwoTone } from '@ant-design/icons';
import { App, Tooltip, Typography } from 'antd';
import { useMemo, useRef, useState } from 'react';
import { speakSentence } from '@/utils/audio';
import { hasSentenceTtsConfig, readSentenceTtsInfo } from '@/utils/sentence-tts';
import { TTS_SAMPLE_GROUPS } from '@/pages/Profile/tts-samples';

const { Text } = Typography;

export default function TtsSamplePanel({ source, version }) {
    const { message } = App.useApp();
    const [playing, setPlaying] = useState(-1);
    const playingRef = useRef(-1);
    const [batch, setBatch] = useState(0);
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
        setPlayingIndex(index);
        speakSentence(
            samples[index],
            () => {
                if (playingRef.current === index) setPlayingIndex(-1);
            },
            error => {
                if (playingRef.current === index) setPlayingIndex(-1);
                message.error(`合成失败: ${error.message}`);
            }
        );
    };

    return (
        <div className="border-t border-[#eee] pt-4 mt-4">
            <div className="flex items-center gap-1.5 mb-3">
                <Text type="secondary" className="text-xs">
                    {hasConfig ? '测试以下例句的发音' : '未配置凭证时无法发音'}
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
