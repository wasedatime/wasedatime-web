const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wasedatime",
    projectName: "campus",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
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
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
          type: "asset/inline",
        },
        {
          test: /\.(css|scss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
      ],
    },
  });
};
