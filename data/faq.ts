export interface FaqItem {
  id: string;
  category: 'General' | 'Services' | 'Pricing & ROI' | 'Process';
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'Where is Adeel Digital Agency located and do you work with international clients?',
    answer: 'We are proudly headquartered in Bahawalpur, Pakistan. While we are deeply committed to empowering local businesses across Southern Punjab and Pakistan, over 50% of our portfolio spans international clients across the UK, USA, UAE, and Europe. We operate seamlessly across global time zones via Slack, WhatsApp, and Google Meet.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What makes Adeel Digital Agency different from ordinary freelance marketers?',
    answer: 'We operate as an integrated Growth Partner rather than an outsourced ticket-taker. We combine full-stack engineering (Next.js, speed optimization, technical schema) with psychological direct-response marketing and AI-accelerated creative production. Every single campaign is tied to commercial revenue, verified ROAS, and transparent weekly reporting.'
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: 'Which marketing channels will deliver the fastest ROI for my specific business?',
    answer: 'If you need immediate customer leads or sales today, Google Search Ads and Meta Ads deliver direct traffic within days of deployment. If you are building a defensible long-term asset, high-speed Web Development paired with Technical SEO compounds exponentially over months. During our initial free strategy session, we audit your economics and recommend the highest-leverage roadmap.'
  },
  {
    id: 'faq-4',
    category: 'Services',
    question: 'Do you handle creative ad production, video editing, and copywriting in-house?',
    answer: 'Yes, 100%. You do not need to hire separate copywriters, graphic designers, or video editors. Our in-house team produces high-CTR motion reels, AI commercials, conversion-focused copywriting, and graphic banners built specifically to stop thumbs and drive conversions.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & ROI',
    question: 'How do your pricing structures and retainer models work?',
    answer: 'We offer clear, transparent models: tailored monthly growth retainers for ongoing ad management and SEO, or fixed milestone-based fees for bespoke web development and video packages. We never lock clients into predatory long-term contracts; our retention is built solely on measurable profitability.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & ROI',
    question: 'What minimum ad spend do you recommend to run paid campaigns?',
    answer: 'For businesses in Pakistan, we typically recommend a minimum ad spend of PKR 60,000 to PKR 120,000/month to allow the algorithms sufficient conversion volume to optimize. For international clients, we recommend starting at $750 - $1,500/month.'
  },
  {
    id: 'faq-7',
    category: 'Process',
    question: 'How quickly can we launch after signing on?',
    answer: 'Our typical onboarding sprint takes 4 to 7 business days. During this sprint, we complete your tracking audit (Pixel, CAPI, GTM), configure audience architecture, draft initial creative hooks, and present everything for your approval before spending a single rupee of ad budget.'
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'How often will I receive updates and reporting on performance?',
    answer: 'You will have 24/7 access to a live interactive dashboard tracking sales, ad spend, ROAS, and inquiries. Furthermore, we provide weekly loom video summaries and bi-weekly strategic alignment calls with Adeel and our lead media buyers.'
  }
];
