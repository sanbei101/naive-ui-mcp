# 描述 Descriptions - 演示示例

## 基础用法

```vue
<template>
  <n-descriptions label-placement="top" title="描述">
    <n-descriptions-item>
      <template #label>
        早餐
      </template>
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="早午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="晚餐" :span="2">
      两个<br>
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="夜宵">
      苹果
    </n-descriptions-item>
  </n-descriptions>
</template>
```

## 列数

可以通过列数来控制每行显示的内容数量。

```vue
<template>
  <n-descriptions label-placement="top" :column="4">
    <n-descriptions-item>
      <template #label>
        早餐
      </template>
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="早午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="晚餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="夜宵">
      苹果
    </n-descriptions-item>
  </n-descriptions>
</template>
```

## 跨度

每个描述项都可以设定跨度。

```vue
<template>
  <n-descriptions label-placement="top" bordered :column="6">
    <n-descriptions-item>
      <template #label>
        早餐
      </template>
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="早午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="晚餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="正餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="夜宵">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="苹果">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="苹果" :span="2">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="苹果" :span="3">
      苹果
    </n-descriptions-item>
  </n-descriptions>
</template>
```

## 标签位置

标签位置可以在 `top` 或者 `left`。

```vue
<template>
  <n-descriptions label-placement="left" title="描述">
    <n-descriptions-item>
      <template #label>
        早餐
      </template>
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="早午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="午餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="晚餐">
      苹果
    </n-descriptions-item>
    <n-descriptions-item label="夜宵">
      苹果
    </n-descriptions-item>
  </n-descriptions>
</template>
```

## 边框

如果有很多多行的信息，你可以把它设为 `bordered`。

```vue
<template>
  <n-space vertical :size="12">
    <n-descriptions bordered>
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="left" bordered>
      <n-descriptions-item>
        <template #label>
          Breakfast
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
      <n-descriptions-item label="为什么长">
        为什么<br>长<br>长<br>长<br>长<br>长
      </n-descriptions-item>
    </n-descriptions>
  </n-space>
</template>
```

## 尺寸

有 `small`、`medium`、`large` 尺寸。

```vue
<template>
  <n-space vertical :size="12">
    <n-descriptions label-placement="left" title="描述" size="small">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="left" title="描述" size="medium">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="left" title="描述" size="large">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="small">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="medium">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="large">
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="small" bordered>
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="medium" bordered>
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
    <n-descriptions label-placement="top" title="描述" size="large" bordered>
      <n-descriptions-item>
        <template #label>
          早餐
        </template>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="早午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="午餐">
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="晚餐" :span="2">
        两个<br>
        苹果
      </n-descriptions-item>
      <n-descriptions-item label="宵夜">
        苹果
      </n-descriptions-item>
    </n-descriptions>
  </n-space>
</template>
```

