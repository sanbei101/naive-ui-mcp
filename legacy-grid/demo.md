# 旧版栅格 Legacy Grid - 演示示例

## 基础用法

```vue
<template>
  <n-row gutter="12">
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
  </n-row>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 间隔

设定水平、垂直间隔。

```vue
<template>
  <n-row :gutter="[12, 8]">
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
  </n-row>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 偏移

```vue
<template>
  <n-row :gutter="12">
    <n-col :span="6" :offset="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6" :offset="6">
      <div class="green" />
    </n-col>
  </n-row>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 推 & 拉

看看代码就明白这个怎么用了，基本来说就是相对位置的改变。

```vue
<template>
  <n-row :gutter="12">
    <n-col :span="6" :push="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6" :pull="6">
      <div class="green" />
    </n-col>
    <n-col :span="6">
      <div class="light-green" />
    </n-col>
    <n-col :span="6">
      <div class="green" />
    </n-col>
  </n-row>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

