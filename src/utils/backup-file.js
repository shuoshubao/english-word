// 备份文件统一为 zip 包, 文件名 <毫秒时间戳>.zip, 包内条目 <同一时间戳>.json
import { strFromU8, strToU8, unzipSync, zipSync } from 'fflate';
import { BackupEntrySuffix, BackupFileSuffix } from './config';

export const createBackup = content => {
    const timestamp = Date.now();
    const name = `${timestamp}${BackupFileSuffix}`;
    const bytes = zipSync({ [`${timestamp}${BackupEntrySuffix}`]: strToU8(content) });
    return { name, bytes };
};

export const unpackBackup = bytes => {
    const entries = unzipSync(new Uint8Array(bytes));
    const entryName = Object.keys(entries).find(name => name.endsWith(BackupEntrySuffix));
    return strFromU8(entries[entryName]);
};
