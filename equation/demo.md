# 公式 Equation - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import katex from 'katex'

const equation = '\\displaystyle= \\frac{k(k+1)}{2}+k+1'
</script>

<template>
  <n-config-provider :katex="katex">
    <n-equation :value="equation" />
  </n-config-provider>
</template>
```

## 使用 katex 配置

```vue
<script lang="ts" setup>
import katex from 'katex'

const equation = `\\f\\relax{x} = \\int_{-\\infty}^\\infty
    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}
    \\,d\\xi`

const katexOptions = {
  displayMode: true,
  fleqn: true,
  macros: {
    '\\f': '#1f(#2)'
  }
}
</script>

<template>
  <n-config-provider :katex="katex">
    <n-equation :value="equation" :katex-options="katexOptions" />
  </n-config-provider>
</template>
```

