import type { MetadataRoute } from 'next';
import { site, navigation } from '@/data/site';
import { services } from '@/data/services';
import { caseStudies } from '@/data/case-studies';
import { articles } from '@/data/blog';
export default function sitemap(): MetadataRoute.Sitemap { return [...navigation.map(n => n.href), '/privacy', ...services.map(s => `/services/${s.slug}`), ...caseStudies.map(s => `/case-studies/${s.slug}`), ...articles.map(a => `/blog/${a.slug}`)].map(path => ({ url: `${site.url}${path === '/' ? '' : path}`, changeFrequency: 'monthly', priority: path === '/' ? 1 : .7 })); }
