# 排印 Typography - 演示示例

## 标题

Header 不光是 Header。你知道 UI 一般很喜欢在 Header 旁边弄一个带颜色的竖条（确实，光有文字太单调了）。所以这它可以有个条。

```vue
<template>
  <div style="padding-left: 24px; position: relative">
    <div
      style="
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 24px;
        background-color: rgba(128, 128, 128, 0.5);
      "
    />
    <n-h1>
      <n-text type="primary">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar">
      <n-text type="primary">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar" align-text>
      <n-text type="primary">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar" align-text type="success">
      <n-text type="success">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar" align-text type="info">
      <n-text type="info">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar" align-text type="warning">
      <n-text type="warning">
        sin(x)
      </n-text>
    </n-h1>
    <n-h1 prefix="bar" align-text type="error">
      <n-text type="error">
        sin(x)
      </n-text>
    </n-h1>
    <n-h2>cos(x)</n-h2>
    <n-h2 prefix="bar">
      cos(x)
    </n-h2>
    <n-h2 prefix="bar" align-text>
      cos(x)
    </n-h2>
    <n-h3>-sin(x)</n-h3>
    <n-h3 prefix="bar">
      -sin(x)
    </n-h3>
    <n-h3 prefix="bar" align-text>
      -sin(x)
    </n-h3>
    <n-h4>-cos(x)</n-h4>
    <n-h4 prefix="bar">
      -cos(x)
    </n-h4>
    <n-h4 prefix="bar" align-text>
      -cos(x)
    </n-h4>
    <n-h5>sin(x)</n-h5>
    <n-h5 prefix="bar">
      sin(x)
    </n-h5>
    <n-h5 prefix="bar" align-text>
      sin(x)
    </n-h5>
    <n-h6>循环啊！</n-h6>
    <n-h6 prefix="bar">
      循环啊！
    </n-h6>
    <n-h6 prefix="bar" align-text>
      循环啊！
    </n-h6>
  </div>
</template>
```

## 标签

其他的 Naive UI 内置标签。

```vue
<template>
  <n-a
    href="https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F"
    target="_blank"
  >
    且听风吟
  </n-a>
  <n-h1>h1 标签</n-h1>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-h2>h2 标签</n-h2>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-h3>h3 标签</n-h3>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-h4>h4 标签</n-h4>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-h5>h5 标签</n-h5>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-h6>h6 标签</n-h6>
  <n-p>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-p>
  <n-ul>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
  </n-ul>
  <n-hr />
  <n-ol>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
  </n-ol>
  <n-ul align-text>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
  </n-ul>
  <n-hr />
  <n-ol align-text>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
    <n-li>li 标签</n-li>
  </n-ol>
  <n-blockquote>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-blockquote>
  <n-blockquote align-text>
    《且听风吟》是日本作家村上春树的第一本小说。它首次出现在 1979 年 6
    月的《群像》（日本最有影响力的文学杂志之一），并于次月出版成书。这部小说被日本导演
    Kazuki Ōmori 改编成电影，并于 1981 年由艺术剧院协会发行。1987
    年被阿尔弗雷德伯恩鲍姆译成英文。
  </n-blockquote>
</template>
```

## 文本

用不同类型的文本展示各种信息。

```vue
<template>
  <n-text type="info">
    Info
  </n-text>
  <n-text type="success">
    Success
  </n-text>
  <n-text type="warning">
    Warning
  </n-text>
  <n-text type="error">
    Error
  </n-text> <n-text strong>
    Strong
  </n-text>
  <n-text italic>
    Italic
  </n-text> <n-text underline>
    Underline
  </n-text>
  <n-text delete>
    Delete
  </n-text> <n-text code>
    Code
  </n-text>
  <n-text code delete>
    Code
  </n-text>
  <n-text depth="1">
    Primary Depth
  </n-text>
  <n-text depth="2">
    Secondary Depth
  </n-text>
  <n-text depth="3">
    Tertiary Depth
  </n-text>
  <n-text tag="div">
    作为 Div
  </n-text>
</template>
```

## 配合 Router Link

有的时候会需要让 `<n-a />` 具有 router-link 的功能。

如果你觉得写起来很麻烦，可以再封装一个组件。

```vue
<template>
  <router-link to="/" #="{ navigate, href }" custom>
    <n-a :href="href" @click="navigate">
      回到主页
    </n-a>
  </router-link>
</template>
```

