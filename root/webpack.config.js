const path = require("path");
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const webpack = require("webpack");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "wasedatime";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.tsx$/,
          use: "ts-loader",
          resolve: {
            fullySpecified: false,
            alias: {
              "@app": path.resolve(__dirname, "src/"),
            },
            modules: ["node_modules"],
          },
        },
        {
          test: /\.ts$/,
          use: "ts-loader",
          resolve: {
            fullySpecified: false,
            alias: {
              "@app": path.resolve(__dirname, "src/"),
            },
            modules: ["node_modules"],
          },
        },
        {
          test: /\.(svg|jpe?g|png|gif|bmp|tiff|woff|woff2|eot|ttf|otf)$/,
          type: "asset/inline",
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
            alias: {
              "@app": path.resolve(__dirname, "src/"),
            },
            modules: ["node_modules"],
          },
        },
        {
          test: /\.css$/i,
          use: [
            webpackConfigEnv.isLocal || webpackConfigEnv.standalone
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
          ],
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin(
        webpackConfigEnv.isDev
          ? [
              "PREFIX",
              "MF_SYLLABUS_DOMAIN",
              "MF_CAMPUS_DOMAIN",
              "MF_FEEDS_DOMAIN",
            ]
          : []
      ),
      new webpack.DefinePlugin(
        webpackConfigEnv.isDev
          ? {
              "process.env.NODE_ENV": JSON.stringify("staging"),
            }
          : {}
      ),
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv.isLocal,
          isDev: webpackConfigEnv.isDev,
          standalone: webpackConfigEnv.standalone,
          orgName,
        },
      }),
      new PreloadWebpackPlugin({
        rel: "preload",
        as(entry) {
          if (/\.(s?css)$/.test(entry)) return "style";
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(entry)) return "font";
          if (/\.(jpe?g|png|gif|bmp|tiff|svg)$/.test(entry)) return "image";

          return "script";
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/styles/fonts", to: "./fonts" },
          { from: "./src/assets/img/contributors", to: "./img/contributors" },
          {
            from: "./src/assets/img/socialmediaicon",
            to: "./img/socialmediaicon",
          },
          {
            from: "./src/assets/img/favicon.ico",
            to: "./favicon.ico",
          },
          {
            from: "./robots.txt",
            to: "./robots.txt",
          },
          {
            from: "./sitemap.xml",
            to: "./sitemap.xml",
          },
        ],
      }),
      new InjectManifest({
        swSrc: "./service-worker.js",
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      }),
      new WebpackPwaManifest({
        filename: "/[name].json",
        name: "WasedaTime",
        shortName: "WasedaTime",
        startUrl: "/index.html",
        display: "standalone",
        themeColor: "#000000",
        backgroundColor: "#ffffff",
        crossorigin: webpackConfigEnv.isDev ? "use-credentials" : null,
        icons: [
          {
            src: "./src/assets/img/favicon.ico",
            sizes: [64, 32, 24, 16],
            type: "image/x-icon",
          },
          {
            src: "./src/assets/img/logo.png",
            size: "512x512",
            type: "image/png",
          },
          {
            src: "./src/assets/img/maskable_icon.png",
            size: "627x627",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
    ],
    externals: ["single-spa", "react", "react-dom"],
  });
};
