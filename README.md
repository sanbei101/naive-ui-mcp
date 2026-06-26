<div align="center">

# 🧩 naive-ui-mcp

**Naive UI 的 MCP (Model Context Protocol) 文档服务**

让 AI 编码助手能够直接查阅 Naive UI 的组件文档和示例代码

[![npm version](https://img.shields.io/npm/v/naive-ui-mcp?logo=npm&color=2ea44f)](https://www.npmjs.com/package/naive-ui-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)
[![MCP](https://img.shields.io/badge/MCP-Compatible-brightgreen.svg)](https://modelcontextprotocol.io/)

</div>

---

## ✨ 功能特性

| 工具 | 说明 |
|:---|:---|
| `list_components` | 列出 Naive UI 的组件 |
| `list_examples` | 查看某个组件的所有示例标题与说明 |
| `get_example` | 获取指定示例的完整 Vue 代码,支持模糊匹配 |
| `get_api` | 获取组件的 API 文档(Props / Slots / Events) |

## 🚀 快速开始

### 安装

```bash
npm install -g naive-ui-mcp
# 或
pnpm add -g naive-ui-mcp
```

### 配置`Claude Code

```
claude mcp add navie-ui-mcp -- npx -y naive-ui-mcp
```

### 配置 Cursor / VS Code

在 `.cursor/mcp.json` 或 VS Code settings 中:

```json
{
  "mcpServers": {
    "naive-ui": {
      "command": "naive-ui-mcp"
    }
  }
}
```

配置完成后,AI 助手即可自动调用 Naive UI 文档工具。

## 💡 使用示例

配置好后,你可以直接在对话中这样问:

> - "帮我用 Naive UI 写一个带搜索的下拉选择器"
> - "NButton 有哪些 Props?"
> - "给我一个 Data Table 的分页示例"

AI 会自动调用 MCP 工具查阅文档并生成准确的代码。

## 📦 技术栈

- **运行时**: Node.js
- **构建工具**: [Rolldown](https://rolldown.rs/)
- **MCP SDK**: `@modelcontextprotocol/sdk`
- **Schema 验证**: Zod
- **测试**: Vitest

## 🛠 开发

```bash
# 克隆项目
git clone https://github.com/your-username/naive-ui-mcp.git
cd naive-ui-mcp

# 安装依赖
pnpm install

# 从 naive-ui 文档提取最新内容
pnpm extract

# 运行测试
pnpm test

# 一键提取 + 测试
pnpm generate

# 构建产物
pnpm build
```

### 项目结构

```
naive-ui-mcp/
├── src/
│   └── index.ts          # MCP 服务入口
├── scripts/
│   └── extract-docs.ts   # 文档提取脚本
├── references/            # 组件文档(自动生成)
│   ├── button/
│   │   ├── api.md        # API 文档
│   │   └── demo.md       # 示例代码
│   ├── input/
│   ├── select/
│   └── ...               # 100+ 组件
├── tests/
│   └── docs.test.ts      # 测试用例
├── rolldown.config.ts     # 构建配置
└── package.json
```
