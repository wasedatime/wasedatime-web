import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");

export default {
  root: "./src",
  publicDir: "./src/assets",
  rollupOptions: {
    input: "wasedatime-syllabus.ts",
    format: "system",
    preserveEntrySignatures: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/wasedatime-syllabus.ts",
      preserveEntrySignatures: true,
      output: {
        entryFileNames: "wasedatime-syllabus.js",
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
  plugins: [reactRefresh(), dynamicImport()],
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
  envPrefix: ["VITE_", "REACT_APP_"],
};
