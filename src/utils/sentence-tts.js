// 句子发音音源: baidu / doubao, 两家配置各自保留, 切换只改当前使用的音源
import { hasTtsConfig, readTtsInfo, synthesize as synthesizeBaidu } from '@/utils/baidu-tts';
import { hasDoubaoConfig, readDoubaoInfo, synthesize as synthesizeDoubao } from '@/utils/doubao-tts';

const SOURCE_KEY = 'SentenceTtsSource';

export const getSentenceTtsSource = () => (localStorage.getItem(SOURCE_KEY) === 'doubao' ? 'doubao' : 'baidu');
export const setSentenceTtsSource = source => localStorage.setItem(SOURCE_KEY, source);

export const readSentenceTtsInfo = source => (source === 'doubao' ? readDoubaoInfo() : readTtsInfo());
export const hasSentenceTtsConfig = (source, info) => (source === 'doubao' ? hasDoubaoConfig(info) : hasTtsConfig(info));
export const synthesizeSentence = (text, source, info, options) => (source === 'doubao' ? synthesizeDoubao(text, info, options) : synthesizeBaidu(text, info, options));
