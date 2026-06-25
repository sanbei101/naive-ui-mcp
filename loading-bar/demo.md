# 加载条 Loading Bar - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'
import { ref } from 'vue'

const loadingBar = useLoadingBar()
const disabled = ref(true)

function handleStart() {
  loadingBar.start()
  disabled.value = false
}

function handleFinish() {
  loadingBar.finish()
  disabled.value = true
}

function handleError() {
  disabled.value = true
  loadingBar.error()
}
</script>

<template>
  <n-space>
    <n-button @click="handleStart">
      开始
    </n-button>
    <n-button :disabled="disabled" @click="handleFinish">
      结束
    </n-button>
    <n-button @click="handleError">
      报个错
    </n-button>
  </n-space>
</template>
```

## 在局部使用进度条

你可以设定 `to` 来控制进度条的挂载位置

```vue
<script lang="ts" setup>
import { NButton, NSpace, useLoadingBar } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'

// 定义 LoadingBarTrigger 组件
const LoadingBarTrigger = defineComponent(() => {
  const loadingBar = useLoadingBar()
  return () => {
    return h(NSpace, null, {
      default: () => [
        h(NButton, { onClick: () => loadingBar.start() }, () => 'Start'),
        h(NButton, { onClick: () => loadingBar.finish() }, () => 'Finish')
      ]
    })
  }
})

const loadingBarTargetRef = ref<undefined | HTMLElement>(undefined)
</script>

<template>
  <n-loading-bar-provider
    :to="loadingBarTargetRef"
    container-style="position: absolute;"
  >
    <div
      ref="loadingBarTargetRef"
      style="
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: var(--n-border-radius);
        overflow: hidden;
        pointer-events: none;
      "
    />
    <LoadingBarTrigger />
  </n-loading-bar-provider>
</template>
```

