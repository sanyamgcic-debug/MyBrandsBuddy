// Per-process abuse protection. Add a shared edge/WAF limit for multi-instance hosting.
export class RateLimiter {
 private buckets = new Map<string, { count: number; expires: number }>();
 constructor(private limit = 5, private windowMs = 600_000) {}
 allow(key: string, now = Date.now()) {
  for (const [id, bucket] of this.buckets) if (bucket.expires <= now) this.buckets.delete(id);
  const entry = this.buckets.get(key);
  if (entry && entry.count >= this.limit) return false;
  if (entry) entry.count += 1;
  else { if (this.buckets.size >= 1000) return false; this.buckets.set(key, { count: 1, expires: now + this.windowMs }); }
  return true;
 }
}
