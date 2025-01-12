export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ["/_next$", "/_next/*", "/*.json$", "/*.js$", "/*.css$"]
    },
    sitemap: `${process.env.APP_PROD_URL}/sitemap.xml`,
  }
}