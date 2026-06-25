import { describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";

const OUTPUT_DIR = path.resolve(__dirname, "..", "docs-output");

// 检查 docs-output 是否存在
const docsExist = fs.existsSync(OUTPUT_DIR);

// 获取所有组件目录
const components: string[] = docsExist
  ? fs.readdirSync(OUTPUT_DIR).filter((f) => fs.statSync(path.join(OUTPUT_DIR, f)).isDirectory())
  : [];

describe("Naive UI 文档验证", () => {
  // 基本检查
  it("docs-output 目录应该存在", () => {
    expect(docsExist).toBe(true);
  });

  it("应该有超过 90 个组件", () => {
    expect(components.length).toBeGreaterThan(90);
  });

  const coreComponents = [
    "button",
    "input",
    "select",
    "checkbox",
    "radio",
    "switch",
    "slider",
    "date-picker",
    "form",
    "table",
    "modal",
    "drawer",
    "message",
    "notification",
    "tooltip",
    "popover",
    "dropdown",
    "menu",
    "tabs",
    "card",
    "tag",
    "badge",
    "avatar",
    "icon",
    "grid",
  ];

  for (const component of coreComponents) {
    it(`应该包含核心组件: ${component}`, () => {
      const found = components.some((c) => c === component || c === component.replace(/-/g, "-"));
      expect(found).toBe(true);
    });
  }

  describe("组件文件完整性检查", () => {
    for (const component of components) {
      describe(component, () => {
        const componentDir = path.join(OUTPUT_DIR, component);

        it("应该有 api.md 文件", () => {
          const apiPath = path.join(componentDir, "api.md");
          expect(fs.existsSync(apiPath)).toBe(true);
        });

        it("api.md 应该包含内容", () => {
          const apiPath = path.join(componentDir, "api.md");
          if (fs.existsSync(apiPath)) {
            const content = fs.readFileSync(apiPath, "utf-8");
            expect(content.length).toBeGreaterThan(50);
            expect(content).toMatch(/^# /);
          }
        });

        it("应该有 demo.md 文件", () => {
          const demoPath = path.join(componentDir, "demo.md");
          expect(fs.existsSync(demoPath)).toBe(true);
        });

        it("demo.md 应该包含内容", () => {
          const demoPath = path.join(componentDir, "demo.md");
          if (fs.existsSync(demoPath)) {
            const content = fs.readFileSync(demoPath, "utf-8");
            expect(content.length).toBeGreaterThan(20);
            // 应该包含标题
            expect(content).toMatch(/^# /);
          }
        });
      });
    }
  });

  // 检查文档内容质量
  describe("文档内容质量检查", () => {
    // 特殊组件,没有标准 API 表格
    const specialComponents = ["config-consumer", "global-style", "discrete"];

    for (const component of components) {
      describe(component, () => {
        const apiPath = path.join(OUTPUT_DIR, component, "api.md");
        const isSpecial = specialComponents.includes(component);

        it("api.md 应该包含 API 部分", () => {
          if (fs.existsSync(apiPath)) {
            const content = fs.readFileSync(apiPath, "utf-8");
            if (isSpecial) {
              // 特殊组件只需要有内容
              expect(content.length).toBeGreaterThan(50);
            } else {
              // 普通组件应该包含 Props,Slots 或 Events 表格
              const hasApiContent =
                content.includes("Props") ||
                content.includes("Slots") ||
                content.includes("Events") ||
                content.includes("Methods");
              expect(hasApiContent).toBe(true);
            }
          }
        });

        it("api.md 表格应该有表头", () => {
          if (fs.existsSync(apiPath) && !isSpecial) {
            const content = fs.readFileSync(apiPath, "utf-8");
            if (content.includes("|")) {
              expect(content).toContain("| ---");
            }
          }
        });
      });
    }
  });

  describe("统计信息", () => {
    let totalDemoCount = 0;
    let componentsWithDemos = 0;
    let emptyComponents: string[] = [];

    for (const component of components) {
      const demoPath = path.join(OUTPUT_DIR, component, "demo.md");
      if (fs.existsSync(demoPath)) {
        const content = fs.readFileSync(demoPath, "utf-8");
        const demoCount = (content.match(/^## /gm) || []).length;
        totalDemoCount += demoCount;
        if (demoCount > 0) {
          componentsWithDemos++;
        } else {
          emptyComponents.push(component);
        }
      }
    }

    it(`总共有 ${components.length} 个组件`, () => {
      expect(components.length).toBeGreaterThan(0);
    });

    it(`${componentsWithDemos} 个组件有示例代码`, () => {
      expect(componentsWithDemos).toBeGreaterThan(80);
    });

    it(`总共 ${totalDemoCount} 个示例`, () => {
      expect(totalDemoCount).toBeGreaterThan(500);
    });

    if (emptyComponents.length > 0) {
      it(`${emptyComponents.length} 个组件没有示例: ${emptyComponents.join(", ")}`, () => {
        console.log("没有示例的组件:", emptyComponents);
      });
    }
  });
});
