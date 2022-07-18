/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'loremflickr.com', 'i.imgur.com'],
  },
}

module.exports = nextConfig
