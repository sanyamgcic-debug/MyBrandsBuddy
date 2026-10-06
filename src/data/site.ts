export const site = {
  name: 'MyBrandsBuddy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mybrandsbuddy.com',
  email: 'hello@mybrandsbuddy.com',
  tagline: 'Small businesses. Bigger tomorrows.',
  description: 'Your digital growth partner for small and local businesses in India. SEO, social media, brand strategy and websites built around your market.',
  location: 'Based in India. Growing brands nationally.',
  audit: 'Get a free brand audit',
  auditDescription: 'Start with a free 30-minute brand audit. We’ll look at what’s holding your business back online and map out your next steps.',
} as const;
export const navigation = [
  { label: 'Home', href: '/' }, { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' }, { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' },
] as const;
export const industries = ['Restaurants & cafés', 'Salons & beauty', 'Coaching institutes', 'Local retail', 'Clinics & services', 'D2C brands'];
export const reasons = [
  { icon: 'Heart', title: 'We get small business.', description: 'Every rupee matters. We track your investment and focus on the work that moves your business forward.' },
  { icon: 'Users', title: 'One buddy. Full service.', description: 'SEO, social media, ads and branding — one connected team, one clear direction.' },
  { icon: 'ChartNoAxesCombined', title: 'Clarity at every step.', description: 'No hiding behind fancy dashboards. You’ll know what we’re doing and how it’s performing.' },
  { icon: 'Target', title: 'Growth you can measure.', description: 'More visitors, more enquiries, more sales. We measure the things that matter to your business.' },
] as const;
export const processSteps = [
  { title: 'Understand your business', description: 'We listen to your goals, review your online presence and get to know your market.' },
  { title: 'Build your growth plan', description: 'A practical strategy shaped around your customers, priorities and budget.' },
  { title: 'Execute. Learn. Grow.', description: 'We put the plan to work, report clearly and keep improving together.' },
];
export const framework = [
  { title: 'Audit', description: 'Understand your customers, competitors and the gaps in your online presence.' },
  { title: 'Foundation', description: 'Connect your Google Business Profile, social accounts, website and WhatsApp Business.' },
  { title: 'Visibility', description: 'Build discovery through search, useful content, local listings and customer reviews.' },
  { title: 'Conversion', description: 'Make the next step clear, from booking an appointment to placing an order.' },
  { title: 'Scale', description: 'Review the data, build referrals and invest in the channels that are working.' },
];
export const faqs = [
  { question: 'Who do you work with?', answer: 'We focus on small and local businesses across India: restaurants, salons, coaching institutes, clinics, shops, D2C brands and service providers.' },
  { question: 'What happens in the free brand audit?', answer: 'In a 30-minute conversation, we review your current online presence, discuss your ideal customer and identify practical opportunities for growth. You can then decide whether a package is right for you.' },
  { question: 'Is advertising spend included?', answer: 'No. Advertising spend is separate from the management fee. We agree your campaign budget and scope with you before launching paid activity.' },
  { question: 'Can I start with just one service?', answer: 'Yes. You can choose a focused service or one of our one-time add-ons. We’ll recommend a scope based on your business rather than a package you don’t need.' },
  { question: 'When will I see results?', answer: 'Timing depends on your starting point, market and channels. We establish a baseline, agree priorities and review progress with you. Search rankings, leads and revenue are not guaranteed.' },
];
