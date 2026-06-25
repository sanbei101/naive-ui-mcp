# 级联选择 Cascader - 演示示例

## 单选

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const checkStrategyIsChild = ref(true)
const showPath = ref(true)
const hoverTrigger = ref(false)
const filterable = ref(false)
const value = ref(null)
const options = getOptions()

function handleUpdateValue(value: string, option: CascaderOption) {
  console.log(value, option)
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-space>
        <n-switch v-model:value="checkStrategyIsChild" />Child Check Strategy
      </n-space>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
      <n-space><n-switch v-model:value="hoverTrigger" />Hover Trigger</n-space>
      <n-space><n-switch v-model:value="filterable" />Filterable</n-space>
    </n-space>
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :expand-trigger="hoverTrigger ? 'hover' : 'click'"
      :options="options"
      :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
      :show-path="showPath"
      :filterable="filterable"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 多项

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const checkStrategyIsChild = ref(true)
const cascade = ref(true)
const showPath = ref(true)
const hoverTrigger = ref(false)
const value = ref(null)
const filterable = ref(false)
const responsiveMaxTagCount = ref(true)
const clearFilterAfterSelect = ref(true)
const options = getOptions()

function handleUpdateValue(value: string[], options: CascaderOption[]) {
  console.log(value, options)
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-space>
        <n-switch v-model:value="checkStrategyIsChild" />Child Check Strategy
      </n-space>
      <n-space><n-switch v-model:value="cascade" />Cascade</n-space>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
      <n-space><n-switch v-model:value="hoverTrigger" />Hover Trigger</n-space>
      <n-space><n-switch v-model:value="filterable" />Filterable</n-space>
      <n-space>
        <n-switch v-model:value="responsiveMaxTagCount" />Responsive MaxTagCount
      </n-space>
      <n-space>
        <n-switch
          v-model:value="clearFilterAfterSelect"
        />clearFilterAfterSelect
      </n-space>
    </n-space>
    <n-cascader
      v-model:value="value"
      multiple
      clearable
      placeholder="没啥用的值"
      :max-tag-count="responsiveMaxTagCount ? 'responsive' : undefined"
      :expand-trigger="hoverTrigger ? 'hover' : 'click'"
      :options="options"
      :cascade="cascade"
      :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
      :show-path="showPath"
      :filterable="filterable"
      :clear-filter-after-select="clearFilterAfterSelect"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 尺寸

级联选择有 `small`、`medium` 和 `large` 尺寸。

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 2, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const value = ref(null)
const options = getOptions()
</script>

<template>
  <n-space vertical>
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :options="options"
      check-strategy="child"
      size="small"
    />
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :options="options"
      check-strategy="child"
      size="medium"
    />
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :options="options"
      check-strategy="child"
      size="large"
    />
  </n-space>
</template>
```

## 单项（异步）

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getChildren(option: CascaderOption) {
  const children = []
  for (let i = 0; i <= (option as { depth: number }).depth; ++i) {
    children.push({
      label: `${option.label}-${i}`,
      value: `${option.label}-${i}`,
      depth: (option as { depth: number }).depth + 1,
      isLeaf: option.depth === 3
    })
  }
  return children
}

const checkStrategyIsChild = ref(true)
const showPath = ref(true)
const value = ref(null)
const options = ref([
  {
    label: 'l-0',
    value: 'v-0',
    depth: 1,
    isLeaf: false
  }
])

function handleLoad(option: CascaderOption) {
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
    <n-space>
      <n-space>
        <n-switch v-model:value="checkStrategyIsChild" />Child Check Strategy
      </n-space>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
    </n-space>
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :options="options"
      :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
      :show-path="showPath"
      remote
      :on-load="handleLoad"
    />
  </n-space>
</template>
```

## 多项（异步）

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getChildren(option: CascaderOption) {
  const children = []
  for (let i = 0; i <= (option as { depth: number }).depth; ++i) {
    children.push({
      label: `${option.label}-${i}`,
      value: `${option.label}-${i}`,
      depth: (option as { depth: number }).depth + 1,
      isLeaf: option.depth === 3
    })
  }
  return children
}

const checkStrategy = ref<'all' | 'parent' | 'child'>('all')
const allowCheckingNotLoaded = ref(false)
const cascade = ref(true)
const showPath = ref(true)
const value = ref(null)
const options = ref([
  {
    label: 'l-0',
    value: 'v-0',
    depth: 1,
    isLeaf: false
  }
])

function handleLoad(option: CascaderOption) {
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
      <n-space><n-switch v-model:value="cascade" />Cascade</n-space>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
      <n-space>
        <n-switch v-model:value="allowCheckingNotLoaded" />Allow Checking Not
        Loaded
      </n-space>
    </n-space>
    <n-cascader
      v-model:value="value"
      multiple
      placeholder="没啥用的值"
      :options="options"
      :cascade="cascade"
      :check-strategy="checkStrategy"
      :show-path="showPath"
      :allow-checking-not-loaded="allowCheckingNotLoaded"
      remote
      :on-load="handleLoad"
    />
  </n-space>
</template>
```

## 插槽

有人要在级联菜单里用这些插槽吗？

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import Flash16Regular from '@vicons/fluent/Flash16Regular'
import { ref } from 'vue'

function getOptions(depth = 2, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const value = ref(null)
const options = getOptions()
</script>

<template>
  <n-cascader v-model:value="value" placeholder="没啥用的值" :options="options">
    <template #action>
      站在能分割世界的桥
    </template>
    <template #arrow>
      <Flash16Regular />
    </template>
  </n-cascader>
</template>
```

## 大量数据

下面这个例子有 5000 \* 2 \* 2 = 20000 条数据。

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = iterator === 1 ? 5000 : 2
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const checkStrategyIsChild = ref(true)
const cascade = ref(true)
const showPath = ref(true)
const hoverTrigger = ref(false)
const filterable = ref(false)
const value = ref(null)
const options = getOptions()
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-space>
        <n-switch v-model:value="checkStrategyIsChild" />Child Check Strategy
      </n-space>
      <n-space><n-switch v-model:value="cascade" />Cascade</n-space>
      <n-space><n-switch v-model:value="showPath" />Show Path</n-space>
      <n-space><n-switch v-model:value="hoverTrigger" />Hover Trigger</n-space>
      <n-space><n-switch v-model:value="filterable" />Filterable</n-space>
    </n-space>
    <n-cascader
      v-model:value="value"
      placeholder="没啥用的值"
      :expand-trigger="hoverTrigger ? 'hover' : 'click'"
      :options="options"
      :cascade="cascade"
      :check-strategy="checkStrategyIsChild ? 'child' : 'all'"
      :show-path="showPath"
      :filterable="filterable"
    />
  </n-space>
</template>
```

## 指定勾选策略

设置勾选策略来指定显示的勾选节点，`all` 表示显示全部选中节点；`parent` 表示只显示父节点（当父节点下所有子节点都选中时）；`child` 表示只显示子节点。

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 4, iterator = 1, prefix = '') {
  const length = 3
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `${i}`,
        label: `${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${i}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `${prefix}-${i}`,
        label: `${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const checkStrategy = ref<'all' | 'child' | 'parent'>('all')
const options = getOptions()

function handleUpdateValue(values: string | string[]) {
  console.log(values)
}
</script>

<template>
  <n-space vertical>
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
    <n-cascader
      multiple
      cascade
      :check-strategy="checkStrategy"
      :options="options"
      :default-value="['1-1-1-1', '1-1-2-1', '1-1-2-2', '1-1-2-3']"
      @update:value="handleUpdateValue"
    />
  </n-space>
</template>
```

## 自定义字段

后端会传来各种各样的数据。

```vue
<script lang="ts" setup>
const options = [
  {
    whateverLabel: 'Rubber Soul',
    whateverValue: 'Rubber Soul',
    whateverChildren: [
      {
        whateverLabel:
          'Everybody\'s Got Something to Hide Except Me and My Monkey',
        whateverValue:
          'Everybody\'s Got Something to Hide Except Me and My Monkey'
      },
      {
        whateverLabel: 'Drive My Car',
        whateverValue: 'Drive My Car',
        disabled: true
      },
      {
        whateverLabel: 'Norwegian Wood',
        whateverValue: 'Norwegian Wood'
      },
      {
        whateverLabel: 'You Won\'t See',
        whateverValue: 'You Won\'t See',
        disabled: true
      },
      {
        whateverLabel: 'Nowhere Man',
        whateverValue: 'Nowhere Man'
      },
      {
        whateverLabel: 'Think For Yourself',
        whateverValue: 'Think For Yourself'
      },
      {
        whateverLabel: 'The Word',
        whateverValue: 'The Word'
      },
      {
        whateverLabel: 'Michelle',
        whateverValue: 'Michelle',
        disabled: true
      },
      {
        whateverLabel: 'What goes on',
        whateverValue: 'What goes on'
      },
      {
        whateverLabel: 'Girl',
        whateverValue: 'Girl'
      },
      {
        whateverLabel: 'I\'m looking through you',
        whateverValue: 'I\'m looking through you'
      },
      {
        whateverLabel: 'In My Life',
        whateverValue: 'In My Life'
      },
      {
        whateverLabel: 'Wait',
        whateverValue: 'Wait'
      }
    ]
  },
  {
    whateverLabel: 'Let It Be',
    whateverValue: 'Let It Be Album',
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
  <n-cascader
    :options="options"
    default-value="Drive My Car"
    label-field="whateverLabel"
    value-field="whateverValue"
    children-field="whateverChildren"
  />
</template>
```

## 自定义渲染

使用 `render-label` 可以批量控制 cascader 菜单的选项渲染。

```vue
<script lang="ts" setup>
import type { CascaderOption } from 'naive-ui'
import { ref } from 'vue'

function getOptions(depth = 3, iterator = 1, prefix = '') {
  const length = 12
  const options: CascaderOption[] = []
  for (let i = 1; i <= length; ++i) {
    if (iterator === 1) {
      options.push({
        value: `v-${i}`,
        label: `l-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${String(i)}`)
      })
    }
    else if (iterator === depth) {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0
      })
    }
    else {
      options.push({
        value: `v-${prefix}-${i}`,
        label: `l-${prefix}-${i}`,
        disabled: i % 5 === 0,
        children: getOptions(depth, iterator + 1, `${prefix}-${i}`)
      })
    }
  }
  return options
}

const value = ref(null)
const options = getOptions()

function handleUpdateValue(...args: unknown[]) {
  console.log(...args)
}

function renderLabel(option: { value?: string | number, label?: string }) {
  return `prefix ${option.label}`
}
</script>

<template>
  <n-cascader
    v-model:value="value"
    placeholder="没啥用的值"
    :options="options"
    :filterable="true"
    :render-label="renderLabel"
    @update:value="handleUpdateValue"
  />
</template>
```

## 手动 focus & blur

```vue
<script lang="ts" setup>
import type { CascaderInst } from 'naive-ui'
import { ref } from 'vue'

const cascaderInstRef = ref<CascaderInst | null>(null)

function handleClick() {
  cascaderInstRef.value?.focus()
  setTimeout(() => {
    cascaderInstRef.value?.blur()
  }, 1000)
}
</script>

<template>
  <n-space item-style="display: flex; align-item: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <n-cascader ref="cascaderInstRef" style="width: 200px" />
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-cascader status="warning" placeholder="" />
    <n-cascader status="error" placeholder="" />
  </n-space>
</template>
```

