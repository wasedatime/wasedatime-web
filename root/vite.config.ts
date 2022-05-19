import { defineConfig, loadEnv } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import reactRefresh from "@vitejs/plugin-react-refresh";
import dynamicImport from "vite-plugin-dynamic-import";
import { VitePWA } from "vite-plugin-pwa";
const path = require("path");

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    root: "./src",
    publicDir: "assets",
    rollupOptions: {
      input: "wasedatime-root-config.ts",
      preserveEntrySignatures: true,
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
      cssCodeSplit: false,
      rollupOptions: {
        input: {
          main: "./src/index.html",
          "wasedatime-root-config": "./src/wasedatime-root-config.ts",
          "wasedatime-home": "./src/wasedatime-home.ts",
        },
        preserveEntrySignatures: true,
        output: {
          entryFileNames: "[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
        external:
          mode === "staging"
            ? [
                `https://${env.MF_PREFIX}.${env.MF_SYLLABUS_DOMAIN}/assets/style.css`,
                `https://${env.MF_PREFIX}.${env.MF_CAMPUS_DOMAIN}/assets/style.css`,
              ]
            : mode === "production"
            ? ["/syllabus/assets/style.css", "/campus/assets/style.css"]
            : [],
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
      define: "undefined",
      "global.TYPED_ARRAY_SUPPORT": undefined,
    },
    plugins: [
      ViteEjsPlugin((config) => ({
        isLocal: config.mode === "development",
        isDev: config.mode === "staging",
        standalone: false,
        env,
      })),
      reactRefresh(),
      dynamicImport(),
      VitePWA({
        strategies: "injectManifest",
        srcDir: ".",
        filename: "sw.ts",
        registerType: "autoUpdate",
        useCredentials: mode === "staging",
        includeAssets: [
          "favicon.svg",
          "favicon.ico",
          "robots.txt",
          "apple-touch-icon.png",
        ],
        manifest: {
          name: "WasedaTime",
          short_name: "WasedaTime",
          description:
            "Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students. さらにスマートな早稲田生活のために作られた最強、最速の早大生専用の時間割。 早稲田タイム。",
          theme_color: "#ffffff",
          icons: [
            {
              src: "img/pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "img/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "img/pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
    envPrefix: ["VITE_", "REACT_APP_", "MF_"],
  };
});
