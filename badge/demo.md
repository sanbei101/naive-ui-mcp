# 标记 Badge - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(5)
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge :value="value" :max="15">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" dot>
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
```

## 类型

标记有 `default`、`error`、`info`、`success`、`warning` 类型。

```vue
<template>
  <n-space :size="24" align="center">
    <n-badge dot>
      <n-avatar />
    </n-badge>
    <n-badge dot type="error">
      <n-avatar />
    </n-badge>
    <n-badge dot type="info">
      <n-avatar />
    </n-badge>
    <n-badge dot type="success">
      <n-avatar />
    </n-badge>
    <n-badge dot type="warning">
      <n-avatar />
    </n-badge>
  </n-space>
</template>
```

## 处理中

设定 `processing` 来表明正在处理。

```vue
<template>
  <n-space :size="24" align="center">
    <n-badge dot processing>
      <n-avatar />
    </n-badge>
    <n-badge :value="20" processing>
      <n-avatar />
    </n-badge>
    <n-badge dot type="info" processing>
      <n-avatar />
    </n-badge>
  </n-space>
</template>
```

## 显示 0

设定 `show-zero` 来显示 0。

```vue
<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge :value="value">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero>
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
```

## 溢出

设定 `max` 来处理溢出情况。

```vue
<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(101)
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge :value="value" show-zero>
      <n-avatar />
    </n-badge>
    <n-badge :value="value" :max="99">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero :max="100">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" show-zero :max="10">
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
```

## 受控显示

```vue
<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(5)
const show = ref(true)
</script>

<template>
  <n-space :size="24" align="center" item-style="display: flex;">
    <n-badge :value="value" :max="15" :show="show">
      <n-avatar />
    </n-badge>
    <n-badge :value="value" dot :show="show">
      <n-avatar />
    </n-badge>
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
    <n-switch v-model:value="show" />
  </n-space>
</template>
```

## 自定义内容

在里面插入一些自定义内容。

```vue
<script lang="ts" setup>
import { LockClosedOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-space :size="24" align="center">
    <n-badge value="新">
      <n-avatar />
    </n-badge>
    <n-badge value="火">
      <n-avatar />
    </n-badge>
    <n-badge processing>
      <n-avatar />
      <template #value>
        <n-icon :component="LockClosedOutline" />
      </template>
    </n-badge>
  </n-space>
</template>
```

## 自定义颜色

```vue
<template>
  <n-badge value="15" color="grey">
    <n-avatar />
  </n-badge>
</template>
```

## 直接使用

```vue
<script lang="ts" setup>
import { MdAdd, MdRemove } from '@vicons/ionicons4'
import { ref } from 'vue'

const value = ref(5)
</script>

<template>
  <n-space :size="24" align="center" item-style="display: flex;">
    <n-badge :value="value" :max="15" />
    <n-badge :value="value" dot />
    <n-button-group>
      <n-button @click="value = Math.min(16, value + 1)">
        <template #icon>
          <n-icon><MdAdd /></n-icon>
        </template>
      </n-button>
      <n-button @click="value = Math.max(0, value - 1)">
        <template #icon>
          <n-icon><MdRemove /></n-icon>
        </template>
      </n-button>
    </n-button-group>
  </n-space>
</template>
```

## 自定义位置偏移

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(5)
const offset = [-17, 17] as const
</script>

<template>
  <n-badge :value="value" :max="15" :offset="offset">
    <n-avatar />
  </n-badge>
</template>
```

