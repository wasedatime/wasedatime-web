const path = require("path");
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExposeRuntimeCssAssetsPlugin = require("single-spa-css/ExposeRuntimeCssAssetsPlugin.cjs");
const PreloadWebpackPlugin = require("@vue/preload-webpack-plugin");
const webpack = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// use .env
const Dotenv = require("dotenv-webpack");

module.exports = (webpackConfigEnv, argv) => {
  if (webpackConfigEnv.isLocal || webpackConfigEnv.standalone)
    // eslint-disable-next-line no-undef, camelcase
    __webpack_base_uri__ = "/";
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
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)$/,
          type: "asset/inline",
        },
        {
          test: /\.css$/i,
          use: [
            webpackConfigEnv.isLocal || webpackConfigEnv.standalone
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader"
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            webpackConfigEnv.isLocal || webpackConfigEnv.standalone
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ],
        },
      ],
    },
    plugins:
      webpackConfigEnv.isLocal || webpackConfigEnv.standalone
        ? [new Dotenv()]
        : [
            new webpack.EnvironmentPlugin(["REACT_APP_API_BASE_URL"]),
            new PreloadWebpackPlugin({
              rel: "preload",
              as(entry) {
                if (/\.(s?css)$/.test(entry)) return "style";
                if (/\.(woff|woff2|eot|ttf|otf)$/.test(entry)) return "font";
                if (/\.(jpe?g|png|gif|bmp|tiff|svg)$/.test(entry))
                  return "image";

                return "script";
              },
            }),
            new MiniCssExtractPlugin({
              filename: "[name].css",
            }),
            new ExposeRuntimeCssAssetsPlugin({
              // The filename here must match the filename for the MiniCssExtractPlugin
              filename: "[name].css",
            }),
            new FilterWarningsPlugin({
              exclude: /Critical dependency: the request of a dependency is an expression/,
            }),
          ],
  });
};
