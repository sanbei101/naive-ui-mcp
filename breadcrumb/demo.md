# 面包屑 Breadcrumb - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item>
      <n-icon :component="MdCash" /> 北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="MdCash" /> 天津分行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon :component="MdCash" /> 平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
```

## 下拉菜单

和下拉菜单一起使用。

```vue
<script lang="ts" setup>
const options1 = [
  {
    label: 'David Tao',
    key: 1
  },
  {
    label: '黑色柳丁',
    key: 2
  }
]

const options2 = [
  {
    label: '小镇姑娘',
    key: 1
  },
  {
    label: '普通朋友',
    key: 2
  }
]
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item>
      <n-dropdown :options="options1">
        <div class="trigger">
          I'm ok
        </div>
      </n-dropdown>
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-dropdown :options="options2">
        <div class="trigger">
          I'm ok
        </div>
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<style>
.trigger {
  padding: 4px;
  margin: -4px;
  border-radius: inherit;
}
</style>
```

## 自定义分隔符

使用 separator prop 自定义分隔符。

```vue
<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
</script>

<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 天津分行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
```

## 自定义每项分隔符

使用 separator prop 或 separator slot 自定义每一项的分隔符。如果二者均提供，将优先使用 separator slot。

```vue
<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
</script>

<template>
  <n-breadcrumb>
    <n-breadcrumb-item separator=">">
      <n-icon><MdCash /></n-icon> 北京总行
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 天津分行<template #separator>
        ~
      </template>
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><MdCash /></n-icon> 平山道支行
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
```

