# 骨架屏 Skeleton - 演示示例

## 基础用法

使用 `text` 设定文本骨架。

```vue
<template>
  <n-skeleton text :repeat="2" /> <n-skeleton text style="width: 60%" />
</template>
```

## 盒子

把它当成个块用。

```vue
<template>
  <n-space vertical>
    <n-skeleton height="40px" width="33%" />
    <n-skeleton height="40px" width="66%" :sharp="false" />
    <n-skeleton height="40px" round />
    <n-skeleton height="40px" circle />
  </n-space>
</template>
```

## 尺寸

使用 `size` 装成其他组件。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <n-space vertical>
    <n-space><n-switch v-model:value="loading" />加载</n-space>
    <n-space>
      <n-skeleton v-if="loading" :width="146" :sharp="false" size="medium" />
      <n-button v-else>
        Won't you fly high
      </n-button>
      <n-skeleton v-if="loading" :width="132" round size="medium" />
      <n-button v-else round>
        free bird, yeah
      </n-button>
      <n-skeleton v-if="loading" circle size="medium" />
      <n-button v-else circle>
        ?
      </n-button>
    </n-space>
  </n-space>
</template>
```

