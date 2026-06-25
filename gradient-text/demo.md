# 渐变文字 Gradient Text - 演示示例

## 基础用法

它有不同的类型。

```vue
<template>
  <n-gradient-text type="error">
    炸了
  </n-gradient-text>
  <br>
  <n-gradient-text type="info">
    噢
  </n-gradient-text>
  <br>
  <n-gradient-text type="warning">
    注意
  </n-gradient-text>
  <br>
  <n-gradient-text type="success">
    成了
  </n-gradient-text>
</template>
```

## 尺寸

其实用 CSS 也挺方便的。

```vue
<template>
  <n-gradient-text type="info">
    Live Forever
  </n-gradient-text>
  <n-gradient-text type="danger">
    Live Forever
  </n-gradient-text>
  <br>
  <n-gradient-text :size="24" type="warning">
    Married with Children
  </n-gradient-text>
  <br>
  <n-gradient-text :size="24" type="success">
    Back in the USSR
  </n-gradient-text>
</template>

<style>
.n-gradient-text {
  font-size: 36px;
}
</style>
```

## 定制

靠你了。

```vue
<template>
  <n-gradient-text
    :gradient="{
      from: 'rgb(85, 85, 85)',
      to: 'rgb(170, 170, 170)',
    }"
  >
    定制颜色
  </n-gradient-text>
  <br>
  <n-gradient-text
    :gradient="{
      deg: 180,
      from: 'rgb(85, 85, 85)',
      to: 'rgb(170, 170, 170)',
    }"
  >
    定制颜色
  </n-gradient-text>
  <br>
  <n-gradient-text
    gradient="linear-gradient(90deg, red 0%, green 50%, blue 100%)"
  >
    瞎写的颜色
  </n-gradient-text>
</template>

<style>
.n-gradient-text {
  font-size: 24px;
}
</style>
```

