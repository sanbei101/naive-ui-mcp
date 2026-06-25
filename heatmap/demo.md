# 热力图 Heatmap - 演示示例

## 基础用法

每个方块都是一份坚持，空白也是生活的节拍。

```vue
<script setup lang="ts">
import type { HeatmapFirstDayOfWeek } from 'naive-ui'
import { heatmapMockData } from 'naive-ui'
import { computed, ref } from 'vue'

const value = ref<'recent' | number>('recent')
const dateRanges = [
  {
    value: 'recent',
    label: '最近一年'
  },
  {
    value: 2025,
    label: 2025
  },
  {
    value: 2024,
    label: 2024
  },
  {
    value: 2023,
    label: 2023
  },
  {
    value: 2022,
    label: 2022
  }
].map((r) => {
  return {
    ...r,
    label: r.label.toString()
  }
}) as {
  value: 'recent' | number
  label: string
}[]

const yearData = computed(() => {
  return heatmapMockData(value.value)
})

const dataStats = computed(() => {
  const data = yearData.value
  const total = data.length
  const zeros = data.filter(d => d.value === 0).length
  const maxValue = Math.max(...data.map(d => d.value ?? 0))
  const avgValue
    = Math.round(
      (data.reduce((sum, d) => sum + (d.value ?? 0), 0) / total) * 100
    ) / 100

  return {
    total,
    zeros,
    maxValue,
    avgValue,
    zeroPercent: Math.round((zeros / total) * 100)
  }
})

const showWeekLabels = ref(true)
const showMonthLabels = ref(true)
const showColorIndicator = ref(true)
const loading = ref(false)
const firstDayOfWeek = ref<HeatmapFirstDayOfWeek>(0)
const size = ref<'small' | 'medium' | 'large'>('medium')

const weekStartOptions = [
  { label: '周一', value: 0 },
  { label: '周二', value: 1 },
  { label: '周三', value: 2 },
  { label: '周四', value: 3 },
  { label: '周五', value: 4 },
  { label: '周六', value: 5 },
  { label: '周日', value: 6 }
]

const sizeOptions = [
  { label: '小', value: 'small' },
  { label: '中', value: 'medium' },
  { label: '大', value: 'large' }
]
</script>

<template>
  <n-flex vertical>
    <n-flex align="center" justify="start">
      <n-switch v-model:value="showWeekLabels">
        <template #checked>
          显示周标签
        </template>
        <template #unchecked>
          隐藏周标签
        </template>
      </n-switch>
      <n-switch v-model:value="showMonthLabels">
        <template #checked>
          显示月份标签
        </template>
        <template #unchecked>
          隐藏月份标签
        </template>
      </n-switch>
      <n-switch v-model:value="showColorIndicator">
        <template #checked>
          显示颜色指示器
        </template>
        <template #unchecked>
          隐藏颜色指示器
        </template>
      </n-switch>
      <n-switch v-model:value="loading">
        <template #checked>
          加载中
        </template>
        <template #unchecked>
          正常显示
        </template>
      </n-switch>
      <n-divider vertical />
      <span>周开始日：</span>
      <n-select
        v-model:value="firstDayOfWeek"
        :options="weekStartOptions"
        style="width: 120px"
      />
      <n-divider vertical />
    </n-flex>
    <n-flex>
      <n-radio-group v-model:value="size" name="size">
        <n-radio-button
          v-for="option in sizeOptions"
          :key="option.value"
          :value="option.value"
          :label="option.label"
        />
      </n-radio-group>
      <n-divider vertical />
      <n-radio-group v-model:value="value" name="year">
        <n-radio-button
          v-for="range in dateRanges"
          :key="range.value"
          :value="range.value"
          :label="range.label"
        />
      </n-radio-group>
    </n-flex>
    <n-alert type="success" title="数据统计">
      <n-flex>
        <n-tag round type="info">
          总天数: {{ dataStats.total }}
        </n-tag>
        <n-tag round type="warning">
          空白天: {{ dataStats.zeros }} ({{ dataStats.zeroPercent }}%)
        </n-tag>
        <n-tag round type="success">
          最大值: {{ dataStats.maxValue }}
        </n-tag>
        <n-tag round type="primary">
          平均值: {{ dataStats.avgValue }}
        </n-tag>
      </n-flex>
    </n-alert>
    <n-scrollbar x-scrollable style="max-width: 100%">
      <n-heatmap
        :data="yearData"
        :loading-data="yearData"
        :first-day-of-week="firstDayOfWeek"
        :loading="loading"
        :size="size"
        :show-week-labels="showWeekLabels"
        :show-month-labels="showMonthLabels"
        :show-color-indicator="showColorIndicator"
        :fill-calendar-leading="value === 'recent'"
      />
    </n-scrollbar>
  </n-flex>
</template>
```

## 内置主题

使用 `color-theme` 属性应用内置的颜色主题。可用主题：`green`、`blue`、`orange`、`purple`、`red`。

```vue
<script setup lang="ts">
import { heatmapMockData } from 'naive-ui'

const data = heatmapMockData()

const themes = [
  { name: '绿色', value: 'green' },
  { name: '蓝色', value: 'blue' },
  { name: '橙色', value: 'orange' },
  { name: '紫色', value: 'purple' },
  { name: '红色', value: 'red' }
] as const
</script>

<template>
  <n-flex vertical size="large">
    <div v-for="theme in themes" :key="theme.value">
      <n-divider title-placement="left">
        {{ theme.name }}
      </n-divider>
      <n-heatmap :data="data" :color-theme="theme.value" />
    </div>
  </n-flex>
</template>
```

## 自定义颜色

每一种颜色都有它的温度。

通过 `active-colors` 和 `minimum-color` 属性自定义热力图的颜色。

`active-colors` 是一个颜色数组，按从浅到深的顺序排列，优先级高于内置主题。`minimum-color` 用于设置最小值的颜色。

```vue
<script setup lang="ts">
import { heatmapMockData } from 'naive-ui'
import { ref } from 'vue'

const data = heatmapMockData()

const customActiveColors = ref(['#9be9a8', '#40c463', '#30a14e', '#216e39'])

const minimumColor = ref('#ebedf0')

const colorLabels = ['低活跃', '中活跃', '高活跃', '极高活跃']
</script>

<template>
  <n-flex justify="space-around">
    <div>
      <n-flex vertical align="center">
        <span>最小颜色</span>
        <n-color-picker
          v-model:value="minimumColor"
          :show-alpha="false"
          size="small"
          :modes="['hex']"
          style="width: 100px"
        />
      </n-flex>
    </div>
    <div v-for="(_, index) in customActiveColors" :key="index">
      <n-flex vertical align="center">
        <span>{{ colorLabels[index] }}</span>
        <n-color-picker
          v-model:value="customActiveColors[index]"
          :show-alpha="false"
          size="small"
          :modes="['hex']"
          style="width: 100px"
        />
      </n-flex>
    </div>
  </n-flex>
  <n-divider />
  <n-scrollbar x-scrollable style="max-width: 100%">
    <n-heatmap
      :data="data"
      :active-colors="customActiveColors"
      :minimum-color="minimumColor"
    />
  </n-scrollbar>
</template>
```

## 插槽用法

自定义 footer 区域，支持 `footer` 插槽和 `indicator` 插槽。同时支持自定义 `tooltip` 内容，以及指示器文本插槽。

```vue
<script setup lang="ts">
import { heatmapMockData } from 'naive-ui'

const yearData = heatmapMockData()
</script>

<template>
  <n-flex vertical>
    <n-scrollbar x-scrollable style="max-width: 100%">
      <n-heatmap :data="yearData" :show-color-indicator="false">
        <template #footer>
          <n-text depth="3">
            左侧信息插槽
          </n-text>
        </template>
        <template #indicator>
          <n-text depth="3">
            右侧指示器插槽
          </n-text>
        </template>
        <template #tooltip="{ timestamp: date, value: tooltipValue }">
          <div>
            <div>
              <strong>日期:</strong> {{ new Date(date).toLocaleDateString() }}
            </div>
            <div><strong>数值:</strong> {{ tooltipValue ?? 0 }}</div>
            <div v-if="tooltipValue != null && tooltipValue > 5">
              <n-tag type="success" size="small">
                高活跃度
              </n-tag>
            </div>
          </div>
        </template>
      </n-heatmap>
    </n-scrollbar>
    <n-divider />
    <h4>自定义指示器文本</h4>
    <n-scrollbar x-scrollable style="max-width: 100%">
      <n-heatmap :data="yearData">
        <template #indicator-leading-text>
          <n-text depth="3" style="font-style: italic">
            较少
          </n-text>
        </template>
        <template #indicator-trailing-text>
          <n-text depth="3" style="font-style: italic">
            较多
          </n-text>
        </template>
      </n-heatmap>
    </n-scrollbar>
    <n-divider />
    <h4>自定义 Tooltip 配置</h4>
    <n-scrollbar x-scrollable style="max-width: 100%">
      <n-heatmap
        :data="yearData"
        unit="activities"
        :tooltip="{ placement: 'bottom', delay: 500 }"
      >
        <template #footer>
          <n-text depth="3">
            底部显示 tooltip，延迟 500ms
          </n-text>
        </template>
        <template #tooltip="{ timestamp: date, value: tooltipValue }">
          活动详情<br>
          <div>{{ new Date(date).toLocaleDateString() }}</div>
          <div>{{ tooltipValue ?? 0 }}</div>
        </template>
      </n-heatmap>
    </n-scrollbar>
  </n-flex>
</template>
```

