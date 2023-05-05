import reactRefresh from "@vitejs/plugin-react-refresh"
import react from "@vitejs/plugin-react"
import dynamicImport from "vite-plugin-dynamic-import"
const path = require("path")

export default {
  root: "./src",
  rollupOptions: {
    input: "wasedatime-career.ts",
    preserveEntrySignatures: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/wasedatime-career.ts",
      preserveEntrySignatures: true,
      output: {
        entryFileNames: "wasedatime-career.js",
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
  envPrefix: ["VITE_", "REACT_APP_"],
}
