import { PageHero, CTA } from '@/components/ui';
import { FilterGrid } from '@/components/filter-grid';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('The Growth Journal', 'Practical SEO, social media and brand strategy guides for small and local businesses in India.', '/blog');
export default function BlogPage() { return <><PageHero eyebrow="The growth journal" title={<>Small insights.<br/><span className="gradient-text">Smarter next steps.</span></>} description="Practical ideas for getting found, building a brand and making your next move online. No jargon required."/><section className="section"><div className="container"><FilterGrid kind="blog"/></div></section><CTA/></>; }
