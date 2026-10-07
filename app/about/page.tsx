import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, Target, Shield, HeartHandshake, Zap, ArrowRight } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Adeel Digital Agency | Founder Story, Mission & Values',
  description:
    'Learn how Adeel Digital Agency was founded in Bahawalpur to bring high-ROI performance marketing, bespoke Next.js web development, and AI video to ambitious businesses.',
};

const VALUES = [
  {
    title: 'Absolute ROI Accountability',
    desc: 'We treat every rupee and dollar of your budget as if it came from our own personal bank account. If an ad angle does not produce sales or qualified leads, we kill it immediately.',
    icon: Target,
  },
  {
    title: 'Zero Vanity Fluff',
    desc: 'We never hide behind vanity metrics like "reach" or "clicks" without tracking purchase conversions, Cost Per Acquisition (CPA), and verified ROAS.',
    icon: Shield,
  },
  {
    title: 'Continuous Innovation & AI Velocity',
    desc: 'The digital ecosystem moves at lightning speed. We keep our clients months ahead of competitors by adopting generative video pipelines and machine learning biddings.',
    icon: Zap,
  },
  {
    title: 'Genuine True Partnership',
    desc: 'We do not behave like distant vendors. We immerse ourselves in your unit economics, profit margins, and supply chain to engineer sustainable long-term scale.',
    icon: HeartHandshake,
  },
];

const SKILLS = [
  { name: 'Meta Ads & Creative Testing (CAPI)', percentage: 98 },
  { name: 'Google Ads (Search, PMax, YouTube)', percentage: 95 },
  { name: 'Full-Stack Next.js Web Engineering', percentage: 96 },
  { name: 'Technical & Local Search SEO', percentage: 92 },
  { name: 'Generative AI Video & Commercial Ads', percentage: 94 },
  { name: 'Conversion Rate Optimization (CRO)', percentage: 93 },
];

const TIMELINE = [
  {
    year: '2021',
    title: 'Agency Genesis',
    desc: 'Started running local performance campaigns in Bahawalpur for regional retail businesses, demonstrating the power of direct-response marketing.',
  },
  {
    year: '2023',
    title: 'National & UK Expansion',
    desc: 'Scaled e-commerce brands in Lahore, Karachi, and established overseas partnerships with logistics and healthcare clients in London.',
  },
  {
    year: '2025',
    title: 'Full-Stack Jamstack Engineering',
    desc: 'Integrated modern Next.js and headless architectures into our service stack, giving our advertising clients unbeatable sub-second landing page conversions.',
  },
  {
    year: '2026',
    title: 'Generative AI Commercials & Omnichannel Growth',
    desc: 'Pioneering AI video ad pipelines and omnichannel scaling frameworks for industry-leading brands across Pakistan and worldwide.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-semibold tracking-wider uppercase font-heading">
              <Award className="w-3.5 h-3.5" />
              <span>Founder Story & Agency Vision</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
              Empowering Ambitious Brands to Dominate Their Category
            </h1>

            <p className="text-base sm:text-lg text-silver-muted leading-relaxed font-sans">
              Founded by Adeel in Bahawalpur, Pakistan, our agency was built to bridge the gap between creative visual artistry and ruthless technical performance marketing.
            </p>

            <p className="text-sm sm:text-base text-silver-muted leading-relaxed font-sans">
              We realized early that traditional agencies were charging exorbitant retainers while outsourcing work to inexperienced juniors and hiding behind meaningless vanity reports. We took the opposite approach: full transparency, senior engineering, direct founder access, and zero long-term contract traps.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[320px] sm:w-[380px] aspect-[4/5] rounded-3xl p-2 bg-gradient-to-tr from-gold/40 via-surface-border to-surface/90 shadow-2xl">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-surface">
                <Image
                  src="/about-adeel.jpg"
                  alt="Adeel – Founder of Adeel Digital Agency"
                  fill
                  sizes="(max-width: 768px) 340px, 400px"
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10">
                  <p className="text-sm font-bold text-silver font-heading">Adeel</p>
                  <p className="text-xs text-gold">Founder & Growth Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Progress Bars */}
        <div className="rounded-3xl border border-surface-border bg-surface/50 backdrop-blur-xl p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
              Core Technical Competencies & Execution Mastery
            </h2>
            <p className="text-xs sm:text-sm text-silver-muted mt-2">
              Every discipline is executed with elite proficiency to guarantee compounding business returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-xs font-semibold font-heading">
                  <span className="text-silver">{skill.name}</span>
                  <span className="text-gold">{skill.percentage}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gold-gradient transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
              Our Non-Negotiable Core Values
            </h2>
            <p className="text-xs sm:text-sm text-silver-muted mt-2">
              The foundational principles that guide every client interaction and campaign decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="rounded-2xl border border-surface-border bg-surface/50 p-6 space-y-3 group hover:border-gold/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-silver group-hover:text-gold transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-silver-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Agency Timeline */}
        <div className="rounded-3xl border border-surface-border bg-[#0E0E0E] p-8 sm:p-12">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-silver">
              Our Journey & Growth Milestones
            </h2>
            <p className="text-xs sm:text-sm text-silver-muted mt-2">
              From a passionate digital practice in Bahawalpur to an international growth partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {TIMELINE.map((step, idx) => (
              <div key={step.year} className="relative space-y-3">
                <div className="text-3xl font-black font-heading gold-gradient-pure">
                  {step.year}
                </div>
                <h3 className="text-base font-bold font-heading text-silver">
                  {step.title}
                </h3>
                <p className="text-xs text-silver-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Form */}
        <QuoteForm
          title="Discuss Your Next Growth Sprint With Adeel"
          subtitle="Ready to take your business to the next level? Connect directly with our founder."
        />
      </div>
    </div>
  );
}
