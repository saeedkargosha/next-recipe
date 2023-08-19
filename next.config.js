const withNextIntl = require('next-intl/plugin')

const withPWA = withNextIntl('./src/i18n/index.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.REMOTE_PROTOCOL,
        hostname: process.env.REMOTE_HOSTNAME,
      },
    ],
  },
}

module.exports = withPWA(nextConfig)
