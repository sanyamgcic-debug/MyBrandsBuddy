import { AgencyCTA as CTA } from '@/components/agency-cta';
import { copy } from '@/data/copy';
import { PageHero, SectionHeading } from '@/components/ui';
import { FilterGrid } from '@/components/filter-grid';
import { framework } from '@/data/site';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Case Studies & Growth Plans',
  'Explore illustrative digital growth strategies for a restaurant, beauty salon and coaching institute in India.',
  '/case-studies',
);
export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow={copy.app_case_studies.strategy_in_context}
        title={
          <>
            {copy.app_case_studies.local_businesses}
            <br />
            <span className="gradient-text">{copy.app_case_studies.bigger_possibilities}</span>
          </>
        }
        description={copy.app_case_studies.a_good_plan_starts_with_the_business}
      />
      <section className="section">
        <div className="container">
          <FilterGrid kind="cases" />
        </div>
      </section>
      <section className="section why-section">
        <div className="container">
          <SectionHeading
            eyebrow={copy.app_case_studies.one_framework_your_own_path}
            title={copy.app_case_studies.the_foundations_of_a_stronger_brand}
          />
          <div className="framework-grid">
            {framework.map((step, i) => (
              <article key={step.title}>
                <span>0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
