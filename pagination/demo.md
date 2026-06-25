# 分页 Pagination - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-pagination v-model:page="page" :page-count="100" />
</template>
```

## 简单分页

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-pagination v-model:page="page" :page-count="100" simple />
</template>
```

## 页面槽位

分页有一个属性 `page-slot`，试一下你就能理解它在做什么了。这个概念主要是为了解决由于分页长度变化导致的误点击问题。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-space vertical>
    <n-pagination v-model:page="page" :page-count="100" />
    <n-pagination v-model:page="page" :page-count="100" :page-slot="8" />
    <n-pagination v-model:page="page" :page-count="100" :page-slot="7" />
  </n-space>
</template>
```

## 快速跳跃

自定义跳至的内容（按 `Enter` 进行快速跳跃）。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-space vertical>
    <n-pagination v-model:page="page" :page-count="100" show-quick-jumper>
      <template #goto>
        请回答
      </template>
    </n-pagination>
    <n-pagination v-model:page="page" :page-count="100" show-quick-jumper>
      <template #goto>
        请回答
      </template>
    </n-pagination>
  </n-space>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
</script>

<template>
  <n-space vertical>
    <n-pagination
      v-model:page="page"
      :page-count="100"
      size="small"
      show-quick-jumper
      show-size-picker
    />
    <n-pagination
      v-model:page="page"
      :page-count="100"
      size="medium"
      show-quick-jumper
      show-size-picker
    />
    <n-pagination
      v-model:page="page"
      :page-count="100"
      size="large"
      show-quick-jumper
      show-size-picker
    />
  </n-space>
</template>
```

## 每页条数

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
const pageSize = ref(20)
</script>

<template>
  <n-pagination
    v-model:page="page"
    v-model:page-size="pageSize"
    :page-count="100"
    show-size-picker
    :page-sizes="[10, 20, 30, 40]"
  />
</template>
```

## 禁用

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const page = ref(2)
const pageSize = ref(20)
const disabled = ref(true)
</script>

<template>
  <n-space vertical>
    <n-pagination
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-count="100"
      show-size-picker
      :page-sizes="[10, 20, 30, 40]"
      show-quick-jumper
      :disabled="disabled"
    />
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
```

## 使用元素个数控制分页

有的时候你不想传递 `page-count`，这个时候你可以设定 `item-count` 和 `page-size`。

```vue
<template>
  <n-pagination
    :item-count="201"
    :page-sizes="[10, 20, 30, 40]"
    show-size-picker
  />
</template>
```

## 自定义上一步和下一步

```vue
<template>
  <n-pagination :page-count="101">
    <template #prev>
      往回走
    </template>
    <template #next>
      继续走
    </template>
  </n-pagination>
</template>
```

## 前后缀

你可能想在前后都加点啥。

```vue
<template>
  <n-pagination :item-count="101">
    <template #prefix="{ itemCount, startIndex }">
      从第 {{ startIndex }} 项开始, 共 {{ itemCount }} 项
    </template>
    <template #suffix="{ endIndex }">
      从第 {{ endIndex }} 项结束
    </template>
  </n-pagination>
</template>
```

## 自定义 PageSizes 选项

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const pageSizes = [
  {
    label: '10 每页',
    value: 10
  },
  {
    label: '20 每页',
    value: 20
  },
  {
    label: '30 每页',
    value: 30
  },
  {
    label: '40 每页',
    value: 40
  }
]

const page = ref(2)
const pageSize = ref(20)
</script>

<template>
  <n-pagination
    v-model:page="page"
    v-model:page-size="pageSize"
    :page-count="100"
    show-size-picker
    :page-sizes="pageSizes"
  />
</template>
```

## 展示顺序

你可以通过 `display-order` 来调整展示顺序。

```vue
<template>
  <n-pagination
    :display-order="['quick-jumper', 'pages', 'size-picker']"
    :page-count="100"
    show-quick-jumper
    show-size-picker
  />
</template>
```

