# 标签页 Tabs - 演示示例

## 基础用法

```vue
<template>
  <n-card title="歌曲" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
  </n-card>
  <n-card>
    <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      pane-wrapper-style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<style>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
```

## 分段

分段类型的标签页。

```vue
<template>
  <n-divider />
  <n-h3 style="text-align: center">
    五美金的礼品卡
  </n-h3>
  <n-tabs type="segment" animated>
    <n-tab-pane name="chap1" tab="第一章">
      我这辈子最疯狂的事，发生在我在 Amazon
      当软件工程师的时候，故事是这样的：<br><br>
      那时我和女朋友住在一起，正在家里远程工作。忽然同事给我发来了紧急消息：”我们的服务出现了
      SEV 2 级别的故障！需要所有的人马上协助！“我们组的应用全挂掉了。<br><br>
      当我还在费力的寻找修复方法的时候，忽然闻到隔壁房间的的焦味，防火报警器开始鸣叫。
    </n-tab-pane>
    <n-tab-pane name="chap2" tab="第二章">
      “威尔！着火了！快来帮忙！”我听到女朋友大喊。现在一个难题在我面前——是恢复一个重要的
      Amazon 服务，还是救公寓的火。<br><br>
      我的脑海中忽然出现了 Amazon
      著名的领导力准则”客户至上“，有很多的客户还依赖我们的服务，我不能让他们失望！所以着火也不管了，女朋友喊我也无所谓，我开始
      debug 这个线上问题。
    </n-tab-pane>
    <n-tab-pane name="chap3" tab="第三章">
      但是忽然，公寓的烟味消失，火警也停了。我的女朋友走进了房间，让我震惊的是，她摘下了自己的假发，她是
      Jeff Bezos（Amazon 老板）假扮的！<br><br>
      “我对你坚持顾客至上的原则感到十分骄傲”，说完，他递给我一张五美金的亚马逊礼品卡，从我家窗户翻了出去，跳上了一辆
      Amazon 会员服务的小货车，一溜烟离开了。<br><br>虽然现在我已不在 Amazon
      工作，但我还是非常感激在哪里学的到的经验，这些经验我终身难忘。你们同意么？
    </n-tab-pane>
  </n-tabs>
</template>
```

## 卡片类型

设定 `type='card'`。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const nameRef = ref(1)
const message = useMessage()
const panelsRef = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

function handleClose(name: number) {
  const { value: panels } = panelsRef
  if (panels.length === 1) {
    message.error('最后一个了')
    return
  }
  message.info(`关掉 ${name}`)
  const index = panels.findIndex(v => name === v)
  panels.splice(index, 1)
  if (nameRef.value === name) {
    nameRef.value = panels[index]
  }
}

const name = nameRef
const panels = panelsRef
</script>

<template>
  <n-tabs
    v-model:value="name"
    type="card"
    closable
    tab-style="min-width: 80px;"
    @close="handleClose"
  >
    <n-tab-pane
      v-for="panel in panels"
      :key="panel"
      :tab="panel.toString()"
      :name="panel"
    >
      {{ panel }}
    </n-tab-pane>
  </n-tabs>
</template>
```

## Flex 布局的标签

只对 `'line'` 和 `'bar'` 类型的 Tabs 生效。

```vue
<template>
  <n-card title="歌曲" style="margin-bottom: 16px">
    <n-tabs default-value="oasis" justify-content="space-evenly" type="line">
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
  </n-card>
  <n-card title="Too Simple">
    <n-tabs default-value="signin" size="large" justify-content="space-evenly">
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input />
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input />
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
```

## 前缀 & 后缀

使用 `prefix`、`suffix` slot 来添加前后缀。

```vue
<template>
  <n-tabs default-value="oasis">
    <template #prefix>
      Prefix
    </template>
    <n-tab-pane name="oasis" tab="Oasis">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦">
      七里香
    </n-tab-pane>
    <template #suffix>
      Suffix
    </template>
  </n-tabs>
</template>
```

## 尺寸

Tabs 可以有不同的尺寸。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const size = ref<'small' | 'medium' | 'large'>('medium')
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="size">
      <n-space>
        <n-radio value="small">
          小
        </n-radio>
        <n-radio value="medium">
          不小
        </n-radio>
        <n-radio value="large">
          不不小
        </n-radio>
      </n-space>
    </n-radio-group>
    <n-tabs type="bar" :size="size">
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
    <n-tabs type="line" :size="size">
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
    <n-tabs type="card" :size="size" closable>
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="周杰伦">
        七里香
      </n-tab-pane>
    </n-tabs>
  </n-space>
</template>
```

## 展示指令

可以制定标签页展示的指令为 `if` 、 `show` 或者 `show:lazy` 。使用 `show` 的时候标签页内容不会随着切换重置。使用 `show:lazy` 的时候显示效果跟 `show` 一致，不过内容会进行延迟加载。

```vue
<script lang="ts" setup>
import { NInput } from 'naive-ui'
import { defineComponent, h } from 'vue'

const showInput = defineComponent({
  render() {
    return h(NInput, {
      placeholder: '我的内容不会被重置'
    })
  }
})

const ifInput = defineComponent({
  render() {
    return h(NInput, {
      placeholder: '我的内容会被重置'
    })
  }
})

const showLazyInput = defineComponent({
  render() {
    return h(NInput, {
      placeholder: '我会延迟加载，并且之后我的内容不会被重置'
    })
  }
})

const ShowInput = showInput
const IfInput = ifInput
const ShowLazyInput = showLazyInput
</script>

<template>
  <n-tabs default-value="show">
    <n-tab-pane name="show" display-directive="show" tab="show">
      <ShowInput />
    </n-tab-pane>
    <n-tab-pane name="if" display-directive="if" tab="if">
      <IfInput />
    </n-tab-pane>
    <n-tab-pane name="show:lazy" display-directive="show:lazy" tab="show:lazy">
      <ShowLazyInput />
    </n-tab-pane>
  </n-tabs>
</template>
```

## 可增加

增加一些标签页。只对 `'card'` 类型生效。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const valueRef = ref(1)
const panelsRef = ref([1, 2, 3, 4, 5])
const addableRef = computed(() => {
  return {
    disabled: panelsRef.value.length >= 10
  }
})
const closableRef = computed(() => {
  return panelsRef.value.length > 1
})

const value = valueRef
const panels = panelsRef
const addable = addableRef
const closable = closableRef

function handleAdd() {
  const newValue = Math.max(...panelsRef.value) + 1
  panelsRef.value.push(newValue)
  valueRef.value = newValue
}

function handleClose(name: number) {
  const { value: panels } = panelsRef
  const nameIndex = panels.findIndex(panelName => panelName === name)
  if (!~nameIndex)
    return
  panels.splice(nameIndex, 1)
  if (name === valueRef.value) {
    valueRef.value = panels[Math.min(nameIndex, panels.length - 1)]
  }
}
</script>

<template>
  <n-tabs
    v-model:value="value"
    type="card"
    :addable="addable"
    :closable="closable"
    tab-style="min-width: 80px;"
    @close="handleClose"
    @add="handleAdd"
  >
    <n-tab-pane v-for="panel in panels" :key="panel" :name="panel">
      {{ panel }}
    </n-tab-pane>
    <template #prefix>
      Prefix
    </template>
    <template #suffix>
      Suffix
    </template>
  </n-tabs>
</template>
```

## 切换 Tab 前的回调

你可以延迟或阻止 Tab 切换。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleBeforeLeave(tabName: string) {
  switch (tabName) {
    case 'not-allowed':
      message.error('不许进来')
      return false
    case 'wait':
      return new Promise<boolean>((resolve) => {
        const messageInstance = message.loading('Wait for 1s')
        setTimeout(() => {
          messageInstance.destroy()
          resolve(true)
        }, 1000)
      })
    default:
      return true
  }
}

function handleUpdateValue(value: string) {
  message.info(value)
}
</script>

<template>
  <n-tabs
    type="line"
    default-value="okay"
    @before-leave="handleBeforeLeave"
    @update:value="handleUpdateValue"
  >
    <n-tab-pane name="wait" tab="等 1 秒">
      +1s
    </n-tab-pane>
    <n-tab-pane name="not-allowed" tab="不许进来">
      ???
    </n-tab-pane>
    <n-tab-pane name="okay" tab="可以">
      就那么回事吧
    </n-tab-pane>
  </n-tabs>
</template>
```

## 不使用面板

`n-tabs` 自带面板的显示，如果你只想要显示 tab 的部分，可以使用 `n-tab` 代替 `n-tab-pane`。

```vue
<template>
  <n-tabs type="line">
    <n-tab name="幸福">
      寂寞围绕着电视
    </n-tab>
    <n-tab name="的">
      垂死坚持
    </n-tab>
    <n-tab name="旁边">
      在两点半消失
    </n-tab>
  </n-tabs>
</template>
```

## 手动更新指示条

因为 `n-tabs` 直接读取 children 渲染，所以它无法理解你的更新意图，在某些极端情况下，需要你手动的更新条的位置。

```vue
<script lang="ts" setup>
import type { TabsInst } from 'naive-ui'
import { nextTick, ref } from 'vue'

const tabsInstRef = ref<TabsInst | null>(null)
const tabsRef = ref(['a', 'b'])
const valueRef = ref('a')

function handleClick() {
  tabsRef.value.reverse()
  valueRef.value = 'a'
  nextTick(() => tabsInstRef.value?.syncBarPosition())
}

const tabs = tabsRef
const value = valueRef
</script>

<template>
  <n-space vertical>
    <n-button @click="handleClick">
      没有任何意义的改动
    </n-button>
    <n-tabs ref="tabsInstRef" v-model:value="value">
      <n-tab v-for="tab in tabs" :key="tab" :name="tab">
        我是 {{ tab }}
      </n-tab>
    </n-tabs>
  </n-space>
</template>
```

## 设置 Tab 条的长度

想怎么搞就怎么搞。

```vue
<template>
  <n-tabs :bar-width="28" type="line" class="custom-tabs">
    <n-tab-pane name="oasis" tab="Oasis">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦">
      七里香
    </n-tab-pane>
  </n-tabs>
</template>

<style>
.custom-tabs .n-tabs-bar {
  background-color: transparent !important;
}

.custom-tabs .n-tabs-bar::after {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: -2px;
  border-radius: 2px;
  background-color: var(--bar-color);
}
</style>
```

## 触发方式

可以使用 `trigger='hover'` 触发标签页的改变。

```vue
<template>
  <n-tabs type="line" trigger="hover">
    <n-tab-pane name="oasis" tab="Oasis">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="the Beatles">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="jay chou" tab="周杰伦">
      七里香
    </n-tab-pane>
  </n-tabs>
</template>
```

## 标签页的位置

```vue
<script setup lang="ts">
import type { TabsProps } from 'naive-ui'
import { ref } from 'vue'

const placement = ref<NonNullable<TabsProps['placement']>>('left')
const type = ref<TabsProps['type']>('card')
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="placement">
      <n-radio label="top" value="top" />
      <n-radio label="bottom" value="bottom" />
      <n-radio label="left" value="left" />
      <n-radio label="right" value="right" />
    </n-radio-group>
    <n-radio-group v-model:value="type">
      <n-radio label="card" value="card" />
      <n-radio label="bar" value="bar" />
      <n-radio label="line" value="line" />
    </n-radio-group>
    <n-tabs
      :key="type + placement"
      addable
      :type="type"
      animated
      :placement="placement"
      :style="
        placement === 'left' || placement === 'right'
          ? { height: '240px' }
          : undefined
      "
    >
      <template #prefix>
        Prefix
      </template>
      <template #suffix>
        Suffix
      </template>
      <n-tab-pane name="oasis" tab="Oasis">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles" tab="the Beatles">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou" tab="Jay Chou">
        Qilixiang
      </n-tab-pane>
      <n-tab-pane name="oasis1" tab="Oasis1">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles1" tab="the Beatles1">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou1" tab="Jay Chou1">
        Qilixiang
      </n-tab-pane>
      <n-tab-pane name="oasis2" tab="Oasis2">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles2" tab="the Beatles2">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou2" tab="Jay Chou2">
        Qilixiang
      </n-tab-pane>
      <n-tab-pane name="oasis3" tab="Oasis3">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles3" tab="the Beatles3">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou3" tab="Jay Chou3">
        Qilixiang
      </n-tab-pane>
      <n-tab-pane name="oasis4" tab="Oasis4">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles4" tab="the Beatles4">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou4" tab="Jay Chou4">
        Qilixiang
      </n-tab-pane>
      <n-tab-pane name="oasis5" tab="Oasis5">
        Wonderwall
      </n-tab-pane>
      <n-tab-pane name="the beatles5" tab="the Beatles5">
        Hey Jude
      </n-tab-pane>
      <n-tab-pane name="jay chou5" tab="Jay Chou5">
        Qilixiang
      </n-tab-pane>
    </n-tabs>
  </n-space>
</template>
```

