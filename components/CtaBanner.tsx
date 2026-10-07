'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-gold/40 bg-gradient-to-r from-[#141414] via-[#1A1A1A] to-[#121212] p-8 sm:p-14 shadow-2xl overflow-hidden">
          {/* Ambient Lighting Spheres */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6 text-center sm:text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-gold font-heading px-3 py-1 rounded-full border border-gold/30 bg-gold/10">
              Stop Guessing. Start Scaling.
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-silver tracking-tight">
              Ready to Turn Your Marketing Into Your Most Profitable Asset?
            </h2>

            <p className="text-sm sm:text-base text-silver-muted leading-relaxed">
              Book a 1-on-1 growth audit directly with Adeel. We will inspect your ad accounts, diagnose your conversion funnels, and map out a custom 90-day scaling roadmap.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-black font-heading font-semibold text-xs uppercase tracking-wider bg-gold-gradient shadow-gold-md hover:shadow-gold-lg hover:scale-105 transition-all"
              >
                <span>Claim Your Free Strategy Session</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-silver font-heading font-medium text-xs border border-surface-border bg-surface/80 hover:text-gold hover:border-gold/50 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Message Adeel on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
