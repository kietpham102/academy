/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { hostname: 'utfs.io'},
      { hostname: 'img.clerk.com'}
    ]
  }
};

export default nextConfig;
