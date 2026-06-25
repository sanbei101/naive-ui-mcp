# 标签 Tag - 演示示例

## 基础

它有不同的类型。

```vue
<template>
  <n-space>
    <n-tag> 爱在西元前 </n-tag>
    <n-tag type="success">
      不该
    </n-tag>
    <n-tag type="warning">
      超人不会飞
    </n-tag>
    <n-tag type="error">
      手写的从前
    </n-tag>
    <n-tag type="info">
      哪里都是你
    </n-tag>
  </n-space>
</template>
```

## 无边框

```vue
<template>
  <n-space>
    <n-tag :bordered="false">
      爱在西元前
    </n-tag>
    <n-tag :bordered="false" type="success">
      不该
    </n-tag>
    <n-tag :bordered="false" type="warning">
      超人不会飞
    </n-tag>
    <n-tag :bordered="false" type="error">
      手写的从前
    </n-tag>
    <n-tag :bordered="false" type="info">
      哪里都是你
    </n-tag>
  </n-space>
</template>
```

## 可关闭

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleClose() {
  message.info('tag close')
}
function handleClick() {
  message.info('tag click')
}
</script>

<template>
  <n-space>
    <n-tag closable @close="handleClose">
      爱在西元前
    </n-tag>
    <n-tag type="success" closable @close="handleClose">
      不该
    </n-tag>
    <n-tag type="warning" closable @close="handleClose">
      超人不会飞
    </n-tag>
    <n-tag type="error" closable @close="handleClose">
      手写的从前
    </n-tag>
    <n-tag type="info" closable @click="handleClick" @close="handleClose">
      哪里都是你
    </n-tag>
  </n-space>
</template>
```

## 禁用

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const disabled = ref(true)
function handleClose() {
  message.info('tag close')
}
</script>

<template>
  <n-space align="center" item-style="display: flex;">
    <n-tag closable :disabled="disabled" @close="handleClose">
      爱在西元前
    </n-tag>
    <n-tag type="success" closable :disabled="disabled" @close="handleClose">
      不该
    </n-tag>
    <n-tag type="warning" closable :disabled="disabled" @close="handleClose">
      超人不会飞
    </n-tag>
    <n-tag type="error" closable :disabled="disabled" @close="handleClose">
      手写的从前
    </n-tag>
    <n-tag type="info" closable :disabled="disabled" @close="handleClose">
      哪里都是你
    </n-tag>
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleClose() {
  message.info('tag close')
}
</script>

<template>
  <n-space>
    <n-tag closable size="tiny" @close="handleClose">
      爱在西元前
    </n-tag>
    <n-tag type="success" closable size="small" @close="handleClose">
      不该
    </n-tag>
    <n-tag type="warning" closable @close="handleClose">
      超人不会飞
    </n-tag>
    <n-tag type="error" closable size="large" @close="handleClose">
      手写的从前
    </n-tag>
  </n-space>
</template>
```

## 可选择

它可以变成可选择的。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <n-space>
    <n-tag v-model:checked="checked" checkable disabled>
      爱在西元前
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      不该
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      超人不会飞
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      手写的从前
    </n-tag>
    <n-tag v-model:checked="checked" checkable>
      哪里都是你
    </n-tag>
  </n-space>
</template>
```

## 形状

圆的 Tag 长得像个胶囊。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleClose() {
  message.info('tag close')
}
</script>

<template>
  <n-space>
    <n-tag type="success" size="small" round closable @close="handleClose">
      不该
    </n-tag>
    <n-tag type="error" closable round @close="handleClose">
      手写的从前
    </n-tag>
    <n-tag type="error" closable size="large" round @close="handleClose">
      手写的从前
    </n-tag>
  </n-space>
</template>
```

## 颜色

使用一个颜色对象定制标签的颜色。

```vue
<template>
  <n-tag :color="{ color: '#BBB', textColor: '#555', borderColor: '#555' }">
    告别夜晚 等待天亮
  </n-tag>
</template>
```

## 头像

在标签中使用头像。

```vue
<template>
  <n-space>
    <n-tag>
      Anyway.FM
      <template #avatar>
        <n-avatar
          src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
        />
      </template>
    </n-tag>
    <n-tag round :bordered="false">
      Anyway.FM
      <template #avatar>
        <n-avatar
          src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
        />
      </template>
    </n-tag>
  </n-space>
</template>
```

## 图标

在标签中使用图标。

```vue
<script lang="ts" setup>
import { CheckmarkCircle } from '@vicons/ionicons5'
</script>

<template>
  <n-space>
    <n-tag type="success">
      Checked
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
    <n-tag round :bordered="false" type="success">
      Checked
      <template #icon>
        <n-icon :component="CheckmarkCircle" />
      </template>
    </n-tag>
  </n-space>
</template>
```

