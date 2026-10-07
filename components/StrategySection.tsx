'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart, ArrowUpRight } from 'lucide-react';

export default function StrategySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0C0C0C] border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Growth Chart & Target/Arrow Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl border border-surface-border bg-surface/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative">
              {/* Target & Arrow Graphic Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-surface-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold relative">
                    <Target className="w-6 h-6" />
                    {/* Concentric pulse ring */}
                    <span className="absolute inset-0 rounded-xl border border-gold/40 animate-ping opacity-40" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-silver">
                      Target ROAS Trajectory
                    </h3>
                    <p className="text-xs text-silver-muted">
                      Continuous 90-Day Optimization
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+185% Trajectory</span>
                </div>
              </div>

              {/* Animated SVG Growth Spline Chart */}
              <div className="relative h-48 w-full flex items-end">
                <svg
                  viewBox="0 0 400 160"
                  className="w-full h-full overflow-visible"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#F5B301" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#F5B301" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area under curve */}
                  <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    d="M 10 140 Q 90 120 160 85 T 280 50 T 390 18 L 390 160 L 10 160 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Golden Growth Curve */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: 'easeInOut' }}
                    d="M 10 140 Q 90 120 160 85 T 280 50 T 390 18"
                    stroke="#F5B301"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Target Arrow Strike Marker */}
                  <motion.circle
                    cx="390"
                    cy="18"
                    r="6"
                    fill="#F5B301"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.6, type: 'spring' }}
                  />
                </svg>

                {/* Floating Tooltip Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.7 }}
                  className="absolute top-2 right-0 bg-[#0A0A0A] border border-gold/40 px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-bold text-silver"
                >
                  <span className="text-gold">Peak Month:</span> 5.4x ROAS
                </motion.div>
              </div>

              {/* Data Breakdown Grid */}
              <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-surface-border/60 text-center">
                <div className="p-2.5 rounded-xl bg-surface/50 border border-surface-border">
                  <div className="text-base font-bold font-heading text-silver">
                    PKR 48M+
                  </div>
                  <div className="text-[10px] text-silver-muted uppercase tracking-wider">
                    Revenue Driven
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface/50 border border-surface-border">
                  <div className="text-base font-bold font-heading text-silver">
                    -42%
                  </div>
                  <div className="text-[10px] text-silver-muted uppercase tracking-wider">
                    Avg. CPA Drop
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-surface/50 border border-surface-border">
                  <div className="text-base font-bold font-heading text-gold">
                    94.8%
                  </div>
                  <div className="text-[10px] text-silver-muted uppercase tracking-wider">
                    Retention Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategy Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
            >
              Scientific Acquisition Strategy
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver"
            >
              Turning Uncertain Marketing Spend Into a Predictable Math Formula
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-silver-muted leading-relaxed"
            >
              Most businesses treat marketing as guesswork. At Adeel Digital Agency, we treat customer acquisition as an engineered equation of three variables: <strong className="text-silver">Attention Velocity</strong>, <strong className="text-silver">Conversion Friction</strong>, and <strong className="text-silver">Lifetime Value (LTV)</strong>.
            </motion.p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl border border-surface-border bg-surface/50 flex items-start gap-3.5">
                <BarChart className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-heading text-silver">
                    Algorithmic Alignment
                  </h4>
                  <p className="text-xs text-silver-muted mt-1 leading-relaxed">
                    We tailor bidding strategies and creative architecture specifically to feed machine-learning auction dynamics on Meta & Google.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-surface-border bg-surface/50 flex items-start gap-3.5">
                <TrendingUp className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold font-heading text-silver">
                    Speed & Friction Elimination
                  </h4>
                  <p className="text-xs text-silver-muted mt-1 leading-relaxed">
                    A 1-second delay reduces conversions by 7%. Our Next.js architecture guarantees sub-second page delivery across all 4G mobile devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
