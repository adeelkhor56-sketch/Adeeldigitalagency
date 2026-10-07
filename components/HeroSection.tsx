'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, CheckCircle, Award, Star } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function HeroSection() {
  const headlineWords = ['Engineer', 'Predictable', 'Revenue', 'With', 'Your', 'Growth', 'Partner.'];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-20 bg-grid-pattern">
      {/* Ambient Radial Spotlight Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-surface-subtle rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Split-Headline, Subtitle, CTAs & Social Proof */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase font-heading"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Bahawalpur & Global Growth Agency</span>
            </motion.div>

            {/* Split Text Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-heading text-silver tracking-tight leading-[1.12]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block mr-2.5 ${
                    word === 'Revenue' || word === 'Growth'
                      ? 'gold-gradient-pure drop-shadow-[0_0_20px_rgba(245,179,1,0.3)]'
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-silver-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              We combine surgical Meta & Google Ads, sub-second Next.js web experiences, and high-impact AI commercials to transform curious scrollers into high-paying, lifelong clients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-black font-heading font-semibold text-sm uppercase tracking-wider bg-gold-gradient shadow-gold-md hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Claim Your Free Strategy Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-silver font-heading font-medium text-sm border border-surface-border bg-surface/60 backdrop-blur-md hover:text-gold hover:border-gold/50 transition-all"
              >
                <span>View Case Studies</span>
              </Link>
            </motion.div>

            {/* Mini Trust Micro-Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-silver-muted border-t border-surface-border/50"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>Zero Fake Vanity Metrics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-gold" />
                <span>Verified ROAS Tracking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-silver">4.9/5 Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Portrait Image with Gold Frame & Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient Animated Rings behind portrait */}
            <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-tr from-gold/20 via-transparent to-gold/10 blur-2xl animate-pulse-slow pointer-events-none" />

            {/* Hero Card Container */}
            <div className="relative w-[300px] sm:w-[360px] md:w-[400px] aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-gold/40 via-surface-border to-surface/90 shadow-2xl backdrop-blur-xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface">
                <Image
                  src="/hero-adeel.jpg"
                  alt="Adeel – Founder and Growth Architect at Adeel Digital Agency"
                  fill
                  sizes="(max-width: 768px) 340px, 420px"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-bold text-silver font-heading">Adeel</p>
                  <p className="text-[11px] text-gold font-medium">Founder & Principal Growth Architect</p>
                </div>
              </div>

              {/* Floating Stat Card 1: 127k Visitors / 75% Growth (Exact reference specification) */}
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: 'easeInOut',
                }}
                className="absolute -top-6 -left-6 sm:-left-8 rounded-2xl border border-gold/40 bg-[#121212]/95 backdrop-blur-xl p-3.5 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-silver font-heading">
                    127k+ Visitors
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span>&uarr; 75% Growth</span>
                    <span className="text-silver-muted font-normal">/ mo</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: 4.2x ROAS Badge */}
              <motion.div
                animate={{
                  y: [6, -6, 6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5.2,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -right-6 sm:-right-8 rounded-2xl border border-surface-border bg-[#141414]/95 backdrop-blur-xl p-3.5 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-gold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-silver font-heading">
                    4.2x Avg. ROAS
                  </div>
                  <div className="text-[11px] text-silver-muted font-medium">
                    Scaled across Ad Accounts
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
