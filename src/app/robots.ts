import { MetadataRoute } from 'next';
import { siteMetadata } from '@/data/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteMetadata.url.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
