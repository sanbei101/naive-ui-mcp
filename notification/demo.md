# 通知 Notification - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { NAvatar, NButton, useMessage, useNotification } from 'naive-ui'
import { h } from 'vue'

const message = useMessage()
const notification = useNotification()

function handleClick1() {
  notification.create({
    title: 'Wouldn\'t it be Nice',
    description: 'From the Beach Boys',
    content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
    meta: '2019-5-27 15:11',
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }),
    onAfterLeave: () => {
      message.success('Wouldn\'t it be Nice')
    }
  })
}

function handleClick2() {
  let markAsRead = false
  const n = notification.create({
    title: 'Satisfaction',
    content: `I cant get no satisfaction
I cant get no satisfaction
Cause I try and I try and I try and I try
I cant get no, I cant get no`,
    meta: '2019-5-27 15:11',
    action: () =>
      h(
        NButton,
        {
          text: true,
          type: 'primary',
          onClick: () => {
            markAsRead = true
            n.destroy()
          }
        },
        {
          default: () => '已读'
        }
      ),
    onClose: () => {
      if (!markAsRead) {
        message.warning('请设为已读')
        return false
      }
    }
  })
}
</script>

<template>
  <n-space>
    <NButton @click="handleClick1">
      Wouldn't it be Nice
    </NButton>
    <NButton @click="handleClick2">
      Satisfaction
    </NButton>
  </n-space>
</template>
```

## 类型

```vue
<script lang="ts" setup>
import type { NotificationType } from 'naive-ui'
import { useNotification } from 'naive-ui'

const notification = useNotification()

function notify(type: NotificationType) {
  notification[type]({
    content: '说点啥呢',
    meta: '想不出来',
    duration: 2500,
    keepAliveOnHover: true
  })
}
</script>

<template>
  <n-space>
    <n-button @click="notify('info')">
      信息
    </n-button>
    <n-button @click="notify('success')">
      成功
    </n-button>
    <n-button @click="notify('warning')">
      警告
    </n-button>
    <n-button @click="notify('error')">
      错误
    </n-button>
  </n-space>
</template>
```

## 动态修改内容

你可以修改已经存在的通知

```vue
<script lang="ts" setup>
import type { NotificationReactive } from 'naive-ui'
import { NAvatar, useNotification } from 'naive-ui'
import { h, ref } from 'vue'

const notification = useNotification()
const nRef = ref<NotificationReactive | null>(null)

function open() {
  nRef.value = notification.create({
    title: 'Wouldn\'t it be Nice',
    description: 'From the Beach Boys',
    content: `Wouldn't it be nice if we were older
Then we wouldn't have to wait so long
And wouldn't it be nice to live together
In the kind of world where we belong
You know its gonna make it that much better
When we can say goodnight and stay together
Wouldn't it be nice if we could wake up
In the morning when the day is new
And after having spent the day together
Hold each other close the whole night through`,
    meta: '2019-5-27 15:11',
    avatar: () =>
      h(NAvatar, {
        size: 'small',
        round: true,
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
      }),
    onClose: () => {
      nRef.value = null
    }
  })
}

function change() {
  if (nRef.value) {
    nRef.value.content = () =>
      h('img', {
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
        style: 'width: 100%;'
      })
  }
}
</script>

<template>
  <n-space>
    <n-button @click="open">
      打开它
    </n-button>
    <n-button :disabled="!nRef" @click="change">
      改它
    </n-button>
  </n-space>
</template>
```

## 可滚动

改变这个属性会导致已经存在全部通知被清空，确保你在合适的时机修改了这个属性。

```vue
<script lang="ts" setup>
import { useNotification } from 'naive-ui'

const notification = useNotification()

function handleClick() {
  ;[1, 2, 3, 4, 5].forEach(() =>
    notification.create({
      title: '很多个通知',
      content: `试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来
试着滚起来`
    })
  )
}
</script>

<template>
  <n-button @click="handleClick">
    看看这个东西怎么滚动
  </n-button>
</template>
```

## 不可关闭

通知可以不能被关闭

```vue
<script lang="ts" setup>
import { useNotification } from 'naive-ui'

const notification = useNotification()

function handleClick() {
  notification.create({
    title: 'Close Me if You Can',
    duration: 2000,
    closable: false,
    onAfterLeave: () => {
      notification.create({
        title: 'Ha Ha Ha Ha!',
        duration: 2000,
        closable: false,
        onAfterLeave: () => {
          notification.create({
            title: 'No, You Can\'t',
            duration: 2000,
            closable: false
          })
        }
      })
    }
  })
}
</script>

<template>
  <n-button @click="handleClick">
    不能关闭
  </n-button>
</template>
```

## 持续时间

自动关闭。

```vue
<script lang="ts" setup>
import { useNotification } from 'naive-ui'

const notification = useNotification()

function handleClick() {
  let count = 10
  const n = notification.create({
    title: '平山道 + 雨 = 什么？',
    content: `你有 ${count} 秒来回答这个问题`,
    duration: 10000,
    closable: false,
    onAfterEnter: () => {
      const minusCount = () => {
        count--
        n.content = `你有 ${count} 秒来回答这个问题`
        if (count > 0) {
          window.setTimeout(minusCount, 1000)
        }
      }
      window.setTimeout(minusCount, 1000)
    },
    onAfterLeave: () => {
      notification.create({
        title: '答案是平山河',
        content: '这其实连个冷笑话都算不上',
        duration: 10000
      })
    }
  })
}
</script>

<template>
  <n-button @click="handleClick">
    持续时间 10000ms
  </n-button>
</template>
```

## 限制数量

```vue
<script lang="ts" setup>
import { NButton, useNotification } from 'naive-ui'
import { h, ref } from 'vue'

function NotificationButton() {
  const notification = useNotification()
  const index = ref(0)

  return h(
    NButton,
    {
      onClick: () => {
        index.value++
        notification.info({
          title: `通知框序号: ${index.value}`,
          content: '你可以限制通知框的数量'
        })
      }
    },
    { default: () => '最多允许 3 个通知' }
  )
}
</script>

<template>
  <n-notification-provider :max="3">
    <NotificationButton />
  </n-notification-provider>
</template>
```

## 弹出位置

```vue
<script lang="ts" setup>
import type { NotificationPlacement } from 'naive-ui'
import type { PropType, VNode } from 'vue'
import { NButton, NSpace, useNotification } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'

interface Item {
  placement: NotificationPlacement
  text: string
}

const PlacementButtons = defineComponent({
  props: {
    onPlacementChange: Function as PropType<
      (placement: NotificationPlacement) => void
    >
  },
  setup(props) {
    const notification = useNotification()
    const placementList: Item[] = [
      { placement: 'top-left', text: '左上' },
      { placement: 'top-right', text: '右上' },
      { placement: 'bottom-left', text: '左下' },
      { placement: 'bottom-right', text: '右下' },
      { placement: 'bottom', text: '下' },
      { placement: 'top', text: '上' }
    ]
    return (): VNode =>
      h(NSpace, null, {
        default: () =>
          placementList.map((item: Item) =>
            h(
              NButton,
              {
                onClick: () => {
                  props.onPlacementChange?.(item.placement)
                  notification.info({
                    title: item.placement,
                    content: '你可以切换弹出位置'
                  })
                }
              },
              { default: () => item.text }
            )
          )
      })
  }
})

const placementRef = ref<NotificationPlacement>('top-right')

function handlePlacementChange(placement: NotificationPlacement) {
  placementRef.value = placement
}
</script>

<template>
  <n-notification-provider :placement="placementRef">
    <PlacementButtons :on-placement-change="handlePlacementChange" />
  </n-notification-provider>
</template>
```

