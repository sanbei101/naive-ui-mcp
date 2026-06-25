# 树型选择 Tree Select - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'

function handleUpdateValue(
  value: string | number | Array<string | number> | null,
  option: TreeSelectOption | null | Array<TreeSelectOption | null>
) {
  console.log(value, option)
}

const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        key: 'I Me Mine'
      },
      {
        label: 'Dig It',
        key: 'Dig It'
      },
      {
        label: 'Let It Be',
        key: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        key: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        key: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        key: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        key: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        key: 'For You Blue'
      },
      {
        label: 'Get Back',
        key: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    :options="options"
    default-value="Drive My Car"
    @update:value="handleUpdateValue"
  />
</template>
```

## 自定义字段

后端会传来各种各样的数据。

```vue
<script lang="ts" setup>
const options = [
  {
    whateverLabel: 'Rubber Soul',
    whateverKey: 'Rubber Soul',
    whateverChildren: [
      {
        whateverLabel:
          'Everybody\'s Got Something to Hide Except Me and My Monkey',
        whateverKey: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        whateverLabel: 'Drive My Car',
        whateverKey: 'Drive My Car',
        disabled: true
      },
      {
        whateverLabel: 'Norwegian Wood',
        whateverKey: 'Norwegian Wood'
      },
      {
        whateverLabel: 'You Won\'t See',
        whateverKey: 'You Won\'t See',
        disabled: true
      },
      {
        whateverLabel: 'Nowhere Man',
        whateverKey: 'Nowhere Man'
      },
      {
        whateverLabel: 'Think For Yourself',
        whateverKey: 'Think For Yourself'
      },
      {
        whateverLabel: 'The Word',
        whateverKey: 'The Word'
      },
      {
        whateverLabel: 'Michelle',
        whateverKey: 'Michelle',
        disabled: true
      },
      {
        whateverLabel: 'What goes on',
        whateverKey: 'What goes on'
      },
      {
        whateverLabel: 'Girl',
        whateverKey: 'Girl'
      },
      {
        whateverLabel: 'I\'m looking through you',
        whateverKey: 'I\'m looking through you'
      },
      {
        whateverLabel: 'In My Life',
        whateverKey: 'In My Life'
      },
      {
        whateverLabel: 'Wait',
        whateverKey: 'Wait'
      }
    ]
  },
  {
    whateverLabel: 'Let It Be',
    whateverKey: 'Let It Be Album',
    whateverChildren: [
      {
        whateverLabel: 'Two Of Us',
        whateverKey: 'Two Of Us'
      },
      {
        whateverLabel: 'Dig A Pony',
        whateverKey: 'Dig A Pony'
      },
      {
        whateverLabel: 'Across The Universe',
        whateverKey: 'Across The Universe'
      },
      {
        whateverLabel: 'I Me Mine',
        whateverKey: 'I Me Mine'
      },
      {
        whateverLabel: 'Dig It',
        whateverKey: 'Dig It'
      },
      {
        whateverLabel: 'Let It Be',
        whateverKey: 'Let It Be'
      },
      {
        whateverLabel: 'Maggie Mae',
        whateverKey: 'Maggie Mae'
      },
      {
        whateverLabel: 'I\'ve Got A Feeling',
        whateverKey: 'I\'ve Got A Feeling'
      },
      {
        whateverLabel: 'One After 909',
        whateverKey: 'One After 909'
      },
      {
        whateverLabel: 'The Long And Winding Road',
        whateverKey: 'The Long And Winding Road'
      },
      {
        whateverLabel: 'For You Blue',
        whateverKey: 'For You Blue'
      },
      {
        whateverLabel: 'Get Back',
        whateverKey: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    :options="options"
    default-value="Drive My Car"
    label-field="whateverLabel"
    key-field="whateverKey"
    children-field="whateverChildren"
  />
</template>
```

## 多选

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'

function handleUpdateValue(
  value: string | number | Array<string | number> | null,
  option: TreeSelectOption | null | Array<TreeSelectOption | null>
) {
  console.log(value, option)
}

const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        key: 'I Me Mine'
      },
      {
        label: 'Dig It',
        key: 'Dig It'
      },
      {
        label: 'Let It Be',
        key: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        key: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        key: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        key: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        key: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        key: 'For You Blue'
      },
      {
        label: 'Get Back',
        key: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    multiple
    :options="options"
    :default-value="['Norwegian Wood']"
    @update:value="handleUpdateValue"
  />
</template>
```

## 使用 Checkbox 选择

想达到 demo 的效果，`checkable`、`cascade`、`multiple` 需要同时设定。

```vue
<script lang="ts" setup>
const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        key: 'I Me Mine'
      },
      {
        label: 'Dig It',
        key: 'Dig It'
      },
      {
        label: 'Let It Be',
        key: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        key: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        key: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        key: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        key: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        key: 'For You Blue'
      },
      {
        label: 'Get Back',
        key: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    multiple
    cascade
    checkable
    :options="options"
    :default-value="['Norwegian Wood']"
  />
</template>
```

## 指定勾选策略

设置勾选策略来指定显示的勾选节点，`all` 表示显示全部选中节点；`parent` 表示只显示父节点（当父节点下所有子节点都选中时）；`child` 表示只显示子节点。

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'
import { ref } from 'vue'

const checkStrategy = ref<'all' | 'child' | 'parent'>('all')
const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe',
        children: [
          {
            label: 'Dig It',
            key: 'Dig It'
          },
          {
            label: 'go',
            key: 'go'
          }
        ]
      }
    ]
  }
]

function handleUpdateValue(
  value: string | number | Array<string | number> | null,
  option: TreeSelectOption | null | Array<TreeSelectOption | null>
) {
  console.log(value, option)
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-radio-group v-model:value="checkStrategy">
        <n-radio-button value="all">
          All
        </n-radio-button>
        <n-radio-button value="parent">
          Parent
        </n-radio-button>
        <n-radio-button value="child">
          Child
        </n-radio-button>
      </n-radio-group>
    </n-space>
    <n-tree-select
      multiple
      cascade
      checkable
      :check-strategy="checkStrategy"
      :options="options"
      :default-value="['Dig It', 'go']"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 连接线

使用 `show-line` 属性显示树的连接线。

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'

const options: TreeSelectOption[] = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Drive My Car',
        key: 'Drive My Car'
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See'
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe'
      },
      {
        label: 'Let It Be',
        key: 'Let It Be'
      },
      {
        label: 'Get Back',
        key: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    show-line
    default-expand-all
    :options="options"
    default-value="Drive My Car"
  />
</template>
```

## 可过滤

```vue
<script lang="ts" setup>
const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  },
  {
    label: 'Let It Be',
    key: 'Let It Be Album',
    children: [
      {
        label: 'Two Of Us',
        key: 'Two Of Us'
      },
      {
        label: 'Dig A Pony',
        key: 'Dig A Pony'
      },
      {
        label: 'Across The Universe',
        key: 'Across The Universe'
      },
      {
        label: 'I Me Mine',
        key: 'I Me Mine'
      },
      {
        label: 'Dig It',
        key: 'Dig It'
      },
      {
        label: 'Let It Be',
        key: 'Let It Be'
      },
      {
        label: 'Maggie Mae',
        key: 'Maggie Mae'
      },
      {
        label: 'I\'ve Got A Feeling',
        key: 'I\'ve Got A Feeling'
      },
      {
        label: 'One After 909',
        key: 'One After 909'
      },
      {
        label: 'The Long And Winding Road',
        key: 'The Long And Winding Road'
      },
      {
        label: 'For You Blue',
        key: 'For You Blue'
      },
      {
        label: 'Get Back',
        key: 'Get Back'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical>
    <n-tree-select
      filterable
      :options="options"
      default-value="Drive My Car"
      clearable
    />
    <n-tree-select
      multiple
      checkable
      filterable
      :clear-filter-after-select="false"
      :options="options"
      :default-value="['Norwegian Wood']"
      clearable
    />
  </n-space>
</template>
```

## 操作插槽

可能你需要在树型选择菜单里用这个插槽。

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'

function handleUpdateValue(
  value: string | number | Array<string | number> | null,
  option: TreeSelectOption | null | Array<TreeSelectOption | null>
) {
  console.log(value, option)
}

const options = [
  {
    label: 'Rubber Soul',
    key: 'Rubber Soul',
    children: [
      {
        label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
        key: 'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        label: 'Drive My Car',
        key: 'Drive My Car',
        disabled: true
      },
      {
        label: 'Norwegian Wood',
        key: 'Norwegian Wood'
      },
      {
        label: 'You Won\'t See',
        key: 'You Won\'t See',
        disabled: true
      },
      {
        label: 'Nowhere Man',
        key: 'Nowhere Man'
      },
      {
        label: 'Think For Yourself',
        key: 'Think For Yourself'
      },
      {
        label: 'The Word',
        key: 'The Word'
      },
      {
        label: 'Michelle',
        key: 'Michelle',
        disabled: true
      },
      {
        label: 'What goes on',
        key: 'What goes on'
      },
      {
        label: 'Girl',
        key: 'Girl'
      },
      {
        label: 'I\'m looking through you',
        key: 'I\'m looking through you'
      },
      {
        label: 'In My Life',
        key: 'In My Life'
      },
      {
        label: 'Wait',
        key: 'Wait'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    :options="options"
    default-value="Drive My Car"
    @update:value="handleUpdateValue"
  >
    <template #header>
      不知道放些什么
    </template>
    <template #action>
      你可以在这里自定义一些操作
    </template>
  </n-tree-select>
</template>
```

## 异步加载

使用 `on-load` 回调来加载数据。异步加载时，所有 `isLeaf` 为 `false` 并且 `children` 不为数组的节点会被视为未加载的节点。

```vue
<script lang="ts" setup>
import type { TreeSelectOption } from 'naive-ui'
import { ref } from 'vue'

function getChildren(option: TreeSelectOption) {
  const children = []
  for (let i = 0; i <= (option as { depth: number }).depth; ++i) {
    children.push({
      label: `${option.label}-${i}`,
      key: `${option.label}-${i}`,
      depth: (option as { depth: number }).depth + 1,
      isLeaf: option.depth === 3
    })
  }
  return children
}

const checkStrategy = ref<'all' | 'parent' | 'child'>('all')
const cascade = ref(false)
const showPath = ref(true)
const value = ref(null)
const options = ref([
  {
    label: 'l-0',
    key: 'v-0',
    depth: 1,
    isLeaf: false
  }
])

function handleLoad(option: TreeSelectOption) {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => {
      option.children = getChildren(option)
      resolve()
    }, 1000)
  })
}
</script>

<template>
  <n-space vertical>
    <n-space align="center">
      <n-radio-group v-model:value="checkStrategy">
        <n-radio-button value="all">
          All
        </n-radio-button>
        <n-radio-button value="parent">
          Parent
        </n-radio-button>
        <n-radio-button value="child">
          Child
        </n-radio-button>
      </n-radio-group>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
      <n-space><n-switch v-model:value="cascade" />Cascade </n-space>
    </n-space>
    <n-tree-select
      v-model:value="value"
      multiple
      checkable
      :options="options"
      :cascade="cascade"
      :check-strategy="checkStrategy"
      :show-path="showPath"
      :allow-checking-not-loaded="cascade"
      :on-load="handleLoad"
    />
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-tree-select status="warning" placeholder="" />
    <n-tree-select status="error" placeholder="" />
  </n-space>
</template>
```

## 文件选择器

利用 `override-default-node-click-behavior` 属性模拟仅允许选中文件、而不允许选中文件夹的行为。

```vue
<script lang="ts" setup>
import type { TreeSelectOverrideNodeClickBehavior } from 'naive-ui'

const override: TreeSelectOverrideNodeClickBehavior = ({ option }) => {
  if (option.children) {
    return 'toggleExpand'
  }
  return 'default'
}

const options = [
  {
    label: 'Folder-1',
    key: 'Folder-1',
    children: [
      {
        label: 'File-1-1',
        key: 'File-1-1'
      },
      {
        label: 'Folder-1-2',
        key: 'Folder-1-2',
        children: [
          {
            label: 'File-1-2-1',
            key: 'File-1-2-1'
          },
          {
            label: 'File-1-2-2',
            key: 'File-1-2-2'
          }
        ]
      }
    ]
  },
  {
    label: 'Folder-2',
    key: 'Folder-2',
    children: [
      {
        label: 'File-2-1',
        key: 'File-2-1'
      },
      {
        label: 'File-2-2',
        key: 'File-2-2'
      }
    ]
  }
]
</script>

<template>
  <n-tree-select
    block-line
    :options="options"
    :override-default-node-click-behavior="override"
  />
</template>
```

