'use client';
import { copy } from '@/data/copy';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { plans } from '@/data/pricing';
import { allServices as services } from '@/data/services';
import { site } from '@/data/site';
import { budgetRanges } from '@/data/agency';
import { contactSchema } from '@/lib/contact';
export function ContactForm({
  initialInterest,
  enabled,
}: {
  initialInterest: string;
  enabled: boolean;
}) {
  const [status, setStatus] = useState('');
  const [failed, setFailed] = useState(false);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || sent) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    const result = contactSchema.safeParse({
      ...Object.fromEntries(values),
      consent: values.get('consent') === 'on',
    });
    if (!result.success) {
      setFailed(true);
      setStatus(result.error.issues[0].message);
      const field = form.elements.namedItem(String(result.error.issues[0].path[0]));
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    if (!enabled) {
      const { name, email, business, interest, message, phone, budget } = result.data;
      const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nPhone: ${phone}\nBudget: ${budget}\nInterest: ${interest}\n\n${message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${interest} — ${business}`)}&body=${encodeURIComponent(body)}`;
      setFailed(false);
      setStatus(
        'Your email draft is ready in your email app. Please send it there to complete your enquiry. Nothing has been submitted by this website.',
      );
      return;
    }
    setPending(true);
    setStatus('');
    setFailed(false);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || 'We couldn’t send your enquiry. Please try email.');
      setSent(true);
      setStatus('Your enquiry has been sent. Thank you for telling us about your business.');
      form.reset();
    } catch (error) {
      setFailed(true);
      setStatus(
        error instanceof Error ? error.message : 'Something went wrong. Please email us directly.',
      );
    } finally {
      setPending(false);
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} aria-busy={pending}>
      <h2>{copy.components_contact_form.tell_us_about_your_next_chapter}</h2>
      <p>
        {enabled
          ? 'A few details will help us start the right conversation.'
          : 'Fill in your details to prepare an email. Your email app opens when you continue; send the draft there.'}
      </p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">{copy.components_contact_form.your_name}</label>
          <input
            className="du-input w-full"
            id="name"
            name="name"
            autoComplete="name"
            placeholder={copy.components_contact_form.your_name_2}
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div className="field">
          <label htmlFor="email">{copy.components_contact_form.email_address}</label>
          <input
            className="du-input w-full"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={copy.components_contact_form.youyourbusinesscom}
            required
            maxLength={254}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="business">{copy.components_contact_form.business_name}</label>
        <input
          className="du-input w-full"
          id="business"
          name="business"
          autoComplete="organization"
          placeholder={copy.components_contact_form.the_business_youre_building}
          required
          minLength={2}
          maxLength={160}
        />
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            className="du-input w-full"
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
          />
        </div>
        <div className="field">
          <label htmlFor="budget">Indicative budget</label>
          <select className="du-select w-full" id="budget" name="budget">
            {budgetRanges.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="interest">{copy.components_contact_form.how_can_we_help}</label>
        <select
          className="du-select w-full"
          id="interest"
          name="interest"
          defaultValue={initialInterest}
        >
          <option>{copy.components_contact_form.free_brand_audit}</option>
          <optgroup label="Growth packages">
            {plans.map((plan) => (
              <option key={plan.name}>{plan.name}</option>
            ))}
          </optgroup>
          <optgroup label="Services">
            {services.map((service) => (
              <option key={service.slug}>{service.title}</option>
            ))}
          </optgroup>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">{copy.components_contact_form.what_would_you_like_to_grow}</label>
        <textarea
          className="du-textarea w-full"
          id="message"
          name="message"
          placeholder={copy.components_contact_form.tell_us_what_you_do_where_youre}
          required
          minLength={20}
          maxLength={3000}
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">{copy.components_contact_form.leave_this_field_empty}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent">
        <input
          className="du-checkbox du-checkbox-primary"
          type="checkbox"
          name="consent"
          required
        />
        <span>
          {copy.components_contact_form.i_agree_to_be_contacted_about_this}
          <Link href="/privacy">{copy.components_contact_form.privacy_policy}</Link>.
        </span>
      </label>
      <button
        className="du-btn du-btn-primary button button-primary"
        disabled={pending || sent}
        type="submit"
      >
        {pending ? 'Sending…' : sent ? 'Enquiry sent' : 'Start the Conversation'}
        {pending ? (
          <span className="du-loading du-loading-spinner du-loading-sm" aria-hidden="true" />
        ) : (
          <ArrowUpRight size={18} aria-hidden="true" />
        )}
      </button>
      {status && (
        <div className={`form-status ${failed ? 'error' : ''}`} role={failed ? 'alert' : 'status'}>
          {status}
        </div>
      )}
      <p className="email-fallback">
        {copy.components_contact_form.prefer_to_email}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </form>
  );
}
