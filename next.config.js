/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true,
  },
  env: {
    SECRET: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
