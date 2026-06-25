# 验证码 Input OTP - 演示示例

## 基础用法

字符数由 `length` 选项定义，默认情况下设置为 `6`。

```vue
<script lang="ts" setup>
import type { InputOtpOnUpdateValue } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()

const value = ref('654321'.split(''))
const onFocus = () => message.info('focus')
const onBlur = () => message.info('blur')
const onFinish = () => message.info('finish')
const onUpdateValue: InputOtpOnUpdateValue = value =>
  message.info(JSON.stringify(value))
</script>

<template>
  <n-input-otp
    v-model:value="value"
    @focus="onFocus"
    @blur="onBlur"
    @finish="onFinish"
    @update:value="onUpdateValue"
  />
</template>
```

## 状态

只读状态、禁用状态、警告状态、错误状态。

```vue
<template>
  <n-space vertical>
    <n-input-otp :default-value="'123456'.split('')" readonly />
    <n-input-otp :default-value="'123456'.split('')" disabled />
    <n-input-otp :default-value="'123456'.split('')" status="warning" />
    <n-input-otp :default-value="'123456'.split('')" status="error" />
  </n-space>
</template>
```

## 密码模式

指定 `mask = true`，可开启密码模式。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('654321'.split(''))
</script>

<template>
  <n-input-otp v-model:value="value" mask />
</template>
```

## 自定义渲染

通过使用 `default` slot，你可以任意的对界面进行调整，以替换默认设计。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('654321'.split(''))
</script>

<template>
  <n-input-otp v-model:value="value" gap="0">
    <template #default="{ index, ...inputProps }">
      <n-input
        v-bind="inputProps"
        :style="index === 0 ? '' : 'margin-left: 6px;'"
      />
      <span v-if="index === 1" style="padding-left: 6px">-</span>
      <span v-if="index === 3" style="padding-left: 6px">-</span>
    </template>
  </n-input-otp>
</template>
```

## 沾满宽度

设定 `block` 属性使其适合父元素宽度。

```vue
<script lang="ts" setup>
import type { InputOtpOnUpdateValue } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()

const value = ref('654321'.split(''))
const onFocus = () => message.info('focus')
const onBlur = () => message.info('blur')
const onFinish = () => message.info('finish')
const onUpdateValue: InputOtpOnUpdateValue = value =>
  message.info(JSON.stringify(value))
</script>

<template>
  <n-input-otp
    v-model:value="value"
    block
    @focus="onFocus"
    @blur="onBlur"
    @finish="onFinish"
    @update:value="onUpdateValue"
  />
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('654321'.split(''))
</script>

<template>
  <n-space vertical>
    <n-input-otp v-model:value="value" size="small" />
    <n-input-otp v-model:value="value" />
    <n-input-otp v-model:value="value" size="large" />
  </n-space>
</template>
```

## 配合表单使用

配合表单使用实现校验。

```vue
<script lang="ts" setup>
import type { FormInst, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const formValue = ref({
  passcode: null
})

const rules: FormRules = {
  passcode: [
    {
      message: '请输入验证码',
      validator: (_, value: string[] | null) => {
        if (value === null)
          return false
        return value.filter(Boolean).length >= 6
      },
      trigger: ['blur']
    },
    {
      message: '请输入验证码',
      validator: (_, value: string[] | null) => {
        if (value === null)
          return false
        return value.filter(Boolean).length >= 1
      },
      trigger: ['input']
    }
  ]
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate(
    (errors) => {
      if (!errors) {
        message.success('验证成功')
      }
      else {
        console.log(errors)
        message.error('验证失败')
      }
    },
    rule => !!rule.trigger?.includes('blur')
  )
}
</script>

<template>
  <n-form ref="formRef" inline :model="formValue" :rules="rules">
    <n-form-item path="passcode" label="验证码">
      <n-input-otp v-model:value="formValue.passcode" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>
</template>
```

## 只允许输入特定值

使用 `allow-input` 限制输入框输入的内容。

```vue
<script lang="ts" setup>
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)
const onlyAllowEnglish = (value: string) => !value || /^[a-zA-Z]+$/.test(value)
</script>

<template>
  <n-space vertical>
    只允许数字输入
    <n-input-otp :allow-input="onlyAllowNumber" />
    只允许英文字母输入
    <n-input-otp :allow-input="onlyAllowEnglish" />
  </n-space>
</template>
```

