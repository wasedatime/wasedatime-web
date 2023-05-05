import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import reactRefresh from "@vitejs/plugin-react-refresh"
import dynamicImport from "vite-plugin-dynamic-import"
const path = require("path")

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + "/src")

  return {
    root: "./src",
    publicDir: "assets",
    base: env.VITE_PUBLIC_BASE_PATH + "/",
    rollupOptions: {
      input: "wasedatime-syllabus.ts",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: "./src/wasedatime-syllabus.ts",
        preserveEntrySignatures: true,
        output: {
          entryFileNames: "wasedatime-syllabus.js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
    resolve: {
      fullySpecified: false,
      alias: {
        "@app": path.resolve(__dirname, "src/"),
        "./runtimeConfig": "./runtimeConfig.browser",
      },
      modules: ["node_modules"],
    },
    define: {
      // define: "undefined",
      "global.TYPED_ARRAY_SUPPORT": undefined,
    },
    plugins: [react(), reactRefresh(), dynamicImport()],
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
    envPrefix: ["VITE_", "REACT_APP_"],
  }
})
