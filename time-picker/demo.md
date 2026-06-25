# 时间选择器 Time Picker - 演示示例

## 基础用法

```vue
<template>
  <n-space>
    <n-time-picker default-formatted-value="00:12:13" />
    <n-time-picker :default-value="1183135260000" />
  </n-space>
</template>
```

## 确认

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleConfirm(value: number | null) {
  message.success(`确认${value}`)
}
</script>

<template>
  <n-space>
    <n-time-picker
      default-formatted-value="00:12:13"
      @confirm="handleConfirm"
    />
  </n-space>
</template>
```

## 尺寸

可以是 `small`、`medium` 或 `large` 尺寸。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const timestamp = ref(null)
</script>

<template>
  <n-space vertical>
    <n-time-picker v-model:value="timestamp" size="small" />
    <n-time-picker v-model:value="timestamp" size="medium" />
    <n-time-picker v-model:value="timestamp" size="large" />
  </n-space>
</template>
```

## 禁用某些时间

你可以禁用某些时间。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const time0 = ref(null)

function isHourDisabled(hour: number) {
  return hour % 2 === 0
}

function isMinuteDisabled(minute: number, selectedHour: number | null) {
  if (selectedHour === null)
    return false
  if (Number(selectedHour) < 12) {
    return minute < 30
  }
  else {
    return false
  }
}

function isSecondDisabled(
  second: number,
  selectedMinute: number | null,
  selectedHour: number | null
) {
  if (selectedHour === null || selectedMinute === null)
    return false
  if (Number(selectedHour) > 20 && Number(selectedMinute) < 30) {
    return second < 40
  }
  else {
    return false
  }
}
</script>

<template>
  <n-time-picker
    v-model:value="time0"
    :is-hour-disabled="isHourDisabled"
    :is-minute-disabled="isMinuteDisabled"
    :is-second-disabled="isSecondDisabled"
  />
</template>
```

## 展示某些时间

传递单独的数字来定义时间步进或用数组指定你需要显示的内容，输入超出设定范围的值将将显示无效样式。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(1183135260000)
</script>

<template>
  <n-time-picker
    v-model:value="time"
    :hours="[8, 18]"
    :minutes="8"
    :seconds="[0]"
  />
</template>
```

## 格式化

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(null)
</script>

<template>
  <n-time-picker v-model:value="time" format="h:mm a" />
</template>
```

## 操作

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const ts1 = ref(null)
const ts2 = ref(861333934000)
</script>

<template>
  <n-space vertical>
    <n-time-picker v-model:value="ts1" :actions="['now', 'clear']" />
    <n-time-picker v-model:value="ts2" :actions="null" />
  </n-space>
</template>
```

## 12 小时

```vue
<template>
  <n-space>
    <n-time-picker use-12-hours />
    <n-time-picker use-12-hours :default-value="1183135260000" />
  </n-space>
</template>
```

## 使用格式化后的值

你可以使用 `formatted-value` 控制格式化后的值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const formattedValue = ref('4~1~8')
</script>

<template>
  <pre>{{ formattedValue }}</pre>
  <n-time-picker
    v-model:formatted-value="formattedValue"
    value-format="H~m~s"
  />
</template>
```

## 手动 focus & blur

```vue
<script lang="ts" setup>
import type { TimePickerInst } from 'naive-ui'
import { ref } from 'vue'

const timePickerInstRef = ref<TimePickerInst | null>(null)

function handleClick() {
  timePickerInstRef.value?.focus()
  setTimeout(() => {
    timePickerInstRef.value?.blur()
  }, 1000)
}
</script>

<template>
  <n-space item-style="display: flex; align-item: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <n-time-picker ref="timePickerInstRef" />
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-time-picker status="warning" placeholder="" />
    <n-time-picker status="error" placeholder="" />
  </n-space>
</template>
```

## 时区

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(Date.now())
</script>

<template>
  <n-grid :cols="2" :x-gap="12" :y-gap="12">
    <n-grid-item>
      <n-form-item label="上海" :show-feedback="false">
        <n-time-picker
          v-model:value="value"
          style="width: 100%"
          time-zone="Asia/Shanghai"
        />
      </n-form-item>
    </n-grid-item>
    <n-grid-item>
      <n-form-item label="匹兹堡" :show-feedback="false">
        <n-time-picker
          v-model:value="value"
          style="width: 100%"
          time-zone="America/New_York"
        />
      </n-form-item>
    </n-grid-item>
    <n-grid-item>
      <n-form-item label="UTC" :show-feedback="false">
        <n-time-picker
          v-model:value="value"
          style="width: 100%"
          time-zone="UTC"
        />
      </n-form-item>
    </n-grid-item>
  </n-grid>
</template>
```

