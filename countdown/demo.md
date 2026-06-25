# 倒计时 Countdown - 演示示例

## 基础用法

一个字符串而已。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space>
    <span style="font-variant-numeric: tabular-nums">
      <n-countdown :duration="5000" :active="active" />
    </span>
    <n-switch v-model:value="active" />
  </n-space>
</template>
```

## 精度

知道的太多对你没有好处。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space>
    <span style="font-variant-numeric: tabular-nums; white-space: nowrap">
      <n-countdown :duration="3600 * 1000" :active="active" />
    </span>
    <span style="font-variant-numeric: tabular-nums; white-space: nowrap">
      <n-countdown :duration="3600 * 1000" :active="active" :precision="1" />
    </span>
    <span style="font-variant-numeric: tabular-nums; white-space: nowrap">
      <n-countdown :duration="3600 * 1000" :active="active" :precision="2" />
    </span>
    <span style="font-variant-numeric: tabular-nums; white-space: nowrap">
      <n-countdown :duration="3600 * 1000" :active="active" :precision="3" />
    </span>
    <n-switch v-model:value="active" />
  </n-space>
</template>
```

## 自定义倒计时

你们的产品经理可能想玩很多花样，所以就安排一下。

```vue
<script lang="ts" setup>
import type { CountdownProps } from 'naive-ui'
import { ref } from 'vue'

const renderCountdown: CountdownProps['render'] = ({
  hours,
  minutes,
  seconds
}) => {
  return `烫烫烫${String(hours).padStart(2, '0')}锟斤拷${String(
    minutes
  ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const active = ref(false)
</script>

<template>
  <n-space item-style="display: flex; align-items: center;">
    <n-statistic label="大哥你玩技术，玩它有啥用啊" tabular-nums>
      <n-countdown
        :render="renderCountdown"
        :duration="996 * 1000"
        :active="active"
      />
    </n-statistic>
    <n-switch v-model:value="active" />
  </n-space>
</template>
```

## 重置

青春是挽不回的水，转眼消失在指尖。

```vue
<script lang="ts" setup>
import type { CountdownInst } from 'naive-ui'
import { ref } from 'vue'

const active = ref(true)
const countdown = ref<CountdownInst | null>(null)

function handleReset() {
  countdown.value?.reset()
}
</script>

<template>
  <n-space>
    <span style="font-variant-numeric: tabular-nums">
      <n-countdown ref="countdown" :duration="86400000" :active="active" />
    </span>
    <n-button size="tiny" @click="handleReset">
      重置
    </n-button>
    <n-switch v-model:value="active" />
  </n-space>
</template>
```

