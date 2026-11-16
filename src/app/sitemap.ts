import { MetadataRoute } from 'next';
import { PRODUCTS } from '../data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://notion-master-showcase.vercel.app';
  const currentDate = new Date().toISOString();

  // Root Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Individual Product Pages
  PRODUCTS.forEach((product) => {
    routes.push({
      url: `${baseUrl}/product/${product.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return routes;
}
