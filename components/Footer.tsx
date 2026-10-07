import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons';
import { SERVICES } from '@/data/services';
import { AGENCY_CONFIG } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-[#0B0B0B] text-silver relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-surface-border">
          {/* Col 1: Brand Info & Socials */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11">
                <Image
                  src="/logo.png"
                  alt="Adeel Digital Agency Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-silver font-heading">
                  Adeel Digital Agency
                </span>
                <span className="text-xs uppercase tracking-widest text-gold font-medium">
                  Your Growth Partner
                </span>
              </div>
            </Link>

            <p className="text-sm text-silver-muted leading-relaxed max-w-sm">
              We engineer high-ROI performance marketing, bespoke Next.js web applications, and AI video commercials for ambitious brands in Bahawalpur, throughout Pakistan, and globally.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={AGENCY_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page of Adeel Digital Agency"
                className="w-9 h-9 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile of Adeel Digital Agency"
                className="w-9 h-9 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message"
                className="w-9 h-9 rounded-full border border-surface-border bg-surface flex items-center justify-center text-silver hover:text-gold hover:border-gold/50 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold font-heading mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-silver-muted">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-silver hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                  >
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold font-heading mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-silver-muted">
              <li>
                <Link href="/about" className="hover:text-silver transition-colors">
                  About Founder & Story
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-silver transition-colors">
                  Case Studies & Proof
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-silver transition-colors">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-silver transition-colors">
                  Growth Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-silver transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-silver transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold font-heading mb-4">
              Contact & Hours
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-silver-muted">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>{AGENCY_CONFIG.location}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-silver-muted">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" />
              <a href={AGENCY_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                {AGENCY_CONFIG.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-silver-muted">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" />
              <a href={`mailto:${AGENCY_CONFIG.email}`} className="hover:text-gold transition-colors">
                {AGENCY_CONFIG.email}
              </a>
            </div>
            <div className="pt-2 text-[11px] text-silver-dark">
              Working Hours:<br />{AGENCY_CONFIG.workingHours}
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-silver-dark gap-4">
          <p>
            &copy; {new Date().getFullYear()} Adeel Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-silver transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-silver transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-silver transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
