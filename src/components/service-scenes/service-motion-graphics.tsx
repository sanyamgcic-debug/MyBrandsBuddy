'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Heart,
  Share2,
  TrendingUp,
  Target,
  Monitor,
  Code,
  Compass,
  Palette,
  Briefcase,
  Video,
  Camera,
  Smartphone,
  PenTool,
  FileText,
  DollarSign,
  CheckCircle2,
  Download,
  Star,
  MessageCircle,
  Send,
  Zap,
  Sliders,
  Sparkles,
} from 'lucide-react';
import './motion-graphics.css';

/* 1. SEO & LOCAL SEARCH MOTION GRAPHIC */
export function SeoMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#10b981]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#06b6d4]" style={{ right: '15%', bottom: '15%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
        <span>GOOGLE SERP & LOCAL SEARCH // LIVE RADAR</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-5">
        {/* Radar Scanner Overlay */}
        <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#10b981]/25" />
          <div className="absolute inset-4 rounded-full border border-[#10b981]/35 border-dashed" />
          <div className="absolute inset-10 rounded-full border border-[#10b981]/45" />
          {/* Radar Sweep Needle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129, 0.4) 60deg, transparent 65deg)',
              animation: 'radarSweep 4s linear infinite',
            }}
          />
          {/* Center Target Node */}
          <div className="w-6 h-6 rounded-full bg-[#10b981] text-black flex items-center justify-center shadow-[0_0_20px_#10b981] z-10 font-bold text-xs">
            #1
          </div>
          <span className="absolute top-8 right-6 w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
          <span className="absolute bottom-10 left-8 w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
        </div>

        {/* Live Search Query Simulation Card */}
        <div className="motion-glass-card p-4">
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white/90 mb-3">
            <Search size={14} className="text-[#10b981]" />
            <span>best brand marketing agency near me</span>
            <span className="w-1.5 h-3.5 bg-[#10b981] animate-pulse ml-auto" />
          </div>

          <div className="p-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/30">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#10b981] font-bold mb-1">
              <span>POSITION #1 • FEATURED SNIPPET</span>
              <span className="bg-[#10b981] text-black px-1.5 py-0.5 rounded text-[10px]">99.8% ACCURACY</span>
            </div>
            <div className="text-xs font-semibold text-white mb-1">MyBrandsBuddy — Digital Growth & Local Search</div>
            <div className="text-[11px] text-white/60">mybrandsbuddy.com • Delhi-NCR & Global</div>
          </div>
        </div>

        {/* Real-time Keyword Trajectory Metrics */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
            <span className="text-white/50">ORGANIC CLICKS:</span>
            <span className="text-[#10b981] font-bold">+340%</span>
          </div>
          <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
            <span className="text-white/50">KEYWORD RANK:</span>
            <span className="text-[#06b6d4] font-bold">TOP 3 (94%)</span>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>LOCAL MAP PACK OPTIMIZED</span>
        <span className="text-[#10b981]">● ACTIVE CRAWL NODE</span>
      </div>
    </div>
  );
}

/* 2. SOCIAL MEDIA MARKETING MOTION GRAPHIC */
export function SocialMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#ec4899]" style={{ left: '15%', top: '25%' }} />
      <div className="motion-bg-bloom bg-[#8b5cf6]" style={{ right: '20%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-ping" />
        <span>VIRAL SOCIAL ENGINE // REEL VELOCITY</span>
      </div>

      <div className="relative z-10 w-full max-w-[380px] p-4 flex flex-col gap-4">
        {/* Floating Upward Reaction Hearts */}
        <div className="absolute right-12 top-20 pointer-events-none z-30">
          <Heart size={20} className="text-[#ec4899] fill-[#ec4899]" style={{ animation: 'heartFloat 2.8s ease-in infinite' }} />
        </div>
        <div className="absolute right-20 top-24 pointer-events-none z-30">
          <Heart size={16} className="text-[#f43f5e] fill-[#f43f5e]" style={{ animation: 'heartFloat 3.2s ease-in infinite 0.9s' }} />
        </div>
        <div className="absolute right-8 top-32 pointer-events-none z-30">
          <Heart size={22} className="text-[#8b5cf6] fill-[#8b5cf6]" style={{ animation: 'heartFloat 2.5s ease-in infinite 1.5s' }} />
        </div>

        {/* Social Reel Smartphone Mockup */}
        <div className="motion-glass-card p-5 relative overflow-hidden">
          {/* Creator Profile Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-md">
                <div className="w-full h-full rounded-full bg-[#141418] flex items-center justify-center font-bold text-xs text-white">
                  MB
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  mybrandsbuddy <span className="text-[#06b6d4]">✓</span>
                </div>
                <div className="text-[10px] text-white/50 font-mono">Creative Media Network</div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#ec4899]/20 text-[#ec4899] border border-[#ec4899]/30 text-[10px] font-mono font-bold">
              +142.8K
            </span>
          </div>

          {/* Social Reel Visual Canvas */}
          <div className="h-44 rounded-2xl bg-gradient-to-br from-[#2a1b40] to-[#120f1e] border border-white/10 relative overflow-hidden flex flex-col justify-end p-4 mb-4">
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white/80">
              REEL // 9:16
            </div>
            <div className="text-xs font-bold text-white mb-1">How We Scaled A Local Brand to 1M+ Views 🚀</div>
            <div className="text-[11px] text-white/70">Original Audio • MyBrandsBuddy Viral Sound</div>

            {/* Rhythm Waveform Visualizer */}
            <div className="flex items-end gap-1 h-6 mt-3">
              {[40, 75, 90, 50, 85, 100, 65, 80, 95, 45, 85, 60, 95, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#ec4899] to-[#8b5cf6] rounded-full"
                  style={{
                    height: `${h}%`,
                    animation: `waveformBounce 1.2s ease-in-out infinite ${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Engagement Metrics Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-white/80 pt-2 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-[#ec4899]">
              <Heart size={14} className="fill-[#ec4899]" />
              <span>48.2K</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#8b5cf6]">
              <Share2 size={14} />
              <span>12.4K</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#10b981]">
              <TrendingUp size={14} />
              <span>8.9% CTR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>MULTI-CHANNEL CONTENT ENGINE</span>
        <span className="text-[#ec4899]">● LIVE CAMPAIGN VELOCITY</span>
      </div>
    </div>
  );
}

/* 3. PERFORMANCE MARKETING MOTION GRAPHIC */
export function PerformanceMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#f59e0b]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#10b981]" style={{ right: '15%', bottom: '25%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
        <span>REAL-TIME ROAS & AD AUCTION DESK</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        {/* Main ROAS Multiplier Display */}
        <div className="motion-glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block">
                AVERAGE CAMPAIGN ROAS
              </span>
              <div className="text-3xl font-extrabold text-white flex items-center gap-2">
                4.85x <span className="text-xs font-mono text-[#10b981] font-bold">+385% NET</span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#f59e0b] font-bold">
              <Target size={22} />
            </div>
          </div>

          {/* Animated Conversion Funnel */}
          <div className="space-y-2 mb-4">
            <div>
              <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                <span>STAGE 1: IMPRESSIONS</span>
                <span className="text-white font-bold">250,000</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#10b981] w-[95%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                <span>STAGE 2: HIGH-INTENT CLICKS</span>
                <span className="text-[#f59e0b] font-bold">18,400 (7.4%)</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#10b981] w-[65%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-mono text-white/70 mb-1">
                <span>STAGE 3: QUALIFIED ENQUIRIES</span>
                <span className="text-[#10b981] font-bold">2,180 (11.8%)</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#f59e0b] to-[#10b981] w-[35%]" />
              </div>
            </div>
          </div>

          {/* Ad Spend vs Return Ticker */}
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono">
            <div>
              <span className="text-white/40 block text-[10px]">AD BUDGET:</span>
              <span className="text-white font-bold">₹1,00,000</span>
            </div>
            <span className="text-[#f59e0b]">➔</span>
            <div>
              <span className="text-white/40 block text-[10px]">REVENUE PIPELINE:</span>
              <span className="text-[#10b981] font-bold">₹4,85,000</span>
            </div>
          </div>
        </div>

        {/* Targeting HUD Pill */}
        <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
          <span>ALGORITHM: META & GOOGLE AUCTION</span>
          <span className="text-[#10b981] font-bold">● BID WINNER</span>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>META ADS & GOOGLE SEARCH CERTIFIED</span>
        <span className="text-[#10b981]">● 0% BUDGET WASTAGE</span>
      </div>
    </div>
  );
}

/* 4. WEBSITE DEVELOPMENT MOTION GRAPHIC */
export function WebMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#38bdf8]" style={{ left: '15%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#6366f1]" style={{ right: '20%', bottom: '15%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
        <span>RESPONSIVE ENGINE // 60FPS DIGITAL PRODUCT</span>
      </div>

      <div className="relative z-10 w-full max-w-[430px] p-6 flex flex-col gap-4">
        {/* Code Editor & UI Browser Window */}
        <div className="motion-glass-card p-4">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]" />
            </div>
            <span className="text-[11px] font-mono text-white/50">app/page.tsx • React 19 & Next.js</span>
            <span className="text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded">60 FPS</span>
          </div>

          {/* Syntax Highlighting Stream */}
          <div className="font-mono text-xs text-white/80 space-y-1 p-3 rounded-xl bg-black/70 mb-4">
            <div>
              <span className="text-[#c084fc]">export default function</span> <span className="text-[#38bdf8]">HighConvertingSite</span>() &#123;
            </div>
            <div className="pl-4">
              <span className="text-[#c084fc]">return</span> (
            </div>
            <div className="pl-8 text-[#34d399]">
              &lt;<span className="text-[#38bdf8]">Experience</span> <span className="text-[#fbbf24]">lcp</span>=&#123;0.6s&#125; <span className="text-[#fbbf24]">responsive</span> /&gt;
            </div>
            <div className="pl-4">&#41;;</div>
            <div>&#125;</div>
          </div>

          {/* Lighthouse Performance Score Strip */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
            <div className="p-2 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30">
              <div className="text-base font-bold text-[#10b981]">100</div>
              <div className="text-[9px] text-white/60">PERF</div>
            </div>
            <div className="p-2 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30">
              <div className="text-base font-bold text-[#10b981]">100</div>
              <div className="text-[9px] text-white/60">A11Y</div>
            </div>
            <div className="p-2 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30">
              <div className="text-base font-bold text-[#10b981]">100</div>
              <div className="text-[9px] text-white/60">BEST</div>
            </div>
            <div className="p-2 rounded-xl bg-[#10b981]/15 border border-[#10b981]/30">
              <div className="text-base font-bold text-[#10b981]">100</div>
              <div className="text-[9px] text-white/60">SEO</div>
            </div>
          </div>
        </div>

        {/* Viewport Breakpoint Indicator */}
        <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
          <span>RESPONSIVE: FLUID DESKTOP + MOBILE</span>
          <span className="text-[#38bdf8] font-bold">LIGHTNING FAST</span>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>FULL-STACK ARCHITECTURE & SECURITY</span>
        <span className="text-[#38bdf8]">● ZERO LAYOUT SHIFT</span>
      </div>
    </div>
  );
}

/* 5. BRANDING & STRATEGY MOTION GRAPHIC */
export function BrandingMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#7735d5]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#c084fc]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#c084fc] animate-ping" />
        <span>IDENTITY SYSTEM & GOLDEN RATIO GEOMETRY</span>
      </div>

      <div className="relative z-10 w-full max-w-[400px] p-6 flex flex-col gap-4">
        {/* Geometric Monogram Construction Canvas */}
        <div className="motion-glass-card p-5 relative overflow-hidden flex flex-col items-center">
          <div className="relative w-36 h-36 flex items-center justify-center my-2">
            {/* Golden Ratio Rotating Circles */}
            <div
              className="absolute inset-0 rounded-full border border-[#c084fc]/30"
              style={{ animation: 'apertureSpin 24s linear infinite' }}
            />
            <div className="absolute inset-3 rounded-full border border-[#7735d5]/50 border-dashed" />
            <div className="absolute inset-8 rounded-full border border-[#c084fc]/40" />

            {/* Central Iconic Brand Monogram */}
            <div className="relative z-10 text-3xl font-extrabold tracking-tighter text-white">
              M<span className="text-[#c084fc]">/</span>B
            </div>

            {/* Caliper Measurement Lines */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#c084fc]/30" />
            <div className="absolute inset-y-0 left-1/2 w-px bg-[#c084fc]/30" />
          </div>

          <div className="text-center mt-2 mb-4">
            <div className="text-sm font-bold text-white tracking-wide">PRECISION BRAND ARCHITECTURE</div>
            <div className="text-[11px] font-mono text-white/50">1:1.618 GOLDEN RATIO PROPORTIONS</div>
          </div>

          {/* Curated Color System Palette Swatches */}
          <div className="grid grid-cols-4 gap-2 w-full pt-3 border-t border-white/10">
            <div className="p-2 rounded-xl bg-[#662d91] text-center">
              <span className="block text-[9px] font-mono text-white/80">#662D91</span>
            </div>
            <div className="p-2 rounded-xl bg-[#8b5cf6] text-center">
              <span className="block text-[9px] font-mono text-white/80">#8B5CF6</span>
            </div>
            <div className="p-2 rounded-xl bg-[#141418] border border-white/20 text-center">
              <span className="block text-[9px] font-mono text-white/80">CHARCOAL</span>
            </div>
            <div className="p-2 rounded-xl bg-white text-center">
              <span className="block text-[9px] font-mono text-black font-bold">PURE</span>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
          <span>DELIVERABLE: GUIDELINES & ASSET DECK</span>
          <span className="text-[#c084fc] font-bold">FULL SYSTEM</span>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>LOGO • TYPOGRAPHY • COLOR • VOICE</span>
        <span className="text-[#c084fc]">● TRADEMARK READY</span>
      </div>
    </div>
  );
}

/* 6. BUSINESS & MARKETING CONSULTING MOTION GRAPHIC */
export function ConsultingMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#6366f1]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#fbbf24]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-ping" />
        <span>GROWTH ROADMAP // STRATEGIC DIRECTION</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5">
          <span className="text-[11px] font-mono text-white/50 uppercase tracking-widest block mb-4">
            MULTI-PHASE COMMERCIAL SCALING
          </span>

          {/* 4-Stage Trajectory Road Pipeline */}
          <div className="space-y-3 relative mb-4">
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-lg bg-[#6366f1] text-white flex items-center justify-center font-bold text-xs">
                01
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Diagnostic & Market Audit</div>
                <div className="text-[10px] text-white/50">Identify unit economics & positioning gaps</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-7 h-7 rounded-lg bg-[#8b5cf6] text-white flex items-center justify-center font-bold text-xs">
                02
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Go-To-Market Architecture</div>
                <div className="text-[10px] text-white/50">Price modeling, offer clarity & channels</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#fbbf24]/10 border border-[#fbbf24]/30">
              <div className="w-7 h-7 rounded-lg bg-[#fbbf24] text-black flex items-center justify-center font-bold text-xs">
                03
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Execution & Team Alignment</div>
                <div className="text-[10px] text-[#fbbf24]">Current Focus • Multiplier Phase</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-white/50">REVENUE VELOCITY:</span>
            <span className="text-[#fbbf24] font-bold">+2.8X PIPELINE IMPACT</span>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>STRATEGY • OPERATIONS • GO-TO-MARKET</span>
        <span className="text-[#fbbf24]">● C-SUITE ADVISORY</span>
      </div>
    </div>
  );
}

/* 7. VIDEO PRODUCTION & COMMERCIAL SHOOTS MOTION GRAPHIC */
export function VideoMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#e11d48]" style={{ left: '25%', top: '25%' }} />
      <div className="motion-bg-bloom bg-[#f43f5e]" style={{ right: '15%', bottom: '15%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-ping" />
        <span>CINEMA CAMERA VIEWFINDER // 4K RAW 60FPS</span>
      </div>

      <div className="relative z-10 w-full max-w-[430px] p-6 flex flex-col gap-4">
        {/* Pro Viewfinder Frame */}
        <div className="motion-glass-card p-5 relative overflow-hidden border border-[#e11d48]/30">
          {/* Rule of Thirds Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="w-full h-1/3 border-b border-white" />
            <div className="w-full h-2/3 border-b border-white" />
            <div className="absolute top-0 bottom-0 left-1/3 border-r border-white" />
            <div className="absolute top-0 bottom-0 left-2/3 border-r border-white" />
          </div>

          {/* Viewfinder HUD Header */}
          <div className="flex items-center justify-between text-xs font-mono mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]" style={{ animation: 'tallyBlink 1s infinite' }} />
              <span className="text-[#e11d48] font-bold">REC [00:14:28:12]</span>
            </div>
            <div className="px-2 py-0.5 rounded bg-black/70 text-white/80 border border-white/10 text-[10px]">
              4K DCI • PRORES RAW
            </div>
          </div>

          {/* Viewfinder Center Crosshairs */}
          <div className="h-32 flex items-center justify-center relative my-2">
            <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#e11d48] rounded-full" />
            </div>
            <div className="absolute top-2 left-4 text-[10px] font-mono text-white/50">SHUTTER: 1/120s</div>
            <div className="absolute top-2 right-4 text-[10px] font-mono text-white/50">ISO: 800</div>
            <div className="absolute bottom-2 left-4 text-[10px] font-mono text-white/50">APERTURE: T1.9</div>
            <div className="absolute bottom-2 right-4 text-[10px] font-mono text-white/50">WB: 5600K</div>
          </div>

          {/* Audio Stereo VU Meter */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-white/40 w-4">L</span>
              <div className="flex-1 h-2 rounded bg-black/60 overflow-hidden flex gap-0.5">
                <div className="h-full bg-[#10b981] w-[60%]" />
                <div className="h-full bg-[#fbbf24] w-[20%]" />
                <div className="h-full bg-[#e11d48] w-[10%]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/40 w-4">R</span>
              <div className="flex-1 h-2 rounded bg-black/60 overflow-hidden flex gap-0.5">
                <div className="h-full bg-[#10b981] w-[55%]" />
                <div className="h-full bg-[#fbbf24] w-[22%]" />
                <div className="h-full bg-[#e11d48] w-[8%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>COMMERCIALS • BRAND FILMS • PODCASTS</span>
        <span className="text-[#e11d48]">● COLOR GRADED & MASTERED</span>
      </div>
    </div>
  );
}

/* 8. COMMERCIAL PHOTOGRAPHY MOTION GRAPHIC */
export function PhotographyMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#3b82f6]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#ffffff]" style={{ right: '20%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
        <span>STUDIO OPTICAL VIEWFINDER // 100MP SENSOR</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5 relative overflow-hidden">
          {/* DSLR Viewfinder Brackets */}
          <div className="h-44 rounded-2xl bg-black/70 border border-white/15 relative flex items-center justify-center p-4 mb-4">
            {/* Auto Focus Target Box */}
            <div
              className="w-20 h-20 border-2 border-[#22c55e] rounded-lg relative flex items-center justify-center"
              style={{ animation: 'pulseGlow 2.5s infinite' }}
            >
              <div className="w-1.5 h-1.5 bg-[#22c55e] rounded-full" />
              <span className="absolute -top-3 left-1 bg-[#22c55e] text-black text-[8px] font-mono font-bold px-1 rounded">
                EYE AF LOCKED
              </span>
            </div>

            {/* Live Camera Settings Overlay */}
            <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-mono text-white/80">
              <span>1/2000s</span>
              <span>f/1.4</span>
              <span>ISO 50</span>
              <span className="text-[#22c55e] font-bold">● FOCUS OK</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">LIGHTING:</span>
              <span className="text-white font-bold">STROBE 3-POINT</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">RESOLUTION:</span>
              <span className="text-[#3b82f6] font-bold">100MP RAW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>PRODUCT • FASHION • CORPORATE HEADSHOTS</span>
        <span className="text-[#3b82f6]">● RETOUCHED & HIGH-RES</span>
      </div>
    </div>
  );
}

/* 9. IPHONE CAMERA SHOOTS & REELS MOTION GRAPHIC */
export function MobileShootsMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#eab308]" style={{ left: '20%', top: '25%' }} />
      <div className="motion-bg-bloom bg-[#a855f7]" style={{ right: '20%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#eab308] animate-ping" />
        <span>IPHONE 16 PRO RIG // 4K CINEMATIC REELS</span>
      </div>

      <div className="relative z-10 w-full max-w-[390px] p-5 flex flex-col gap-4">
        <div className="motion-glass-card p-4">
          {/* iOS Camera Viewfinder */}
          <div className="h-52 rounded-2xl bg-black/80 border border-white/20 relative flex flex-col justify-between p-4 mb-3">
            <div className="flex items-center justify-between text-[11px] font-mono text-white/80">
              <span className="text-[#eab308] font-bold">CINEMATIC 4K 60</span>
              <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10">LOG ENCODED</span>
            </div>

            {/* Apple Yellow Focus Box */}
            <div className="self-center w-16 h-16 border border-[#eab308] relative flex items-center justify-center">
              <div className="absolute -right-3 top-2 w-1.5 h-1.5 bg-[#eab308] rounded-full" />
              <div className="w-1.5 h-1.5 bg-[#eab308] rounded-full" />
            </div>

            {/* Focal Length Switcher Pill */}
            <div className="self-center flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white">
              <span className="text-white/40">.5</span>
              <span className="text-[#eab308] font-bold">1x</span>
              <span className="text-white/40">2</span>
              <span className="text-white/40">5</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-white/50">STABILIZATION:</span>
            <span className="text-[#eab308] font-bold">ACTION MODE GIMBAL READY</span>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>INSTAGRAM REELS • SHORTS • TIKTOK READY</span>
        <span className="text-[#eab308]">● 24H EXPRESS TURNAROUND</span>
      </div>
    </div>
  );
}

/* 10. CONTENT CREATION & COPYWRITING MOTION GRAPHIC */
export function ContentMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#f97316]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#ec4899]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#f97316] animate-ping" />
        <span>EDITORIAL ENGINE & PERSUASIVE COPY</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5">
          <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-3 border-b border-white/10 pb-2">
            <span>DRAFT: HIGH-CONVERTING LANDING COPY</span>
            <span className="text-[#f97316] font-bold">96% RETENTION</span>
          </div>

          {/* Typewriter Editorial Flow */}
          <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-4 space-y-2 text-xs font-mono text-white/90">
            <div>
              <span className="bg-[#f97316]/20 text-[#f97316] px-1.5 py-0.5 rounded font-bold">HOOK:</span>{' '}
              Stop losing customers to confusing messaging.
            </div>
            <div className="text-white/70">
              Clear words convert casual browsers into committed buyers. We write copy that speaks
              directly to decision-makers.
              <span className="inline-block w-1.5 h-3 bg-[#f97316] ml-1 animate-pulse" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">READABILITY:</span>
              <span className="text-[#10b981] font-bold">GRADE A+</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">TONE:</span>
              <span className="text-[#f97316] font-bold">CONFIDENT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>LANDING PAGES • EMAILS • AD SCRIPTS</span>
        <span className="text-[#f97316]">● SEO KEYWORD OPTIMIZED</span>
      </div>
    </div>
  );
}

/* 11. BUSINESS LOAN ASSISTANCE MOTION GRAPHIC */
export function FundingMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#059669]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#d97706]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#059669] animate-ping" />
        <span>CAPITAL READINESS & LOAN CLEARANCE</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-mono text-white/50 uppercase block">
                BUSINESS CIBIL & FINANCIAL PROFILE
              </span>
              <div className="text-2xl font-bold text-white flex items-center gap-2">
                850 / 900 <span className="text-xs font-mono text-[#059669] font-bold">PRE-QUALIFIED</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#059669]/20 border border-[#059669]/40 flex items-center justify-center text-[#059669]">
              <DollarSign size={20} />
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="space-y-2 mb-4 text-xs font-mono">
            <div className="p-2 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-white/90">
              <CheckCircle2 size={14} className="text-[#059669]" />
              <span>GST & 2-Year Audited Balance Sheet Verified</span>
            </div>
            <div className="p-2 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-white/90">
              <CheckCircle2 size={14} className="text-[#059669]" />
              <span>Cash Flow & Banking Turnovers Matched</span>
            </div>
            <div className="p-2 rounded-xl bg-black/50 border border-white/10 flex items-center gap-2 text-white/90">
              <CheckCircle2 size={14} className="text-[#059669]" />
              <span>Lender Network Fast-Track Application Ready</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#059669]/10 border border-[#059669]/30 flex items-center justify-between text-xs font-mono">
            <span className="text-white/70">FUNDING BRACKET:</span>
            <span className="text-[#059669] font-bold">₹10 LAKH – ₹5 CRORE+</span>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>GUIDANCE ONLY • ZERO UPFRONT LENDER FEES</span>
        <span className="text-[#059669]">● STRICT PRIVACY</span>
      </div>
    </div>
  );
}

/* 12. APP STORE OPTIMIZATION MOTION GRAPHIC */
export function AsoMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#0284c7]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#38bdf8]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-ping" />
        <span>APP STORE ALGORITHM // ORGANIC DISCOVERY</span>
      </div>

      <div className="relative z-10 w-full max-w-[420px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] flex items-center justify-center text-white font-bold text-lg shadow-lg">
              MB
            </div>
            <div>
              <div className="text-sm font-bold text-white">Your Brand Mobile App</div>
              <div className="text-xs text-white/50 flex items-center gap-1 font-mono">
                <Star size={12} className="text-[#fbbf24] fill-[#fbbf24]" />
                <span className="text-[#fbbf24] font-bold">4.9</span> (34.8K Ratings) • #1 in Category
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-4">
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10">
              <span className="text-white/40 block text-[10px]">ORGANIC DOWNLOADS:</span>
              <span className="text-[#38bdf8] font-bold">+184% VELOCITY</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10">
              <span className="text-white/40 block text-[10px]">KEYWORD RANK:</span>
              <span className="text-[#10b981] font-bold">#1 SEARCH TERM</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#0284c7]/10 border border-[#0284c7]/30 flex items-center justify-between text-xs font-mono">
            <span className="text-white/70">STORE CONVERSION RATE:</span>
            <span className="text-[#38bdf8] font-bold">34.6% (2.4X AVG)</span>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>APPLE APP STORE & GOOGLE PLAY OPTIMIZED</span>
        <span className="text-[#38bdf8]">● VISUAL A/B TESTED</span>
      </div>
    </div>
  );
}

/* 13. WHATSAPP MARKETING & AUTOMATION MOTION GRAPHIC */
export function WhatsappMotionGraphic() {
  return (
    <div className="motion-graphic-stage">
      <div className="motion-bg-bloom bg-[#25d366]" style={{ left: '20%', top: '20%' }} />
      <div className="motion-bg-bloom bg-[#128c7e]" style={{ right: '15%', bottom: '20%' }} />

      <div className="motion-hud-tag">
        <span className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
        <span>WHATSAPP AUTOMATION // 98% OPEN RATE</span>
      </div>

      <div className="relative z-10 w-full max-w-[400px] p-6 flex flex-col gap-4">
        <div className="motion-glass-card p-5">
          {/* WhatsApp Chat Conversation Simulation */}
          <div className="space-y-3 mb-4">
            <div className="p-3 rounded-2xl rounded-tl-none bg-[#1f2c34] border border-white/10 text-xs text-white max-w-[85%] self-start">
              <div>Hi! I want to enquire about scaling our brand campaign.</div>
              <div className="text-[9px] text-white/40 text-right mt-1">10:42 AM</div>
            </div>

            <div className="p-3 rounded-2xl rounded-tr-none bg-[#005c4b] border border-[#25d366]/30 text-xs text-white max-w-[90%] ml-auto">
              <div className="font-semibold text-[#25d366] text-[11px] mb-1">MyBrandsBuddy Automated Assistant ✓</div>
              <div>Hello! Welcome aboard. Our team can build a custom marketing system for you within 48h.</div>
              <div className="text-[9px] text-[#25d366] text-right mt-1 font-bold">10:42 AM ✓✓</div>
            </div>

            {/* Quick Reply Interactive Pills */}
            <div className="flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] text-[10px] font-mono font-bold">
                [1] View Services
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#25d366]/20 border border-[#25d366]/40 text-[#25d366] text-[10px] font-mono font-bold">
                [2] Speak to Strategist
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">OPEN RATE:</span>
              <span className="text-[#25d366] font-bold">98.2%</span>
            </div>
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 flex justify-between">
              <span className="text-white/50">CTR:</span>
              <span className="text-[#25d366] font-bold">45.8%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="motion-hud-footer">
        <span>OFFICIAL META WHATSAPP BUSINESS API</span>
        <span className="text-[#25d366]">● 100% AUTOMATED FUNNEL</span>
      </div>
    </div>
  );
}

/* MASTER DISPATCHER COMPONENT */
export function ServiceMotionGraphic({ theme, slug }: { theme: string; slug?: string }) {
  if (slug === 'seo-local-search' || theme === 'search') return <SeoMotionGraphic />;
  if (slug === 'social-media-marketing' || theme === 'social') return <SocialMotionGraphic />;
  if (slug === 'performance-marketing' || theme === 'performance') return <PerformanceMotionGraphic />;
  if (slug === 'website-development' || theme === 'web') return <WebMotionGraphic />;
  if (slug === 'branding-brand-strategy' || theme === 'branding') return <BrandingMotionGraphic />;
  if (slug === 'business-marketing-consulting' || theme === 'consulting') return <ConsultingMotionGraphic />;
  if (slug === 'video-production' || theme === 'video') return <VideoMotionGraphic />;
  if (slug === 'photography-videography' || theme === 'photography') return <PhotographyMotionGraphic />;
  if (slug === 'iphone-camera-shoots' || theme === 'mobile') return <MobileShootsMotionGraphic />;
  if (slug === 'content-creation' || theme === 'content') return <ContentMotionGraphic />;
  if (slug === 'business-loan-assistance' || theme === 'funding') return <FundingMotionGraphic />;
  if (slug === 'app-store-optimization' || theme === 'aso') return <AsoMotionGraphic />;
  if (slug === 'whatsapp-marketing' || theme === 'whatsapp') return <WhatsappMotionGraphic />;

  // Default fallback for any other creative service
  return <WebMotionGraphic />;
}
