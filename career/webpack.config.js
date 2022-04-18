const path = require("path");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wasedatime",
    projectName: "career",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
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
      ],
    },
  });
};
