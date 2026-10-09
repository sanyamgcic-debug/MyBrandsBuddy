'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function GraphicDesignHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Initialize playback and preferences
  useEffect(() => {
    // 1. Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsReducedMotion(true);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    // 2. Attempt Autoplay
    const video = videoRef.current;
    if (video && !mediaQuery.matches) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setAutoplayFailed(false);
          })
          .catch(() => {
            // Browser restricted autoplay (e.g. low power mode)
            setAutoplayFailed(true);
            setIsPlaying(false);
          });
      }
    }

    // 3. Pause playback when hero is scrolled out of view
    const heroEl = heroRef.current;
    let observer: IntersectionObserver | null = null;
    if (heroEl) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (videoRef.current && !mediaQuery.matches && !autoplayFailed) {
              if (!entry.isIntersecting) {
                videoRef.current.pause();
              } else if (isPlaying) {
                videoRef.current.play().catch(() => {});
              }
            }
          });
        },
        { threshold: 0.15 },
      );
      observer.observe(heroEl);
    }

    // 4. Pause when document/tab is hidden
    const handleVisibilityChange = () => {
      if (!videoRef.current) return;
      if (document.hidden) {
        videoRef.current.pause();
      } else if (isPlaying && !isReducedMotion && !autoplayFailed) {
        videoRef.current.play().catch(() => {});
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      if (observer && heroEl) observer.unobserve(heroEl);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying, isReducedMotion, autoplayFailed]);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAutoplayFailed(false);
        })
        .catch(() => {
          setAutoplayFailed(true);
        });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden gd-grid-pattern"
      aria-label="Graphic Design and Brand Identity Showcase"
    >
      {/* Ambient Brand Purple Background Bloom */}
      <div
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[400px] bg-[#662d91]/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[420px] h-[360px] bg-[#8b5cf6]/15 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-[#8b5cf6] font-semibold">Graphic Design & Creative Content</span>
        </nav>

        {/* Hero Grid: Editorial Left / Video Showcase Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1e1b2e] border border-[#8b5cf6]/30 text-xs font-mono tracking-wider uppercase text-white/90 mb-6 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8b5cf6] shadow-[0_0_8px_#8b5cf6]" />
              <span className="font-semibold text-white">GRAPHIC DESIGN & BRAND IDENTITY</span>
            </div>

            {/* Headline with Brand Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Design that makes <br />
              your brand <span className="text-[#8b5cf6]">unforgettable.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl mb-8">
              From distinctive brand identities to scroll-stopping creatives, we help your business
              look sharper, communicate clearly, and stand out.
            </p>

            {/* Calls to Action */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact?service=Graphic%20Design"
                className="gd-btn-primary px-7 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-lg group cursor-pointer"
              >
                <span>Start Your Design Project</span>
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/work"
                className="gd-btn-secondary px-6 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight
                  size={16}
                  className="text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Core Capability Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white/60">
              <div className="flex items-center gap-2">
                <span className="text-[#8b5cf6]">✦</span>
                <span>Brand Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b5cf6]">✦</span>
                <span>Social & Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b5cf6]">✦</span>
                <span>Print & Menus</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8b5cf6]">✦</span>
                <span>Motion Graphics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed 4:5 Motion Reel Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
              {/* Purple Ambient Back Glow */}
              <div className="gd-ambient-glow" aria-hidden="true" />

              {/* Architectural Video Container (Preserves 4:5 aspect ratio) */}
              <div className="gd-video-frame aspect-[4/5] relative w-full group">
                {/* Poster fallback image displayed while video loads or if reduced-motion active */}
                <Image
                  src="/images/hero-graphic-design.webp"
                  alt="A branded stationery set with a monogram business card, colour swatches and a glowing pen-tool curve."
                  fill
                  priority
                  className={`object-cover object-center transition-opacity duration-700 ${
                    isVideoLoaded && isPlaying && !isReducedMotion ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

                {/* Video element with muted autoplay, loop, playsinline */}
                {!isReducedMotion && (
                  <video
                    ref={videoRef}
                    src="/videos/gemini_generated_video_7731df0c.mp4"
                    poster="/images/hero-graphic-design.webp"
                    muted
                    loop
                    playsInline
                    autoPlay
                    onLoadedData={() => setIsVideoLoaded(true)}
                    className="w-full h-full object-cover object-center relative z-0"
                  />
                )}

                {/* Subtle vignette and edge gradient overlay for composition harmony */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#141418]/60 via-transparent to-[#141418]/20 pointer-events-none z-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
