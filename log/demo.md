# 日志 Log - 演示示例

## 行数

使用 `rows` 来设定 Log 的尺寸。

```vue
<template>
  <n-log
    :rows="5"
    log="1
2
3
4
5
6"
  />
</template>
```

## 事件

Log 有 `require-more`、`reach-top` 和 `reach-bottom` 事件。需要注意的是即使 Log 已经滚到了头或者尾，你继续滚动鼠标的时候，`require-more` 还是会被触发，而 `reach-xxx` 并不会。如果你不需要这种特性，可以使用 `reach-top` 或者 `reach-bottom`。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

function log() {
  const l: string[] = []
  for (let i = 0; i < 10; ++i) {
    l.push(Math.random().toString(16))
  }
  return `${l.join('\n')}\n`
}

const message = useMessage()
const loadingRef = ref(false)
const logRef = ref(log())

function handleRequireMore(from: 'top' | 'bottom') {
  message.info(`Require More from ${from}`)
  if (loadingRef.value)
    return
  loadingRef.value = true
  setTimeout(() => {
    if (from === 'top') {
      logRef.value = log() + logRef.value
    }
    else if (from === 'bottom') {
      logRef.value = logRef.value + log()
    }
    loadingRef.value = false
  }, 1000)
}

function handleReachTop() {
  message.info('Reach Top')
}

function handleReachBottom() {
  message.info('Reach Bottom')
}
</script>

<template>
  <n-log
    :log="logRef"
    :loading="loadingRef"
    trim
    @require-more="handleRequireMore"
    @reach-top="handleReachTop"
    @reach-bottom="handleReachBottom"
  />
</template>
```

## 滚动

你可以很简单的让 Log 滚到顶部或者底部。同时你可以控制这个滚动操作是否发出事件。

```vue
<script lang="ts" setup>
import type { LogInst } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

function log() {
  const l: string[] = []
  for (let i = 0; i < 10; ++i) {
    l.push(Math.random().toString(16))
  }
  return `${l.join('\n')}\n`
}

const message = useMessage()
const loadingRef = ref(false)
const logRef = ref(log())
const logInstRef = ref<LogInst | null>(null)

function handleRequireMore(from: 'top' | 'bottom') {
  message.info(`Require More from ${from}`)
  if (loadingRef.value)
    return
  loadingRef.value = true
  setTimeout(() => {
    if (from === 'top') {
      logRef.value = log() + logRef.value
    }
    else if (from === 'bottom') {
      logRef.value = logRef.value + log()
    }
    loadingRef.value = false
  }, 1000)
}

function handleReachTop() {
  message.info('Reach Top')
}

function handleReachBottom() {
  message.info('Reach Bottom')
}

function scrollTo(options: { position: 'bottom' | 'top', silent: boolean }) {
  logInstRef.value?.scrollTo(options)
}
</script>

<template>
  <n-space vertical>
    <n-button-group>
      <n-button @click="scrollTo({ position: 'bottom', silent: false })">
        滚动到底部
      </n-button>
      <n-button @click="scrollTo({ position: 'bottom', silent: true })">
        滚动到底部（无事件）
      </n-button>
      <n-button @click="scrollTo({ position: 'top', silent: false })">
        滚动到顶部
      </n-button>
      <n-button @click="scrollTo({ position: 'top', silent: true })">
        滚动到顶部（无事件）
      </n-button>
    </n-button-group>
    <n-log
      ref="logInstRef"
      :log="logRef"
      :loading="loadingRef"
      trim
      @require-more="handleRequireMore"
      @reach-top="handleReachTop"
      @reach-bottom="handleReachBottom"
    />
  </n-space>
</template>
```

## 高亮

在你使用高亮之前，请看本页开始的注意事项，那些对于确保这个例子按预期展示是很重要的。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function log() {
  const l: string[] = []
  for (let i = 0; i < 40; ++i) {
    l.push(Math.random().toString(16))
  }
  return `${l.join('\n')}\n`
}

const loadingRef = ref(false)
const logRef = ref(log())

function handlerequireTop() {
  if (loadingRef.value)
    return
  loadingRef.value = true
  setTimeout(() => {
    logRef.value = log() + logRef.value
    loadingRef.value = false
  }, 1000)
}

function handlerequireBottom() {
  if (loadingRef.value)
    return
  loadingRef.value = true
  setTimeout(() => {
    logRef.value = logRef.value + log()
    loadingRef.value = false
  }, 1000)
}
</script>

<template>
  <n-log
    :log="logRef"
    :loading="loadingRef"
    language="naive-log"
    trim
    @require-top="handlerequireTop"
    @require-bottom="handlerequireBottom"
  />
</template>
```

## 加载

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function log() {
  const l: string[] = []
  for (let i = 0; i < 40; ++i) {
    l.push(Math.random().toString(16))
  }
  return `${l.join('\n')}\n`
}

const loading = ref(false)
const logRef = ref(log())
</script>

<template>
  <n-switch v-model:value="loading" />
  <n-log :loading="loading" :log="logRef" />
</template>
```

## 滚动到最新

当日志不断增加时总是滚动到最新。

```vue
<script lang="ts" setup>
import type { LogInst } from 'naive-ui'
import { nextTick, onMounted, ref, watchEffect } from 'vue'

function log() {
  const l: string[] = []
  for (let i = 0; i < 40; ++i) {
    l.push(Math.random().toString(16))
  }
  return `${l.join('\n')}\n`
}

const logRef = ref(log())
const logInstRef = ref<LogInst | null>(null)
const startRef = ref(false)
const timerRef = ref<number | null>(null)
function handleClick() {
  startRef.value = !startRef.value
  if (startRef.value) {
    timerRef.value = window.setInterval(() => {
      logRef.value = logRef.value + log()
    }, 1000)
  }
  else if (timerRef.value) {
    clearInterval(timerRef.value)
    timerRef.value = null
  }
}
onMounted(() => {
  watchEffect(() => {
    if (logRef.value) {
      nextTick(() => {
        logInstRef.value?.scrollTo({ position: 'bottom', silent: true })
      })
    }
  })
})
</script>

<template>
  <n-space vertical>
    <n-button @click="handleClick">
      添加数据
    </n-button>
    <n-log ref="logInstRef" :log="logRef" language="naive-log" trim />
  </n-space>
</template>
```

