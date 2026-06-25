# 菜单 Menu - 演示示例

## 水平菜单

一个水平菜单，可以自动折叠。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
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

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
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
    icon: renderIcon(BookIcon),
    disabled: true
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

const activeKey = ref<string | null>(null)
</script>

<template>
  <n-split :default-size="0.8">
    <template #1>
      <n-menu
        v-model:value="activeKey"
        mode="horizontal"
        :options="menuOptions"
        responsive
      />
    </template>
  </n-split>
</template>
```

## 选中 & 路由

你通常可以在这个地方配合 vue-router 完成路由。当然，你也可以通过将 `label` 渲染为 `<router-link />` 或 `<a />` 来改变路由。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  HomeOutline as HomeIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
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
    icon: renderIcon(BookIcon),
    disabled: true
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

const message = useMessage()

function handleUpdateValue(key: string, item: MenuOption) {
  message.info(`[onUpdate:value]: ${JSON.stringify(key)}`)
  message.info(`[onUpdate:value]: ${JSON.stringify(item)}`)
}
</script>

<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>
```

## 批量处理菜单渲染

使用 `render-label`、`render-icon`、`expand-icon` 可以批量控制菜单的选项渲染。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h, ref } from 'vue'

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F/3199'
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
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
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator'
          },
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            href: 'https://baike.baidu.com/item/%E5%A8%81%E5%A3%AB%E5%BF%8C%E9%85%92/2959816?fromtitle=%E5%A8%81%E5%A3%AB%E5%BF%8C&fromid=573&fr=aladdin'
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

const collapsed = ref(true)

function renderMenuLabel(option: MenuOption) {
  if ('href' in option) {
    return h(
      'a',
      { href: option.href, target: '_blank' },
      option.label as string
    )
  }
  return option.label as string
}

function renderMenuIcon(option: MenuOption) {
  // 渲染图标占位符以保持缩进
  if (option.key === 'sheep-man')
    return true
  // 返回 falsy 值，不再渲染图标及占位符
  if (option.key === 'food')
    return null
  return h(NIcon, null, { default: () => h(BookmarkOutline) })
}

function expandIcon() {
  return h(NIcon, null, { default: () => h(CaretDownOutline) })
}
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
        />
      </n-layout-sider>
      <n-layout>
        <span>内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>
```

## 展开子菜单

如果你不设定 `default-expanded-keys`，菜单会默认展开选中项的全部父级。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
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
    icon: renderIcon(BookIcon),
    disabled: true
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

const message = useMessage()
const defaultExpandedKeys = ['dance-dance-dance', 'food']

function handleUpdateExpandedKeys(keys: string[]) {
  message.info(`[onUpdate:expandedKeys]: ${JSON.stringify(keys)}`)
}
</script>

<template>
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    @update:expanded-keys="handleUpdateExpandedKeys"
  />
</template>
```

## 缩进

你可以设定菜单的 `indent` & `root-indent`。`root-indent` 只决定第一层项目的缩进。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
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

const menuOptions: MenuOption[] = [
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
    icon: renderIcon(BookIcon),
    disabled: true
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

const activeKey = ref<string | null>(null)
</script>

<template>
  <n-menu
    v-model:value="activeKey"
    :root-indent="36"
    :indent="12"
    :options="menuOptions"
  />
</template>
```

## 压缩菜单

可以让垂直菜单随着边栏压缩。使用 `collapsed` 属性控制菜单状态。必需设定 `collapsed-width` 来确保菜单正常显示。除此之外还有一些其他和压缩有关的属性：`icon-size`、`collapsed-icon-size`。详细信息参考页面底下的 API 文档。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
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

const menuOptions: MenuOption[] = [
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

const activeKey = ref<string | null>(null)
const collapsed = ref(true)
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="collapsed" />
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <span>内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>
```

## 反转

通过 `inverted` 来增加对比，一般和 `n-layout` 配合使用。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
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

const menuOptions: MenuOption[] = [
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
    <n-space> <n-switch v-model:value="inverted" />inverted</n-space>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :inverted="inverted"
      >
        <n-menu
          :inverted="inverted"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <span>内容</span>
      </n-layout>
    </n-layout>
  </n-space>
</template>
```

## 菜单内容很长

将 `label` 设为渲染函数，结合 `n-ellipsis`。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { NEllipsis } from 'naive-ui'
import { h } from 'vue'

const options: MenuOption[] = [
  {
    label: () =>
      h(NEllipsis, null, { default: () => '电灯熄灭 物换星移 泥牛入海' }),
    key: '1'
  },
  {
    label: () =>
      h(NEllipsis, null, { default: () => '黑暗好像 一颗巨石 按在胸口' }),
    key: '2'
  }
]
</script>

<template>
  <n-menu :options="options" style="width: 180px" default-value="1" />
</template>
```

## 手风琴

像一个手风琴。使用 `accordion` 属性对一级菜单使用该模式。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  BagOutline as BagOutlineIcon,
  FishOutline as FishIcon,
  PawOutline as PawIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy'
          }
        ]
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion'
          }
        ]
      }
    ]
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals'
      }
    ]
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not'
      }
    ]
  }
]

const defaultExpandedKeys = ['fish', 'braise']
</script>

<template>
  <n-menu
    :options="menuOptions"
    :default-expanded-keys="defaultExpandedKeys"
    accordion
  />
</template>
```

## 使用 vue-router

你可以在这个地方配合 vue-router 完成路由。通过将 `label` 渲染为 `<router-link />` 来改变路由。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import type { Component } from 'vue'
import {
  LogOutOutline as HomeIcon,
  LaptopOutline as WorkIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'
import { RouterLink } from 'vue-router'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '回家' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/zh-CN/os-theme/components/code'
          }
        },
        { default: () => '上班' }
      ),
    key: 'go-to-work',
    icon: renderIcon(WorkIcon)
  }
]
</script>

<template>
  <n-menu :options="menuOptions" />
</template>
```

## 自定义字段

后端会传来各种各样的数据，你可以自定义 `key`、`label` 和 `children` 的字段。

```vue
<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
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

const menuOptions: MenuOption[] = [
  {
    whateverLabel: '且听风吟',
    whateverKey: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    whateverLabel: '1973年的弹珠玩具',
    whateverKey: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    whateverChildren: [
      {
        whateverLabel: '鼠',
        whateverKey: 'rat'
      }
    ]
  },
  {
    whateverLabel: '寻羊冒险记',
    whateverKey: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    whateverLabel: '舞，舞，舞',
    whateverKey: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    whateverChildren: [
      {
        type: 'group',
        whateverLabel: '人物',
        whateverKey: 'people',
        whateverChildren: [
          {
            whateverLabel: '叙事者',
            whateverKey: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            whateverLabel: '羊男',
            whateverKey: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        whateverLabel: '饮品',
        whateverKey: 'beverage',
        icon: renderIcon(WineIcon),
        whateverChildren: [
          {
            whateverLabel: '威士忌',
            whateverKey: 'whisky'
          }
        ]
      },
      {
        whateverLabel: '食物',
        whateverKey: 'food',
        whateverChildren: [
          {
            whateverLabel: '三明治',
            whateverKey: 'sandwich'
          }
        ]
      },
      {
        whateverLabel: '过去增多，未来减少',
        whateverKey: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(true)
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        key-field="whateverKey"
        label-field="whateverLabel"
        children-field="whateverChildren"
      />
    </n-layout-sider>
    <n-layout />
  </n-layout>
</template>
```

## 展开选中的值

在某些场景下，菜单的值是由外部传入的，组件很难理解用户展开的意图。你可以使用 `showOption` 的方法来让选中的值展开。

```vue
<script lang="ts" setup>
import type { MenuInst } from 'naive-ui'
import { ref } from 'vue'

const accordionRef = ref(false)
const selectedKeyRef = ref('难吃')
const menuInstRef = ref<MenuInst | null>(null)

function selectAndExpand(key: string) {
  selectedKeyRef.value = key
  menuInstRef.value?.showOption(key)
}

const accordion = accordionRef
const selectedKey = selectedKeyRef
const options = [
  {
    label: '学五',
    key: '学五',
    children: [
      {
        label: '难吃',
        key: '难吃'
      }
    ]
  },
  {
    label: '学一',
    key: '学一',
    children: [
      {
        label: '也难吃',
        key: '也难吃'
      }
    ]
  },
  {
    label: '燕南',
    key: '燕南',
    children: [
      {
        label: '依然难吃',
        key: '依然难吃'
      }
    ]
  }
]
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="accordion">
      <template #checked>
        手风琴
      </template>
      <template #unchecked>
        普通
      </template>
    </n-switch>
    <n-button @click="selectAndExpand('难吃')">
      选中第一项
    </n-button>
    <n-button @click="selectAndExpand('也难吃')">
      选中第二项
    </n-button>
    <n-button @click="selectAndExpand('依然难吃')">
      选中第三项
    </n-button>
    <n-menu
      ref="menuInstRef"
      v-model:value="selectedKey"
      :options="options"
      :accordion="accordion"
    />
  </n-space>
</template>
```

## 控制选项的显示隐藏

在某种情况下，不同的角色会看到不同的菜单，你可以使用 `show` 属性来隐藏菜单。

```vue
<script lang="ts" setup>
import type { Component } from 'vue'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { computed, h, ref } from 'vue'

const accordion = ref(false)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const options = computed(() => [
  {
    label: '提升效率的法宝',
    icon: renderIcon(PersonIcon),
    key: '1',
    children: [
      {
        label: '如何提高产出',
        key: '2'
      }
    ]
  },
  {
    label: '摸鱼宝典',
    key: '3',
    icon: renderIcon(BookIcon),
    show: !accordion.value,
    children: [
      {
        label: '你摸鱼',
        key: '4'
      },
      {
        label: '我摸鱼',
        key: '5'
      },
      {
        label: '老板宝马变青桔',
        key: '6'
      }
    ]
  }
])
</script>

<template>
  <n-space vertical>
    <n-switch v-model:value="accordion">
      <template #checked>
        老板
      </template>
      <template #unchecked>
        打工人
      </template>
    </n-switch>
    <n-menu :options="options" />
  </n-space>
</template>
```

