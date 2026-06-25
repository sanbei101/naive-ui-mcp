# 代码 Code - 演示示例

## 基础用法

JavaScript、Python、C++ 的例子。

```vue
<script lang="ts" setup>
const cppCode = `int main () {
  std::cout << "Hello Naive UI";
  return 0;
}`
</script>

<template>
  <div style="overflow: auto">
    <n-space vertical :size="16">
      <n-code
        code="
function sleep (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
"
        language="javascript"
      />
      <n-code
        code="
def say_hello():
    print('Hello Naive UI')
"
        language="python"
      />
      <n-code :code="cppCode" language="cpp" />
    </n-space>
  </div>
</template>
```

## 行内显示

JavaScript 的例子。

```vue
<script lang="ts" setup>
const code = 'console.log("工具人的日子不好过")'
</script>

<template>
  <div>
    JavaScript
    <n-code :code="code" language="javascript" inline />
  </div>
</template>
```

## 软换行

code 可以在溢出时自动换行。

```vue
<script lang="ts" setup>
const code = `
function padEnd(string, length, chars) {
  const strLength = length ? stringSize(string) : 0
  return (length && strLength < length)? (string + createPadding(length - strLength, chars)): (string || '')
}
      `
</script>

<template>
  <n-code :code="code" language="js" word-wrap />
</template>
```

## 显示行号

可以在代码块左侧显示行号。

```vue
<script lang="ts" setup>
const code = `#include <bits/stdc++.h>
using namespace std;

int main() {
  cout <<"你" << endl;
  cout <<"觉" << endl;
  cout <<"得" << endl;
  cout <<"恨" << endl;
  cout <<"却" << endl;
  cout <<"离" << endl;
  cout <<"不" << endl;
  cout <<"开" << endl;
  return 0;
}`
</script>

<template>
  <div style="overflow: auto">
    <n-code :code="code" language="cpp" show-line-numbers />
  </div>
</template>
```

