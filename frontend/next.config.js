/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000'
      }
    ]
  }
};

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl({
  ...nextConfig,
});
