import Link from 'next/link';
import { Rocket, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { serviceGroups, services } from '@/data/services';
export function Footer() {
  return (
    <footer className="site-footer dark">
      <div className="container">
        <div className="footer-topline">
          <Link href="/" className="brand" aria-label="MyBrandsBuddy home">
            <span className="brand-icon">
              <Rocket size={24} aria-hidden="true" />
            </span>
            <span>
              My<span className="brand-accent">Brands</span>Buddy
              <span className="brand-dot">.</span>
            </span>
          </Link>
          <span>The Best Buddy for Your Business</span>
        </div>
        <div className="footer-main">
          <div className="footer-contact">
            <h2>
              Your next chapter
              <br />
              starts with <em>hello.</em>
            </h2>
            <a href={`mailto:${site.email}`}>
              {site.email}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              aria-label={`Chat on WhatsApp at ${site.whatsapp}`}
            >
              <span>WhatsApp: {site.whatsapp}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p>{site.location}</p>
            <div className="footer-quick">
              {[
                { name: 'Work', href: '/work' },
                { name: 'About', href: '/about' },
                { name: 'Insights', href: '/blog' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Contact', href: '/contact' },
              ].map((x) => (
                <Link key={x.href} href={x.href}>
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer-service-groups">
            {serviceGroups.map((group) => (
              <div key={group}>
                <h2>{group}</h2>
                {services
                  .filter((s) => s.category === group)
                  .sort((a, b) => a.number.localeCompare(b.number))
                  .map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      {s.shortTitle}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/get-started">Let’s build something worthwhile ↗</Link>
        </div>
      </div>
    </footer>
  );
}
