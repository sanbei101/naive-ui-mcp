# 无内容 Empty - 演示示例

## 基础用法

```vue
<template>
  <n-empty description="你什么也找不到">
    <template #extra>
      <n-button size="small">
        看看别的
      </n-button>
    </template>
  </n-empty>
</template>
```

## 图标

自定义图标。

```vue
<script lang="ts" setup>
import { IosAirplane } from '@vicons/ionicons4'
</script>

<template>
  <n-empty description="是一个飞机">
    <template #icon>
      <n-icon>
        <IosAirplane />
      </n-icon>
    </template>
    <template #extra>
      <n-button size="small">
        看看别的
      </n-button>
    </template>
  </n-empty>
</template>
```

## 尺寸

有 `tiny`、 `small`、`medium`、`large` 和 `huge` 尺寸。

```vue
<template>
  <n-empty size="large" description="可以是大的">
    <template #extra>
      <n-button size="small">
        看看别的
      </n-button>
    </template>
  </n-empty>
</template>
```

