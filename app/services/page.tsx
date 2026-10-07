import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, PACKAGES } from '@/data/services';
import { ArrowRight, CheckCircle2, Target, Code2, TrendingUp, Share2, Search, Sparkles } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Services & Growth Packages | Adeel Digital Agency',
  description:
    'Explore our 6 high-performance marketing and web engineering pillars: Meta Ads, Web Development, SEO, Social Media, Google Ads, and AI Video Commercials.',
};

const iconMap: Record<string, any> = {
  Target,
  Code2,
  TrendingUp,
  Share2,
  Search,
  Sparkles,
};

export default function ServicesOverviewPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Category-Leading Growth Pillars
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            High-Impact Marketing Services Built for Commercial Scale
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Every service is engineered around one standard: quantifiable business growth, lower acquisition costs, and higher customer lifetime value.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => {
            const Icon = iconMap[s.icon] || Target;
            return (
              <div
                key={s.slug}
                className="rounded-3xl border border-surface-border bg-surface/60 backdrop-blur-xl p-8 flex flex-col justify-between group hover:border-gold/50 hover:shadow-gold-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-black transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gold px-2.5 py-1 rounded-full border border-gold/20 bg-gold/5">
                      {s.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-silver group-hover:text-gold transition-colors mb-3">
                    {s.title}
                  </h2>

                  <p className="text-xs text-silver-muted leading-relaxed mb-6">
                    {s.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-silver">Key Deliverables:</p>
                    {s.included.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-silver-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${s.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-heading font-semibold text-silver bg-surface border border-surface-border group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all"
                >
                  <span>Explore Dedicated Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Growth Packages / Pricing Table */}
        <div className="rounded-3xl border border-surface-border bg-[#0E0E0E] p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              Flexible Retainers & Tiers
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-silver">
              Transparent Partnership Packages
            </h2>
            <p className="text-xs sm:text-sm text-silver-muted">
              Choose the tier that matches your current stage of growth. No predatory contracts; upgrade or pause as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                  pkg.popular
                    ? 'border-2 border-gold bg-[#161616] shadow-gold-md relative scale-105 z-10'
                    : 'border border-surface-border bg-surface/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-silver">
                    {pkg.name}
                  </h3>

                  <div className="my-4 pb-4 border-b border-surface-border/60">
                    <span className="text-2xl font-black font-heading text-silver">
                      {pkg.price}
                    </span>
                    <p className="text-xs text-silver-muted mt-1 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-silver">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center py-3 px-4 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider transition-all ${
                    pkg.popular
                      ? 'bg-gold-gradient text-black shadow-gold-sm hover:shadow-gold-md'
                      : 'bg-surface border border-surface-border text-silver hover:text-gold hover:border-gold'
                  }`}
                >
                  Get a Quote for this Tier
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Global Quote Form */}
        <QuoteForm
          title="Custom Scope Required?"
          subtitle="Tell us your specific channel objectives and we will customize a bespoke sprint proposal."
        />
      </div>
    </div>
  );
}
