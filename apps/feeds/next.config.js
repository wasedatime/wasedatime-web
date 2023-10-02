/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["wasedatime-ui"],
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })
    return config
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.APP_ENV === "production" ? "/feeds" : "",
  env: {
    APP_ENV: process.env.APP_ENV || "development",
    MF_FEEDS_DOMAIN: process.env.MF_FEEDS_DOMAIN || "",
  },
  distDir: "dist",
}

module.exports = nextConfig
