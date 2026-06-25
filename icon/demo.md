# 图标 Icon - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { GameController, GameControllerOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-icon size="40">
    <GameControllerOutline />
  </n-icon>
  <n-icon size="40" color="#0e7a0d">
    <GameController />
  </n-icon>
  <n-icon size="40" :component="GameController" />
</template>
```

## 自定义图标

将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）

```vue
<template>
  <n-icon size="40">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
      />
    </svg>
  </n-icon>
</template>
```

## 深度

为了搭配不同级的文字颜色，图标提供 `depth` 选项。

```vue
<script lang="ts" setup>
import { CashOutline } from '@vicons/ionicons5'
</script>

<template>
  <n-icon :component="CashOutline" size="40" :depth="1" />
  <n-icon :component="CashOutline" size="40" :depth="2" />
  <n-icon :component="CashOutline" size="40" :depth="3" />
  <n-icon :component="CashOutline" size="40" :depth="4" />
  <n-icon :component="CashOutline" size="40" :depth="5" />
</template>
```

## 带背景色的图标

有的时候加个背景显得没那么单调。

```vue
<script lang="ts" setup>
import Checkmark16Filled from '@vicons/fluent/Checkmark16Filled'
</script>

<template>
  <n-icon-wrapper :size="24" :border-radius="10">
    <n-icon :size="18" :component="Checkmark16Filled" />
  </n-icon-wrapper>
</template>
```

