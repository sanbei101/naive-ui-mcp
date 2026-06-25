# 数据表格 Data Table - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, useMessage } from 'naive-ui'
import { h } from 'vue'

interface Song {
  no: number
  title: string
  length: string
}

function createColumns({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const message = useMessage()
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`)
  }
})
const pagination = false as const
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>
```

## 空表格

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createColumns() {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags'
    },
    {
      title: 'Action',
      key: 'actions'
    }
  ]
}

const data = ref([])
const columns = createColumns()
</script>

<template>
  <n-data-table :columns="columns" :data="data" />
</template>
```

## 无边框 & 无列分隔 & 无行分隔

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns({
  sendMail
}: {
  sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['wow']
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
}

const message = useMessage()
const data = createData()
const columns = createColumns({
  sendMail(rowData) {
    message.info(`send mail to ${rowData.name}`)
  }
})
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-space vertical :size="12">
    <n-data-table
      :bordered="false"
      :single-line="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
    <n-data-table
      :bordered="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
    <n-data-table
      :bordered="false"
      :single-line="false"
      single-column
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns({
  sendMail
}: {
  sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['wow']
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
}

const message = useMessage()
const data = createData()
const columns = createColumns({
  sendMail(rowData) {
    message.info(`send mail to ${rowData.name}`)
  }
})
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-space vertical :size="12">
    <n-data-table
      size="small"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
    <n-data-table
      size="large"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
```

## 自定义行属性

如果你想给行增加一些属性或者事件处理器，使用 `row-props` 属性。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

interface RowData {
  key: number
  name: string
  age: string
  address: string
}

const message = useMessage()

function rowProps(row: RowData) {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      message.info(row.name)
    }
  }
}

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = [
  {
    key: 0,
    name: '07akioni',
    age: '18',
    address: 'Yiheyuan Road'
  },
  {
    key: 1,
    name: '08akioni',
    age: '14',
    address: 'Pingshan Road'
  },
  {
    key: 2,
    name: '09akioni',
    age: '22',
    address: 'Haidian Bridge'
  }
]
</script>

<template>
  <n-data-table :columns="columns" :data="data" :row-props="rowProps" />
</template>
```

## 合并单元格

设定列的 `colSpan` 和 `rowSpan` 来控制单元格的 `colspan` 和 `rowspan`。设定列的 `titleColSpan` 控制表头的 colspan。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

interface SendMail {
  (rowData: RowData): void
}

function createColumns({
  sendMail
}: {
  sendMail: SendMail
}): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      titleColSpan: 2,
      key: 'name',
      rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
      colSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1)
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address',
      colSpan: (rowData, rowIndex) => (rowIndex === 2 ? 2 : 1)
    },
    {
      title: 'Tags',
      key: 'tags',
      titleColSpan: 2,
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      rowSpan: (rowData, rowIndex) => (rowIndex === 0 ? 2 : 1),
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['wow']
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
}

const message = useMessage()
function sendMail(rowData: RowData) {
  message.info(`send mail to ${rowData.name}`)
}

const data = createData()
const columns = createColumns({ sendMail })
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :single-line="false"
  />
</template>
```

## 非受控过滤 & 排序

```vue
<script lang="ts">
import type { DataTableColumns, DataTableInst } from 'naive-ui'
import { defineComponent, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<RowData> = [
  {
    title: 'Name',
    key: 'name',
    defaultSortOrder: 'ascend',
    sorter: 'default'
  },
  {
    title: 'Age',
    key: 'age',
    sorter: (row1, row2) => row1.age - row2.age
  },
  {
    title: 'Address',
    key: 'address',
    defaultFilterOptionValues: ['London', 'New York'],
    filterOptions: [
      {
        label: 'London',
        value: 'London'
      },
      {
        label: 'New York',
        value: 'New York'
      }
    ],
    filter(value, row) {
      return Boolean(~row.address.indexOf(value as string))
    }
  }
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

export default defineComponent({
  setup() {
    const tableRef = ref<DataTableInst | null>(null)

    return {
      table: tableRef,
      data,
      columns,
      pagination: { pageSize: 5 },
      filterAddress() {
        tableRef.value?.filter({
          address: ['London']
        })
      },
      sortName() {
        tableRef.value?.sort('name', 'ascend')
      },
      clearFilters() {
        tableRef.value?.filter(null)
      },
      clearSorter() {
        tableRef.value?.clearSorter()
      }
    }
  }
})
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button @click="sortName">
        Sort By Name (Ascend)
      </n-button>
      <n-button @click="filterAddress">
        Filter Address (London)
      </n-button>
      <n-button @click="clearFilters">
        Clear Filters
      </n-button>
      <n-button @click="clearSorter">
        Clear Sorter
      </n-button>
    </n-space>
    <n-data-table
      ref="table"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
```

## 过滤后页面状态

配置 `pagination-behavior-on-filter` 控制过滤后的页面停留在当前页还是首页。

如果设置停留在当前页，过滤后的数据总数达不到当前页时，会展示最后一页的数据。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<RowData> = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address',
    defaultFilterOptionValues: [],
    filterOptions: [
      {
        label: 'London',
        value: 'London'
      },
      {
        label: 'New York',
        value: 'New York'
      }
    ],
    filter(value, row) {
      return !!~row.address.indexOf(String(value))
    }
  }
]

const data: RowData[] = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 4,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const pagination = { pageSize: 3 }
</script>

<template>
  <n-data-table
    pagination-behavior-on-filter="first"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
```

## 多列排序

为 `sorter` 设定 `multiple` 和 `compare` 来开启多列排序，其中 `multiple` 为多列排序的优先级，越高优先级越高。

```vue
<script lang="ts">
import type { DataTableColumns, DataTableInst } from 'naive-ui'
import { defineComponent, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  chinese: number
  math: number
  english: number
}

const columns: DataTableColumns<RowData> = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age',
    sorter: (row1, row2) => row1.age - row2.age
  },
  {
    title: 'Chinese Score',
    key: 'chinese',
    defaultSortOrder: false,
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3
    }
  },
  {
    title: 'Math Score',
    defaultSortOrder: false,
    key: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2
    }
  },
  {
    title: 'English Score',
    defaultSortOrder: false,
    key: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  },
  {
    title: 'Address',
    key: 'address',
    filterOptions: [
      {
        label: 'London',
        value: 'London'
      },
      {
        label: 'New York',
        value: 'New York'
      }
    ],
    filter(value, row) {
      return Boolean(~row.address.indexOf(value as string))
    }
  }
]

const data: RowData[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    chinese: 98,
    math: 60,
    english: 70
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    chinese: 88,
    math: 99,
    english: 89
  }
]

export default defineComponent({
  setup() {
    const dataTableInstRef = ref<DataTableInst | null>(null)
    return {
      data,
      columns,
      dataTableInst: dataTableInstRef,
      pagination: ref({ pageSize: 5 }),
      filterAddress() {
        dataTableInstRef.value?.filter({
          address: ['London']
        })
      },
      sortName() {
        dataTableInstRef.value?.sort('name', 'ascend')
      },
      clearFilters() {
        dataTableInstRef.value?.filter(null)
      },
      clearSorter() {
        dataTableInstRef.value?.clearSorter()
      }
    }
  }
})
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button @click="sortName">
        Sort By Name (Ascend)
      </n-button>
      <n-button @click="filterAddress">
        Filter Address (London)
      </n-button>
      <n-button @click="clearFilters">
        Clear Filters
      </n-button>
      <n-button @click="clearSorter">
        Clear Sorter
      </n-button>
    </n-space>
    <n-data-table
      ref="dataTableInst"
      :columns="columns"
      :data="data"
      :pagination="pagination"
    />
  </n-space>
</template>
```

## 自定义排序

```vue
<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NDataTable } from 'naive-ui'
import { ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  score: number
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age ( 仅升序和降序切换 )',
      key: 'age',
      sorter: (row1, row2) => row1.age - row2.age,
      defaultSortOrder: 'ascend',
      customNextSortOrder: (order) => {
        if (order === 'ascend')
          return 'descend'
        return 'ascend'
      }
    },
    {
      title: 'Score ( 常规三态排序 )',
      key: 'score',
      sorter: (row1, row2) => row1.score - row2.score
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    score: 89
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    score: 92
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    score: 78
  }
]

const columns = createColumns()
const pagination = ref({ pageSize: 10 })
</script>

<template>
  <NDataTable :columns="columns" :data="data" :pagination="pagination" />
</template>
```

## 列宽拖拽

仅支持叶子结点。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, useMessage } from 'naive-ui'
import { h } from 'vue'

interface Song {
  no: number
  title: string
  length: string
}

function createColumns({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> {
  return [
    {
      title: 'No',
      key: 'no',
      width: 50
    },
    {
      title: 'Title',
      key: 'title',
      resizable: true
    },
    {
      title: 'Length (minWidth: 100, maxWidth: 500)',
      key: 'length',
      resizable: true,
      minWidth: 100,
      maxWidth: 500
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const message = useMessage()
const columns = createColumns({
  play(row: Song) {
    message.info(`Play ${row.title}`)
  }
})
const pagination = false as const
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>
```

## 选中行

可以通过把第一列的类型设为 `selection` 来让行变成可选的。

```vue
<script lang="ts" setup>
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import { ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: string
  address: string
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      disabled(row: RowData) {
        return row.name === 'Edward King 3'
      }
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const columns = createColumns()
const pagination = {
  pageSize: 5
}

function rowKey(row: RowData) {
  return row.address
}

function handleCheck(rowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = rowKeys
}
</script>

<template>
  <n-p> 你选中了 {{ checkedRowKeysRef.length }} 行。 </n-p>

  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :row-key="rowKey"
    @update:checked-row-keys="handleCheck"
  />
</template>
```

## 选中行(单选)

在 `type='selection'` 的列，同时设置 `multiple=false` 来变成单选模式。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
  key: index
}))

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      multiple: false,
      disabled(row: RowData) {
        return row.name === 'Edward King 3'
      }
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

const checkedRowKeysRef = ref([4, 1])
const checkedRowKeys = checkedRowKeysRef
const pagination = {
  pageSize: 6
}
const columns = createColumns()
</script>

<template>
  <n-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
```

## 自定义选择项菜单

在 `type='selection'` 的列设定 `options` 来在头部勾选框旁边创建下拉菜单。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

interface RowData {
  name: string
  age: number
  address: string
  key: number
}

const data = repeat(46, undefined).map<RowData>((_, index) => ({
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`,
  key: index
}))

const checkedRowKeysRef = ref<Array<string | number>>([])
const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
    options: [
      'all',
      'none',
      {
        label: '选中前 2 行',
        key: 'f2',
        onSelect: (pageData) => {
          checkedRowKeysRef.value = pageData.map(row => row.key).slice(0, 2)
        }
      }
    ],
    disabled(row) {
      return row.name === 'Edward King 3'
    }
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const checkedRowKeys = checkedRowKeysRef
const pagination = {
  pageSize: 6
}
</script>

<template>
  <n-p>你选中了 {{ checkedRowKeys.length }} 行。</n-p>
  <n-data-table
    v-model:checked-row-keys="checkedRowKeys"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
```

## 表头分组

注意：如果你希望分组的表头拥有固定列的效果，你需要给所有固定列表头都设定好宽度，包括所有的父级节点，否则可能产生错位。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

function createCols() {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Attrs',
      key: 'attrs',
      children: [
        {
          title: 'Attack',
          key: 'attack',
          children: [
            {
              title: 'Physics Attack',
              key: 'physicsAttack'
            },
            {
              title: 'Magic Attack',
              key: 'magicAttack'
            }
          ]
        },
        {
          title: 'Defend',
          key: 'defend'
        },
        {
          title: 'Speed',
          key: 'speed'
        }
      ]
    }
  ]
}

function createData() {
  return Array.from({ length: 50 }).map((_, i) => {
    return {
      key: i,
      name: `name_${i}`,
      physicsAttack: `physicsAttack_${i}`,
      magicAttack: `magicAttack_${i}`,
      defend: `defend_${i}`,
      speed: `speed_${i}`
    }
  })
}

const data = ref(createData())
const columns = ref(createCols())
const pagination = ref({
  pageSize: 10
})
</script>

<template>
  <n-data-table
    :data="data"
    :columns="columns"
    :single-line="false"
    :pagination="pagination"
  />
</template>
```

## 受控的分页

```vue
<script lang="ts" setup>
import { reactive } from 'vue'

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

const pagination = reactive({
  page: 2,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
```

## 受控的过滤器

```vue
<script lang="ts" setup>
import type {
  DataTableBaseColumn,
  DataTableColumns,
  DataTableFilterState
} from 'naive-ui'
import { reactive } from 'vue'

interface Row {
  key: number
  name: string
  age: number
  address: string
}

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const addressColumn = reactive<DataTableBaseColumn<Row>>({
  title: 'Address',
  key: 'address',
  filterMultiple: false,
  filterOptionValue: null,
  sorter: 'default',
  filterOptions: [
    {
      label: 'London',
      value: 'London'
    },
    {
      label: 'New York',
      value: 'New York'
    }
  ],
  filter(value, row) {
    return !!~row.address.indexOf(value.toString())
  }
})

const columns = reactive<DataTableColumns<Row>>([
  {
    title: 'Name',
    key: 'name',
    sorter(rowA, rowB) {
      return rowA.name.length - rowB.name.length
    }
  },
  {
    title: 'Age',
    key: 'age',
    sorter(rowA, rowB) {
      return rowA.age - rowB.age
    }
  },
  addressColumn
])

const pagination = { pageSize: 5 }

function filterAddress() {
  addressColumn.filterOptionValue = 'London'
}

function unfilterAddress() {
  addressColumn.filterOptionValue = null
}

function handleUpdateFilter(
  filters: DataTableFilterState,
  sourceColumn: DataTableBaseColumn
) {
  addressColumn.filterOptionValue = filters[sourceColumn.key] as string
}
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button @click="filterAddress">
        Filter Address(Use Value 'London')
      </n-button>
      <n-button @click="unfilterAddress">
        Clear Address Filters
      </n-button>
    </n-space>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @update:filters="handleUpdateFilter"
    />
  </n-space>
</template>
```

## 受控的排序

如果列对象的 `sortOrder` 属性被设为 `'ascend'`、`'descend'` 或者 `false`，表格的排序将为受控状态。如果很多列的 `sortOrder` 都被设定了，那么只有他们之中的第一列会生效。

```vue
<script lang="ts" setup>
import type {
  DataTableBaseColumn,
  DataTableSortOrder,
  DataTableSortState
} from 'naive-ui'
import { reactive, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const nameColumn: DataTableBaseColumn<RowData> = {
  title: 'Name',
  key: 'name',
  sortOrder: false,
  sorter: 'default'
}

const ageColumn: DataTableBaseColumn<RowData> = {
  title: 'Age',
  key: 'age',
  sortOrder: false,
  sorter(rowA, rowB) {
    return rowA.age - rowB.age
  }
}

const columns: DataTableBaseColumn<RowData>[] = [
  nameColumn,
  ageColumn,
  {
    title: 'Address',
    key: 'address',
    defaultFilterOptionValues: ['London', 'New York'],
    filterOptions: [
      {
        label: 'London',
        value: 'London'
      },
      {
        label: 'New York',
        value: 'New York'
      }
    ],
    filter(value, row) {
      return row.address.includes(value as string)
    }
  }
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 38,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 36,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

const nameColumnReactive = reactive(nameColumn)
const ageColumnReactive = reactive(ageColumn)
const columnsRef = ref<DataTableBaseColumn<RowData>[]>(columns)
const pagination = { pageSize: 5 }

function handleSorterChange(sorter: DataTableSortState) {
  columnsRef.value.forEach((column: DataTableBaseColumn<RowData>) => {
    /** column.sortOrder !== undefined means it is uncontrolled */
    if (column.sortOrder === undefined)
      return
    if (!sorter) {
      column.sortOrder = false
      return
    }
    if (column.key === sorter.columnKey)
      column.sortOrder = sorter.order
    else column.sortOrder = false
  })
}

function sortName(order: DataTableSortOrder) {
  nameColumnReactive.sortOrder = order
}

function clearSorter() {
  nameColumnReactive.sortOrder = false
  ageColumnReactive.sortOrder = false
}
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button @click="sortName('ascend')">
        Sort By Name (Ascend)
      </n-button>
      <n-button @click="sortName('descend')">
        Sort By Name (Descend)
      </n-button>
      <n-button @click="clearSorter">
        Clear Sorter
      </n-button>
    </n-space>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      @update:sorter="handleSorterChange"
    />
  </n-space>
</template>
```

## 受控的多列排序

如果列对象的 `sortOrder` 属性被设为 `'ascend'`、`'descend'` 或者 `false`，表格的排序将为受控状态。

  如果你只需要 UI 显示多列排序的状态，那么不传 `compare` 即可。

```vue
<script lang="ts" setup>
import type {
  DataTableColumnKey,
  DataTableColumns,
  DataTableSortOrder,
  DataTableSortState
} from 'naive-ui'
import { computed, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  chinese: number
  math: number
  english: number
}

const data: RowData[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    chinese: 98,
    math: 60,
    english: 70
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    chinese: 98,
    math: 66,
    english: 89
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 32,
    chinese: 88,
    math: 99,
    english: 89
  }
]

const sortStates = ref<DataTableSortState[]>([])
const sortKeyMapOrder = computed<
  Record<DataTableColumnKey, DataTableSortOrder>
>(() =>
  sortStates.value.reduce(
    (
      result: Record<DataTableColumnKey, DataTableSortOrder>,
      { columnKey, order }
    ) => {
      result[columnKey] = order
      return result
    },
    {}
  )
)
const pagination = ref({ pageSize: 5 })

const columns = computed<DataTableColumns<RowData>>(() => [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age',
    sortOrder: sortKeyMapOrder.value.age || false,
    sorter(rowA, rowB) {
      return rowA.age - rowB.age
    }
  },
  {
    title: 'Chinese Score',
    key: 'chinese',
    sortOrder: sortKeyMapOrder.value.chinese || false,
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3
    }
  },
  {
    title: 'Math Score',
    key: 'math',
    sortOrder: sortKeyMapOrder.value.math || false,
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2
    }
  },
  {
    title: 'English Score',
    sortOrder: sortKeyMapOrder.value.english || false,
    key: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1
    }
  }
])

function handleUpdateSorter(sorters: DataTableSortState[]) {
  console.log(sorters)
  sortStates.value = ([] as DataTableSortState[]).concat(sorters)
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    @update:sorter="handleUpdateSorter"
  />
</template>
```

## 固定头部

在展示大量数据的时候通过设定 `max-height` 来固定头部、滚动数据。

```vue
<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

const pagination = {
  pageSize: 15
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :max-height="250"
  />
</template>
```

## 固定头部和列

注意：如果设定了固定的列，你需要同时设定 `scroll-x`。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      fixed: 'left'
    },
    {
      title: 'Name',
      key: 'name',
      width: 200,
      fixed: 'left'
    },
    {
      title: 'Age',
      key: 'age',
      width: 100,
      fixed: 'left'
    },
    {
      title: 'Row',
      key: 'row',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row1',
      key: 'row1',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row2',
      key: 'row2',
      render(row, index) {
        return h('span', ['row ', index])
      },
      width: 100,
      fixed: 'right'
    },
    {
      title: 'Address',
      key: 'address',
      width: 200,
      fixed: 'right'
    }
  ]
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))
const columns = createColumns()
const pagination = { pageSize: 10 }
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :max-height="250"
    :scroll-x="1800"
  />
</template>
```

## 总结栏

使用 `summary` 属性渲染总结栏。

```vue
<script lang="ts" setup>
import type { DataTableColumns, DataTableCreateSummary } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
}

const createSummary: DataTableCreateSummary = (pageData) => {
  return {
    name: {
      value: h(
        'span',
        { style: { color: 'red' } },
        (pageData as unknown as RowData[]).reduce(
          (prevValue, row) => prevValue + row.age,
          0
        )
      ),
      colSpan: 3
    }
  }
}

const summary = createSummary
const data = createData()
const columns = createColumns()
</script>

<template>
  <n-data-table :columns="columns" :data="data" :summary="summary" />
</template>
```

## 省略

通过设定 `column.ellipsis` 省略单元格内容。

```vue
<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address',
    width: 100,
    ellipsis: true
  },
  {
    title: 'Another Address',
    key: 'anotherAddress',
    width: 100,
    ellipsis: true
  }
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  }
]

const pagination = { pageSize: 10 }
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
```

## 带提示的省略

通过设定 `column.ellipsis.tooltip` 使得省略内容有弹出提示。`column.ellipsis` 接受的属性和 `n-ellipsis` 相同。

```vue
<script lang="ts" setup>
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address',
    width: 100,
    ellipsis: {
      tooltip: true
    }
  },
  {
    title: 'Another Address',
    key: 'anotherAddress',
    width: 100,
    ellipsis: {
      tooltip: true
    }
  }
]

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    anotherAddress: 'New York No. 1 Lake Park'
  }
]

const pagination = { pageSize: 10 }
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
```

## 可展开

注意：展开行不计入 `render` 的 `index` 内

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NButton, NTag, useMessage } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns({
  sendMail
}: {
  sendMail: (rowData: RowData) => void
}): DataTableColumns<RowData> {
  return [
    {
      type: 'selection'
    },
    {
      type: 'expand',
      expandable: rowData => rowData.name !== 'Jim Green',
      renderExpand: (rowData) => {
        return `${rowData.name} is a good guy.`
      }
    },
    {
      title: '#',
      key: 'key',
      render: (_, index) => {
        return `${index + 1}`
      }
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            size: 'small',
            onClick: () => sendMail(row)
          },
          { default: () => 'Send Email' }
        )
      }
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['wow']
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]
}

const message = useMessage()
const data = createData()
const columns = createColumns({
  sendMail(rowData) {
    message.info(`send mail to ${rowData.name}`)
  }
})
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    default-expand-all
  />
</template>
```

## 自定义渲染列头

```vue
<script lang="ts">
import type { DataTableBaseColumn, DataTableColumns } from 'naive-ui'
import type { ComponentInternalInstance, VNode, VNodeChild } from 'vue'
import { NGradientText, NTooltip } from 'naive-ui'
import { defineComponent, getCurrentInstance, h } from 'vue'

interface RowData extends Record<string, unknown> {
  key: number
  name: string
  age: number
  address: string
}

function renderTooltip(trigger: VNode, content: string): VNodeChild {
  return h(NTooltip, null, {
    trigger: () => trigger,
    default: () => content
  })
}

function createColumns(
  _instance: ComponentInternalInstance | null
): DataTableColumns<RowData> {
  return [
    {
      key: 'name',
      title(_column: DataTableBaseColumn<RowData>) {
        return renderTooltip(
          h(
            NGradientText,
            {
              size: 24,
              type: 'danger'
            },
            { default: () => 'Name' }
          ),
          'Tooltip Content'
        )
      }
    },
    {
      key: 'age',
      title(_column: DataTableBaseColumn<RowData>) {
        return h(
          NGradientText,
          {
            size: '20',
            type: 'info'
          },
          { default: () => 'Age' }
        )
      }
    },
    {
      key: 'address',
      title(_column: DataTableBaseColumn<RowData>) {
        return h(
          NGradientText,
          {
            size: '16',
            type: 'warning'
          },
          { default: () => 'Address' }
        )
      }
    }
  ]
}

const data = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]

export default defineComponent({
  setup() {
    const instance = getCurrentInstance()
    return {
      data,
      columns: createColumns(instance),
      pagination: {
        pageSize: 10
      }
    }
  }
})
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
</template>
```

## 自定义样式

列：在列对象上设定 `className` 属性为确定的列设定 class。

```vue
<script lang="ts" setup>
interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const data: RowData[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
]

const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age',
    className: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]

function rowClassName(row: RowData) {
  if (row.age > 32) {
    return 'too-old'
  }
  return ''
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :row-class-name="rowClassName"
  />
</template>

<style>
:deep(.too-old td) {
  color: rgba(255, 0, 0, 0.75) !important;
}
:deep(.age) {
  color: rgba(0, 128, 0, 0.75) !important;
}
:deep(.too-old .age) {
  color: rgba(0, 0, 128, 0.75) !important;
}
</style>
```

## 异步

```vue
<script lang="ts" setup>
import type {
  DataTableColumn,
  DataTableColumns,
  DataTableFilterState,
  DataTableSortOrder,
  DataTableSortState,
  PaginationInfo
} from 'naive-ui'
import type { FilterOptionValue } from '../../src/interface'
import { onMounted, reactive, ref } from 'vue'

interface RowData {
  column1: number
  column2: number
  column3: string
}

const column1: DataTableColumn<RowData> = {
  title: 'column1',
  key: 'column1',
  sorter: true,
  sortOrder: false
}

const column2: DataTableColumn<RowData> = {
  title: 'column2',
  key: 'column2',
  filter: true,
  filterOptionValues: [],
  filterOptions: [
    {
      label: 'Value1',
      value: 1
    },
    {
      label: 'Value2',
      value: 2
    }
  ]
}

const columns: DataTableColumns<RowData> = [
  column1,
  column2,
  {
    title: 'Column3',
    key: 'column3'
  }
]

const data = Array.from({ length: 987 })
  .fill(null)
  .map((_, index) => {
    return {
      column1: index,
      column2: (index % 2) + 1,
      column3: `a${index}`
    }
  })

interface QueryParams {
  page: number
  pageSize: number
  order?: DataTableSortOrder
  filterValues?: FilterOptionValue[] | null | undefined
}

interface QueryResult {
  pageCount: number
  data: RowData[]
  total: number
}

function query({
  page,
  pageSize = 10,
  order = 'ascend',
  filterValues = []
}: QueryParams): Promise<QueryResult> {
  return new Promise((resolve) => {
    const copiedData = data.map(v => v)
    const orderedData = order === 'descend' ? copiedData.reverse() : copiedData
    const filteredData = filterValues?.length
      ? orderedData.filter(row => filterValues?.includes(row.column2))
      : orderedData
    const pagedData = filteredData.slice((page - 1) * pageSize, page * pageSize)
    const total = filteredData.length
    const pageCount = Math.ceil(filteredData.length / pageSize)
    setTimeout(
      () =>
        resolve({
          pageCount,
          data: pagedData,
          total
        }),
      1500
    )
  })
}

const dataRef = ref<RowData[]>([])
const loadingRef = ref(true)
const columnsRef = ref(columns)
const column1Reactive = reactive(column1)
const column2Reactive = reactive(column2)
const paginationReactive = reactive({
  page: 1,
  pageCount: 1,
  pageSize: 10,
  itemCount: 0,
  prefix({ itemCount }: PaginationInfo) {
    return `Total is ${itemCount}.`
  }
})

onMounted(() => {
  query({
    page: paginationReactive.page,
    pageSize: paginationReactive.pageSize,
    order: column1Reactive.sortOrder,
    filterValues: column2Reactive.filterOptionValues
  }).then((data) => {
    dataRef.value = data.data
    paginationReactive.pageCount = data.pageCount
    paginationReactive.itemCount = data.total
    loadingRef.value = false
  })
})

function rowKey(rowData: RowData) {
  return rowData.column1
}

function handleSorterChange(sorter: DataTableSortState) {
  if (!sorter || sorter.columnKey === 'column1') {
    if (!loadingRef.value) {
      loadingRef.value = true
      query({
        page: paginationReactive.page,
        pageSize: paginationReactive.pageSize,
        order: !sorter ? false : sorter.order,
        filterValues: column2Reactive.filterOptionValues
      }).then((data) => {
        column1Reactive.sortOrder = !sorter ? false : sorter.order
        dataRef.value = data.data
        paginationReactive.pageCount = data.pageCount
        paginationReactive.itemCount = data.total
        loadingRef.value = false
      })
    }
  }
}

function handleFiltersChange(filters: DataTableFilterState) {
  if (!loadingRef.value) {
    loadingRef.value = true
    const filterValues = Array.isArray(filters.column2) ? filters.column2 : []
    query({
      page: paginationReactive.page,
      pageSize: paginationReactive.pageSize,
      order: column1Reactive.sortOrder,
      filterValues
    }).then((data) => {
      column2Reactive.filterOptionValues = filterValues
      dataRef.value = data.data
      paginationReactive.pageCount = data.pageCount
      paginationReactive.itemCount = data.total
      loadingRef.value = false
    })
  }
}

function handlePageChange(currentPage: number) {
  if (!loadingRef.value) {
    loadingRef.value = true
    query({
      page: currentPage,
      pageSize: paginationReactive.pageSize,
      order: column1Reactive.sortOrder,
      filterValues: column2Reactive.filterOptionValues
    }).then((data) => {
      dataRef.value = data.data
      paginationReactive.page = currentPage
      paginationReactive.pageCount = data.pageCount
      paginationReactive.itemCount = data.total
      loadingRef.value = false
    })
  }
}
</script>

<template>
  <n-data-table
    remote
    :columns="columnsRef"
    :data="dataRef"
    :loading="loadingRef"
    :pagination="paginationReactive"
    :row-key="rowKey"
    @update:sorter="handleSorterChange"
    @update:filters="handleFiltersChange"
    @update:page="handlePageChange"
  />
</template>
```

## 大量数据

**注意：当 `virtual-scroll` 为 `true` 时，`rowSpan` 将不生效。**

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { h } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<RowData> = [
  {
    type: 'selection',
    fixed: 'left'
  },
  {
    title: 'Name',
    key: 'name',
    width: 200,
    fixed: 'left'
  },
  {
    title: 'Age',
    key: 'age',
    width: 100,
    fixed: 'left'
  },
  {
    title: 'Row',
    key: 'row',
    render(row, index) {
      return h('span', ['row ', index])
    }
  },
  {
    title: 'Row1',
    key: 'row1',
    render(row, index) {
      return h('span', ['row ', index])
    }
  },
  {
    title: 'Row2',
    key: 'row2',
    render(row, index) {
      return h('span', ['row ', index])
    },
    width: 100,
    fixed: 'right'
  },
  {
    title: 'Address',
    key: 'address',
    width: 200,
    fixed: 'right'
  }
]

const data: RowData[] = Array.from({ length: 5000 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :max-height="250"
    :scroll-x="1800"
    virtual-scroll
  />
</template>
```

## 大量数据（行和列）

如果你有大量行数据和列数据，例如几千行 + 几百列，`naive-ui` 提供了横向 + 纵向虚拟滚动的功能。

因为横向虚拟滚动的天然的复杂性，对应的配置也会较为复杂，以下多数内容都是必须的：

1. 配置 `virtual-scroll` 打开纵向虚拟滚动
2. 配置 `virtual-scroll-x` 打开横向虚拟滚动
    - 每一个列都需要配置 `width` 属性
    - 配置 `scroll-x` 属性，设为所有列的总宽度
    - 配置 `min-row-height` 属性，设为每一行的最小高度，所有的行高度必须比这个值更大
    - 配置 `height-for-row` 属性，用于配置每一行的高度（因为每一行永远只有一部分格子是可见的，因此无法自动求出），如果不配置，每一行的高度会被设为 `min-row-height`
3. 如有需要，配置 `virtual-scroll-header`，默认情况下，表头依然会全量渲染以保持兼容性，你可以通过此配置来打开表头的虚拟渲染
    - 配置 `header-height` 属性，设为表头的高度

下面的例子对应了一个 1000 行 * 1000 列的表格。

`naive-ui` 的表格可以轻松的支持千万级的表格数据，你在不收钱的组件库不容易找得到这样的功能。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<RowData> = []

let scrollX = 0

for (let i = 0; i < 1000; ++i) {
  scrollX += 100
  columns.push({
    title: `Col ${i}`,
    width: 100,
    key: i,
    fixed: i <= 1 ? 'left' : i > 997 ? 'right' : undefined,
    render(_, rowIndex) {
      return `${i}-${rowIndex}`
    }
  })
}

const data: RowData[] = Array.from({ length: 1000 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))

const heightForRow = () => 48
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :max-height="250"
    virtual-scroll
    virtual-scroll-x
    :scroll-x="scrollX"
    :min-row-height="48"
    :height-for-row="heightForRow"
    virtual-scroll-header
    :header-height="48"
  />
</template>
```

## 自定义图标

你可以自定义过滤图标、过滤菜单、排序图标、展开图标的样式。

```vue
<script lang="ts" setup>
import type { DataTableBaseColumn, DataTableColumns } from 'naive-ui'
import { PawOutline, SearchOutline } from '@vicons/ionicons5'
import { NButton, NIcon, NSpace } from 'naive-ui'
import { h, reactive } from 'vue'

const data = [
  {
    Left: '1',
    Right: '1',
    key: 1
  },
  {
    Left: '2',
    Right: '2',
    key: 2
  }
]

function renderExpandIcon() {
  return h(NIcon, null, { default: () => h(PawOutline) })
}

const filterColumn = reactive<DataTableBaseColumn>({
  title: 'Right',
  key: 'Right',
  filter: 'default',
  filterOptionValue: null,
  renderFilterIcon: () => {
    return h(NIcon, null, { default: () => h(SearchOutline) })
  },
  renderFilterMenu: ({ hide }) => {
    return h(
      NSpace,
      { style: { padding: '12px' }, vertical: true },
      {
        default: () => [
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = '1'
              }
            },
            { default: () => 'Filter by 1' }
          ),
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = '2'
              }
            },
            { default: () => 'Filter by 2' }
          ),
          h(
            NButton,
            {
              onClick: () => {
                filterColumn.filterOptionValue = null
                hide()
              }
            },
            { default: () => 'clear' }
          )
        ]
      }
    )
  }
})

const cols = reactive<DataTableColumns>([
  {
    type: 'expand',
    renderExpand: () => {
      return 'Expand content'
    }
  },
  {
    title: 'Left',
    key: 'Left',
    sorter: 'default',
    renderSorterIcon: ({ order }) => {
      const style = 'transform: translateY(-3px);'
      if (order === false)
        return h('div', { style }, ['🤔'])
      if (order === 'ascend')
        return h('div', { style }, ['👇'])
      if (order === 'descend')
        return h('div', { style }, ['👆'])
    }
  },
  filterColumn
])
</script>

<template>
  <n-data-table
    :columns="cols"
    :data="data"
    :render-expand-icon="renderExpandIcon"
  />
</template>
```

## 树型数据

在行数据中设定 `children` 来展示树型数据。如果你想用别的 key 来获取 children，那么可以设定 `children-key`。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'

interface RowData {
  name: string
  index: string
  children?: RowData[]
}

const data: RowData[] = [
  {
    name: '07akioni',
    index: '07',
    children: [
      {
        name: '08akioni',
        index: '08',
        children: [
          {
            name: '09akioni',
            index: '09'
          },
          {
            name: '10akioni',
            index: '10'
          }
        ]
      }
    ]
  },
  {
    name: '11akioni',
    index: '11'
  }
]

const columns: DataTableColumns<RowData> = [
  {
    type: 'selection'
  },
  {
    title: 'name',
    key: 'name'
  },
  {
    title: 'index',
    key: 'index'
  }
]

function rowKey(row: RowData) {
  return row.index
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :row-key="rowKey"
    default-expand-all
  />
</template>
```

## 弹性高度

如果你想设定表格的整体高度，你可以在设定好表格高度的情况下设定 `flex-height` 属性。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { h, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection',
      fixed: 'left'
    },
    {
      title: 'Name',
      key: 'name',
      width: 200,
      fixed: 'left'
    },
    {
      title: 'Age',
      key: 'age',
      width: 100,
      fixed: 'left'
    },
    {
      title: 'Row',
      key: 'row',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row1',
      key: 'row1',
      render(row, index) {
        return h('span', ['row ', index])
      }
    },
    {
      title: 'Row2',
      key: 'row2',
      render(row, index) {
        return h('span', ['row ', index])
      },
      width: 100,
      fixed: 'right'
    },
    {
      title: 'Address',
      key: 'address',
      width: 200,
      fixed: 'right'
    }
  ]
}

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index,
  name: `Edward King ${index}`,
  age: 32,
  address: `London, Park Lane no. ${index}`
}))
const columns = createColumns()
const pagination = { pageSize: 10 }
const height = ref(200)
</script>

<template>
  <n-space vertical>
    <n-slider
      v-model:value="height"
      :min="200"
      :max="500"
      :step="100"
      style="max-width: 180px"
    />
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :scroll-x="1800"
      :style="{ height: `${height}px` }"
      flex-height
    />
  </n-space>
</template>
```

## 条纹

使用 `striped` 属性渲染条纹，使得表格明暗交替。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

function createColumns(): DataTableColumns<RowData> {
  return [
    {
      type: 'selection'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ]
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: 1,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ]
}

const data = createData()
const columns = createColumns()
</script>

<template>
  <n-data-table :columns="columns" :data="data" striped />
</template>
```

## 简单的可编辑表格

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NInput } from 'naive-ui'
import { h, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: string
  address: string
}

function createData(): RowData[] {
  return [
    {
      key: 0,
      name: 'John Brown',
      age: '32',
      address: 'New York No. 1 Lake Park'
    },
    {
      key: 1,
      name: 'Jim Green',
      age: '42',
      address: 'London No. 1 Lake Park'
    },
    {
      key: 2,
      name: 'Joe Black',
      age: '32',
      address: 'Sidney No. 1 Lake Park'
    }
  ]
}

const data = ref(createData())
function createColumns(): DataTableColumns<RowData> {
  return [
    {
      title: 'Name',
      key: 'name',
      render(row, index) {
        return h(NInput, {
          value: row.name,
          onUpdateValue(v) {
            data.value[index].name = v
          }
        })
      }
    },
    {
      title: 'Age',
      key: 'age',
      render(row, index) {
        return h(NInput, {
          value: row.age,
          onUpdateValue(v) {
            data.value[index].age = v
          }
        })
      }
    },
    {
      title: 'Address',
      key: 'address',
      render(row, index) {
        return h(NInput, {
          value: row.address,
          onUpdateValue(v) {
            data.value[index].address = v
          }
        })
      }
    }
  ]
}

const columns = createColumns()
const pagination = {
  pageSize: 10
}
</script>

<template>
  <n-data-table :columns="columns" :data="data" :pagination="pagination" />
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>
```

## 可切换的可编辑表格

```vue
<script lang="ts">
import type { InputInst } from 'naive-ui'
import type { PropType } from 'vue'
import { NInput } from 'naive-ui'
import { computed, defineComponent, h, nextTick, ref } from 'vue'

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

interface OnUpdateValue {
  (value: string): void
}

function createData(): RowData[] {
  return Array.from({ length: 100 }).map((_, index) => ({
    key: index,
    name: `John Brown ${index}`,
    age: (Math.random() * 40) | 0,
    address: `New York No. ${index} Lake Park`
  }))
}

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array] as PropType<OnUpdateValue>
  },
  setup(props) {
    const isEdit = ref(false)
    const inputRef = ref<InputInst | null>(null)
    const inputValue = ref(props.value)
    function handleOnClick() {
      isEdit.value = true
      nextTick(() => {
        inputRef.value?.focus()
      })
    }
    function handleChange() {
      props.onUpdateValue?.(String(inputValue.value))
      isEdit.value = false
    }
    return () =>
      h(
        'div',
        {
          style: 'min-height: 22px',
          onClick: handleOnClick
        },
        isEdit.value
          ? h(NInput, {
              ref: inputRef,
              value: String(inputValue.value),
              onUpdateValue: (v) => {
                inputValue.value = v
              },
              onChange: handleChange,
              onBlur: handleChange
            })
          : props.value
      )
  }
})

export default defineComponent({
  setup() {
    const data = ref(createData())
    const page = ref(1)

    const getDataIndex = (key: number) => {
      return data.value.findIndex(item => item.key === key)
    }
    const handlePageChange = (curPage: number) => {
      page.value = curPage
    }

    const paginationRef = computed(() => ({
      pageSize: 10,
      page: page.value
    }))

    return {
      data,
      paginationRef,
      handlePageChange,
      columns: [
        {
          title: 'Name',
          key: 'name',
          width: 150,
          render(row: RowData) {
            const index = getDataIndex(row.key)
            return h(ShowOrEdit, {
              value: row.name,
              onUpdateValue(v: string) {
                data.value[index].name = v
              }
            })
          }
        },
        {
          title: 'Age',
          key: 'age',
          width: 100,
          render(row: RowData) {
            const index = getDataIndex(row.key)
            return h(ShowOrEdit, {
              value: row.age,
              onUpdateValue(v: string) {
                data.value[index].age = Number(v)
              }
            })
          }
        },
        {
          title: 'Address',
          key: 'address',
          render(row: RowData) {
            const index = getDataIndex(row.key)
            return h(ShowOrEdit, {
              value: row.address,
              onUpdateValue(v: string) {
                data.value[index].address = v
              }
            })
          }
        }
      ]
    }
  }
})
</script>

<template>
  <n-data-table
    :key="(row: RowData) => row.key"
    :columns="columns"
    :data="data"
    :pagination="paginationRef"
    :on-update:page="handlePageChange"
  />
</template>
```

## 右键菜单

配合 `n-dropdown` 实现右键菜单。

```vue
<script lang="ts" setup>
import type { DataTableColumns, DropdownOption } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { h, nextTick, ref } from 'vue'

interface Song {
  no: number
  title: string
  length: string
}

const data: Song[] = [
  { no: 1, title: 'Hello', length: '3:21' },
  { no: 2, title: 'Roll with It', length: '3:59' },
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 5, title: 'Hey Now!', length: '5:41' },
  { no: 6, title: 'Untitled', length: '0:44' },
  { no: 7, title: 'Some Might Say', length: '5:29' },
  { no: 8, title: 'Cast No Shadow', length: '4:51' },
  { no: 9, title: 'She\'s Electric', length: '3:40' },
  { no: 10, title: 'Monring Glory', length: '5:03' },
  { no: 11, title: 'Untitled', length: '0:39' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const options: DropdownOption[] = [
  {
    label: '编辑',
    key: 'edit'
  },
  {
    label: () => h('span', { style: { color: 'red' } }, '删除'),
    key: 'delete'
  }
]

const message = useMessage()
const showDropdownRef = ref(false)
const xRef = ref(0)
const yRef = ref(0)
const colsReactive: DataTableColumns<Song> = [
  {
    title: 'No.',
    key: 'no'
  },
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'Length',
    key: 'length'
  }
]

const cols = colsReactive
const showDropdown = showDropdownRef
const x = xRef
const y = yRef

function handleSelect() {
  showDropdownRef.value = false
}

function onClickoutside() {
  showDropdownRef.value = false
}

function rowProps(row: Song) {
  return {
    onContextmenu: (e: MouseEvent) => {
      message.info(JSON.stringify(row, null, 2))
      e.preventDefault()
      showDropdownRef.value = false
      nextTick().then(() => {
        showDropdownRef.value = true
        xRef.value = e.clientX
        yRef.value = e.clientY
      })
    }
  }
}
</script>

<template>
  <n-data-table :columns="cols" :data="data" :row-props="rowProps" />
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :options="options"
    :show="showDropdown"
    :on-clickoutside="onClickoutside"
    @select="handleSelect"
  />
</template>
```

## 异步展开树形数据

在 `onLoad` 回调中更改数据。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { ref } from 'vue'

const columns: DataTableColumns = [
  { type: 'selection' },
  { key: 'example', title: 'Example' }
]
const dataRef = ref([
  { key: 'p1', example: 'p1', isLeaf: false },
  { key: 'p2', example: 'p2', isLeaf: false },
  { key: 'p3', example: 'p3', isLeaf: false }
])
const data = dataRef

function onLoad(row: Record<string, unknown>) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      row.children = [{ key: `${row.key}-1`, example: `${row.key}-1` }]
      resolve()
    }, 1000)
  })
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="data"
    :cascade="false"
    allow-checking-not-loaded
    @load="onLoad"
  />
</template>
```

## 自定义单元格

你可以使用 `render-cell` 去渲染空状态。

```vue
<script lang="ts" setup>
import type { DataTableColumns } from 'naive-ui'
import { NText } from 'naive-ui'
import { h } from 'vue'

interface Song {
  no: number
  note: string
}

function createColumns(): DataTableColumns<Song> {
  return [
    {
      title: '日期',
      key: 'no',
      width: 120,
      render: (_, index) => {
        return `星期 ${index + 1}`
      }
    },
    {
      title: '记录',
      key: 'note'
    }
  ]
}

const data: Song[] = [
  { no: 3, note: '' },
  { no: 4, note: '' },
  { no: 12, note: '' },
  { no: 10, note: '' },
  { no: 19, note: '' }
]

const columns = createColumns()

function renderCell(value: string | number) {
  if (!value) {
    return h(NText, { depth: 3 }, { default: () => '未填写' })
  }
  return value
}
</script>

<template>
  <n-data-table :columns="columns" :data="data" :render-cell="renderCell" />
</template>
```

## 导出 CSV

你可以用 `downloadCsv` 方法导出表格数据为 CSV 文件。

如果默认的 CSV 生成逻辑不能满足你的需求，例如 `title` 使用了渲染函数，或者需要调整每个单元格的数据格式，你可以用 `get-csv-header` 和 `get-csv-cell` 属性自定义导出的表头和单元格。

```vue
<script lang="ts" setup>
import type {
  DataTableColumns,
  DataTableGetCsvCell,
  DataTableGetCsvHeader,
  DataTableInst,
  DataTableRowData
} from 'naive-ui'
import { h, ref } from 'vue'

interface Song {
  key: number
  name: string
  age: number
  address: string
}

const columns: DataTableColumns<DataTableRowData> = [
  {
    title: 'Name',
    key: 'name',
    sorter: 'default',
    render(rowData) {
      return h('span', { style: { color: 'blue' } }, rowData.name)
    }
  },
  {
    title: () => h('span', { style: { color: 'red' } }, 'Age'),
    key: 'age',
    sorter: (row1: object, row2: object) =>
      (row1 as Song).age - (row2 as Song).age
  },
  {
    title: 'Address',
    key: 'address',
    filterOptions: [
      {
        label: 'London',
        value: 'London'
      },
      {
        label: 'New York',
        value: 'New York'
      }
    ],
    filter: (value: string | number, row: object) => {
      return !!~(row as Song).address.indexOf(value as string)
    }
  }
]

const data: Song[] = [
  {
    key: 0,
    name: 'John Brown',
    age: 18,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: 28,
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: 38,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 3,
    name: 'Jim Red',
    age: 48,
    address: 'London No. 2 Lake Park'
  }
]

const tableRef = ref<DataTableInst>()

function downloadCsv() {
  return tableRef.value?.downloadCsv({ fileName: 'data-table' })
}

function exportSorterAndFilterCsv() {
  return tableRef.value?.downloadCsv({
    fileName: 'sorter-filter',
    keepOriginalData: false
  })
}

const getCsvCell: DataTableGetCsvCell = (value, _, column) => {
  if (column.key === 'age') {
    return `${value} years old`
  }
  return value
}

const getCsvHeader: DataTableGetCsvHeader = (col) => {
  if (typeof col.title === 'function') {
    return col.key === 'age' ? 'Age' : 'Unknown'
  }
  else {
    return col.title || 'Unknown'
  }
}

const pagination = false as const
</script>

<template>
  <n-space vertical :size="12">
    <n-space>
      <n-button @click="downloadCsv">
        导出 CSV（原始数据）
      </n-button>
      <n-button @click="exportSorterAndFilterCsv">
        导出 CSV（展示的数据）
      </n-button>
    </n-space>
    <n-data-table
      ref="tableRef"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :bordered="false"
      :get-csv-cell="getCsvCell"
      :get-csv-header="getCsvHeader"
    />
  </n-space>
</template>
```

