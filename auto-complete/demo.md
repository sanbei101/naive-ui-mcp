# 自动填充 Auto Complete - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-auto-complete
    v-model:value="value"
    :input-props="{
      autocomplete: 'disabled',
    }"
    :options="options"
    placeholder="邮箱"
    clearable
  />
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-space vertical>
    <n-auto-complete
      v-model:value="value"
      :options="options"
      placeholder="邮箱"
      size="small"
    />
    <n-auto-complete
      v-model:value="value"
      :options="options"
      placeholder="邮箱"
      size="medium"
    />
    <n-auto-complete
      v-model:value="value"
      :options="options"
      placeholder="邮箱"
      size="large"
    />
  </n-space>
</template>
```

## 成组

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return [
    ['谷歌', '@gmail.com'],
    ['网易', '@163.com'],
    ['腾讯', '@qq.com']
  ].map((emailInfo) => {
    return {
      type: 'group',
      label: emailInfo[0],
      key: emailInfo[0],
      children: [valueRef.value.split('@')[0] + emailInfo[1]]
    }
  })
})
</script>

<template>
  <n-auto-complete
    v-model:value="value"
    :options="options"
    placeholder="邮箱"
  />
</template>
```

## 自定义输入元素

你可以替换 AutoComplete 的输入元素。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-auto-complete v-model:value="value" :options="options">
    <template
      #default="{ handleInput, handleBlur, handleFocus, value: slotValue }"
    >
      <n-input
        type="textarea"
        :value="slotValue"
        placeholder="邮箱"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      />
    </template>
  </n-auto-complete>
</template>
```

## 选择后的动作

在选中选项后清除内容或者选择后 Blur。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const value = valueRef.value === null ? '' : valueRef.value
    const prefix = value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-space vertical>
    <n-auto-complete
      v-model:value="value"
      :options="options"
      clear-after-select
      placeholder="选择后清空"
    />
    <n-auto-complete
      v-model:value="value"
      :options="options"
      blur-after-select
      placeholder="选择后 Blur"
    />
  </n-space>
</template>
```

## 是否显示菜单

你可以根据输入的值来决定是否显示菜单

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
function getShow(value: string) {
  if (value === 'a') {
    return true
  }
  return false
}
</script>

<template>
  <n-auto-complete
    v-model:value="value"
    :options="options"
    placeholder="输入 a 显示菜单"
    :get-show="getShow"
  />
</template>
```

## 自定义渲染

使用 `render-label` 自定义选项内容。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { NTag } from 'naive-ui'
import { computed, h, ref } from 'vue'

const valueRef = ref('')
const value = valueRef
function renderLabel(option: SelectOption): VNodeChild {
  return [
    option.label as string,
    ' ',
    h(NTag, { size: 'small', type: 'info' }, { default: () => 'Email' })
  ]
}
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = valueRef.value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-auto-complete
    v-model:value="value"
    :options="options"
    placeholder="邮箱"
    :render-label="renderLabel"
  />
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-auto-complete status="warning" placeholder="" />
    <n-auto-complete status="error" placeholder="" />
  </n-space>
</template>
```

## 追加模式

在选中选项后追加到输入框中，而不是直接覆盖，配合 get-show 使用。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref('')
const appendValueRef = ref('')
const value = valueRef
const options = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const value = valueRef.value === null ? '' : valueRef.value
    const prefix = value.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
const appendValue = appendValueRef
const appendOptions = computed(() => {
  return ['gmail.com', '163.com', 'qq.com'].map((suffix) => {
    return {
      label: suffix,
      value: suffix
    }
  })
})
function getShow(value: string) {
  if (value.endsWith('@')) {
    return true
  }
  return false
}
</script>

<template>
  <n-space vertical>
    <n-auto-complete
      v-model:value="value"
      :options="options"
      :append="false"
      placeholder="选择后覆盖"
    />
    <n-auto-complete
      v-model:value="appendValue"
      :options="appendOptions"
      :append="true"
      :get-show="getShow"
      placeholder="配合 get-show 选择后追加"
    />
  </n-space>
</template>
```

