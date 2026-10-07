import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from './ui';
import { agency } from '@/data/agency';
export function AgencyCTA() {
  return (
    <section className="agency-cta">
      <div className="container">
        <span className="eyebrow">{agency.final.eyebrow}</span>
        <div className="cta-editorial">
          <h2>
            {agency.final.title.split('\n')[0]}
            <br />
            <em>{agency.final.title.split('\n')[1]}</em>
          </h2>
          <ArrowUpRight aria-hidden="true" />
        </div>
        <div className="cta-bottom">
          <p>{agency.final.body}</p>
          <div className="hero-actions">
            <ButtonLink href="/get-started">Start a Project</ButtonLink>
            <ButtonLink href="/contact?intent=consultation" secondary>
              Book a Consultation
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
