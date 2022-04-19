import { defineConfig } from "vite";
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
    input: "wasedatime-syllabus.ts",
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
  plugins: [reactRefresh(), dynamicImport(), svgLoader()],
  assetsInclude: ["**/*.png"],
  envPrefix: ["VITE_", "REACT_APP_"]
};
