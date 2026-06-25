# 上传 Upload - 演示示例

## 基础用法

```vue
<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :headers="{
      'naive-info': 'hello!',
    }"
    :data="{
      'naive-data': 'cool! naive!',
    }"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 拖拽上传

你可以把 `directory-dnd` 设为 `true` 来允许拖拽上传文件夹。

```vue
<script lang="ts" setup>
import { ArchiveOutline as ArchiveIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-upload
    multiple
    directory-dnd
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :max="5"
  >
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <ArchiveIcon />
        </n-icon>
      </div>
      <n-text style="font-size: 16px">
        点击或者拖动文件到该区域来上传
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>
</template>
```

## 非受控手动提交

你可以使用 submit 方法来进行非受控状态下的手动提交。当然你也可以在受控模式下完全控制提交行为。

```vue
<script lang="ts" setup>
import type { UploadFileInfo, UploadInst } from 'naive-ui'
import { ref } from 'vue'

const fileListLengthRef = ref(0)
const uploadRef = ref<UploadInst | null>(null)

const fileListLength = fileListLengthRef

function handleChange(options: { fileList: UploadFileInfo[] }) {
  fileListLengthRef.value = options.fileList.length
}

function handleClick() {
  uploadRef.value?.submit()
}
</script>

<template>
  <n-button
    :disabled="!fileListLength"
    style="margin-bottom: 12px"
    @click="handleClick"
  >
    上传文件
  </n-button>
  <n-upload
    ref="uploadRef"
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-upload="false"
    multiple
    @change="handleChange"
  >
    <n-button>选择文件</n-button>
  </n-upload>
</template>
```

## 受控的文件列表

下面的例子纯属玩笑。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const fileListRef = ref<UploadFileInfo[]>([
  {
    id: 'url-test',
    name: 'URL 测试',
    url: '__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f',
    status: 'finished'
  },
  {
    id: 'text-message',
    name: '你的短信',
    status: 'error'
  },
  {
    id: 'notification',
    name: '你的通知',
    status: 'finished'
  },
  {
    id: 'contact',
    name: '你的联系人信息',
    status: 'finished'
  }
])

const fileList = fileListRef

function handleUploadChange(data: { fileList: UploadFileInfo[] }) {
  fileListRef.value = data.fileList
}

function handleRemove(data: {
  file: UploadFileInfo
  fileList: UploadFileInfo[]
}) {
  if (data.file.id === 'text-message') {
    message.info('居然没传上去，算了，删了吧')
  }
  else if (data.file.id === 'notification') {
    message.error('不行，这个有用，不许删')
    return false
  }
  else if (data.file.id === 'contact') {
    message.loading('不知道这个有没有用，等我问问服务器能不能删', {
      duration: 4000
    })
    return new Promise((resolve) => {
      setTimeout(() => {
        message.error('不行，他们也不许删这个')
        resolve(false)
      }, 4000)
    })
  }
}

function handleFileListChange() {
  message.info('是的，file-list 的值变了')
}
</script>

<template>
  <n-upload
    v-model:file-list="fileList"
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    @change="handleUploadChange"
    @remove="handleRemove"
    @update:file-list="handleFileListChange"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 上传完成的回调

你可以在回调中修改文件的属性。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()

function handleFinish({
  file,
  event
}: {
  file: UploadFileInfo
  event?: ProgressEvent
}) {
  console.log(event)
  message.success((event?.target as XMLHttpRequest).response)
  const ext = file.name.split('.')[1]
  file.name = `更名.${ext}`
  file.url = '__HTTPS__://www.mocky.io/v2/5e4bafc63100007100d8b70f'
  return file
}
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    @finish="handleFinish"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 下载文件

通过设置 `show-download-button` 来显示下载按钮，通过 `on-download` 来设置下载按钮被点击的事件处理函数。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const fileListRef = ref<UploadFileInfo[]>([
  {
    id: 'a',
    name: '我错了，但我可以改.png',
    status: 'error'
  },
  {
    id: 'd',
    name: '现在还不行呢.doc',
    status: 'uploading',
    percentage: 50
  },
  {
    id: 'c',
    name: '现在就可下载哟.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  }
])

const fileList = fileListRef

function handleDownload(file: UploadFileInfo) {
  message.success(`下载成功：${file.name}`)
}
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image"
    show-download-button
    @download="handleDownload"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 默认文件列表

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'

const defaultFileList: UploadFileInfo[] = [
  {
    id: 'razars',
    name: '刀',
    status: 'finished'
  },
  {
    id: 'edge',
    name: '锋',
    status: 'finished'
  }
]
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="defaultFileList"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 限制上传文件

使用 `before-upload` 限制上传。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'

const message = useMessage()

async function beforeUpload(data: {
  file: UploadFileInfo
  fileList: UploadFileInfo[]
}) {
  if (data.file.file?.type !== 'image/png') {
    message.error('只能上传png格式的图片文件，请重新上传')
    return false
  }
  return true
}
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    @before-upload="beforeUpload"
  >
    <n-button>上传 PNG 文件</n-button>
  </n-upload>
</template>
```

## 缩略图文件列表

你可以使用 `create-thumbnail-url` 自定义文件的缩略图。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { ref } from 'vue'

const message = useMessage()
const fileListRef = ref<UploadFileInfo[]>([
  {
    id: 'a',
    name: '我错了.png',
    status: 'error'
  },
  {
    id: 'b',
    name: '普通文本.doc',
    status: 'finished',
    type: 'text/plain'
  },
  {
    id: 'c',
    name: '图片.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'd',
    name: '没传完.doc',
    status: 'uploading',
    percentage: 50
  }
])

const fileList = fileListRef

function createThumbnailUrl(file: File | null): Promise<string> | undefined {
  if (!file)
    return undefined
  message.info('createThumbnailUrl 产生了图片的 URL，你传什么都会变成 07akioni')
  message.info(`${file.name}`)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')
    }, 1000)
  })
}
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image"
    :create-thumbnail-url="createThumbnailUrl"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 照片墙

照片墙中的预览会默认调用内部组件，你也可以使用 `on-preview` 自定义展示上传文件的方法。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

const showModalRef = ref(false)
const previewImageUrlRef = ref('')

function handlePreview(file: UploadFileInfo) {
  const { url } = file
  previewImageUrlRef.value = url as string
  showModalRef.value = true
}

const showModal = showModalRef
const previewImageUrl = previewImageUrlRef

const fileList = ref<UploadFileInfo[]>([
  {
    id: 'a',
    name: '我是上传出错的普通文件.png',
    status: 'error'
  },
  {
    id: 'b',
    name: '我是普通文本.doc',
    status: 'finished',
    type: 'text/plain'
  },
  {
    id: 'c',
    name: '我是自带url的图片.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'd',
    name: '我是上传进度99%的文本.doc',
    status: 'uploading',
    percentage: 99
  }
])

const previewFileList = ref<UploadFileInfo[]>([
  {
    id: 'react',
    name: '我是react.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    id: 'vue',
    name: '我是vue.png',
    status: 'finished',
    url: '__HTTP__://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  }
])
</script>

<template>
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image-card"
  >
    点击上传
  </n-upload>
  <n-divider />
  <n-upload
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="previewFileList"
    list-type="image-card"
    @preview="handlePreview"
  />
  <n-modal
    v-model:show="showModal"
    preset="card"
    style="width: 600px"
    title="一张很酷的图片"
  >
    <img :src="previewImageUrl" style="width: 100%">
  </n-modal>
</template>
```

## 自定义上传

使用 `custom-request` 属性来自定义上传请求。

```vue
<script lang="ts" setup>
import type { UploadCustomRequestOptions } from 'naive-ui'
import { lyla } from '@lylajs/web'
import { useMessage } from 'naive-ui'

const message = useMessage()
function customRequest({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}: UploadCustomRequestOptions) {
  const formData = new FormData()
  if (data) {
    Object.keys(data).forEach((key) => {
      formData.append(
        key,
        data[key as keyof UploadCustomRequestOptions['data']]
      )
    })
  }
  formData.append(file.name, file.file as File)
  lyla
    .post(action as string, {
      withCredentials,
      headers: headers as Record<string, string>,
      body: formData,
      onUploadProgress: ({ percent }) => {
        onProgress({ percent: Math.ceil(percent) })
      }
    })
    .then(({ json }) => {
      message.success(JSON.stringify(json))
      onFinish()
    })
    .catch((error) => {
      message.success(error.message)
      onError()
    })
}
</script>

<template>
  <n-upload
    action="__HTTP__://naive-upload.free.beeceptor.com/"
    :headers="{
      'naive-info': 'hello!',
    }"
    :data="{
      'naive-data': 'cool! naive!',
    }"
    :custom-request="customRequest"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 自定义下载

通过设置 `custom-download` 来自定义下载文件的逻辑。

默认下载方式为浏览器原生，通过对一个有对应 URL 的 `<a />` 元素的点击操作实现。但是在特定的场合下，例如跨域的文件下载，你可能会需要对文件的下载逻辑进行自定义。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

const fileList = ref<UploadFileInfo[]>([
  {
    id: 'c',
    name: '自定义下载文件.png',
    status: 'finished',
    url: 'https://avatars.githubusercontent.com/u/20943608?s=60&v=4'
  }
])

function handleCustomDownload(file: UploadFileInfo) {
  const { url, name } = file
  if (!url)
    return
  fetch(url)
    .then(response => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(new Blob([blob]))
      const link = document.createElement('a')
      link.href = blobUrl
      if (name) {
        link.download = name
      }
      document.body.appendChild(link)
      link.click()
      URL.revokeObjectURL(blobUrl)
      link.remove()
    })
}
</script>

<template>
  <n-upload
    action="http://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :default-file-list="fileList"
    list-type="image"
    show-download-button
    :custom-download="handleCustomDownload"
  >
    <n-button>上传文件</n-button>
  </n-upload>
</template>
```

## 拆分触发器和列表

`n-upload-trigger`和 `n-upload-file-list` 需在 `n-upload` 内调用。

```vue
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui'
import { ref } from 'vue'

const fileListRef = ref<UploadFileInfo[]>([
  {
    id: 'b',
    name: 'file.doc',
    status: 'finished',
    type: 'text/plain'
  }
])

const fileList = fileListRef
</script>

<template>
  <n-upload
    abstract
    :default-file-list="fileList"
    action="__HTTP__://www.mocky.io/v2/5e4bafc63100007100d8b70f"
  >
    <n-button-group>
      <n-button>点我没用</n-button>
      <n-upload-trigger #="{ handleClick }" abstract>
        <n-button @click="handleClick">
          上传
        </n-button>
      </n-upload-trigger>
    </n-button-group>
    <n-card style="margin-top: 12px" title="文件列表">
      <n-upload-file-list />
    </n-card>
  </n-upload>
</template>
```

