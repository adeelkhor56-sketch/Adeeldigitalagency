import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Adeel Digital Agency',
  description: 'Privacy policy and data protection commitments of Adeel Digital Agency.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-silver">
          Privacy Policy
        </h1>
        <p className="text-xs text-gold uppercase tracking-wider font-semibold font-heading">
          Last Updated: October 2026
        </p>

        <div className="space-y-6 text-sm text-silver-muted leading-relaxed font-sans">
          <p>
            Adeel Digital Agency (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located in Bahawalpur, Pakistan, respects your privacy and is strictly committed to protecting the personal information you share with us through our website.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a quote request or contact us, we collect information including your name, email address, phone or WhatsApp number, service preferences, and project requirements. We collect this data solely to prepare strategic marketing proposals and communicate with you.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used strictly to respond to your inquiries, deliver performance marketing services, provide project updates, and maintain business communication. We never sell, rent, or lease your personal contact details to third parties.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            3. Tracking Technologies & Cookies
          </h2>
          <p>
            We use essential cookies and web analytics to assess site performance and improve user experience. You can adjust your browser settings to refuse cookies at any time.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            4. Data Security
          </h2>
          <p>
            We implement security safeguards to protect your personal information against unauthorized access, alteration, or disclosure.
          </p>

          <h2 className="text-xl font-bold font-heading text-silver pt-4">
            5. Contact Information
          </h2>
          <p>
            If you have questions regarding this privacy policy, you may reach out to us directly at <a href="mailto:adeeldigitalagency@gmail.com" className="text-gold underline">adeeldigitalagency@gmail.com</a> or via WhatsApp at <a href="https://wa.me/923068851548" className="text-gold underline">+92 306 8851548</a>.
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
