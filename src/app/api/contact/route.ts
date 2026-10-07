import { createHash } from 'node:crypto';
import { contactSchema, isContactConfigured, isSameOrigin } from '@/lib/contact';
import { RateLimiter } from '@/lib/rate-limit';
export const runtime = 'nodejs';
const perEmail = new RateLimiter(5, 600_000);
const total = new RateLimiter(30, 60_000);
const respond = (data: object, status: number) =>
  Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
export async function POST(request: Request) {
  if (!isSameOrigin(request.headers.get('origin'), request.url))
    return respond({ error: 'Please send your enquiry from this website.' }, 403);
  if (!request.headers.get('content-type')?.startsWith('application/json'))
    return respond({ error: 'Please use the enquiry form.' }, 415);
  if (!total.allow('all'))
    return respond(
      { error: 'Too many enquiries right now. Please try again shortly or email us.' },
      429,
    );
  const maxBytes = 16_384;
  if (Number(request.headers.get('content-length') || 0) > maxBytes)
    return respond({ error: 'Your enquiry is too long.' }, 413);
  let body: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return respond({ error: 'Please complete the enquiry form.' }, 400);
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      if (bytes > maxBytes) {
        await reader.cancel();
        return respond({ error: 'Your enquiry is too long.' }, 413);
      }
      chunks.push(chunk.value);
    }
    const buffer = new Uint8Array(bytes);
    let offset = 0;
    for (const chunk of chunks) {
      buffer.set(chunk, offset);
      offset += chunk.byteLength;
    }
    body = JSON.parse(new TextDecoder().decode(buffer));
  } catch {
    return respond({ error: 'We couldn’t read the enquiry. Please try again.' }, 400);
  }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success)
    return respond({ error: 'Please check your details, message and consent.' }, 400);
  if (!isContactConfigured())
    return respond(
      {
        error:
          'Direct submission is not available. Please prepare an email using the contact page.',
      },
      503,
    );
  const key = createHash('sha256').update(parsed.data.email.toLowerCase()).digest('hex');
  if (!perEmail.allow(key))
    return respond({ error: 'Please wait a few minutes before sending another enquiry.' }, 429);
  try {
    const { website: _honeypot, ...enquiry } = parsed.data;
    void _honeypot;
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`,
      },
      body: JSON.stringify({ ...enquiry, source: 'mybrandsbuddy-website' }),
      signal: AbortSignal.timeout(10_000),
      redirect: 'error',
    });
    if (!response.ok)
      return respond(
        { error: 'Your enquiry could not be delivered. Please email us directly.' },
        502,
      );
    return respond({ success: true }, 200);
  } catch {
    return respond(
      { error: 'Your enquiry could not be delivered. Please try again or email us directly.' },
      502,
    );
  }
}
