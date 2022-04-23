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
      input: {
        "main": "./src/index.html",
        "wasedatime-root-config": "./src/wasedatime-root-config.ts"
      },
      preserveEntrySignatures: true,
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
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
    "global.TYPED_ARRAY_SUPPORT": undefined,
  },
  plugins: [
    ViteEjsPlugin((config) => ({
      isLocal: config.mode === "development",
      isDev: config.mode === "staging",
      standalone: false,
    })),
    reactRefresh(),
    dynamicImport(),
  ],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
  envPrefix: ["VITE_", "REACT_APP_"],
};
