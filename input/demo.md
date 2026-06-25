# 文本输入 Input - 演示示例

## 基础用法

文本输入的基础用法。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <n-space vertical>
    <n-input v-model:value="value" type="text" placeholder="基本的 Input" />
    <n-input
      v-model:value="value"
      type="textarea"
      placeholder="基本的 Textarea"
    />
  </n-space>
</template>
```

## 尺寸

```vue
<template>
  <n-space vertical>
    <n-input type="text" size="tiny" placeholder="很小" />
    <n-input type="text" size="small" placeholder="小" />
    <n-input type="text" placeholder="中" />
    <n-input type="text" size="large" placeholder="大" />
  </n-space>
</template>
```

## 圆角

文本输入可以是圆角的。

```vue
<template>
  <n-space vertical>
    <n-input size="small" round placeholder="小" />
    <n-input round placeholder="中" />
    <n-input size="large" round placeholder="大" />
  </n-space>
</template>
```

## 前缀 & 后缀

在前缀后缀添加内容。

```vue
<script lang="ts" setup>
import { FlashOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-space vertical>
    <n-input placeholder="搜索">
      <template #prefix>
        <n-icon :component="FlashOutline" />
      </template>
    </n-input>
    <n-input round placeholder="100,000,000">
      <template #suffix>
        元
      </template>
    </n-input>
    <n-input round placeholder="搜索">
      <template #suffix>
        <n-icon :component="FlashOutline" />
      </template>
    </n-input>
  </n-space>
</template>
```

## 加载状态

`input` 支持加载状态。

注意：同时使用 `clearable`、`suffix` 和 `loading`，且 `loading` 为 `false` 时，清除按钮和后缀之间会有空白，如果想去除空白，停止加载时 `loading` 应当设置为 `undefined`。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <n-input
    v-model:value="value"
    type="text"
    placeholder="基本的 Input"
    loading
  />
</template>
```

## 密码

```vue
<script lang="ts" setup>
import { Glasses, GlassesOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-input
      type="password"
      show-password-on="mousedown"
      placeholder="密码"
      :maxlength="8"
    />
    <n-input
      type="password"
      show-password-on="click"
      placeholder="自定义密码图标"
      :maxlength="8"
    >
      <template #password-visible-icon>
        <n-icon :size="16" :component="GlassesOutline" />
      </template>
      <template #password-invisible-icon>
        <n-icon :size="16" :component="Glasses" />
      </template>
    </n-input>
  </n-space>
</template>
```

## 禁用

文本输入可以被禁用。

```vue
<script lang="ts" setup>
import { FlashOutline } from '@vicons/ionicons5'
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space vertical>
    <n-input
      type="text"
      size="small"
      placeholder="噢！它被禁用了。"
      :disabled="!active"
      round
    />
    <n-input
      type="textarea"
      size="small"
      placeholder="噢！它被禁用了。"
      :disabled="!active"
      round
    />
    <n-input pair separator="to" clearable :disabled="!active">
      <template #suffix>
        <n-icon :component="FlashOutline" />
      </template>
    </n-input>
    <n-switch v-model:value="active" />
  </n-space>
</template>
```

## 可清除

让输入值可以清除（当有值的时候）。

```vue
<script lang="ts" setup>
import { TrashBinOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-space vertical>
    <n-input type="text" placeholder="可以清除" clearable />
    <n-input type="password" placeholder="可以清除" clearable />
    <n-input type="textarea" placeholder="可以清除" round clearable />
    <n-input type="text" placeholder="自定义图标" round clearable>
      <template #clear-icon>
        <n-icon :component="TrashBinOutline" />
      </template>
    </n-input>
  </n-space>
</template>
```

## 自动调整尺寸

自动调整尺寸。

```vue
<template>
  <n-space vertical>
    <n-input placeholder="自动调整尺寸" autosize style="min-width: 50%" />
    <n-input
      placeholder="自动调整尺寸"
      type="textarea"
      size="small"
      :autosize="{
        minRows: 3,
        maxRows: 5,
      }"
    />
    <n-input
      type="textarea"
      placeholder="自动调整尺寸"
      :autosize="{
        minRows: 3,
      }"
    />
  </n-space>
</template>
```

## 输入成对值

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const placeholder: string | [string, string] | undefined = ['从', '到']

function handleInputBlur() {
  message.info('输入成对值：Blur')
}

function handleInputFocus() {
  message.info('输入成对值：Focus')
}

function handleInputInput() {
  message.info('输入成对值：Input')
}

function handleInputChange() {
  message.info('输入成对值：Change')
}
</script>

<template>
  <n-input
    pair
    separator="-"
    :placeholder="placeholder"
    clearable
    @blur="handleInputBlur"
    @focus="handleInputFocus"
    @change="handleInputChange"
    @update:value="handleInputInput"
  />
</template>
```

## 输入组

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const selectOptions = ref([
  {
    label: 'option',
    value: 'option'
  }
])

const cascaderOptions = ref([
  {
    label: 'option-1',
    value: 'option-1',
    children: [
      {
        label: 'option-1-1',
        value: 'option-1-1'
      }
    ]
  }
])
</script>

<template>
  <n-space vertical>
    <n-input-group>
      <n-input :style="{ width: '33%' }" />
      <n-input-number :style="{ width: '33%' }" />
      <n-input :style="{ width: '33%' }" />
    </n-input-group>
    <n-input-group>
      <n-input-group-label>https://www.</n-input-group-label>
      <n-input :style="{ width: '33%' }" />
      <n-input-group-label>.com</n-input-group-label>
    </n-input-group>
    <n-input-group>
      <n-select :style="{ width: '33%' }" :options="selectOptions" />
      <n-cascader :style="{ width: '33%' }" :options="cascaderOptions" />
      <n-select :style="{ width: '33%' }" multiple :options="selectOptions" />
    </n-input-group>
    <n-input-group>
      <n-button type="primary">
        搜索
      </n-button>
      <n-input :style="{ width: '50%' }" />
      <n-button type="primary" ghost>
        搜索
      </n-button>
    </n-input-group>
    <n-input-group>
      <n-date-picker />
      <n-time-picker />
    </n-input-group>
  </n-space>
</template>
```

## 被动激活

如果需要在 focus 之后使用回车键来激活输入，可以设定 `passively-activated`。 (使用 tab 键来聚焦这些输入)

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleFocus() {
  message.info('[Event focus]')
}

function handleBlur() {
  message.info('[Event blur]')
}

function handleChange(v: string) {
  message.info(`[Event change]: ${v}`)
}

function handleKeyUp() {
  message.info('[Event keyup]')
}

function handleInput(v: string) {
  message.info(`[Event input]: ${v}`)
}
</script>

<template>
  <n-space vertical>
    <n-input
      placeholder="操作来触发事件"
      passively-activated
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyUp"
      @input="handleInput"
    />
    <n-input
      type="textarea"
      placeholder="操作来触发事件"
      passively-activated
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyUp"
      @input="handleInput"
    />
    <n-input
      pair
      separator="to"
      passively-activated
      @blur="handleBlur"
      @focus="handleFocus"
    />
  </n-space>
</template>
```

## 字数限制

惜字如金。

```vue
<template>
  <n-space vertical>
    <n-input maxlength="30" show-count clearable />
    <n-input default-value="哦" show-count clearable>
      <template #count="{ value }">
        {{ value.includes('哦') ? '99+' : value.length }}
      </template>
    </n-input>
    <n-input type="textarea" maxlength="30" show-count />
    <n-input type="textarea" default-value="啥" show-count>
      <template #count="{ value }">
        {{ value.includes('啥') ? '99+' : value.length }}
      </template>
    </n-input>
  </n-space>
</template>
```

## 手动操作

清除、聚焦、失焦、选中、滚动。

```vue
<script lang="ts" setup>
import type { InputInst } from 'naive-ui'
import { ref } from 'vue'

const inputInstRef = ref<InputInst | null>(null)
const inputValue = ref('马儿乖，马儿好，马儿光跑不吃草。'.repeat(4))

function handleClear() {
  inputInstRef.value?.clear()
}

function handleFocus() {
  inputInstRef.value?.focus()
}

function handleBlur() {
  inputInstRef.value?.blur()
}

function handleSelect() {
  inputInstRef.value?.select()
}

function handleScrollEnd() {
  inputInstRef.value?.scrollTo({
    behavior: 'smooth',
    left: 10000
  })
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="handleClear">
        Clear
      </n-button>
      <n-button @click="handleFocus">
        Focus
      </n-button>
      <n-button :focusable="false" @click="handleBlur">
        Blur
      </n-button>
      <n-button :focusable="false" @click="handleSelect">
        Select
      </n-button>
      <n-button :focusable="false" @click="handleScrollEnd">
        ScrollToEnd
      </n-button>
    </n-space>
    <n-input ref="inputInstRef" v-model:value="inputValue" />
  </n-space>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleFocus() {
  message.info('[Event focus]')
}

function handleBlur() {
  message.info('[Event blur]')
}

function handleChange(v: string) {
  message.info(`[Event change]: ${v}`)
}

function handleKeyUp() {
  message.info('[Event keyup]')
}

function handleInput(v: string) {
  message.info(`[Event input]: ${v}`)
}
</script>

<template>
  <n-space vertical>
    <n-input
      placeholder="触发事件"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyUp"
      @input="handleInput"
    />
    <n-input
      type="textarea"
      placeholder="触发事件"
      @blur="handleBlur"
      @focus="handleFocus"
      @change="handleChange"
      @keyup="handleKeyUp"
      @input="handleInput"
    />
  </n-space>
</template>
```

## 原生属性

`input` 有一些比较特殊的 DOM 属性，有时候你可能会想使用，比如 `auto-complete` 或者特殊的 type。你可以使用 `input-props` 设定。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>

<template>
  <n-space vertical>
    <n-input
      v-model:value="value"
      :input-props="{ type: 'url' }"
      placeholder="URL"
    />
    <n-input
      v-model:value="value"
      :input-props="{ type: 'tel' }"
      placeholder="Tel"
    />
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-input status="warning" placeholder="" />
    <n-input status="error" placeholder="" />
  </n-space>
</template>
```

## 只允许输入特定值

使用 `allow-input` 限制输入框的输入格式，你可以使用它来达到 `trim` 的效果。

```vue
<script lang="ts" setup>
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value)
function noSideSpace(value: string) {
  return !value.startsWith(' ') && !value.endsWith(' ')
}
</script>

<template>
  <n-space vertical>
    <n-input
      type="text"
      :allow-input="onlyAllowNumber"
      placeholder="只能输入数字"
    />
    <n-input
      type="textarea"
      :allow-input="noSideSpace"
      placeholder="没有前后空格"
    />
  </n-space>
</template>
```

## 字素计数

浏览器默认的 `maxlength` 和 `minlength` 以及 naive-ui 自带的字数统计功能并不能准确地拆分所有的字符串，你可以使用 `count-graphemes` 属性来精确的测量文字长度。

```vue
<script lang="ts" setup>
import GraphemeSplitter from 'grapheme-splitter'

const splitter = new GraphemeSplitter()
const countGraphemes = (value: string) => splitter.countGraphemes(value)
</script>

<template>
  <n-form>
    <n-form-item label="默认表现">
      <n-input default-value="🌷🏳️‍🌈" show-count :maxlength="12" />
    </n-form-item>
    <n-form-item label="正确表现">
      <n-input
        default-value="🌷🏳️‍🌈"
        show-count
        :maxlength="12"
        :count-graphemes="countGraphemes"
      />
    </n-form-item>
  </n-form>
</template>
```

