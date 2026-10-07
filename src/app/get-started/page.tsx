import { PageHero } from '@/components/ui';
import { ContactForm } from '@/components/contact-form';
import { isContactConfigured } from '@/lib/contact';
import { pageMetadata } from '@/lib/seo';
import { allServices } from '@/data/services';
import { onboardingSteps } from '@/data/agency';
export const metadata = pageMetadata(
  'Start a Project',
  'Tell MyBrandsBuddy what you are building. A clear brief, a thoughtful plan, and a connected team for your next move.',
  '/get-started',
);
export default async function GetStarted({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const interest = allServices.some((s) => s.title === params.service)
    ? params.service!
    : 'Free brand audit';
  return (
    <>
      <PageHero
        eyebrow="Your next chapter"
        title={
          <>
            Big ideas start with
            <br />
            <em>a simple hello.</em>
          </>
        }
        description="A new brand, a better website, a stronger presence — tell us what is on your mind. We’ll work out the right next step together."
      />
      <section className="section">
        <div className="container get-started-layout">
          <div>
            <span className="eyebrow">What happens next</span>
            <h2>
              A clear path from
              <br />
              conversation to creation.
            </h2>
            <ol className="onboarding-steps">
              {onboardingSteps.map((s) => (
                <li key={s.title}>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p>
              Please share a short brief, not sensitive financial documents or account passwords.
            </p>
          </div>
          <ContactForm initialInterest={interest} enabled={isContactConfigured()} />
        </div>
      </section>
    </>
  );
}
