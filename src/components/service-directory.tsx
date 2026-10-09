'use client';

import { ScrollStack, type ScrollStackItem } from './react-bits/scroll-stack';

// 5 Curated Discipline Stack Items with full-width showcase imagery and deliverables
const stackItems: ScrollStackItem[] = [
  {
    id: 'strategy',
    number: '01',
    category: 'Strategy',
    title: 'Business & Marketing Consulting',
    headline: 'Strategy before activity. Clear direction before creative noise.',
    description:
      'Review your audience, competitors and current marketing. Set priorities around your budget and the enquiries you want to attract. We start with the business problem, so the plan is built around your goals rather than an arbitrary list of channels.',
    image: '/images/strategy-showcase.jpg',
    imageAlt: 'Creative business strategy and growth analytics dashboard',
    accentColor: '#c084fc',
    deliverables: [
      'Market & Competitor Audit',
      'Growth Roadmap',
      'Audience Intent Mapping',
      'KPI Architecture',
    ],
    subServices: [
      { title: 'Business Consulting', slug: 'business-marketing-consulting' },
      { title: 'Brand Direction', slug: 'brand-strategy' },
      { title: 'Performance Planning', slug: 'performance-marketing' },
    ],
    primaryLink: '/services/business-marketing-consulting',
    primaryLabel: 'Explore Strategy',
  },
  {
    id: 'discovery',
    number: '02',
    category: 'Discovery',
    title: 'SEO & Local Search Dominance',
    headline: 'Be the answer. Not another search result.',
    description:
      'Help the right customers discover your brand at the exact moment they need you. Technical SEO, Google Business Profile optimization, and local search signals working together to drive reliable inbound phone calls and enquiries.',
    image: '/images/mobile-content-shoot.webp',
    imageAlt: 'Digital discovery and social media content creation',
    accentColor: '#34d399',
    deliverables: [
      'Technical SEO Audits',
      'Google Business Profile',
      'Local Keyword Strategy',
      'Organic Search Dominance',
    ],
    subServices: [
      { title: 'SEO & Local Search', slug: 'seo-local-search' },
      { title: 'Social Media Marketing', slug: 'social-media-marketing' },
      { title: 'Paid Search Campaigns', slug: 'paid-search-social' },
    ],
    primaryLink: '/services/seo-local-search',
    primaryLabel: 'Explore Discovery',
  },
  {
    id: 'technology',
    number: '03',
    category: 'Technology',
    title: 'Websites & Digital Experiences',
    headline: 'Technology that earns its place and converts visitors.',
    description:
      'Modern, lightning-fast websites engineered on Next.js. Mobile-first design, seamless navigation, and frictionless contact flows that make enquiries straightforward, load instantly, and keep bounce rates near zero.',
    image: '/images/technology-showcase.jpg',
    imageAlt: 'Modern responsive web application on laptop and smartphone',
    accentColor: '#38bdf8',
    deliverables: [
      'Mobile-First Responsive Design',
      'Next.js High Performance',
      'Conversion Architecture',
      'SEO-Friendly Clean Code',
    ],
    subServices: [
      { title: 'Website Design & Dev', slug: 'website-design-development' },
      { title: 'Landing Pages', slug: 'landing-page-design' },
      { title: 'E-Commerce Growth', slug: 'ecommerce-development' },
    ],
    primaryLink: '/services/website-design-development',
    primaryLabel: 'Explore Technology',
  },
  {
    id: 'creative',
    number: '04',
    category: 'Creative',
    title: 'Brand Identity & Graphic Design',
    headline: 'Creative with a purpose. Unmistakable across every touchpoint.',
    description:
      'Design, copywriting, and visual assets that explain your offer, answer customer questions, and give your brand a distinct personality. From logo marks and brand guidelines to reusable social templates your team can maintain.',
    image: '/images/creative-showcase.jpg',
    imageAlt: 'Editorial brand identity, stationery and visual design system',
    accentColor: '#f472b6',
    deliverables: [
      'Visual Brand Guidelines',
      'Typography & Color Systems',
      'Marketing Collateral',
      'Social Media Toolkits',
    ],
    subServices: [
      { title: 'Graphic Design', slug: 'graphic-design' },
      { title: 'Content Creation', slug: 'content-creation' },
      { title: 'Copywriting & Narrative', slug: 'copywriting' },
    ],
    primaryLink: '/services/graphic-design',
    primaryLabel: 'Explore Creative',
  },
  {
    id: 'production',
    number: '05',
    category: 'Production',
    title: 'Video Production & Motion Studio',
    headline: 'Make the thinking worth seeing. Ideas people remember.',
    description:
      'Cinematic commercial video production, studio product photography, and vertical social reels. We plan, shoot, edit, and deliver visual stories that capture attention, explain complex offerings, and build lasting customer trust.',
    image: '/images/production-studio.webp',
    imageAlt: 'Professional cinema camera and studio lighting set',
    accentColor: '#fb923c',
    deliverables: [
      '4K Commercial Video',
      'Studio Product Photography',
      'Vertical Reels & Shorts',
      'Post-Production & Motion',
    ],
    subServices: [
      { title: 'Video Production', slug: 'video-production' },
      { title: 'Commercial Photography', slug: 'photography' },
      { title: 'Social Video Shoots', slug: 'content-creation' },
    ],
    primaryLink: '/services/video-production',
    primaryLabel: 'Explore Production',
  },
];

export function ServiceDirectory({ overview = false }: { overview?: boolean }) {
  return (
    <div className="w-full">
      <ScrollStack items={stackItems} />
    </div>
  );
}
