# 动态标签 Dynamic Tags - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref(['教师', '程序员'])
</script>

<template>
  <n-dynamic-tags v-model:value="tags" />
</template>
```

## 最大标签数量

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const tags = ref(['教师', '程序员'])
</script>

<template>
  <n-dynamic-tags v-model:value="tags" :max="3" />
</template>
```

## 在表单中使用

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const model = ref({
  tags: ['教师', '程序员']
})

const rules = {
  tags: {
    trigger: ['change'],
    validator(rule: unknown, value: string[]) {
      if (value.length >= 5)
        return new Error('不得超过四个标签')
      return true
    }
  }
}
</script>

<template>
  <n-form :model="model" :rules="rules">
    <n-form-item path="tags" :show-label="false">
      <n-dynamic-tags v-model:value="model.tags" />
    </n-form-item>
  </n-form>
</template>
```

## 自定义输入或触发元素

你可以替换 `dynamic-tags` 的输入或触发元素。

```vue
<script lang="ts" setup>
import type { AutoCompleteInst } from 'naive-ui'
import { Add } from '@vicons/ionicons5'
import { computed, nextTick, ref, watch } from 'vue'

const autoCompleteInstRef = ref<AutoCompleteInst | null>(null)
watch(autoCompleteInstRef, (value) => {
  if (value)
    nextTick(() => value.focus())
})

const inputValue = ref('')
const options = computed(() => {
  if (inputValue.value === null) {
    return []
  }
  const prefix = inputValue.value.split('@')[0]
  const inputSuffix = inputValue.value.split('@')[1]
  if (inputSuffix) {
    return [
      {
        label: `${prefix}@${inputSuffix}`,
        value: `${prefix}@${inputSuffix}`
      }
    ]
  }
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    return {
      label: prefix + suffix,
      value: prefix + suffix
    }
  })
})

const tags = ref(['教师', '程序员'])
</script>

<template>
  <n-dynamic-tags v-model:value="tags" :max="3">
    <template #input="{ submit, deactivate }">
      <n-auto-complete
        ref="autoCompleteInstRef"
        v-model:value="inputValue"
        size="small"
        :options="options"
        placeholder="邮箱"
        :clear-after-select="true"
        @select="submit($event)"
        @blur="deactivate"
      />
    </template>
    <template #trigger="{ activate, disabled }">
      <n-button
        size="small"
        type="primary"
        dashed
        :disabled="disabled"
        @click="activate()"
      >
        <template #icon>
          <n-icon>
            <Add />
          </n-icon>
        </template>
        添加
      </n-button>
    </template>
  </n-dynamic-tags>
</template>
```

## 自定义渲染每一个 tag

```vue
<script lang="ts" setup>
import { NTag } from 'naive-ui'
import { h, ref } from 'vue'

const tags = ref(['教师', '程序员'])

function renderTag(tag: string, index: number) {
  return h(
    NTag,
    {
      type: index < 3 ? 'success' : 'error',
      disabled: index > 3,
      closable: true,
      onClose: () => {
        tags.value.splice(index, 1)
      }
    },
    {
      default: () => tag
    }
  )
}
</script>

<template>
  <n-dynamic-tags v-model:value="tags" :render-tag="renderTag" />
</template>
```

## 使用对象格式的值

你可以配置 `@create` 来产生 `{ label, value }` 格式的值，注意不要和 `string` 类型混用。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([
  { label: '你没见过不等于没有', value: 'hello world 1' },
  {
    label: '不要给自己设限',
    value: 'hello world 2'
  },
  {
    label: '不要说连升两级',
    value: 'hello world 3'
  },
  {
    label: '直接升到 CEO 都是有可能的',
    value: 'hello world 4'
  }
])

function onCreate(label: string) {
  return {
    label,
    value: `v${label}`
  }
}
</script>

<template>
  <n-dynamic-tags v-model:value="value" @create="onCreate" />
</template>
```

## 自定义创建逻辑

使用 `on-create` 属性控制创建标签的逻辑。

```vue
<script lang="ts" setup>
function handleCreate(label: string) {
  return (
    {
      0: '赋能',
      1: '打通',
      2: '闭环'
    }[Math.floor(Math.random() * 3)] + label
  )
}
</script>

<template>
  <n-dynamic-tags @create="handleCreate" />
</template>
```

