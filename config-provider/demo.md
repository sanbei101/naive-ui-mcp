# 全局化配置 Config Provider - 演示示例

## 主题

设置 `n-config-provider` 内部组件的主题。

```vue
<script lang="ts" setup>
import type { GlobalTheme } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)
</script>

<template>
  <n-config-provider :theme="theme">
    <n-card>
      <n-space>
        <n-button @click="theme = darkTheme">
          深色
        </n-button>
        <n-button @click="theme = null">
          浅色
        </n-button>
      </n-space>
    </n-card>
  </n-config-provider>
</template>
```

## 命名空间（挂载内容的类名）

组件的一部分是挂载在 `document.body` 上的。如需给这些可卸载的元素添加 class，使用 `n-config-provider` 的 `namespace` 属性。打开开发者工具可以看到被卸载的 DOM。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const ns = ref('custom-app-namespace1')
const isActive = ref(false)
</script>

<template>
  <n-config-provider :namespace="ns">
    <n-tooltip placement="bottom" trigger="click">
      <template #trigger>
        <n-button @click="isActive = true">
          激活含卸载内容的组件
        </n-button>
      </template>
      <span>卸载内容</span>
    </n-tooltip>
  </n-config-provider>
</template>
```

## 继承主题

如果不设置 `n-config-provider` 的主题，则 `n-config-provider` 主题默认继承外面的主题。

```vue
<template>
  <n-config-provider>
    <n-tag>噢</n-tag>
  </n-config-provider>
</template>
```

## 使用操作系统主题

Naive UI 提供 `useOsTheme` 来获取当前操作系统的主题。

```vue
<script lang="ts" setup>
import { darkTheme, useOsTheme } from 'naive-ui'
import { computed } from 'vue'

const osTheme = useOsTheme()
const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme">
    <n-card> 当前操作系统的主题是 {{ osTheme }}。 </n-card>
  </n-config-provider>
</template>
```

## 国际化

```vue
<script lang="ts" setup>
import type { NDateLocale, NLocale } from 'naive-ui'
import { dateZhCN, zhCN } from 'naive-ui'
import { ref } from 'vue'

const locale = ref<NLocale | null>(null)
const dateLocale = ref<NDateLocale | null>(null)
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button
        @click="
          () => {
            locale = null
            dateLocale = null
          }
        "
      >
        英文
      </n-button>
      <n-button
        @click="
          () => {
            locale = zhCN
            dateLocale = dateZhCN
          }
        "
      >
        中文
      </n-button>
    </n-space>
    <n-config-provider :locale="locale" :date-locale="dateLocale">
      <n-date-picker />
    </n-config-provider>
  </n-space>
</template>
```

## 不需要包裹 DOM

如果不需要包裹 DOM，设置 `abstract`。

```vue
<template>
  <n-config-provider abstract>
    <n-card>
      <n-tag>无包裹 DOM</n-tag>
    </n-card>
  </n-config-provider>
</template>
```

## 禁用 inline 主题

naive-ui 默认情况下使用 inline style 作为主题变量的载体，因此每个组件上都会挂载许多 inline CSS。如果你需要 SSR，或者想让开发者工具看起来更干净，可以打开 `inline-theme-disabled` 属性。

注意，如果你需要频繁的改动 `theme-overrides`，不建议使用这个属性，这样会生成大量无用的 style 标签。

这个属性不是响应式的。

```vue
<template>
  <n-config-provider inline-theme-disabled>
    <n-button>不再有 inline CSS 变量的按钮</n-button>
  </n-config-provider>
</template>
```

## 组件尺寸

通过 `component-options` 按组件配置尺寸。

```vue
<script setup lang="ts">
import { computed, ref } from 'vue'

type ComponentSize = 'small' | 'medium' | 'large'

const size = ref<ComponentSize>('small')

function handleBtnClick(_size: ComponentSize): void {
  size.value = _size
}

const componentOptions = computed(() => ({
  Button: { size: size.value },
  Card: { size: size.value },
  Pagination: { size: size.value },
  Tag: { size: size.value }
}))
</script>

<template>
  <n-button-group>
    <n-button @click="handleBtnClick('small')">
      小一点儿
    </n-button>
    <n-button @click="handleBtnClick('medium')">
      中规中矩
    </n-button>
    <n-button @click="handleBtnClick('large')">
      大一点儿
    </n-button>
  </n-button-group>
  <n-divider />
  <n-config-provider :component-options="componentOptions">
    <n-space vertical>
      <n-button>按钮</n-button>
      <n-tag closable>
        标签
      </n-tag>
      <n-card title="卡片">
        卡片内容
      </n-card>
      <n-pagination :page-count="20" />
    </n-space>
  </n-config-provider>
</template>
```

