'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap, Users } from 'lucide-react';

const STATS = [
  {
    value: '4.2x',
    label: 'Average Scaled ROAS',
    sublabel: 'Consistently achieved across active client ad accounts',
    icon: TrendingUp,
  },
  {
    value: 'PKR 120M+',
    label: 'Tracked Client Revenue',
    sublabel: 'Verified e-commerce and high-ticket B2B pipelines',
    icon: Target,
  },
  {
    value: '< 1.1s',
    label: 'Sub-Second Web Speed',
    sublabel: 'Next.js Jamstack builds with 95+ PageSpeed scores',
    icon: Zap,
  },
  {
    value: '94.8%',
    label: 'Client Retention Rate',
    sublabel: 'Partners who renew month-over-month without lock-ins',
    icon: Users,
  },
];

export default function ResultsCounters() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md relative group hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-black font-heading gold-gradient-pure mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold font-heading text-silver mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
