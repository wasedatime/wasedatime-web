import { ViteEjsPlugin } from "vite-plugin-ejs";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");

export default {
  root: "./src",
  publicDir: "./src/assets",
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
