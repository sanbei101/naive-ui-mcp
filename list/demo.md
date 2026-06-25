# 列表 List - 演示示例

## 基础用法

```vue
<template>
  <n-list>
    <template #header>
      hhh
    </template>
    <template #footer>
      fff
    </template>
    <n-list-item>
      <template #prefix>
        <n-button>Prefix</n-button>
      </template>
      <template #suffix>
        <n-button>Suffix</n-button>
      </template>
      <n-thing title="Thing" title-extra="extra" description="description">
        Biu<br>
        Biu<br>
        Biu<br>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="Thing" title-extra="extra" description="description" />
    </n-list-item>
  </n-list>
</template>
```

## 可悬浮

```vue
<template>
  <n-list hoverable clickable>
    <n-list-item>
      <n-thing title="相见恨晚" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small">
              暑夜
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              晚春
            </n-tag>
          </n-space>
        </template>
        奋勇呀然后休息呀<br>
        完成你伟大的人生
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="他在时间门外" content-style="margin-top: 10px;">
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="info" size="small">
              环形公路
            </n-tag>
            <n-tag :bordered="false" type="info" size="small">
              潜水艇司机
            </n-tag>
          </n-space>
        </template>
        最新的打印机<br>
        复制着彩色傀儡<br>
        早上好我的罐头先生<br>
        让他带你去被工厂敲击
      </n-thing>
    </n-list-item>
  </n-list>
</template>
```

## 边框

List 可以控制边框。

```vue
<template>
  <n-list bordered>
    <template #header>
      hhh
    </template>
    <template #footer>
      fff
    </template>
    <n-list-item>
      <template #prefix>
        <n-button>Prefix</n-button>
      </template>
      <template #suffix>
        <n-button>Suffix</n-button>
      </template>
      <n-thing title="Thing" title-extra="extra" description="description">
        Biu<br>
        Biu<br>
        Biu<br>
      </n-thing>
    </n-list-item>
    <n-list-item>
      <n-thing title="Thing" title-extra="extra" description="description">
        Biu<br>
        Biu<br>
        Biu<br>
      </n-thing>
      <template #suffix>
        <n-button>Suffix</n-button>
      </template>
    </n-list-item>
  </n-list>
</template>
```

