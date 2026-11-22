# english-word 项目长期约定

- 这是用户自用的网站，不需要为旧 localStorage 数据做兼容或迁移；配置结构变更时可以直接改，用户会随时清理缓存。
- 水平排列的图标+文字/按钮组合优先用 antd 的 `Space`，不传 `size`（用默认间距），而不是 Tailwind 的 `flex items-center gap-x`；但带 `flex-1`/`flex-wrap` 的复杂布局仍用 Tailwind。
- 给 antd Select/Segmented 准备的可选项数组直接用标准 `{ value, label }`，不要自定义 `id`/`name` 再在使用处 map 转换；没有实际用途的字段（如 `desc`）不要加。
- 项目代码规范在根目录 `AGENTS.md`（用户提供的 ESlint/命名/样式/注释规范，已去掉 Vue 专属规则，保留 JSX 规则）。改代码须遵守它，并把现有代码逐步改造到符合规范。
