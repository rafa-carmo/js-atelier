/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    forceSwcTransforms: true,
    enableUndici: true
  },
}

module.exports = nextConfig
