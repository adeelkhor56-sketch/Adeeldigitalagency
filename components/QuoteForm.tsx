'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { quoteFormSchema, type QuoteFormData } from '@/lib/validations';

interface QuoteFormProps {
  defaultService?: string;
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
}

export default function QuoteForm({
  defaultService,
  title = 'Request a High-ROI Strategy Proposal',
  subtitle = 'Tell us about your brand goals. Adeel personally audits your digital presence and responds within 24 hours.',
  isCompact = false,
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'Meta Ads',
    budget: 'PKR 100k - 250k / month',
    message: '',
    websiteUrl: '', // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate with Zod
    const validation = quoteFormSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your quote inquiry has been delivered directly to Adeel. We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: defaultService || 'Meta Ads',
        budget: 'PKR 100k - 250k / month',
        message: '',
        websiteUrl: '',
      });
    } catch (err: any) {
      setSubmitStatus('error');
      setStatusMessage(err.message || 'Unable to submit right now. Please message us directly on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full rounded-2xl border border-surface-border bg-[#121212]/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden ${isCompact ? 'max-w-2xl' : 'max-w-3xl'} mx-auto`}>
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-silver">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-silver-muted mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-start gap-3"
        >
          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{statusMessage}</p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-400 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">{statusMessage}</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot hidden input */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Adeel Khan"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-silver placeholder-silver-dark focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
                errors.name ? 'border-rose-500' : 'border-surface-border'
              }`}
            />
            {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="adeel@brand.com"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-silver placeholder-silver-dark focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
                errors.email ? 'border-rose-500' : 'border-surface-border'
              }`}
            />
            {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <input
              type="text"
              name="phone"
              required
              placeholder="0300 1234567 or +92..."
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-silver placeholder-silver-dark focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
                errors.phone ? 'border-rose-500' : 'border-surface-border'
              }`}
            />
            {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
              Service of Interest *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-sm text-silver focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
            >
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Full Omnichannel Growth">Full Omnichannel Growth (All Services)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
            Estimated Monthly Marketing Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-sm text-silver focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
          >
            <option value="PKR 50k - 100k / month">PKR 50,000 - PKR 100,000 / month</option>
            <option value="PKR 100k - 250k / month">PKR 100,000 - PKR 250,000 / month</option>
            <option value="PKR 250k - 500k+ / month">PKR 250,000 - PKR 500,000+ / month</option>
            <option value="$500 - $1,500 / month (Global)">$500 - $1,500 / month (International)</option>
            <option value="$1,500 - $3,500+ / month (Global)">$1,500 - $3,500+ / month (International)</option>
            <option value="One-time Project / Website">One-time Website / Custom Build</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium uppercase tracking-wider text-silver-muted mb-1.5">
            Your Project Goals & Current Situation *
          </label>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Tell us what you sell, your target customer, and what revenue or lead goals you want to hit..."
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-surface border text-sm text-silver placeholder-silver-dark focus:outline-none focus:ring-1 focus:ring-gold transition-colors ${
              errors.message ? 'border-rose-500' : 'border-surface-border'
            }`}
          />
          {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-semibold text-sm uppercase tracking-wider text-black bg-gold-gradient shadow-gold-sm hover:shadow-gold-md hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Growth Proposal Request</span>
            </>
          )}
        </button>

        <p className="text-center text-[11px] text-silver-dark pt-1">
          🔒 Zero spam guarantee. Direct transmission to adeeldigitalagency@gmail.com
        </p>
      </form>
    </div>
  );
}
