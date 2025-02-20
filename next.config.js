/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
  // Server-side environment variables (secrets)
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    NEO4J_URI: process.env.NEO4J_URI,
    NEO4J_USER: process.env.NEO4J_USER,
    NEO4J_PASSWORD: process.env.NEO4J_PASSWORD,
  },
  // Public runtime config (non-secrets)
  publicRuntimeConfig: {
    isProduction: process.env.NODE_ENV === 'production',
  },
  // Disable experimental features
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false
}

module.exports = nextConfig
