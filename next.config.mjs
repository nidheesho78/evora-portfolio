/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        // Optional: tighten security (recommended)
        port: "", // leave empty unless needed
        pathname: "/644af96a8705d9be228df360/**", // ← restricts to your specific Webflow asset folder
      },
      {
        protocol: "https",
        hostname: "uxwing.com", // good free SVG/PNG source (recommended)
      },
      {
        protocol: "https",
        hostname: "www.flaticon.com", // large icon library
      },
      // Add more patterns if you use other CDNs (e.g. Unsplash, your own S3, etc.)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // ... your other config (if any)
};

export default nextConfig;
