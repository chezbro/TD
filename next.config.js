// @ts-check

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["uifaces.co"],
  },
};

// Export the config wrapped with withContentlayer
module.exports = withContentlayer(nextConfig);
