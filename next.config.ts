import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: "i.pravatar.cc",
        port: '',
        pathname: '/50**',
        search: '',
      },
       {
        protocol: 'https',
        hostname: "example.com",
        port: '',
        pathname: '**',
        search: '',
      }
    ],
  },
};

export default nextConfig;
