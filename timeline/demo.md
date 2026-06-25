# 时间线 Timeline - 演示示例

## 基础用法

```vue
<template>
  <n-timeline>
    <n-timeline-item content="啊" />
    <n-timeline-item
      type="success"
      title="成功"
      content="哪里成功"
      time="2018-04-03 20:46"
    />
    <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
    <n-timeline-item
      type="warning"
      title="警告"
      content="哪里警告"
      time="2018-04-03 20:46"
    />
    <n-timeline-item
      type="info"
      title="信息"
      content="是的"
      time="2018-04-03 20:46"
      line-type="dashed"
    />
    <n-timeline-item content="啊" />
  </n-timeline>
</template>
```

## 大小

有 `medium`、`large` 大小

```vue
<template>
  <n-timeline size="large">
    <n-timeline-item content="啊" />
    <n-timeline-item
      type="success"
      title="成功"
      content="哪里成功"
      time="2018-04-03 20:46"
    />
    <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46" />
    <n-timeline-item
      type="warning"
      title="警告"
      content="哪里警告"
      time="2018-04-03 20:46"
    />
    <n-timeline-item
      type="info"
      title="信息"
      content="是的"
      time="2018-04-03 20:46"
    />
  </n-timeline>
</template>
```

## 方向

左，<span style="display: inline-block; transform: scaleX(-1);">右</span>

```vue
<template>
  <n-timeline item-placement="right">
    <n-timeline-item content="啊" />
    <n-timeline-item
      type="success"
      title="成功"
      content="哪里成功"
      time="2018-04-03 20:46"
    />
    <n-timeline-item type="error" content="哪里失败" time="2018-04-03 20:46" />
    <n-timeline-item
      type="warning"
      title="警告"
      content="哪里警告"
      time="2018-04-03 20:46"
    />
    <n-timeline-item
      type="info"
      title="信息"
      content="是的"
      time="2018-04-03 20:46"
    />
  </n-timeline>
</template>
```

## 水平

```vue
<template>
  <div style="overflow: auto">
    <n-timeline horizontal>
      <n-timeline-item content="啊" />
      <n-timeline-item
        type="success"
        title="成功"
        content="哪里成功"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="error"
        content="哪里失败"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="warning"
        title="警告"
        content="哪里警告"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="info"
        title="信息"
        content="是的"
        time="2018-04-03 20:46"
      />
    </n-timeline>
  </div>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-timeline :icon-size="20">
    <n-timeline-item color="grey" content="啊">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="success"
      title="成功"
      content="哪里成功"
      time="2018-04-03 20:46"
    >
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item type="error" content="哪里错误" time="2018-04-03 20:46">
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="warning"
      title="警告"
      content="哪里警告"
      time="2018-04-03 20:46"
    >
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
    </n-timeline-item>
    <n-timeline-item
      type="info"
      title="信息"
      content="是的"
      time="2018-04-03 20:46"
    >
      <template #icon>
        <n-icon>
          <CashIcon />
        </n-icon>
      </template>
    </n-timeline-item>
  </n-timeline>
</template>
```

