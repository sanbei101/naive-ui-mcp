# 头像 Avatar - 演示示例

## 尺寸

头像有 `small`、`medium` 和 `large` 大小，也可以自己设定尺寸。

```vue
<template>
  <n-space align="flex-end">
    <n-avatar
      size="small"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      size="medium"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      :size="48"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-space>
</template>
```

## 形状

头像可以是圆形。

```vue
<template>
  <n-space align="flex-end">
    <n-avatar
      round
      size="small"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      round
      size="medium"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      round
      size="large"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <n-avatar
      round
      :size="48"
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
  </n-space>
</template>
```

## 颜色

你可以把它设成某种和你爱吃的东西有关的颜色。

```vue
<template>
  <n-avatar
    :style="{
      color: 'yellow',
      backgroundColor: 'red',
    }"
  >
    M
  </n-avatar>
</template>
```

## 标记

和 `Badge` 一起用也挺好的 (如果你喜欢看到一堆一堆的推送)。

```vue
<template>
  <n-badge value="999+">
    <n-avatar>App</n-avatar>
  </n-badge>
</template>
```

## 图标

我喜欢用图标当头像。

```vue
<script lang="ts" setup>
import { MdCash } from '@vicons/ionicons4'
</script>

<template>
  <n-avatar>
    <n-icon>
      <MdCash />
    </n-icon>
  </n-avatar>
</template>
```

## 字号

字号会根据内容文字自动调整。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Oasis')
</script>

<template>
  <n-space vertical item-style="line-height: 0;">
    <n-space>
      <n-avatar>{{ value }}</n-avatar>
      <n-avatar round>
        {{ value }}
      </n-avatar>
    </n-space>
    <n-input v-model:value="value" />
  </n-space>
</template>
```

## 加载失败时显示的图像

下面的头像加载失败时会展示 07akioni。

```vue
<template>
  <n-avatar
    round
    size="small"
    src="empty.png"
    fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
  />
</template>
```

## 头像组

人多不一定是好事。

---

请注意，该演示使用了 `NGAvatarGroup` 组件，该组件自 naive-ui 的 `2.43.0` 起才可用。

`NGAvatarGroup` 与 `NAvatarGroup` 几乎完全相同，不同之处在于它新增了一个通用的 `options` 属性（generic `options` prop），这可以使在 `.vue` 文件中使用时让 slots 和 props 的类型更精确。

该组件仅在 Vue >= `3.3` 且在 `.vue` 文件中才能使用。

如果你的开发环境不支持 [Vue 泛型组件](https://blog.vuejs.org/posts/vue-3-3#generic-components)，请改用 `NAvatarGroup`。

`NGAvatarGroup` 应从 `'naive-ui/generic'` 中导入。

```vue
<script lang="ts" setup>
import type { AvatarGroupOption } from 'naive-ui'
import { NGAvatarGroup } from 'naive-ui/generic'

type Option = AvatarGroupOption & { name: string }

const options: Option[] = [
  {
    name: '张三',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: '李四',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: '王五',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: '赵六',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: '七仔',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  }
]

function createDropdownOptions(options: Option[]) {
  return options.map(option => ({
    key: option.name,
    label: option.name
  }))
}
</script>

<template>
  <NGAvatarGroup :options="options" :size="40" :max="3">
    <template #avatar="{ option: { name, src } }">
      <n-tooltip>
        <template #trigger>
          <n-avatar :src="src" />
        </template>
        {{ name }}
      </n-tooltip>
    </template>
    <template #rest="{ options: restOptions, rest }">
      <n-dropdown :options="createDropdownOptions(restOptions)" placement="top">
        <n-avatar>+{{ rest }}</n-avatar>
      </n-dropdown>
    </template>
  </NGAvatarGroup>
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
  'https://picsum.photos/id/7/100/100',
  'https://picsum.photos/id/8/100/100',
  'https://picsum.photos/id/9/100/100',
  'https://picsum.photos/id/10/100/100',
  'xxx.png'
]
</script>

<template>
  <n-p>
    单独设置 <n-text code>
      lazy
    </n-text> 属性
  </n-p>
  <n-avatar
    lazy
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
    style="overflow: auto; height: 100px; gap: 8px"
  >
    <n-space vertical>
      <n-avatar
        v-for="src of srcList"
        :key="src"
        size="small"
        lazy
        :src="src"
        fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        :render-placeholder="() => null"
        :intersection-observer-options="{
          root: '#image-scroll-container',
        }"
      />
    </n-space>
  </div>
</template>
```

