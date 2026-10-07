import Image from 'next/image';
import { SceneFrame } from './scene-frame';
import './service-scenes.css';

const concepts: Record<string, { name: string; stages: string[] }> = {
  social: { name: 'social publishing studio', stages: ['Idea', 'Content', 'Publish', 'Community'] },
  branding: { name: 'brand identity studio', stages: ['Sketch', 'Identity', 'System', 'Brand'] },
  consulting: {
    name: 'business strategy roadmap',
    stages: ['Analyse', 'Plan', 'Execute', 'Review'],
  },
  funding: {
    name: 'business documentation desk',
    stages: ['Requirements', 'Documents', 'Application', 'Guidance'],
  },
  web: {
    name: 'responsive digital product studio',
    stages: ['Design', 'Desktop', 'Tablet', 'Mobile'],
  },
  design: { name: 'graphic design workbench', stages: ['Sketch', 'Type', 'Colour', 'Compose'] },
  video: { name: 'video editing suite', stages: ['Footage', 'Edit', 'Grade', 'Export'] },
  photography: {
    name: 'commercial photography set',
    stages: ['Frame', 'Light', 'Focus', 'Capture'],
  },
  mobile: { name: 'mobile creator studio', stages: ['Capture', 'Reel', 'Story', 'Post'] },
  content: { name: 'editorial content workshop', stages: ['Idea', 'Script', 'Content', 'Publish'] },
  performance: {
    name: 'campaign control room',
    stages: ['Awareness', 'Interest', 'Consider', 'Convert'],
  },
  estate: {
    name: 'property campaign studio',
    stages: ['Property', 'Content', 'Campaign', 'Enquiry'],
  },
  search: { name: 'organic search architecture', stages: ['Search', 'Crawl', 'Index', 'Discover'] },
  aso: { name: 'app discovery studio', stages: ['Listing', 'Screens', 'Discover', 'Review'] },
  whatsapp: {
    name: 'customer messaging workflow',
    stages: ['Opt in', 'Message', 'Reply', 'Follow up'],
  },
};
function Picture({
  src,
  priority = false,
  className = '',
}: {
  src: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      className={className}
      src={`/images/${src}.webp`}
      alt=""
      fill
      sizes="(max-width: 600px) 80vw, (max-width: 1000px) 60vw, 480px"
      priority={priority}
    />
  );
}
function Lines({ count = 4 }: { count?: number }) {
  return (
    <div className="ink-lines">
      {Array.from({ length: count }, (_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
function Grid() {
  return (
    <svg className="draft-grid" viewBox="0 0 500 420">
      <defs>
        <pattern id="scene-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M25 0H0V25" fill="none" stroke="currentColor" strokeWidth=".5" />
        </pattern>
      </defs>
      <rect width="500" height="420" fill="url(#scene-grid)" />
    </svg>
  );
}
function Screen({ small = false }: { small?: boolean }) {
  return (
    <div className={`product-screen ${small ? 'small-screen' : ''}`}>
      <div className="screen-chrome">
        <i />
        <i />
        <i />
      </div>
      <div className="screen-nav">
        <b>M/B.</b>
        <i />
        <i />
      </div>
      <div className="screen-layout">
        <div>
          <b>Aa</b>
          <Lines count={3} />
          <span className="screen-cta" />
        </div>
        <div className="screen-artwork">
          <svg viewBox="0 0 100 100">
            <path
              d="M10 80L50 10L90 80Z M25 80L50 35L75 80Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
            />
          </svg>
        </div>
      </div>
      <div className="screen-tiles">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
export function ServiceScene({ theme, slug }: { theme: string; slug?: string }) {
  const key =
    slug === 'app-store-optimization' ? 'aso' : slug === 'whatsapp-marketing' ? 'whatsapp' : theme;
  const config = concepts[key] || concepts.content;
  return (
    <SceneFrame theme={key} {...config}>
      <div className="scene-floor" />
      <div className="scene-light" />
      {key === 'social' && (
        <>
          <div className="social-planner depth-back">
            <small>CONTENT CALENDAR</small>
            <div className="planner-grid">
              {Array.from({ length: 15 }, (_, i) => (
                <i key={i} className={i === 7 ? 'scheduled' : ''}>
                  {i + 1}
                </i>
              ))}
            </div>
            <span className="pencil" />
          </div>
          <div className="social-handset depth-front">
            <div className="device-speaker" />
            <div className="social-profile">
              <i />
              MyBrandsBuddy <span>•••</span>
            </div>
            <div className="social-cover">
              <Picture src="mobile-content-shoot" priority />
              <span className="reel-play">▷</span>
            </div>
            <div className="social-actions">♡　↗　☷</div>
            <Lines count={2} />
            <div className="publish-state">
              <span>DRAFT</span>
              <span>READY</span>
              <span>PUBLISHED</span>
              <span>COMMUNITY</span>
            </div>
          </div>
          <div className="reply-slip depth-near">
            <span className="message-bubble">•••</span>
            <div>
              <small>CONVERSATION</small>
              <Lines count={2} />
            </div>
          </div>
          <div className="scene-connector" />
        </>
      )}
      {key === 'branding' && (
        <>
          <div className="identity-grid depth-back">
            <Grid />
            <svg className="identity-mark" viewBox="0 0 120 120">
              <path
                d="M15 95V25L60 65L105 25V95 M15 25H105 M60 15V105"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="brand-book depth-mid">
            <div className="book-spine" />
            <small>MYBRANDSBUDDY</small>
            <b>
              Aa<span>↗</span>
            </b>
            <div className="book-rule" />
            <span>
              IDENTITY
              <br />
              GUIDELINES
            </span>
          </div>
          <div className="brand-swatch depth-front">
            <i />
            <i />
            <i />
            <i />
            <small>COLOUR SYSTEM</small>
          </div>
          <div className="brand-card depth-near">
            <b>M/B.</b>
            <span>MyBrandsBuddy</span>
          </div>
        </>
      )}
      {key === 'consulting' && (
        <>
          <div className="roadmap-board depth-mid">
            <small>STRATEGY / ROADMAP</small>
            <svg viewBox="0 0 500 360">
              <path className="route-base" d="M50 290H150V200H285V95H440" />
              <path className="route-progress" d="M50 290H150V200H285V95H440" pathLength="1" />
              {[
                [50, 290],
                [150, 200],
                [285, 95],
                [440, 95],
              ].map(([x, y], i) => (
                <g key={i} className={`milestone milestone-${i}`}>
                  <circle cx={x} cy={y} r="18" />
                  <text x={x} y={y + 5} textAnchor="middle">
                    {i + 1}
                  </text>
                </g>
              ))}
            </svg>
            <div className="roadmap-axis">
              <span>AUDIENCE</span>
              <span>OFFER</span>
              <span>CHANNELS</span>
            </div>
          </div>
          <div className="strategy-note depth-front">
            <small>PRIORITIES</small>
            <Lines count={3} />
            <div className="decision-check">↗</div>
          </div>
        </>
      )}
      {key === 'funding' && (
        <>
          <div className="document-folder depth-back">
            <span>BUSINESS DOCUMENTS</span>
          </div>
          <div className="application-sheet depth-mid">
            <small>APPLICATION / PREPARATION</small>
            <div className="paper-rule" />
            <b>Business profile</b>
            <Lines count={5} />
            <div className="signature-line" />
          </div>
          <div className="document-checklist depth-front">
            <small>REQUIREMENTS</small>
            {['Business details', 'Documentation', 'Application', 'Guidance'].map((x, i) => (
              <div className={`check-row check-${i}`} key={x}>
                <i>✓</i>
                <span>{x}</span>
              </div>
            ))}
          </div>
          <div className="binder-clip" />
        </>
      )}
      {key === 'web' && (
        <>
          <div className="desktop-device depth-mid">
            <Screen />
            <div className="monitor-foot" />
          </div>
          <div className="tablet-device depth-back">
            <Screen small />
          </div>
          <div className="web-phone depth-front">
            <div className="device-speaker" />
            <Screen small />
          </div>
          <div className="code-strip depth-near">
            <span>&lt; / &gt;</span>
            <i />
            <i />
            <i />
          </div>
        </>
      )}
      {key === 'design' && (
        <>
          <div className="cutting-mat depth-back">
            <Grid />
          </div>
          <div className="studio-poster depth-mid">
            <small>MYBRANDSBUDDY / STUDIO</small>
            <div className="poster-type">
              Aa<span>↗</span>
            </div>
            <div className="poster-gridlines" />
            <span className="poster-index">TYPE / FORM / COLOUR</span>
          </div>
          <div className="ink-swatch depth-front">
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="packaging-box depth-near">
            <span>M/B.</span>
            <div />
          </div>
          <div className="studio-ruler" />
        </>
      )}
      {key === 'video' && (
        <>
          <div className="edit-monitor depth-mid">
            <div className="edit-chrome">
              M/B. <span>EDIT / COLOUR / SOUND</span>
            </div>
            <div className="edit-preview">
              <Picture src="production-studio" priority />
              <div className="grade-wipe" />
              <i className="frame-guide" />
            </div>
            <div className="edit-timeline">
              <div className="timeline-ruler" />
              {[0, 1, 2].map((i) => (
                <div className={`timeline-track track-${i}`} key={i}>
                  <i />
                  <i />
                  <i />
                </div>
              ))}
              <div className="timeline-playhead" />
            </div>
          </div>
          <div className="clapper depth-front">
            <div />
            <b>SCENE / TAKE</b>
            <Lines count={2} />
          </div>
          <div className="lens-object depth-near">
            <i />
            <span />
          </div>
        </>
      )}
      {key === 'photography' && (
        <>
          <div className="production-backdrop depth-back">
            <Picture src="photography-studio" priority />
            <div className="light-sweep" />
            <div className="focus-brackets">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="softbox depth-mid">
            <i />
            <span />
          </div>
          <div className="contact-print depth-front">
            <div>
              <Picture src="photography-studio" />
            </div>
            <small>FRAME / LIGHT / FOCUS</small>
          </div>
          <div className="camera-body depth-near">
            <i className="camera-top" />
            <div className="camera-lens">
              <i />
            </div>
            <small>M/B.</small>
          </div>
        </>
      )}
      {key === 'mobile' && (
        <>
          <div className="creator-ring depth-back" />
          <div className="creator-phone depth-mid">
            <div className="device-speaker" />
            <div className="creator-screen">
              <Picture src="mobile-content-shoot" priority />
              <div className="capture-guides" />
              <span className="capture-dot" />
              <i className="shutter-button" />
            </div>
            <div className="gimbal-stem">
              <i />
            </div>
          </div>
          <div className="reel-export depth-front">
            <div className="export-crop">
              <Picture src="mobile-content-shoot" />
            </div>
            <span>9:16 / 1:1</span>
            <div className="export-options">
              <i />
              <i />
              <i />
            </div>
          </div>
        </>
      )}
      {key === 'content' && (
        <>
          <div className="editorial-notebook depth-back">
            <div className="notebook-binding" />
            <small>IDEAS / NOTES</small>
            <Lines count={7} />
            <span className="editorial-pencil" />
          </div>
          <div className="script-page depth-mid">
            <small>MYBRANDSBUDDY / EDITORIAL</small>
            <b>Aa</b>
            <div className="script-highlight" />
            <Lines count={6} />
            <span>01 — SCRIPT</span>
          </div>
          <div className="published-page depth-front">
            <div className="article-masthead">M/B.</div>
            <div className="article-columns">
              <Lines count={6} />
              <Lines count={6} />
            </div>
            <span>CONTENT / PUBLISH</span>
          </div>
        </>
      )}
      {key === 'performance' && (
        <>
          <div className="campaign-console depth-back">
            <small>CAMPAIGN / WORKSPACE</small>
            <div className="audience-nodes">
              {Array.from({ length: 9 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
            <div className="test-pair">
              <div>
                A<Lines count={2} />
              </div>
              <div>
                B<Lines count={2} />
              </div>
            </div>
          </div>
          <div className="funnel-stack depth-front">
            {['AWARENESS', 'INTEREST', 'CONSIDERATION', 'CONVERSION'].map((x, i) => (
              <div className={`funnel-layer funnel-${i}`} key={x}>
                <span>{x}</span>
                <i />
              </div>
            ))}
          </div>
          <svg className="data-route" viewBox="0 0 500 450">
            <path
              d="M80 140H195Q245 140 245 210V375"
              fill="none"
              stroke="currentColor"
              strokeDasharray="3 9"
            />
          </svg>
        </>
      )}
      {key === 'estate' && (
        <>
          <div className="property-plinth depth-back">
            <svg viewBox="0 0 500 350">
              <path d="M60 250L270 330L450 210L250 140Z" />
              <path d="M100 230V110L260 55L260 170Z M100 110L245 170L405 115L260 55 M245 170V285L405 230V115 M125 220V155L175 172V241 M275 175V238L320 221V159 M340 151V215L380 200V137" />
            </svg>
          </div>
          <div className="property-frame depth-mid">
            <Picture src="residence-concept" priority />
            <span className="architectural-grid" />
          </div>
          <div className="property-listing depth-front">
            <div>
              <Picture src="residence-concept" />
            </div>
            <small>PROPERTY / CAMPAIGN</small>
            <Lines count={3} />
            <i />
          </div>
          <div className="property-plan depth-near">
            <svg viewBox="0 0 130 100">
              <path
                d="M10 10H120V90H10ZM50 10V60H120M10 60H50M85 60V90"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </>
      )}
      {key === 'search' && (
        <>
          <div className="search-architecture depth-back">
            <svg viewBox="0 0 450 380">
              <path
                d="M225 55V130M75 130H375M75 130V245M225 130V245M375 130V245"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              {[
                [190, 25],
                [40, 235],
                [190, 235],
                [340, 235],
              ].map(([x, y], i) => (
                <g key={i}>
                  <rect x={x} y={y} width="70" height="65" rx="8" />
                  <path d={`M${x + 15} ${y + 20}h40m-40 13h25`} stroke="currentColor" />
                </g>
              ))}
            </svg>
          </div>
          <div className="search-panel depth-front">
            <div className="search-input">
              <span>⌕</span>Services near you <i />
            </div>
            {[0, 1, 2].map((i) => (
              <div className={`serp-row serp-${i}`} key={i}>
                <i />
                <div>
                  <span />
                  <Lines count={2} />
                </div>
              </div>
            ))}
          </div>
          <div className="crawl-marker depth-near">&lt; / &gt;</div>
        </>
      )}
      {key === 'aso' && (
        <>
          <div className="app-device depth-mid">
            <div className="app-symbol">↗</div>
            <Lines count={3} />
            <div className="app-previews">
              <i />
              <i />
              <i />
            </div>
            <div className="app-search">⌕</div>
          </div>
          <div className="app-keywords depth-front">
            <small>LISTING / DISCOVERY</small>
            <Lines count={4} />
          </div>
        </>
      )}
      {key === 'whatsapp' && (
        <>
          <div className="message-device depth-mid">
            <div className="message-profile">
              <i />
              <Lines count={2} />
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`conversation-line conversation-${i}`}>
                <Lines count={2} />
                <span>✓</span>
              </div>
            ))}
            <div className="message-composer">
              <i />↗
            </div>
          </div>
          <div className="consent-note depth-front">
            <span>✓</span>
            <small>OPT IN / FOLLOW UP</small>
            <Lines count={2} />
          </div>
        </>
      )}
    </SceneFrame>
  );
}
