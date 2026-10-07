import Link from 'next/link';
import { Fragment } from 'react';
import { ButtonLink } from './ui';
import { ServiceScene } from './service-scenes/service-scene';
import { Reveal } from './reveal';
import { serviceContact, type ServiceCopy, type CopyBlock } from '@/data/service-copy';
import type { Service } from '@/data/services';
import { site } from '@/data/site';
import { serializeJsonLd } from '@/lib/seo';
import './exact-service-page.css';

// Only Markdown emphasis is transformed; punctuation, spelling and words remain unchanged.
export function InlineCopy({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
        .map((part, i) =>
          part.startsWith('**') ? (
            <strong key={i}>{part.slice(2, -2)}</strong>
          ) : part.startsWith('*') ? (
            <em key={i}>{part.slice(1, -1)}</em>
          ) : (
            <Fragment key={i}>{part}</Fragment>
          ),
        )}
    </>
  );
}
function Block({ block }: { block: CopyBlock }) {
  if (block.kind === 'faq')
    return (
      <details open>
        <summary>
          <span data-copy-unit>
            <InlineCopy text={block.question} />
          </span>
          <span aria-hidden="true">+</span>
        </summary>
        <p data-copy-unit>
          <InlineCopy text={block.answer} />
        </p>
      </details>
    );
  if (block.kind === 'ul' || block.kind === 'ol') {
    const Tag = block.kind;
    return (
      <Tag className={`source-list source-${block.kind}`}>
        {block.items.map((text, i) => (
          <li key={i} data-copy-unit>
            <Reveal>
              <InlineCopy text={text} />
            </Reveal>
          </li>
        ))}
      </Tag>
    );
  }
  if (block.kind === 'h3')
    return (
      <h3 data-copy-unit>
        <InlineCopy text={block.text} />
      </h3>
    );
  if (block.kind === 'p')
    return (
      <p data-copy-unit>
        <InlineCopy text={block.text} />
      </p>
    );
}
export function ExactServicePage({ content, service }: { content: ServiceCopy; service: Service }) {
  const href = `/contact?service=${encodeURIComponent(service.title)}`;
  return (
    <article
      className={`service-detail exact-service theme-${service.theme}`}
      data-source-page={content.number}
    >
      <section className="service-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{content.title}</span>
          </nav>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <h1 data-copy-unit>{content.h1}</h1>
              <p className="source-subheadline" data-copy-unit>
                {content.subheadline}
              </p>
            </div>
            <ServiceScene theme={service.theme} slug={service.slug} />
          </div>
        </div>
      </section>
      <section className="section source-intro">
        <div className="container source-reading">
          {content.intro.map((text, i) => (
            <p key={i} data-copy-unit>
              <InlineCopy text={text} />
            </p>
          ))}
        </div>
      </section>
      {content.sections.map((section, i) => (
        <section
          className={`section source-section ${section.heading === 'FAQs' ? 'source-faq' : ''} ${section.blocks.some((b) => b.kind === 'ol') ? 'source-process' : ''}`}
          key={i}
        >
          <div className="container source-section-grid">
            <Reveal>
              <h2 data-copy-unit>{section.heading}</h2>
            </Reveal>
            <div className={section.heading === 'FAQs' ? 'faq-list' : 'source-blocks'}>
              {section.blocks.map((block, j) => (
                <Block block={block} key={j} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section source-cta">
        <div className="container">
          <div className="source-cta-content" data-copy-cta>
            {content.cta.split(/(\*\*\[[^\]]+\]\*\*)/g).map((part, i) => {
              const match = part.match(/^\*\*\[([^\]]+)\]\*\*$/);
              if (!match)
                return (
                  <span key={i}>
                    <InlineCopy text={part} />
                  </span>
                );
              const whatsapp = /WhatsApp/i.test(match[1]);
              if (whatsapp && !serviceContact.whatsappUrl)
                return (
                  <button
                    key={i}
                    type="button"
                    disabled
                    className="du-btn button button-secondary"
                    title="WhatsApp is not configured. Use the consultation link to contact us."
                  >
                    {match[1]}
                  </button>
                );
              return (
                <ButtonLink
                  key={i}
                  href={whatsapp ? serviceContact.whatsappUrl! : href}
                  secondary={whatsapp}
                >
                  {match[1]}
                </ButtonLink>
              );
            })}
          </div>
          {content.cta.includes('WhatsApp') && !serviceContact.whatsappUrl && (
            <p className="source-contact-note">
              WhatsApp is not configured. Please use the consultation link above.
            </p>
          )}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: content.title,
            description: content.metaDescription,
            url: `${site.url}/services/${content.slug}`,
            provider: { '@type': 'Organization', name: site.name, url: site.url },
          }),
        }}
      />
    </article>
  );
}
