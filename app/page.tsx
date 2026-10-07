import HeroSection from '@/components/HeroSection';
import ResultsCounters from '@/components/ResultsCounters';
import ProcessSection from '@/components/ProcessSection';
import AboutTeaserSection from '@/components/AboutTeaserSection';
import ServicesRocketSection from '@/components/ServicesRocketSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StrategySection from '@/components/StrategySection';
import CtaBanner from '@/components/CtaBanner';
import TrustStrip from '@/components/TrustStrip';
import FaqTeaserSection from '@/components/FaqTeaserSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import LatestBlogSection from '@/components/LatestBlogSection';
import QuoteForm from '@/components/QuoteForm';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (headline + photo + floating stat card 127k visitors / 75% growth) */}
      <HeroSection />

      {/* 2. Results Counters & High-level Metrics */}
      <ResultsCounters />

      {/* 3. 4-Step Process with icons and connecting line */}
      <ProcessSection />

      {/* 4. About teaser section with photo + experience badge + Need Custom? + Live Chat card */}
      <AboutTeaserSection />

      {/* 5. Dark Services section with 6 cards and animated rising rocket + smoke effect */}
      <ServicesRocketSection />

      {/* 6. Why choose us numbered items */}
      <WhyChooseUsSection />

      {/* 7. Strategy section with stat cards, growth chart and target-arrow */}
      <StrategySection />

      {/* 8. Big CTA banner */}
      <CtaBanner />

      {/* 9. Trust icons strip / client marquee */}
      <TrustStrip />

      {/* 10. FAQ accordion with help card */}
      <FaqTeaserSection />

      {/* 11. Testimonials slider with 4.9 rating box */}
      <TestimonialsSlider />

      {/* 12. Latest blog cards */}
      <LatestBlogSection />

      {/* 13. Interactive Strategy Quote Form Section */}
      <section className="py-24 bg-[#0A0A0A] border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm
            title="Accelerate Your Growth With Adeel"
            subtitle="Submit your requirements below. Adeel will review your ad account or website and provide a personalized blueprint."
          />
        </div>
      </section>
    </>
  );
}
