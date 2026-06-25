# 文本省略 Ellipsis

复杂度不会消失，只会转移。

## API

### Ellipsis, PerformantEllipsis Props

`n-performant-ellipsis` 从 2.35.0 开始提供。

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| expand-trigger | `'click'` | `undefined` | 展开的触发方式 | 2.1.0 |
| line-clamp | `number \| string` | `undefined` | 最大行数 | 2.1.0 |
| tooltip | `boolean \| TooltipProps` | `true` | Tooltip 的属性 | 2.1.0 |

### Ellipsis Slots

| 名称    | 参数 | 说明           |
| ------- | ---- | -------------- |
| default | `()` | 文本省略的内容 |
| tooltip | `()` | tooltip 的内容 |
