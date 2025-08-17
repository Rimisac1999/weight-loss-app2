/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 14, no need for experimental flag
  
  // Handle subdomain routing
  async rewrites() {
    return [
      // Rewrite tools.bonnevalsolutions.com to /tools-domain
      {
        source: '/:path*',
        destination: '/tools-domain/:path*',
        has: [
          {
            type: 'host',
            value: 'tools.bonnevalsolutions.com',
          },
        ],
      },
    ]
  },
  
  // Handle different domains
  async headers() {
    return [
      {
        source: '/tools-domain/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 