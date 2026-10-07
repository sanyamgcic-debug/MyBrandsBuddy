import { editorialCopy } from '@/data/interface';
import { PageHero } from '@/components/ui';
import { Portfolio } from '@/components/portfolio';
import { AgencyCTA } from '@/components/agency-cta';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Work & Creative Directions',
  'Explore MyBrandsBuddy’s creative direction across branding, websites, social, video, real estate, performance and content. Concept work is clearly labelled.',
  '/work',
);
export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="A sense of what’s possible"
        title={
          <>
            Ideas with a point of view.
            <br />
            <em>Work with a purpose.</em>
          </>
        }
        description={editorialCopy.work.intro}
      />
      <section className="section">
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <AgencyCTA />
    </>
  );
}
