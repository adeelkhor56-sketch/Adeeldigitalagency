'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { ArrowUpRight, Flame, Target, Code2, TrendingUp, Share2, Search, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  Target,
  Code2,
  TrendingUp,
  Share2,
  Search,
  Sparkles,
};

export default function ServicesRocketSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A] border-y border-surface-border">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Interactive Rocket Illustration */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
            >
              Category-Dominating Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver mt-2"
            >
              High-Performance Services Engineered for Hyper-Growth
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-silver-muted mt-3"
            >
              Six dedicated growth pillars engineered to dominate paid customer acquisition, modern search algorithms, and high-conversion web infrastructure.
            </motion.p>
          </div>

          {/* Interactive Rocket Rising Graphic with Glowing Trail & Smoke (studying reference theme) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center gap-4 p-4 rounded-2xl bg-surface/80 border border-gold/30 backdrop-blur-md"
          >
            {/* Animated Rocket Container */}
            <div className="relative w-14 h-20 flex flex-col items-center justify-center">
              {/* Rising rocket motion */}
              <motion.div
                animate={{
                  y: [-8, 4, -8],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.8,
                  ease: 'easeInOut',
                }}
                className="relative z-10 text-gold"
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="drop-shadow-[0_0_12px_rgba(245,179,1,0.8)]"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
              </motion.div>

              {/* Flame and exhaust effect */}
              <motion.div
                animate={{
                  scaleY: [0.8, 1.4, 0.9],
                  opacity: [0.7, 1, 0.8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="text-amber-500 -mt-1"
              >
                <Flame className="w-5 h-5 fill-amber-500" />
              </motion.div>

              {/* Cloud Smoke effect */}
              <div className="absolute -bottom-2 w-10 h-3 rounded-full bg-white/10 blur-sm animate-pulse-slow" />
            </div>

            <div className="text-left">
              <span className="text-xs font-bold font-heading text-silver block">
                Growth Acceleration
              </span>
              <span className="text-[11px] text-gold font-medium">
                Rocket Engine Active
              </span>
            </div>
          </motion.div>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Target;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-surface-border bg-[#141414]/80 backdrop-blur-xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-gold/50 hover:shadow-gold-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 p-3 rounded-xl bg-gold/10 border border-gold/30 text-gold group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold/80 px-2.5 py-1 rounded-full border border-gold/20 bg-gold/5">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-silver group-hover:text-gold transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-silver-muted leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between">
                  <span className="text-xs font-medium text-silver-muted group-hover:text-silver transition-colors">
                    Explore service blueprint
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    aria-label={`Learn more about ${service.title}`}
                    className="w-8 h-8 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver group-hover:text-gold group-hover:border-gold group-hover:translate-x-1 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Overview CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light hover:underline font-heading"
          >
            <span>Compare all service tiers & packages</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
