# 跑马灯 Marquee - 演示示例

## 基础用法

在跑马灯中输入文字：

```vue
<template>
  <n-marquee>
    谁用运气换呼吸 谁用灵魂换稻米 谁用运气换呼吸 谁用灵魂换稻米
  </n-marquee>
</template>
```

## 图片

你可以将任何内容放入跑马灯中。

```vue
<template>
  <n-marquee>
    <n-image
      width="80"
      height="80"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      style="margin-right: 24px"
    />
  </n-marquee>
</template>
```

## 自动填充

使用 `auto-fill` 属性让内容铺满空白空间。

```vue
<template>
  <n-marquee auto-fill>
    <n-image
      width="80"
      height="80"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      style="margin-right: 24px"
    />
  </n-marquee>
</template>
```

