import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 30000,
    hookTimeout: 30000,
    include: ['tests/**/*.test.ts'],
    reporters: ['verbose'],
    // 忽略父目录的配置
    server: {
      deps: {
        inline: ['vitest']
      }
    }
  },
  // 不加载父目录的 postcss 配置
  css: {
    postcss: {
      plugins: []
    }
  }
})
