# 弹出确认 Popconfirm - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handlePositiveClick() {
  message.info('是的')
}

function handleNegativeClick() {
  message.info('并不')
}
</script>

<template>
  <n-popconfirm
    @positive-click="handlePositiveClick"
    @negative-click="handleNegativeClick"
  >
    <template #trigger>
      <n-button>引用</n-button>
    </template>
    一切都将一去杳然，任何人都无法将其捕获。
  </n-popconfirm>
</template>
```

## 自定义操作

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <n-space>
    <n-popconfirm v-model:show="show">
      <template #trigger>
        <n-button>引用</n-button>
      </template>
      譬如，我或许可以就大象本身写一点什么，但对象的驯化却不知从何写起。
      <template #action>
        <n-button size="small" @click="show = false">
          或许吧
        </n-button>
      </template>
    </n-popconfirm>
    <n-popconfirm positive-text="噢!">
      <template #trigger>
        <n-button>引用</n-button>
      </template>
      譬如，我或许可以就大象本身写一点什么，但对象的驯化却不知从何写起。
    </n-popconfirm>
  </n-space>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { MdHand as HandIcon } from '@vicons/ionicons4'
</script>

<template>
  <n-popconfirm positive-text="ok" negative-text="not ok">
    <template #icon>
      <n-icon color="red">
        <HandIcon />
      </n-icon>
    </template>
    <template #trigger>
      <n-button>退出游戏</n-button>
    </template>
    不充钱怎么变强？
  </n-popconfirm>
</template>
```

## 事件

`positive-click` & `negative-click`

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handlePositiveClick() {
  message.info('positive click')
}

function handleNegativeClick() {
  message.info('negative click')
}
</script>

<template>
  <n-popconfirm
    @positive-click="handlePositiveClick"
    @negative-click="handleNegativeClick"
  >
    <template #trigger>
      <n-button>退出游戏</n-button>
    </template>
    我看 B 站的时候，听说有些游戏冲钱也是找罪受。
  </n-popconfirm>
</template>
```

## 没有图标

```vue
<template>
  <n-popconfirm :show-icon="false">
    <template #trigger>
      <n-button>没图标</n-button>
    </template>
    就是这样
  </n-popconfirm>
</template>
```

## 操作

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handlePositiveClick() {
  message.info('是的')
}

function handleNegativeClick() {
  message.info('并不')
}
</script>

<template>
  <n-space>
    <n-popconfirm
      @positive-click="handlePositiveClick"
      @negative-click="handleNegativeClick"
    >
      <template #trigger>
        <n-button>引用</n-button>
      </template>
      一切都将一去杳然，任何人都无法将其捕获。
    </n-popconfirm>
    <n-popconfirm :negative-text="null" @positive-click="handlePositiveClick">
      <template #trigger>
        <n-button>只有确定</n-button>
      </template>
      一切都将一去杳然，任何人都无法将其捕获。
    </n-popconfirm>
    <n-popconfirm :positive-text="null" @negative-click="handleNegativeClick">
      <template #trigger>
        <n-button>只有取消</n-button>
      </template>
      一切都将一去杳然，任何人都无法将其捕获。
    </n-popconfirm>
    <n-popconfirm :positive-text="null" :negative-text="null">
      <template #trigger>
        <n-button>什么也没有</n-button>
      </template>
      一切都将一去杳然，任何人都无法将其捕获。
    </n-popconfirm>
    <n-popconfirm>
      <template #trigger>
        <n-button>自定义 action</n-button>
      </template>
      <template #action>
        自定义 action
      </template>
      一切都将一去杳然，任何人都无法将其捕获。
    </n-popconfirm>
  </n-space>
</template>
```

