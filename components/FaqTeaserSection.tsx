'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { FAQ_DATA } from '@/data/faq';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function FaqTeaserSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const teaserFaqs = FAQ_DATA.slice(0, 5);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title & Help Card (as seen in reference theme) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
            >
              Frequently Asked Questions
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver tracking-tight"
            >
              Everything You Need to Know Before We Start
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm text-silver-muted leading-relaxed"
            >
              Clear answers on how we structure ad retainers, handle creative production, ensure tracking accuracy, and scale brands without contract lock-ins.
            </motion.p>

            {/* Reference-Style Help Card */}
            <div className="p-6 rounded-2xl border border-gold/30 bg-surface/80 backdrop-blur-md shadow-xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-silver">
                    Have a specific question?
                  </h4>
                  <p className="text-xs text-silver-muted mt-1 leading-relaxed">
                    Chat directly with Adeel on WhatsApp for immediate answers regarding your exact business case.
                  </p>
                  <a
                    href={AGENCY_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline mt-3"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Open WhatsApp Chat &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold hover:underline font-heading"
            >
              <span>View full categorized FAQ knowledge base</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            {teaserFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-surface-border bg-surface/50 overflow-hidden transition-all duration-300 hover:border-gold/30"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-semibold text-sm sm:text-base text-silver hover:text-gold transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-silver-muted leading-relaxed border-t border-surface-border/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
