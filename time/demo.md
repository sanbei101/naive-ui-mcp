# 时间 Time - 演示示例

## 基础用法

```vue
<script lang="ts" setup>
const time = new Date(0)
</script>

<template>
  <n-time :time="0" />
  <br>
  <n-time :time="time" />
</template>
```

## 类型

`date`、`datetime` 或者 `relative`。

```vue
<script lang="ts" setup>
const time = new Date(0)
</script>

<template>
  <n-time :time="0" type="date" />
  <br>
  <n-time :time="time" type="datetime" />
</template>
```

## 格式化

格式化时间， 详尽文档请查看 <n-a href="https://date-fns.org/v2.6.0/docs/format" target="_blank">date-fns format</n-a>。

```vue
<template>
  <n-time :time="0" format="yyyy-MM-dd" />
  <br>
  <n-time :time="0" format="yyyy-MM-dd hh:mm" />
  <br>
  <n-time :time="0" format="yyyy-MM-dd hh:mm:ss" />
</template>
```

## 相对时间

时间组件使用 `date-fns` 的 [`formatDistanceStrict`](https://date-fns.org/v2.28.0/docs/formatDistanceStrict) 格式化相对时间。

如果你对于显示没有很多定制化的要求，这个一般够用了。

```vue
<template>
  <n-time :time="0" :to="86400000" type="relative" />
  <br>
  <n-time :time="0" :to="864000000" type="relative" />
  <br>
  <n-time :time="0" :to="8640000000" type="relative" />
</template>
```

## Unix 时间戳

使用 Unix 时间戳作为时间。

```vue
<template>
  <n-time :time="4320000000" :to="8640000000" />
  <br>
  <n-time :time="4320000" :to="8640000" unix />
  <br>
  <n-time :time="4320000000" format="yyyy-MM-dd hh:mm:ss" />
  <br>
  <n-time :time="4320000" format="yyyy-MM-dd hh:mm:ss" unix />
</template>
```

## 时区

```vue
<template>
  上海 <n-time time-zone="Asia/Shanghai" /><br>匹兹堡
  <n-time time-zone="America/New_York" /><br>UTC <n-time time-zone="UTC" />
</template>
```

