# 数值动画 Number Animation - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import type { NumberAnimationInst } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function handleClick() {
  numberAnimationInstRef.value?.play()
}
</script>

<template>
  <n-statistic label="你一共处理了" tabular-nums>
    <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039" />
    <template #suffix>
      条群消息
    </template>
  </n-statistic>
  <n-space vertical>
    花时间、花精力、花心思，愿你每一份努力都不负所望
    <n-button @click="handleClick">
      播放
    </n-button>
  </n-space>
</template>
```

## 精度

使用 `precision` 设定精度。

```vue
<script lang="ts" setup>
import type { NumberAnimationInst } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function handleClick() {
  numberAnimationInstRef.value?.play()
}
</script>

<template>
  <n-statistic label="JJJJNM" tabular-nums>
    <n-number-animation
      ref="numberAnimationInstRef"
      :from="0.0"
      :to="24.0"
      :active="false"
      :precision="2"
    />
  </n-statistic>
  <n-button @click="handleClick">
    播放
  </n-button>
</template>
```

## 分隔符

欢乐豆太多的时候容易数不清有几位。

```vue
<script lang="ts" setup>
import type { NumberAnimationInst } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function handleClick() {
  numberAnimationInstRef.value?.play()
}
</script>

<template>
  <n-statistic label="一个小目标" tabular-nums>
    <n-number-animation
      ref="numberAnimationInstRef"
      show-separator
      :from="0"
      :to="100000000"
      :active="false"
    />
  </n-statistic>
  <n-button @click="handleClick">
    播放
  </n-button>
</template>
```

## 国际化

使用 `locale` 设定国际化语言。

需要注意的是，该功能使用了 `Intl` API，兼容性请参考 [format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format) 和 [formatToParts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts)。

```vue
<script lang="ts" setup>
import type { NumberAnimationInst } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
function handleClick() {
  numberAnimationInstRef.value?.play()
}
</script>

<template>
  <n-statistic label="你可能不知道俄语的小数点是逗号" tabular-nums>
    <n-number-animation
      ref="numberAnimationInstRef"
      :from="0.0"
      :to="699700.699"
      :active="false"
      :precision="3"
      locale="ru-RU"
      show-separator
    />
  </n-statistic>
  <n-button @click="handleClick">
    播放
  </n-button>
</template>
```

## 结束的回调

```vue
<script lang="ts" setup>
import type { NumberAnimationInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
const message = useMessage()

function handleClick() {
  numberAnimationInstRef.value?.play()
}

function handleFinish() {
  message.success('Finished')
}
</script>

<template>
  <n-statistic label="完成之后发个消息" tabular-nums>
    <n-number-animation
      ref="numberAnimationInstRef"
      show-separator
      :from="0"
      :to="100000000"
      :active="false"
      @finish="handleFinish"
    />
  </n-statistic>
  <n-button @click="handleClick">
    开始
  </n-button>
</template>
```

