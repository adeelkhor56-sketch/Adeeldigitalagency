import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Adeel Digital Agency',
  description: 'Terms and conditions for services provided by Adeel Digital Agency.',
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-silver">
          Terms of Service
        </h1>
        <p className="text-xs text-gold uppercase tracking-wider font-semibold font-heading">
          Last Updated: October 2026
        </p>

        <div className="space-y-6 text-sm text-silver-muted leading-relaxed font-sans">
          <p>
            By accessing this website and engaging with Adeel Digital Agency for digital marketing, web engineering, or creative services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            1. Scope of Services
          </h2>
          <p>
            Adeel Digital Agency provides digital marketing consultation, Meta advertising, Google advertising, SEO, social media management, bespoke web development, and AI video asset creation under mutually agreed service agreements and project statements of work.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            2. Ad Spend & Third-Party Platforms
          </h2>
          <p>
            Advertising budgets spent directly on third-party platforms (e.g., Meta, Google, TikTok) are paid directly to the respective ad networks by the client. While we deploy industry-standard conversion strategies, ad platform algorithms and auction dynamics fluctuate based on market factors beyond our control.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            3. Intellectual Property
          </h2>
          <p>
            Upon settlement of final project fees, clients retain full ownership of bespoke code, ad creatives, and digital assets produced specifically for their campaigns.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            4. Limitation of Liability
          </h2>
          <p>
            Adeel Digital Agency will not be held liable for indirect, consequential, or unforeseen commercial damages arising from third-party advertising account restrictions, algorithm updates, or hosting outages.
          </p>
        </div>

        <div className="pt-8 border-t border-surface-border">
          <Link href="/" className="text-xs font-semibold uppercase tracking-wider text-gold hover:underline font-heading">
            &larr; Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
