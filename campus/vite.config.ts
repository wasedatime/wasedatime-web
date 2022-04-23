import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");

export default {
  root: "./src",
  rollupOptions: {
    input: "wasedatime-campus.ts",
    format: "system",
    preserveEntrySignatures: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/wasedatime-campus.ts",
      preserveEntrySignatures: true,
      output: {
        entryFileNames: "wasedatime-campus.js"
      }
    }
  },
  resolve: {
    fullySpecified: false,
    alias: {
      "@app": path.resolve(__dirname, "src/"),
    },
    modules: ["node_modules"],
  },
  plugins: [reactRefresh(), dynamicImport()],
  envPrefix: ["VITE_", "REACT_APP_"],
};
