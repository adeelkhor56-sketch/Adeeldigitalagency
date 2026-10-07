'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '@/data/portfolio';
import QuoteForm from '@/components/QuoteForm';

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Meta Ads', value: 'meta-ads' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'SEO', value: 'seo' },
  { label: 'Google Ads', value: 'google-ads' },
  { label: 'AI Video', value: 'ai-ads-video' },
  { label: 'Social Media', value: 'social-media-management' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.categoryFilter === activeFilter);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Proven Commercial Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            Case Studies & Validated Growth Results
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Real campaigns, measurable ROI, and engineered solutions. Explore how we scale client revenue across diverse industries.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeFilter === f.value
                  ? 'bg-gold-gradient text-black shadow-gold-sm'
                  : 'bg-surface border border-surface-border text-silver hover:text-gold hover:border-gold/40'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((cs) => (
              <motion.div
                layout
                key={cs.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-surface-border bg-surface/60 backdrop-blur-xl p-8 flex flex-col justify-between group hover:border-gold/40 transition-all duration-300"
              >
                <div>
                  {/* Category & Client Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/30">
                      {cs.category}
                    </span>
                    <span className="text-xs text-silver-muted font-medium">
                      {cs.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-silver group-hover:text-gold transition-colors mb-3 leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-silver-muted leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  {/* High Impact Metrics */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-black/40 border border-surface-border mb-6 text-center">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-sm sm:text-base font-black font-heading gold-gradient-pure">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-silver-muted line-clamp-1 mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-xs text-silver-muted border-t border-surface-border/50 pt-4">
                    <div>
                      <span className="font-semibold text-silver block mb-0.5">The Challenge:</span>
                      <p className="line-clamp-2">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-silver block mb-0.5">The Solution:</span>
                      <p className="line-clamp-2">{cs.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-border/40 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gold">
                    Outcome Verified
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs text-silver group-hover:text-gold font-medium"
                  >
                    <span>Request Similar Strategy</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Quote Form */}
        <QuoteForm
          title="Achieve Similar Revenue Results for Your Brand"
          subtitle="Let Adeel design an acquisition roadmap modeled on our highest-performing case studies."
        />
      </div>
    </div>
  );
}
