# 下拉菜单 Dropdown - 演示示例

## 基础用法

下拉菜单的基础用法。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>
```

## 图标

```vue
<script lang="ts" setup>
import type { Component } from 'vue'
import {
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  PersonCircleOutline as UserIcon
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon(EditIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(LogoutIcon)
  }
]
</script>

<template>
  <n-dropdown :options="options">
    <n-button>用户资料</n-button>
  </n-dropdown>
</template>
```

## 触发

下拉菜单不同的触发方式。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const showDropdown = ref(false)

const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}

function handleClick() {
  showDropdown.value = !showDropdown.value
}
</script>

<template>
  <n-space>
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <n-button>悬浮！</n-button>
    </n-dropdown>
    <n-dropdown trigger="click" :options="options" @select="handleSelect">
      <n-button>点击！</n-button>
    </n-dropdown>
    <n-dropdown :show="showDropdown" :options="options" @select="handleSelect">
      <n-button @click="handleClick">
        噢！我要自己手动！
      </n-button>
    </n-dropdown>
  </n-space>
</template>
```

## 多级

下拉菜单可以是多级的。

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'

const options = [
  {
    label: '杰·盖茨比',
    key: 'jay gatsby'
  },
  {
    label: '黛西·布坎南',
    icon() {
      return h(NIcon, null, {
        default: () => h(CashIcon)
      })
    },
    key: 'daisy buchanan'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '尼克·卡拉威',
    key: 'nick carraway'
  },
  {
    label: '其他',
    key: 'others1',
    children: [
      {
        label: '乔丹·贝克',
        key: 'jordan baker'
      },
      {
        label: '汤姆·布坎南',
        key: 'tom buchanan'
      },
      {
        label: '其他',
        key: 'others2',
        disabled: true,
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

const message = useMessage()
function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    :options="options"
    placement="bottom-start"
    trigger="click"
    @select="handleSelect"
  >
    <n-button>人物和食物</n-button>
  </n-dropdown>
</template>
```

## 显示箭头

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    trigger="click"
    :options="options"
    :show-arrow="true"
    @select="handleSelect"
  >
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>
```

## 弹出位置

使用不同的弹出位置。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands'
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis bahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    trigger="hover"
    placement="bottom-start"
    :options="options"
    @select="handleSelect"
  >
    <n-button> 找个地方休息 </n-button>
  </n-dropdown>
</template>
```

## 尺寸

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const options = [
  {
    label: '杰·盖茨比',
    key: 'jay gatsby'
  },
  {
    label: '黛西·布坎南',
    key: 'daisy buchanan'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '尼克·卡拉威',
    key: 'nick carraway'
  },
  {
    label: '其他',
    key: 'others1',
    children: [
      {
        label: '乔丹·贝克',
        key: 'jordan baker'
      },
      {
        label: '汤姆·布坎南',
        key: 'tom buchanan'
      },
      {
        label: '其他',
        key: 'others2',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

const message = useMessage()
function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-space>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="small"
      :options="options"
      @select="handleSelect"
    >
      <n-button>小号</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="medium"
      :options="options"
      @select="handleSelect"
    >
      <n-button>中号</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="large"
      :options="options"
      @select="handleSelect"
    >
      <n-button>大号</n-button>
    </n-dropdown>
    <n-dropdown
      placement="bottom-start"
      trigger="click"
      size="huge"
      :options="options"
      @select="handleSelect"
    >
      <n-button>巨大号</n-button>
    </n-dropdown>
  </n-space>
</template>
```

## 批量渲染

注意：`render-label` 会对 group 类型的标签生效，可通过 `option.type` 进行设置。

```vue
<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { h } from 'vue'

const options = [
  {
    type: 'group',
    label: '主角和吃的',
    key: 'main',
    children: [
      {
        label: '杰·盖茨比',
        key: 'jay gatsby'
      },
      {
        label: '黛西·布坎南',
        key: 'daisy buchanan'
      },
      {
        label: '尼克·卡拉威',
        key: 'nick carraway'
      },
      {
        label: '吃的',
        key: 'food',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

function renderDropdownLabel(option: DropdownOption) {
  if (option.type === 'group') {
    return option.label as VNodeChild
  }
  return h(
    'a',
    {
      href: '',
      target: '_blank'
    },
    {
      default: () => option.label as VNodeChild
    }
  )
}

function renderDropdownIcon() {
  return h(NIcon, null, {
    default: () => h(CashIcon)
  })
}
</script>

<template>
  <n-dropdown
    :options="options"
    placement="bottom-start"
    trigger="click"
    :render-label="renderDropdownLabel"
    :render-icon="renderDropdownIcon"
  >
    <n-button>我是批量渲染</n-button>
  </n-dropdown>
</template>
```

## 手动定位

注意：手动定位时，`trigger` 属性必须为 `'manual'`。此外，你需要监听 `update:show` 回调来更新 `show` 值，以确保 `Esc` 键等快捷操作能正常关闭菜单。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { nextTick, ref } from 'vue'

const options = [
  {
    label: '杰·盖茨比',
    key: 'jay gatsby'
  },
  {
    label: '黛西·布坎南',
    key: 'daisy buchanan'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '尼克·卡拉威',
    key: 'nick carraway'
  },
  {
    label: '其他',
    key: 'others1',
    children: [
      {
        label: '乔丹·贝克',
        key: 'jordan baker'
      },
      {
        label: '汤姆·布坎南',
        key: 'tom buchanan'
      },
      {
        label: '其他',
        key: 'others2',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

const message = useMessage()

const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)

function handleSelect(key: string | number) {
  showDropdown.value = false
  message.info(String(key))
}

function handleContextMenu(e: MouseEvent) {
  e.preventDefault()
  showDropdown.value = false
  nextTick().then(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}

function onClickoutside() {
  message.info('clickoutside')
  showDropdown.value = false
}

function handleUpdateShow(show: boolean) {
  showDropdown.value = show
}
</script>

<template>
  <div
    style="width: 200px; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
    @contextmenu="handleContextMenu"
  >
    右击
  </div>
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :options="options"
    :show="showDropdown"
    :on-clickoutside="onClickoutside"
    @update:show="handleUpdateShow"
    @select="handleSelect"
  />
</template>
```

## 纯渲染的内容

你可以单纯的只是想渲染一些内容，和选项数据无关。此时你可以加入 `type='render'` 的选项。

```vue
<script lang="ts" setup>
import { NAvatar, NText, useMessage } from 'naive-ui'
import { h } from 'vue'

function renderCustomHeader() {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => '打工仔' })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}

const message = useMessage()
const options = [
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader
  },
  {
    key: 'header-divider',
    type: 'divider'
  },
  {
    label: '处理群消息 342 条',
    key: 'stmt1'
  },
  {
    label: '被 @ 58 次',
    key: 'stmt2'
  },
  {
    label: '加入群 17 个',
    key: 'stmt3'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>2021年 第36周</n-button>
  </n-dropdown>
</template>
```

## 自定义选项属性

爱绑啥绑啥。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()
const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    props: {
      onClick: () => {
        message.success('Good!')
      }
    }
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london',
    children: [
      {
        label: '鸡肉',
        key: 'chicken',
        disabled: true,
        props: {
          onClick: () => {
            message.info('Okay')
          }
        }
      },
      {
        label: '牛肉',
        key: 'beef'
      }
    ]
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau',
    props: {
      onMousedown: () => {
        message.warning('Key down')
      }
    }
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>
```

## 为选项增加 Tooltip

你可以通过 `render-option` 为选项增添 Tooltip。

```vue
<script lang="ts" setup>
import type { DropdownGroupOption, DropdownOption } from 'naive-ui'
import type { VNode } from 'vue'
import { NTooltip, useMessage } from 'naive-ui'
import { h } from 'vue'

const message = useMessage()

function renderOption({
  node,
  option
}: {
  node: VNode
  option: DropdownOption | DropdownGroupOption
}) {
  return h(
    NTooltip,
    { keepAliveOnHover: false, style: { width: 'max-content' } },
    {
      trigger: () => [node],
      default: () => option.key
    }
  )
}

const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: 'brown\'s hotel, london'
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

function handleSelect(key: string | number) {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    :render-option="renderOption"
    @select="handleSelect"
  >
    <n-button>找个地方休息</n-button>
  </n-dropdown>
</template>
```

