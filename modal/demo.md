# 模态框 Modal - 演示示例

## 基础用法

模态框的基础用法，你可以把任何东西放进去，比如一个卡片。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        噢！
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>
</template>
```

## 内容滚动

使用 Card 预设时，开启 `content-scrollable` 可以让滚动仅发生在内容区域，标题和底部保持固定。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    打开
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="card"
    title="Content Scrollable"
    content-scrollable
    :style="{ width: '600px', height: '400px' }"
    :segmented="{ content: true, footer: true }"
  >
    <p v-for="i in 30" :key="i" style="margin: 0 0 8px 0">
      第 {{ i }} 行内容，只有这里会滚动。
    </p>
    <template #footer>
      固定在底部的操作区
    </template>
  </n-modal>
</template>
```

## 命令式 API

自 `2.38.0` 开始提供。

你可以使用 `useModal.create` 来打开一个模态框。（请确保使用此 API 的组件被 `n-modal-provider` 包含。）

```vue
<script lang="ts" setup>
import { NButton, useMessage, useModal } from 'naive-ui'
import { h } from 'vue'

const modal = useModal()
const message = useMessage()

function showDialogPreset() {
  const m = modal.create({
    title: 'Dialog 预设',
    preset: 'dialog',
    content: '内容'
  })
  message.info('三秒钟后关闭')
  setTimeout(() => {
    m.destroy()
  }, 3000)
}

function showCardPreset() {
  const m = modal.create({
    title: 'Card 预设',
    preset: 'card',
    style: {
      width: '400px'
    },
    content: '内容',
    footer: () =>
      h(NButton, { type: 'primary', onClick: () => m.destroy() }, () => '关闭')
  })
}

function showAny() {
  const m = modal.create({
    style: {
      width: '400px',
      background: '#fff'
    },
    render() {
      return h('div', [
        '随便啥',
        h(
          NButton,
          { type: 'primary', onClick: () => m.destroy() },
          () => '关闭'
        )
      ])
    }
  })
}
</script>

<template>
  <n-flex>
    <NButton @click="showDialogPreset">
      来吧 Dialog
    </NButton>
    <NButton @click="showCardPreset">
      来吧 Card
    </NButton>
    <NButton @click="showAny">
      来吧 随便啥
    </NButton>
  </n-flex>
</template>
```

## 受控显示

模态框的显示可以是受控的。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
const timeout = ref(6000)

function countdown() {
  if (timeout.value <= 0) {
    showModal.value = false
  }
  else {
    timeout.value -= 1000
    setTimeout(countdown, 1000)
  }
}

function handleClick() {
  showModal.value = true
  timeout.value = 6000

  countdown()
}
</script>

<template>
  <n-button @click="handleClick">
    来吧
  </n-button>
  <n-modal :show="showModal">
    <n-card
      style="width: 600px"
      title="模态框"
      size="huge"
      :bordered="false"
      role="dialog"
      aria-modal="true"
    >
      倒计时 {{ timeout / 1000 }} 秒
    </n-card>
  </n-modal>
</template>
```

## 遮罩关闭

使用 `mask-closable=false` 使点击遮罩层不发出关闭事件。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const showModal = ref(false)

function onNegativeClick() {
  message.success('Cancel')
  showModal.value = false
}

function onPositiveClick() {
  message.success('Submit')
  showModal.value = false
}
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal
    v-model:show="showModal"
    :mask-closable="false"
    preset="dialog"
    title="确认"
    content="你确认"
    positive-text="确认"
    negative-text="算了"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
  />
</template>
```

## 调整位置

通过固定定位设定 Modal 的位置。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
      style="width: 600px; position: fixed; right: 100px; bottom: 100px"
    >
      <template #header-extra>
        噢！
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>
</template>
```

## 使用 Card 预设

模态框有一些预设，让你在设定之后可以使用对应的 slots 还有 props。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const bodyStyle = {
  width: '600px'
}
const segmented = {
  content: 'soft',
  footer: 'soft'
} as const
const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="卡片预设"
    size="huge"
    :bordered="false"
    :segmented="segmented"
  >
    <template #header-extra>
      噢!
    </template>
    内容
    <template #footer>
      尾部
    </template>
  </n-modal>
</template>
```

## 使用 Dialog 预设

`dialog` 预设的例子。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const showModal = ref(false)

function cancelCallback() {
  message.success('Cancel')
}

function submitCallback() {
  message.success('Submit')
}
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="确认"
    content="你确认?"
    positive-text="确认"
    negative-text="算了"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  />
</template>
```

## 使用 Dialog 预设的插槽

插槽也会随着预设变动。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来吧
  </n-button>
  <n-modal v-model:show="showModal" preset="dialog" title="Dialog">
    <template #header>
      <div>标题</div>
    </template>
    <div>内容</div>
    <template #action>
      <div>操作</div>
    </template>
  </n-modal>
</template>
```

## 变换原点

虽然从点击位置展开模态框的动画很好看，但是有时候我们需要简单点的从屏幕中间开始的动画。你可以把 `transform-origin` 设为 `'center'` 来达成这个效果。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    没什么
  </n-button>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card
      style="width: 600px"
      title="好的"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        行
      </template>
      可以
      <template #footer>
        不错
      </template>
    </n-card>
  </n-modal>
</template>
```

## 可拖拽

设定 `draggable` 属性为 `true`，弹窗即可拖拽。如果你希望弹窗可以被拖出 window 的范围，可以设置 `draggable` 为 `{ bounds: 'none' }`。

如果你希望拖拽完全自定义 modal 的内容，你可以使用 `default` 插槽内的 `draggableClass`，设定在你希望触发拖拽的元素上。

```vue
<script lang="ts" setup>
import { useModal } from 'naive-ui'
import { ref } from 'vue'

const modal = useModal()

const showModal1 = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)
const showModal4 = ref(false)

function showDialogPreset() {
  modal.create({
    title: 'Dialog 预设拖拽',
    draggable: true,
    preset: 'dialog',
    content: '无意义的内容....'
  })
}

function showCardPreset() {
  modal.create({
    title: 'Card 预设拖拽',
    draggable: true,
    preset: 'card',
    content: '无意义的内容....'
  })
}
</script>

<template>
  <n-flex>
    <n-button @click="showModal1 = !showModal1">
      card 预设
    </n-button>
    <n-button @click="showModal2 = !showModal2">
      dialog 预设
    </n-button>
    <n-button @click="showModal3 = !showModal3">
      无预设
    </n-button>
    <n-button @click="showDialogPreset">
      dialog 预设（命令式 Api）
    </n-button>
    <n-button @click="showCardPreset">
      card 预设（命令式 Api）
    </n-button>
    <n-button @click="showModal4 = !showModal4">
      弹窗嵌套
    </n-button>
  </n-flex>
  <n-modal
    v-model:show="showModal1"
    title="card 预设拖拽"
    preset="card"
    draggable
    :style="{ width: '800px' }"
  >
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
  </n-modal>
  <n-modal
    v-model:show="showModal2"
    title="dialog 预设拖拽"
    preset="dialog"
    draggable
    :style="{ width: '800px' }"
  >
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
    <div>无意义的内容...</div>
  </n-modal>
  <n-modal
    v-model:show="showModal3"
    title="无预设拖拽"
    draggable
    :style="{ width: '800px' }"
  >
    <template #default="{ draggableClass }">
      <n-card>
        <div :class="draggableClass">
          点我拖拽
        </div>
      </n-card>
    </template>
  </n-modal>
  <n-modal
    v-model:show="showModal4"
    title="嵌套弹窗拖拽"
    preset="card"
    :draggable="{ bounds: 'none' }"
    :style="{ width: '800px' }"
  >
    <n-button @click="showDialogPreset">
      再开一个弹窗
    </n-button>
  </n-modal>
</template>
```

## 不显示遮罩层

也可以不显示模态框的遮罩层，可以拿来做一个悬浮窗。

注意，此时遮罩层相关的 API 将不起作用，焦点也不会被限制在 Modal 内部（这会导致键盘事件例如 Esc 不总是生效）。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <n-button @click="showModal = true">
    来个悬浮窗
  </n-button>
  <n-modal
    v-model:show="showModal"
    style="width: 800px"
    preset="card"
    draggable
    title="悬浮窗"
    :show-mask="false"
  >
    悬浮窗
  </n-modal>
</template>
```

