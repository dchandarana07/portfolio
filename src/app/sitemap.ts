import { MetadataRoute } from 'next';
import { getAllProjectSlugs } from '@/data/projectsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://divyansh.vercel.app';

  const projectSlugs = getAllProjectSlugs();
  const projectUrls = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...projectUrls,
  ];
}
