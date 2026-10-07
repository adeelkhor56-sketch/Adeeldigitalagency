import type { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote, Award, Video, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, CLIENT_LOGOS } from '@/data/testimonials';
import TrustStrip from '@/components/TrustStrip';
import QuoteForm from '@/components/QuoteForm';
import { AGENCY_CONFIG } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Client Reviews & Endorsements | Adeel Digital Agency',
  description:
    'Read verified feedback and growth outcomes from ambitious founders who partnered with Adeel Digital Agency across Pakistan and international markets.',
};

export default function TestimonialsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Unfiltered Founder Feedback
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            Client Reviews & Verified Commercial Wins
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Every review reflects an authentic growth engagement focused on ROAS improvement, lower acquisition costs, and premium engineering.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="p-8 rounded-3xl border border-surface-border bg-surface/60 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="text-5xl font-black font-heading gold-gradient-pure">
              4.9
            </div>
            <div>
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-silver-muted mt-1">
                Average Client Satisfaction Across 40+ Engagements
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-heading font-semibold text-silver border border-surface-border bg-surface hover:text-gold hover:border-gold/40 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              <span>Leave a Review on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Testimonials Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="rounded-3xl border border-surface-border bg-surface/50 backdrop-blur-md p-8 flex flex-col justify-between relative group hover:border-gold/40 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-surface-border/30 pointer-events-none" />

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold font-heading">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.highlightMetric}</span>
                </div>

                <p className="text-sm text-silver leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border/50">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-base font-bold font-heading text-silver">
                      {t.name}
                    </h3>
                    <p className="text-xs text-silver-muted">
                      {t.role}, <span className="text-silver">{t.company}</span>
                    </p>
                    <p className="text-[11px] text-silver-dark">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-gold font-medium">
                    {t.service}
                  </span>
                  <div className="flex text-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonial Placeholder Slots */}
        <div className="rounded-3xl border border-surface-border bg-[#0C0C0C] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              Live Video Conversations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
              Video Testimonials & Founder Interviews
            </h2>
            <p className="text-xs sm:text-sm text-silver-muted">
              Hear directly from founders in London, Lahore, and Bahawalpur explaining how our growth systems altered their business trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-video rounded-2xl border border-surface-border bg-surface/70 flex flex-col items-center justify-center p-6 text-center group hover:border-gold/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform mb-3">
                <Video className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold font-heading text-silver">
                Hamza Malik (Apex Apparel) – Scaling to 4.2x ROAS
              </h4>
              <p className="text-xs text-silver-muted mt-1">
                4-minute video interview discussing CAPI implementation and creative hook testing.
              </p>
              <span className="mt-3 text-[11px] font-semibold text-gold">
                Slot ready for active video asset embed
              </span>
            </div>

            <div className="relative aspect-video rounded-2xl border border-surface-border bg-surface/70 flex flex-col items-center justify-center p-6 text-center group hover:border-gold/40 transition-colors">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 transition-transform mb-3">
                <Video className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold font-heading text-silver">
                Dr. Tariq Chaudhry – Dominating Local Healthcare Map Pack
              </h4>
              <p className="text-xs text-silver-muted mt-1">
                Detailed discussion on capturing high-intent patients in Southern Punjab.
              </p>
              <span className="mt-3 text-[11px] font-semibold text-gold">
                Slot ready for active video asset embed
              </span>
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <TrustStrip />

        {/* Bottom Quote Form */}
        <QuoteForm
          title="Become Our Next Verified Case Study"
          subtitle="Join the growing roster of profitable businesses partnering with Adeel."
        />
      </div>
    </div>
  );
}
