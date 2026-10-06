import { z } from 'zod';
import { plans } from '../data/pricing';
import { services } from '../data/services';
export const contactSchema = z.object({
 name: z.string().trim().min(2, 'Please enter your name.').max(100),
 email: z.email('Please enter a valid email address.').max(254),
 business: z.string().trim().min(2, 'Please enter your business name.').max(160),
 interest: z.string().max(120).refine(value => ['Free brand audit', ...plans.map(p => p.name), ...services.map(s => s.title)].includes(value), 'Please select a valid service.'),
 message: z.string().trim().min(20, 'Tell us a little more — at least 20 characters.').max(3000),
 consent: z.literal(true, { error: 'Please agree to be contacted about your enquiry.' }),
 website: z.string().max(0).optional(),
});
export function isContactConfigured() { try { const url = new URL(process.env.CONTACT_WEBHOOK_URL || ''); return url.protocol === 'https:' && Boolean(process.env.CONTACT_WEBHOOK_TOKEN); } catch { return false; } }
export function isSameOrigin(origin: string | null, requestUrl: string) { if (!origin) return false; try { return new URL(origin).origin === new URL(requestUrl).origin; } catch { return false; } }
