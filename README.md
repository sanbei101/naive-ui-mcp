# Naive UI Docs Generator

自动从 [naive-ui](https://github.com/tusen-ai/naive-ui) 提取中文文档的工具。

## 功能

- 每天自动从 naive-ui 仓库提取文档
- 生成结构化的 `api.md` 和 `demo.md`
- 使用 vitest 验证文档完整性
- 自动推送到 `doc` 分支

## 本地使用

### 安装依赖

```bash
npm install
```

### 克隆 naive-ui

```bash
git clone --depth 1 https://github.com/tusen-ai/naive-ui.git naive
```

### 生成文档

```bash
npm run generate
```

这会：
1. 运行 `extract-docs.ts` 提取文档到 `docs-output/`
2. 运行 vitest 验证文档

### 单独运行

```bash
# 只提取文档
npm run extract

# 只运行测试
npm test
```

## 输出结构

```
docs-output/
├── button/
│   ├── api.md      # API 文档（Props、Slots、Events）
│   └── demo.md     # 所有示例代码
├── input/
│   ├── api.md
│   └── demo.md
└── ... (97 个组件)
```

## GitHub Action

项目配置了 GitHub Action，每天北京时间 10:00 自动运行：

1. 克隆最新的 naive-ui
2. 提取文档
3. 运行测试验证
4. 推送到 `doc` 分支

### 手动触发

在 GitHub 仓库的 Actions 页面，点击 "Run workflow" 即可手动触发。

## 测试验证

vitest 测试包括：

- 组件数量检查（>90 个）
- 核心组件存在性检查
- 每个组件的 api.md 和 demo.md 存在性
- 文档内容完整性（标题、API 表格等）
- 统计信息（组件数、示例数）

## 许可证

MIT
