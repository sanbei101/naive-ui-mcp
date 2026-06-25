# 文本省略 Ellipsis - 演示示例

## 基础

带弹出提示基本的单行省略。

```vue
<template>
  <n-ellipsis style="max-width: 240px">
    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
  </n-ellipsis>
</template>
```

## 最大行数

naive-ui 提供基于 `-webkit-line-clamp` 的多行省略。兼容性参见 [caniuse](https://caniuse.com/?search=line-clamp)。

```vue
<template>
  <n-ellipsis :line-clamp="2">
    电灯熄灭 物换星移 泥牛入海<br>黑暗好像 一颗巨石 按在胸口<br>独脚大盗
    百万富翁 摸爬滚打<br>黑暗好像 一颗巨石 按在胸口
  </n-ellipsis>
</template>
```

## 展开方式

使用 `expand-trigger="click"` 搭配 `line-clamp` 参数可以实现点击缩略文本展开完整文本的功能。

```vue
<template>
  <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
    电灯熄灭 物换星移 泥牛入海<br>
    黑暗好像 一颗巨石 按在胸口<br>
    独脚大盗 百万富翁 摸爬滚打<br>
    黑暗好像 一颗巨石 按在胸口
  </n-ellipsis>
</template>
```

## 定制 Tooltip 内容

使用 `tooltip` slot 定制 tooltip 内容。

```vue
<template>
  <n-ellipsis style="max-width: 240px">
    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
    <template #tooltip>
      <div style="text-align: center">
        《秦皇岛》<br>住在我心里孤独的<br>孤独的海怪 痛苦之王<br>开始厌倦
        深海的光 停滞的海浪
      </div>
    </template>
  </n-ellipsis>
</template>
```

## 渲染性能更好的省略

通常情况下，普通的省略已经能满足性能需求，但是在大量渲染的情况下，你可以使用 `n-performant-ellipsis` 来替代普通的 `n-ellipsis`。它具备更好的性能，但是也存在一些问题：内部的组件有可能被卸载再重新挂载，所以请谨慎使用。

```vue
<template>
  <n-performant-ellipsis style="max-width: 240px">
    住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪
  </n-performant-ellipsis>
</template>
```

