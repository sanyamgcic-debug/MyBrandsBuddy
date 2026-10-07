import { editorialCopy } from '@/data/interface';
import Image from 'next/image';
import { PageHero, ButtonLink } from '@/components/ui';
import { ProcessTimeline } from '@/components/process-timeline';
import { AgencyCTA } from '@/components/agency-cta';
import { agency } from '@/data/agency';
import { about } from '@/data/about';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'A Growth Partner Who Sees the Whole Picture',
  'Meet MyBrandsBuddy: a focused partner connecting strategy, creativity and technology for businesses across India.',
  '/about',
);
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="A little about your buddy"
        title={
          <>
            Business thinking.
            <br />
            Creative instinct.
            <br />
            <em>Connected execution.</em>
          </>
        }
        description={about.intro}
      />
      <section className="section">
        <div className="container about-editorial">
          <div className="about-manifesto">
            <span className="eyebrow">What we believe</span>
            <h2>
              Good businesses deserve
              <br />
              <em>a bigger stage.</em>
            </h2>
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ButtonLink href="/get-started">Let’s meet your business</ButtonLink>
          </div>
          <div className="about-image">
            <Image
              src="/images/production-studio.webp"
              alt="Editorial concept of a camera in a creative studio"
              fill
              sizes="(max-width: 700px) 100vw, 45vw"
            />
            <span>THINK CLEARLY. MAKE CAREFULLY.</span>
            <small>Editorial concept imagery</small>
          </div>
        </div>
      </section>
      <section className="section why-editorial">
        <div className="container why-layout">
          <div>
            <span className="eyebrow">What working together looks like</span>
            <h2>
              One shared brief.
              <br />
              <em>A more connected team.</em>
            </h2>
            <p>{editorialCopy.about.approach}</p>
          </div>
          <div className="principle-list">
            {agency.principles.map((p, i) => (
              <article key={p.title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <AgencyCTA />
    </>
  );
}
