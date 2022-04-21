import { ViteEjsPlugin } from "vite-plugin-ejs";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const { importMaps } = require('vite-plugin-import-maps')
const path = require("path");

export default {
  root: "./src",
  publicDir: "./src/assets",
  rollupOptions: {
    input: "wasedatime-root-config.ts",
    format: "system",
    preserveEntrySignatures: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "wasedatime-root-config.js"
      },
      external: ["jss-plugin-{}"]
    }
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
    define: "undefined",
    global: {},
  },
  plugins: [
    ViteEjsPlugin((config) => ({
      isLocal: config.mode === "development",
      isDev: config.mode === "staging",
      standalone: false,
    })),
    reactRefresh(),
    dynamicImport(),
    // importMaps([
    //   {
    //     imports: {
    //       "@wasedatime/root-config": "http://localhost:9000/wasedatime-root-config.js",
    //       "@wasedatime/syllabus": "http://localhost:8080/wasedatime-syllabus.js",
    //       "@wasedatime/campus": "http://localhost:8081/wasedatime-campus.js",
    //       "@wasedatime/career": "http://localhost:8082/wasedatime-career.js",
    //     },
    //   },
    // ]),
  ],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
  envPrefix: ["VITE_", "REACT_APP_"],
};
