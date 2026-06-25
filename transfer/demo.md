# 穿梭框 Transfer - 演示示例

## 基础用法

穿梭框的基础用法。如果你有一大堆数据，看下一个例子。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: `Option ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

const options = createOptions()
const value = ref([])
</script>

<template>
  <n-transfer v-model:value="value" :options="options" />
</template>
```

## 一大堆数据

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 42000 }).map((v, i) => ({
    label: `Option ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options = createOptions()
const value = ref(createValues())
</script>

<template>
  <n-transfer v-model:value="value" :options="options" virtual-scroll />
</template>
```

## 可过滤

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createOptions() {
  return Array.from({ length: 100 }).map((v, i) => ({
    label: `Option ${i}`,
    value: i,
    disabled: i % 5 === 0
  }))
}

function createValues() {
  return Array.from({ length: 50 }).map((v, i) => i)
}

const options1 = createOptions()
const value1 = ref(createValues())
const options2 = createOptions()
const value2 = ref(createValues())
</script>

<template>
  <n-space vertical>
    <n-transfer
      v-model:value="value1"
      virtual-scroll
      :options="options1"
      source-filterable
    />
    <n-transfer
      v-model:value="value2"
      virtual-scroll
      :options="options2"
      target-filterable
    />
  </n-space>
</template>
```

## 自定义标签

可以变成通讯录、菜单等，应用场景挺多。

```vue
<script lang="ts" setup>
import type { TransferRenderTargetLabel } from 'naive-ui'
import { NAvatar } from 'naive-ui'
import { h, ref } from 'vue'

const options = [
  {
    label: '07akioni',
    value: 'https://avatars.githubusercontent.com/u/18677354?s=60&v=4'
  },
  {
    label: 'amadeus711',
    value: 'https://avatars.githubusercontent.com/u/46394163?s=60&v=4'
  },
  {
    label: 'Talljack',
    value: 'https://avatars.githubusercontent.com/u/34439652?s=60&v=4'
  },
  {
    label: 'JiwenBai',
    value: 'https://avatars.githubusercontent.com/u/43430022?s=60&v=4'
  },
  {
    label: 'songjianet',
    value: 'https://avatars.githubusercontent.com/u/19239641?s=60&v=4'
  }
]

const renderLabel: TransferRenderTargetLabel = function ({ option }) {
  return h(
    'div',
    {
      style: {
        display: 'flex',
        margin: '6px 0'
      }
    },
    {
      default: () => [
        h(NAvatar, {
          round: true,
          src: option.value as string,
          size: 'small',
          fallbackSrc:
            'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        }),
        h(
          'div',
          {
            style: {
              display: 'flex',
              marginLeft: '6px',
              alignSelf: 'center'
            }
          },
          { default: () => option.label }
        )
      ]
    }
  )
}

const value = ref([options[0].value])
</script>

<template>
  <n-transfer
    v-model:value="value"
    :options="options"
    :render-target-label="renderLabel"
  />
</template>
```

## 自定义列表

```vue
<script lang="ts" setup>
import type { TransferRenderSourceList, TreeOption } from 'naive-ui'
import { NTree } from 'naive-ui'
import { repeat } from 'seemly'
import { h, ref } from 'vue'

function createLabel(level: number): string {
  if (level === 4)
    return '道生一'
  if (level === 3)
    return '一生二'
  if (level === 2)
    return '二生三'
  if (level === 1)
    return '三生万物'
  return ''
}

interface Option {
  label: string
  value: string
  children?: Option[]
}

function createData(level = 4, baseKey = ''): Option[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const value = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      value,
      children: createData(level - 1, value)
    }
  })
}

function flattenTree(list: undefined | Option[]): Option[] {
  const result: Option[] = []
  function flatten(_list: Option[] = []) {
    _list.forEach((item) => {
      result.push(item)
      flatten(item.children)
    })
  }
  flatten(list)
  return result
}

const treeData = createData()
const value = ref<Array<string | number>>([])
const renderSourceList: TransferRenderSourceList = function ({
  onCheck,
  pattern
}) {
  return h(NTree, {
    style: 'margin: 0 4px;',
    keyField: 'value',
    checkable: true,
    selectable: false,
    blockLine: true,
    checkOnClick: true,
    data: treeData as unknown as TreeOption[],
    pattern,
    checkedKeys: value.value,
    onUpdateCheckedKeys: (checkedKeys: Array<string | number>) => {
      onCheck(checkedKeys)
    }
  })
}

const options = flattenTree(createData())
</script>

<template>
  <n-transfer
    v-model:value="value"
    :options="options"
    :render-source-list="renderSourceList"
    source-filterable
  />
</template>
```

