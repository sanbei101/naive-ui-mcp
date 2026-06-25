# 颜色选择器 Color Picker - 演示示例

## 基础用法

一个基本的颜色选择器。注意如果你在某个模式下选择了值，那么颜色选择器的值的格式会跟随模式。

```vue
<template>
  <n-color-picker />
</template>
```

## 不透明度

用 `show-alpha` 设定是否可调节 alpha 通道。

```vue
<script lang="ts" setup>
function handleConfirm(value: string) {
  console.log(value)
}
</script>

<template>
  <n-color-picker
    :show-alpha="false"
    :actions="['confirm']"
    @confirm="handleConfirm"
  />
</template>
```

## 尺寸

`small`、`medium`、`large`。

```vue
<template>
  <n-space vertical>
    <n-color-picker size="small" />
    <n-color-picker />
    <n-color-picker size="large" />
  </n-space>
</template>
```

## 禁用

```vue
<template>
  <n-color-picker disabled />
</template>
```

## 设定模式

使用 `modes` 设定可选模式。

```vue
<template>
  <n-color-picker :modes="['hex']" />
</template>
```

## 可清除

如果你希望颜色选择器可以清空，你可以在 `'actions'` 属性中添加 `'clear'`。

```vue
<template>
  <n-color-picker :actions="['clear']" />
</template>
```

## 和表单一起使用

我感觉这个例子没啥用，不过既然它也算个数据录入组件，就写上吧。

```vue
<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const model = reactive({
      color: '#18A058'
    })
    return {
      model,
      colorRule: {
        trigger: 'change',
        validator(_: unknown, value: string) {
          if (value !== '#18A058')
            return new Error('不许改颜色')
        }
      }
    }
  }
})
</script>

<template>
  <n-form :model="model">
    <n-form-item label="颜色（#18A058）" path="color" :rule="colorRule">
      <n-color-picker v-model:value="model.color" :show-alpha="false" />
    </n-form-item>
  </n-form>
</template>
```

## 色板

你也可以预设一个色板供用户选择。

```vue
<template>
  <n-color-picker
    :swatches="[
      '#FFFFFF',
      '#18A058',
      '#2080F0',
      '#F0A020',
      'rgba(208, 48, 80, 1)',
    ]"
  />
</template>
```

## 自定义触发器

使用 `trigger` 插槽自定义触发器。

```vue
<script lang="ts">
import { ColorWand as PaletteIcon } from '@vicons/ionicons5'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    PaletteIcon
  },
  setup() {
    return {
      color1: ref('#18a058'),
      color2: ref('#5136C9'),
      color3: ref('#722ed1')
    }
  }
})
</script>

<template>
  <n-flex :wrap="false" align="center">
    <n-color-picker v-model:value="color1">
      <template #trigger="{ value, onClick, ref: triggerRef }">
        <n-button :ref="triggerRef" circle quaternary @click="onClick">
          <template #icon>
            <n-icon :color="value || '#000'">
              <PaletteIcon />
            </n-icon>
          </template>
        </n-button>
      </template>
    </n-color-picker>

    <n-color-picker v-model:value="color2">
      <template #trigger="{ value, onClick, ref: triggerRef }">
        <div
          :ref="triggerRef"
          :style="{
            width: '22px',
            height: '22px',
            borderRadius: '50%',
            backgroundColor: value || '#000',
            cursor: 'pointer',
            border: '2px solid #fff',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }"
          @click="onClick"
        />
      </template>
    </n-color-picker>

    <n-color-picker v-model:value="color3">
      <template #trigger="{ value, onClick, ref: triggerRef }">
        <n-text
          :ref="triggerRef"
          :style="{ color: value }"
          style="cursor: pointer"
          @click="onClick"
        >
          {{ value }}
        </n-text>
      </template>
    </n-color-picker>
  </n-flex>
</template>
```

## 原生

我们提供了一种通过点击颜色预览块来触发浏览器原生的颜色选择器的方式，因为浏览器厂商在原生的颜色选择器上实现了一些很棒的功能，你可能会需要。

```vue
<template>
  <n-color-picker :show-preview="true" />
</template>
```

