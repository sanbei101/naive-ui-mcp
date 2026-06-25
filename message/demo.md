# 信息 Message - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info('I don\'t know why nobody told you how to unfold your love', {
    keepAliveOnHover: true
  })
}

function error() {
  message.error('Once upon a time you dressed so fine')
}

function warning() {
  message.warning('How many roads must a man walk down')
}

function success() {
  message.success('\'Cause you walked hand in hand With another man in my place')
}

function loading() {
  message.loading(
    'If I were you, I will realize that I love you more than any other guy'
  )
}
</script>

<template>
  <n-space>
    <n-button @click="info">
      信息（Hover不消失）
    </n-button>
    <n-button @click="error">
      错误
    </n-button>
    <n-button @click="warning">
      警告
    </n-button>
    <n-button @click="success">
      成功
    </n-button>
    <n-button @click="loading">
      加载中
    </n-button>
  </n-space>
</template>
```

## 图标

```vue
<script lang="ts" setup>
import { MdHourglass } from '@vicons/ionicons4'
import { NIcon, useMessage } from 'naive-ui'
import { h } from 'vue'

const message = useMessage()

function createMessage() {
  message.warning('I never needed anybody\'s help in any way', {
    icon: () => h(NIcon, null, { default: () => h(MdHourglass) })
  })
}
</script>

<template>
  <n-button @click="createMessage">
    沙漏图标
  </n-button>
</template>
```

## 时间

设定 Message 的持续时间。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function createMessage() {
  message.info('I don\'t know why nobody told you how to unfold your love', {
    duration: 5000
  })
}
</script>

<template>
  <n-button @click="createMessage">
    持续 5 秒
  </n-button>
</template>
```

## 可关闭

设定 `closable` 使 Message 可以通过点击关闭。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function createMessage() {
  message.info('I don\'t know why nobody told you how to unfold your love', {
    closable: true,
    duration: 5000
  })
}
</script>

<template>
  <n-button @click="createMessage">
    打开信息
  </n-button>
</template>
```

## 修改创建的信息

```vue
<script lang="ts" setup>
import type { MessageReactive, MessageType } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const types: MessageType[] = ['success', 'info', 'warning', 'error', 'loading']
const countRef = ref(0)
let typeIndex = 0
let msgReactive: MessageReactive | null = null

function plus() {
  if (msgReactive) {
    countRef.value++
    msgReactive.content = `${countRef.value}`
  }
}

function changeType() {
  if (msgReactive) {
    typeIndex = (typeIndex + 1) % types.length
    msgReactive.type = types[typeIndex]
  }
}

function createMessage() {
  msgReactive = message.create(`${countRef.value}`, {
    type: types[typeIndex],
    duration: 10000
  })
}
</script>

<template>
  <n-space>
    <n-button @click="createMessage">
      先开个信息
    </n-button>
    <n-button @click="changeType">
      改变类型
    </n-button>
    <n-button @click="plus">
      加一
    </n-button>
  </n-space>
</template>
```

## 手动关闭

```vue
<script lang="ts" setup>
import type { MessageReactive } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { onBeforeUnmount } from 'vue'

const message = useMessage()
let messageReactive: MessageReactive | null = null

function removeMessage() {
  if (messageReactive) {
    messageReactive.destroy()
    messageReactive = null
  }
}

onBeforeUnmount(removeMessage)

function createMessage() {
  if (!messageReactive) {
    messageReactive = message.info('3 * 3 * 4 * 4 * ?', {
      duration: 0
    })
  }
}
</script>

<template>
  <n-space>
    <n-button @click="createMessage">
      打开
    </n-button>
    <n-button @click="removeMessage">
      关闭
    </n-button>
  </n-space>
</template>
```

## 关于主题的注意事项

如果你不明确指明主题，被创建信息的主题会与对应 `n-message-provider` 的主题一致。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info('I don\'t know why nobody told you how to unfold your love', {
    duration: 5000
  })
}
</script>

<template>
  <n-button @click="info">
    你可以在 Message 还在的时候切换主题
  </n-button>
</template>
```

## 多行

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function info() {
  message.info(
    'I don\'t know why nobody told you how to unfold your love. Once upon a time you dressed so fine. How many roads must a man walk down. \'Cause you walked hand in hand With another man in my place. If I were you, I will realize that I love you more than any other guy.'
  )
}
</script>

<template>
  <n-button @click="info">
    多行
  </n-button>
</template>
```

## 位置

```vue
<script lang="ts" setup>
import type { MessageProviderProps } from 'naive-ui'
import type { VNode } from 'vue'
import { NButton, useMessage } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'

interface Item {
  placement: MessageProviderProps['placement']
  text: string
}

const Buttons = defineComponent({
  emits: ['changePlacement'],
  setup() {
    const message = useMessage()
    const placementArray: Item[] = [
      { placement: 'top', text: '顶部' },
      { placement: 'bottom', text: '底部' },
      { placement: 'top-left', text: '左上' },
      { placement: 'top-right', text: '右上' },
      { placement: 'bottom-left', text: '左下' },
      { placement: 'bottom-right', text: '右下' }
    ]
    return {
      message,
      placementArray
    }
  },
  render(): VNode[] {
    const { message, placementArray, $emit } = this
    return placementArray.map((item: Item) =>
      h(
        NButton,
        {
          onClick: () => {
            $emit('changePlacement', item.placement)
            message.info('How many roads must a man walk down')
          },
          style: {
            marginRight: '10px'
          }
        },
        { default: () => item.text }
      )
    )
  }
})

const placementRef = ref<MessageProviderProps['placement']>('top')

function changePlacement(val: MessageProviderProps['placement']) {
  placementRef.value = val
}

const placement = placementRef
</script>

<template>
  <n-message-provider :placement="placement">
    <Buttons @change-placement="changePlacement" />
  </n-message-provider>
</template>
```

## 自定义信息渲染

有些人表示特别想用 Alert 来当成 Message，当然换个别的也行。

```vue
<script lang="ts" setup>
import type { MessageRenderMessage } from 'naive-ui'
import { NAlert, useMessage } from 'naive-ui'
import { h } from 'vue'

const renderMessage: MessageRenderMessage = (props) => {
  const { type } = props
  return h(
    NAlert,
    {
      closable: props.closable,
      onClose: props.onClose,
      type: type === 'loading' ? 'default' : type,
      title: '你看你手上拿的是什么啊',
      style: {
        boxShadow: 'var(--n-box-shadow)',
        maxWidth: 'calc(100vw - 32px)',
        width: '480px'
      }
    },
    {
      default: () => props.content
    }
  )
}

const { error } = useMessage()

function handleClick() {
  error('那东西我们早就不屑啦，哈哈哈', {
    render: renderMessage,
    closable: true
  })
}
</script>

<template>
  <n-button @click="handleClick">
    No Party For Cao Dong
  </n-button>
</template>
```

## 无图标

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function createMessage() {
  message.warning('I never needed anybody\'s help in any way', {
    showIcon: false
  })
}
</script>

<template>
  <n-button @click="createMessage">
    无图标
  </n-button>
</template>
```

