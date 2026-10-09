import type { Metadata } from 'next';
import { RealEstateShowcase } from '@/components/real-estate/real-estate-showcase';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata(
  'Luxury Real Estate Marketing & Architectural Showcase',
  'High-contrast visual identity, dramatic curved architectural forms, cinematic video walkthroughs, and targeted high-intent buyer acquisition campaigns.',
  '/real-estate',
);

export default function RealEstatePage() {
  return <RealEstateShowcase />;
}
