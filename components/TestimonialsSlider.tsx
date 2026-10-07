'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import Link from 'next/link';

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((c) => (c === 0 ? TESTIMONIALS_DATA.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === TESTIMONIALS_DATA.length - 1 ? 0 : c + 1));
  };

  // Autoplay timer
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6500);
    return () => clearInterval(timer);
  }, [current]);

  const item = TESTIMONIALS_DATA[current];

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A] border-y border-surface-border">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-widest text-gold font-heading font-semibold"
            >
              Client Validated Results
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold font-heading text-silver mt-2"
            >
              What Ambitious Founders Say About Partnering With Adeel
            </motion.h2>
          </div>

          {/* Reference Theme Rating Box: 4.9 Rating Box */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface/80 border border-gold/30 backdrop-blur-md shadow-xl">
            <div className="text-3xl font-black font-heading gold-gradient-pure">
              4.9
            </div>
            <div>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-[11px] text-silver-muted mt-0.5">
                Based on verified client reviews
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Testimonial Display Card */}
        <div className="relative rounded-3xl border border-surface-border bg-surface/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-8 w-16 h-16 text-surface-border/40 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 relative z-10"
            >
              {/* Highlight Metric Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold font-heading">
                <Award className="w-3.5 h-3.5" />
                <span>{item.highlightMetric}</span>
              </div>

              {/* Client Quote */}
              <p className="text-base sm:text-xl text-silver leading-relaxed font-sans italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Client Details */}
              <div className="pt-4 border-t border-surface-border/50 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold font-heading text-silver">
                    {item.name}
                  </h3>
                  <p className="text-xs text-silver-muted">
                    {item.role} &bull; <span className="text-silver">{item.company}</span> ({item.location})
                  </p>
                  <p className="text-[11px] text-gold mt-0.5 font-medium">
                    Service: {item.service}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev/Next & Dots */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-surface-border/40">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx ? 'w-8 bg-gold' : 'w-2 bg-surface-border hover:bg-silver-muted'
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver hover:text-gold hover:border-gold transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/testimonials"
            className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline font-heading"
          >
            Explore all client reviews & video feedback slots &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
