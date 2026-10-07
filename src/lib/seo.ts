import type { Metadata } from 'next';
import { site } from '@/data/site';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
