import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/SocialIcons';
import { AGENCY_CONFIG } from '@/lib/utils';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Adeel Digital Agency | Bahawalpur & Global Growth Partner',
  description:
    'Get in touch with Adeel Digital Agency in Bahawalpur, Pakistan. Direct WhatsApp 03068851548, email adeeldigitalagency@gmail.com, and free strategy consultation.',
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-heading font-semibold">
            Let&apos;s Connect
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-silver tracking-tight">
            Start Your Growth Sprint Today
          </h1>
          <p className="text-base text-silver-muted leading-relaxed">
            Have a question or ready to scale? Reach out directly via WhatsApp, phone, email, or by requesting a custom proposal below.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: WhatsApp */}
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md space-y-3 group hover:border-[#25D366]/60 transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-heading text-silver group-hover:text-[#25D366] transition-colors">
              WhatsApp Direct
            </h3>
            <p className="text-xs text-silver-muted">
              Fastest response for quick questions & audits.
            </p>
            <span className="text-xs font-semibold text-silver block pt-1">
              {AGENCY_CONFIG.phoneDisplay} &rarr;
            </span>
          </a>

          {/* Card 2: Phone */}
          <a
            href={`tel:${AGENCY_CONFIG.phone}`}
            className="p-6 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md space-y-3 group hover:border-gold/50 transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-heading text-silver group-hover:text-gold transition-colors">
              Direct Phone Call
            </h3>
            <p className="text-xs text-silver-muted">
              Mon - Sat: 9:00 AM - 8:00 PM PKT
            </p>
            <span className="text-xs font-semibold text-silver block pt-1">
              0306 8851548 &rarr;
            </span>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${AGENCY_CONFIG.email}`}
            className="p-6 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md space-y-3 group hover:border-gold/50 transition-all block"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-heading text-silver group-hover:text-gold transition-colors">
              Email Us
            </h3>
            <p className="text-xs text-silver-muted">
              For RFPs, detailed briefs and inquiries.
            </p>
            <span className="text-xs font-semibold text-silver block pt-1 break-all">
              {AGENCY_CONFIG.email} &rarr;
            </span>
          </a>

          {/* Card 4: Location */}
          <div className="p-6 rounded-2xl border border-surface-border bg-surface/60 backdrop-blur-md space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-heading text-silver">
              Headquarters
            </h3>
            <p className="text-xs text-silver-muted">
              Bahawalpur, Punjab, Pakistan
            </p>
            <span className="text-xs font-semibold text-gold block pt-1">
              Local & Global Clients
            </span>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Full Contact Form */}
          <div className="lg:col-span-7">
            <QuoteForm
              title="Send Us Your Project Requirements"
              subtitle="Fill in the details below. We review every brief thoroughly before getting in touch."
            />
          </div>

          {/* Right Column: Google Maps Embed & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-surface-border bg-surface/60 p-6 space-y-4">
              <h3 className="text-lg font-bold font-heading text-silver">
                Our Bahawalpur Location
              </h3>
              <p className="text-xs text-silver-muted leading-relaxed">
                Operating in Bahawalpur with global remote coverage. We welcome in-person consultations by appointment.
              </p>

              {/* Responsive Google Maps Embed */}
              <div className="relative w-full aspect-square sm:aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-surface-border">
                <iframe
                  title="Adeel Digital Agency Bahawalpur Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110826.47648358245!2d71.61195656114141!3d29.395721323381665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90c49742a089%3A0x95973752e50570b!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) contrast(1.2)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Working Hours & Socials */}
              <div className="pt-4 border-t border-surface-border space-y-3">
                <div className="flex items-center gap-2 text-xs text-silver-muted">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Working Hours: {AGENCY_CONFIG.workingHours}</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-semibold text-silver font-heading">Follow Us:</span>
                  <a
                    href={AGENCY_CONFIG.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-silver hover:text-gold hover:border-gold/40 transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-silver hover:text-gold hover:border-gold/40 transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
