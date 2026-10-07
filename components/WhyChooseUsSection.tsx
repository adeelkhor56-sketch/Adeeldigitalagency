'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, BarChart3, Users, Clock, Award } from 'lucide-react';

const REASONS = [
  {
    num: '01',
    title: 'Founder-Led Strategy & Execution',
    desc: 'You work directly with Adeel and senior strategists. No inexperienced junior interns handling your ad spend or deploying brittle code.',
    icon: Award,
  },
  {
    num: '02',
    title: 'Engineered for Real ROAS, Not Vanity Clicks',
    desc: 'We optimize strictly for bottom-line customer purchases, qualified calls, and measurable revenue. Likes and impressions mean nothing if the cash register does not ring.',
    icon: BarChart3,
  },
  {
    num: '03',
    title: 'Full-Stack Technical Precision',
    desc: 'From server-side Conversions API (CAPI) and Google Tag Manager to Next.js sub-second performance, our technical foundation prevents ad spend leakage.',
    icon: Zap,
  },
  {
    num: '04',
    title: 'Relentless Creative Velocity',
    desc: 'We combat ad fatigue before it starts by iterating 10-15 creative angles, video reels, and psychological hooks weekly to keep your CPAs depressed.',
    icon: Clock,
  },
  {
    num: '05',
    title: 'Bahawalpur Roots, Global Benchmarks',
    desc: 'Proudly rooted in Bahawalpur, Pakistan with deep local market understanding, yet operating to stringent international standards demanded by UK, US, and UAE clients.',
    icon: Users,
  },
  {
    num: '06',
    title: 'Complete Transparency & Zero Locked Contracts',
    desc: 'Live Notion & Looker dashboards tracking every rupee and dollar in real-time. We earn our client partnerships month-after-month purely through profitability.',
    icon: ShieldCheck,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
          >
            Why Partner With Adeel
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-heading text-silver mt-2"
          >
            Six Distinct Unfair Advantages We Provide Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-silver-muted mt-3"
          >
            Why ambitious brands choose Adeel Digital Agency over generic agencies and fragmented freelance rosters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="relative rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md p-7 group transition-all duration-300 hover:border-gold/40 hover:shadow-gold-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-105 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black font-heading text-surface-border group-hover:text-gold/40 transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="text-base font-bold font-heading text-silver mb-2 group-hover:text-gold transition-colors">
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
