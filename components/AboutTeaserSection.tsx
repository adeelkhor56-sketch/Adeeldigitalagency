'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, MessageSquare, Sparkles, ArrowRight, Award } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function AboutTeaserSection() {
  const points = [
    'Direct founder oversight on all ad strategies and code architecture',
    'Deep expertise in Meta Advantage+, Google Performance Max & Server CAPI',
    'Full-stack Next.js web performance engineered for sub-second page loads',
    'Transparent bi-weekly growth sprints and real-time dashboard tracking',
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait with Experience Badge & Live-Chat Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[300px] sm:w-[360px] aspect-[4/5] rounded-3xl p-2 bg-gradient-to-tr from-gold/30 via-surface-border to-surface/90 shadow-2xl">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-surface">
                <Image
                  src="/about-adeel.jpg"
                  alt="Adeel – Founder of Adeel Digital Agency"
                  fill
                  sizes="(max-width: 768px) 340px, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -top-5 -right-5 sm:-right-7 rounded-2xl bg-[#121212]/95 border border-gold/40 p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-gradient flex items-center justify-center text-black font-extrabold text-lg font-heading">
                  5+
                </div>
                <div>
                  <div className="text-xs font-bold text-silver font-heading">
                    Years of Growth
                  </div>
                  <div className="text-[10px] text-silver-muted uppercase tracking-wider">
                    Proven ROI Track Record
                  </div>
                </div>
              </motion.div>

              {/* Need Custom? Quick Card */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 rounded-2xl bg-surface/95 border border-surface-border p-3.5 shadow-xl backdrop-blur-md max-w-[210px]">
                <div className="flex items-center gap-2 text-gold mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold font-heading">Need Custom?</span>
                </div>
                <p className="text-[11px] text-silver-muted leading-tight">
                  Tailored growth systems configured for your exact business model.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Mission, Bullet Points & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase font-heading"
            >
              <Award className="w-3.5 h-3.5" />
              <span>About Adeel Digital Agency</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver tracking-tight"
            >
              We Are Not Just An Agency.{' '}
              <span className="gold-gradient-pure">We Are Your Growth Partner.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-silver-muted leading-relaxed"
            >
              Based in Bahawalpur, Pakistan, Adeel Digital Agency was founded on one uncompromising principle: <strong className="text-silver">results over rhetoric</strong>. Too many businesses waste their capital on generic agencies delivering vanity metrics that never convert into sales.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base text-silver-muted leading-relaxed"
            >
              We bring Silicon Valley-caliber performance marketing, modern full-stack web engineering, and futuristic AI video creative pipelines together under one roof. Whether you are an established brand in Pakistan or an international business expanding market share, we engineer the engines that scale your revenue.
            </motion.p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="flex items-center gap-3 text-xs sm:text-sm text-silver"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{pt}</span>
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider text-black bg-gold-gradient shadow-gold-sm hover:shadow-gold-md transition-all"
              >
                <span>Read Founder Story & Vision</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-medium text-xs text-silver border border-surface-border bg-surface hover:text-gold hover:border-gold/50 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
