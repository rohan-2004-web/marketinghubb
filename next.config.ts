import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www only for the root domain
      {
        source: '/:path((?!api).*)',
        has: [
          {
            type: 'host',
            value: 'marketinghubb.in',
          },
        ],
        destination: 'https://www.marketinghubb.in/:path',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; font-src 'self' https: data:",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
