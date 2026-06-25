# 高亮文本 Highlight - 演示示例

## 基础

```vue
<script lang="ts" setup>
const text
  = 'Naive UI 是一个 Vue3 的组件库，它比较完整，主题可调，用 TypeScript 写的，快。'
const patterns = ['Naive UI', 'Vue3', 'TypeScript', '快']
</script>

<template>
  <n-highlight :text="text" :patterns="patterns" />
</template>
```

## 样式

换个样式，让高亮更加醒目。

```vue
<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'

const themeVars = useThemeVars()
const text = 'Naive UI 全量使用 TypeScript 编写，和你的 TypeScript 项目无缝衔接'
const patterns = ['Naive UI', 'TypeScript']
</script>

<template>
  <n-highlight
    :text="text"
    :patterns="patterns"
    :highlight-style="{
      padding: '0 6px',
      borderRadius: themeVars.borderRadius,
      display: 'inline-block',
      color: themeVars.baseColor,
      background: themeVars.primaryColor,
      transition: `all .3s ${themeVars.cubicBezierEaseInOut}`,
    }"
  />
</template>
```

## 区分大小写

默认情况下，高亮是不区分大小写，你可以通过 `case-sensitive` 属性来开启区分大小写模式。

```vue
<script lang="ts" setup>
const text = 'Naive UI 全量使用 TypeScript 编写，和你的 TypeScript 项目无缝衔接'
const patterns = ['Naive UI', 'typeScript']
</script>

<template>
  <n-highlight :text="text" :patterns="patterns" :case-sensitive="true" />
</template>
```

## 高亮标签

通过 `highlight-tag` 属性可以指定高亮文本的标签。

```vue
<script lang="ts" setup>
const text
  = 'Naive UI 是一个 Vue3 的组件库，它比较完整，主题可调，用 TypeScript 写的，快。'
const patterns = ['Naive UI', 'Vue3', 'TypeScript', '快']
</script>

<template>
  <n-highlight
    :text="text"
    highlight-tag="span"
    :patterns="patterns"
    highlight-style="text-decoration: underline"
  />
</template>
```

