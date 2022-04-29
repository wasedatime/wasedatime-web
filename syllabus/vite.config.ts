import { defineConfig, loadEnv } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
const path = require("path");
const { parsed } = require("dotenv").config({
  path: path.resolve(__dirname, "./src/.env"),
});

export default defineConfig(({ mode }) => {
  const publicAssetsBaseUrl =
    mode === "production"
      ? "/syllabus/"
      : mode === "staging"
      ? `https://${parsed.MF_DOMAIN_WITH_PREFIX}/`
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
