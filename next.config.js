// next.config.js
/** @type {import('next').NextConfig} */

// const withImages = require("next-images");
// module.exports = withImages();



const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
}

module.exports = nextConfig