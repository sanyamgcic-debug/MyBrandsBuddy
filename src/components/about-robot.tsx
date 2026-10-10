'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './about-robot.module.css';

export function AboutRobot() {
  const stage = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [waving, setWaving] = useState(false);
  const lastGreeting = useRef(0);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let cursorX = 0;
    let cursorY = 0;
    function follow(event: globalThis.PointerEvent) {
      if (reduced.matches || event.pointerType === 'touch') return;
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const element = stage.current;
        if (!element || !element.getClientRects().length) return;
        const bounds = element.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
        const clamp = (value: number) => Math.max(-1, Math.min(1, value));
        const x = clamp((cursorX - bounds.left - bounds.width / 2) / (window.innerWidth * 0.45));
        const y = clamp(
          (cursorY - bounds.top - bounds.height * 0.35) / (window.innerHeight * 0.45),
        );
        element.style.setProperty('--turn', `${x * 12}deg`);
        element.style.setProperty('--nod', `${-y * 7}deg`);
        element.style.setProperty('--head-turn', `${x * 14}deg`);
        element.style.setProperty('--head-nod', `${-y * 9}deg`);
        element.style.setProperty('--look', `${x * 13}px`);
        element.style.setProperty('--look-y', `${y * 7}px`);
      });
    }
    function neutral() {
      cancelAnimationFrame(frame);
      frame = 0;
      reset();
    }
    window.addEventListener('pointermove', follow, { passive: true });
    window.addEventListener('blur', neutral);
    document.documentElement.addEventListener('pointerleave', neutral);
    reduced.addEventListener('change', neutral);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', follow);
      window.removeEventListener('blur', neutral);
      document.documentElement.removeEventListener('pointerleave', neutral);
      reduced.removeEventListener('change', neutral);
    };
  }, []);

  function reset() {
    stage.current?.style.setProperty('--turn', '-9deg');
    stage.current?.style.setProperty('--nod', '4deg');
    stage.current?.style.setProperty('--look', '0px');
    stage.current?.style.setProperty('--look-y', '0px');
    stage.current?.style.setProperty('--head-turn', '0deg');
    stage.current?.style.setProperty('--head-nod', '0deg');
  }

  function wave() {
    lastGreeting.current = Date.now();
    setWaving(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setWaving(false), 2400);
  }

  return (
    <div className={styles.scene} data-buddy-hero="" data-waving={waving}>
      <div className={styles.signature}>
        <span /> MEET YOUR GROWTH BUDDY
      </div>
      <button
        ref={stage}
        className={styles.stage}
        type="button"
        aria-label="Say hello to Buddy"
        onPointerEnter={(event) => {
          if (event.pointerType !== 'touch' && Date.now() - lastGreeting.current > 4000) wave();
        }}
        onFocus={() => {
          if (Date.now() - lastGreeting.current > 4000) wave();
        }}
        onBlur={reset}
        onClick={wave}
      >
        <span className={styles.robot} aria-hidden="true">
          <span className={styles.rig}>
            <span className={styles.headGroup}>
              <span className={styles.antenna}>
                <i />
              </span>
              <span className={`${styles.ear} ${styles.earLeft}`} />
              <span className={`${styles.ear} ${styles.earRight}`} />
              <span className={styles.headBack} />
              <span className={styles.head}>
                <span className={styles.face}>
                  <span className={styles.eyes}>
                    <i />
                    <i />
                  </span>
                  <span className={styles.smile} />
                </span>
                <span className={styles.headDetail} />
              </span>
            </span>
            <span className={styles.neck} />
            <span className={styles.body}>
              <span className={styles.core}>✦</span>
              <span className={styles.vents}>
                <i />
                <i />
                <i />
              </span>
            </span>
            <span className={`${styles.arm} ${styles.armLeft}`}>
              <i />
            </span>
            <span className={`${styles.arm} ${styles.armRight}`}>
              <i />
            </span>
            <span className={`${styles.foot} ${styles.footLeft}`} />
            <span className={`${styles.foot} ${styles.footRight}`} />
          </span>
        </span>
      </button>
      <div className={styles.speechBubble} role="status" aria-atomic="true">
        {waving ? 'Hi there! Nice to meet you.' : 'A little curiosity. A lot of possibility.'}
      </div>
    </div>
  );
}
