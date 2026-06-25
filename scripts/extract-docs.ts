#!/usr/bin/env node

/**
 * Naive UI 文档提取脚本
 *
 * 提取每个组件的中文文档，生成：
 *   - docs-output/<component>/api.md    API 文档
 *   - docs-output/<component>/demo.md   所有 demo 示例集合
 *
 * 使用方法:
 *   npx tsx scripts/extract-docs.ts <naive-ui-path> <output-path>
 *
 * 示例:
 *   npx tsx scripts/extract-docs.ts ./naive ./docs-output
 */

import * as fs from 'fs'
import * as path from 'path'

// 支持命令行参数，或使用默认路径
const args = process.argv.slice(2)
const ROOT_DIR = args[0] || path.resolve(__dirname, '..', 'naive')
const SRC_DIR = path.join(ROOT_DIR, 'src')
const OUTPUT_DIR = args[1] || path.resolve(__dirname, '..', 'docs-output')

interface DemoFile {
  name: string
  title: string
  description: string
  code: string
}

interface ComponentDoc {
  name: string
  slug: string
  title: string
  description: string
  api: string
  demos: DemoFile[]
}

/**
 * 从 demo vue 文件中提取 <markdown> 部分
 */
function extractMarkdownFromVue(content: string): { title: string; description: string } {
  const match = content.match(/<markdown>([\s\S]*?)<\/markdown>/)
  if (!match) return { title: '', description: '' }

  const lines = match[1].trim().split('\n')
  const title = lines[0]?.replace(/^#+\s*/, '').trim() || ''
  const description = lines.slice(1).join('\n').trim()

  return { title, description }
}

/**
 * 从 demo vue 文件中提取代码，去掉 <markdown> 部分
 */
function extractCodeFromVue(content: string): string {
  // 去掉 <markdown>...</markdown>
  let code = content.replace(/<markdown>[\s\S]*?<\/markdown>/, '').trim()

  // 去掉末尾空行
  code = code.replace(/\n+$/, '')

  return code
}

/**
 * 解析 index.demo-entry.md 文件，提取 API 部分
 */
function parseDemoEntry(content: string): {
  title: string
  description: string
  demoFiles: string[]
  api: string
} {
  const lines = content.split('\n')
  let title = ''
  let description = ''
  let demoFiles: string[] = []
  let apiLines: string[] = []
  let inDemoBlock = false
  let inApi = false

  for (const line of lines) {
    // 提取标题
    if (line.startsWith('# ') && !title) {
      title = line.replace('# ', '').trim()
      continue
    }

    // 提取描述
    if (title && !description && line.trim() && !line.startsWith('#') && !line.startsWith('```')) {
      description = line.trim()
      continue
    }

    // 提取 demo 文件列表
    if (line.includes('```demo')) {
      inDemoBlock = true
      continue
    }
    if (inDemoBlock) {
      if (line.includes('```')) {
        inDemoBlock = false
        continue
      }
      if (line.trim()) {
        demoFiles.push(line.trim())
      }
      continue
    }

    // 提取 API 部分
    if (line.startsWith('## API')) {
      inApi = true
      apiLines.push(line)
      continue
    }
    if (inApi) {
      apiLines.push(line)
    }
  }

  return {
    title,
    description,
    demoFiles,
    api: apiLines.join('\n').trim()
  }
}

/**
 * 获取组件目录列表
 */
function getComponentDirs(): string[] {
  const dirs: string[] = []
  const entries = fs.readdirSync(SRC_DIR, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_') && !entry.name.startsWith('.')) {
      const demoDir = path.join(SRC_DIR, entry.name, 'demos', 'zhCN')
      if (fs.existsSync(demoDir)) {
        dirs.push(entry.name)
      }
    }
  }

  return dirs.sort()
}

/**
 * 提取单个组件的文档
 */
function extractComponentDoc(componentName: string): ComponentDoc | null {
  const demosDir = path.join(SRC_DIR, componentName, 'demos', 'zhCN')
  const entryFile = path.join(demosDir, 'index.demo-entry.md')

  if (!fs.existsSync(entryFile)) return null

  const content = fs.readFileSync(entryFile, 'utf-8')
  const parsed = parseDemoEntry(content)

  // 读取各个 demo 文件（过滤掉 debug 文件）
  const demos: DemoFile[] = []
  for (const demoName of parsed.demoFiles) {
    // 跳过 debug 文件（和文档站生产环境行为一致）
    if (demoName.includes('debug') || demoName.includes('Debug')) {
      continue
    }

    // 尝试 xxx.demo.vue 或 xxx.vue
    let demoFile = path.join(demosDir, demoName)
    if (!fs.existsSync(demoFile)) {
      demoFile = path.join(demosDir, demoName.replace('.vue', '.demo.vue'))
    }
    if (!fs.existsSync(demoFile)) continue

    const demoContent = fs.readFileSync(demoFile, 'utf-8')
    const { title, description } = extractMarkdownFromVue(demoContent)
    const code = extractCodeFromVue(demoContent)

    demos.push({
      name: demoName,
      title,
      description,
      code
    })
  }

  return {
    name: componentName,
    slug: componentName,
    title: parsed.title,
    description: parsed.description,
    api: parsed.api,
    demos
  }
}

/**
 * 生成 api.md
 */
function generateApiMd(doc: ComponentDoc): string {
  return `# ${doc.title}

${doc.description}

${doc.api}
`
}

/**
 * 生成 demo.md
 */
function generateDemoMd(doc: ComponentDoc): string {
  let md = `# ${doc.title} - 演示示例

`

  for (const demo of doc.demos) {
    if (demo.title) {
      md += `## ${demo.title}\n\n`
    }
    if (demo.description) {
      md += `${demo.description}\n\n`
    }
    md += '```vue\n'
    md += demo.code + '\n'
    md += '```\n\n'
  }

  return md
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始提取 Naive UI 中文文档...\n')
  console.log(`📂 源目录: ${SRC_DIR}`)
  console.log(`📁 输出目录: ${OUTPUT_DIR}\n`)

  // 检查源目录
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`❌ 源目录不存在: ${SRC_DIR}`)
    process.exit(1)
  }

  // 清空输出目录
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true })
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  // 获取所有组件
  const componentDirs = getComponentDirs()
  console.log(`📦 找到 ${componentDirs.length} 个组件\n`)

  let successCount = 0

  for (const dir of componentDirs) {
    const doc = extractComponentDoc(dir)
    if (!doc) continue

    const componentDir = path.join(OUTPUT_DIR, dir)
    fs.mkdirSync(componentDir, { recursive: true })

    // 写入 api.md
    const apiMd = generateApiMd(doc)
    fs.writeFileSync(path.join(componentDir, 'api.md'), apiMd, 'utf-8')

    // 写入 demo.md
    const demoMd = generateDemoMd(doc)
    fs.writeFileSync(path.join(componentDir, 'demo.md'), demoMd, 'utf-8')

    console.log(`✅ ${dir} (${doc.demos.length} 个示例)`)
    successCount++
  }

  console.log(`\n✨ 完成！成功提取 ${successCount} 个组件的文档`)
  console.log(`📁 输出目录: ${OUTPUT_DIR}`)

  return successCount
}

// 如果直接运行
main()

// 导出供测试使用
export { getComponentDirs, extractComponentDoc, parseDemoEntry, extractMarkdownFromVue, extractCodeFromVue }
