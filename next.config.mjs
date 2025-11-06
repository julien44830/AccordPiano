/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
