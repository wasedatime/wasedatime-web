/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["wasedatime-ui"],
}

module.exports = nextConfig
