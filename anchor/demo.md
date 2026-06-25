# 侧边导航 Anchor - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const showRail = ref(true)
const showBackground = ref(true)
</script>

<template>
  <n-space style="margin-bottom: 12px">
    <n-switch v-model:value="showRail" /> 展示轨道
    <n-switch v-model:value="showBackground" /> 展示背景
  </n-space>
  <n-anchor :show-rail="showRail" :show-background="showBackground">
    <n-anchor-link title="演示" href="#演示">
      <n-anchor-link title="基础用法" href="#basic.vue" />
      <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
      <n-anchor-link title="固定" href="#affix.vue" />
      <n-anchor-link title="滚动到" href="#scrollto.vue" />
    </n-anchor-link>
    <n-anchor-link title="API" href="#API" />
  </n-anchor>
</template>
```

## 忽略间隔

```vue
<template>
  <div style="height: 200px">
    <n-row :gutter="12">
      <n-col :span="6">
        <div />
      </n-col>
      <n-col :span="6">
        <div />
      </n-col>
      <n-col :span="6">
        <div style="width: 160px; float: right">
          <n-anchor
            affix
            :trigger-top="24"
            :top="88"
            style="z-index: 1"
            ignore-gap
          >
            <n-anchor-link title="演示" href="#演示">
              <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
              <n-anchor-link title="固定" href="#affix.vue" />
              <n-anchor-link title="滚动到" href="#scrollto.vue" />
            </n-anchor-link>
            <n-anchor-link title="API" href="#API" />
          </n-anchor>
        </div>
      </n-col>
      <n-col :span="6">
        <div style="width: 160px; float: right">
          <n-anchor affix :trigger-top="24" :top="88" style="z-index: 1">
            <n-anchor-link title="演示" href="#演示">
              <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
              <n-anchor-link title="固定" href="#affix.vue" />
              <n-anchor-link title="滚动到" href="#scrollto.vue" />
            </n-anchor-link>
            <n-anchor-link title="API" href="#API" />
          </n-anchor>
        </div>
      </n-col>
    </n-row>
  </div>
</template>
```

## 固定

在固定模式下，Anchor 还接受和 Affix 一样的 Props。

```vue
<template>
  <div style="height: 200px">
    <n-anchor
      affix
      listen-to=".document-scroll-container"
      :trigger-top="24"
      :top="88"
      style="z-index: 1"
      :bound="24"
    >
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础用法" href="#basic.vue" />
        <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
        <n-anchor-link title="固定" href="#affix.vue" />
        <n-anchor-link title="滚动到" href="#scrollto.vue" />
      </n-anchor-link>
      <n-anchor-link title="API" href="#API" />
    </n-anchor>
  </div>
</template>
```

## 滚动到

```vue
<script lang="ts" setup>
import type { AnchorInst } from 'naive-ui'
import { ref } from 'vue'

const anchorRef = ref<AnchorInst | null>(null)
function scrollTo(href: string) {
  anchorRef.value?.scrollTo(href)
}
</script>

<template>
  <div style="height: 200px; padding-left: 200px">
    <n-anchor
      ref="anchorRef"
      affix
      :trigger-top="24"
      :top="88"
      :bound="24"
      style="z-index: 1"
    >
      <n-anchor-link title="演示" href="#演示">
        <n-anchor-link title="基础用法" href="#basic.vue" />
        <n-anchor-link title="忽略间隔" href="#ignore-gap.vue" />
        <n-anchor-link title="固定" href="#affix.vue" />
        <n-anchor-link title="滚动到" href="#scrollto.vue" />
      </n-anchor-link>
      <n-anchor-link title="API" href="#API" />
    </n-anchor>
  </div>
  <n-space style="padding-left: 400px">
    <n-button @click="scrollTo('#basic.vue')">
      基础用法
    </n-button>
    <n-button @click="scrollTo('#affix.vue')">
      固定
    </n-button>
  </n-space>
</template>
```

