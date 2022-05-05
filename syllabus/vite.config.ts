import { defineConfig, loadEnv } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const publicAssetsBaseUrl =
    mode === "production"
      ? "/syllabus/"
      : mode === "staging"
      ? `https://${env.MF_DOMAIN_WITH_PREFIX}/`
      : "http://localhost:8080/";

  return {
    root: "./src",
    publicDir: "assets",
    base: publicAssetsBaseUrl,
    rollupOptions: {
      input: "wasedatime-syllabus.ts",
      format: "system",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      manifest: true,
      rollupOptions: {
        input: "./src/wasedatime-syllabus.ts",
        preserveEntrySignatures: true,
        output: {
          entryFileNames: "wasedatime-syllabus.js",
          assetFileNames: "assets/[name].[ext]",
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
});
