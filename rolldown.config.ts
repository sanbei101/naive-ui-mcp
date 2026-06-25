import { defineConfig } from "rolldown";

export default defineConfig({
  platform: "node",
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
});
