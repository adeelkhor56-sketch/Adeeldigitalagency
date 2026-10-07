import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, ArrowRight, Zap, Target, HelpCircle, TrendingUp } from 'lucide-react';
import { AGENCY_CONFIG } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} Agency Bahawalpur & Global | Adeel Digital Agency`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Adeel Digital Agency`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Adeel Digital Agency',
      telephone: '+923068851548',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bahawalpur',
        addressRegion: 'Punjab',
        addressCountry: 'PK',
      },
    },
    description: service.shortDesc,
    areaServed: ['Pakistan', 'United Kingdom', 'United States', 'United Arab Emirates'],
  };

  return (
    <div className="py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Service Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase font-heading">
            <Zap className="w-3.5 h-3.5" />
            <span>{service.tagline}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight leading-tight">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans max-w-2xl mx-auto">
            {service.heroSubheadline}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#quote-section"
              className="px-7 py-3.5 rounded-xl font-heading font-semibold text-xs uppercase tracking-wider text-black bg-gold-gradient shadow-gold-md hover:shadow-gold-lg transition-all"
            >
              Get a Proposal for {service.title}
            </Link>
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-heading font-medium text-xs text-silver border border-surface-border bg-surface hover:text-gold hover:border-gold/50 transition-all"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>

        {/* Expected Results Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.expectedResults.map((res, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-surface-border bg-surface/70 backdrop-blur-md text-center space-y-1 hover:border-gold/30 transition-all"
            >
              <div className="text-3xl font-black font-heading gold-gradient-pure">
                {res.metric}
              </div>
              <div className="text-xs text-silver-muted font-medium">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* What's Included & Key Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              The Blueprint
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-silver">
              What Is Included In Every {service.title} Engagement
            </h2>
            <p className="text-sm text-silver-muted leading-relaxed">
              We execute a comprehensive, battle-tested operational checklist to ensure every angle of your campaign is optimized for high return on investment.
            </p>

            <div className="space-y-3 pt-2">
              {service.included.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-surface/50 border border-surface-border">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-silver">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              The Advantage
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-silver">
              Commercial Benefits for Your Business
            </h2>
            <p className="text-sm text-silver-muted leading-relaxed">
              The direct commercial returns you unlock when deploying our {service.title} systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-surface/50 border border-surface-border space-y-2 hover:border-gold/30 transition-all">
                  <Target className="w-5 h-5 text-gold" />
                  <p className="text-xs text-silver font-medium leading-relaxed">{b}</p>
                </div>
              ))}
            </div>

            {/* Tools Stack */}
            <div className="p-6 rounded-2xl border border-surface-border bg-surface/30">
              <span className="text-xs font-bold font-heading text-silver uppercase tracking-wider block mb-3">
                Industry-Standard Stack & Tooling:
              </span>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 rounded-lg border border-surface-border bg-surface text-silver-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Breakdown */}
        <div className="rounded-3xl border border-surface-border bg-[#0D0D0D] p-8 sm:p-12 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              Phased Execution
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-silver">
              Our 4-Phase {service.title} Delivery Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl border border-surface-border bg-surface/50 space-y-3"
              >
                <div className="text-2xl font-black font-heading gold-gradient-pure">
                  {step.step}
                </div>
                <h3 className="text-base font-bold font-heading text-silver">
                  {step.title}
                </h3>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Service FAQ */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
              Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-surface-border bg-surface/50 space-y-2"
              >
                <h3 className="text-sm font-bold font-heading text-silver">
                  {item.q}
                </h3>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Service Quote Form */}
        <div id="quote-section" className="pt-8">
          <QuoteForm
            defaultService={service.title}
            title={`Get a Strategy Proposal for ${service.title}`}
            subtitle={`Share your target audience and current setup. Adeel will prepare a tailored ${service.title} action plan.`}
          />
        </div>
      </div>
    </div>
  );
}
