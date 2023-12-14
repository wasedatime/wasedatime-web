/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ["wasedatime-ui"],
    images: {
      unoptimized: true,
    },
    assetPrefix: process.env.APP_ENV = "production",
    env: {
      APP_ENV: process.env.APP_ENV || "development"
    },
    distDir: "dist",
  }
  
  module.exports = nextConfig