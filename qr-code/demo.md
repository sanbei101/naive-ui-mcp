# 二维码 QR Code - 演示示例

## 基础用法

基础二维码。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('雨淋湿了天空')
</script>

<template>
  <n-space vertical>
    <n-qr-code :value="text" />
    <n-input v-model:value="text" :maxlength="60" type="text" />
  </n-space>
</template>
```

## 图标

可以放一些代表性的图标。

```vue
<script lang="ts" setup></script>

<template>
  <n-space>
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      error-correction-level="H"
    />
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      icon-background-color="#333"
      error-correction-level="H"
    />
    <n-qr-code
      value="https://www.naiveui.com/"
      icon-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      type="svg"
      :icon-size="32"
      error-correction-level="H"
    />
  </n-space>
</template>
```

## 尺寸

它就像疯狂千层饼，无论大小，都会引领你进入另一个神秘的信息空间。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('The rain dampened the sky')

const size = ref(110)

function add() {
  size.value += 10
  if (size.value > 200) {
    size.value = 110
  }
}

function minus() {
  size.value -= 10
  if (size.value < 20) {
    size.value = 110
  }
}
</script>

<template>
  <n-space vertical>
    <n-space>
      <n-button @click="minus">
        减 10
      </n-button>
      <n-button @click="add">
        加 10
      </n-button>
    </n-space>
    <n-qr-code :value="text" :size="size" />
  </n-space>
</template>
```

## 颜色

让二维码不再单调乏味。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const color = ref('#225A95FF')
</script>

<template>
  <n-flex>
    <n-qr-code value="https://www.naiveui.com/" color="#18a058" />
    <n-qr-code
      value="https://www.naiveui.com/"
      color="#409eff"
      background-color="#F5F5F5"
    />
  </n-flex>
  <n-flex vertical>
    <n-color-picker v-model:value="color" />
    <n-qr-code
      value="https://www.naiveui.com/"
      :color="color"
      background-color="#F5F5F5"
    />
  </n-flex>
</template>
```

## 纠错

使用 `error-correction-level` 来设定纠错级别。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const errorCorrectionLevel = ref('M')
const errorCorrectionOptions = [
  { value: 'L', label: 'L' },
  { value: 'M', label: 'M' },
  { value: 'Q', label: 'Q' },
  { value: 'H', label: 'H' }
]
</script>

<template>
  <n-space vertical>
    <n-qr-code
      value="犹如一位幽默风趣的魔术师，巧妙地将繁琐的信息变成了一个神秘的二维码"
      :error-correction-level="errorCorrectionLevel"
    />
    <n-radio-group v-model:value="errorCorrectionLevel">
      <n-radio-button
        v-for="errorCorrection in errorCorrectionOptions"
        :key="errorCorrection.value"
        :value="errorCorrection.value"
        :label="errorCorrection.label"
      />
    </n-radio-group>
  </n-space>
</template>
```

## 下载

下载二维码的代码实现，你也可以选择右键图片另存为。

```vue
<script lang="ts" setup>
function handleDownloadQRCode() {
  const canvas = document
    .querySelector('#qr-code')
    ?.querySelector<HTMLCanvasElement>('canvas')
  if (canvas) {
    const url = canvas.toDataURL()
    const a = document.createElement('a')
    a.download = 'QRCode.png'
    a.href = url
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
}
</script>

<template>
  <n-space vertical>
    <n-qr-code id="qr-code" value="https://www.naiveui.com/" />
    <n-button @click="handleDownloadQRCode">
      下载
    </n-button>
  </n-space>
</template>
```

## 自定义渲染类型

通过设置 `type` 自定义渲染结果，提供 `canvas` 和 `svg` 两个选项。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const text = ref('雨淋湿了天空')
</script>

<template>
  <n-space>
    <n-qr-code :value="text" type="canvas" />
    <n-qr-code :value="text" type="svg" />
  </n-space>
</template>
```

