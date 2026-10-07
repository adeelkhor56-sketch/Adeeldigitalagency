'use client';

import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '@/data/testimonials';

export default function TrustStrip() {
  return (
    <section className="py-12 border-y border-surface-border bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-silver-muted font-heading font-medium">
          Trusted by Ambitious Brands Across Pakistan, UK, UAE & Global Markets
        </p>
      </div>

      {/* Marquee ticker container */}
      <div className="relative w-full flex overflow-x-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 sm:gap-16 items-center"
        >
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-surface-border/40 bg-surface/30 backdrop-blur-sm group hover:border-gold/40 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-gold/70 group-hover:bg-gold animate-pulse" />
              <span className="text-sm font-bold font-heading text-silver tracking-tight group-hover:text-gold transition-colors">
                {item.name}
              </span>
              <span className="text-[10px] text-silver-dark uppercase tracking-wider pl-1">
                ({item.category})
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
