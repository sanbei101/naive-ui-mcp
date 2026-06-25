# 数字输入 Input Number - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-input-number v-model:value="value" clearable />
</template>
```

## 禁用

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
const disabled = ref(true)
</script>

<template>
  <n-space align="center">
    <n-switch v-model:value="disabled" />
    <n-input-number v-model:value="value" :disabled="disabled" />
  </n-space>
</template>
```

## 自定义解析

你可以使用 `parse` 和 `format` 来自定义解析和展示内容，例如增加千位分隔符。通常这两个要一起设定，尤其是当你使用了自定义的 `validator` 时。

使用 `parse` 和 `format` 会使 `update-value-on-input` 失效。

```vue
<script lang="ts" setup>
function parse(input: string) {
  const nums = input.replace(/,/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums))
    return Number(nums)
  return nums === '' ? null : Number.NaN
}

function format(value: number | null) {
  if (value === null)
    return ''
  return value.toLocaleString('en-US')
}

function parseCurrency(input: string) {
  const nums = input.replace(/(,|¥|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums))
    return Number(nums)
  return nums === '' ? null : Number.NaN
}

function formatCurrency(value: number | null) {
  if (value === null)
    return ''
  return `${value.toLocaleString('en-US')} ¥`
}
</script>

<template>
  <n-space vertical>
    <n-input-number :default-value="1075" :parse="parse" :format="format" />
    <n-input-number
      :default-value="1075"
      :parse="parseCurrency"
      :format="formatCurrency"
    />
  </n-space>
</template>
```

## 精度

设置 `precision` 属性可以控制数值精度。

使用 `precision` 会使 `update-value-on-input` 失效。

```vue
<template>
  <n-space vertical>
    <n-input-number clearable :precision="2" />
    <n-input-number clearable :precision="0" />
  </n-space>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const value = ref(0)

function handleChange(v: number | null) {
  message.info(`update:value(${v})`)
}

function handleBlur() {
  message.info('blur')
}

function handleFocus() {
  message.info('focus')
}
</script>

<template>
  <n-input-number
    v-model:value="value"
    @update:value="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>
```

## 前缀 & 后缀

在前缀后缀添加内容

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space vertical>
    <n-input-number v-model:value="value">
      <template #prefix>
        ￥
      </template>
    </n-input-number>
    <n-input-number v-model:value="value">
      <template #suffix>
        %
      </template>
    </n-input-number>
    <n-input-number v-model:value="value" :show-button="false">
      <template #suffix>
        %
      </template>
    </n-input-number>
  </n-space>
</template>
```

## 按钮位置

按钮可以被放在两侧。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space vertical>
    <n-input-number v-model:value="value" button-placement="both" />
    <n-input-number v-model:value="value" button-placement="both">
      <template #prefix>
        $
      </template>
    </n-input-number>
    <n-input-number v-model:value="value" button-placement="both">
      <template #suffix>
        ฿
      </template>
    </n-input-number>
  </n-space>
</template>
```

## 加载状态

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(false)
</script>

<template>
  <n-space align="center">
    <n-input-number clearable :loading="loading" />
    <n-switch v-model:value="loading" />
  </n-space>
</template>
```

## 最小值 & 最大值

你可以设定最小值和最大值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <n-space vertical>
    <n-input-number
      v-model:value="value"
      placeholder="最小值"
      :min="-3"
      :max="5"
    />
    <n-input-number
      v-model:value="value"
      placeholder="最大值"
      :min="-5"
      :max="3"
    />
  </n-space>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space vertical>
    <n-input-number v-model:value="value" size="tiny" />
    <n-input-number v-model:value="value" size="small" />
    <n-input-number v-model:value="value" size="medium" />
    <n-input-number v-model:value="value" size="large" />
  </n-space>
</template>
```

## 间隔

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-input-number v-model:value="value" :step="2" />
</template>
```

## 自定义验证

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
const validator = (x: number) => x > 0
</script>

<template>
  <n-input-number v-model:value="value" :validator="validator" />
</template>
```

## 隐藏按钮

使用 `show-button` 属性来控制是否展示按钮。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(0)
const disabled = ref(true)
</script>

<template>
  <n-space align="center">
    <n-switch v-model:value="disabled" />
    <n-input-number v-model:value="value" :show-button="disabled" />
  </n-space>
</template>
```

## 禁用键盘上下

设定 `:keyboard="{ ArrowUp: false, ArrowDown: false }"` 来禁用键盘上下键。

```vue
<template>
  <n-input-number :keyboard="{ ArrowUp: false, ArrowDown: false }" />
</template>
```

## 改变值的时机

将 `update-value-on-input` 设为 `false`，则在输入的过程中不会改变值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(35)
</script>

<template>
  <n-space vertical>
    <n-input-number
      v-model:value="value"
      :update-value-on-input="false"
      placeholder=""
      :min="20"
      :max="50"
    />
    <n-input-number v-model:value="value" placeholder="" :min="20" :max="50" />
    {{ value }}
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-input-number status="warning" placeholder="" />
    <n-input-number status="error" placeholder="" />
  </n-space>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { ArrowDownCircleOutline, ArrowUpCircleOutline } from '@vicons/ionicons5'
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <n-space vertical>
    <n-input-number v-model:value="value">
      <template #minus-icon>
        <n-icon :component="ArrowDownCircleOutline" />
      </template>
      <template #add-icon>
        <n-icon :component="ArrowUpCircleOutline" />
      </template>
    </n-input-number>
  </n-space>
</template>
```

