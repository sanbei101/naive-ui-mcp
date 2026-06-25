# 浮动按钮 Float Button - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <div style="height: 200px; transform: translate(0)">
    <n-float-button :right="0" :bottom="0" shape="square">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :left="0" :bottom="0" shape="square" type="primary">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :right="0" :top="0">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
    <n-float-button :left="0" :top="0" type="primary">
      <n-icon>
        <CashIcon />
      </n-icon>
    </n-float-button>
  </div>
</template>
```

## 徽章

带有徽章数的悬浮按钮

```vue
<script lang="ts" setup>
import { AlarmOutline as AlarmOutlineIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-flex>
    <n-float-button position="relative">
      <n-badge :value="9" :offset="[6, -8]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
    <n-float-button position="relative">
      <n-badge :value="100" :max="99" :offset="[6, -8]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
    <n-float-button position="relative">
      <n-badge dot :offset="[4, -4]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
    <n-float-button position="relative">
      <n-badge dot :offset="[4, -4]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
    <n-float-button position="relative">
      <n-badge value="新" :offset="[6, -6]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
    <n-float-button position="relative">
      <n-badge :value="9" :offset="[6, -8]">
        <n-icon>
          <AlarmOutlineIcon />
        </n-icon>
      </n-badge>
    </n-float-button>
  </n-flex>
</template>
```

## 气泡提示

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-tooltip trigger="hover" placement="right">
    <template #trigger>
      <n-float-button position="relative">
        <n-icon>
          <CashIcon />
        </n-icon>
      </n-float-button>
    </template>
    这个故事还没有完结
  </n-tooltip>
</template>
```

## 描述

在 `n-float-button` 上展示描述信息。

```vue
<script lang="ts" setup>
import { Document as DocumentIcon } from '@vicons/ionicons5'
</script>

<template>
  <div style="height: 120px; transform: translate(0)">
    <n-float-button shape="square">
      <n-icon>
        <DocumentIcon />
      </n-icon>
      <template #description>
        文档
      </template>
    </n-float-button>
    <n-float-button :left="60" shape="square">
      <template #description>
        文档
      </template>
    </n-float-button>
    <n-float-button :left="120" shape="square">
      <n-icon>
        <DocumentIcon />
      </n-icon>
      <template #description>
        很长很长的文档
      </template>
    </n-float-button>
  </div>
</template>
```

## 浮动按钮组

可以任意组合元素，实现更多的功能。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-flex align="flex-start">
    <n-float-button-group shape="square" position="relative">
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
    </n-float-button-group>
    <n-float-button-group position="relative">
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
      <n-float-button>
        <n-icon><CashIcon /></n-icon>
      </n-float-button>
    </n-float-button-group>
  </n-flex>
</template>
```

## 菜单显示

设定 `menu-trigger` 后，更多的 `n-float-button` 可被折叠于一个 `n-float-button` 中。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-flex>
    <n-float-button position="relative" type="primary" menu-trigger="hover">
      <n-icon>
        <CashIcon />
      </n-icon>
      <template #menu>
        <n-float-button shape="square" type="primary">
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
        <n-float-button>
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
        <n-float-button>
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
      </template>
    </n-float-button>
    <n-float-button position="relative" type="primary" menu-trigger="click">
      <n-icon>
        <CashIcon />
      </n-icon>
      <template #menu>
        <n-float-button shape="square" type="primary">
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
        <n-float-button>
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
        <n-float-button>
          <n-icon>
            <CashIcon />
          </n-icon>
        </n-float-button>
      </template>
    </n-float-button>
  </n-flex>
</template>
```

