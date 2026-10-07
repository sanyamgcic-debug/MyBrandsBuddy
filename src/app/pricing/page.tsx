import { AgencyCTA as CTA } from '@/components/agency-cta';
import { copy } from '@/data/copy';
import { PageHero, PricingCards, SectionHeading, FAQ } from '@/components/ui';
import { addOns, formatPrice } from '@/data/pricing';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Growth Packages & Pricing',
  'Starter Buddy at ₹8,000, Growth Buddy at ₹18,000 and Scale Buddy at ₹35,000 per month. Explore packages and one-time add-ons.',
  '/pricing',
);
export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={copy.app_pricing.invest_in_your_next_chapter}
        title={
          <>
            {copy.app_pricing.a_little_support}
            <br />
            <span className="gradient-text">{copy.app_pricing.a_lot_of_possibility}</span>
          </>
        }
        description={copy.app_pricing.choose_a_starting_point_that_fits_your}
      />
      <section className="section pricing-section">
        <div className="container">
          <PricingCards />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={copy.app_pricing.a_little_extra_when_you_need_it}
            title={copy.app_pricing.focused_help_flexible_addons}
            description={copy.app_pricing.need_one_specific_piece_of_the_puzzle}
          />
          <div className="addons">
            {addOns.map((item) => (
              <article className="addon" key={item.name}>
                <h3>{item.name}</h3>
                <div>
                  <strong>{formatPrice(item.price)}</strong>
                  <small>{item.unit}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
