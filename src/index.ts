import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as z from "zod/mini";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REFERENCES_DIR = path.resolve(__dirname, "..", "references");

interface Example {
  title: string;
  description: string;
  code: string;
}

interface ApiSection {
  title: string;
  content: string;
}

/**
 * 获取所有组件目录名
 */
function getComponentNames(): string[] {
  if (!fs.existsSync(REFERENCES_DIR)) return [];
  return fs
    .readdirSync(REFERENCES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith(".") && !e.name.startsWith("_"))
    .filter((e) => fs.existsSync(path.join(REFERENCES_DIR, e.name, "api.md")))
    .map((e) => e.name)
    .sort();
}

/**
 * 解析 demo.md,按二级标题分组提取示例
 */
function parseDemoMd(content: string): Example[] {
  const examples: Example[] = [];
  const lines = content.split("\n");

  let currentTitle = "";
  let currentDescription = "";
  let currentCode = "";
  let inCodeBlock = false;
  let metFirstH2 = false;

  function flush() {
    if (currentTitle) {
      examples.push({
        title: currentTitle,
        description: currentDescription.trim(),
        code: currentCode.trim(),
      });
    }
  }

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        inCodeBlock = false;
        continue;
      }
      inCodeBlock = true;
      continue;
    }

    if (inCodeBlock) {
      currentCode += line + "\n";
      continue;
    }

    if (line.startsWith("## ")) {
      flush();
      currentTitle = line.replace(/^##\s*/, "").trim();
      currentDescription = "";
      currentCode = "";
      metFirstH2 = true;
      continue;
    }

    if (line.startsWith("# ")) continue;

    if (metFirstH2 && currentTitle) {
      currentDescription += line + "\n";
    }
  }

  flush();
  return examples;
}

/**
 * 解析 api.md,提取 API 文档
 */
function parseApiMd(content: string): ApiSection[] {
  const sections: ApiSection[] = [];
  const lines = content.split("\n");

  let currentTitle = "";
  let currentContent = "";

  function flush() {
    if (currentTitle) {
      sections.push({
        title: currentTitle,
        content: currentContent.trim(),
      });
    }
  }

  for (const line of lines) {
    if (line.startsWith("### ")) {
      flush();
      currentTitle = line.replace(/^###\s*/, "").trim();
      currentContent = "";
      continue;
    }

    if (line.startsWith("# ") || line.startsWith("## ")) continue;

    if (currentTitle) {
      currentContent += line + "\n";
    }
  }

  flush();
  return sections;
}

// ─── MCP 服务器 ───────────────────────────────────────────
const server = new McpServer({
  name: "naive-ui-docs",
  version: "1.0.0",
});

// Tool: 列出所有组件
server.registerTool(
  "list_components",
  {
    description: "列出 Naive UI 的所有组件名称",
  },
  async () => {
    const names = getComponentNames();
    return {
      content: [
        {
          type: "text" as const,
          text: JSON.stringify({ total: names.length, components: names }, null, 2),
        },
      ],
    };
  },
);

// Tool: 列出组件的所有示例
server.registerTool(
  "list_examples",
  {
    description:
      "列出指定组件的所有示例标题和说明,不包含代码。如需获取具体示例代码,请使用 get_example",
    inputSchema: {
      component: z.string().check(z.describe("组件名称:如 button,input,select")),
    },
  },
  async ({ component }) => {
    const demoPath = path.join(REFERENCES_DIR, component, "demo.md");
    const apiPath = path.join(REFERENCES_DIR, component, "api.md");

    if (!fs.existsSync(apiPath)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 不存在`,
          },
        ],
        isError: true,
      };
    }

    if (!fs.existsSync(demoPath)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 没有 demo.md 文件`,
          },
        ],
        isError: true,
      };
    }

    const content = fs.readFileSync(demoPath, "utf-8");
    const examples = parseDemoMd(content);

    // 返回 Markdown 格式,更易读
    let markdown = `# ${component} 示例列表\n\n`;
    examples.forEach(({ title, description }, index) => {
      markdown += `${index + 1}. **${title}**`;
      if (description) {
        markdown += `\n   ${description}`;
      }
      markdown += `\n`;
    });

    return {
      content: [
        {
          type: "text" as const,
          text: markdown,
        },
      ],
    };
  },
);

// Tool: 获取指定示例的代码
server.registerTool(
  "get_example",
  {
    description: "获取指定组件的某个示例的完整代码,支持模糊匹配标题",
    inputSchema: {
      component: z.string().check(z.describe("组件名称:如 button,input,select")),
      title: z.string().check(z.describe("示例标题:如 基础,尺寸,自定义渲染")),
    },
  },
  async ({ component, title }) => {
    const demoPath = path.join(REFERENCES_DIR, component, "demo.md");
    const apiPath = path.join(REFERENCES_DIR, component, "api.md");

    if (!fs.existsSync(apiPath)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 不存在`,
          },
        ],
        isError: true,
      };
    }

    if (!fs.existsSync(demoPath)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 没有 demo.md 文件`,
          },
        ],
        isError: true,
      };
    }

    const content = fs.readFileSync(demoPath, "utf-8");
    const examples = parseDemoMd(content);

    // 先精确匹配,再模糊匹配
    let example = examples.find((e) => e.title === title);

    if (!example) {
      // 模糊匹配:标题包含输入的关键词
      example = examples.find((e) => e.title.includes(title));
    }

    if (!example) {
      // 列出所有可用的示例标题
      const availableTitles = examples.map((e) => e.title).join(", ");
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 中没有找到标题为 "${title}" 的示例\n\n可用的示例标题:\n${availableTitles}`,
          },
        ],
        isError: true,
      };
    }

    // 返回 Markdown 格式,代码直接展示
    let markdown = `# ${component} - ${example.title}\n\n`;
    if (example.description) {
      markdown += `${example.description}\n\n`;
    }
    markdown += `\`\`\`vue\n${example.code}\n\`\`\``;

    return {
      content: [
        {
          type: "text" as const,
          text: markdown,
        },
      ],
    };
  },
);

// Tool: 获取组件的 API 文档
server.registerTool(
  "get_api",
  {
    description: "获取指定组件的 API 文档,包括 Props,Slots,Events 等",
    inputSchema: {
      component: z.string().check(z.describe("组件名称:如 button,input,select")),
    },
  },
  async ({ component }) => {
    const apiPath = path.join(REFERENCES_DIR, component, "api.md");

    if (!fs.existsSync(apiPath)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `错误:组件 "${component}" 不存在`,
          },
        ],
        isError: true,
      };
    }

    const content = fs.readFileSync(apiPath, "utf-8");
    const sections = parseApiMd(content);

    let markdown = `# ${component} API 文档\n\n`;
    for (const section of sections) {
      markdown += `## ${section.title}\n\n${section.content}\n\n`;
    }

    return {
      content: [
        {
          type: "text" as const,
          text: markdown,
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
