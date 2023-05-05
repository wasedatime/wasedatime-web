import reactRefresh from "@vitejs/plugin-react-refresh"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import dynamicImport from "vite-plugin-dynamic-import"
const path = require("path")

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd() + "/src")

  return {
    root: "./src",
    publicDir: "assets",
    base: env.VITE_PUBLIC_BASE_PATH + "/",
    rollupOptions: {
      input: "wasedatime-campus.ts",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: "./src/wasedatime-campus.ts",
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
    plugins: [react(), reactRefresh(), dynamicImport()],
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
    envPrefix: ["VITE_", "REACT_APP_"],
  }
})
