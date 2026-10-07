'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { interfaceCopy } from '@/data/interface';
import { services, serviceGroups } from '@/data/services';
import { ServiceVisual } from './service-visual';
import { Icon } from './icon';
export function ServiceDirectory({ overview = false }: { overview?: boolean }) {
  const [active, setActive] = useState(0);
  const [group, setGroup] = useState('All');
  const [query, setQuery] = useState('');
  const visible = services.filter(
    (s) =>
      (group === 'All' || s.category === group) &&
      `${s.title} ${s.description} ${s.category}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const selected = visible.find((s) => s.slug === services[active].slug) || visible[0];
  return (
    <>
      <div className="service-category-tabs" role="group" aria-label="Filter services">
        {['All', ...serviceGroups].map((g) => (
          <button
            key={g}
            onClick={() => {
              setGroup(g);
              const index = services.findIndex((s) => g === 'All' || s.category === g);
              setActive(Math.max(index, 0));
            }}
            aria-pressed={group === g}
          >
            {g === 'All' ? 'All disciplines' : g}
          </button>
        ))}
      </div>
      <div className="service-search">
        <Search size={18} aria-hidden="true" />
        <label className="sr-only" htmlFor="service-search">
          {interfaceCopy.serviceSearch.label}
        </label>
        <input
          id="service-search"
          className="du-input du-input-bordered"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={interfaceCopy.serviceSearch.placeholder}
          aria-describedby="service-directory-status"
          autoComplete="off"
        />
        {query && (
          <button
            className="du-btn du-btn-ghost"
            onClick={() => {
              setQuery('');
              document.getElementById('service-search')?.focus();
            }}
            type="button"
          >
            {interfaceCopy.serviceSearch.clear}
          </button>
        )}
      </div>
      <div className={`service-directory ${overview ? 'overview' : ''}`}>
        {selected && (
          <div className="directory-preview">
            <ServiceVisual theme={selected.theme} key={selected.slug} />
            <div className="preview-meta">
              <span>{selected.category}</span>
              <span>{selected.number} / 13</span>
            </div>
            <p>{selected.description}</p>
          </div>
        )}
        <div className="service-rows">
          {visible.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`service-row ${selected?.slug === service.slug ? 'active' : ''}`}
              onMouseEnter={() => setActive(services.indexOf(service))}
              onFocus={() => setActive(services.indexOf(service))}
            >
              <span className="service-number">{service.number}</span>
              <div>
                <span className="row-category">{service.category}</span>
                <h3>{service.title}</h3>
                {overview && (
                  <>
                    <p>{service.description}</p>
                    <small>{service.outcome}</small>
                  </>
                )}
              </div>
              <span className="row-icon">
                <Icon name={service.icon} />
              </span>
              <ArrowUpRight className="row-arrow" aria-hidden="true" />
              <span className="sr-only">Explore service</span>
            </Link>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="directory-empty">
            <h3>{interfaceCopy.serviceSearch.emptyTitle}</h3>
            <p>{interfaceCopy.serviceSearch.emptyBody}</p>
            <button
              type="button"
              className="du-btn button button-secondary"
              onClick={() => {
                setQuery('');
                setGroup('All');
                document.getElementById('service-search')?.focus();
              }}
            >
              {interfaceCopy.serviceSearch.reset}
            </button>
          </div>
        )}
      </div>
      <p className="directory-note" id="service-directory-status" aria-live="polite">
        {visible.length} disciplines. Start with what your business needs.
      </p>
    </>
  );
}
