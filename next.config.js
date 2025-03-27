/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'cdn.pixabay.com', 'source.unsplash.com'],
    serverRuntimeConfig: {
      port: process.env.PORT || 3000,
    }
  }
};

module.exports = config;
