'use client';

import { useEffect, useRef, useSyncExternalStore } from 'react';
import Image from 'next/image';
import styles from './creative-vision-portal.module.css';

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * CreativeVisionPortal
 *
 * Renders the user's authentic MP4 motion art piece directly inside
 * the lower-left empty area of "03 / The Way We Think".
 *
 * Key specifications:
 * - Direct playback of /videos/way-we-think.mp4
 * - Autoplay, loop, muted, playsInline, controls={false}
 * - Soft radial gradient mask to smoothly blend into the light lavender section (#eeeaf2)
 * - Zero rectangular borders or visible player frames
 * - Respects prefers-reduced-motion with a static poster frame via useSyncExternalStore
 * - Fully responsive across desktop, tablet, and mobile
 */
export function CreativeVisionPortal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay may be deferred until user interaction if muted policy is enforced
      });
    }
  }, [reducedMotion]);

  return (
    <div className={styles.portalContainer} aria-hidden="true" role="presentation">
      <div className={styles.ambientWash} />
      <div className={styles.videoWrapper}>
        {reducedMotion ? (
          <Image
            src="/images/way-we-think-poster.webp"
            alt="The Way We Think creative motion visual"
            width={720}
            height={1280}
            className={styles.posterElement}
            priority={false}
          />
        ) : (
          <video
            ref={videoRef}
            src="/videos/way-we-think.mp4"
            poster="/images/way-we-think-poster.webp"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            controls={false}
            className={styles.videoElement}
          />
        )}
      </div>
    </div>
  );
}
