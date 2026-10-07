import test from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../src/app/api/contact/route';
const valid = {
  name: 'Test Owner',
  email: 'test@example.com',
  business: 'A local shop',
  interest: 'Starter Buddy',
  message: 'I would like to improve our local visibility.',
  consent: true,
  website: '',
};
function request(
  body: unknown = valid,
  origin = 'https://mybrandsbuddy.com',
  contentType = 'application/json',
) {
  return new Request('https://mybrandsbuddy.com/api/contact', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': contentType },
    body: JSON.stringify(body),
  });
}
test('API rejects cross-origin, wrong media type, invalid input and oversized payload', async () => {
  assert.equal((await POST(request(valid, 'https://other.example'))).status, 403);
  assert.equal((await POST(request(valid, undefined, 'text/plain'))).status, 415);
  assert.equal((await POST(request({ ...valid, consent: false }))).status, 400);
  assert.equal((await POST(request({ message: 'x'.repeat(17000) }))).status, 413);
});
test('unconfigured API does not pretend to send', async () => {
  delete process.env.CONTACT_WEBHOOK_URL;
  delete process.env.CONTACT_WEBHOOK_TOKEN;
  assert.equal((await POST(request())).status, 503);
});
test('configured API delivers valid enquiries and surfaces provider failures without secrets', async () => {
  const originalFetch = global.fetch;
  process.env.CONTACT_WEBHOOK_URL = 'https://delivery.example/enquiry';
  process.env.CONTACT_WEBHOOK_TOKEN = 'test-secret';
  try {
    global.fetch = async (_url, init) => {
      assert.equal((init?.headers as Record<string, string>).Authorization, 'Bearer test-secret');
      assert.equal(JSON.parse(String(init?.body)).business, valid.business);
      return new Response('', { status: 200 });
    };
    const result = await POST(request());
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { success: true });
    global.fetch = async () => new Response('', { status: 500 });
    const failed = await POST(request());
    assert.equal(failed.status, 502);
    assert.equal((await failed.text()).includes('test-secret'), false);
    global.fetch = async () => {
      throw new Error('test-secret');
    };
    assert.equal((await POST(request())).status, 502);
  } finally {
    global.fetch = originalFetch;
    delete process.env.CONTACT_WEBHOOK_URL;
    delete process.env.CONTACT_WEBHOOK_TOKEN;
  }
});
