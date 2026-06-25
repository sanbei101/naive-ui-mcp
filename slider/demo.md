# 滑动选择 Slider - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" :step="10" />
    <n-input-number v-model:value="value" size="small" />
  </n-space>
</template>
```

## 范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([50, 70])
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" range :step="1" />
    <n-space>
      <n-input-number v-model:value="value[0]" size="small" />
      <n-input-number v-model:value="value[1]" size="small" />
    </n-space>
  </n-space>
</template>
```

## 标记

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([50, 70])
const marks = {
  34: '太棒了',
  75: '不错'
}
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" range :marks="marks" :step="10" />
    <n-space>
      <n-input-number v-model:value="value[0]" size="small" />
      <n-input-number v-model:value="value[1]" size="small" />
    </n-space>
  </n-space>
</template>
```

## 限制可选值

设定 `step="mark"` 将可选值限制为标记属性所提供的值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
const marks = {
  0: '0°C',
  20: '20°C',
  37: '37°C',
  100: '100°C'
}
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" :marks="marks" step="mark" />
  </n-space>
</template>
```

## 禁用

```vue
<template>
  <n-slider :default-value="50" disabled />
</template>
```

## 禁用 Tooltip

设定 `:tooltip="false"` 来禁用 tooltip。

```vue
<template>
  <n-slider :step="10" :tooltip="false" />
</template>
```

## 格式化弹出提示

```vue
<script lang="ts" setup>
const formatTooltip = (value: number) => `${value}%`
</script>

<template>
  <n-slider :default-value="50" :step="10" :format-tooltip="formatTooltip" />
</template>
```

## 倒转

设定 `reverse` 可以将轨道倒转过来。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" :step="10" reverse />
    <n-input-number v-model:value="value" size="small" />
  </n-space>
</template>
```

## 垂直

设定 `vertical` 来启用垂直模式，它的高度默认依赖于容器的高度，你也可以自定义高度。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([20, 70])
const marks = {
  0: '0°C',
  20: '20°C',
  37: '37°C',
  100: '100°C'
}
</script>

<template>
  <n-space style="height: 300px; justify-content: center">
    <n-slider :default-value="77" vertical />
    <n-slider :default-value="20" vertical reverse />
    <n-slider :default-value="30" vertical disabled />
    <n-slider v-model:value="value" :marks="marks" vertical range />
  </n-space>
</template>
```

## 始终显示 Tooltip

设定 `show-tooltip` 来让 Tooltip 被一直显示。

```vue
<template>
  <n-slider show-tooltip />
</template>
```

## 自定义标识

可以使用 `thumb` 插槽自定义滑块按钮。

```vue
<script lang="ts" setup>
import AnimalCat24Regular from '@vicons/fluent/AnimalCat24Regular'
import { ref } from 'vue'

const value = ref(50)
</script>

<template>
  <n-space vertical>
    <n-slider v-model:value="value" :step="10">
      <template #thumb>
        <n-icon-wrapper :size="24" :border-radius="12">
          <n-icon :size="18" :component="AnimalCat24Regular" />
        </n-icon-wrapper>
      </template>
    </n-slider>
    <n-input-number v-model:value="value" size="small" />
  </n-space>
</template>
```

## 自定义标记

可以使用 `marks` 插槽自定义刻度。

```vue
<script lang="ts" setup>
import Temperature16Regular from '@vicons/fluent/Temperature16Regular'
import { NFlex, NIcon } from 'naive-ui'
import { h, ref } from 'vue'

function renderMark(value: number, color: string) {
  return h(
    NFlex,
    { style: { width: '120px' } },
    {
      default: () => [
        h(NIcon, { size: 24, color, component: Temperature16Regular }),
        h('span', { style: { color } }, `${value}°C`)
      ]
    }
  )
}

const value = ref([20, 70])
const marks = {
  0: '0°C',
  20: '20°C',
  60: '60°C',
  100: '100°C'
}
const customMarks = {
  0: () => renderMark(0, '#0048BA'),
  20: () => renderMark(20, '#00BFFF'),
  60: () => renderMark(60, '#FFA500'),
  100: () => renderMark(100, '#FF4500')
}
</script>

<template>
  <n-space style="height: 300px; justify-content: space-evenly">
    <n-slider v-model:value="value" :marks="marks" vertical range />
    <n-slider v-model:value="value" :marks="customMarks" vertical range />
  </n-space>
</template>
```

