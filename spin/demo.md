# 加载 Spin - 演示示例

## 基础用法

有 `small`、`medium` 和 `large` 的 Spin.

```vue
<template>
  <n-space>
    <n-spin size="small" />
    <n-spin size="medium" />
    <n-spin size="large" />
  </n-space>
</template>
```

## 填充内容

你可以把其他内容包裹在 Spin 中。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-space vertical>
    <n-spin :show="show">
      <n-alert title="啦啦啦" type="success">
        明天再打开行李箱。宝贝，挂电话啦。
      </n-alert>
    </n-spin>
    <n-button @click="show = !show">
      点击来转圈
    </n-button>
  </n-space>
</template>
```

## 文字信息

你可以在圈圈的下面放一点文字信息。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-space vertical>
    <n-spin :show="show">
      <n-alert title="啦啦啦" type="success">
        明天再打开行李箱。宝贝，挂电话啦。
      </n-alert>
      <template #description>
        你不知道你有多幸运
      </template>
    </n-spin>
    <n-button @click="show = !show">
      点击来转圈
    </n-button>
  </n-space>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { Reload } from '@vicons/ionicons5'
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-spin :show="show">
    <template #icon>
      <n-icon>
        <Reload />
      </n-icon>
    </template>
  </n-spin>
</template>
```

## 延迟

你可以设置一个显示延迟时间。在延迟时间到达前结束，Spin 将不会显示

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-space vertical>
    <n-spin :show="show" :delay="1000">
      <n-alert title="La La La" type="success">
        明天再打开行李箱。宝贝，挂电话啦。
      </n-alert>
    </n-spin>
    <n-button @click="show = !show">
      {{ show ? '不要再转啦' : '点击来转圈' }}
    </n-button>
  </n-space>
</template>
```

