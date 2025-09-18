import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn2.thedogapi.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn2.thecatapi.com',
            },
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
            },
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'placekitten.com',
            },
        ],
    },
};

export default nextConfig;