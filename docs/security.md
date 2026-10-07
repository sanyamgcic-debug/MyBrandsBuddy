# Security and operational notes

## Implemented

- Zod checks all fields on client and server; consent is required and interest values come from a fixed list.
- The API requires a matching Origin and JSON content type, rejects oversized bodies while streaming, and discards honeypot submissions.
- Bounded in-memory request limits protect each process. Email rate-limit keys are SHA-256 hashes; no enquiry payloads are logged or stored in the application.
- Webhook delivery uses a server-only token, HTTPS, a 10-second timeout and rejects redirects. Upstream errors do not expose secrets.
- Security headers include CSP, frame-ancestor denial, MIME sniffing prevention, referrer policy, permissions policy and production HSTS. The X-Powered-By header is disabled.
- React escapes normal content; JSON-LD escapes less-than characters to prevent script termination.
- No external analytics, advertising scripts, public upload endpoint or payment processing is included.

## Deployment boundaries

The CSP allows inline scripts and styles for statically generated Next.js hydration and existing styles. It does not allow production eval or third-party script origins. A strict nonce/hash policy is a future hardening option and requires corresponding rendering changes; this implementation does not claim nonce-based CSP protection.

In-memory limits reset on restart and are not distributed. Configure host/WAF request limiting for a multi-instance production deployment. Origin checks and honeypots reduce unwanted browser submissions but are not an identity or bot verification system.

The external enquiry receiver owns durable delivery, access control, retention and deletion. Configure it before enabling direct submission, and update the privacy notice to identify any additional processors or tracking introduced during deployment.

Preview and staging hosts should disable indexing through their hosting configuration. Set the production origin before building so canonical URLs, sitemap links and structured data match the deployed domain.
