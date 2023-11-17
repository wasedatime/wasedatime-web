import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import dynamicImport from "vite-plugin-dynamic-import"
const path = require("path")

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + "/src")

  return {
    root: "./src",
    publicDir: "assets",
    base: (env.VITE_PUBLIC_BASE_PATH || "http://localhost:8082") + "/",
    rollupOptions: {
      input: "wasedatime-career.ts",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: "./src/wasedatime-career.ts",
        preserveEntrySignatures: true,
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
    },
    resolve: {
      fullySpecified: false,
      alias: {
        "@app": path.resolve(__dirname, "src/"),
      },
      modules: ["node_modules"],
    },
    plugins: [react(), dynamicImport()],
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
    envPrefix: ["VITE_", "REACT_APP_"],
  }
})
