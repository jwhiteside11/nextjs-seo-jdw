
const baseURL = process.env.APP_PROD_URL;

export default async function sitemap() {
  const sitemap = [
    `${baseURL}`,
    `${baseURL}/example-page`
  ];

  return sitemap.map(url => {
    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  });
}