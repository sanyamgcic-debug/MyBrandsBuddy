import { copy } from '@/data/copy';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import type { ReactNode } from 'react';
import { site, processSteps, faqs } from '@/data/site';
import { plans, formatPrice, pricingNote } from '@/data/pricing';
export function ButtonLink({
  href = '/contact',
  children,
  secondary = false,
  className = '',
}: {
  href?: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`du-btn ${secondary ? 'du-btn-outline' : 'du-btn-primary'} button ${secondary ? 'button-secondary' : 'button-primary'} ${className}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero dark">
      <div className="container">
        <span className="eyebrow">
          <span />
          {eyebrow}
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
      <div className="hero-orbit" aria-hidden="true" />
    </section>
  );
}
export function CTA() {
  return (
    <section className="section cta-section">
      <div className="container cta-panel dark">
        <div>
          <span className="eyebrow">
            <span />
            {copy.components_ui.your_next_chapter_starts_here}
          </span>
          <h2>
            {copy.components_ui.big_plans_for_your_business}
            <br />
            <span className="gradient-text">{copy.components_ui.lets_make_the_next_move}</span>
          </h2>
          <p>{site.auditDescription}</p>
          <ButtonLink>{site.audit}</ButtonLink>
        </div>
        <div className="cta-symbol" aria-hidden="true">
          <ArrowUpRight strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
export function Process() {
  return (
    <section className="section process dark">
      <div className="container">
        <SectionHeading
          light
          eyebrow={copy.components_ui.a_little_clarity_a_lot_of_possibility}
          title={
            <>
              {copy.components_ui.good_growth_starts}
              <br />
              {copy.components_ui.with_a_good_plan}
            </>
          }
        />
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <article key={step.title}>
              <div className="step-top">
                <span className="step-number">0{i + 1}</span>
                {i < 2 && <ArrowRight aria-hidden="true" />}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function PricingCards() {
  return (
    <>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className={`price-card ${plan.popular ? 'popular' : ''}`} key={plan.name}>
            {plan.popular && (
              <div className="popular-label">
                <span />
                {copy.components_ui.most_popular}
              </div>
            )}
            <span className="plan-name">{plan.name}</span>
            <p>{plan.description}</p>
            <div className="price">
              {formatPrice(plan.price)}
              <span>{copy.components_ui.month}</span>
            </div>
            <ButtonLink
              href={`/contact?plan=${encodeURIComponent(plan.name)}`}
              secondary={!plan.popular}
            >
              {copy.components_ui.choose}
              {plan.name.split(' ')[0]}
            </ButtonLink>
            <div className="price-divider" />
            <ul className="check-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Check size={17} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="pricing-note">{pricingNote}</p>
    </>
  );
}
export function FAQ() {
  return (
    <section className="section">
      <div className="container faq-layout">
        <SectionHeading
          eyebrow={copy.components_ui.a_few_things_you_might_be_wondering}
          title={
            <>
              {copy.components_ui.good_questions}
              <br />
              {copy.components_ui.straight_answers}
            </>
          }
        />
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
