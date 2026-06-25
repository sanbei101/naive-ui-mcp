# 对话框 Dialog - 演示示例

## 基础用法

注入 `dialog` 来创建一个弹框。

```vue
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui'

const message = useMessage()
const dialog = useDialog()

function handleConfirm() {
  dialog.warning({
    title: '警告',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    draggable: true,
    onPositiveClick: () => {
      message.success('确定')
    },
    onNegativeClick: () => {
      message.error('不确定')
    }
  })
}

function handleSuccess() {
  dialog.success({
    title: '成功',
    content: '厉害',
    positiveText: '哇',
    onPositiveClick: () => {
      message.success('耶！')
    }
  })
}

function handleError() {
  dialog.error({
    title: '错误',
    content: '错了',
    positiveText: '啊',
    onPositiveClick: () => {
      message.success('我就知道')
    }
  })
}
</script>

<template>
  <n-space>
    <n-button @click="handleConfirm">
      警告
    </n-button>
    <n-button @click="handleSuccess">
      成功
    </n-button>
    <n-button @click="handleError">
      错误
    </n-button>
  </n-space>
</template>
```

## 异步

对话框可以异步。

```vue
<script lang="ts" setup>
import { useDialog } from 'naive-ui'

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))
const countDown = (second: number) => `倒计时 ${second} 秒`

const dialog = useDialog()

function handleClick() {
  const d = dialog.success({
    title: '异步',
    content: '点击，倒计时 3 秒',
    positiveText: '确认',
    onPositiveClick: () => {
      d.loading = true
      return new Promise((resolve) => {
        sleep()
          .then(() => {
            d.content = countDown(2)
            return sleep()
          })
          .then(() => {
            d.content = countDown(1)
            return sleep()
          })
          .then(() => {
            d.content = countDown(0)
          })
          .then(resolve)
      })
    }
  })
}
</script>

<template>
  <n-button @click="handleClick">
    成功
  </n-button>
</template>
```

## 使用组件

有的时候你可能想把它用作一个组件。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleNegativeClick() {
  message.warning('取消')
}

function handlePositiveClick() {
  message.success('确认')
}
</script>

<template>
  <n-dialog
    title="确认"
    content="你确定"
    negative-text="不确认"
    positive-text="确认"
    @positive-click="handlePositiveClick"
    @negative-click="handleNegativeClick"
  />
</template>
```

## 点击遮罩

我觉得用户应该聪明到点遮罩没用的时候就去点确认了。

```vue
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui'

const message = useMessage()
const dialog = useDialog()

function handleButtonClick() {
  dialog.success({
    title: '关闭',
    content: '你确定？',
    positiveText: '确定',
    negativeText: '不确定',
    maskClosable: false,
    onMaskClick: () => {
      message.success('不能关闭')
    },
    onEsc: () => {
      message.success('通过 esc 关闭')
    }
  })
}
</script>

<template>
  <n-button @click="handleButtonClick">
    点击遮罩的事件
  </n-button>
</template>
```

## 自定义 Action

有的时候你想自定义 `action` 和 `content`。

```vue
<script lang="ts" setup>
import { useDialog } from 'naive-ui'

const dialog = useDialog()

function handleButtonClick() {
  dialog.warning({
    title: '使用渲染函数',
    content: () => 'Content',
    action: () => 'Action'
  })
}
</script>

<template>
  <n-space>
    <n-button @click="handleButtonClick">
      使用渲染函数
    </n-button>
  </n-space>
</template>
```

## 访问全部 Dialog 实例

你可以使用 `useDialogReactiveList` 去访问当前 `n-dialog-provider` 下的所有对话框。

```vue
<script lang="ts" setup>
import { useDialogReactiveList } from 'naive-ui'

const dialogReactiveList = useDialogReactiveList()
</script>

<template>
  目前页面中共有 {{ dialogReactiveList.length }} 个对话框。
</template>
```

