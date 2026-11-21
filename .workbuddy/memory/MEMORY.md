# english-word 项目长期约定

- 这是用户自用的网站，不需要为旧 localStorage 数据做兼容或迁移；配置结构变更时可以直接改，用户会随时清理缓存。
- 水平排列的图标+文字/按钮组合优先用 antd 的 `Space`，不传 `size`（用默认间距），而不是 Tailwind 的 `flex items-center gap-x`；但带 `flex-1`/`flex-wrap` 的复杂布局仍用 Tailwind。
