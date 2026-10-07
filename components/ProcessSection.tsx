'use client';

import { motion } from 'framer-motion';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Audit & Diagnostic Analysis',
    desc: 'We perform a forensic audit of your past ad accounts, technical website speed, tracking health (CAPI), and competitor weaknesses.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Growth Architecture & Creative',
    desc: 'We architect your full-funnel strategy: high-CTR creative hooks, bespoke landing pages, and razor-sharp targeting angles.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Sandboxed Testing & Launch',
    desc: 'We deploy controlled budget tests to isolate high-converting hooks, validate unit economics, and tune bidding algorithms.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Aggressive Revenue Scaling',
    desc: 'We surge capital into winning ad sets, maximize organic search authority, and drive exponential, predictable return on ad spend.',
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
          >
            How We Deliver Results
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-silver mt-2"
          >
            Our 4-Step Revenue Generation Engine
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-silver-muted mt-3"
          >
            A battle-tested methodology designed to eliminate ad spend waste and scale customer acquisition predictably.
          </motion.p>
        </div>

        {/* 4-Step Grid with Connecting Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle connecting SVG line behind cards on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[2px] -translate-y-12 bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 z-0 pointer-events-none" />

          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative z-10 rounded-2xl border border-surface-border bg-surface/70 backdrop-blur-md p-6 group transition-all duration-300 hover:border-gold/40 hover:shadow-gold-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black font-heading text-surface-border group-hover:text-gold/40 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-silver mb-2.5 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
