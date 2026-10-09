import { journey } from '@/data/agency';
import { Reveal } from './reveal';
export function ProcessTimeline() {
  return (
    <section className="section timeline-section">
      <div className="container process-layout">
        <div className="process-sticky">
          <span className="eyebrow">A clear way forward</span>
          <h2>
            From first
            <br />
            conversation
            <br />
            to <em>what’s next.</em>
          </h2>
          <p>
            Seven connected stages.
            <br />
            One shared direction.
          </p>
          <div className="process-marker" aria-hidden="true">
            <i />
            <span>THINK → MAKE → IMPROVE</span>
          </div>
        </div>
        <div className="process-track">
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 50} distance={20} direction="up">
              <article className="process-stage group">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
