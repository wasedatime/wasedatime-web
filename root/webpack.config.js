const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {InjectManifest} = require('workbox-webpack-plugin');

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
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        { test: /\.tsx$/, use: "awesome-typescript-loader" },
        {
          test: /\.(svg|jpe?g|png|gif|bmp|tiff|woff|woff2|eot|ttf|otf)(\?[a-z0-9=.]+)?$/,
          loader: "url-loader",
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          isDev: webpackConfigEnv && webpackConfigEnv.isDev,
          orgName,
        },
      }),
      new InjectManifest({
        swSrc: './service-worker.js',
      }),
      new WebpackPwaManifest({
        filename: "/[name].json",
        name: "WasedaTime",
        short_name: "WasedaTime",
        start_url: "/index.html",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "./src/assets/img/favicon.ico",
            sizes: [64, 32, 24, 16],
            type: "image/x-icon"
          },
          {
            src: "./src/assets/img/logo.png",
            size: "512x512",
            type: "image/png"
          },
          {
            src: "./src/assets/img/maskable_icon.png",
            size: "627x627",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     { from: './manifest.json', to: './dist/manifest.json' },
      //   ]
      // })
      // new BundleAnalyzerPlugin(),
    ],
    externals: ["single-spa", "react", "react-dom"],
  });
};