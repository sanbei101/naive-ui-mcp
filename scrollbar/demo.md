# 滚动条 Scrollbar - 演示示例

## 基础用法

```vue
<template>
  <n-scrollbar style="max-height: 120px">
    我们在田野上面找猪<br>
    想象中已找到了三只<br>
    小鸟在白云上面追逐<br>
    它们在树底下跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    想象中我们是如此的疯狂<br>
    我们在城市里面找猪<br>
    想象中已找到了几百万只<br>
    小鸟在公园里面唱歌<br>
    它们独自在想象里跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    许多年之后我们又开始想象<br>
    啦啦啦啦啦啦啦啦咧
  </n-scrollbar>
</template>
```

## 横向滚动

```vue
<template>
  <n-scrollbar x-scrollable>
    <div style="white-space: nowrap; padding: 12px">
      我们在田野上面找猪 想象中已找到了三只 小鸟在白云上面追逐 它们在树底下跳舞
      啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年
      想象中我们是如此的疯狂 我们在城市里面找猪 想象中已找到了几百万只
      小鸟在公园里面唱歌 它们独自在想象里跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧
      我们在想象中度过了许多年 许多年之后我们又开始想象 啦啦啦啦啦啦啦啦咧
    </div>
  </n-scrollbar>
</template>
```

## 触发方式

你可以设定不同的触发方式，`trigger="none"` 会让滚动条一直显示，`trigger="hover"` 会让滚动条在鼠标悬浮的时候显示。

```vue
<template>
  <n-scrollbar style="max-height: 120px" trigger="none">
    我们在田野上面找猪<br>
    想象中已找到了三只<br>
    小鸟在白云上面追逐<br>
    它们在树底下跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    想象中我们是如此的疯狂<br>
    我们在城市里面找猪<br>
    想象中已找到了几百万只<br>
    小鸟在公园里面唱歌<br>
    它们独自在想象里跳舞<br>
    啦啦啦啦啦啦啦啦咧<br>
    啦啦啦啦咧<br>
    我们在想象中度过了许多年<br>
    许多年之后我们又开始想象<br>
    啦啦啦啦啦啦啦啦咧
  </n-scrollbar>
</template>
```

## 鼠标拖动滚不到最下面

在最后一个元素含有 `margin-bottom` 的情况下，通过鼠标拖动滚动条，滚动不到最下面。这是浏览器的原生滚动行为导致的，`n-scrollbar` 无法自动的处理这种问题，你可以通过设定 `content-style` 为 `'overflow: hidden;'` 来解决这个问题。

```vue
<template>
  <n-scrollbar style="max-height: 120px">
    不设定 content-style
    <p style="margin-bottom: 90px">
      margin-bottom: 90px
    </p>
    <p style="margin-bottom: 90px">
      margin-bottom: 90px
    </p>
  </n-scrollbar>
  <n-divider />
  <n-scrollbar style="max-height: 120px" content-style="overflow: hidden;">
    content-style="overflow: hidden;"
    <p style="margin-bottom: 90px">
      margin-bottom: 90px
    </p>
    <p style="margin-bottom: 90px">
      margin-bottom: 90px
    </p>
  </n-scrollbar>
</template>
```

## 自定义样式

你可以通过 `theme-overrides` 去控制滚动条的样式。

```vue
<template>
  <n-config-provider
    :theme-overrides="{
      Scrollbar: {
        width: '8px',
        railInsetHorizontal: '4px 4px 4px auto',
        borderRadius: 0,
      },
    }"
  >
    <n-scrollbar style="max-height: 120px">
      我们在田野上面找猪<br>
      想象中已找到了三只<br>
      小鸟在白云上面追逐<br>
      它们在树底下跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      想象中我们是如此的疯狂<br>
      我们在城市里面找猪<br>
      想象中已找到了几百万只<br>
      小鸟在公园里面唱歌<br>
      它们独自在想象里跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      许多年之后我们又开始想象<br>
      啦啦啦啦啦啦啦啦咧
    </n-scrollbar>
  </n-config-provider>
</template>
```

## 滚动条位置

通过 `y-placement` 和 `x-placement` 去控制滚动条的位置。

```vue
<template>
  <NSpace>
    <n-scrollbar style="max-height: 120px" y-placement="left">
      我们在田野上面找猪<br>
      想象中已找到了三只<br>
      小鸟在白云上面追逐<br>
      它们在树底下跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      想象中我们是如此的疯狂<br>
      我们在城市里面找猪<br>
      想象中已找到了几百万只<br>
      小鸟在公园里面唱歌<br>
      它们独自在想象里跳舞<br>
      啦啦啦啦啦啦啦啦咧<br>
      啦啦啦啦咧<br>
      我们在想象中度过了许多年<br>
      许多年之后我们又开始想象<br>
      啦啦啦啦啦啦啦啦咧
    </n-scrollbar>
    <n-scrollbar x-scrollable x-placement="top" style="white-space: nowrap">
      我们在田野上面找猪 想象中已找到了三只 小鸟在白云上面追逐 它们在树底下跳舞
      啦啦啦啦啦啦啦啦咧 啦啦啦啦咧 我们在想象中度过了许多年
      想象中我们是如此的疯狂 我们在城市里面找猪 想象中已找到了几百万只
      小鸟在公园里面唱歌 它们独自在想象里跳舞 啦啦啦啦啦啦啦啦咧 啦啦啦啦咧
      我们在想象中度过了许多年 许多年之后我们又开始想象 啦啦啦啦啦啦啦啦咧
    </n-scrollbar>
  </NSpace>
</template>
```

