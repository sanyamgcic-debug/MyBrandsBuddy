import { copy } from '@/data/copy';
import { PageHero } from '@/components/ui';
import { site } from '@/data/site';
import { pageMetadata } from '@/lib/seo';
export const metadata = pageMetadata(
  'Privacy Policy',
  'How MyBrandsBuddy handles information shared through this website and its enquiry form.',
  '/privacy',
);
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={copy.app_privacy.your_information}
        title={copy.app_privacy.privacy_in_plain_language}
        description={copy.app_privacy.how_we_handle_the_details_you_choose}
      />
      <section className="section">
        <div className="container prose">
          <section>
            <h2>{copy.app_privacy.information_you_share}</h2>
            <p>{copy.app_privacy.when_you_contact_us_you_may_share}</p>
          </section>
          <section>
            <h2>{copy.app_privacy.how_enquiries_are_delivered}</h2>
            <p>{copy.app_privacy.when_the_form_offers_prepare_my_email}</p>
          </section>
          <section>
            <h2>{copy.app_privacy.why_we_use_your_details}</h2>
            <p>{copy.app_privacy.we_use_enquiry_information_to_respond_to}</p>
          </section>
          <section>
            <h2>{copy.app_privacy.storage_and_service_providers}</h2>
            <p>{copy.app_privacy.enquiries_may_be_handled_by_the_email}</p>
          </section>
          <section>
            <h2>{copy.app_privacy.cookies_and_analytics}</h2>
            <p>{copy.app_privacy.this_website_does_not_currently_include_advertising}</p>
          </section>
          <section>
            <h2>{copy.app_privacy.your_choices}</h2>
            <p>
              {copy.app_privacy.you_can_ask_about_correct_or_request}
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {copy.app_privacy.you_may_also_ask_us_to}
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
