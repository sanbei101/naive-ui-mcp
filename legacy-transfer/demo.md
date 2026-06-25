# 旧版穿梭框 Legacy Transfer - 演示示例

## 基础用法

穿梭框的基础用法。如果你有一大堆数据，看下一个例子。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: `选项 ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())
</script>

<template>
  <n-legacy-transfer v-model:value="value" :options="options" />
</template>
```

## 一大堆数据

如果你有一大堆数据，你可能想让它快一点。设定 `virtual-scroll` 来使用一个飞快的穿梭框（会关掉那个傻乎乎的动画）。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 42000 }).map((v, i) => ({
    label: `选项${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())
</script>

<template>
  <n-legacy-transfer v-model:value="value" :options="options" virtual-scroll />
</template>
```

## 尺寸

太小太大好像都不怎么好看。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: `选项 ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())
</script>

<template>
  <n-space vertical>
    <n-legacy-transfer v-model:value="value" :options="options" size="small" />
    <n-legacy-transfer v-model:value="value" :options="options" size="large" />
  </n-space>
</template>
```

## 可过滤

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: `选项 ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())
</script>

<template>
  <n-legacy-transfer
    v-model:value="value"
    virtual-scroll
    :options="options"
    filterable
  />
</template>
```

