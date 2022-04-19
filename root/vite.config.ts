import { defineConfig } from "vite";
const { importMaps } = require('vite-plugin-import-maps')
import { ViteEjsPlugin } from "vite-plugin-ejs";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
import svgLoader from "vite-svg-loader";
const path = require("path");

// https://vitejs.dev/config/
// export default defineConfig({
//   root: "./src",
//   plugins: [react()]
// })

export default {
  root: "./src",
  publicDir: './src/assets',
  rollupOptions: {
    input: "wasedatime-root-config.ts",
    format: "system",
    preserveEntrySignatures: true,
  },
  resolve: {
    fullySpecified: false,
    alias: {
      "@app": path.resolve(__dirname, "src/"),
    },
    modules: ["node_modules"],
  },
  define: {
    define: "undefined",
    global: {},
  },
  plugins: [
    importMaps([
      {
        imports: {
          "@wasedatime/root-config": "//localhost:9000/wasedatime-root-config.ts",
          "@wasedatime/syllabus": "//localhost:8080/wasedatime-syllabus.ts",
          "@wasedatime/campus": "//localhost:8081/wasedatime-campus.ts",
          "@wasedatime/career": "//localhost:8082/wasedatime-career.ts"
        },
      },
    ]),
    ViteEjsPlugin((config) => ({
      isLocal: config.mode === "development",
      isDev: config.mode === "staging",
      standalone: false,
    })),
    reactRefresh(),
    dynamicImport(),
    svgLoader()
  ],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
  envPrefix: ["VITE_", "REACT_APP_"]
};
