# 表单 Form - 演示示例

## 行内表单

一个行内表单的例子。

```vue
<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref<'small' | 'medium' | 'large'>('medium')
const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})

const rules = {
  user: {
    name: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur'
    },
    age: {
      required: true,
      message: '请输入年龄',
      trigger: ['input', 'blur']
    }
  },
  phone: {
    required: true,
    message: '请输入电话号码',
    trigger: ['input']
  }
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    }
    else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}
</script>

<template>
  <n-radio-group
    v-model:value="size"
    name="left-size"
    style="margin-bottom: 12px"
  >
    <n-radio-button value="small">
      小
    </n-radio-button>
    <n-radio-button value="medium">
      中
    </n-radio-button>
    <n-radio-button value="large">
      大
    </n-radio-button>
  </n-radio-group>
  <n-form
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
    :size="size"
  >
    <n-form-item label="姓名" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
    </n-form-item>
    <n-form-item label="年龄" path="user.age">
      <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
    </n-form-item>
    <n-form-item label="电话号码" path="phone">
      <n-input v-model:value="formValue.phone" placeholder="电话号码" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>

  <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
</template>
```

## 自定义规则

有时候内置的 trigger 无法满足验证的需要。你可以通过设定自定的 trigger 然后手动触发它来控制验证。

```vue
<script lang="ts" setup>
import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

interface ModelType {
  age: string | null
  password: string | null
  reenteredPassword: string | null
}

const formRef = ref<FormInst | null>(null)
const rPasswordFormItemRef = ref<FormItemInst | null>(null)
const message = useMessage()
const modelRef = ref<ModelType>({
  age: null,
  password: null,
  reenteredPassword: null
})

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!modelRef.value.password
    && modelRef.value.password.startsWith(value)
    && modelRef.value.password.length >= value.length
  )
}

function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === modelRef.value.password
}

const rules: FormRules = {
  age: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('需要年龄')
        }
        else if (!/^\d*$/.test(value)) {
          return new Error('年龄应该为整数')
        }
        else if (Number(value) < 18) {
          return new Error('年龄应该超过十八岁')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: '两次密码输入不一致',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: '两次密码输入不一致',
      trigger: ['blur', 'password-input']
    }
  ]
}

function handlePasswordInput() {
  if (modelRef.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: 'password-input' })
  }
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('验证成功')
    }
    else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}
</script>

<template>
  <n-form ref="formRef" :model="modelRef" :rules="rules">
    <n-form-item path="age" label="年龄">
      <n-input v-model:value="modelRef.age" @keydown.enter.prevent />
    </n-form-item>
    <n-form-item path="password" label="密码">
      <n-input
        v-model:value="modelRef.password"
        type="password"
        @input="handlePasswordInput"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item
      ref="rPasswordFormItemRef"
      first
      path="reenteredPassword"
      label="重复密码"
    >
      <n-input
        v-model:value="modelRef.reenteredPassword"
        :disabled="!modelRef.password"
        type="password"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button
            :disabled="modelRef.age === null"
            round
            type="primary"
            @click="handleValidateButtonClick"
          >
            验证
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>

  <pre>{{ JSON.stringify(modelRef, null, 2) }}</pre>
</template>
```

## 异常值警告

你可能需要对可能异常的值向用户显示警告，但是不希望 `validate` 方法抛出异常， 这种情况下 `FormItemRule` 的 `level` 属性可以帮到你（`level: 'warning'`）。

```vue
<script lang="ts" setup>
import type { FormInst, FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue = ref({
  count: undefined
})

const rules = {
  count: [
    {
      required: true,
      message: '请作答',
      type: 'number',
      trigger: ['input', 'blur']
    },
    {
      trigger: ['input', 'blur'],
      level: 'warning',
      validator(_rule: FormItemRule, value: number) {
        if (value !== 4) {
          return new Error('你确定吗？')
        }
        return true
      }
    }
  ]
} satisfies FormRules

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors, { warnings }) => {
    if (errors) {
      console.error(errors)
      message.error('校验未通过')
    }
    else if (warnings) {
      message.warning('校验通过但是留意还有警告')
      console.warn(warnings)
    }
    else {
      message.success('完美')
    }
  })
}
</script>

<template>
  <n-form ref="formRef" inline :model="formValue" :rules="rules">
    <n-form-item label="茴香豆的回有几种写法？" path="count">
      <n-input-number v-model:value="formValue.count" />
    </n-form-item>
    <n-form-item>
      <n-button attr-type="button" @click="handleValidateClick">
        作答
      </n-button>
    </n-form-item>
  </n-form>
</template>
```

## 自定义验证

你可能需要自定义验证的时机和效果，使用 `validation-status` 和 `feedback` 来控制表项的验证效果。在这种情况下通常不需要提供 `path`。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

function createStatus(value: string) {
  switch (value) {
    case '10:30':
      return undefined
    case '10:29':
      return 'warning'
    default:
      return 'error'
  }
}

function createFeedback(value: string) {
  switch (value) {
    case '10:30':
      return '十点半的飞机已经到了'
    case '10:29':
      return '虽然差不多了，请把时间调到 10:30'
    default:
      return '请把时间调到 10:30'
  }
}

function createTimeForNumber(num: number) {
  return `${Number.parseInt(String(num / 100), 10)}:${num % 100}`
}

const inputValueRef = ref('10:29')
const inputNumberValueRef = ref(1029)
const selectValueRef = ref('10:29')

const selectOptions = [
  {
    label: '10:28',
    value: '10:28'
  },
  {
    label: '10:29',
    value: '10:29'
  },
  {
    label: '10:30',
    value: '10:30'
  }
]

const inputValidationStatus = computed(() => {
  return createStatus(inputValueRef.value)
})

const inputFeedback = computed(() => {
  return createFeedback(inputValueRef.value)
})

const inputNumberValidationStatus = computed(() => {
  return createStatus(createTimeForNumber(inputNumberValueRef.value))
})

const inputNumberFeedback = computed(() => {
  return createFeedback(createTimeForNumber(inputNumberValueRef.value))
})

const selectValidationStatus = computed(() => {
  return createStatus(selectValueRef.value)
})

const selectFeedback = computed(() => {
  return createFeedback(selectValueRef.value)
})
</script>

<template>
  <n-form>
    <n-form-item
      label="飞机场的"
      :validation-status="inputValidationStatus"
      :feedback="inputFeedback"
    >
      <n-input v-model:value="inputValueRef" clearable />
    </n-form-item>
    <n-form-item
      label="飞机场的"
      :validation-status="inputNumberValidationStatus"
    >
      <n-input-number v-model:value="inputNumberValueRef" />
      <template #feedback>
        {{ inputNumberFeedback }}
      </template>
    </n-form-item>
    <n-form-item
      label="飞机场的"
      :validation-status="selectValidationStatus"
      :feedback="selectFeedback"
    >
      <n-select
        v-model:value="selectValueRef"
        :options="selectOptions"
        clearable
      />
    </n-form-item>
  </n-form>
</template>
```

## 国际化

表单的规则支持 `renderMessage`，你可以利用它来完成验证信息的国际化。

```vue
<script lang="ts" setup>
import type { FormRules } from 'naive-ui'
import { ref } from 'vue'

const localeRef = ref('语言1')
const rules: FormRules = {
  input: {
    required: true,
    trigger: ['focus', 'input'],
    renderMessage: () => {
      return localeRef.value === '语言1'
        ? '抽离透传归因分析作为抓手为产品赋能'
        : '方法论是组合拳达到平台化标准'
    }
  }
}
const modelRef = ref({
  input: ''
})
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="localeRef">
      <n-space>
        <n-radio label="语言1" value="语言1" />
        <n-radio label="语言2" value="语言2" />
      </n-space>
    </n-radio-group>
    <n-form :model="modelRef" :rules="rules">
      <n-form-item label="输入点什么去掉 error" path="input">
        <n-input v-model:value="modelRef.input" />
      </n-form-item>
    </n-form>
  </n-space>
</template>
```

## 标签上置

使用 `n-grid` 和 `n-form-item-gi`（grid item）轻松写表单。

```vue
<script setup lang="ts">
import type { FormInst, FormItemRule, FormRules, FormSize } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref<FormSize>('medium')

const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null
})

const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  (v) => {
    return {
      label: v,
      value: v
    }
  }
)

const cascaderOptions = [
  {
    label: 'groode',
    value: 'groode',
    children: [
      {
        label: 'veli good',
        value: 'veli good'
      }
    ]
  }
]

const rules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 inputValue'
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 textareaValue'
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 selectValue'
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 multipleSelectValue'
  } as FormItemRule,
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue'
  } as FormItemRule,
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入 nestedValue.path1'
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入 nestedValue.path2'
    }
  } as FormRules,
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请选择 checkboxGroupValue'
  } as FormItemRule,
  radioGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioGroupValue'
  },
  radioButtonGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioButtonGroupValue'
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 inputNumberValue'
  } as FormItemRule,
  timePickerValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 timePickerValue'
  } as FormItemRule,
  sliderValue: {
    validator(rule: FormItemRule, value: number) {
      return value > 50
    },
    trigger: ['blur', 'change'],
    message: 'sliderValue 需要大于 50'
  },
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请输入 transferValue'
  } as FormItemRule
} as FormRules

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('验证成功')
    }
    else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}
</script>

<template>
  <n-radio-group
    v-model:value="size"
    name="top-size"
    style="margin-bottom: 12px"
  >
    <n-radio-button value="small">
      小
    </n-radio-button>
    <n-radio-button value="medium">
      中
    </n-radio-button>
    <n-radio-button value="large">
      大
    </n-radio-button>
  </n-radio-group>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    :size="size"
    label-placement="top"
  >
    <n-grid :cols="24" :x-gap="24">
      <n-form-item-gi :span="12" label="Input" path="inputValue">
        <n-input v-model:value="model.inputValue" placeholder="Input" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Textarea" path="textareaValue">
        <n-input
          v-model:value="model.textareaValue"
          placeholder="Textarea"
          type="textarea"
          :autosize="{
            minRows: 3,
            maxRows: 5,
          }"
        />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Select" path="selectValue">
        <n-select
          v-model:value="model.selectValue"
          placeholder="Select"
          :options="generalOptions"
        />
      </n-form-item-gi>
      <n-form-item-gi
        :span="12"
        label="Multiple Select"
        path="multipleSelectValue"
      >
        <n-select
          v-model:value="model.multipleSelectValue"
          placeholder="Select"
          :options="generalOptions"
          multiple
        />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Datetime" path="datetimeValue">
        <n-date-picker v-model:value="model.datetimeValue" type="datetime" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Switch" path="switchValue">
        <n-switch v-model:value="model.switchValue" />
      </n-form-item-gi>
      <n-form-item-gi
        :span="12"
        label="Checkbox Group"
        path="checkboxGroupValue"
      >
        <n-checkbox-group v-model:value="model.checkboxGroupValue">
          <n-space>
            <n-checkbox value="Option 1">
              Option 1
            </n-checkbox>
            <n-checkbox value="Option 2">
              Option 2
            </n-checkbox>
            <n-checkbox value="Option 3">
              Option 3
            </n-checkbox>
          </n-space>
        </n-checkbox-group>
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Radio Group" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup1">
          <n-space>
            <n-radio value="Radio 1">
              Radio 1
            </n-radio>
            <n-radio value="Radio 2">
              Radio 2
            </n-radio>
            <n-radio value="Radio 3">
              Radio 3
            </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item-gi>
      <n-form-item-gi
        :span="12"
        label="Radio Button Group"
        path="radioGroupValue"
      >
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
          <n-radio-button value="Radio 1">
            Radio 1
          </n-radio-button>
          <n-radio-button value="Radio 2">
            Radio 2
          </n-radio-button>
          <n-radio-button value="Radio 3">
            Radio 3
          </n-radio-button>
        </n-radio-group>
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Input Number" path="inputNumberValue">
        <n-input-number v-model:value="model.inputNumberValue" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Time Picker" path="timePickerValue">
        <n-time-picker v-model:value="model.timePickerValue" />
      </n-form-item-gi>
      <n-form-item-gi :span="12" label="Slider" path="sliderValue">
        <n-slider v-model:value="model.sliderValue" :step="5" />
      </n-form-item-gi>
      <n-form-item-gi :span="14" label="Transfer" path="transferValue">
        <n-transfer
          v-model:value="model.transferValue"
          style="width: 100%"
          :options="generalOptions"
        />
      </n-form-item-gi>
      <n-form-item-gi :span="5" label="Nested Path" path="nestedValue.path1">
        <n-cascader
          v-model:value="model.nestedValue.path1"
          placeholder="Nested Path 1"
          :options="cascaderOptions"
        />
      </n-form-item-gi>
      <n-form-item-gi :span="5" path="nestedValue.path2">
        <n-select
          v-model:value="model.nestedValue.path2"
          placeholder="Nested Path 2"
          :options="generalOptions"
        />
      </n-form-item-gi>
      <n-gi :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button round type="primary" @click="handleValidateButtonClick">
            验证
          </n-button>
        </div>
      </n-gi>
    </n-grid>
  </n-form>

  <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>
```

## 标签左置

```vue
<script lang="ts" setup>
import type { FormInst, FormItemRule, FormRules, FormSize } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const size = ref<FormSize | undefined>('medium')
const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null
})

const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v
  })
)

const rules: FormRules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 inputValue'
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: '请输入 textareaValue'
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 selectValue'
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: '请选择 multipleSelectValue'
  },
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 datetimeValue'
  },
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入 nestedValue.path1'
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入 nestedValue.path2'
    }
  },
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请选择 checkboxGroupValue'
  },
  radioGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioGroupValue'
  },
  radioButtonGroupValue: {
    required: true,
    trigger: 'change',
    message: '请选择 radioButtonGroupValue'
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 inputNumberValue'
  },
  timePickerValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: '请输入 timePickerValue'
  },
  sliderValue: {
    validator(rule: FormItemRule, value: number) {
      return value > 50
    },
    trigger: ['blur', 'change'],
    message: 'sliderValue 需要大于 50'
  },
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: '请输入 transferValue'
  }
}

function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('验证成功')
    }
    else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}
</script>

<template>
  <n-radio-group
    v-model:value="size"
    name="left-size"
    style="margin-bottom: 12px"
  >
    <n-radio-button value="small">
      小
    </n-radio-button>
    <n-radio-button value="medium">
      中
    </n-radio-button>
    <n-radio-button value="large">
      大
    </n-radio-button>
  </n-radio-group>
  <n-form
    ref="formRef"
    :model="model"
    :rules="rules"
    label-placement="left"
    label-width="auto"
    require-mark-placement="right-hanging"
    :size="size"
    :style="{
      maxWidth: '640px',
    }"
  >
    <n-form-item label="Input" path="inputValue">
      <n-input v-model:value="model.inputValue" placeholder="Input" />
    </n-form-item>
    <n-form-item label="Textarea" path="textareaValue">
      <n-input
        v-model:value="model.textareaValue"
        placeholder="Textarea"
        type="textarea"
        :autosize="{
          minRows: 3,
          maxRows: 5,
        }"
      />
    </n-form-item>
    <n-form-item label="Select" path="selectValue">
      <n-select
        v-model:value="model.selectValue"
        placeholder="Select"
        :options="generalOptions"
      />
    </n-form-item>
    <n-form-item label="Multiple Select" path="multipleSelectValue">
      <n-select
        v-model:value="model.multipleSelectValue"
        placeholder="Select"
        :options="generalOptions"
        multiple
      />
    </n-form-item>
    <n-form-item label="Datetime" path="datetimeValue">
      <n-date-picker v-model:value="model.datetimeValue" type="datetime" />
    </n-form-item>
    <n-form-item label="Switch" path="switchValue">
      <n-switch v-model:value="model.switchValue" />
    </n-form-item>
    <n-form-item label="Checkbox Group" path="checkboxGroupValue">
      <n-checkbox-group v-model:value="model.checkboxGroupValue">
        <n-space>
          <n-checkbox value="Option 1">
            Option 1
          </n-checkbox>
          <n-checkbox value="Option 2">
            Option 2
          </n-checkbox>
          <n-checkbox value="Option 3">
            Option 3
          </n-checkbox>
        </n-space>
      </n-checkbox-group>
    </n-form-item>
    <n-form-item label="Radio Group" path="radioGroupValue">
      <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup1">
        <n-space>
          <n-radio value="Radio 1">
            Radio 1
          </n-radio>
          <n-radio value="Radio 2">
            Radio 2
          </n-radio>
          <n-radio value="Radio 3">
            Radio 3
          </n-radio>
        </n-space>
      </n-radio-group>
    </n-form-item>
    <n-form-item label="Radio Button Group" path="radioGroupValue">
      <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
        <n-radio-button value="Radio 1">
          Radio 1
        </n-radio-button>
        <n-radio-button value="Radio 2">
          Radio 2
        </n-radio-button>
        <n-radio-button value="Radio 3">
          Radio 3
        </n-radio-button>
      </n-radio-group>
    </n-form-item>
    <n-form-item label="Input Number" path="inputNumberValue">
      <n-input-number v-model:value="model.inputNumberValue" />
    </n-form-item>
    <n-form-item label="Time Picker" path="timePickerValue">
      <n-time-picker v-model:value="model.timePickerValue" />
    </n-form-item>
    <n-form-item label="Slider" path="sliderValue">
      <n-slider v-model:value="model.sliderValue" :step="5" />
    </n-form-item>
    <n-form-item label="Transfer" path="transferValue">
      <n-transfer
        v-model:value="model.transferValue"
        :options="generalOptions"
      />
    </n-form-item>
    <n-form-item label="Nested Path" :show-feedback="false">
      <n-grid :cols="2" :x-gap="24">
        <n-form-item-gi path="nestedValue.path1">
          <n-input
            v-model:value="model.nestedValue.path1"
            placeholder="Nested Path 1"
          />
        </n-form-item-gi>
        <n-form-item-gi path="nestedValue.path2">
          <n-select
            v-model:value="model.nestedValue.path2"
            placeholder="Nested Path 2"
            :options="generalOptions"
          />
        </n-form-item-gi>
      </n-grid>
    </n-form-item>
    <div style="display: flex; justify-content: flex-end">
      <n-button round type="primary" @click="handleValidateButtonClick">
        验证
      </n-button>
    </div>
  </n-form>

  <pre>{{ JSON.stringify(model, null, 2) }}</pre>
</template>
```

## 只使用 FormItem

你可以单独使用 `n-form-item`，不在 `n-form` 中验证表项。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const message = '它不在 Form 里面'
const valueRef = ref(message)

const rule = {
  trigger: ['input', 'blur'],
  validator() {
    if (valueRef.value !== message) {
      return new Error(message)
    }
  }
}
</script>

<template>
  <n-form-item label="这是个 FormItem" :rule="rule">
    <n-input v-model:value="valueRef" />
  </n-form-item>
</template>
```

## 异步验证

```vue
<script lang="ts" setup>
import type { FormInst, FormItemRule } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue = ref({
  user: {
    name: 'name',
    age: '15',
    address: '0'
  },
  phone: '1251550092'
})

const rules = {
  user: {
    name: {
      required: true,
      trigger: 'blur',
      validator: (rule: FormItemRule, value: string) => {
        return new Promise<void>((resolve, reject) => {
          if (value !== 'testName') {
            reject(new Error('非正确名字')) // reject with error message
          }
          else {
            resolve()
          }
        })
      }
    },
    age: {
      required: true,
      trigger: 'input',
      validator: (rule: FormItemRule, value: number) => {
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (value <= 16) {
              reject(new Error('非正确年龄'))
            }
            else {
              resolve()
            }
          }, 3000)
        })
      }
    }
  },
  phone: {
    required: true,
    trigger: ['input'],
    validator: (rule: FormItemRule, value: string) => {
      return /^[1]+[3,8]+\d{9}$/.test(value)
    }
  }
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  const messageReactive = message.loading('Verifying', {
    duration: 0
  })
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('Valid')
    }
    else {
      message.error('Invalid')
      console.log('errors', errors)
    }
    messageReactive.destroy()
  })
}
</script>

<template>
  <n-form
    ref="formRef"
    inline
    :label-width="80"
    :model="formValue"
    :rules="rules"
  >
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
    </n-form-item>
    <n-form-item label="Age" path="user.age">
      <n-input v-model:value="formValue.user.age" placeholder="Input Age" />
    </n-form-item>
    <n-form-item label="Adress" path="user.address">
      <n-input
        v-model:value="formValue.user.address"
        placeholder="Input Address"
      />
    </n-form-item>
    <n-form-item label="Phone" path="phone">
      <n-input v-model:value="formValue.phone" placeholder="Phone Number" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleValidateClick">
        Validate
      </n-button>
    </n-form-item>
  </n-form>

  <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
</template>
```

## 表单禁用

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

function genOptions(depth = 2, iterator = 1, prefix = ''): any {
  const length = 12
  const options = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: genOptions(depth, iterator + 1, `${i}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: genOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const model = ref({
  inputValue: null,
  selectValue: null,
  autoCompleteValue: '',
  dynamicTagsValue: ['teacher', 'frontend'],
  cascaderValue: null,
  datetimeValue: null,
  switchValue: false,
  checkboxValue: false,
  checkboxGroupValue: null,
  radioValue: 'Definitely Maybe',
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  colorValue: null,
  sliderValue: 0,
  transferValue: null
})

const updateDisabled = ref(false)

const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map(
  v => ({
    label: v,
    value: v
  })
)

const options = genOptions()

const treeSelectOptions = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Drive My Car',
        key: 'Drive My Car'
      },
      {
        label: 'Michelle',
        key: 'Michelle'
      }
    ]
  }
]

const autoCompleteOptions = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = model.value.autoCompleteValue.split('@')[0]
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="updateDisabled" />
    <n-form
      :model="model"
      label-placement="left"
      :label-width="160"
      :disabled="updateDisabled"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-form-item label="Input" path="inputValue">
        <n-input v-model:value="model.inputValue" placeholder="Input" />
      </n-form-item>
      <n-form-item label="Select" path="selectValue">
        <n-select
          v-model:value="model.selectValue"
          placeholder="Select"
          :options="generalOptions"
        />
      </n-form-item>
      <n-form-item label="Upload" path="uploadValue">
        <n-upload>
          <n-button>Upload file</n-button>
        </n-upload>
      </n-form-item>
      <n-form-item label="Auto Complete" path="autoCompleteValue">
        <n-auto-complete
          v-model:value="model.autoCompleteValue"
          :options="autoCompleteOptions"
          placeholder="Email"
        />
      </n-form-item>
      <n-form-item label="Dynamic Tags" path="dynamicTagsValue">
        <n-dynamic-tags v-model:value="model.dynamicTagsValue" />
      </n-form-item>
      <n-form-item label="Tree Select" path="treeSelectValue">
        <n-tree-select
          :options="treeSelectOptions"
          default-value="Drive My Car"
        />
      </n-form-item>
      <n-form-item label="Cascader" path="cascaderValue">
        <n-cascader
          v-model:value="model.cascaderValue"
          placeholder="Cascader"
          :options="options"
          check-strategy="child"
          size="medium"
        />
      </n-form-item>
      <n-form-item label="Datetime" path="datetimeValue">
        <n-date-picker v-model:value="model.datetimeValue" type="datetime" />
      </n-form-item>
      <n-form-item label="Switch" path="switchValue">
        <n-switch v-model:value="model.switchValue" />
      </n-form-item>
      <n-form-item label="Checkbox" path="checkboxValue">
        <n-checkbox v-model:checked="model.checkboxValue">
          Checkbox
        </n-checkbox>
      </n-form-item>
      <n-form-item label="Checkbox Group" path="checkboxGroupValue">
        <n-checkbox-group v-model:value="model.checkboxGroupValue">
          <n-space>
            <n-checkbox value="Option 1">
              Option 1
            </n-checkbox>
            <n-checkbox value="Option 2">
              Option 2
            </n-checkbox>
            <n-checkbox value="Option 3">
              Option 3
            </n-checkbox>
          </n-space>
        </n-checkbox-group>
      </n-form-item>
      <n-form-item label="Radio" path="radioValue">
        <n-radio
          :checked="model.radioValue === 'Definitely Maybe'"
          value="Definitely Maybe"
          name="basic-demo"
        >
          Definitely Maybe
        </n-radio>
      </n-form-item>
      <n-form-item label="Radio Group" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
          <n-radio value="Radio 1">
            Radio 1
          </n-radio>
          <n-radio value="Radio 2">
            Radio 2
          </n-radio>
          <n-radio value="Radio 3">
            Radio 3
          </n-radio>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="Radio Button Group" path="radioGroupValue">
        <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
          <n-radio-button value="Radio 1">
            Radio 1
          </n-radio-button>
          <n-radio-button value="Radio 2">
            Radio 2
          </n-radio-button>
          <n-radio-button value="Radio 3">
            Radio 3
          </n-radio-button>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="Input Number" path="inputNumberValue">
        <n-input-number v-model:value="model.inputNumberValue" />
      </n-form-item>
      <n-form-item label="Time Picker" path="timePickerValue">
        <n-time-picker v-model:value="model.timePickerValue" />
      </n-form-item>
      <n-form-item label="Color Picker" path="colorValue">
        <n-color-picker v-model:value="model.colorValue" />
      </n-form-item>
      <n-form-item label="Slider" path="sliderValue">
        <n-slider v-model:value="model.sliderValue" :step="5" />
      </n-form-item>
      <n-form-item label="Transfer" path="transferValue">
        <n-transfer
          v-model:value="model.transferValue"
          :options="generalOptions"
        />
      </n-form-item>
    </n-form>
  </n-space>
</template>
```

## 显示/隐藏标签

若 `show-label` 在 `n-form-item` 上未被设定，则会继承 `n-form` 的 `show-label`，默认为 `true`。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const formShowLabel = ref(true)
const formItemShowLabel = ref(true)
const formValue = ref({
  user: {
    name: '',
    age: ''
  },
  phone: ''
})
</script>

<template>
  <n-space vertical>
    <n-space>Form:<n-switch v-model:value="formShowLabel" /></n-space>
    <n-space>Form Item:<n-switch v-model:value="formItemShowLabel" /></n-space>
    <n-form :model="formValue" :show-label="formShowLabel">
      <n-form-item
        label="姓名"
        path="user.name"
        :show-label="formItemShowLabel"
      >
        <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
      </n-form-item>
      <n-form-item label="年龄" path="user.age">
        <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
      </n-form-item>
      <n-form-item label="电话号码" path="user.phone">
        <n-input v-model:value="formValue.phone" placeholder="电话号码" />
      </n-form-item>
    </n-form>
  </n-space>
</template>
```

## 只执行部分规则

在验证的过程中，你可能并不总想验证全部的表单项，你可以使用 `form.validate` 的第二个参数控制应用的规则。

```vue
<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { ref } from 'vue'

const formInstRef = ref<FormInst | null>(null)
const model = ref({
  fieldA: '',
  fieldB: ''
})

const rules = {
  fieldA: {
    key: 'a',
    required: true,
    min: 3,
    message: '最短长度为 3'
  },
  fieldB: {
    required: true,
    min: 2,
    message: '最短长度为 2'
  }
}

function clear() {
  formInstRef.value?.restoreValidation()
}

function validateAll() {
  formInstRef.value?.validate((errors) => {
    if (errors) {
      console.error(errors)
    }
  })
}

function validatePartial() {
  formInstRef.value?.validate(
    (errors) => {
      if (errors) {
        console.error(errors)
      }
    },
    (rule) => {
      return rule?.key === 'a'
    }
  )
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="validatePartial">
        检查第一个字段
      </n-button>
      <n-button @click="validateAll">
        执行全部规则
      </n-button>
      <n-button @click="clear">
        清空验证
      </n-button>
    </n-space>
    <n-form ref="formInstRef" :model="model" :rules="rules">
      <n-form-item label="最短长度为 3" path="fieldA">
        <n-input v-model:value="model.fieldA" />
      </n-form-item>
      <n-form-item label="最短长度为 2" path="fieldB">
        <n-input v-model:value="model.fieldB" />
      </n-form-item>
    </n-form>
  </n-space>
</template>
```

## 自定义默认验证信息

你可以自定义 `async-validator` 的默认验证信息，不过考虑这个信息和代码耦合很严重，估计对于中文的页面没什么价值。

```vue
<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const formValue = ref({
  user: {
    name: ''
  }
})

const messages = {
  required: '我们非常需要 %s'
}

const rules = {
  user: {
    name: {
      required: true,
      trigger: 'blur'
    }
  }
}

function handleValidateClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success('好')
    }
    else {
      console.log(errors)
      message.error('不好')
    }
  })
}
</script>

<template>
  <n-form
    ref="formRef"
    :model="formValue"
    :rules="rules"
    :validate-messages="messages"
  >
    <n-form-item label="Name" path="user.name">
      <n-input v-model:value="formValue.user.name" placeholder="Input Name" />
    </n-form-item>
    <n-form-item>
      <n-button @click="handleValidateClick">
        验证
      </n-button>
    </n-form-item>
  </n-form>
  <pre>{{ JSON.stringify(formValue, null, 2) }}</pre>
</template>
```

## 动态表单

动态增加、删除表单项。

```vue
<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { reactive, ref } from 'vue'

const formRef = ref<FormInst | null>(null)

const dynamicForm = reactive({
  name: '',
  hobbies: [{ hobby: '' }]
})

function removeItem(index: number) {
  dynamicForm.hobbies.splice(index, 1)
}

function addItem() {
  dynamicForm.hobbies.push({ hobby: '' })
}

function handleValidateClick() {
  formRef.value?.validate((errors) => {
    if (!errors) {
      console.log('验证通过')
    }
    else {
      console.log(errors)
    }
  })
}
</script>

<template>
  <n-form ref="formRef" :model="dynamicForm" :style="{ maxWidth: '640px' }">
    <n-form-item
      label="姓名"
      path="name"
      :rule="{
        required: true,
        message: '请输入姓名',
        trigger: ['input', 'blur'],
      }"
    >
      <n-input v-model:value="dynamicForm.name" clearable />
    </n-form-item>

    <n-form-item
      v-for="(item, index) in dynamicForm.hobbies"
      :key="index"
      :label="`爱好${index + 1}`"
      :path="`hobbies[${index}].hobby`"
      :rule="{
        required: true,
        message: `请输入爱好${index + 1}`,
        trigger: ['input', 'blur'],
      }"
    >
      <n-input v-model:value="item.hobby" clearable />
      <n-button style="margin-left: 12px" @click="removeItem(index)">
        删除
      </n-button>
    </n-form-item>

    <n-form-item>
      <n-space>
        <n-button attr-type="button" @click="handleValidateClick">
          验证
        </n-button>
        <n-button attr-type="button" @click="addItem">
          增加
        </n-button>
      </n-space>
    </n-form-item>
  </n-form>
</template>
```

## 自定义反馈样式

使用 `feedback-style` 和 `feedback-class` 可以自定义反馈信息的样式。

```vue
<script lang="ts" setup>
import { reactive } from 'vue'

interface FormValue {
  input: string | null
}

const formValue: FormValue = reactive({
  input: null
})
</script>

<template>
  <n-form :model="formValue">
    <n-form-item
      :rule="{
        required: true,
        message: '居中的 feedback',
        type: 'string',
        trigger: ['input', 'blur'],
      }"
      label="Feedback 居中"
      path="input"
      feedback-style="text-align: center;"
    >
      <n-input v-model:value="formValue.input" />
    </n-form-item>
  </n-form>
</template>
```

