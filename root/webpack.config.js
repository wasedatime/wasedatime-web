const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "wasedatime";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
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
          use: [MiniCssExtractPlugin.loader, "css-loader"],
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
      new CompressionWebpackPlugin(),
      new WebpackPwaManifest({
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
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
      new BundleAnalyzerPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new UglifyJsPlugin()
      ]
    },
    externals: ["single-spa", "react", "react-dom"],
  });
};
