import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { PageHero, ButtonLink, Process, CTA } from '@/components/ui';
import { services } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
export const dynamicParams = false;
export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) return {}; return pageMetadata(service.title, service.description, `/services/${slug}`); }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(s => s.slug === slug); if (!service) notFound(); return <><PageHero eyebrow={service.title} title={service.headline} description={service.intro}><ButtonLink href={`/contact?service=${encodeURIComponent(service.title)}`}>Let’s talk {service.shortTitle.toLowerCase()}</ButtonLink></PageHero><section className="section"><div className="container detail-layout"><div><h2>Built around your business.</h2><p>{service.audience}</p><h2>Progress you can understand.</h2><p>{service.outcome}</p><Link href="/pricing" className="text-link">Explore packages and pricing →</Link></div><aside className="detail-panel"><h2>What we can help with</h2><ul className="check-list">{service.deliverables.map(item => <li key={item}><Check size={18} aria-hidden="true"/>{item}</li>)}</ul><p>We’ll agree the deliverables and scope before work begins.</p></aside></div></section><Process/><CTA/></>; }
