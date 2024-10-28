/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.pravatar.cc",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "backend.dhn.io.vn",
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "homeei.com",
            }, {
                protocol: "https",
                hostname: "img.iproperty.com.my",
            },{
                protocol: "http",
                hostname: "localhost",
            },
        ],
    },
};

export default nextConfig;
