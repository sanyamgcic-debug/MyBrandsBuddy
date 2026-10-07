import source from './service-copy.json';
export type CopyBlock =
  | { kind: 'p' | 'h3'; text: string }
  | { kind: 'ul' | 'ol'; items: string[] }
  | { kind: 'faq'; question: string; answer: string };
export type ServiceCopy = {
  number: number;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  intro: string[];
  sections: { heading: string; blocks: CopyBlock[] }[];
  cta: string;
};
export const serviceCopy = source.pages as ServiceCopy[];
// No verified WhatsApp destination has been supplied. Never infer a phone number.
export const serviceContact = { whatsappUrl: null as string | null };
