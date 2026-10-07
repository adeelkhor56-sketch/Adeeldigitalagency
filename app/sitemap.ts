import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { BLOG_POSTS } from '@/data/blog';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = AGENCY_CONFIG.siteUrl;

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/testimonials',
    '/blog',
    '/faq',
    '/contact',
    '/privacy-policy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
