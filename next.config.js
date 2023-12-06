/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js',
  },
});

module.exports = nextConfig;
