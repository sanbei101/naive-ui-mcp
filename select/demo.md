# 选择器 Select - 演示示例

## 基础用法

选择器的基础用法。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="value" :options="options" />
    <n-select v-model:value="value" disabled :options="options" />
  </n-space>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="value" size="tiny" :options="options" />
    <n-select v-model:value="value" size="small" :options="options" />
    <n-select v-model:value="value" size="medium" :options="options" />
    <n-select v-model:value="value" size="large" :options="options" />
  </n-space>
</template>
```

## 多选

多选值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(['song3'])
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="value" multiple :options="options" />
    <n-select v-model:value="value" multiple disabled :options="options" />
  </n-space>
</template>
```

## UpdateValue 事件

为什么 `update:value` 事件还是个例子？因为一开始的时候没什么可写的。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleUpdateValue(value: string, option: SelectOption) {
  message.info(`value: ${JSON.stringify(value)}`)
  message.info(`option: ${JSON.stringify(option)}`)
}

const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      placeholder="选择歌曲"
      :options="options"
      @update:value="handleUpdateValue"
    />
    <n-select
      multiple
      placeholder="选择歌曲"
      :options="options"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 可过滤

上吧！过滤器。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const selectedValue = ref(null)
const selectedValues = ref(null)
const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="selectedValue"
      filterable
      placeholder="选择歌曲"
      :options="options"
    />
    <n-select
      v-model:value="selectedValues"
      multiple
      filterable
      placeholder="选择歌曲"
      :options="options"
    />
  </n-space>
</template>
```

## 动态创建选项

使用 `tag` & `filterable` 来允许动态创建选项。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const multipleSelectValue = ref(null)
const selectValue = ref(null)
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="multipleSelectValue"
      filterable
      multiple
      tag
      :options="options"
    />
    <n-select v-model:value="selectValue" filterable tag :options="options" />
  </n-space>
</template>
```

## 菜单宽度

菜单宽度可以跟随菜单内容（这种情况下无法进行虚拟滚动）。

```vue
<script lang="ts" setup>
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select :options="options" :consistent-menu-width="false" />
    <n-select multiple :options="options" :consistent-menu-width="false" />
  </n-space>
</template>
```

## 异步加载（单选）

异步单选的例子。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import { ref } from 'vue'

const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const value = ref(null)
const loadingRef = ref(false)
const optionsRef = ref<SelectOption[]>([])

function handleSearch(query: string) {
  if (!query.length) {
    optionsRef.value = []
    return
  }
  loadingRef.value = true
  window.setTimeout(() => {
    optionsRef.value = options.filter(item => ~item.label.indexOf(query))
    loadingRef.value = false
  }, 1000)
}
</script>

<template>
  <n-select
    v-model:value="value"
    filterable
    placeholder="搜索歌曲"
    :options="optionsRef"
    :loading="loadingRef"
    clearable
    remote
    @search="handleSearch"
  />
</template>
```

## 异步加载（多选）

异步多选的例子。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import { ref } from 'vue'

const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const selectedValues = ref(null)
const loadingRef = ref(false)
const optionsRef = ref<SelectOption[]>([])

function handleSearch(query: string) {
  if (!query.length) {
    optionsRef.value = []
    return
  }
  loadingRef.value = true
  window.setTimeout(() => {
    optionsRef.value = options.filter(item => ~item.label.indexOf(query))
    loadingRef.value = false
  }, 1000)
}
</script>

<template>
  <n-select
    v-model:value="selectedValues"
    multiple
    filterable
    placeholder="搜索歌曲"
    :options="optionsRef"
    :loading="loadingRef"
    clearable
    remote
    :clear-filter-after-select="false"
    @search="handleSearch"
  />
</template>
```

## 可清空

注意只有选了值才能清空值。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const selectedValue = ref(null)
const selectedArray = ref([])
const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="selectedValue" :options="options" clearable />
    <n-select
      v-model:value="selectedArray"
      multiple
      :options="options"
      clearable
    />
    <n-select
      v-model:value="selectedValue"
      :options="options"
      filterable
      clearable
    />
    <n-select
      v-model:value="selectedArray"
      multiple
      :options="options"
      filterable
      clearable
    />
  </n-space>
</template>
```

## 滚动事件

同事说要用这个来触发做异步加载。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const optionsRef = ref([
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourseld',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
])

function handleScroll(e: Event) {
  const currentTarget = e.currentTarget as HTMLElement
  if (
    currentTarget.scrollTop + currentTarget.offsetHeight
    >= currentTarget.scrollHeight
  ) {
    optionsRef.value.push(
      {
        label: `v1-${optionsRef.value.length}`,
        value: `v1-${optionsRef.value.length}`
      },
      {
        label: `v2-${optionsRef.value.length}`,
        value: `v2-${optionsRef.value.length}`
      }
    )
  }
}
</script>

<template>
  <n-select
    :options="optionsRef"
    :reset-menu-on-options-change="false"
    @scroll="handleScroll"
  />
</template>
```

## 选项组

把选项集合成组。

```vue
<script lang="ts" setup>
import type { SelectGroupOption, SelectOption } from 'naive-ui'
import { ref } from 'vue'

const value = ref(null)
const options: Array<SelectOption | SelectGroupOption> = [
  {
    type: 'group',
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        value: 'song0',
        disabled: true
      },
      {
        label: 'Drive My Car',
        value: 'song1'
      },
      {
        label: 'Norwegian Wood',
        value: 'song2'
      },
      {
        label: 'You Won\'t See',
        value: 'song3',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        value: 'song4'
      },
      {
        label: 'Think For Yourself',
        value: 'song5'
      },
      {
        label: 'The Word',
        value: 'song6'
      },
      {
        label: 'Michelle',
        value: 'song7',
        disabled: true
      },
      {
        label: 'What goes on',
        value: 'song8'
      },
      {
        label: 'Girl',
        value: 'song9'
      },
      {
        label: 'I\'m looking through you',
        value: 'song10'
      },
      {
        label: 'In My Life',
        value: 'song11'
      },
      {
        label: 'Wait',
        value: 'song12'
      }
    ]
  },
  {
    type: 'group',
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        value: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        value: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        value: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        value: 'I Me Mine'
      },
      {
        label: 'Dig It',
        value: 'Dig It'
      },
      {
        label: 'Let It Be',
        value: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        value: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        value: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        value: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        value: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        value: 'For You Blue'
      },
      {
        label: 'Get Back',
        value: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-select v-model:value="value" filterable :options="options" />
</template>
```

## 许多选项

1000 倍宇宙的终极答案个数的选项。

```vue
<script lang="ts" setup>
import { repeat } from 'seemly'
import { ref } from 'vue'

const value = ref(null)
const values = ref(null)
const options = repeat(42000, undefined).map((_, i) => ({
  label: String(i),
  value: i
}))
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="value" :options="options" />
    <n-select v-model:value="values" multiple :options="options" />
  </n-space>
</template>
```

## 自定义选项渲染

经过了很久的思考，我决定放弃支持 slot API。当然，还是提供自定义渲染选项的方式。(例子中使用了 `render-label` 属性，但是你可以直接使用 `option` 的 `style` 或 `class` 选项)

```vue
<script lang="ts" setup>
import type { SelectGroupOption, SelectOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { MdMusicalNote as MusicIcon } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

const options: Array<SelectOption | SelectGroupOption> = [
  {
    type: 'group',
    label: 'Rubber Soul',
    key: 'Rubber Soul Album',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        value: 'song0',
        disabled: true
      },
      {
        label: 'Drive My Car',
        value: 'song1',
        style: {
          color: 'red'
        }
      },
      {
        label: 'Norwegian Wood',
        value: 'song2'
      },
      {
        label: 'You Won\'t See',
        value: 'song3',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        value: 'song4'
      },
      {
        label: 'Think For Yourself',
        value: 'song5'
      },
      {
        label: 'The Word',
        value: 'song6'
      },
      {
        label: 'Michelle',
        value: 'song7',
        disabled: true
      },
      {
        label: 'What goes on',
        value: 'song8'
      },
      {
        label: 'Girl',
        value: 'song9'
      },
      {
        label: 'I\'m looking through you',
        value: 'song10'
      },
      {
        label: 'In My Life',
        value: 'song11'
      },
      {
        label: 'Wait',
        value: 'song12'
      }
    ]
  },
  {
    type: 'group',
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        value: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        value: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        value: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        value: 'I Me Mine'
      },
      {
        label: 'Dig It',
        value: 'Dig It'
      },
      {
        label: 'Let It Be',
        value: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        value: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        value: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        value: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        value: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        value: 'For You Blue'
      },
      {
        label: 'Get Back',
        value: 'Get Back'
      }
    ]
  }
]

function renderLabel(option: SelectOption): VNodeChild {
  if (option.type === 'group')
    return `${option.label}(Cool!)`
  return [
    h(
      NIcon,
      {
        style: {
          verticalAlign: '-0.15em',
          marginRight: '4px'
        }
      },
      {
        default: () => h(MusicIcon)
      }
    ),
    option.label as string
  ]
}
</script>

<template>
  <n-select :options="options" :render-label="renderLabel" />
</template>
```

## 自定义箭头

整点不一样的。

```vue
<script lang="ts" setup>
import Flash16Regular from '@vicons/fluent/Flash16Regular'
import FlashCheckmark16Regular from '@vicons/fluent/FlashCheckmark16Regular'
import { MdSearch } from '@vicons/ionicons4'
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const options = [
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3'
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7'
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:show="show1" placeholder="选择歌曲" :options="options">
      <template #arrow>
        <transition name="slide-left">
          <FlashCheckmark16Regular v-if="show1" />
          <Flash16Regular v-else />
        </transition>
      </template>
    </n-select>
    <n-select
      v-model:show="show2"
      filterable
      placeholder="选择歌曲"
      :options="options"
    >
      <template v-if="show2" #arrow>
        <MdSearch />
      </template>
    </n-select>
  </n-space>
</template>

<style>
:deep(.slide-left-enter-active),
:deep(.slide-left-leave-active) {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

:deep(.slide-left-enter-from),
:deep(.slide-left-leave-to) {
  position: absolute;
  opacity: 0;
}

:deep(.slide-left-enter-from) {
  transform: translateX(-10px);
}

:deep(.slide-left-leave-to) {
  transform: translateX(10px);
}
</style>
```

## 操作插槽

有人要在选择菜单里用这个插槽吗？

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  }
]
</script>

<template>
  <n-select v-model:value="value" :options="options">
    <template #header>
      不知道放些什么
    </template>
    <template #action>
      如果你点开了这个例子，你可能需要它
    </template>
  </n-select>
</template>
```

## 回退选项

如果你不需要回退选项，将 `fallback-option` 设为 `false` 即可，这时只有出现在选项中的值才会被视为合法值，在操作的过程中不合法的值会被清除掉。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import { ref } from 'vue'

function trim(value: string): SelectOption {
  return {
    label: value.slice(0, 2),
    value
  }
}

const singleValue = ref('一个不知哪里来的值')
const multipleValue = ref(['一个不知哪里来的值', '两个不知哪里来的值'])
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select v-model:value="singleValue" :options="options" />
    <n-select
      v-model:value="multipleValue"
      multiple
      :fallback-option="trim"
      :options="options"
    />
    <n-select
      v-model:value="singleValue"
      placeholder="无回退选项"
      :fallback-option="false"
      :options="options"
    />
    <n-select
      v-model:value="multipleValue"
      placeholder="无回退选项"
      multiple
      :fallback-option="false"
      :options="options"
    />
  </n-space>
</template>
```

## 最大标签数量

可以设定固定的数量，或者使用 `responsive` 设定响应式的最大标签数量。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      v-model:value="value"
      placeholder="maxTagCount = responsive"
      multiple
      :options="options"
      max-tag-count="responsive"
      size="small"
    />
    <n-select
      v-model:value="value"
      placeholder="maxTagCount = 3"
      multiple
      :options="options"
      :max-tag-count="3"
    />
  </n-space>
</template>
```

## 给选项增加 Tooltip

`render-option` 可以让你控制整个选项的渲染。

```vue
<script lang="ts" setup>
import type { SelectOption } from 'naive-ui'
import type { VNode } from 'vue'
import { NTooltip } from 'naive-ui'
import { h, ref } from 'vue'

function renderOption({ node, option }: { node: VNode, option: SelectOption }) {
  return h(NTooltip, null, {
    trigger: () => node,
    default: () => `Rubber Soul -${option.label}`
  })
}

const options = ref([
  {
    label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: 'You Won\'t See',
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: 'I\'m looking through you',
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
])
</script>

<template>
  <n-select :options="options" :render-option="renderOption" />
</template>
```

## 自定义标签渲染

给标签一点颜色看看。

```vue
<script lang="ts" setup>
import type { SelectRenderTag } from 'naive-ui'
import { NTag } from 'naive-ui'
import { h, ref } from 'vue'

const value = ref([])

const renderTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      type: option.type as 'success' | 'warning' | 'error',
      closable: true,
      onMousedown: (e: FocusEvent) => {
        e.preventDefault()
      },
      onClose: (e: MouseEvent) => {
        e.stopPropagation()
        handleClose()
      }
    },
    { default: () => option.label }
  )
}

const options = [
  {
    label: '今天在摸鱼',
    value: 'value1',
    type: 'success'
  },
  {
    label: '工作没做完',
    value: 'value2',
    type: 'warning'
  },
  {
    label: '晚上要加班',
    value: 'value3',
    type: 'error'
  }
]
</script>

<template>
  <n-select
    v-model:value="value"
    multiple
    :render-tag="renderTag"
    :options="options"
  />
</template>
```

## 手动 focus & blur

```vue
<script lang="ts" setup>
import type { SelectInst } from 'naive-ui'
import { ref } from 'vue'

const selectInstRef = ref<SelectInst | null>(null)

function handleClick() {
  selectInstRef.value?.focus()
  setTimeout(() => {
    selectInstRef.value?.blur()
  }, 1000)
}
</script>

<template>
  <n-space item-style="display: flex; align-item: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <n-select ref="selectInstRef" style="width: 200px" />
  </n-space>
</template>
```

## 选择人员

我发现很多场景需要把 Select 改为一个人员选择器，这是一个教你如何定制的演示。

```vue
<script lang="ts" setup>
import type { SelectRenderLabel, SelectRenderTag } from 'naive-ui'
import { NAvatar, NTag, NText } from 'naive-ui'
import { h } from 'vue'

const renderMultipleSelectTag: SelectRenderTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      style: {
        padding: '0 6px 0 4px'
      },
      round: true,
      closable: true,
      onClose: (e) => {
        e.stopPropagation()
        handleClose()
      }
    },
    {
      default: () =>
        h(
          'div',
          {
            style: {
              display: 'flex',
              alignItems: 'center'
            }
          },
          [
            h(NAvatar, {
              src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
              round: true,
              size: 22,
              style: {
                marginRight: '4px'
              }
            }),
            option.label as string
          ]
        )
    }
  )
}

const renderSingleSelectTag: SelectRenderTag = ({ option }) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 24,
        style: {
          marginRight: '12px'
        }
      }),
      option.label as string
    ]
  )
}

const renderLabel: SelectRenderLabel = (option) => {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    },
    [
      h(NAvatar, {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        round: true,
        size: 'small'
      }),
      h(
        'div',
        {
          style: {
            marginLeft: '12px',
            padding: '4px 0'
          }
        },
        [
          h('div', null, [option.label as string]),
          h(
            NText,
            { depth: 3, tag: 'div' },
            {
              default: () => 'description'
            }
          )
        ]
      )
    ]
  )
}

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: '08akioni',
    value: '08akioni'
  },
  {
    label: '09akioni',
    value: '09akioni'
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderSingleSelectTag"
    />
    <n-select
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderSingleSelectTag"
      filterable
    />
    <n-select
      multiple
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderMultipleSelectTag"
    />
    <n-select
      multiple
      :options="options"
      :render-label="renderLabel"
      :render-tag="renderMultipleSelectTag"
      filterable
    />
  </n-space>
</template>
```

## 作为 Tag 框输入使用

使用 `tag` 和 `:show="false"` 来作为 Tag 框输入使用。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const multipleSelectValue = ref(null)
</script>

<template>
  <n-select
    v-model:value="multipleSelectValue"
    filterable
    multiple
    tag
    placeholder="输入，按回车确认"
    :show-arrow="false"
    :show="false"
  />
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-select status="warning" placeholder="" />
    <n-select status="error" placeholder="" />
  </n-space>
</template>
```

## 自定义字段

后端会传来各种各样的数据。

```vue
<script lang="ts" setup>
import type { SelectGroupOption, SelectOption } from 'naive-ui'

const options: Array<SelectGroupOption | SelectOption> = [
  {
    type: 'group',
    whateverLabel: 'Rubber Soul',
    key: 'Rubber Soul',
    whateverChildren: [
      {
        whateverLabel:
          'Everybody\'s Got Something to Hide Except Me and My Monkey',
        whateverValue: 'song0',
        disabled: true
      },
      {
        whateverLabel: 'Drive My Car',
        whateverValue: 'song1'
      },
      {
        whateverLabel: 'Norwegian Wood',
        whateverValue: 'song2'
      },
      {
        whateverLabel: 'You Won\'t See',
        whateverValue: 'song3',
        disabled: true
      },
      {
        whateverLabel: 'Nowhere Man',
        whateverValue: 'song4'
      },
      {
        whateverLabel: 'Think For Yourself',
        whateverValue: 'song5'
      },
      {
        whateverLabel: 'The Word',
        whateverValue: 'song6'
      },
      {
        whateverLabel: 'Michelle',
        whateverValue: 'song7',
        disabled: true
      },
      {
        whateverLabel: 'What goes on',
        whateverValue: 'song8'
      },
      {
        whateverLabel: 'Girl',
        whateverValue: 'song9'
      },
      {
        whateverLabel: 'I\'m looking through you',
        whateverValue: 'song10'
      },
      {
        whateverLabel: 'In My Life',
        whateverValue: 'song11'
      },
      {
        whateverLabel: 'Wait',
        whateverValue: 'song12'
      }
    ]
  },
  {
    type: 'group',
    whateverLabel: 'Let It Be',
    key: 'Let It Be Album',
    whateverChildren: [
      {
        whateverLabel: 'Two Of Us',
        whateverValue: 'Two Of Us'
      },
      {
        whateverLabel: 'Dig A Pony',
        whateverValue: 'Dig A Pony'
      },
      {
        whateverLabel: 'Across The Universe',
        whateverValue: 'Across The Universe'
      },
      {
        whateverLabel: 'I Me Mine',
        whateverValue: 'I Me Mine'
      },
      {
        whateverLabel: 'Dig It',
        whateverValue: 'Dig It'
      },
      {
        whateverLabel: 'Let It Be',
        whateverValue: 'Let It Be'
      },
      {
        whateverLabel: 'Maggie Mae',
        whateverValue: 'Maggie Mae'
      },
      {
        whateverLabel: 'I\'ve Got A Feeling',
        whateverValue: 'I\'ve Got A Feeling'
      },
      {
        whateverLabel: 'One After 909',
        whateverValue: 'One After 909'
      },
      {
        whateverLabel: 'The Long And Winding Road',
        whateverValue: 'The Long And Winding Road'
      },
      {
        whateverLabel: 'For You Blue',
        whateverValue: 'For You Blue'
      },
      {
        whateverLabel: 'Get Back',
        whateverValue: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical>
    <n-select
      label-field="whateverLabel"
      value-field="whateverValue"
      children-field="whateverChildren"
      filterable
      :options="options"
    />
    <n-select
      label-field="whateverLabel"
      value-field="whateverValue"
      children-field="whateverChildren"
      filterable
      multiple
      :options="options"
    />
  </n-space>
</template>
```

