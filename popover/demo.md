# 弹出信息 Popover - 演示示例

## 基础用法

```vue
<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button>悬浮</n-button>
    </template>
    <span>或许不想知道你的花园长得咋样</span>
  </n-popover>
</template>
```

## 触发方式

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showPopover = ref(false)
</script>

<template>
  <n-space>
    <n-popover trigger="hover">
      <template #trigger>
        <n-button>悬浮</n-button>
      </template>
      <span>I wish they all could be California girls</span>
    </n-popover>
    <n-popover trigger="hover" :keep-alive-on-hover="false">
      <template #trigger>
        <n-button>悬浮（忽略主体）</n-button>
      </template>
      <span>I wish they all could be California girls</span>
    </n-popover>
    <n-popover trigger="click">
      <template #trigger>
        <n-button>点击</n-button>
      </template>
      <span>I wish they all could be California girls</span>
    </n-popover>
    <n-popover trigger="focus">
      <template #trigger>
        <n-button>聚焦</n-button>
      </template>
      <span>I wish they all could be California girls</span>
    </n-popover>
    <n-popover trigger="manual" :show="showPopover">
      <template #trigger>
        <n-button @click="showPopover = !showPopover">
          手动
        </n-button>
      </template>
      <span>I wish they all could be California girls</span>
    </n-popover>
  </n-space>
</template>
```

## 延迟

```vue
<template>
  <n-popover trigger="hover" :delay="500" :duration="500">
    <template #trigger>
      <n-button>延迟 500ms, 持续 500ms</n-button>
    </template>
    <span>
      Lately did you ever feel the pain In the morning rain as it soaks it to
      the bone
    </span>
  </n-popover>
</template>
```

## 不要箭头

```vue
<template>
  <n-popover trigger="hover" :show-arrow="false">
    <template #trigger>
      <n-button>悬浮</n-button>
    </template>
    <span>没有箭头就是矩形了</span>
  </n-popover>
</template>
```

## 事件

```vue
<script lang="ts">
import { useMessage } from 'naive-ui'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const message = useMessage()
    return {
      showPopover: ref(false),
      handleUpdateShow(show: boolean) {
        message.success(show ? 'show' : 'hide')
      }
    }
  }
})
</script>

<template>
  <n-space>
    <n-popover
      placement="bottom"
      trigger="hover"
      @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button>悬浮</n-button>
      </template>
      <span>我希望她们都是加州女孩</span>
    </n-popover>
    <n-popover
      placement="bottom"
      trigger="click"
      @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button>点击</n-button>
      </template>
      <span>我希望她们都是加州女孩</span>
    </n-popover>
    <n-popover
      :show="showPopover"
      placement="bottom"
      trigger="manual"
      @update:show="handleUpdateShow"
    >
      <template #trigger>
        <n-button @click="showPopover = !showPopover">
          点击
        </n-button>
      </template>
      <span>我希望她们都是加州女孩</span>
    </n-popover>
  </n-space>
</template>
```

## 位置

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const overlap = ref(false)
</script>

<template>
  <n-switch v-model:value="overlap" /> 覆盖触发元素
  <n-divider />
  <div class="popover-grid">
    <n-popover :overlap="overlap" placement="top-start" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 1 / 1 / 2 / 2">
          Top Start
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="top" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 1 / 2 / 2 / 3">
          Top
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="top-end" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 1 / 3 / 2 / 4">
          Top End
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="left-start" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 2 / 1 / 3 / 2">
          Left Start
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="left" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 3 / 1 / 4 / 2">
          Left
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="left-end" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 4 / 1 / 5 / 2">
          Left End
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="right-start" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 2 / 3 / 3 / 4">
          Right Start
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="right" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 3 / 3 / 4 / 4">
          Right
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="right-end" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 4 / 3 / 5 / 4">
          Right End
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="bottom-start" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 5 / 1 / 6 / 2">
          Bottom Start
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="bottom" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 5 / 2 / 6 / 3">
          Bottom
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
    <n-popover :overlap="overlap" placement="bottom-end" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 5 / 3 / 6 / 4">
          Bottom End
        </n-button>
      </template>
      <div class="large-text">
        啊！
      </div>
    </n-popover>
  </div>
</template>

<style>
.popover-grid {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 12px;
  justify-content: center;
  align-items: center;
}

.large-text {
  font-size: 48px;
}
</style>
```

## 不用基础样式

```vue
<template>
  <n-popover trigger="hover" raw :show-arrow="false">
    <template #trigger>
      <n-button style="margin: 0">
        悬浮
      </n-button>
    </template>
    <div
      style="
        width: 100px;
        height: 100px;
        background-color: red;
        transform-origin: inherit;
      "
    >
      Who kicks a hole in the sky so the heaven cry over me.
    </div>
  </n-popover>
</template>
```

## 样式

可以用 `style` 来设置 popover 的样式；你可以使用 `scrollable` 让 popover 内容可以滚动；在 `:scrollable="true"` 的情况下，你可以用 `content-style` 设定 popover 内容的样式。

```vue
<template>
  <n-space>
    <n-popover style="width: 500px" trigger="click">
      <template #trigger>
        <n-button>宽度 500px</n-button>
      </template>
      长得像根条一样
    </n-popover>
    <n-popover style="max-width: 100px" trigger="click">
      <template #trigger>
        <n-button> 最大宽度 100px </n-button>
      </template>
      内容长度不确定的时候，设置最大宽度可能更好看
    </n-popover>
    <n-popover style="max-height: 240px" trigger="click" scrollable>
      <template #trigger>
        <n-button>最大高度 240px</n-button>
      </template>
      演员失业 电缆失窃<br>
      共享富裕 共享恐惧<br>
      东方睡衣 涌上街头<br>
      街头嘈杂 公共聋哑<br>
      紧急换电缆 循环追捕令<br>
      紧急换电缆 循环追捕令<br>
      我有迷魂 额头滚烫<br>
      我有迷魂 人间明暗<br>
      鸟兽暗语 危险消息<br>
      自然友谊 自然躲避<br>
      西郊有密林 助君出重围<br>
      西郊有密林 助君出重围
    </n-popover>
    <n-popover
      style="max-height: 240px"
      content-style="padding: 0;"
      trigger="click"
      scrollable
    >
      <template #trigger>
        <n-button>可滚动 & 无 padding</n-button>
      </template>
      演员失业 电缆失窃<br>
      共享富裕 共享恐惧<br>
      东方睡衣 涌上街头<br>
      街头嘈杂 公共聋哑<br>
      紧急换电缆 循环追捕令<br>
      紧急换电缆 循环追捕令<br>
      我有迷魂 额头滚烫<br>
      我有迷魂 人间明暗<br>
      鸟兽暗语 危险消息<br>
      自然友谊 自然躲避<br>
      西郊有密林 助君出重围<br>
      西郊有密林 助君出重围
    </n-popover>
    <n-popover
      trigger="click"
      content-style="padding: 0;"
      header-style="padding: 0;"
    >
      <template #trigger>
        <n-button>有 header & 无 padding</n-button>
      </template>
      <template #header>
        <n-text strong depth="1">
          下面就是分割线
        </n-text>
      </template>
      上面就是分割线
    </n-popover>
    <n-popover style="padding: 0" trigger="click">
      <template #trigger>
        <n-button>没有 padding</n-button>
      </template>
      你可以随便放点什么
    </n-popover>
  </n-space>
</template>
```

## 使用触发元素的宽度

设定 `width="trigger"` 使 popover 的宽度等于触发元素。

```vue
<template>
  <n-popover width="trigger">
    <template #trigger>
      <n-button>I would like to leave this city</n-button>
    </template>
    This old town don't smell too pretty and I can feel the warning signs
    running around my mind
  </n-popover>
</template>
```

## 手动定位

注意：手动定位时，`trigger` 属性必须为 `'manual'`

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const x = ref(0)
const y = ref(0)
const showPopover = ref(false)

function handleClick(e: MouseEvent) {
  if (showPopover.value) {
    showPopover.value = false
  }
  else {
    showPopover.value = true
    x.value = e.clientX
    y.value = e.clientY
  }
}
</script>

<template>
  <div
    style="width: 200px; height: 200px; background-color: rgba(0, 128, 0, 0.5)"
    @click="handleClick"
  />
  <n-popover :show="showPopover" :x="x" :y="y" trigger="manual">
    厉害！
  </n-popover>
</template>
```

## 插槽

使用 `header` 与 `footer` 插槽来自定义标题或底部内容。

```vue
<template>
  <n-popover trigger="click">
    <template #trigger>
      <n-button>提供这个接口是因为分割线不好写</n-button>
    </template>
    <template #header>
      <n-text strong depth="1">
        下面就是分割线
      </n-text>
    </template>
    内容
    <template #footer>
      上面就是分割线
    </template>
  </n-popover>
</template>
```

