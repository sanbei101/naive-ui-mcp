# 步骤 Steps - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import { ref } from 'vue'

const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('process')
const current = currentRef

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 4)
    currentRef.value = null
  else currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 4
  else currentRef.value--
}
</script>

<template>
  <n-space vertical>
    <n-steps :current="current as number" :status="currentStatus">
      <n-step
        title="I Me Mine"
        description="All through the day, I me mine I me mine, I me mine"
      />
      <n-step
        title="Let It Be"
        description="When I find myself in times of trouble Mother Mary comes to me"
      />
      <n-step
        title="Come Together"
        description="Here come old flat top He come grooving up slowly"
      />
      <n-step
        title="Something"
        description="Something in the way she moves Attracts me like no other lover"
      />
    </n-steps>
    <n-space>
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <MdArrowRoundBack />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <MdArrowRoundForward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
      <n-radio-group v-model:value="currentStatus" size="medium" name="basic">
        <n-radio-button value="error">
          Error
        </n-radio-button>
        <n-radio-button value="process">
          Process
        </n-radio-button>
        <n-radio-button value="wait">
          Wait
        </n-radio-button>
        <n-radio-button value="finish">
          Finish
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-space>
</template>
```

## 尺寸

有 `small` 和 `medium` 大小。

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import { ref } from 'vue'

const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('process')
const current = currentRef

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 4)
    currentRef.value = null
  else currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 4
  else currentRef.value--
}
</script>

<template>
  <n-space vertical>
    <n-steps size="small" :current="current as number" :status="currentStatus">
      <n-step
        title="I Me Mine"
        description="All through the day, I me mine I me mine, I me mine"
      />
      <n-step
        title="Let It Be"
        description="When I find myself in times of trouble Mother Mary comes to me"
      />
      <n-step
        title="Come Together"
        description="Here come old flat top He come grooving up slowly"
      />
      <n-step
        title="Something"
        description="Something in the way she moves Attracts me like no other lover"
      />
    </n-steps>
    <n-space>
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <MdArrowRoundBack />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <MdArrowRoundForward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
      <n-radio-group v-model:value="currentStatus" size="medium" name="size">
        <n-radio-button value="error">
          Error
        </n-radio-button>
        <n-radio-button value="process">
          Process
        </n-radio-button>
        <n-radio-button value="wait">
          Wait
        </n-radio-button>
        <n-radio-button value="finish">
          Finish
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-space>
</template>
```

## 垂直

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import { ref } from 'vue'

const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('process')
const current = currentRef

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 5)
    currentRef.value = null
  else currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 5
  else currentRef.value--
}
</script>

<template>
  <n-space vertical>
    <n-steps vertical :current="current as number" :status="currentStatus">
      <n-step
        title="I Me Mine"
        description="All through the day, I me mine I me mine, I me mine"
      />
      <n-step
        title="Let It Be"
        description="When I find myself in times of trouble Mother Mary comes to me"
      />
      <n-step title="Break" />
      <n-step
        title="Come Together"
        description="Here come old flat top He come grooving up slowly"
      />
      <n-step
        title="Something"
        description="Something in the way she moves Attracts me like no other lover"
      />
    </n-steps>
    <n-space>
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <MdArrowRoundBack />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <MdArrowRoundForward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
      <n-radio-group
        v-model:value="currentStatus"
        size="medium"
        name="vertical"
      >
        <n-radio-button value="error">
          Error
        </n-radio-button>
        <n-radio-button value="process">
          Process
        </n-radio-button>
        <n-radio-button value="wait">
          Wait
        </n-radio-button>
        <n-radio-button value="finish">
          Finish
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-space>
</template>
```

## 内容位置

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import { ref } from 'vue'

const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('process')
const contentPlacement = ref<StepsProps['contentPlacement']>('bottom')
const current = currentRef

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 4)
    currentRef.value = null
  else currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 4
  else currentRef.value--
}

function right() {
  contentPlacement.value = 'right'
}

function bottom() {
  contentPlacement.value = 'bottom'
}
</script>

<template>
  <n-space vertical>
    <n-steps
      :content-placement="contentPlacement"
      :current="current as number"
      :status="currentStatus"
    >
      <n-step
        title="I Me Mine"
        description="All through the day, I me mine I me mine, I me mine"
      />
      <n-step
        title="Let It Be"
        description="When I find myself in times of trouble Mother Mary comes to me"
      />
      <n-step
        title="Come Together"
        description="Here come old flat top He come grooving up slowly"
      />
      <n-step
        title="Something"
        description="Something in the way she moves Attracts me like no other lover"
      />
    </n-steps>
    <n-space>
      <n-radio-group v-model:value="contentPlacement">
        <n-radio-button value="right" @click="right">
          Right
        </n-radio-button>
        <n-radio-button value="bottom" @click="bottom">
          Bottom
        </n-radio-button>
      </n-radio-group>
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <MdArrowRoundBack />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <MdArrowRoundForward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
      <n-radio-group v-model:value="currentStatus" size="medium" name="basic">
        <n-radio-button value="error">
          Error
        </n-radio-button>
        <n-radio-button value="process">
          Process
        </n-radio-button>
        <n-radio-button value="wait">
          Wait
        </n-radio-button>
        <n-radio-button value="finish">
          Finish
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-space>
</template>
```

## 使用 Step 的 Slot

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import { computed, ref } from 'vue'

const currentRef = ref(1)
const currentStatusRef = ref<StepsProps['status']>('process')

const buttonTypeRef = computed(() => {
  switch (currentStatusRef.value) {
    case 'error':
      return 'error'
    case 'finish':
      return 'success'
    default:
      return 'default'
  }
})

const current = currentRef
const currentStatus = currentStatusRef
const buttonType = buttonTypeRef

function handleButtonClick() {
  currentRef.value = (currentRef.value % 4) + 1
}
</script>

<template>
  <n-space vertical>
    <n-steps :current="current" :status="currentStatus">
      <n-step title="I Me Mine">
        <div class="n-step-description">
          <p>Al through the day, I me mine I me mine, I me mine</p>
          <n-button
            v-if="current === 1"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Let It Be">
        <div class="n-step-description">
          <p>When I find myself in times of trouble Mother Mary comes to me</p>
          <n-button
            v-if="current === 2"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Come Together">
        <div class="n-step-description">
          <p>Here come old flat top He come grooving up slowly</p>
          <n-button
            v-if="current === 3"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Something">
        <div class="n-step-description">
          <p>Something in the way she moves Attracts me like no other lover</p>
          <n-button
            v-if="current === 4"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
    </n-steps>
    <n-radio-group v-model:value="currentStatus" size="medium" name="basic">
      <n-radio-button value="error">
        Error
      </n-radio-button>
      <n-radio-button value="process">
        Process
      </n-radio-button>
      <n-radio-button value="wait">
        Wait
      </n-radio-button>
      <n-radio-button value="finish">
        Finish
      </n-radio-button>
    </n-radio-group>
  </n-space>
</template>
```

## 定制图标

可以定制 `'finish'` 和 `'error'` 状态下的图标和每一步的图标。

```vue
<script lang="ts" setup>
import type { StepsProps } from 'naive-ui'
import {
  MdArrowRoundBack,
  MdArrowRoundForward,
  MdCafe,
  MdHappy,
  MdSad
} from '@vicons/ionicons4'
import { ref } from 'vue'

const currentRef = ref<number | null>(1)
const currentStatus = ref<StepsProps['status']>('finish')
const current = currentRef

function next() {
  if (currentRef.value === null)
    currentRef.value = 1
  else if (currentRef.value >= 4)
    currentRef.value = null
  else currentRef.value++
}

function prev() {
  if (currentRef.value === 0)
    currentRef.value = null
  else if (currentRef.value === null)
    currentRef.value = 4
  else currentRef.value--
}
</script>

<template>
  <n-space vertical>
    <n-steps :current="current as number" :status="currentStatus">
      <template #finish-icon>
        <n-icon>
          <MdHappy />
        </n-icon>
      </template>
      <template #error-icon>
        <n-icon>
          <MdSad />
        </n-icon>
      </template>
      <n-step
        title="I Me Mine"
        description="All through the day, I me mine I me mine, I me mine"
      />
      <n-step
        title="Let It Be"
        description="When I find myself in times of trouble Mother Mary comes to me"
      />
      <n-step
        title="Come Together"
        description="Here come old flat top He come grooving up slowly"
      />
      <n-step
        title="Something"
        description="Something in the way she moves Attracts me like no other lover"
      >
        <template #icon>
          <n-icon>
            <MdCafe />
          </n-icon>
        </template>
      </n-step>
    </n-steps>
    <n-space>
      <n-button-group>
        <n-button @click="prev">
          <template #icon>
            <n-icon>
              <MdArrowRoundBack />
            </n-icon>
          </template>
        </n-button>
        <n-button @click="next">
          <template #icon>
            <n-icon>
              <MdArrowRoundForward />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
      <n-radio-group v-model:value="currentStatus" size="medium" name="basic">
        <n-radio-button value="error">
          Error
        </n-radio-button>
        <n-radio-button value="process">
          Process
        </n-radio-button>
        <n-radio-button value="wait">
          Wait
        </n-radio-button>
        <n-radio-button value="finish">
          Finish
        </n-radio-button>
      </n-radio-group>
    </n-space>
  </n-space>
</template>
```

## 点击切换

当设定 `@update:current` 时，可以通过点击切换步骤。

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const currentRef = ref<number | undefined>(1)
const current = currentRef
</script>

<template>
  <n-steps v-model:current="current">
    <n-step
      title="I Me Mine"
      description="All through the day, I me mine I me mine, I me mine"
    />
    <n-step
      title="Let It Be"
      description="When I find myself in times of trouble Mother Mary comes to me"
    />
    <n-step
      title="Come Together"
      description="Here come old flat top He come grooving up slowly"
    />
    <n-step
      disabled
      title="Something"
      description="Something in the way she moves Attracts me like no other lover"
    />
  </n-steps>
</template>
```

