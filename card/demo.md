# 卡片 Card - 演示示例

## 基础用法

基础卡片

```vue
<template>
  <n-card title="卡片">
    卡片内容
  </n-card>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>
```

## 尺寸

卡片有 `small`、`medium`、`large`、`huge` 尺寸。

```vue
<template>
  <n-space vertical>
    <n-card title="小卡片" size="small">
      卡片内容
    </n-card>
    <n-card title="中卡片" size="medium">
      卡片内容
    </n-card>
    <n-card title="大卡片" size="large">
      卡片内容
    </n-card>
    <n-card title="超大卡片" size="huge">
      卡片内容
    </n-card>
  </n-space>
</template>
```

## 封面

卡片可以有封面。

```vue
<template>
  <n-card title="带封面的卡片">
    <template #cover>
      <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
    </template>
    卡片内容
  </n-card>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>
```

## 可悬浮

```vue
<template>
  <n-card title="卡片" hoverable>
    卡片内容
  </n-card>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>
```

## 插槽

卡片有很多插槽，希望能帮你少写点代码。

```vue
<template>
  <n-card title="卡片插槽示例">
    <template #header-extra>
      #header-extra
    </template>
    卡片内容
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </n-card>
</template>
```

## 边框

卡片可以没有边框。

```vue
<template>
  <n-card :bordered="false" title="无边框的卡片">
    卡片内容
  </n-card>
</template>
```

## 分段

`content` 和 `footer` 可以被分段或 `soft` 分段，`action` 可以被分段。分段分割线会在区域的上方出现。

```vue
<template>
  <n-card
    title="卡片分段示例"
    :segmented="{
      content: true,
      footer: 'soft',
    }"
  >
    <template #header-extra>
      #header-extra
    </template>
    卡片内容
    <template #footer>
      #footer
    </template>
    <template #action>
      #action
    </template>
  </n-card>
</template>
```

## 可关闭

用于 Modal 的时候，你可能需要这个属性。

```vue
<script setup lang="ts">
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleClose() {
  message.info('Card Close')
}
</script>

<template>
  <n-card title="卡片" closable @close="handleClose">
    卡片内容
  </n-card>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>
```

## 没有标题

谁说卡片一定要有标题呢。

```vue
<template>
  <n-card>没有标题</n-card>
</template>
```

## 内容滚动

开启 `content-scrollable` 后，卡片会把滚动限制在内容区，头部和底部不会跟着滚动。通常配合固定高度使用。

```vue
<template>
  <n-card
    title="任务列表"
    content-scrollable
    style="max-height: 280px"
    segmented
  >
    <p v-for="i in 20" :key="i" style="margin: 0 0 8px 0">
      第 {{ i }} 条任务：只滚动内容区域。
    </p>
    <template #footer>
      固定在底部的操作区
    </template>
  </n-card>
</template>
```

## 加载中

使用 `n-skeleton` 模拟加载效果。

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="loading" />
    <n-card>
      <template #header>
        <n-skeleton v-if="loading" text width="60%" />
        <template v-else>
          I'm OK
        </template>
      </template>
      <n-skeleton v-if="loading" text :repeat="6" />
      <template v-else>
        不要忘了留姓名<br>
        电话和其他事情<br>
        不要说的太快免得我没写下你大名<br>
        或许你不再打来<br>
        我却等到头发白<br>
        希望有一天你会打来
      </template>
    </n-card>
  </n-space>
</template>
```

## 自定义样式

卡片提供 `content-style`、`header-style`、`footer-style` 来帮助你自定义样式，比如你想要一个没有 padding 的卡片来往里面放一些乱七八糟的东西。

```vue
<template>
  <n-card content-style="padding: 0;">
    <n-tabs
      type="line"
      size="large"
      :tabs-padding="20"
      pane-style="padding: 20px;"
    >
      <n-tab-pane name="PARKLIFE">
        PARKLIFE
      </n-tab-pane>
      <n-tab-pane name="ROCKLIFE">
        ROCKLIFE
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
```

## 嵌入效果

在亮色模式下，有的时候你希望背景色暗一点，来和纯色背景分割。

```vue
<template>
  <n-card title="📖 如何成功" embedded :bordered="false">
    如果你年轻的时候不 996，你什么时候可以 996？你一辈子没有
    996，你觉得你就很骄傲了？这个世界上，我们每一个人都希望成功，都希望美好生活，都希望被尊重，我请问大家，你不付出超越别人的努力和时间，你怎么能够实现你想要的成功？
  </n-card>
</template>

<style>
.n-card {
  max-width: 300px;
}
</style>
```

