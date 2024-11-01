/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        scrollRestoration: true,
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'ru',
    },
};

export default nextConfig;
