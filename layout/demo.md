# 布局 Layout - 演示示例

## 基础用法

我希望这个 demo 就能满足你的需求，这样你的时间还能干点别的。

```vue
<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          海淀桥
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
      </n-layout>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
          平山道
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
```

## 关于设定 Padding

naive-ui 不推荐直接在 `n-layout-sider` 和 `n-layout` 上设定 padding。因为他们存在嵌套的 DOM 结构，你可以使用 `content-style` 来设定可滚动内容的样式。

```vue
<template>
  <n-space vertical size="large">
    <n-layout has-sider style="height: 240px">
      <n-layout-sider style="padding: 24px">
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
        <n-h2>... 不推荐</n-h2>
      </n-layout-sider>
    </n-layout>
    <n-layout has-sider style="height: 240px">
      <n-layout-sider content-style="padding: 24px;">
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
        <n-h2>推荐</n-h2>
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>

<style>
.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}
</style>
```

## 嵌入效果

有的时候你希望背景色暗一点，来突出上面显示的内容（尤其是卡片）。

```vue
<template>
  <n-layout embedded content-style="padding: 24px;">
    <n-card>
      只要是 看到天边云一朵<br>
      逐天拢有好心情
    </n-card>
  </n-layout>
</template>
```

## 使用边框

sider、footer、header 可以设定 `bordered`。

```vue
<template>
  <n-layout has-sider>
    <n-layout-sider bordered content-style="padding: 24px;">
      海淀桥
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered>
        颐和园路
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-footer bordered>
        成府路
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style>
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
```

## 绝对定位模式

所有布局组件可以使用绝对定位。如果你期望内容在固定的区域内滚动，可以使用 `absolute` 模式。

```vue
<template>
  <div style="height: 360px; position: relative">
    <n-layout position="absolute">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        颐和园路
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider bordered content-style="padding: 24px;">
          海淀桥
        </n-layout-sider>
        <n-layout content-style="padding: 24px;">
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
        </n-layout>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        style="height: 64px; padding: 24px"
      >
        城府路
      </n-layout-footer>
    </n-layout>
  </div>
</template>
```

## 使用内置滚动条

有时原生滚动条与 naive-ui 的样式不协调。可以（在 `n-layout-sider`、`n-layout` 或 `n-layout-content`）使用 naive-ui 内置的滚动条。

```vue
<template>
  <n-layout style="height: 360px">
    <n-layout-header style="height: 64px; padding: 24px" bordered>
      颐和园路
    </n-layout-header>
    <n-layout position="absolute" style="top: 64px; bottom: 64px" has-sider>
      <n-layout-sider
        content-style="padding: 24px;"
        :native-scrollbar="false"
        bordered
      >
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout content-style="padding: 24px;" :native-scrollbar="false">
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
        <n-h2>平山道</n-h2>
      </n-layout>
    </n-layout>
    <n-layout-footer
      position="absolute"
      style="height: 64px; padding: 24px"
      bordered
    >
      城府路
    </n-layout-footer>
  </n-layout>
</template>
```

## 折叠侧边栏

使用 `collapsed-width` 和 `width` 设置侧边栏的宽度。

```vue
<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <p>海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</p>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
  </n-space>
</template>
```

## 折叠侧边栏的位置

有时候你可能想将折叠侧边栏放在右侧。

```vue
<script lang="ts" setup>
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical size="large">
    <n-layout has-sider sider-placement="right">
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        :native-scrollbar="true"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <p>海淀桥 海淀桥 海淀桥 海淀桥 海淀桥</p>
      </n-layout-sider>
    </n-layout>
    <n-layout has-sider sider-placement="right">
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        :native-scrollbar="false"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
    </n-layout>
    <n-layout has-sider sider-placement="right">
      <n-layout style="max-height: 320px" />
      <n-layout-sider
        bordered
        show-trigger
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :native-scrollbar="false"
        style="max-height: 320px"
      >
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>
```

## 反转

使用 `inverted` 增加对比度，可以使用在 header、footer 和 sider 上，可以和 menu 搭配使用。

```vue
<script lang="ts" setup>
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h, ref } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const inverted = ref(false)
</script>

<template>
  <n-space vertical>
    <n-space> <n-switch v-model:value="inverted" /> inverted </n-space>
    <n-layout>
      <n-layout-header :inverted="inverted" bordered>
        Header Header Header
        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
          :inverted="inverted"
          style="max-height: 320px"
        >
          <n-menu
            :inverted="inverted"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout style="max-height: 320px" />
      </n-layout>
      <n-layout-footer :inverted="inverted" bordered>
        Footer Footer Footer
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>
```

## 隐藏侧边栏内容

有时候收起边栏后，你不想看到里面有什么，你可以设定 `show-collapsed-content` 为 `false`。

```vue
<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        :show-collapsed-content="false"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        海淀桥 海淀桥 海淀桥 海淀桥 海淀桥
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <n-h2>海淀桥</n-h2>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        平山道
      </n-layout-content>
    </n-layout>
  </n-space>
</template>
```

## 滚动到

```vue
<script lang="ts" setup>
import type { LayoutInst, LayoutSiderInst } from 'naive-ui'
import { ref } from 'vue'

const siderRef = ref<LayoutSiderInst | null>(null)
const contentRef = ref<LayoutInst | null>(null)
</script>

<template>
  <n-space vertical size="large">
    <n-space>
      <n-button @click="siderRef?.scrollTo({ top: 120, behavior: 'smooth' })">
        边栏滚到 120px
      </n-button>
      <n-button @click="contentRef?.scrollTo({ top: 120, behavior: 'smooth' })">
        内容滚到 120px
      </n-button>
    </n-space>
    <n-layout style="height: 360px">
      <n-layout-header style="height: 64px; padding: 24px" bordered>
        颐和园路
      </n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
        <n-layout-sider ref="siderRef" bordered content-style="padding: 24px;">
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
          <n-h2>海淀桥</n-h2>
        </n-layout-sider>
        <n-layout-content
          ref="contentRef"
          content-style="padding: 24px;"
          :native-scrollbar="false"
        >
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
          <n-h2>平山道</n-h2>
        </n-layout-content>
      </n-layout>
      <n-layout-footer
        bordered
        position="absolute"
        style="height: 64px; padding: 24px"
      >
        成府路
      </n-layout-footer>
    </n-layout>
  </n-space>
</template>
```

