const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "wasedatime",
    projectName: "blog",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
     // modify the webpack config however you'd like to by adding to this object
     module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|otf|svg)(\?[a-z0-9=.]+)?$/,
          type: 'asset/inline'
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        }
      ],
    },
    plugins: 
      argv.mode && argv.mode === 'production'
        ? [
            new webpack.EnvironmentPlugin(["REACT_APP_API_BASE_URL"]),
          ]
        : [
            new webpack.DefinePlugin({
              "process.env": JSON.stringify(dotenv.config().parsed),
            }),
          ]
  });
};
