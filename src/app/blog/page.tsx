import { editorialCopy } from '@/data/interface';
import { PageHero } from '@/components/ui';
import { FilterGrid } from '@/components/filter-grid';
import { AgencyCTA } from '@/components/agency-cta';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Insights — Notes for Your Next Move',
  'Practical thinking on marketing, branding, search, social media, websites, content and business growth from MyBrandsBuddy.',
  '/blog',
);
export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The MyBrandsBuddy journal"
        title={
          <>
            Less noise.
            <br />
            <em>More useful thinking.</em>
          </>
        }
        description={editorialCopy.blog.intro}
      />
      <section className="section insights-section">
        <div className="container">
          <FilterGrid kind="blog" />
        </div>
      </section>
      <AgencyCTA />
    </>
  );
}
