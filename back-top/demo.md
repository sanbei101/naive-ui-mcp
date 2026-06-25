# 回到顶部 Back Top - 演示示例

## 基础用法

BackTop 会找到首个可滚动的祖先元素并且监听它的滚动事件。

```vue
<template>
  <n-back-top :right="100" />
</template>
```

## 可视高度

可以改变 Back Top 的可视高度。

```vue
<template>
  <n-back-top :bottom="100" :visibility-height="300">
    <div
      style="
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
      "
    >
      可视高度：300px
    </div>
  </n-back-top>
</template>
```

## 改变位置

例如：right 40px & bottom 160px。

```vue
<template>
  <n-back-top :right="40" :bottom="160">
    <div
      style="
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
      "
    >
      改变位置
    </div>
  </n-back-top>
</template>
```

## 监听目标

你可以设定监听哪个元素来触发 Back Top。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const scrollContainer = ref<HTMLElement | undefined>(undefined)

const target = () => scrollContainer.value
</script>

<template>
  <n-back-top :listen-to="target" :bottom="220" :visibility-height="10">
    <div
      style="
        width: 200px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
      "
    >
      指定目标
    </div>
  </n-back-top>
  <div
    ref="scrollContainer"
    style="overflow: auto; height: 72px; line-height: 1.5"
  >
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
    这块应该写一个有意思的笑话。<br>
  </div>
</template>
```

