const withNextIntl = require('next-intl/plugin')

const withPWA = withNextIntl('./src/i18n/index.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withPWA(nextConfig)
