import { PageHero, Process, CTA } from '@/components/ui';
import { ServiceCard } from '@/components/cards';
import { services } from '@/data/services';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata('Digital Growth Services', 'Explore SEO, social media, paid ads, branding, web design, content, ASO and WhatsApp marketing for small businesses.', '/services');
export default function ServicesPage() { return <><PageHero eyebrow="Our services" title={<>Everything you need.<br/><span className="gradient-text">One growth buddy.</span></>} description="From strategy to execution, we connect the right digital services around your business, your customers and your next goal."/><section className="section"><div className="container services-grid">{services.map((service,i) => <ServiceCard key={service.slug} service={service} index={i}/>)}</div></section><Process/><CTA/></>; }
