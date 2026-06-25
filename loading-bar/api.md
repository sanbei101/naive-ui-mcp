# 加载条 Loading Bar

焦虑的安慰剂，疗效尚可。

## API

### LoadingBarProvider Props

| 名称 | 类型 | 默认值 | 说明 | 版本 |
| --- | --- | --- | --- | --- |
| container-class | `string` | `undefined` | 加载条容器的类名 | 2.33.4 |
| container-style | `string \| object` | `undefined` | 加载条容器的样式 | 2.33.4 |
| loading-bar-style | `{ loading?: string \| object, error?: string \| object }` | `undefined` | 加载条样式 |  |
| to | `string \| HTMLElement \| false` | `undefined` | 加载条的挂载位置 | 2.33.4 |

### loadingBar Injection Methods

| 名称   | 类型         | 说明                     |
| ------ | ------------ | ------------------------ |
| error  | `() => void` | 加载条出现错误的回调函数 |
| finish | `() => void` | 加载条结束加载的回调函数 |
| start  | `() => void` | 加载条开始加载的回调函数 |
