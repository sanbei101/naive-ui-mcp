# 折叠面板 Collapse - 演示示例

## 基础

```vue
<template>
  <n-collapse>
    <n-collapse-item title="青铜" name="1">
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2">
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 箭头位置

使用 `arrow-placement` 来设定箭头的位置。

```vue
<template>
  <n-collapse arrow-placement="right">
    <n-collapse-item title="青铜" name="1">
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2">
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 手风琴

像一个手风琴

```vue
<template>
  <n-collapse default-expanded-names="1" accordion>
    <n-collapse-item title="动态类型" name="1">
      <div>Python</div>
    </n-collapse-item>
    <n-collapse-item title="静态类型" name="2">
      <div>Java</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 嵌套

可以嵌套。

```vue
<template>
  <n-collapse>
    <n-collapse-item title="绿灯" name="1">
      <n-collapse>
        <n-collapse-item title="常亮" name="1">
          <div>通过</div>
        </n-collapse-item>
        <n-collapse-item title="闪烁" name="2">
          <div>快速通过</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
    <n-collapse-item title="红灯" name="2">
      <div>停</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 显示指令

设定 `display-directive` 为 `if` 或 `show` 来控制 `n-collapse-item` 里面的 DOM 是否保持。

```vue
<template>
  <n-collapse display-directive="show">
    <n-collapse-item title="绿灯" name="1">
      <n-collapse>
        <n-collapse-item title="常亮" name="1">
          <div>通过</div>
        </n-collapse-item>
        <n-collapse-item title="闪烁" name="2">
          <div>快速通过</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
    <n-collapse-item title="红灯" name="2">
      <div>停</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 点击标题

```vue
<script lang="ts" setup>
import type { CollapseProps } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()
const handleItemHeaderClick: CollapseProps['onItemHeaderClick'] = ({
  name,
  expanded
}) => {
  message.info(`Name: ${name}, Expanded: ${expanded}`)
}
</script>

<template>
  <n-collapse @item-header-click="handleItemHeaderClick">
    <n-collapse-item name="1">
      <template #header>
        青铜
      </template>
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item name="2">
      <template #header>
        白银
      </template>
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item name="3">
      <template #header>
        黄金
      </template>
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 自定义图标

```vue
<script lang="ts" setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-collapse>
    <template #header-extra>
      <n-icon><CashIcon /></n-icon>
    </template>
    <template #arrow>
      <n-icon>
        <CashIcon />
      </n-icon>
    </template>
    <n-collapse-item title="青铜" name="1">
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2">
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 默认展开

应当注意的是，即使只打算展开一个面板，`default-expanded-names`也应当传入数组，除非使用了`accordion`。

```vue
<template>
  <n-collapse :default-expanded-names="['2', '3']">
    <n-collapse-item title="绿灯" name="1">
      <n-collapse :default-expanded-names="['2']">
        <n-collapse-item title="常亮" name="1">
          <div>通过</div>
        </n-collapse-item>
        <n-collapse-item title="闪烁" name="2">
          <div>快速通过</div>
        </n-collapse-item>
      </n-collapse>
    </n-collapse-item>
    <n-collapse-item title="红灯" name="2">
      <div>停</div>
    </n-collapse-item>
    <n-collapse-item title="黄灯" name="3">
      <div>注意</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 额外信息

在右边放一些信息。

```vue
<template>
  <n-collapse>
    <n-collapse-item title="张三" name="1">
      一周小结：行动是打破平庸最好的回击
      <template #header-extra>
        本周工作日工作时长：58 小时
      </template>
    </n-collapse-item>
    <n-collapse-item title="李四" name="2">
      一周小结：勤奋是获取成功的唯一捷径
      <template #header-extra>
        本周工作日工作时长：62 小时
      </template>
    </n-collapse-item>
    <n-collapse-item name="3">
      <n-text type="error">
        一周小结：生产队的驴都不敢这么休息，建议优化
      </n-text>
      <template #header>
        <n-text type="error">
          王五
        </n-text>
      </template>
      <template #header-extra>
        <n-text type="error">
          本周工作日工作时长：45 小时
        </n-text>
      </template>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 禁用

```vue
<template>
  <n-collapse>
    <n-collapse-item title="青铜" name="1">
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2" disabled>
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
</template>
```

## 触发展开的区域

当你需要自定义展开区域时，可以使用 `trigger-areas` 属性来指定触发展开的区域。

```vue
<script lang="ts" setup>
import { computed, ref } from 'vue'

const mainRef = ref(true)
const extraRef = ref(true)
const arrowRef = ref(true)
const triggerAreasRef = computed(() => {
  const areas: Array<'main' | 'extra' | 'arrow'> = []
  if (mainRef.value)
    areas.push('main')
  if (extraRef.value)
    areas.push('extra')
  if (arrowRef.value)
    areas.push('arrow')
  return areas
})

// 导出为模板可用的变量
const main = mainRef
const extra = extraRef
const arrow = arrowRef
const triggerAreas = triggerAreasRef
</script>

<template>
  <n-flex vertical>
    <n-flex>
      <n-tag v-model:checked="main" checkable>
        main
      </n-tag>
      <n-tag v-model:checked="extra" checkable>
        extra
      </n-tag>
      <n-tag v-model:checked="arrow" checkable>
        arrow
      </n-tag>
    </n-flex>
    <n-collapse :trigger-areas="triggerAreas">
      <n-collapse-item title="青铜" name="1">
        <template #header-extra>
          Extra
        </template>
        <div>可以</div>
      </n-collapse-item>
      <n-collapse-item title="白银" name="2">
        <template #header-extra>
          Extra
        </template>
        <div>很好</div>
      </n-collapse-item>
      <n-collapse-item title="黄金" name="3">
        <template #header-extra>
          Extra
        </template>
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </n-flex>
</template>
```

