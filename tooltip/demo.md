# 弹出提示 Tooltip - 演示示例

## 基础用法

```vue
<template>
  <n-tooltip trigger="hover">
    <template #trigger>
      <n-button> 鸭子 </n-button>
    </template>
    如果它长得像鸭子，走起来像鸭子，叫起来也像鸭子，那它一定是个鸭子。
  </n-tooltip>
</template>
```

## 触发方式

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showPopover = ref(false)
</script>

<template>
  <n-space>
    <n-tooltip placement="bottom" trigger="hover">
      <template #trigger>
        <n-button> 悬浮 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip placement="bottom" trigger="click">
      <template #trigger>
        <n-button> 点击 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip :show="showPopover" placement="bottom">
      <template #trigger>
        <n-button @click="showPopover = !showPopover">
          手动
        </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
  </n-space>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const showPopover = ref(false)

function handleUpdateShow(show: boolean) {
  message.success(`${show}`)
}
</script>

<template>
  <n-space>
    <n-tooltip
      placement="bottom"
      trigger="hover"
      @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button> 悬浮 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip
      placement="bottom"
      trigger="click"
      @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button> 点击 </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
    <n-tooltip :show="showPopover" trigger="manual" placement="bottom">
      <template #trigger>
        <n-button @click="showPopover = !showPopover">
          手动（不会有事件发出来）
        </n-button>
      </template>
      <span> I wish they all could be California girls </span>
    </n-tooltip>
  </n-space>
</template>
```

## 位置

```vue
<template>
  <n-tooltip placement="top-start" trigger="hover">
    <template #trigger>
      <n-button> 上边一开始 </n-button>
    </template>
    哇哦，Awesome！
  </n-tooltip>
</template>
```

## 主体样式

有时候设定主体样式还是挺有用的。

```vue
<template>
  <n-space>
    <n-tooltip :style="{ maxWidth: '400px' }" trigger="click">
      <template #trigger>
        <n-button> 加州女孩 </n-button>
      </template>
      我希望她们都是加州女孩，我希望她们都是加州女孩，我希望她们都是加州女孩
    </n-tooltip>
    <n-tooltip :style="{ maxWidth: '400px' }" trigger="click">
      <template #trigger>
        <n-button> 加州女孩 </n-button>
      </template>
      我希望...
    </n-tooltip>
  </n-space>
</template>
```

## 不要箭头

```vue
<template>
  <n-tooltip :show-arrow="false" trigger="hover">
    <template #trigger>
      <n-button>默认有箭头</n-button>
    </template>
    和 Popover 一样
  </n-tooltip>
</template>
```

