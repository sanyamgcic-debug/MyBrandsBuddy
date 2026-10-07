import { AgencyCTA as CTA } from '@/components/agency-cta';
import { copy } from '@/data/copy';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { PageHero, ButtonLink } from '@/components/ui';
import { caseStudies, caseStudyDisclosure } from '@/data/case-studies';
import { pageMetadata } from '@/lib/seo';
export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  return study
    ? pageMetadata(`${study.name}: Growth Plan`, study.summary, `/case-studies/${slug}`)
    : {};
}
export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();
  return (
    <>
      <PageHero
        eyebrow={`${study.category} · ${study.location} · Illustrative plan`}
        title={study.name}
        description={study.headline}
      >
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/case-studies">{copy.app_case_studies_detail.case_studies}</Link>
          <span aria-hidden="true">/</span>
          <span>{study.name}</span>
        </nav>
      </PageHero>
      <section className="section">
        <div className="container">
          <p className="disclosure">{caseStudyDisclosure}</p>
          <div className="detail-layout">
            <div>
              <h2>{copy.app_case_studies_detail.the_starting_point}</h2>
              <p>{study.baseline}</p>
              <h2>{copy.app_case_studies_detail.the_growth_plan}</h2>
              <div className="timeline">
                {study.phases.map((phase) => (
                  <article key={phase.title}>
                    <span className="tiny-label">{phase.time}</span>
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="detail-panel">
              <h2>{copy.app_case_studies_detail.the_challenge}</h2>
              <ul className="check-list">
                {study.challenge.map((item) => (
                  <li key={item}>
                    <Check size={17} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <h2>{copy.app_case_studies_detail.the_takeaway}</h2>
              <p>{study.takeaway}</p>
              <ButtonLink>{copy.app_case_studies_detail.build_a_plan_for_my_business}</ButtonLink>
            </aside>
          </div>
          <div className="metric-grid">
            {study.targets.map((target) => (
              <div key={target.label}>
                <strong>{target.value}</strong>
                <span>{target.label}</span>
              </div>
            ))}
          </div>
          <p className="disclosure">
            {copy.app_case_studies_detail.these_are_planning_targets_from_the_supplied}
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
