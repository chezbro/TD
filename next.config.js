// @ts-check

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => [
    {
      source: "/posts/test",
      destination: "/posts/get-started",
    },
  ],
  images: {
    domains: ["uifaces.co"],
  },
  onError(err) {
    process.exit(1);
  },
};

module.exports = withContentlayer(nextConfig);
