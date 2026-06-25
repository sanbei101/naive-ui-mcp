# 警示信息 Alert - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { IosAirplane } from '@vicons/ionicons4'
</script>

<template>
  <n-space vertical :size="12">
    <n-alert title="Default 类型" type="default">
      <template #icon>
        <n-icon>
          <IosAirplane />
        </n-icon>
      </template>
      Gee it's good to be back home
    </n-alert>
    <n-alert title="Info 类型" type="info">
      Gee it's good to be back home
    </n-alert>
    <n-alert title="Success 类型" type="success">
      Leave it till tomorrow to unpack my case
    </n-alert>
    <n-alert title="Warning 类型" type="warning">
      Honey disconnect the phone
    </n-alert>
    <n-alert title="Error 类型" type="error">
      I'm back in the U.S.S.R.
    </n-alert>
  </n-space>
</template>
```

## 无边框

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const bordered = ref(true)
</script>

<template>
  <n-space vertical :size="12">
    <n-switch v-model:value="bordered" />
    <n-alert title="可以没有边框" type="info" :bordered="bordered">
      Gee it's good to be back home
    </n-alert>
  </n-space>
</template>
```

## 可以关掉

```vue
<script lang="ts" setup>
import { IosAirplane } from '@vicons/ionicons4'
</script>

<template>
  <n-alert title="Default 类型" type="default" closable>
    <template #icon>
      <n-icon>
        <IosAirplane />
      </n-icon>
    </template>
    Gee it's good to be back home
  </n-alert>
  <n-alert title="Info 类型" type="info" closable>
    Gee it's good to be back home
  </n-alert>
  <n-alert title="Success 类型" type="success" closable>
    Leave it till tomorrow to unpack my case
  </n-alert>
  <n-alert title="Warning 类型" type="warning" closable>
    Honey disconnect the phone
  </n-alert>
  <n-alert title="Error 类型" type="error" closable>
    I'm back in the U.S.S.R.
  </n-alert>
</template>

<style>
.n-alert:not(:last-child) {
  margin-bottom: 12px;
}
</style>
```

## 图标

```vue
<script lang="ts" setup>
import { IosAirplane } from '@vicons/ionicons4'
</script>

<template>
  <n-alert title="Back in the U.S.S.R.">
    <template #icon>
      <n-icon>
        <IosAirplane />
      </n-icon>
    </template>
    Well the Ukraine girls really knock me out<br>
    They leave the West behind<br>
    And Moscow girls make me sing and shout<br>
    That Georgia's always on my mind<br>
    Aw come on!
  </n-alert>
</template>
```

## 没有图标

```vue
<template>
  <n-alert :show-icon="false">
    Yeah I'm back in the U.S.S.R.<br>
    You don't know how lucky you are boys
  </n-alert>
</template>
```

## 跑马灯

你可以配合 `n-marquee` 实现轮播的效果。

```vue
<template>
  <n-alert type="error" title="呵呵">
    <n-marquee>
      <div style="margin-right: 64px">
        测试环境又挂了。
      </div>
    </n-marquee>
  </n-alert>
</template>
```

