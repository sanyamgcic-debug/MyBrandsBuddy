import { editorialCopy } from '@/data/interface';
import { PageHero } from '@/components/ui';
import { ServiceDirectory } from '@/components/service-directory';
import { AgencyCTA } from '@/components/agency-cta';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Our Services — 13 Connected Disciplines',
  'Explore strategy, SEO, social media, branding, consulting, loan guidance, websites, design, photography, video, content and performance marketing.',
  '/services',
);
export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="The MyBrandsBuddy ecosystem"
        title={
          <>
            Find the right move.
            <br />
            <em>Connect what comes next.</em>
          </>
        }
        description={editorialCopy.services.intro}
      />
      <section className="section w-full px-3 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full">
          <ServiceDirectory overview />
        </div>
      </section>
      <AgencyCTA />
    </>
  );
}
