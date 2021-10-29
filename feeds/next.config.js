/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withTM = require('next-transpile-modules')(['@bit/wasedatime.core.ts.utils.responsive-utils']);
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([[optimizedImages, {}]], withTM({
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    disableStaticImages: true
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
}))