'use client';

import { useState, useEffect, FormEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { site } from '@/data/site';

const serviceScopes = [
  'Cinematic Video Walkthrough & FPV',
  'Targeted Buyer Acquisition (Meta & Google Ads)',
  'Architectural Drone & Stills Photography',
  'Complete Project Launch Narrative',
  'Founder / Luxury Broker Personal Brand',
];

const budgetTiers = [
  '₹5 Cr – ₹15 Cr Asset',
  '₹15 Cr – ₹50 Cr Estate',
  '₹50 Cr+ Signature Landmark',
  'Multi-Unit Developer Launch',
];

export function MinimalContact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Cinematic Video Walkthrough & FPV',
    'Targeted Buyer Acquisition (Meta & Google Ads)',
  ]);
  const [selectedTier, setSelectedTier] = useState<string>('₹15 Cr – ₹50 Cr Estate');
  const [propertyName, setPropertyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [projectLocation, setProjectLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleSelectProperty = (e: Event) => {
      const customEvent = e as CustomEvent<{ property: string }>;
      if (customEvent.detail?.property) {
        setPropertyName(customEvent.detail.property);
        setNotes(`Inquiry regarding launch narrative for: ${customEvent.detail.property}`);
      }
    };

    window.addEventListener('select-property', handleSelectProperty);
    return () => window.removeEventListener('select-property', handleSelectProperty);
  }, []);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv],
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello MyBrandsBuddy, I would like to consult on Real Estate Marketing & Cinematic Production.\n` +
      `Project: ${propertyName || 'Luxury Development'}\n` +
      `Location: ${projectLocation || 'Unspecified'}\n` +
      `Services: ${selectedServices.join(', ')}`,
  );

  return (
    <section id="contact" className="section-matte-black py-24 md:py-32 relative overflow-hidden architectural-grid-bg">
      {/* Ambient Brand Purple Background Lighting */}
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/15 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-[#8b5cf6] font-bold mb-3">
            05 // Direct Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Launch Your Property with{' '}
            <span className="font-serif italic font-normal text-[#8b5cf6]">
              Architectural Distinction.
            </span>
          </h2>
          <p className="text-base text-white/70 font-light leading-relaxed mt-3 max-w-2xl">
            Whether you are launching a flagship architectural villa, an ultra-luxury penthouse
            collection, or a landmark township, we handle creative production and buyer campaigns
            end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: High-Contrast Minimal Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-8 sm:p-10 rounded-[36px] bg-[#0c0c10] border border-white/15 shadow-2xl relative flex-1 flex flex-col justify-between">
              {isSubmitted ? (
                <div className="py-16 text-center my-auto">
                  <div className="w-16 h-16 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6] text-[#8b5cf6] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Consultation Request Logged</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto mb-6">
                    Our lead architectural producer will review your development requirements and
                    reach out within 24 hours with a custom production and marketing proposal.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono text-white hover:bg-white/10 transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Scope Selection Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-3">
                      Required Marketing & Production Capabilities
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceScopes.map((srv) => {
                        const active = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all text-left cursor-pointer ${
                              active
                                ? 'bg-[#8b5cf6] text-white font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Asset Tier Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-3">
                      Development / Asset Valuation Bracket
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetTiers.map((tier) => {
                        const active = selectedTier === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedTier(tier)}
                            className={`p-2.5 rounded-xl text-[11px] font-mono text-center transition-all cursor-pointer ${
                              active
                                ? 'bg-[#8b5cf6] text-white font-bold border border-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.4)]'
                                : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* High Contrast Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="re-name"
                        className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5"
                      >
                        Your Name / Developer Entity *
                      </label>
                      <input
                        id="re-name"
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="e.g. Elena Rostova / Apex Realty"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="re-contact"
                        className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5"
                      >
                        Phone / WhatsApp / Email *
                      </label>
                      <input
                        id="re-contact"
                        type="text"
                        required
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                        placeholder="+91 98765 43210 or email"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="re-property"
                        className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5"
                      >
                        Property / Project Name
                      </label>
                      <input
                        id="re-property"
                        type="text"
                        value={propertyName}
                        onChange={(e) => setPropertyName(e.target.value)}
                        placeholder="e.g. The Solarium Cantilever"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="re-location"
                        className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5"
                      >
                        Location / City
                      </label>
                      <input
                        id="re-location"
                        type="text"
                        value={projectLocation}
                        onChange={(e) => setProjectLocation(e.target.value)}
                        placeholder="e.g. Goa, South Delhi, Gurugram"
                        className="w-full px-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="re-notes"
                      className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-1.5"
                    >
                      Brief Notes / Target Launch Timeline
                    </label>
                    <textarea
                      id="re-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share details on property completion stage, target buyer demographic, or specific launch goals..."
                      className="w-full px-4 py-3 rounded-2xl bg-black/60 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full re-glow-btn text-xs font-mono uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Request Architectural Consultation'}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Towering Architectural Visual & Direct Priority Action */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Towering Architectural Skyscraper Apex (from reference video) */}
            <div className="relative w-full h-[380px] sm:h-[440px] rounded-[36px] overflow-hidden border border-white/15 shadow-2xl group">
              <Image
                src="/images/real-estate/contact-vertical-tower.jpg"
                alt="Dramatic low-angle view of an illuminated architectural skyscraper apex tapering into twilight"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/20 pointer-events-none" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#8b5cf6]/40 text-[10px] font-mono tracking-widest uppercase text-[#c8a4ff] font-bold">
                  LANDMARK PRODUCTION
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#a855f7] block mb-1">
                  End-to-End Execution
                </span>
                <p className="text-xs text-white/80 font-light backdrop-blur-md bg-black/50 p-3 rounded-2xl border border-white/10">
                  From architectural cinema and FPV fly-throughs to targeted buyer acquisition across India & global NRI hubs.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quick-Action Box */}
            <div className="p-6 rounded-3xl bg-[#0e0e13] border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-white/40">
                  Priority Channel
                </span>
                <span className="text-[10px] font-mono text-[#8b5cf6]">FAST RESPONSE</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">Direct WhatsApp Consultation</h4>
              <p className="text-xs text-white/60 mb-4 font-light">
                Connect directly with our Real Estate Lead for instant portfolio walk-throughs and production schedules.
              </p>
              <a
                href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#20ba5a] transition-all shadow-lg"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Real Estate Team</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Architectural Trust Points */}
            <div className="space-y-3 p-5 rounded-3xl bg-white/[0.02] border border-white/10">
              <div className="flex items-start gap-3 text-xs font-mono text-white/70">
                <ShieldCheck size={16} className="text-[#8b5cf6] shrink-0 mt-0.5" />
                <span>Strict Discretion & NDA Protection for Private Estates</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-white/70">
                <CheckCircle2 size={16} className="text-[#8b5cf6] shrink-0 mt-0.5" />
                <span>On-Site Production across NCR, Goa, Mumbai & International</span>
              </div>
              <div className="flex items-start gap-3 text-xs font-mono text-white/70">
                <Sparkles size={16} className="text-[#8b5cf6] shrink-0 mt-0.5" />
                <span>Zero Clutter Guarantee: Qualified High-Intent Buyer Funnels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
