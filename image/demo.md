# 图像 Image - 演示示例

## 基础用法

```vue
<template>
  <n-image
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
</template>
```

## 成组使用

```vue
<template>
  <n-image-group>
    <n-space>
      <n-image
        width="100"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-image
        width="100"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </n-space>
  </n-image-group>
</template>
```

## 加载失败

使用 `fallback-src` 设定失败时的图像。或者你可以使用下一个例子里的 `error` slot。

```vue
<template>
  <n-image
    width="100"
    src="人生嘛，失败总是难免的"
    fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
</template>
```

## 加载失败的插槽

你可以使用 `error` slot 来自定义加载失败时的内容。

```vue
<script lang="ts" setup>
import { ImageOutline as ImageOutlineIcon } from '@vicons/ionicons5'
import { ref } from 'vue'

const url = ref('人生嘛，失败总是难免的')
function refresh() {
  url.value = 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
}
function reloadError() {
  url.value = '人生嘛，失败总是难免的'
}
</script>

<template>
  <n-flex vertical inline>
    <n-flex>
      <n-button type="error" @click="reloadError">
        加载失败
      </n-button>
      <n-button type="primary" @click="refresh">
        刷新
      </n-button>
    </n-flex>
    <n-image width="100" :src="url">
      <template #error>
        <n-icon :size="100" color="lightGrey">
          <ImageOutlineIcon />
        </n-icon>
      </template>
    </n-image>
  </n-flex>
</template>
```

## 禁止预览

你可以使用 `preview-disabled` 来禁止预览。

```vue
<template>
  <n-image
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    preview-disabled
  />
</template>
```

## 自定义工具栏

你可以使用 `render-toolbar` 来自定义工具栏。

```vue
<script lang="ts" setup>
import type { ImageRenderToolbarProps } from 'naive-ui'
import { ClipboardOutline, OpenOutline } from '@vicons/ionicons5'
import { NButton, useMessage } from 'naive-ui'
import { h, ref } from 'vue'

const message = useMessage()

const url = ref('https://picsum.photos/id/10/100/100')

function renderToolbar({ nodes }: ImageRenderToolbarProps) {
  return [
    nodes.prev,
    nodes.next,
    h(
      NButton,
      {
        circle: true,
        type: 'primary',
        style: { marginLeft: '12px' },
        onClick: () => {
          window.open(url.value)
        }
      },
      {
        icon: () => h(OpenOutline)
      }
    ),
    h(
      NButton,
      {
        circle: true,
        type: 'primary',
        style: { marginLeft: '12px' },
        onClick: async () => {
          await navigator.clipboard.writeText(url.value)
          message.success('已复制到剪贴板')
        }
      },
      {
        icon: () => h(ClipboardOutline)
      }
    )
  ]
}
</script>

<template>
  <n-image
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    :render-toolbar="renderToolbar"
  />
</template>
```

## 使用主题变量自定义工具栏样式

默认的工具栏样式不一定符合你的需求，我们来调整一下。

```vue
<script lang="ts" setup>
import type { GlobalThemeOverrides } from 'naive-ui'
import { useThemeVars } from 'naive-ui'
import { computed } from 'vue'

const imageGroupThemeOverrides = computed(() => {
  const { popoverColor, boxShadow2, textColor2, borderRadius }
    = useThemeVars().value
  const themeOverrides: NonNullable<GlobalThemeOverrides['Image']> = {
    toolbarColor: popoverColor,
    toolbarBoxShadow: boxShadow2,
    toolbarIconColor: textColor2,
    toolbarBorderRadius: borderRadius
  }
  return themeOverrides
})
</script>

<template>
  <n-image-group :theme-overrides="imageGroupThemeOverrides">
    <n-space>
      <n-image
        width="100"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-image
        width="100"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </n-space>
  </n-image-group>
</template>
```

## 工具栏的弹出提示

设定 `show-toolbar-tooltip` 来使用弹出提示。因为有的用户不知道如何进行键盘操作。

```vue
<template>
  <n-image-group show-toolbar-tooltip>
    <n-space>
      <n-image
        width="100"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-image
        width="100"
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </n-space>
  </n-image-group>
</template>
```

## 懒加载

让图片进入视口再加载，两种使用方式：一种是单独使用 `lazy` 属性，则将设置为原生 [HTMLImageElement.loading](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/loading) 的属性值；
另一种方式是配合 `intersection-observer-options` 配置，将采用 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver) API 实现懒加载。

```vue
<script lang="ts" setup>
const srcList = [
  'https://picsum.photos/id/1/100/100',
  'https://picsum.photos/id/2/100/100',
  'https://picsum.photos/id/3/100/100',
  'https://picsum.photos/id/4/100/100',
  'https://picsum.photos/id/5/100/100',
  'https://picsum.photos/id/6/100/100',
  'https://picsum.photos/id/7/100/100',
  'https://picsum.photos/id/8/100/100',
  'https://picsum.photos/id/9/100/100',
  'https://picsum.photos/id/10/100/100'
]
</script>

<template>
  <n-p>
    单独设置 <n-text code>
      lazy
    </n-text> 属性
  </n-p>
  <n-image
    lazy
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
  <n-p>
    <n-text code>
      lazy
    </n-text> 属性配合
    <n-text code>
      intersection-observer-options
    </n-text>
  </n-p>
  <div
    id="image-scroll-container"
    style="
      overflow: auto;
      height: 100px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    "
  >
    <n-image
      v-for="(src, index) in srcList"
      :key="index"
      width="100"
      height="100"
      lazy
      :src="src"
      :intersection-observer-options="{
        root: '#image-scroll-container',
      }"
    >
      <template #placeholder>
        <div
          style="
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #0001;
          "
        >
          Loading
        </div>
      </template>
    </n-image>
  </div>
</template>
```

## 预览时的属性

可以通过 `previewed-img-props` 设定预览时图像的属性。

```vue
<template>
  <n-image
    width="100"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    :previewed-img-props="{ style: { border: '8px solid white' } }"
  />
</template>
```

## 手动打开预览

通过调用 `showPreview` 来触发大图预览。

```vue
<script lang="ts" setup>
import type { ImageInst } from 'naive-ui'
import { ref } from 'vue'

const imageRef = ref<ImageInst>()
function handleClick() {
  imageRef.value?.showPreview()
}
</script>

<template>
  <n-space vertical>
    <n-button type="primary" @click="handleClick">
      展示图片预览
    </n-button>
    <n-image
      ref="imageRef"
      width="100"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-space>
</template>
```

## 单独使用预览组件

`n-image-preview` 可单独使用。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const showRef = ref(false)
function onClick() {
  showRef.value = true
}

const message = useMessage()

function handleUpdateShow(value: boolean) {
  message.info(`${value}`)
}

function handleClose() {
  message.info('close')
}
</script>

<template>
  <n-button type="primary" @click="onClick">
    点击预览图片
  </n-button>
  <n-image-preview
    v-model:show="showRef"
    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    @update:show="handleUpdateShow"
    @close="handleClose"
  />
</template>
```

## 单独使用多图预览组件

使用 `<n-image-group />` 的 `src-list` 属性预览多张图片，无需使用 `<n-image />`。

```vue
<script lang="ts" setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const currentIndex = ref(0)

const showRef = ref(false)
function onClick() {
  showRef.value = true
}

const message = useMessage()
function handleUpdateShow(value: boolean) {
  message.info(`${value}`)
}

function handleUpdateCurrent(current: number) {
  message.info(`${current}`)
}
</script>

<template>
  <n-button type="primary" @click="onClick">
    点击预览多图
  </n-button>
  <n-image-group
    v-model:show="showRef"
    v-model:current="currentIndex"
    :src-list="[
      'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
      'https://picsum.photos/id/1/100/100',
      'https://picsum.photos/id/2/100/100',
      'https://picsum.photos/id/3/100/100',
      'https://picsum.photos/id/4/100/100',
      'https://picsum.photos/id/5/100/100',
      'https://picsum.photos/id/7/100/100',
      'https://picsum.photos/id/8/100/100',
      'https://picsum.photos/id/9/100/100',
      'https://picsum.photos/id/10/100/100',
    ]"
    @update:show="handleUpdateShow"
    @update:current="handleUpdateCurrent"
  />
  <pre>currentIndex: {{ currentIndex }}</pre>
</template>
```

