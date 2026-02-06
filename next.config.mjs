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
     
    ],
  },
  // ... your other config (if any)
};

export default nextConfig;
