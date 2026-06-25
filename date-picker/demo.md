# 日期选择器 Date Picker - 演示示例

## 日期

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="date" />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 日期时间

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="datetime" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 使用格式化的值

实话说我不喜欢这个 feature，因为多数情况下，传递时间字符串不是个最佳实践。但是现实世界是复杂的，我希望这个功能能帮你解决一些棘手的问题，比如为了后端传过来的数据买账。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const formattedValue = ref('2007.06.30 12:08:55')
</script>

<template>
  <pre>{{ formattedValue }}</pre>
  <n-date-picker
    v-model:formatted-value="formattedValue"
    value-format="yyyy.MM.dd HH:mm:ss"
    type="datetime"
    clearable
  />
</template>
```

## 日期范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const range = ref<[number, number]>([1183135260000, Date.now()])
</script>

<template>
  <n-date-picker v-model:value="range" type="daterange" clearable />
  <pre>{{ JSON.stringify(range) }}</pre>
</template>
```

## 日期时间范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const range = ref<[number, number]>([1183135260000, Date.now()])
</script>

<template>
  <n-date-picker v-model:value="range" type="datetimerange" clearable />
  <pre>{{ JSON.stringify(range) }}</pre>
</template>
```

## 月份

可以使用 `month-format` 属性指定面板中月份的显示方式。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="timestamp" type="month" clearable />
    <n-date-picker
      v-model:value="timestamp"
      type="month"
      format="y年 M月"
      year-format="y年"
      month-format="M月"
      clearable
    />
    <pre>{{ JSON.stringify(timestamp) }}</pre>
  </n-space>
</template>
```

## 月份范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref<[number, number]>([1183135260000, Date.now()])
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="monthrange" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 年份

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="year" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 年份范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref<[number, number]>([1183135260000, Date.now()])
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="yearrange" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 季度

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="quarter" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 季度范围

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref<[number, number]>([1183135260000, Date.now()])
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="quarterrange" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 周

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(1183135260000)
</script>

<template>
  <n-date-picker v-model:value="timestamp" type="week" clearable />
  <pre>{{ JSON.stringify(timestamp) }}</pre>
</template>
```

## 尺寸

有 `small`、`medium` 和 `large` 尺寸。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(null)
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="timestamp" size="small" type="date" />
    <n-date-picker v-model:value="timestamp" size="medium" type="date" />
    <n-date-picker v-model:value="timestamp" size="large" type="date" />
  </n-space>
</template>
```

## 默认时间

你可以设定选择某个日期后默认使用的时间。

```vue
<script setup lang="ts">
import { format, isAfter, isToday } from 'date-fns'

function getSingleDefaultTime(timestamp: number): string {
  const now = new Date()

  if (isToday(timestamp)) {
    return format(new Date(), 'HH:mm:ss')
  }
  if (isAfter(now, timestamp)) {
    return '23:59:59'
  }
  else {
    return '00:00:00'
  }
}

function getRangeDefaultTime(timestamp: number, position: 'start' | 'end'): string {
  const now = new Date()

  if (position === 'start') {
    return '00:00:00'
  }

  if (isToday(timestamp)) {
    return format(new Date(), 'HH:mm:ss')
  }
  if (isAfter(now, timestamp)) {
    return '23:59:59'
  }
  else {
    return '00:00:00'
  }
}
</script>

<template>
  <n-space vertical>
    <n-date-picker type="datetime" clearable default-time="13:22:11" />
    <n-date-picker type="datetime" clearable default-time="16:00:00" />
    <n-date-picker
      type="datetime"
      clearable
      :default-time="getSingleDefaultTime"
    />
    <n-date-picker type="datetimerange" clearable default-time="13:22:11" />
    <n-date-picker
      type="datetimerange"
      clearable
      :default-time="['16:00:00', undefined]"
    />
    <n-date-picker
      type="datetimerange"
      clearable
      :default-time="['13:22:11', '16:00:00']"
    />
    <n-date-picker
      type="datetimerange"
      clearable
      :default-time="getRangeDefaultTime"
    />
  </n-space>
</template>
```

## 禁用

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const datetime = ref(null)
const date = ref(null)
const datetimerange = ref(null)
const daterange = ref(null)
const disabled = ref(true)
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="date" type="date" :disabled="disabled" />
    <n-date-picker
      v-model:value="datetime"
      type="datetime"
      :disabled="disabled"
    />
    <n-date-picker
      v-model:value="daterange"
      :disabled="disabled"
      type="daterange"
    />
    <n-date-picker
      v-model:value="datetimerange"
      :disabled="disabled"
      type="datetimerange"
    />
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
```

## 禁用特定时间

```vue
<script lang="ts" setup>
import { startOfDay } from 'date-fns'

const d = 86400000
const h = 3600000
const m = 60000
const s = 1000

function dateDisabled(ts: number) {
  const date = new Date(ts).getDate()
  return date < 15
}

function timeDisabled(ts: number) {
  const date = new Date(ts).getDate()
  return {
    isHourDisabled: (hour: number) => {
      return date >= 15 && hour < 12
    }
  }
}

function isRangeDateDisabled(
  ts: number,
  type: 'start' | 'end',
  range: [number, number] | null
) {
  if (type === 'start' && range !== null) {
    return startOfDay(range[1]).valueOf() - startOfDay(ts).valueOf() <= d * 6
  }
  if (type === 'end' && range !== null) {
    return startOfDay(ts).valueOf() - startOfDay(range[0]).valueOf() <= d * 6
  }
  return false
}

function isRangeTimeDisabled(
  current: number,
  type: 'start' | 'end',
  range: [number, number]
) {
  if (type === 'start') {
    return {
      isHourDisabled: (hour: number) => {
        return range[1] - startOfDay(range[0]).valueOf() - hour * h < d * 7
      },
      isMinuteDisabled: (minute: number, hour: number | null) => {
        if (hour === null)
          return false
        return (
          range[1] - startOfDay(range[0]).valueOf() - hour * h - minute * m
          < d * 7
        )
      },
      isSecondDisabled: (
        second: number,
        minute: number | null,
        hour: number | null
      ) => {
        if (hour === null || minute === null)
          return false
        return (
          range[1]
          - startOfDay(range[0]).valueOf()
          - hour * h
          - minute * m
          - second * s
          < d * 7
        )
      }
    }
  }
  else {
    return {
      isHourDisabled: (hour: number) => {
        return (
          startOfDay(range[1]).valueOf() + hour * h + (h - s) - range[0] < d * 7
        )
      },
      isMinuteDisabled: (minute: number, hour: number | null) => {
        return (
          startOfDay(range[1]).valueOf()
          + Number(hour) * h
          + minute * m
          + (m - s)
          - range[0]
          < d * 7
        )
      },
      isSecondDisabled: (
        second: number,
        minute: number | null,
        hour: number | null
      ) => {
        if (hour === null || minute === null)
          return false
        return (
          startOfDay(range[1]).valueOf()
          + hour * h
          + minute * m
          + second * s
          - range[0]
          < d * 7
        )
      }
    }
  }
}

function disablePreviousDate(ts: number) {
  return ts > Date.now()
}
</script>

<template>
  <n-space vertical>
    禁用上半月
    <n-date-picker
      type="date"
      :default-value="Date.now()"
      :is-date-disabled="dateDisabled"
    />
    禁用上半月 & 下半个月的上午
    <n-date-picker
      type="datetime"
      :default-value="Date.now()"
      :is-date-disabled="dateDisabled"
      :is-time-disabled="timeDisabled"
    />
    间隔至少七天
    <n-date-picker
      type="daterange"
      :default-value="[Date.now(), Date.now() + 86400000]"
      :is-date-disabled="isRangeDateDisabled"
    />
    间隔至少七天
    <n-date-picker
      type="datetimerange"
      :default-value="[Date.now(), Date.now() + 86400000]"
      :is-date-disabled="isRangeDateDisabled"
      :is-time-disabled="isRangeTimeDisabled"
    />
    只能选过去的时间
    <n-date-picker
      type="daterange"
      :default-value="[Date.now(), Date.now() + 86400000]"
      :is-date-disabled="disablePreviousDate"
    />
  </n-space>
</template>
```

## 操作

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const ts1 = ref(null)
const ts2 = ref(1183135260000)
const range1 = ref(null)
const range2 = ref(null)
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="ts1" type="date" :actions="['now']" />
    <n-date-picker v-model:value="ts2" type="datetime" :actions="['now']" />
    <n-date-picker
      v-model:value="range1"
      update-value-on-close
      type="daterange"
      :actions="null"
    />
    <n-date-picker
      v-model:value="range2"
      update-value-on-close
      type="datetimerange"
      :actions="['clear']"
    />
  </n-space>
</template>
```

## 快捷选项

你可以自定义一些快捷按钮.

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const ts1 = ref(null)
const ts2 = ref(1183135260000)
const range1 = ref(null)
const range2 = ref(null)
const shortcuts = {
  亲爱的生日: 1631203200000,
  派对日: 1629216000000,
  昨天: () => new Date().getTime() - 24 * 60 * 60 * 1000
}
const rangeShortcuts = {
  快乐假期: [1629216000000, 1631203200000] as const,
  近2小时: () => {
    const cur = new Date().getTime()
    return [cur - 2 * 60 * 60 * 1000, cur] as const
  }
}
</script>

<template>
  <n-space vertical>
    <n-date-picker v-model:value="ts1" type="date" :shortcuts="shortcuts" />
    <n-date-picker v-model:value="ts2" type="datetime" :shortcuts="shortcuts" />
    <n-date-picker
      v-model:value="range1"
      type="daterange"
      :shortcuts="rangeShortcuts"
      :update-value-on-close="true"
    />
    <n-date-picker
      v-model:value="range2"
      type="datetimerange"
      :shortcuts="rangeShortcuts"
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
const datetime = ref(1183135260000)
const date = ref(null)
const datetimerange = ref(null)
const daterange = ref(null)
const disabled = ref(false)

function onBlur1() {
  message.info('Blur-1')
}

function onChange1(v: number) {
  message.info(`Change-1 ${v}`)
}

function onBlur2() {
  message.error('Blur-2')
}

function onChange2(v: number) {
  message.error(`Change-2 ${v}`)
}

function onBlur3() {
  message.warning('Blur-3')
}

function onChange3(v: number) {
  message.warning(`Change-3 ${v}`)
}

function onBlur4() {
  message.success('Blur-4')
}

function onChange4(v: number) {
  message.success(`Change-4 ${v}`)
}

function onClear() {
  message.info('Clear-5')
}

function onConfirm(v: number | number[] | null) {
  message.info(`Confirm-5 ${v}`)
}
</script>

<template>
  <n-space vertical>
    <n-date-picker
      v-model:value="datetime"
      type="datetime"
      :disabled="disabled"
      @blur="onBlur1"
      @update:value="onChange1"
    />
    <n-date-picker
      v-model:value="date"
      type="date"
      :disabled="disabled"
      @blur="onBlur2"
      @update:value="onChange2"
    />
    <n-date-picker
      v-model:value="datetimerange"
      :disabled="disabled"
      type="datetimerange"
      @blur="onBlur3"
      @update:value="onChange3"
    />
    <n-date-picker
      v-model:value="daterange"
      :disabled="disabled"
      type="daterange"
      @blur="onBlur4"
      @update:value="onChange4"
    />
    <n-date-picker
      v-model:value="daterange"
      :disabled="disabled"
      type="daterange"
      @clear="onClear"
      @confirm="onConfirm"
    />
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
```

## 格式化

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(null)
const timestamp2 = ref(1183135260000)
const format = 'yyyy/MM/dd - HH:mm'
</script>

<template>
  <n-space vertical>
    <n-date-picker
      v-model:value="timestamp"
      type="datetime"
      clearable
      :format="format"
    />
    <n-date-picker
      v-model:value="timestamp2"
      type="datetime"
      :format="format"
      clearable
    />
  </n-space>
</template>
```

## 额外内容

```vue
<template>
  <n-space vertical>
    <n-date-picker type="date">
      <template #footer>
        extra footer
      </template>
    </n-date-picker>
    <n-date-picker type="datetime">
      <template #footer>
        extra footer
      </template>
    </n-date-picker>
    <n-date-picker type="daterange">
      <template #footer>
        extra footer
      </template>
    </n-date-picker>
    <n-date-picker type="datetimerange">
      <template #footer>
        extra footer
      </template>
    </n-date-picker>
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-date-picker status="warning" />
    <n-date-picker status="error" />
  </n-space>
</template>
```

## 图标

```vue
<script lang="ts" setup>
import {
  ChevronBackCircle,
  ChevronBackCircleOutline,
  ChevronForwardCircle,
  ChevronForwardCircleOutline,
  RocketOutline,
  TrendingUpSharp
} from '@vicons/ionicons5'
</script>

<template>
  <n-space vertical>
    <n-date-picker type="date">
      <template #date-icon>
        <n-icon :size="16" :component="RocketOutline" />
      </template>
      <template #prev-year>
        <n-icon :size="16" :component="ChevronBackCircle" />
      </template>
      <template #prev-month>
        <n-icon :size="16" :component="ChevronBackCircleOutline" />
      </template>
      <template #next-month>
        <n-icon :size="16" :component="ChevronForwardCircleOutline" />
      </template>
      <template #next-year>
        <n-icon :size="16" :component="ChevronForwardCircle" />
      </template>
    </n-date-picker>
    <n-date-picker type="daterange">
      <template #separator>
        <n-icon :size="16" :component="TrendingUpSharp" />
      </template>
      <template #date-icon>
        <n-icon :size="16" :component="RocketOutline" />
      </template>
    </n-date-picker>
  </n-space>
</template>
```

## 只使用面板

这个功能或许有的时候能管点用，我实在不忍心看大家强行调样式。

```vue
<template>
  <n-date-picker panel type="date" />
</template>
```

## 当选择年、月后，关闭年月面板

通过使用 `fast-year-select` 和 `fast-month-select` 属性，可以实现当选择年、月后，关闭年月面板。

```vue
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      timestamp: ref(1183135260000),
      range: ref<[number, number]>([1183135260000, Date.now()])
    }
  }
})
</script>

<template>
  <NFlex vertical>
    <n-date-picker
      v-model:value="timestamp"
      type="date"
      fast-year-select
      fast-month-select
    />
    <n-date-picker
      v-model:value="timestamp"
      type="datetime"
      fast-year-select
      fast-month-select
    />
    <n-date-picker
      v-model:value="range"
      type="daterange"
      fast-year-select
      fast-month-select
    />
    <n-date-picker
      v-model:value="range"
      type="datetimerange"
      fast-year-select
      fast-month-select
    />
    <pre>{{ JSON.stringify(timestamp) }}</pre>
  </NFlex>
</template>
```

