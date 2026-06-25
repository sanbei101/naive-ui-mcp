# 表格 Table - 演示示例

## 基础用法

```vue
<template>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
</template>
```

## 边框

```vue
<template>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
</template>
```

## 尺寸

```vue
<template>
  <n-space vertical>
    <n-table :bordered="false" :single-line="false" size="small">
      <thead>
        <tr>
          <th>Abandon</th>
          <th>Abnormal</th>
          <th>Abolish</th>
          <th>...</th>
          <th>万事开头难</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>放弃</td>
          <td>反常的</td>
          <td>彻底废除</td>
          <td>...</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table>
    <n-table :bordered="false" :single-line="false" size="large">
      <thead>
        <tr>
          <th>Abandon</th>
          <th>Abnormal</th>
          <th>Abolish</th>
          <th>...</th>
          <th>万事开头难</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>放弃</td>
          <td>反常的</td>
          <td>彻底废除</td>
          <td>...</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table>
  </n-space>
</template>
```

## 单列

```vue
<template>
  <n-table single-column :single-line="false">
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
</template>
```

## 单行

```vue
<template>
  <n-table>
    <thead>
      <tr>
        <th>Abandon</th>
        <th>Abnormal</th>
        <th>Abolish</th>
        <th>...</th>
        <th>万事开头难</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>放弃</td>
        <td>反常的</td>
        <td>彻底废除</td>
        <td>...</td>
        <td>干！我刚才背的是啥</td>
      </tr>
      <tr>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
    </tbody>
  </n-table>
</template>
```

## 条纹

```vue
<template>
  <n-space vertical>
    <n-table striped>
      <thead>
        <tr>
          <th>Abandon</th>
          <th>Abnormal</th>
          <th>Abolish</th>
          <th>...</th>
          <th>万事开头难</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>放弃</td>
          <td>反常的</td>
          <td>彻底废除</td>
          <td>...</td>
          <td>干！我刚才背的是啥</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </n-table>
  </n-space>
</template>
```

