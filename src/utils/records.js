// 学习进度记录格式: [{ id: 单词ID, time: 时间戳 }]
// 与 Web 版(../english)的 records 格式保持一致, 合并时按时间戳取最新
export const getRecord = (records, id) => records.find(record => record.id === id);

export const hasRecord = (records, id) => Boolean(getRecord(records, id));

export const removeRecord = (records, id) => records.filter(record => record.id !== id);

export const upsertRecord = (records, id, time) => [...removeRecord(records, id), { id, time }];

// 校验并清洗记录: 丢弃非法条目
export const toRecords = records => (Array.isArray(records) ? records.filter(record => record?.id && Number.isFinite(record.time)) : []);
