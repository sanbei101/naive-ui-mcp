# 面板分割 Split - 演示示例

## 基础用法

```vue
<template>
  <n-split direction="horizontal" style="height: 200px" :max="0.75" :min="0.25">
    <template #1>
      Pane 1
    </template>
    <template #2>
      Pane 2
    </template>
  </n-split>
</template>
```

## 垂直布局

```vue
<template>
  <n-split direction="vertical" style="height: 200px">
    <template #1>
      Pane 1
    </template>
    <template #2>
      Pane 2
    </template>
  </n-split>
</template>
```

## 嵌套布局

```vue
<template>
  <n-split direction="horizontal" style="height: 200px">
    <template #1>
      Pane 1
    </template>
    <template #2>
      <n-split direction="vertical" style="height: 200px">
        <template #1>
          Pane 2
        </template>
        <template #2>
          <n-split direction="horizontal" style="height: 100%">
            <template #1>
              Pane 3
            </template>
            <template #2>
              Pane 4
            </template>
          </n-split>
        </template>
      </n-split>
    </template>
  </n-split>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleOnDragStart() {
  message.info('开始滚动')
}
function handleOnDragMove() {
  message.info('滚动中')
}
function handleOnDragEnd() {
  message.info('滚动结束')
}
</script>

<template>
  <n-split
    direction="horizontal"
    style="height: 200px"
    @drag-start="handleOnDragStart"
    @drag-move="handleOnDragMove"
    @drag-end="handleOnDragEnd"
  >
    <template #1>
      Pane 1
    </template>
    <template #2>
      Pane 2
    </template>
  </n-split>
</template>
```

## 插槽

```vue
<script lang="ts" setup>
import { SwapHorizontal as SwapHorizontalIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-split
    direction="horizontal"
    style="height: 200px"
    :default-size="0.4"
    :resize-trigger-size="16"
    :min="0.25"
    :max="0.75"
  >
    <template #1>
      Pane 1
    </template>
    <template #2>
      Pane 2
    </template>
    <template #resize-trigger>
      <div
        :style="{
          height: '100%',
          backgroundColor: '#409eff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '8px',
        }"
      >
        <n-icon color="white" :size="16">
          <SwapHorizontalIcon />
        </n-icon>
      </div>
    </template>
  </n-split>
</template>
```

## 受控的属性值

```vue
<script setup lang="ts">
import { NInputNumber, NSplit } from 'naive-ui'
import { ref } from 'vue'

const split = ref<number>(0.8)
</script>

<template>
  <n-flex vertical>
    <NInputNumber
      v-model:value="split"
      :step="0.1"
      clearable
      :max="1"
      :min="0"
    />
    <NSplit v-model:size="split" style="height: 200px">
      <template #1>
        <div style="width: 100%; background-color: black" />
      </template>
      <template #2>
        <div style="width: 100%; background-color: red" />
      </template>
    </NSplit>
  </n-flex>
</template>
```

## 使用像素值控制尺寸

自 `2.38.2` 开始，`min`、`max`、`size` 和 `default-size` 属性可以接受像素值。

```vue
<template>
  <n-split
    direction="horizontal"
    style="height: 200px"
    max="300px"
    min="100px"
    default-size="200px"
  >
    <template #1>
      Pane 1:<br>
      min 100px<br>
      default 200px<br>
      max 300px
    </template>
    <template #2>
      Pane 2
    </template>
  </n-split>
</template>
```

