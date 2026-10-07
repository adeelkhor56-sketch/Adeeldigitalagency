'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import { FAQ_DATA, type FaqItem } from '@/data/faq';
import QuoteForm from '@/components/QuoteForm';
import { AGENCY_CONFIG } from '@/lib/utils';

const CATEGORIES: ('All' | FaqItem['category'])[] = [
  'All',
  'General',
  'Services',
  'Pricing & ROI',
  'Process',
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | FaqItem['category']>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Knowledge Base & Answers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Everything you need to know about our growth frameworks, pricing retainers, onboarding process, and tech stack.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-heading transition-all ${
                activeCategory === cat
                  ? 'bg-gold-gradient text-black shadow-gold-sm'
                  : 'bg-surface border border-surface-border text-silver hover:text-gold hover:border-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-gold/30"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-silver hover:text-gold transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-gold uppercase px-2 py-0.5 rounded bg-gold/10 border border-gold/20">
                      {faq.category}
                    </span>
                    <span>{faq.question}</span>
                  </div>
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
                      <div className="px-6 pb-6 pt-2 text-sm text-silver-muted leading-relaxed border-t border-surface-border/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Card */}
        <div className="p-8 rounded-3xl border border-gold/30 bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold font-heading text-silver">
                Need an immediate answer about your specific project?
              </h3>
              <p className="text-xs text-silver-muted mt-1">
                Adeel answers inquiries personally via WhatsApp or email.
              </p>
            </div>
          </div>
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-heading font-semibold text-black bg-gold-gradient shadow-gold-sm hover:shadow-gold-md transition-all flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Bottom Quote Form */}
        <QuoteForm
          title="Ready to Start Your Project?"
          subtitle="Submit your requirements to receive a comprehensive audit and price proposal."
        />
      </div>
    </div>
  );
}
