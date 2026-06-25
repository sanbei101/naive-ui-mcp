# 评分 Rate - 演示示例

## 基础用法

```vue
<template>
  <n-rate />
</template>
```

## 尺寸

有 `small`、`medium` 和 `large` 尺寸。

```vue
<template>
  <n-space align="center">
    <n-rate size="small" />
    <n-rate size="medium" />
    <n-rate size="large" />
  </n-space>
</template>
```

## 颜色

灾难就是这么发生的。

```vue
<template>
  <n-rate color="#4fb233" />
</template>
```

## 图标

默认插槽的内容会被用作图标。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-rate>
    <n-icon size="20">
      <CashIcon />
    </n-icon>
  </n-rate>
</template>
```

## 允许半颗

```vue
<template>
  <n-rate allow-half />
</template>
```

## 只读

```vue
<template>
  <n-rate readonly :default-value="3" />
</template>
```

## 可清空

设定 `clearable` 后 `n-rate` 可清空，在你点击当前值对应的图标后值会被设为 `null`。

```vue
<template>
  <n-rate clearable allow-half />
</template>
```

