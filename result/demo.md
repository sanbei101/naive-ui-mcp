# 结果页 Result - 演示示例

## 404

```vue
<template>
  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
</template>
```

## 403

```vue
<template>
  <n-result
    status="403"
    title="403 禁止访问"
    description="总有些门是对你关闭的"
  >
    <template #footer>
      <n-button>放轻松</n-button>
    </template>
  </n-result>
</template>
```

## 500

```vue
<template>
  <n-result
    status="500"
    title="500 服务器错误"
    description="服务器出错可能说明该雇更多程序员了"
  >
    <template #footer>
      <n-button>散财消灾</n-button>
    </template>
  </n-result>
</template>
```

## 418

```vue
<template>
  <n-result status="418" title="418 我是个杯具" description="一切尽在不言中">
    <template #footer>
      <n-button>接受真相就是这么简单</n-button>
    </template>
  </n-result>
</template>
```

## 信息

```vue
<template>
  <n-result
    status="info"
    title="信息"
    description="在这个年代，信息就是金钱，金钱就是信息。"
  >
    <template #footer>
      <n-button>我需要信息</n-button>
    </template>
  </n-result>
</template>
```

## 成功

```vue
<template>
  <n-result status="success" title="成功" description="失败的孩子">
    <template #footer>
      <n-button>我喜欢</n-button>
    </template>
  </n-result>
</template>
```

## 警告

```vue
<template>
  <n-result
    status="warning"
    title="警告"
    description="在它变成错误以前一般不会有人管它"
  >
    <template #footer>
      <n-button>听起来有那么点悲伤，哈哈哈</n-button>
    </template>
  </n-result>
</template>
```

## 尺寸

```vue
<template>
  <n-result status="404" title="大！大！啊" description="这么大" size="huge">
    <template #footer>
      <n-button>哦</n-button>
    </template>
  </n-result>
</template>
```

## 自定义图标

可以随便放一些东西，不一定是图标。

```vue
<template>
  <n-result
    title="如何成功"
    description="写好报告，搞乱项目，增本降效，做大蛋糕"
  >
    <template #icon>
      <div style="width: 300px">
        底层逻辑是打通信息屏障，创建行业新生态。顶层设计时聚焦用户感知赛道，通过差异化和颗粒度达到引爆点。交付价值是在垂直领域采取复用大发达成持久收益。抽离透传归因分析作为抓手为产品赋能，体验度量作为闭环的评判标准。亮点是载体，优势是链路。思考整个生命周期，完善逻辑考虑资源倾斜。方法论是组合拳达到平台化标准。
      </div>
    </template>
  </n-result>
</template>
```

