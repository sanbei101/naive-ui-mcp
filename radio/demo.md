# 单选 Radio - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const checkedValueRef = ref<string | null>(null)
const disabled = ref(true)
const checkedValue = checkedValueRef

function handleChange(e: Event) {
  checkedValueRef.value = (e.target as HTMLInputElement).value
}
</script>

<template>
  <n-space>
    <n-radio
      :checked="checkedValue === 'Definitely Maybe'"
      value="Definitely Maybe"
      name="basic-demo"
      @change="handleChange"
    >
      Definitely Maybe
    </n-radio>
    <n-radio
      :checked="checkedValue === 'Be Here Now'"
      value="Be Here Now"
      name="basic-demo"
      @change="handleChange"
    >
      Be Here Now
    </n-radio>
    <n-radio
      :checked="checkedValue === 'Be Here Now'"
      value="Be Here Now"
      :disabled="disabled"
      name="basic-demo"
      label=" Be Here Now"
      @change="handleChange"
    />
    <n-switch v-model:value="disabled" />
  </n-space>
</template>
```

## 选项组

一个选项组看起来就挺舒服。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const songs = [
  {
    value: 'Rock\'n\'Roll Star',
    label: 'Rock\'n\'Roll Star'
  },
  {
    value: 'Shakermaker',
    label: 'Shakermaker'
  },
  {
    value: 'Live Forever',
    label: 'Live Forever'
  },
  {
    value: 'Up in the Sky',
    label: 'Up in the Sky'
  },
  {
    value: '...',
    label: '...'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})
</script>

<template>
  <n-radio-group v-model:value="value" name="radiogroup">
    <n-space>
      <n-radio v-for="song in songs" :key="song.value" :value="song.value">
        {{ song.label }}
      </n-radio>
    </n-space>
  </n-radio-group>
</template>
```

## 按钮组

有的时候用按钮显得更优雅一点。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const disabled2 = ref(false)
const disabled1 = ref(false)
const songs = [
  {
    value: 'Rock\'n\'Roll Star',
    label: 'Rock\'n\'Roll Star'
  },
  {
    value: 'Shakermaker',
    label: 'Shakermaker'
  },
  {
    value: 'Live Forever',
    label: 'Live Forever'
  },
  {
    value: 'Up in the Sky',
    label: 'Up in the Sky'
  },
  {
    value: '...',
    label: '...'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="value" name="radiobuttongroup1">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1)
            || (song.label === 'Shakermaker' && disabled2)
        "
        :label="song.label"
      />
    </n-radio-group>
    <n-space>
      <n-checkbox v-model:checked="disabled2" style="margin-right: 12px">
        禁用 Shakemaker
      </n-checkbox>
      <n-checkbox v-model:checked="disabled1">
        禁用 Live Forever
      </n-checkbox>
    </n-space>
  </n-space>
</template>
```

## 尺寸

任君挑选。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
const disabled2 = ref(false)
const disabled1 = ref(false)
const songs = [
  {
    value: 'Rock\'n\'Roll Star',
    label: 'Rock\'n\'Roll Star'
  },
  {
    value: 'Shakermaker',
    label: 'Shakermaker'
  },
  {
    value: 'Live Forever',
    label: 'Live Forever'
  },
  {
    value: 'Up in the Sky',
    label: 'Up in the Sky'
  },
  {
    value: '...',
    label: '...'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})
</script>

<template>
  <n-space vertical>
    <n-radio-group v-model:value="value" name="radiobuttongroup2" size="medium">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1)
            || (song.label === 'Shakermaker' && disabled2)
        "
      >
        {{ song.label }}
      </n-radio-button>
    </n-radio-group>
    <n-radio-group v-model:value="value" name="radiobuttongroup3" size="large">
      <n-radio-button
        v-for="song in songs"
        :key="song.value"
        :value="song.value"
        :disabled="
          (song.label === 'Live Forever' && disabled1)
            || (song.label === 'Shakermaker' && disabled2)
        "
      >
        {{ song.label }}
      </n-radio-button>
    </n-radio-group>
    <n-space>
      <n-checkbox v-model:checked="disabled2" style="margin-right: 12px">
        禁用 Shakemaker
      </n-checkbox>
      <n-checkbox v-model:checked="disabled1">
        禁用 Live Forever
      </n-checkbox>
    </n-space>
  </n-space>
</template>
```

