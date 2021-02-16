const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-ts");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

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
      new WorkboxWebpackPlugin.GenerateSW({
        swDest: __dirname + '/sw.js',
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /\.(?:woff|woff2|eot|ttf|otf)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'wasedatime-fonts',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 180 * 24 * 60 * 60
              },
              cacheableResponse: { statuses: [0, 200] },
            }
          },
          {
            urlPattern: /\.(?:jpg|jpeg|png|gif|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'wasedatime-images',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 90 * 24 * 60 * 60
              },
              cacheableResponse: { statuses: [0, 200] },
            }
          },
          {
            urlPattern: /src\/.*\.(?:html|css|js|ts|tsx|ejs|json)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'wasedatime-codes',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 14 * 24 * 60 * 60
              },
              cacheableResponse: { statuses: [0, 200] },
            }
          },
        ],
      }),
    ],
    externals: ["single-spa", "react", "react-dom"],
  });
};
