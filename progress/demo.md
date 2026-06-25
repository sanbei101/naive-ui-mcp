# 进度 Progress - 演示示例

## 圈

进度可以是个圈，它支持 `default`、`info`、`success`、`warning` 和 `error` 的 `status`。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)

function add() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 0
  }
}

function minus() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 100
  }
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-progress type="circle" :percentage="percentage" />
      <n-progress type="circle" status="info" :percentage="percentage" />
      <n-progress type="circle" status="success" :percentage="percentage" />
      <n-progress type="circle" status="warning" :percentage="percentage" />
      <n-progress type="circle" status="error" :percentage="percentage" />
    </n-space>
    <n-space>
      <n-button @click="minus">
        减 10%
      </n-button>
      <n-button @click="add">
        加 10%
      </n-button>
    </n-space>
  </n-space>
</template>
```

## 线型

事实上线型的进度条不需要这么多种样子，但是既然 UI 画了，我也就实现了。它支持 `default`、`info`、`success`、`warning` 和 `error` 的 `status`。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)

function add() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 0
  }
}

function minus() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 100
  }
}
</script>

<template>
  <n-space vertical>
    <n-progress type="line" :percentage="percentage" :show-indicator="false" />
    <n-progress type="line" :percentage="percentage" />
    <n-progress
      type="line"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="info"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="info" :percentage="percentage" />
    <n-progress
      type="line"
      status="info"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="success"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="success" :percentage="percentage" />
    <n-progress
      type="line"
      status="success"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="warning"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="warning" :percentage="percentage" />
    <n-progress
      type="line"
      status="warning"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-progress
      type="line"
      status="error"
      :percentage="percentage"
      :show-indicator="false"
    />
    <n-progress type="line" status="error" :percentage="percentage" />
    <n-progress
      type="line"
      status="error"
      :percentage="percentage"
      indicator-placement="inside"
    />
    <n-space>
      <n-button @click="minus">
        减 10%
      </n-button>
      <n-button @click="add">
        加 10%
      </n-button>
    </n-space>
  </n-space>
</template>
```

## 偏移

环状的进度可以偏移。

```vue
<template>
  <n-progress type="circle" :percentage="80" :offset-degree="120" />
</template>
```

## 好几个圈

或许你们的产品经理想要这种效果。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const percentage = ref(0)

function add() {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 0
  }
}

function minus() {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 100
  }
}
</script>

<template>
  <n-space vertical>
    <n-el>
      <n-progress
        type="multiple-circle"
        :stroke-width="6"
        :circle-gap="0.5"
        :percentage="[
          percentage,
          (percentage + 10) % 100,
          (percentage + 20) % 100,
          (percentage + 30) % 100,
        ]"
        :color="[
          'var(--info-color)',
          'var(--success-color)',
          'var(--warning-color)',
          'var(--error-color)',
        ]"
        :rail-style="[
          { stroke: 'var(--info-color)', opacity: 0.3 },
          { stroke: 'var(--success-color)', opacity: 0.3 },
          { stroke: 'var(--warning-color)', opacity: 0.3 },
          { stroke: 'var(--error-color)', opacity: 0.3 },
        ]"
      >
        <div style="text-align: center">
          圈圈赛跑！
        </div>
      </n-progress>
    </n-el>
    <n-space>
      <n-button @click="minus">
        减 10%
      </n-button>
      <n-button @click="add">
        加 10%
      </n-button>
    </n-space>
  </n-space>
</template>
```

## 仪表盘

可能你还需要`gap-degree` 和 `gap-offset-degree` 两个属性来自定义仪表盘。

```vue
<template>
  <n-space>
    <n-progress type="dashboard" gap-position="bottom" :percentage="80" />
    <n-progress
      type="dashboard"
      :gap-offset-degree="120"
      :gap-degree="120"
      :percentage="80"
    />
  </n-space>
</template>
```

## 自定义指示标

你可以自定义指示标内容。

```vue
<template>
  <n-progress type="circle" :percentage="20">
    <span style="text-align: center">20% 很小</span>
  </n-progress>
  <n-progress type="line" status="success" :percentage="20">
    别在这里写太长的内容，不然线会很短
  </n-progress>
</template>
```

## 自定义颜色

如果你觉得内置的颜色不行 🙅‍♂️。

```vue
<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'
import { changeColor } from 'seemly'

const themeVars = useThemeVars()
</script>

<template>
  <n-progress
    style="margin: 0 8px 12px 0"
    type="circle"
    :percentage="20"
    :color="themeVars.successColor"
    :rail-color="changeColor(themeVars.successColor, { alpha: 0.2 })"
    :indicator-text-color="themeVars.successColor"
  />
  <n-progress
    style="width: 120px; margin: 0 8px 12px 0"
    type="multiple-circle"
    :stroke-width="10"
    :circle-gap="10"
    :percentage="[50, 25]"
    :color="[themeVars.infoColor, themeVars.infoColor]"
    :rail-color="[
      changeColor(themeVars.infoColor, { alpha: 0.2 }),
      changeColor(themeVars.infoColor, { alpha: 0.2 }),
    ]"
  />
  <n-progress
    type="line"
    indicator-placement="inside"
    :color="themeVars.errorColor"
    :rail-color="changeColor(themeVars.errorColor, { alpha: 0.2 })"
    :percentage="20"
  />
  <n-progress
    type="line"
    :color="themeVars.warningColor"
    :rail-color="changeColor(themeVars.warningColor, { alpha: 0.2 })"
    :percentage="20"
    :indicator-text-color="themeVars.warningColor"
  />
</template>
```

## 不要指示标

不要也可以。

```vue
<template>
  <n-progress
    style="margin: 0 8px 12px 0"
    type="circle"
    :show-indicator="false"
    status="success"
    :percentage="20"
  />
  <n-progress
    style="width: 120px; margin: 0 8px 12px 0"
    type="multiple-circle"
    :percentage="[50, 25]"
    :show-indicator="false"
  />
  <n-progress
    type="line"
    :show-indicator="false"
    status="success"
    :percentage="20"
  />
</template>
```

## 高度 & 圆角

如果你对高度和圆角不满意。

```vue
<template>
  <n-space vertical>
    <n-progress
      type="line"
      :percentage="50"
      :height="24"
      :border-radius="4"
      :fill-border-radius="0"
    />
    <n-progress
      type="line"
      status="error"
      :percentage="50"
      :height="24"
      border-radius="12px 12px 0 0"
      fill-border-radius="12px 0 12px 12px"
    >
      一种艺术
    </n-progress>
  </n-space>
</template>
```

## 进行时

```vue
<template>
  <n-progress
    type="line"
    :percentage="60"
    indicator-placement="inside"
    processing
  />
</template>
```

## 渐变色

你或许想要不用颜色的组合。

```vue
<script lang="ts" setup>
import { useThemeVars } from 'naive-ui'
import { changeColor } from 'seemly'
import { ref } from 'vue'

const percentage = ref(80)
const themeVars = useThemeVars()
</script>

<template>
  <n-flex vertical>
    <n-progress
      type="line"
      :percentage="percentage"
      :show-indicator="false"
      :color="{ stops: ['white', 'pink'] }"
    />
    <n-flex>
      <n-progress
        type="circle"
        :percentage="percentage"
        :color="{ stops: ['#E3F2FD', '#2080f0'] }"
      />
      <n-progress
        style="width: 120px; margin: 0 8px 12px 0"
        type="multiple-circle"
        :stroke-width="10"
        :circle-gap="10"
        :percentage="[80, 70]"
        :color="[
          { stops: ['white', '#18a058'] },
          { stops: ['#E3F2FD', '#2080f0'] },
        ]"
        :rail-color="[
          changeColor(themeVars.infoColor, { alpha: 0.2 }),
          changeColor(themeVars.infoColor, { alpha: 0.2 }),
        ]"
      />
    </n-flex>
  </n-flex>
</template>
```

