# 动态录入 Dynamic Input - 演示示例

## 使用输入预设

默认状况下，`n-dynamic-input` 的预设是 `input`。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(['', '', ''])
</script>

<template>
  <n-dynamic-input
    v-model:value="value"
    placeholder="请输入"
    :min="3"
    :max="6"
  />
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>
```

## 使用键值对预设

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([
  {
    key: '',
    value: ''
  }
])
</script>

<template>
  <n-dynamic-input
    v-model:value="value"
    preset="pair"
    key-placeholder="环境变量名"
    value-placeholder="环境变量值"
  />
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>
```

## 自定义内容

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const customValue = ref([
  {
    isCheck: true,
    num: 1,
    string: '一个字符串'
  }
])

function onCreate() {
  return {
    isCheck: false,
    num: 1,
    string: '一个字符串'
  }
}
</script>

<template>
  <n-dynamic-input v-model:value="customValue" :on-create="onCreate">
    <template #create-button-default>
      随便搞点啥
    </template>
    <template #default="{ value }">
      <div style="display: flex; align-items: center; width: 100%">
        <n-checkbox
          v-model:checked="value.isCheck"
          style="margin-right: 12px"
        />
        <n-input-number
          v-model:value="value.num"
          style="margin-right: 12px; width: 160px"
        />
        <n-input v-model:value="value.string" type="text" />
      </div>
    </template>
  </n-dynamic-input>
  <pre>{{ JSON.stringify(customValue, null, 2) }}</pre>
</template>
```

## 在表单中使用

`n-dynamic-input` 并不能作为一个单独的表项检验，如果你需要检验 `n-dynamic-input` 里面的内容，可以在自定义内容中传入 `n-form-item` 来完成数据的检验。下面是一个完整的例子。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const dynamicInputRule = {
  trigger: 'input',
  validator(rule: unknown, value: string) {
    if (value.length >= 5)
      return new Error('最多输入四个字符')
    return true
  }
}

const model = ref({
  dynamicInputValue: [{ value: '', name: '' }]
})

function onCreate() {
  return {
    name: '',
    value: ''
  }
}
</script>

<template>
  <n-form :model="model">
    <n-dynamic-input
      v-model:value="model.dynamicInputValue"
      item-style="margin-bottom: 0;"
      :on-create="onCreate"
      #="{ index }"
    >
      <div style="display: flex">
        <!--
          通常，path 的变化会导致 form-item 验证内容或规则的改变，所以 naive-ui 会清理掉
          表项已有的验证信息。但是这个例子是个特殊情况，我们明确的知道，path 的改变不会导致
          form-item 验证内容和规则的变化，所以就 ignore-path-change
        -->
        <n-form-item
          ignore-path-change
          :show-label="false"
          :path="`dynamicInputValue[${index}].name`"
          :rule="dynamicInputRule"
        >
          <n-input
            v-model:value="model.dynamicInputValue[index].name"
            placeholder="Name"
            @keydown.enter.prevent
          />
          <!--
            由于在 input 元素里按回车会导致 form 里面的 button 被点击，所以阻止了默认行为
          -->
        </n-form-item>
        <div style="height: 34px; line-height: 34px; margin: 0 8px">
          =
        </div>
        <n-form-item
          ignore-path-change
          :show-label="false"
          :path="`dynamicInputValue[${index}].value`"
          :rule="dynamicInputRule"
        >
          <n-input
            v-model:value="model.dynamicInputValue[index].value"
            placeholder="Value"
            @keydown.enter.prevent
          />
        </n-form-item>
      </div>
    </n-dynamic-input>
  </n-form>
  <pre>{{ JSON.stringify(model.dynamicInputValue, null, 2) }}</pre>
</template>
```

## 显示排序按钮

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(['', '', ''])
</script>

<template>
  <n-dynamic-input
    v-model:value="value"
    show-sort-button
    placeholder="请输入"
  />
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>
```

## 自定义操作

```vue
<script lang="ts" setup>
import {
  BagAddOutline as AddIcon,
  ChevronDownCircleOutline as DownIcon,
  BagRemoveOutline as RemoveIcon,
  ChevronUpCircleOutline as UpIcon
} from '@vicons/ionicons5'
import { ref } from 'vue'

const value = ref(['Vue', 'Vue3', 'React'])
</script>

<template>
  <n-dynamic-input
    v-model:value="value"
    placeholder="让知识来的更猛烈些"
    :min="3"
    :max="6"
  >
    <template #action="{ index, create, remove, move }">
      <n-space style="margin-left: 20px">
        <n-button @click="() => create(index)">
          <n-icon>
            <AddIcon />
          </n-icon>
        </n-button>
        <n-button disabled @click="() => remove(index)">
          <n-icon>
            <RemoveIcon />
          </n-icon>
        </n-button>
        <n-button @click="() => move('up', index)">
          <n-icon>
            <UpIcon />
          </n-icon>
        </n-button>
        <n-button @click="() => move('down', index)">
          <n-icon>
            <DownIcon />
          </n-icon>
        </n-button>
      </n-space>
    </template>
  </n-dynamic-input>
  <pre>{{ JSON.stringify(value, null, 2) }}</pre>
</template>
```

