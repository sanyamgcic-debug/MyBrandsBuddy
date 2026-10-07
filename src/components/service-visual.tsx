import Image from 'next/image';
import {
  Search,
  MapPin,
  Check,
  Play,
  ArrowUpRight,
  MousePointer2,
  Aperture,
  ShieldCheck,
  Code2,
} from 'lucide-react';
export function ServiceVisual({ theme, priority = false }: { theme: string; priority?: boolean }) {
  if (['estate', 'photography', 'video'].includes(theme))
    return (
      <div className={`service-visual photo-visual visual-${theme}`}>
        <Image
          src={
            theme === 'estate' ? '/images/residence-concept.webp' : '/images/production-studio.webp'
          }
          alt={
            theme === 'estate'
              ? 'Concept image of a contemporary courtyard residence at dusk'
              : 'Editorial concept of a cinema camera in a photography studio'
          }
          fill
          sizes="(max-width: 700px) 100vw, 60vw"
          priority={priority}
        />
        <div className="frame-corners" aria-hidden="true" />
        <span className="visual-status">
          {theme === 'estate'
            ? 'SPACE / STORY / CONNECTION'
            : theme === 'video'
              ? 'STORY / MOTION / MEANING'
              : 'LIGHT / FORM / FEELING'}
        </span>
        <span className="visual-disclaimer">Editorial concept imagery</span>
        {theme === 'video' && (
          <div className="film-strip" aria-hidden="true">
            <Play />
            <span>THE STORY STARTS HERE</span>
            <i />
            <i />
            <i />
          </div>
        )}
      </div>
    );
  return (
    <div className={`service-visual visual-${theme}`} aria-hidden="true">
      {theme === 'search' ? (
        <>
          <div className="search-window">
            <div className="mock-search">
              <Search size={18} />
              Your next customer is searching…
            </div>
            <div className="search-result">
              <small>YOUR BUSINESS · YOUR NEIGHBOURHOOD</small>
              <strong>
                A great place to find
                <br />
                what you’re looking for.
              </strong>
              <span>Useful answers. Clear information.</span>
            </div>
            <div className="map-grid">
              <MapPin />
              <i />
              <i />
              <span>Your local presence</span>
            </div>
          </div>
          <span className="visual-footnote">MAKE DISCOVERY FEEL NATURAL</span>
        </>
      ) : null}
      {theme === 'social' ? (
        <>
          <div className="social-stack">
            <div className="social-tile social-one">
              <Aperture />
              <strong>
                A story
                <br />
                worth
                <br />
                sharing.
              </strong>
              <small>BRAND / EVERYDAY</small>
            </div>
            <div className="social-tile social-two">
              <span>
                BE
                <br />
                <em>seen.</em>
              </span>
              <div className="mock-caption">
                A little personality.
                <br />A recognisable presence.
              </div>
            </div>
            <div className="social-tile social-three">
              <Play />
              <span>MADE TO CONNECT</span>
            </div>
          </div>
          <span className="visual-footnote">A FEED WITH A POINT OF VIEW</span>
        </>
      ) : null}
      {theme === 'branding' ? (
        <>
          <div className="brand-board">
            <small>IDENTITY STUDY / MYBRANDSBUDDY</small>
            <div className="type-sample">
              Aa<span>↗</span>
            </div>
            <strong>Distinct by design.</strong>
            <div className="color-swatches">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span>VOICE · FORM · FEELING</span>
          </div>
        </>
      ) : null}
      {theme === 'consulting' ? (
        <>
          <div className="strategy-board">
            <span className="diagram-label">THE DECISION FRAMEWORK</span>
            <div className="strategy-center">
              A better
              <br />
              <em>next move.</em>
            </div>
            <div className="strategy-quadrants">
              {['Audience', 'Offer', 'Channels', 'Experience'].map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <span className="visual-footnote">CLARITY BEFORE ACTIVITY</span>
          </div>
        </>
      ) : null}
      {theme === 'funding' ? (
        <>
          <div className="funding-sheet">
            <ShieldCheck />
            <small>BUSINESS READINESS</small>
            <h3>
              Prepared for
              <br />
              the next conversation.
            </h3>
            {['Purpose & requirements', 'Business context', 'Documentation checklist'].map((x) => (
              <span key={x}>
                <Check size={16} />
                {x}
              </span>
            ))}
            <p>Guidance, not a guarantee.</p>
          </div>
        </>
      ) : null}
      {theme === 'web' ? (
        <>
          <div className="browser-mock">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span>your next digital home</span>
            </div>
            <div className="browser-content">
              <small>DESIGNED AROUND PEOPLE</small>
              <strong>
                Make the
                <br />
                <em>next click</em>
                <br />
                count.
              </strong>
              <span className="mock-pill">A clear next step ↗</span>
              <div className="browser-orb" />
            </div>
            <div className="code-label">
              <Code2 size={16} />
              Thoughtfully built.
            </div>
          </div>
          <MousePointer2 className="mock-cursor" />
        </>
      ) : null}
      {theme === 'design' ? (
        <>
          <div className="design-poster poster-back">
            <span>
              FORM
              <br />
              FOLLOWS
              <br />
              <em>feeling.</em>
            </span>
          </div>
          <div className="design-poster poster-front">
            <small>CREATIVE DIRECTION / 01</small>
            <strong>
              Make
              <br />
              your
              <br />
              <em>mark.</em>
            </strong>
            <ArrowUpRight />
          </div>
        </>
      ) : null}
      {theme === 'mobile' ? (
        <>
          <div className="phone-device">
            <div className="phone-notch" />
            <Image src="/images/production-studio.webp" alt="" fill sizes="240px" />
            <span className="phone-record">● REC</span>
            <div className="phone-frame" />
            <strong>
              Real moments.
              <br />
              Your point of view.
            </strong>
            <span className="phone-shutter" />
          </div>
          <div className="mobile-note">
            Made for
            <br />
            <em>the moment.</em>
            <span>9:16 / SOCIAL FIRST</span>
          </div>
        </>
      ) : null}
      {theme === 'content' ? (
        <>
          <div className="content-board">
            <small>THE EDITORIAL SYSTEM</small>
            <strong>
              Good ideas.
              <br />
              <em>On purpose.</em>
            </strong>
            <div className="calendar-days">
              {['M', 'T', 'W', 'T', 'F'].map((x, i) => (
                <span key={i}>{x}</span>
              ))}
            </div>
            <div className="calendar-blocks">
              <span>Tell a story</span>
              <span>Answer a question</span>
              <span>Show the work</span>
            </div>
            <div className="content-line">IDEA → CREATE → PUBLISH → LEARN</div>
          </div>
        </>
      ) : null}
      {theme === 'performance' ? (
        <>
          <div className="performance-board">
            <span>CAMPAIGN THINKING</span>
            <h3>
              Attention.
              <br />
              Intention.
              <br />
              <em>Action.</em>
            </h3>
            <div className="funnel-bars">
              <span>Reach the right people</span>
              <span>Make the offer clear</span>
              <span>Start a conversation</span>
            </div>
            <small>A journey, not a vanity metric.</small>
          </div>
        </>
      ) : null}
    </div>
  );
}
