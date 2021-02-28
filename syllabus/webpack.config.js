const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExposeRuntimeCssAssetsPlugin = require("single-spa-css/ExposeRuntimeCssAssetsPlugin.cjs");
// const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// use .env
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wasedatime",
    projectName: "syllabus",
    webpackConfigEnv,
    argv,
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
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
          loader: "url-loader",
        },
        {
          test: /\.css$/i,
          use: [
            webpackConfigEnv.isLocal
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            webpackConfigEnv.isLocal
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins:
      webpackConfigEnv.isLocal || webpackConfigEnv.standalone
        ? [
            new webpack.DefinePlugin({
              "process.env": JSON.stringify(dotenv.config().parsed),
            }),
          ]
        : [
            // new webpack.EnvironmentPlugin(["REACT_APP_API_BASE_URL"]),
            // new PreloadWebpackPlugin({
            //   rel: "preload",
            //   as(entry) {
            //     if (/\.(s?css)$/.test(entry)) return "style";
            //     if (/\.(woff|woff2|eot|ttf|otf)$/.test(entry)) return "font";
            //     if (/\.(jpe?g|png|gif|bmp|tiff|svg)$/.test(entry))
            //       return "image";
            //     return "script";
            //   },
            // }),
            new MiniCssExtractPlugin({
              filename: "[name].css",
            }),
          ],
  });
};
