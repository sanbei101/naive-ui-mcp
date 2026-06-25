# 日志 Log

<!--single-column-->

## API

### Log Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| font-size | `number` | `14` | 文字大小 |
| hljs | `Object` | `undefined` | 如果你想局部设定 `hljs` ，可以通过这个属性传给组件 |
| language | `string` | `undefined` | 日志在 `highlightjs` 中的语言 |
| line-height | `number` | `1.25` | 行高 |
| lines | `Array<string>` | `undefined` | 按行显示日志内容，在同时存在 `log` 参数时，该参数无效 |
| loading | `boolean` | `false` | 是否显示加载中 |
| log | `string` | `undefined` | 日志的内容 |
| rows | `number` | `15` | 日志的尺寸 |
| spin-props | `{ strokeWidth?: number, stroke?: string, scale?: number, radius?: number }` | `undefined` | 加载图标的属性 | 2.44.0 |
| trim | `boolean` | `false` | 是否显示 `trim` 后的日志 |
| on-require-more | `(from: 'top' \| 'bottom') => void` | `undefined` | 滚动加载日志的回调函数 |
| on-reach-top | `() => void` | `undefined` | 滚动到顶部的回调函数 |
| on-reach-bottom | `() => void` | `undefined` | 滚动到底部的回调函数 |

### Log Methods

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| scrollTo | `(options: { top?: number, position?: 'top' \| 'bottom', silent?: boolean })` | 滚动事件的回调函数 |
