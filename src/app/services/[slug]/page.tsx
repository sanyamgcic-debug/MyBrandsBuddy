import { ServiceScene } from '@/components/service-scenes/service-scene';
import type { Metadata } from 'next';
import { serviceCopy } from '@/data/service-copy';
import { ExactServicePage } from '@/components/exact-service-page';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Check } from 'lucide-react';
import { allServices, services } from '@/data/services';
import { ServiceVisual } from '@/components/service-visual';
import { Reveal } from '@/components/reveal';
import { ButtonLink, SectionHeading } from '@/components/ui';
import { AgencyCTA } from '@/components/agency-cta';
import { pageMetadata, serializeJsonLd } from '@/lib/seo';
import { site } from '@/data/site';
export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = allServices.find((s) => s.slug === slug);
  const content = serviceCopy.find((page) => page.slug === slug);
  if (content)
    return {
      title: { absolute: content.seoTitle },
      description: content.metaDescription,
      alternates: { canonical: `/services/${slug}` },
      openGraph: {
        title: content.seoTitle,
        description: content.metaDescription,
        url: `/services/${slug}`,
        type: 'website',
        images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: content.seoTitle,
        description: content.metaDescription,
        images: ['/opengraph-image'],
      },
    };
  return s ? pageMetadata(s.title, s.description, `/services/${slug}`) : {};
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = allServices.find((s) => s.slug === slug);
  if (!s) notFound();
  const content = serviceCopy.find((page) => page.slug === slug);
  if (content) return <ExactServicePage content={content} service={s} />;
  const cinematic = ['estate', 'video', 'photography'].includes(s.theme);
  return (
    <div className={`service-detail theme-${s.theme}`}>
      <section className={`service-hero ${cinematic ? 'cinematic' : ''}`}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{s.shortTitle}</span>
          </nav>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <span className="eyebrow">
                {s.number} / {s.title}
              </span>
              <h1>
                {s.headline.split('\n')[0]}
                <br />
                <em>{s.headline.split('\n')[1]}</em>
              </h1>
              <p>{s.intro}</p>
              <ButtonLink href={`/get-started?service=${encodeURIComponent(s.title)}`}>
                {s.cta}
              </ButtonLink>
            </div>
            <ServiceScene theme={s.theme} slug={s.slug} />
          </div>
          <div className="service-hero-footer">
            <span>{s.category.toUpperCase()} / MYBRANDSBUDDY</span>
            <a href="#approach">Explore the approach ↓</a>
          </div>
        </div>
      </section>
      <section className="section opportunity-section">
        <div className="container opportunity-grid">
          <span className="eyebrow">The opportunity</span>
          <div>
            <h2>{s.problemTitle}</h2>
            <p>{s.problem}</p>
            {s.theme === 'funding' && (
              <div className="funding-notice">
                Assistance and guidance only. We are not a lender. Approval, eligibility, rates and
                terms are determined by the provider.
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="section service-approach" id="approach">
        <div className="container approach-grid">
          <div className="approach-copy">
            <span className="eyebrow">Our approach</span>
            <h2>{s.approachTitle}</h2>
            <p>{s.approach}</p>
            <div className="service-benefits">
              <h3>What this makes possible</h3>
              {s.benefits.map((b) => (
                <span key={b}>
                  <Check size={17} aria-hidden="true" />
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="inclusions">
            <span className="eyebrow">What’s included</span>
            {s.included.map((item, i) => (
              <Reveal key={item}>
                <div className="inclusion-row">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <h3>{item}</h3>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section service-process">
        <div className="container">
          <SectionHeading eyebrow="From brief to delivery" title="A process with a purpose." />
          <div className="service-process-steps">
            {s.process.map((step, i) => (
              <article key={step}>
                <span>0{i + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="service-showcase">
        <div className="container showcase-layout">
          <ServiceVisual theme={s.theme} />
          <div>
            <span className="eyebrow">A visual direction / concept study</span>
            <h2>
              {s.theme === 'estate'
                ? 'From a space to a story.'
                : s.theme === 'video'
                  ? 'Every frame has a job.'
                  : s.theme === 'branding'
                    ? 'A system, not just a symbol.'
                    : s.approachTitle}
            </h2>
            <p>
              {s.outcome}. This visual study illustrates the approach; it is not a client project or
              a claim of results.
            </p>
            <Link className="text-link" href="/work">
              Explore creative directions
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section service-handover">
        <div className="container handover-grid">
          <div>
            <span className="eyebrow">Who it’s for</span>
            <h2>
              A useful fit for
              <br />
              <em>the right challenge.</em>
            </h2>
            <ul>
              {s.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="deliverables-panel">
            <span className="eyebrow">What you take forward</span>
            <h2>Clear deliverables.</h2>
            <ul className="check-list">
              {s.deliverables.map((d) => (
                <li key={d}>
                  <Check size={18} aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
            <p>Scope, timelines, feedback rounds and final formats are agreed before we begin.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container faq-layout">
          <SectionHeading eyebrow="Before we begin" title="A little more clarity." />
          <div className="faq-list">
            {s.faqs.map((f) => (
              <details key={f.question}>
                <summary>
                  {f.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="container">
          <SectionHeading eyebrow="Better, connected" title="The next piece of the picture." />
          <div className="related-services">
            {s.related
              .map((slug) => services.find((x) => x.slug === slug))
              .filter((x) => !!x)
              .map((related) => (
                <Link key={related.slug} href={`/services/${related.slug}`}>
                  <span>
                    {related.number} / {related.category}
                  </span>
                  <h3>{related.shortTitle}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
          </div>
        </div>
      </section>
      <AgencyCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: s.title,
            description: s.description,
            url: `${site.url}/services/${s.slug}`,
            provider: { '@type': 'Organization', name: site.name, url: site.url },
            areaServed: 'India',
          }),
        }}
      />
    </div>
  );
}
