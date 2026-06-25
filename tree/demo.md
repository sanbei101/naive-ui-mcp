# 树 Tree - 演示示例

## 基础用法

好在这颗树不是活的，也不平衡。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    expand-on-click
    checkable
  />
</template>
```

## 自定义 key 和 label 的字段

后端会传来各种各样的数据。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      whateverLabel: createLabel(level),
      whateverKey: key,
      whateverChildren: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    key-field="whateverKey"
    label-field="whateverLabel"
    children-field="whateverChildren"
    selectable
  />
</template>
```

## 多选节点

设置 `multiple` 来允许多选节点。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const value = ref([])
</script>

<template>
  <n-tree multiple block-line :data="data" />
  <n-divider />
  <n-tree v-model:selected-keys="value" multiple block-line :data="data" />
</template>
```

## 级联选择

设定 `cascade` 进行级联选择。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '4030', '403020'])
const defaultCheckedKeys = ref(['40302010'])

function updateCheckedKeys(
  keys: Array<string | number>,
  options: Array<TreeOption | null>,
  meta: {
    node: TreeOption | null
    action: 'check' | 'uncheck'
  }
) {
  console.log('updateCheckedKeys', keys, options, meta)
}
</script>

<template>
  <n-tree
    block-line
    cascade
    checkable
    :selectable="false"
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :default-checked-keys="defaultCheckedKeys"
    @update:checked-keys="updateCheckedKeys"
  />
</template>
```

## 搜索

树接受 `pattern` 和 `filter` 来完成搜索。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { ref } from 'vue'

const data: TreeOption[] = [
  {
    label: '0',
    key: '0',
    children: [
      {
        label: '0-0',
        key: '0-0',
        children: [
          { label: '0-0-0', key: '0-0-0' },
          { label: '0-0-1', key: '0-0-1' }
        ]
      },
      {
        label: '0-1',
        key: '0-1',
        children: [
          { label: '0-1-0', key: '0-1-0' },
          { label: '0-1-1', key: '0-1-1' }
        ]
      }
    ]
  },
  {
    label: '1',
    key: '1',
    children: [
      {
        label: '1-0',
        key: '1-0',
        children: [
          { label: '1-0-0', key: '1-0-0' },
          { label: '1-0-1', key: '1-0-1' }
        ]
      },
      {
        label: '1-1',
        key: '1-1',
        children: [
          { label: '1-1-0', key: '1-1-0' },
          { label: '1-1-1', key: '1-1-1' }
        ]
      }
    ]
  }
]

const pattern = ref('')
const showIrrelevantNodes = ref(false)
</script>

<template>
  <n-space vertical :size="12">
    <n-input v-model:value="pattern" placeholder="搜索" />
    <n-switch v-model:value="showIrrelevantNodes">
      <template #checked>
        展示搜索无关的节点
      </template>
      <template #unchecked>
        隐藏搜索无关的节点
      </template>
    </n-switch>
    <n-tree
      :show-irrelevant-nodes="showIrrelevantNodes"
      :pattern="pattern"
      :data="data"
      block-line
    />
  </n-space>
</template>
```

## 拖放节点

设定 `draggable` 然后自己写一堆代码来支持节点的拖放。

```vue
<script lang="ts" setup>
import type { TreeDropInfo, TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

function findSiblingsAndIndex(
  node: TreeOption,
  nodes?: TreeOption[]
): [TreeOption[], number] | [null, null] {
  if (!nodes)
    return [null, null]
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]
    if (siblingNode.key === node.key)
      return [nodes, i]
    const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
    if (siblings && index !== null)
      return [siblings, index]
  }
  return [null, null]
}

/**
 * 这个例子的时间复杂度确实可以优化 我实在是懒得改了
 */
const expandedKeysRef = ref<string[]>([])
const checkedKeysRef = ref<string[]>([])
const dataRef = ref(createData() || [])

function handleExpandedKeysChange(expandedKeys: string[]) {
  expandedKeysRef.value = expandedKeys
}

function handleCheckedKeysChange(checkedKeys: string[]) {
  checkedKeysRef.value = checkedKeys
}

function handleDrop({ node, dragNode, dropPosition }: TreeDropInfo) {
  const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
    dragNode,
    dataRef.value
  )
  if (dragNodeSiblings === null || dragNodeIndex === null)
    return
  dragNodeSiblings.splice(dragNodeIndex, 1)
  if (dropPosition === 'inside') {
    if (node.children) {
      node.children.unshift(dragNode)
    }
    else {
      node.children = [dragNode]
    }
  }
  else if (dropPosition === 'before') {
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, dataRef.value)
    if (nodeSiblings === null || nodeIndex === null)
      return
    nodeSiblings.splice(nodeIndex, 0, dragNode)
  }
  else if (dropPosition === 'after') {
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, dataRef.value)
    if (nodeSiblings === null || nodeIndex === null)
      return
    nodeSiblings.splice(nodeIndex + 1, 0, dragNode)
  }
  dataRef.value = Array.from(dataRef.value)
}
</script>

<template>
  <n-tree
    block-line
    checkable
    draggable
    :data="dataRef"
    :checked-keys="checkedKeysRef"
    :expanded-keys="expandedKeysRef"
    @drop="handleDrop"
    @update:checked-keys="handleCheckedKeysChange"
    @update:expanded-keys="handleExpandedKeysChange"
  />
</template>
```

## 大量数据

设定 `virtual-scroll` 使用虚拟滚动，注意要设定好树的高度。

```vue
<script lang="ts" setup>
import type { TreeInst, TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(10 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const treeInstRef = ref<TreeInst | null>(null)
const data = createData()

function handleScrollToKey() {
  treeInstRef.value?.scrollTo({ key: '45362710' })
}

function handleScrollToPosition() {
  treeInstRef.value?.scrollTo({ position: 'bottom' })
}

function handleScrollToIndex() {
  treeInstRef.value?.scrollTo({ index: 100 })
}

function handleScrollToDistance() {
  treeInstRef.value?.scrollTo({ top: 400 })
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="handleScrollToKey">
        滚动
      </n-button>
      <n-button @click="handleScrollToPosition">
        滚动到指定位置
      </n-button>
      <n-button @click="handleScrollToIndex">
        滚动到指定 Index
      </n-button>
      <n-button @click="handleScrollToDistance">
        滚动到指定距离
      </n-button>
    </n-space>
    <n-tree
      ref="treeInstRef"
      block-line
      :data="data"
      default-expand-all
      virtual-scroll
      style="height: 320px"
    />
  </n-space>
</template>
```

## 异步加载

使用 `on-load` 回调来加载数据。异步加载时，所有 `isLeaf` 为 `false` 并且 `children` 不为数组的节点会被视为未加载的节点。

```vue
<script lang="ts" setup>
import type { TreeDropInfo, TreeOption } from 'naive-ui'
import { ref } from 'vue'

function createData() {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false
    }
  ]
}

function nextLabel(currentLabel?: string): string {
  if (!currentLabel)
    return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born')
    return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two')
    return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three') {
    return 'Out of Three, the created universe'
  }
  if (currentLabel === 'Out of Three, the created universe') {
    return 'Out of Tao, One is born'
  }
  return ''
}

function findSiblingsAndIndex(
  node: TreeOption,
  nodes?: TreeOption[]
): [TreeOption[], number] | [null, null] {
  if (!nodes)
    return [null, null]
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]
    if (siblingNode.key === node.key)
      return [nodes, i]
    const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
    if (siblings && index !== null)
      return [siblings, index]
  }
  return [null, null]
}

const expandedKeysRef = ref<string[]>([])
const checkedKeysRef = ref<string[]>([])
const dataRef = ref(createData())
const checkStrategy = ref<'all' | 'parent' | 'child'>('all')
const cascade = ref(true)

function handleExpandedKeysChange(expandedKeys: string[]) {
  expandedKeysRef.value = expandedKeys
}

function handleCheckedKeysChange(checkedKeys: string[]) {
  checkedKeysRef.value = checkedKeys
}

function handleDrop({ node, dragNode, dropPosition }: TreeDropInfo) {
  const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
    dragNode,
    dataRef.value
  )
  if (dragNodeSiblings === null || dragNodeIndex === null)
    return
  dragNodeSiblings.splice(dragNodeIndex, 1)
  if (dropPosition === 'inside') {
    if (node.children) {
      node.children.unshift(dragNode)
    }
    else {
      node.children = [dragNode]
    }
  }
  else if (dropPosition === 'before') {
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, dataRef.value)
    if (nodeSiblings === null || nodeIndex === null)
      return
    nodeSiblings.splice(nodeIndex, 0, dragNode)
  }
  else if (dropPosition === 'after') {
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, dataRef.value)
    if (nodeSiblings === null || nodeIndex === null)
      return
    nodeSiblings.splice(nodeIndex + 1, 0, dragNode)
  }

  dataRef.value = Array.from(dataRef.value)
}

function handleLoad(node: TreeOption) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      node.children = [
        {
          label: nextLabel(node.label),
          key: node.key + nextLabel(node.label),
          isLeaf: false
        }
      ]
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
    </n-space>
    <n-tree
      block-line
      checkable
      draggable
      :data="dataRef"
      :checked-keys="checkedKeysRef"
      :on-load="handleLoad"
      :expanded-keys="expandedKeysRef"
      :check-strategy="checkStrategy"
      :allow-checking-not-loaded="cascade"
      :cascade="cascade"
      expand-on-click
      @drop="handleDrop"
      @update:checked-keys="handleCheckedKeysChange"
      @update:expanded-keys="handleExpandedKeysChange"
    />
    {{ JSON.stringify(checkedKeysRef) }}
  </n-space>
</template>
```

## 禁用节点

```vue
<script lang="ts" setup>
const data = [
  {
    key: '0',
    label: '0',
    children: [
      {
        key: '0-0',
        label: '0-0'
      },
      {
        disabled: true,
        key: '0-1',
        label: '0-1',
        children: [
          {
            label: '0-1-0',
            key: '0-1-0'
          },
          {
            label: '0-1-1',
            key: '0-1-1'
          }
        ]
      }
    ]
  },
  {
    key: '1',
    label: '1',
    children: [
      {
        key: '1-0',
        label: '1-0'
      },
      {
        checkboxDisabled: true,
        key: '1-1',
        label: '1-1',
        children: [
          {
            label: '1-1-0',
            key: '1-1-0'
          },
          {
            label: '1-1-1',
            key: '1-1-1'
          }
        ]
      }
    ]
  }
]
</script>

<template>
  <n-tree
    :data="data"
    block-line
    checkable
    default-expand-all
    cascade
    :default-checked-keys="['1-1']"
  />
</template>
```

## 前缀与后缀

放一些操作。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { NButton } from 'naive-ui'
import { repeat } from 'seemly'
import { h, ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    const label = createLabel(level)
    return {
      label,
      key,
      children: createData(level - 1, key),
      suffix: () =>
        h(
          NButton,
          { text: true, type: 'primary' },
          { default: () => 'Suffix' }
        ),
      prefix: () =>
        h(NButton, { text: true, type: 'primary' }, { default: () => 'Prefix' })
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :selectable="false"
  />
</template>
```

## 批量渲染

如你所想，前缀、标签、后缀都可以批量渲染

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { NButton } from 'naive-ui'
import { repeat } from 'seemly'
import { h, ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
      level
    }
  })
}

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

function renderPrefix({ option }: { option: TreeOption }) {
  return h(
    NButton,
    { text: true, type: 'primary' },
    { default: () => `Prefix-${option.level}` }
  )
}

function renderLabel({ option }: { option: TreeOption }) {
  return `${option.label} :)`
}

function renderSuffix({ option }: { option: TreeOption }) {
  return h(
    NButton,
    { text: true, type: 'primary' },
    { default: () => `Suffix-${option.level}` }
  )
}

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :render-prefix="renderPrefix"
    :render-label="renderLabel"
    :render-suffix="renderSuffix"
    :selectable="false"
  />
</template>
```

## 展开开关的图标

使用 `render-switcher-icon` 定制展开开关的图标。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { ChevronForward, PlanetOutline, SunnyOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { repeat } from 'seemly'
import { h, ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '41'])
function renderSwitcherIcon() {
  return h(NIcon, null, { default: () => h(ChevronForward) })
}
function renderSwitcherIconWithExpaned({ expanded }: { expanded: boolean }) {
  return h(NIcon, null, {
    default: () => h(expanded ? SunnyOutline : PlanetOutline)
  })
}
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :render-switcher-icon="renderSwitcherIcon"
    selectable
  />
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :render-switcher-icon="renderSwitcherIconWithExpaned"
    selectable
  />
</template>
```

## 文件树

使用 `on-update:expanded-keys` 来更改节点在不同状态下的前缀图标样式。

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import {
  FileTrayFullOutline,
  Folder,
  FolderOpenOutline
} from '@vicons/ionicons5'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'

const message = useMessage()

function updatePrefixWithExpaned(
  _keys: Array<string | number>,
  _option: Array<TreeOption | null>,
  meta: {
    node: TreeOption | null
    action: 'expand' | 'collapse' | 'filter'
  }
) {
  if (!meta.node)
    return
  switch (meta.action) {
    case 'expand':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(FolderOpenOutline)
        })
      break
    case 'collapse':
      meta.node.prefix = () =>
        h(NIcon, null, {
          default: () => h(Folder)
        })
      break
  }
}

function nodeProps({ option }: { option: TreeOption }) {
  return {
    onClick() {
      if (!option.children && !option.disabled) {
        message.info(`[Click] ${option.label}`)
      }
    }
  }
}

const data = [
  {
    key: '文件夹',
    label: '文件夹',
    prefix: () =>
      h(NIcon, null, {
        default: () => h(Folder)
      }),
    children: [
      {
        key: '空的',
        label: '空的',
        disabled: true,
        prefix: () =>
          h(NIcon, null, {
            default: () => h(Folder)
          })
      },
      {
        key: '我的文件',
        label: '我的文件',
        prefix: () =>
          h(NIcon, null, {
            default: () => h(Folder)
          }),
        children: [
          {
            label: 'template.txt',
            key: 'template.txt',
            prefix: () =>
              h(NIcon, null, {
                default: () => h(FileTrayFullOutline)
              })
          }
        ]
      }
    ]
  }
]
</script>

<template>
  <n-tree
    block-line
    expand-on-click
    :data="data"
    :node-props="nodeProps"
    :on-update:expanded-keys="updatePrefixWithExpaned"
  />
</template>
```

## 为节点绑定事件

使用 `node-props` 为节点绑定属性，比如点击事件或者右键菜单。

```vue
<script lang="ts" setup>
import type { DropdownOption, TreeOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const message = useMessage()
const showDropdownRef = ref(false)
const optionsRef = ref<DropdownOption[]>([])
const xRef = ref(0)
const yRef = ref(0)
const data = createData()
const defaultExpandedKeys = ref(['40', '41'])

function handleSelect() {
  showDropdownRef.value = false
}

function handleClickoutside() {
  showDropdownRef.value = false
}

function nodeProps({ option }: { option: TreeOption }) {
  return {
    onClick() {
      message.info(`[Click] ${option.label}`)
    },
    onContextmenu(e: MouseEvent): void {
      optionsRef.value = [option]
      showDropdownRef.value = true
      xRef.value = e.clientX
      yRef.value = e.clientY
      console.log(e.clientX, e.clientY)
      e.preventDefault()
    }
  }
}
</script>

<template>
  <n-tree
    block-line
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :node-props="nodeProps"
  />
  <n-dropdown
    trigger="manual"
    placement="bottom-start"
    :show="showDropdownRef"
    :options="optionsRef as any"
    :x="xRef"
    :y="yRef"
    @select="handleSelect"
    @clickoutside="handleClickoutside"
  />
</template>
```

## 连接线

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const showLine = ref(false)
const data = createData()
const defaultExpandedKeys = ref(['40', '4030', '403020'])
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="showLine" />
    <n-tree
      :show-line="showLine"
      :default-expanded-keys="defaultExpandedKeys"
      :data="data"
      checkable
      expand-on-click
      selectable
    />
  </n-space>
</template>
```

## 复选框位置

```vue
<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

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

const data = createData()
const defaultExpandedKeys = ref(['40', '4030', '403020'])
const defaultCheckedKeys = ref(['40302010'])

function updateCheckedKeys(v: string[]) {
  console.log('updateCheckedKeys', v)
}
</script>

<template>
  <n-tree
    checkable
    block-node
    checkbox-placement="right"
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :default-checked-keys="defaultCheckedKeys"
    @update:checked-keys="updateCheckedKeys"
  />
</template>
```

## 自定义点击后的行为

你可以利用 `override-default-node-click-behavior` 属性来覆盖默认的点击行为。

例如下面的例子中，你可以使非根节点的点击行为变成展开，来模拟仅允许选中文件、而不允许选中文件夹的行为。

```vue
<script lang="ts" setup>
import type { TreeOverrideNodeClickBehavior } from 'naive-ui'

const override: TreeOverrideNodeClickBehavior = ({ option }) => {
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
  <n-tree
    block-line
    :data="options"
    :override-default-node-click-behavior="override"
  />
</template>
```

