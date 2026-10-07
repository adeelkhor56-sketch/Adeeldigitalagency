import { z } from 'zod';

export const quoteFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(100),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone or WhatsApp number.' }).max(25),
  service: z.enum([
    'Meta Ads',
    'Web Development',
    'SEO',
    'Social Media Management',
    'Google Ads',
    'AI Ads Video',
    'Full Omnichannel Growth'
  ], {
    errorMap: () => ({ message: 'Please select a service.' }),
  }),
  budget: z.enum([
    'PKR 50k - 100k / month',
    'PKR 100k - 250k / month',
    'PKR 250k - 500k+ / month',
    '$500 - $1,500 / month (Global)',
    '$1,500 - $3,500+ / month (Global)',
    'One-time Project / Website'
  ], {
    errorMap: () => ({ message: 'Please choose an estimated budget.' }),
  }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(2000),
  websiteUrl: z.string().optional(), // Honeypot trap field
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
