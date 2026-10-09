import { editorialCopy } from '@/data/interface';
import Image from 'next/image';
import BlurText from '@/components/react-bits/blur-text';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ButtonLink, SectionHeading } from '@/components/ui';
import { HeroEcosystem, GrowthEcosystem, Industries } from '@/components/agency-interactions';
import { ServiceDirectory } from '@/components/service-directory';
import { ProcessTimeline } from '@/components/process-timeline';
import { Portfolio } from '@/components/portfolio';
import { AgencyCTA } from '@/components/agency-cta';
import { Reveal } from '@/components/reveal';
import { ArticleCard } from '@/components/cards';
import { agency } from '@/data/agency';
import { articles } from '@/data/blog';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'From Getting Found to Getting Chosen',
  'Strategy, digital marketing, branding, websites and creative production. MyBrandsBuddy connects the work your business needs to grow.',
  '/',
);
export default function Home() {
  return (
    <>
      <section className="premium-hero">
        <div className="container premium-hero-grid">
          <div className="premium-hero-copy">
            <span className="eyebrow">
              <span />
              {agency.hero.eyebrow}
            </span>
            <h1>
              <BlurText text={agency.hero.first} />
              <br />
              <span>
                to getting <em>chosen.</em>
              </span>
            </h1>
            <p>{agency.hero.description}</p>
            <div className="hero-actions">
              <ButtonLink href="/get-started">{agency.hero.primary}</ButtonLink>
              <ButtonLink href="/services" secondary>
                {agency.hero.secondary}
              </ButtonLink>
            </div>
            <div className="hero-signoff">
              <span className="status-dot" />
              {editorialCopy.home.signoff}
            </div>
          </div>
          <HeroEcosystem />
        </div>
        <div className="container hero-footline">
          <span>STRATEGY / CREATIVE / TECHNOLOGY / GROWTH</span>
          <a href="#the-big-picture">
            Explore the bigger picture
            <ArrowDown size={14} aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="positioning-band" id="the-big-picture">
        <div className="container">
          <span className="eyebrow">The bigger picture</span>
          <h2>{agency.positioning}</h2>
          <p>{agency.positioningBody}</p>
        </div>
      </section>
      <section className="section capabilities-section w-full px-3 sm:px-6 md:px-8 lg:px-10" id="services">
        <div className="w-full">
          <Reveal direction="up" distance={28}>
            <div className="section-heading-row max-w-7xl mx-auto px-2 sm:px-4 mb-8">
              <SectionHeading
                eyebrow="01 / Connected capabilities"
                title={
                  <>
                    Different disciplines.
                    <br />
                    <em>One clear direction.</em>
                  </>
                }
              />
              <span className="section-aside">{editorialCopy.home.servicesAside}</span>
            </div>
          </Reveal>
          <ServiceDirectory />
        </div>
      </section>
      <section className="section ecosystem-section">
        <div className="container">
          <Reveal direction="up" distance={28}>
            <SectionHeading
              eyebrow="02 / Built to work together"
              title={
                <>
                  One business.
                  <br />
                  <em>Many growth levers.</em>
                </>
              }
              description={editorialCopy.home.ecosystemIntro}
            />
          </Reveal>
          <GrowthEcosystem />
        </div>
      </section>
      <section className="production-banner">
        <Image
          src="/images/production-studio.webp"
          alt="Editorial concept of a professional cinema camera on a studio set"
          fill
          sizes="100vw"
        />
        <div className="container">
          <Reveal direction="up" distance={32}>
            <span className="eyebrow">Thoughtfully planned. Beautifully made.</span>
            <h2>
              Make the thinking
              <br />
              <em>worth seeing.</em>
            </h2>
            <ButtonLink href="/services/video-production" secondary>
              Explore creative production
            </ButtonLink>
            <span className="image-caption">EDITORIAL CONCEPT / CREATIVE PRODUCTION</span>
          </Reveal>
        </div>
      </section>
      <section className="section why-editorial">
        <div className="container why-layout">
          <div>
            <Reveal direction="up" distance={24}>
              <span className="eyebrow">03 / The way we think</span>
              <h2>
                The idea is only as good
                <br />
                as <em>what happens next.</em>
              </h2>
              <p>{agency.whyIntro}</p>
              <Link className="text-link" href="/about">
                A little more about us
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="principle-list">
            {agency.principles.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} distance={20} direction="up">
                <article>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <section className="section work-section">
        <div className="container">
          <Reveal direction="up" distance={24}>
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="04 / A sense of what’s possible"
                title={
                  <>
                    Thinking you can see.
                    <br />
                    <em>Ideas you can feel.</em>
                  </>
                }
              />
              <Link href="/work" className="text-link">
                Explore creative directions
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <Portfolio featured />
        </div>
      </section>
      <section className="section industry-section">
        <div className="container">
          <Reveal direction="up" distance={24}>
            <SectionHeading
              eyebrow="05 / Your world, understood"
              title={
                <>
                  Different markets.
                  <br />
                  <em>Real business context.</em>
                </>
              }
            />
          </Reveal>
          <Industries />
        </div>
      </section>
      <section className="value-statement">
        <div className="container">
          <span className="eyebrow">The things worth building</span>
          <h2>
            A clearer brand. A stronger presence.
            <br />
            <em>A more connected business.</em>
          </h2>
          <div>
            <p>{editorialCopy.home.valueBody}</p>
            <Link href="/get-started" className="text-link">
              {editorialCopy.home.valueLink}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section insights-section">
        <div className="container">
          <Reveal direction="up" distance={24}>
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="06 / Notes for the next move"
                title={
                  <>
                    Useful thinking.
                    <br />
                    <em>Worth a read.</em>
                  </>
                }
              />
              <Link className="text-link" href="/blog">
                All insights
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
          <div className="grid-three">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 90} distance={24} direction="up">
                <ArticleCard article={article} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AgencyCTA />
    </>
  );
}
