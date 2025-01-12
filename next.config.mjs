/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    APP_TITLE,
    APP_DESC,
    APP_KEYWORDS,
    APP_THUMBNAIL,
    APP_PROD_URL
  }
};

export default nextConfig;
