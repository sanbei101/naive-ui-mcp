# 轮播图 Carousel - 演示示例

## 基础

```vue
<template>
  <n-carousel>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 箭头

设定 `show-arrow` 来显示箭头。

```vue
<template>
  <n-carousel show-arrow>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 自动播放

设定 `autoplay` 然后它就能自己动了。

```vue
<template>
  <n-carousel autoplay>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 指示点

设定 `dot-type` 来更改指示器的样式，可以使用 `:show-dots="false"` 来隐藏指示点。

设定 `dot-placement` 来更改指示点的位置。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const typeRef = ref<'dot' | 'line'>('dot')
const placementRef = ref<'top' | 'bottom' | 'left' | 'right'>('bottom')
const directionRef = ref<'horizontal' | 'vertical'>('horizontal')
const showArrow = ref(false)
const type = typeRef
const types = ['dot', 'line']
const placement = placementRef
const placements = ['top', 'bottom', 'left', 'right']
const direction = directionRef
const directions = ['horizontal', 'vertical']
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="type">
      <n-radio-button v-for="_type in types" :key="_type" :value="_type">
        {{ _type }}
      </n-radio-button>
    </n-radio-group>
    <n-radio-group v-model:value="placement">
      <n-radio-button
        v-for="_placement in placements"
        :key="_placement"
        :value="_placement"
      >
        {{ _placement }}
      </n-radio-button>
    </n-radio-group>
    <n-radio-group v-model:value="direction">
      <n-radio-button
        v-for="_direction in directions"
        :key="_direction"
        :value="_direction"
      >
        {{ _direction }}
      </n-radio-button>
    </n-radio-group>
    <n-switch v-model:value="showArrow">
      <template #checked>
        Show arrow
      </template>
      <template #unchecked>
        No arrow
      </template>
    </n-switch>
    <n-carousel
      :direction="direction"
      :show-arrow="showArrow"
      :dot-type="type"
      :dot-placement="placement"
      style="height: 240px"
    >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
  </n-space>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

## 垂直

```vue
<template>
  <n-carousel
    direction="vertical"
    dot-placement="right"
    show-arrow
    style="width: 100%; height: 240px"
  >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 相邻间距

```vue
<template>
  <n-carousel :space-between="20" draggable>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 每屏显示数量

需要注意，`slides-per-view` 属性会与 `loop` 冲突，如果你需要自定义每屏显示数量，那么 `loop` 功能将被禁用。

```vue
<template>
  <n-carousel :slides-per-view="3" :space-between="20" :loop="false" draggable>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 自动每屏显示数量

```vue
<template>
  <n-carousel
    slides-per-view="auto"
    :space-between="20"
    :loop="false"
    draggable
  >
    <n-carousel-item style="width: 60%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 20%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 40%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 10%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 居中

设定 `centered-slides` 来将所有的 `slide` 居中显示，这仅在 `effect` 为 `slide` 以及 `card` 的时候有用。

```vue
<template>
  <n-carousel
    :space-between="30"
    :loop="false"
    slides-per-view="auto"
    centered-slides
    draggable
  >
    <n-carousel-item style="width: 30%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 20%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 30%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item style="width: 40%">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 过渡效果

如果你想要自定义过渡效果，可以使用 `transition-props`，并把 `effect` 设置为 `custom`。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const effectRef = ref<'slide' | 'fade' | 'card'>('slide')
const isCardRef = computed(() => effectRef.value === 'card')
const isCard = isCardRef
const myEffect = effectRef
const effects = ['slide', 'fade', 'card']
</script>

<template>
  <n-radio-group v-model:value="myEffect" style="margin-bottom: 10px">
    <n-radio-button v-for="effect in effects" :key="effect" :value="effect">
      {{ effect }}
    </n-radio-button>
  </n-radio-group>
  <n-carousel
    :key="myEffect"
    :effect="myEffect"
    :centered-slides="isCard"
    :slides-per-view="isCard ? 'auto' : 1"
    draggable
    style="height: 240px"
  >
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

## 自定义过渡效果

如果你想要自定义过渡效果，可以使用 `transition-props`，并把 `effect` 设置为 `'custom'`，具体配置见[官方文档](https://v3.cn.vuejs.org/api/built-in-components.html#transition)。

```vue
<template>
  <n-carousel
    effect="custom"
    :transition-props="{ name: 'creative' }"
    show-arrow
    style="width: 100%; height: 240px"
  >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>
```

## 鼠标经过指示点切换轮播图

设定 `trigger` 为 `hover` 鼠标经过指示点时触发切换。

```vue
<template>
  <n-carousel trigger="hover">
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 按键控制

是否通过按键切换轮播图，只有焦点在 Dots 上时才有效。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const directionRef = ref<'horizontal' | 'vertical'>('horizontal')
const direction = directionRef
const directions = ['horizontal', 'vertical']
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="direction">
      <n-radio-button
        v-for="_direction in directions"
        :key="_direction"
        :value="_direction"
      >
        {{ _direction }}
      </n-radio-button>
    </n-radio-group>
    <n-carousel
      keyboard
      :direction="direction"
      :dot-placement="direction === 'vertical' ? 'right' : 'bottom'"
      style="height: 240px"
    >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel>
  </n-space>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 鼠标滚轮控制

```vue
<template>
  <n-carousel
    direction="vertical"
    dot-placement="right"
    mousewheel
    style="width: 100%; height: 240px"
  >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 模拟拖拽

轮播图会默认启用 `Touch` 事件模拟，如果你需要轮播图响应鼠标拖拽，可以使用 `draggable` 属性。

```vue
<template>
  <n-carousel draggable>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
```

## 自定义箭头以及控制点

```vue
<script lang="ts" setup>
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
</script>

<template>
  <n-carousel show-arrow autoplay>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
    <template #arrow="{ prev, next }">
      <div class="custom-arrow">
        <button type="button" class="custom-arrow--left" @click="prev">
          <n-icon><ArrowBack /></n-icon>
        </button>
        <button type="button" class="custom-arrow--right" @click="next">
          <n-icon><ArrowForward /></n-icon>
        </button>
      </div>
    </template>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition:
    width 0.3s,
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
```

## 自定义卡片效果

你可以使用 `next-slide-style` 和 `prev-slide-style` 来调整前后卡片的比例。

```vue
<template>
  <n-carousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    style="height: 240px"
    :show-dots="false"
  >
    <n-carousel-item :style="{ width: '60%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      >
    </n-carousel-item>
    <n-carousel-item :style="{ width: '60%' }">
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      >
    </n-carousel-item>
  </n-carousel>
</template>

<style>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```

## 自定义指示点

```vue
<template>
  <n-carousel autoplay>
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    >
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    >
    <template #dots="{ total, currentIndex }">
      <span class="custom-dots"> {{ currentIndex + 1 }} / {{ total }} </span>
    </template>
  </n-carousel>
</template>

<style>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-dots {
  font-size: 12px;
  transform: translateY(5px);
}
</style>
```

