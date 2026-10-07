import { copy } from '@/data/copy';
import { Mail, MapPin, Check } from 'lucide-react';
import { PageHero } from '@/components/ui';
import { ContactForm } from '@/components/contact-form';
import { site } from '@/data/site';
import { plans } from '@/data/pricing';
import { services } from '@/data/services';
import { isContactConfigured } from '@/lib/contact';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Let’s Grow Your Brand',
  'Book a free 30-minute brand audit with MyBrandsBuddy. Tell us about your business and take the next step online.',
  '/contact',
);
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; service?: string }>;
}) {
  const params = await searchParams;
  const selected = params.plan || params.service || '';
  const allowed = [...plans.map((p) => p.name), ...services.map((s) => s.title)];
  const initialInterest = allowed.includes(selected) ? selected : 'Free brand audit';
  return (
    <>
      <PageHero
        eyebrow={copy.app_contact.lets_start_a_conversation}
        title={
          <>
            {copy.app_contact.your_next_big_move}
            <br />
            <span className="gradient-text">{copy.app_contact.starts_with_hello}</span>
          </>
        }
        description={copy.app_contact.tell_us_where_you_are_and_where}
      />
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>
              {copy.app_contact.good_things_start}
              <br />
              {copy.app_contact.with_a_conversation}
            </h2>
            <p>{site.auditDescription}</p>
            <div className="contact-channel">
              <Mail aria-hidden="true" />
              <div>
                <strong>{copy.app_contact.email_your_buddy}</strong>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </div>
            <div className="contact-channel">
              <MapPin aria-hidden="true" />
              <div>
                <strong>{copy.app_contact.local_understanding_national_reach}</strong>
                <span>{site.location}</span>
              </div>
            </div>
            <div className="audit-box">
              <h3>{copy.app_contact.in_your_free_audit_well_discuss}</h3>
              <ul className="check-list">
                {[
                  'Your business and ideal customers',
                  'Gaps in your current online presence',
                  'Practical next steps for your growth',
                ].map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ContactForm initialInterest={initialInterest} enabled={isContactConfigured()} />
        </div>
      </section>
    </>
  );
}
