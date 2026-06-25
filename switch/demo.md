# 开关 Switch - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space>
    <n-switch v-model:value="active" />
    <n-switch v-model:value="active" disabled />
  </n-space>
</template>
```

## 尺寸

```vue
<template>
  <n-space>
    <n-switch size="small" />
    <n-switch size="medium" />
    <n-switch size="large" />
  </n-space>
</template>
```

## 内容

向开关中加入内容。

```vue
<template>
  <n-switch>
    <template #checked>
      自然赠予你，树冠 微风 肩头的暴雨
    </template>
    <template #unchecked>
      片刻后生成，平衡 忠诚 不息的身体
    </template>
  </n-switch>
</template>
```

## 加载中

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
const loading = ref(false)
function handleUpdateValue(value: boolean) {
  loading.value = true
  setTimeout(() => {
    active.value = value
    loading.value = false
  }, 2000)
}
</script>

<template>
  <n-space>
    <n-switch :rubber-band="false" loading />
    <n-switch
      :rubber-band="false"
      :value="active"
      :loading="loading"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const active = ref(false)
function handleChange(value: boolean) {
  message.info(`Update value: ${value}`)
}
</script>

<template>
  <n-switch v-model:value="active" @update:value="handleChange" />
</template>
```

## 自定义选中的值

使用 `checked-value` 和 `unchecked-value` 制定选中的值。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleUpdateValue(value: string) {
  message.info(value)
}
</script>

<template>
  <n-switch
    checked-value="周末加班"
    unchecked-value="周末支持一下"
    @update:value="handleUpdateValue"
  />
</template>
```

## 形状

开关可以设为方形。

```vue
<template>
  <n-space>
    <n-switch :round="false" />
    <n-switch />
  </n-space>
</template>
```

## 自定义颜色

```vue
<script lang="ts" setup>
import type { CSSProperties } from 'vue'

function railStyle({
  focused,
  checked
}: {
  focused: boolean
  checked: boolean
}) {
  const style: CSSProperties = {}
  if (checked) {
    style.background = '#d03050'
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  }
  else {
    style.background = '#2080f0'
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040'
    }
  }
  return style
}
</script>

<template>
  <n-switch :rail-style="railStyle">
    <template #checked>
      傍晚六点下班
    </template>
    <template #unchecked>
      午夜零点下班
    </template>
  </n-switch>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space>
    <n-switch v-model:value="active" size="medium">
      <template #icon>
        🤔
      </template>
    </n-switch>
    <n-switch v-model:value="active" size="large">
      <template #checked-icon>
        <n-icon :component="ArrowForwardOutline" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="ArrowBackOutline" />
      </template>
    </n-switch>
  </n-space>
</template>
```

