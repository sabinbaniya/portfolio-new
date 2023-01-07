/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.hashnode.com"],
  },
  generateBuildId: () => "BUILD_ID",
};

module.exports = nextConfig;
