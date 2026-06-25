# 提及 Mention - 演示示例

## 基本用法

如果 `label` 是回调函数，输入匹配则会根据 `value` 进行匹配

```vue
<script lang="ts" setup>
import type { MentionOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { TelescopeOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: (option: MentionOption): VNodeChild =>
      h('div', { style: 'display: flex; align-items: center;' }, [
        h(NIcon, {
          style: 'margin-right: 6px;',
          size: 18,
          component: TelescopeOutline
        }),
        option.value
      ]),
    value: '颐和园路5号'
  }
]
</script>

<template>
  <n-mention :options="options" default-value="@" />
</template>
```

## 文本区域

将 `type` 设为 `'textarea'`。

```vue
<script lang="ts" setup>
const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: '颐和园路5号',
    value: '颐和园路5号'
  }
]
</script>

<template>
  <n-mention type="textarea" :options="options" />
</template>
```

## 远程加载

异步加载选项。

```vue
<script lang="ts" setup>
import type { MentionOption } from 'naive-ui'
import { ref } from 'vue'

const options = ref<MentionOption[]>([])
const loading = ref(false)
let searchTimerId: number | null = null

function handleSearch(pattern: string, prefix: string) {
  if (searchTimerId !== null)
    clearTimeout(searchTimerId)
  console.log(pattern, prefix)
  loading.value = true
  searchTimerId = window.setTimeout(() => {
    options.value = [
      '它烫不了你的舌',
      '也烧不了你的口',
      '喝醉吧',
      '不要回头'
    ].map(v => ({
      label: pattern + v,
      value: pattern + v
    }))
    loading.value = false
  }, 1500)
}
</script>

<template>
  <n-mention
    :options="options"
    default-value="@"
    :loading="loading"
    @search="handleSearch"
  />
</template>
```

## 自动换行

```vue
<script lang="ts" setup>
const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: '颐和园路5号',
    value: '颐和园路5号'
  }
]
</script>

<template>
  <n-mention type="textarea" :options="options" autosize />
</template>
```

## 配合表单

```vue
<script lang="ts" setup>
import type { FormInst } from 'naive-ui'
import { ref } from 'vue'

const formInstRef = ref<FormInst | null>(null)
const formModel = ref({
  cool: '',
  veryCool: ''
})

const rules = {
  cool: {
    trigger: ['input', 'blur'],
    required: true,
    message: 'Cool is required'
  },
  veryCool: {
    trigger: ['input', 'blur'],
    validator() {
      if (!formModel.value.veryCool.includes('@07akioni')) {
        return new Error('07akioni should be very cool!')
      }
    }
  }
}

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  }
]

function handleButtonClick() {
  formInstRef.value?.validate()
}
</script>

<template>
  <n-space vertical>
    <n-form ref="formInstRef" :model="formModel" :rules="rules">
      <n-form-item label="Cool" path="cool">
        <n-mention v-model:value="formModel.cool" :options="options" />
      </n-form-item>
      <n-form-item label="Very Cool" path="veryCool">
        <n-mention
          v-model:value="formModel.veryCool"
          type="textarea"
          :options="options"
        />
      </n-form-item>
    </n-form>
    <n-button @click="handleButtonClick">
      Validate
    </n-button>
  </n-space>
</template>
```

## 控制菜单渲染

如果选项的 `label` 不是字符串，默认情况下会使用 `value` 进行匹配。

```vue
<script lang="ts" setup>
import type { MentionOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { NAvatar } from 'naive-ui'
import { h } from 'vue'

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: 'amadeus711',
    value: 'amadeus711'
  }
]

function renderLabel(option: MentionOption): VNodeChild {
  return h('div', { style: 'display: flex; align-items: center;' }, [
    h(NAvatar, {
      style: 'margin-right: 8px;',
      size: 24,
      round: true,
      src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
    }),
    option.value
  ])
}
</script>

<template>
  <n-mention :options="options" :render-label="renderLabel" />
</template>
```

## 自定义触发字符

使用 `prefix` 设定触发字符。

```vue
<script lang="ts" setup>
import type { MentionOption } from 'naive-ui'
import { ref } from 'vue'

const atOptions = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: '颐和园路5号',
    value: '颐和园路5号'
  }
]

const sharpOptions = [
  {
    label: '它烫不了你的舌',
    value: '它烫不了你的舌'
  },
  {
    label: '也烧不了你的口',
    value: '也烧不了你的口'
  },
  {
    label: '喝醉吧',
    value: '喝醉吧'
  },
  {
    label: '不要回头',
    value: '不要回头'
  }
]

const options = ref<MentionOption[]>([])

function handleSearch(_: string, prefix: string) {
  if (prefix === '@') {
    options.value = atOptions
  }
  else {
    options.value = sharpOptions
  }
}
</script>

<template>
  <n-mention :options="options" :prefix="['@', '#']" @search="handleSearch" />
</template>
```

## 手动 Focus & Blur

可能你想要手动 `focus` 和 `blur`。

```vue
<script lang="ts" setup>
import type { MentionInst, MentionOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { HomeOutline as HomeIcon } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h, ref } from 'vue'

const myMention = ref<MentionInst | null>(null)

function triggerBlur() {
  myMention.value?.blur()
}

function triggerFocus() {
  myMention.value?.focus()
  setTimeout(triggerBlur, 1000)
}

const options = [
  {
    label: '07akioni',
    value: '07akioni'
  },
  {
    label: 'star-kirby',
    value: 'star-kirby'
  },
  {
    label: '广东路',
    value: '广东路'
  },
  {
    label: (option: MentionOption): VNodeChild =>
      h('div', { style: 'display: flex; align-items: center;' }, [
        h(
          NIcon,
          { style: 'margin-right: 5px' },
          { default: () => h(HomeIcon) }
        ),
        option.value
      ]),
    value: '颐和园路5号'
  }
]
</script>

<template>
  <n-space>
    <n-mention ref="myMention" :options="options" default-value="@" />
    <n-button @click="triggerFocus">
      点击聚焦，一秒后失去焦点
    </n-button>
  </n-space>
</template>
```

## 验证状态

输入的验证状态可以脱离表单使用。

```vue
<template>
  <n-space vertical>
    <n-mention status="warning" placeholder="" />
    <n-mention status="error" placeholder="" />
  </n-space>
</template>
```

