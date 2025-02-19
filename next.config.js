/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Environment variables configuration
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  },
  // Server-side environment variables
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  },
  // Public runtime config (be careful not to expose secrets)
  publicRuntimeConfig: {
    // Add any public variables here
  },
  // Disable experimental features
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false
}

module.exports = nextConfig
