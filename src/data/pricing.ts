export type Plan = { name: string; price: number; description: string; popular?: boolean; features: string[]; };
export const plans: Plan[] = [
 { name: 'Starter Buddy', price: 8000, description: 'Build a strong digital foundation.', features: ['Google Business Profile setup', 'Basic SEO — 5 pages', 'Social media setup — 2 platforms', '8 social media posts / month', 'Monthly performance report', 'WhatsApp support'] },
 { name: 'Growth Buddy', price: 18000, description: 'For your next chapter of growth.', popular: true, features: ['Everything in Starter Buddy', 'Advanced SEO — 10 pages + backlinks', '3 social platforms managed', '20 posts + 4 reels / month', 'Facebook & Instagram ads management', 'Monthly brand strategy session', 'Competitor analysis', 'Bi-weekly call + priority support'] },
 { name: 'Scale Buddy', price: 35000, description: 'A bigger vision. A dedicated buddy.', features: ['Everything in Growth Buddy', 'Full brand strategy & positioning', 'SEO + app store optimization', '30 posts + 8 reels + stories / month', 'Google Ads + Meta Ads management', 'Custom landing page design', 'Email marketing campaign', 'Dedicated account manager', 'Weekly calls + 24-hour support'] },
];
export const addOns = [
 { name: 'Logo & brand identity', price: 5000, unit: 'one-time' },
 { name: 'Website design — 5 pages', price: 15000, unit: 'one-time' },
 { name: 'Google Ads setup', price: 3000, unit: 'one-time' },
 { name: 'Social media audit', price: 2500, unit: 'per audit' },
 { name: 'Content writing', price: 800, unit: 'per blog' },
 { name: 'Reel / video editing', price: 1200, unit: 'per video' },
 { name: 'WhatsApp marketing campaign', price: 4000, unit: 'per campaign' },
];
export const pricingNote = 'Advertising spend is extra. Final scope, applicable taxes and payment terms are confirmed in your proposal before work begins.';
export const formatPrice = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
