# 栅格 Grid - 演示示例

## 基础用法

`n-grid-item` 可以被简写为 `n-gi`。

```vue
<template>
  <n-grid x-gap="12" :cols="4">
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
  </n-grid>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 间隔

设定水平、垂直间隔。

```vue
<template>
  <n-grid :x-gap="12" :y-gap="8" :cols="4">
    <n-grid-item>
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item>
      <div class="green" />
    </n-grid-item>
    <n-grid-item>
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item>
      <div class="green" />
    </n-grid-item>
    <n-grid-item>
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item>
      <div class="green" />
    </n-grid-item>
    <n-grid-item>
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item>
      <div class="green" />
    </n-grid-item>
  </n-grid>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 偏移

```vue
<template>
  <n-grid :x-gap="12" :cols="4">
    <n-grid-item :offset="1">
      <div class="light-green" />
    </n-grid-item>
    <n-grid-item :offset="1">
      <div class="green" />
    </n-grid-item>
  </n-grid>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 响应式列数

你可以在 `n-config-provider` 定制 [breakpoints](config-provider#API)。

```vue
<template>
  <n-divider>Self 响应式</n-divider>
  <n-grid cols="2 400:4 600:6">
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        4
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        5
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        6
      </div>
    </n-grid-item>
  </n-grid>
  <n-divider>Screen 响应式</n-divider>
  <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
    <n-grid-item>
      <div class="light-green">
        1
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        4
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        5
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        6
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="light-green">
        7
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 响应式栅格项

当 `span` 为 0 的时候，`n-grid-item` 不会被显示。

```vue
<template>
  <n-divider>Self 响应式</n-divider>
  <n-grid cols="4" item-responsive>
    <n-grid-item span="0 400:1 600:2 800:3">
      <div class="light-green">
        0～400px：不显示<br>
        400～600px：占据空间 1<br>
        600～800px：占据空间 2<br>
        800px 以上：占据空间 3
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
  </n-grid>
  <n-divider>Screen 响应式</n-divider>
  <n-grid cols="4" item-responsive responsive="screen">
    <n-grid-item span="0 m:1 l:2">
      <div class="light-green">
        m 以下：不显示<br>
        m 到 l：占据空间 1<br>
        l 以上：占据空间 2
      </div>
    </n-grid-item>
    <n-grid-item>
      <div class="green">
        2
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style>
.light-green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

## 折叠

折叠在响应式布局下依然生效。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const gridCollapsed = ref(false)
const gridCollapsedRows = ref(1)
const gridItemCount = ref(4)
const showSuffix = ref(true)
</script>

<template>
  <n-grid :cols="2">
    <n-form-item-gi label="数量">
      <n-input-number v-model:value="gridItemCount" :min="1" />
    </n-form-item-gi>
    <n-form-item-gi label="折叠后行数">
      <n-input-number v-model:value="gridCollapsedRows" :min="1" />
    </n-form-item-gi>
    <n-form-item-gi label="打开后缀节点">
      <n-switch v-model:value="showSuffix" />
    </n-form-item-gi>
    <n-form-item-gi label="折叠栅格">
      <n-switch v-model:value="gridCollapsed" />
    </n-form-item-gi>
  </n-grid>
  <n-grid
    :cols="5"
    :collapsed="gridCollapsed"
    :collapsed-rows="gridCollapsedRows"
  >
    <n-gi
      v-for="i in gridItemCount"
      :key="i"
      :class="i % 2 ? 'green' : 'light-green'"
    >
      {{ i }}
    </n-gi>
    <n-gi v-if="showSuffix" suffix class="suffix" #="{ overflow }">
      {{ overflow ? '存在溢出' : '不存在溢出' }}
    </n-gi>
  </n-grid>
</template>

<style>
.suffix {
  height: 108px;
  border: 1px solid rgba(0, 128, 0, 0.36);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## 避免 SSR Layout Shift

默认情况下，`n-grid` 会基于窗口宽度和容器宽度计算栅格内容，这会有两个副作用：在进行 SSR 的时候可能会出现内容闪烁；渲染时会出现 Layout Shift，这会略微影响渲染性能。

但是如果你不需要响应式功能，你可以通过 `layout-shift-disabled` 规避删格的副作用。

需要注意的是，打开这个选项会禁用 `n-grid` 的一切响应式功能和 `n-grid-item` 的 `suffix`、`offset`。

```vue
<template>
  <n-grid :x-gap="12" :y-gap="12" :cols="4" layout-shift-disabled>
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi :span="2">
      <div class="green" />
    </n-gi>
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <div class="green" />
    </n-gi>
  </n-grid>
</template>

<style>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
```

