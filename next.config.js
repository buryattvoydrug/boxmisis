/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = nextConfig
module.exports = {
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
}