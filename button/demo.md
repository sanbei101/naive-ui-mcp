# 按钮 Button - 演示示例

## 基础

按钮的 `type` 分别为 `default`、`tertiary`、`primary`、`info`、`success`、`warning` 和 `error`。

```vue
<template>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">
      Tertiary
    </n-button>
    <n-button type="primary">
      Primary
    </n-button>
    <n-button type="info">
      Info
    </n-button>
    <n-button type="success">
      Success
    </n-button>
    <n-button type="warning">
      Warning
    </n-button>
    <n-button type="error">
      Error
    </n-button>
  </n-space>
</template>
```

## 次要按钮

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-button strong secondary>
      Default
    </n-button>
    <n-button strong secondary type="tertiary">
      Tertiary
    </n-button>
    <n-button strong secondary type="primary">
      Primary
    </n-button>
    <n-button strong secondary type="info">
      Info
    </n-button>
    <n-button strong secondary type="success">
      Success
    </n-button>
    <n-button strong secondary type="warning">
      Warning
    </n-button>
    <n-button strong secondary type="error">
      Error
    </n-button>
    <n-button strong secondary round>
      Default
    </n-button>
    <n-button strong secondary round type="primary">
      Primary
    </n-button>
    <n-button strong secondary round type="info">
      Info
    </n-button>
    <n-button strong secondary round type="success">
      Success
    </n-button>
    <n-button strong secondary round type="warning">
      Warning
    </n-button>
    <n-button strong secondary round type="error">
      Error
    </n-button>
    <n-button strong secondary circle>
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="primary">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="info">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="success">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="warning">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button strong secondary circle type="error">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
  </n-space>
</template>
```

## 次次要按钮

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-button tertiary>
      Default
    </n-button>
    <n-button tertiary type="primary">
      Primary
    </n-button>
    <n-button tertiary type="info">
      Info
    </n-button>
    <n-button tertiary type="success">
      Success
    </n-button>
    <n-button tertiary type="warning">
      Warning
    </n-button>
    <n-button tertiary type="error">
      Error
    </n-button>
    <n-button tertiary round>
      Default
    </n-button>
    <n-button tertiary round type="primary">
      Primary
    </n-button>
    <n-button tertiary round type="info">
      Info
    </n-button>
    <n-button tertiary round type="success">
      Success
    </n-button>
    <n-button tertiary round type="warning">
      Warning
    </n-button>
    <n-button tertiary round type="error">
      Error
    </n-button>
    <n-button tertiary circle>
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button tertiary circle type="primary">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button tertiary circle type="info">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button tertiary circle type="success">
      <n-icon><CashIcon /></n-icon>
    </n-button>
    <n-button tertiary circle type="warning">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button tertiary circle type="error">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
  </n-space>
</template>
```

## 次次次要按钮

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-button quaternary>
      Default
    </n-button>
    <n-button quaternary type="primary">
      Primary
    </n-button>
    <n-button quaternary type="info">
      Info
    </n-button>
    <n-button quaternary type="success">
      Success
    </n-button>
    <n-button quaternary type="warning">
      Warning
    </n-button>
    <n-button quaternary type="error">
      Error
    </n-button>
    <n-button quaternary round>
      Default
    </n-button>
    <n-button quaternary round type="primary">
      Primary
    </n-button>
    <n-button quaternary round type="info">
      Info
    </n-button>
    <n-button quaternary round type="success">
      Success
    </n-button>
    <n-button quaternary round type="warning">
      Warning
    </n-button>
    <n-button quaternary round type="error">
      Error
    </n-button>
    <n-button quaternary circle>
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="primary">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="info">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="success">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="warning">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button quaternary circle type="error">
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
  </n-space>
</template>
```

## 虚线按钮

使用 `dashed` 来使用虚线按钮。

```vue
<template>
  <n-space>
    <n-button dashed>
      Default
    </n-button>
    <n-button type="primary" dashed>
      Primary
    </n-button>
    <n-button type="info" dashed>
      Info
    </n-button>
    <n-button type="success" dashed>
      Success
    </n-button>
    <n-button type="warning" dashed>
      Warning
    </n-button>
    <n-button type="error" dashed>
      Error
    </n-button>
  </n-space>
</template>
```

## 尺寸

有 `tiny`、`small`、`medium` 和 `large` 尺寸。

```vue
<template>
  <n-space align="baseline">
    <n-button size="tiny" secondary strong>
      小小
    </n-button>
    <n-button size="small" secondary strong>
      小
    </n-button>
    <n-button size="medium" secondary strong>
      不小
    </n-button>
    <n-button size="large" secondary strong>
      不不小
    </n-button>
  </n-space>
</template>
```

## 文本按钮

长得就像文本。

```vue
<script lang="ts" setup>
import { TrainOutline as TrainIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-button text>
    <template #icon>
      <n-icon>
        <TrainIcon />
      </n-icon>
    </template>
    那车头依然吐着烟
  </n-button>
</template>
```

## 标签

你可以把按钮渲染成不同的标签，比如 `<a />`。

```vue
<template>
  <n-button
    text
    tag="a"
    href="https://anyway.fm/news.php"
    target="_blank"
    type="primary"
  >
    安妮薇时报
  </n-button>
</template>
```

## 禁用

按钮可以被禁用。

```vue
<template>
  <n-button disabled>
    不许点
  </n-button>
</template>
```

## 图标

在按钮上使用图标，可以使用 `render-icon` 属性或 `icon` 插槽。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon() {
  return h(NIcon, null, {
    default: () => h(CashIcon)
  })
}
</script>

<template>
  <n-space>
    <n-button secondary strong :render-icon="renderIcon">
      +100 元
    </n-button>
    <n-button icon-placement="right" secondary strong>
      <template #icon>
        <NIcon>
          <CashIcon />
        </NIcon>
      </template>
      +100 元
    </n-button>
  </n-space>
</template>
```

## 事件

处理按钮的事件。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleClick() {
  message.info('Button Clicked')
}
</script>

<template>
  <n-button @click="handleClick">
    点它
  </n-button>
</template>
```

## 形状

按钮拥有不同的形状。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-button circle>
      <template #icon>
        <n-icon><CashIcon /></n-icon>
      </template>
    </n-button>
    <n-button round>
      圆角
    </n-button>
    <n-button>方</n-button>
  </n-space>
</template>
```

## 透明背景

`Ghost` 按钮有透明的背景。

```vue
<template>
  <n-space>
    <n-button ghost>
      Default
    </n-button>
    <n-button type="primary" ghost>
      Primary
    </n-button>
    <n-button type="info" ghost>
      Info
    </n-button>
    <n-button type="success" ghost>
      Success
    </n-button>
    <n-button type="warning" ghost>
      Warning
    </n-button>
    <n-button type="error" ghost>
      Error
    </n-button>
  </n-space>
</template>
```

## 加载中

按钮有加载状态。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { ref } from 'vue'

const loading = ref(false)
function handleClick() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <n-space>
    <n-button :loading="loading" @click="handleClick">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      点我
    </n-button>
    <n-button :loading="loading" @click="handleClick">
      点我
    </n-button>
  </n-space>
</template>
```

## 自定义颜色

这两个颜色看起来像毒蘑菇。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space align="center">
    <n-button color="#8a2be2">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #8a2be2
    </n-button>
    <n-button color="#ff69b4">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #ff69b4
    </n-button>
    <n-button ghost color="#8a2be2">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #8a2be2
    </n-button>
    <n-button ghost color="#ff69b4">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #ff69b4
    </n-button>
    <n-button text color="#8a2be2">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #8a2be2
    </n-button>
    <n-button text color="#ff69b4">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
      #ff69b4
    </n-button>
  </n-space>
</template>
```

## 按钮组

可以把几个按钮结合成按钮组。

```vue
<script lang="ts" setup>
import { LogInOutline as LogInIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-button-group vertical>
      <n-button round>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        活着
      </n-button>
      <n-button ghost>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        不多
      </n-button>
      <n-button>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        不少
      </n-button>
    </n-button-group>
    <n-button-group vertical size="large">
      <n-button>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        幸福
      </n-button>
      <n-button>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        刚好
      </n-button>
      <n-button ghost round>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        够用
      </n-button>
    </n-button-group>
    <n-button-group size="small">
      <n-button type="default" round>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        活着
      </n-button>
      <n-button type="default">
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        其实
      </n-button>
      <n-button type="default">
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        很好
      </n-button>
    </n-button-group>
    <n-button-group>
      <n-button ghost>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        再吃
      </n-button>
      <n-button ghost>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        一颗
      </n-button>
      <n-button round>
        <template #icon>
          <n-icon><LogInIcon /></n-icon>
        </template>
        苹果
      </n-button>
    </n-button-group>
  </n-space>
</template>
```

## 使用图标作为按钮

有时你可能会想用图标作为按钮并且自定义一些尺寸。这时你可以使用 `text` 按钮和 `font-size` 来进行设定。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-button text style="font-size: 24px">
    <n-icon>
      <CashIcon />
    </n-icon>
  </n-button>
</template>
```

## 配合 Popover 的特殊情况

disabled 的原生 button 不会触发部分鼠标事件，因此 `n-popover` 无法监听到相关的事件。如果你需要在这种情况下使用，可以使用 `tag` 属性来调整 button 的行为。

```vue
<template>
  <n-space>
    <n-tooltip>
      <template #trigger>
        <n-button disabled tag="div">
          突破
        </n-button>
      </template>
      工作遇到困难，齐心协力一起解决
    </n-tooltip>
    <n-button>两天加班换一天调休</n-button>
    <n-tooltip>
      <template #trigger>
        <n-button disabled tag="div">
          惦记
        </n-button>
      </template>
      你必然一身才华，才会被这么多人惦记
    </n-tooltip>
  </n-space>
</template>
```

