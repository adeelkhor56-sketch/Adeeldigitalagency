export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  highlightMetric: string;
  isFeatured?: boolean;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Hamza Malik',
    role: 'Founder & CEO',
    company: 'Apex Apparel Brand',
    location: 'Lahore, Pakistan',
    service: 'Meta Ads & Creative Scaling',
    rating: 5,
    quote: 'Adeel Digital Agency revolutionized our e-commerce acquisition. Before working with Adeel, our cost per acquisition was eating into all our margins. Within 45 days, our ROAS climbed past 4.2x with predictable weekly sales. Truly our most valuable growth partner.',
    highlightMetric: '4.2x ROAS in 45 Days',
    isFeatured: true,
  },
  {
    id: 'test-2',
    name: 'Dr. Tariq Chaudhry',
    role: 'Managing Director',
    company: 'Chaudhry Healthcare Complex',
    location: 'Bahawalpur, Pakistan',
    service: 'Local SEO & Google Ads',
    rating: 5,
    quote: 'Being located in Bahawalpur, we needed a marketing agency that genuinely understood local customer behavior while delivering international-standard digital precision. We now rank #1 on Google Maps across southern Punjab and our patient appointment bookings surged by 85%.',
    highlightMetric: '+85% Appointment Volume',
    isFeatured: true,
  },
  {
    id: 'test-3',
    name: 'Marcus Vance',
    role: 'Head of Growth',
    company: 'Veloce Logistics UK',
    location: 'London, United Kingdom',
    service: 'Next.js Web Development & SEO',
    rating: 5,
    quote: 'The speed and visual polish of our Next.js web application engineered by Adeel Digital Agency blew our stakeholders away. PageSpeed is 98/100, bounce rates dropped drastically, and our inbound B2B quote inquiries doubled within weeks. World-class engineering.',
    highlightMetric: '98/100 PageSpeed & 2x Leads',
    isFeatured: true,
  },
  {
    id: 'test-4',
    name: 'Zainab Qureshi',
    role: 'Marketing Lead',
    company: 'Luxe Interiors Studio',
    location: 'Islamabad, Pakistan',
    service: 'AI Ads Video & Social Media',
    rating: 5,
    quote: 'Their AI video ads gave our luxury interior studio high-end visual commercials that would normally cost hundreds of thousands to produce. People in our niche immediately took notice. Our Instagram following and inquiry inbox have never been more active.',
    highlightMetric: '+240% Video Engagement',
    isFeatured: false,
  },
  {
    id: 'test-5',
    name: 'Bilal Farooq',
    role: 'Co-Founder',
    company: 'SmartPay Financial Solutions',
    location: 'Karachi, Pakistan',
    service: 'Google Ads & Lead Funnels',
    rating: 5,
    quote: 'Adeel Digital Agency is relentless with numbers. No fluff, no vanity metrics. Every single rupee spent in Google Search is attributed to real qualified sales calls. They reduced our cost per qualified lead by 40% while doubling pipeline volume.',
    highlightMetric: '-40% Cost Per Lead',
    isFeatured: false,
  },
  {
    id: 'test-6',
    name: 'Elena Rostova',
    role: 'Product Director',
    company: 'SaaS Pulse Analytics',
    location: 'Dubai, UAE',
    service: 'Full-Funnel Web & Meta Ads',
    rating: 5,
    quote: 'From strategy to frictionless execution, working with Adeel and his team felt like having an elite Silicon Valley growth squad inside our company. Responsive, proactive, and deeply results-obsessed.',
    highlightMetric: '3.6x MRR Growth Track',
    isFeatured: false,
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Apparel', category: 'Fashion & E-Commerce' },
  { name: 'Chaudhry Care', category: 'Healthcare' },
  { name: 'Veloce Logistics', category: 'Supply Chain' },
  { name: 'Luxe Interiors', category: 'Architecture' },
  { name: 'SmartPay', category: 'FinTech' },
  { name: 'SaaS Pulse', category: 'Technology' },
  { name: 'Prime Estates', category: 'Real Estate' },
  { name: 'Bahawal Agro', category: 'Commerce' },
];
