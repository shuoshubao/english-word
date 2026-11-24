// 备份文件为未压缩的 JSON 文本, 文件名 <毫秒时间戳>.json
import { backupFileName } from './config';

export const createBackup = content => {
    return { name: backupFileName(), bytes: new TextEncoder().encode(content) };
};
