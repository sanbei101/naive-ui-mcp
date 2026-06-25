# 复选框 Checkbox - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const disabled = ref(true)
</script>

<template>
  <n-space item-style="display: flex;" align="center">
    <n-checkbox v-model:checked="value">
      复选框
    </n-checkbox>
    <n-checkbox v-model:checked="value" />
    <n-checkbox v-model:checked="value" :disabled="disabled">
      复选框
    </n-checkbox>
    <n-button size="small" @click="disabled = !disabled">
      禁用
    </n-button>
  </n-space>
</template>
```

## 尺寸

```vue
<template>
  <n-space item-style="display: flex;" align="center">
    <n-checkbox size="small" label="小" />
    <n-checkbox size="medium" label="中" />
    <n-checkbox size="large" label="大" />
  </n-space>
</template>
```

## 选项组

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const cities = ref(null)
</script>

<template>
  <n-checkbox-group v-model:value="cities">
    <n-space item-style="display: flex;">
      <n-checkbox value="Beijing" label="北京" />
      <n-checkbox value="Shanghai" label="上海" />
      <n-checkbox value="Guangzhou" label="广州" />
      <n-checkbox value="Shenzhen" label="深圳" />
    </n-space>
  </n-checkbox-group>
</template>
```

## 栅格

和栅格一起使用。

```vue
<template>
  <n-checkbox-group>
    <n-grid :y-gap="8" :cols="2">
      <n-gi>
        <n-checkbox value="Pushes Open" label="推开" />
      </n-gi>
      <n-gi>
        <n-checkbox value="The Window" label="窗户" />
      </n-gi>
      <n-gi>
        <n-checkbox value="And Raises" label="举起" />
      </n-gi>
      <n-gi>
        <n-checkbox value="The Spyglass" label="望远镜" />
      </n-gi>
    </n-grid>
  </n-checkbox-group>
</template>
```

## 部分选中

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
const indeterminate = ref(false)
</script>

<template>
  <n-space item-style="display: flex;" align="center">
    <n-checkbox v-model:checked="value" :indeterminate="indeterminate">
      复选框
    </n-checkbox>
    <n-checkbox v-model:checked="value" :indeterminate="indeterminate" />
    <n-checkbox
      v-model:checked="value"
      :indeterminate="indeterminate"
      disabled
    />
    <n-switch v-model:value="value">
      <template #checked>
        选中
      </template>
      <template #unchecked>
        没选中
      </template>
    </n-switch>
    <n-switch v-model:value="indeterminate">
      <template #checked>
        部分选中
      </template>
      <template #unchecked>
        非部分选中
      </template>
    </n-switch>
  </n-space>
</template>
```

## 受控状态

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <n-space align="center" item-style="display: flex;">
    <n-checkbox :checked="value">
      复选框
    </n-checkbox>
    <n-switch v-model:value="value" />
  </n-space>
</template>
```

## 事件

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const checkedRef = ref(false)
const citiesRef = ref<(string | number)[] | null>(null)
const message = useMessage()

function handleCheckedChange(checked: boolean) {
  checkedRef.value = checked
  message.info(JSON.stringify(checked))
}

function handleUpdateValue(value: (string | number)[]) {
  citiesRef.value = value
  message.info(JSON.stringify(value))
}
</script>

<template>
  <n-space item-style="display: flex;" vertical>
    <n-checkbox
      :checked="checkedRef"
      label="事件"
      @update:checked="handleCheckedChange"
    />
    <n-checkbox-group :value="citiesRef" @update:value="handleUpdateValue">
      <n-space item-style="display: flex;" align="center">
        <n-checkbox value="Beijing" label="北京" />
        <n-checkbox value="Shanghai" label="上海" />
        <n-checkbox value="Guangzhou" label="广州" />
        <n-checkbox value="Shenzhen" label="深圳" />
      </n-space>
    </n-checkbox-group>
  </n-space>
</template>
```

## 自定义选中的值

使用 `checked-value` 和 `unchecked-value` 制定选中的值。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
function handleUpdateChecked(value: boolean) {
  message.info(String(value))
}
</script>

<template>
  <n-checkbox
    checked-value="周末加班"
    unchecked-value="周末支持一下"
    @update:checked="handleUpdateChecked"
  >
    抉择时刻
  </n-checkbox>
</template>
```

## 手动 focus & blur

```vue
<script lang="ts" setup>
import type { CheckboxInst } from 'naive-ui'
import { ref } from 'vue'

const checkboxInstRef = ref<CheckboxInst | null>(null)

function handleClick() {
  checkboxInstRef.value?.focus()
  setTimeout(() => {
    checkboxInstRef.value?.blur()
  }, 1000)
}
</script>

<template>
  <n-space item-style="display: flex; align-items: center;">
    <n-button @click="handleClick">
      聚焦，一秒后失效
    </n-button>
    <n-checkbox ref="checkboxInstRef" />
  </n-space>
</template>
```

