# 弹出选择 Popselect - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Drive My Car')
const options = [
  {
    label: 'Drive My Car',
    value: 'Drive My Car'
  },
  {
    label: 'Norwegian Wood',
    value: 'Norwegian Wood'
  },
  {
    label: 'You Won\'t See',
    value: 'You Won\'t See',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'Nowhere Man'
  },
  {
    label: 'Think For Yourself',
    value: 'Think For Yourself'
  },
  {
    label: 'The Word',
    value: 'The Word'
  },
  {
    label: 'Michelle',
    value: 'Michelle',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'What goes on'
  },
  {
    label: 'Girl',
    value: 'Girl'
  },
  {
    label: 'I\'m looking through you',
    value: 'I\'m looking through you'
  },
  {
    label: 'In My Life',
    value: 'In My Life'
  },
  {
    label: 'Wait',
    value: 'Wait'
  }
]
</script>

<template>
  <n-popselect v-model:value="value" :options="options" trigger="click">
    <n-button>{{ value || '弹出选择' }}</n-button>
  </n-popselect>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Drive My Car')
const options = [
  {
    label: 'Drive My Car',
    value: 'Drive My Car'
  },
  {
    label: 'Norwegian Wood',
    value: 'Norwegian Wood'
  },
  {
    label: 'You Won\'t See',
    value: 'You Won\'t See',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'Nowhere Man'
  },
  {
    label: 'Think For Yourself',
    value: 'Think For Yourself'
  },
  {
    label: 'The Word',
    value: 'The Word'
  },
  {
    label: 'Michelle',
    value: 'Michelle',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'What goes on'
  },
  {
    label: 'Girl',
    value: 'Girl'
  },
  {
    label: 'I\'m looking through you',
    value: 'I\'m looking through you'
  },
  {
    label: 'In My Life',
    value: 'In My Life'
  },
  {
    label: 'Wait',
    value: 'Wait'
  }
]
</script>

<template>
  <n-space>
    <n-popselect v-model:value="value" :options="options" size="medium">
      <n-button>
        {{ value || 'Popselect' }}
      </n-button>
    </n-popselect>
    <n-popselect v-model:value="value" :options="options" size="large">
      <n-button>{{ value || 'Popselect' }}</n-button>
    </n-popselect>
  </n-space>
</template>
```

## 让它滚动

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Drive My Car')
const options = [
  {
    label: 'Drive My Car',
    value: 'Drive My Car'
  },
  {
    label: 'Norwegian Wood',
    value: 'Norwegian Wood'
  },
  {
    label: 'You Won\'t See',
    value: 'You Won\'t See',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'Nowhere Man'
  },
  {
    label: 'Think For Yourself',
    value: 'Think For Yourself'
  },
  {
    label: 'The Word',
    value: 'The Word'
  },
  {
    label: 'Michelle',
    value: 'Michelle',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'What goes on'
  },
  {
    label: 'Girl',
    value: 'Girl'
  },
  {
    label: 'I\'m looking through you',
    value: 'I\'m looking through you'
  },
  {
    label: 'In My Life',
    value: 'In My Life'
  },
  {
    label: 'Wait',
    value: 'Wait'
  }
]
</script>

<template>
  <n-popselect
    v-model:value="value"
    :options="options"
    size="medium"
    scrollable
  >
    <n-button style="margin-right: 8px">
      {{ value || 'Popselect' }}
    </n-button>
  </n-popselect>
</template>
```

## 多选

在弹出选择选中多个值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref<string[] | null>(null)
const options = [
  {
    label: 'Go Let It Out',
    value: 'Go Let It Out'
  },
  {
    label: 'Who Feels Love?',
    value: 'Who Feels Love?'
  },
  {
    label: 'Sunday Morning Call',
    value: 'Sunday Morning Call',
    disabled: true
  },
  {
    label: 'Roll It Over',
    value: 'Roll It Over'
  }
]
</script>

<template>
  <n-popselect v-model:value="value" multiple :options="options">
    <n-button>
      {{ Array.isArray(value) && value.length ? value : '没了' }}
    </n-button>
  </n-popselect>
</template>
```

## 插槽

有人要在选择菜单里用插槽吗？

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('空的')
</script>

<template>
  <n-popselect v-model:value="value" :options="[]" trigger="click">
    <n-button>{{ value || '弹出选择' }}</n-button>
    <template #header>
      不知道放些什么
    </template>
    <template #empty>
      没啥看的，这里是空的
    </template>
    <template #action>
      如果你点开了这个例子，你可能需要它
    </template>
  </n-popselect>
</template>
```

