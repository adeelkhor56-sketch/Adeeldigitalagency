export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: string;
  included: string[];
  process: { step: string; title: string; description: string }[];
  tools: string[];
  benefits: string[];
  expectedResults: { metric: string; label: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Meta Ads',
    shortDesc: 'High-converting Facebook & Instagram ad campaigns backed by deep consumer psychology, relentless A/B testing, and ROAS-focused creative scaling.',
    tagline: 'Precision Audience Acquisition',
    heroHeadline: 'Scale Your Brand with High-ROAS Meta Ad Campaigns',
    heroSubheadline: 'We engineer revenue-generating Facebook and Instagram advertising funnels that convert cold traffic into loyal brand advocates.',
    icon: 'Target',
    included: [
      'Comprehensive Pixel, CAPI (Conversions API) & Aggregated Event Measurement setup',
      'High-CTR Creative Ideation, UGC Scripting, and Motion Design',
      'Dynamic Prospecting, Lookalike Segmentation & Retargeting Funnels',
      'Weekly Multi-Variant Ad Copy, Angle & Headline Testing',
      'Omnichannel Budget Allocation and Automated Bid Strategy Optimization',
      'Transparent Weekly Reporting & Live Notion Dashboard Access'
    ],
    process: [
      { step: '01', title: 'Audit & Tracking Setup', description: 'Deep audit of past ad accounts, tracking architecture, CAPI validation, and unit economics.' },
      { step: '02', title: 'Creative Hook Production', description: 'Developing 15+ scroll-stopping visual hooks and psychologically resonant copy angles.' },
      { step: '03', title: 'Sandboxed Testing', description: 'Deploying controlled budget testing to identify winning hooks, audiences, and offers.' },
      { step: '04', title: 'Aggressive Scaling', description: 'Surging spend into winning ad sets while preserving target Cost Per Acquisition (CPA).' }
    ],
    tools: ['Meta Business Suite', 'Triple Whale', 'Canva Pro', 'Figma', 'AdEspresso'],
    benefits: [
      'Lower Customer Acquisition Cost (CAC)',
      'Reliable, predictable monthly revenue generation',
      'Deep insight into customer desires and creative performance',
      'Direct WhatsApp and e-commerce checkout sales funnels'
    ],
    expectedResults: [
      { metric: '3.8x - 5.4x', label: 'Average ROAS on Scaled Campaigns' },
      { metric: '-38%', label: 'Average CPA Reduction within 45 Days' },
      { metric: '4.8M+', label: 'Impression Reach Generated Monthly' }
    ],
    faq: [
      { q: 'What minimum ad budget do I need to start Meta Ads with you?', a: 'We typically recommend a minimum ad spend of PKR 70,000 to PKR 150,000/month (or $500 - $1,500/mo for international clients) to gather sufficient conversion data for machine learning optimization.' },
      { q: 'Do you create the ad creatives and video hooks?', a: 'Yes. Our creative team produces high-converting graphics, reels, motion clips, and persuasive copy scripts customized for your target market.' },
      { q: 'How soon can we expect real sales and conversions?', a: 'After campaign deployment and initial 7-day algorithmic learning, most clients start generating validated customer inquiries and orders in week two.' }
    ]
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    shortDesc: 'Ultra-fast, bespoke Next.js and modern websites engineered for high conversions, luxury aesthetics, perfect mobile responsiveness, and clean SEO architecture.',
    tagline: 'High-Converting Digital Architecture',
    heroHeadline: 'Fast, Modern, Custom Websites Engineered for Revenue',
    heroSubheadline: 'We build high-performance digital flagships that position your business as an industry leader and turn clicks into committed clients.',
    icon: 'Code2',
    included: [
      'Bespoke UX/UI Design in Figma tailored to your brand identity',
      'Modern Jamstack / Next.js / Tailwind CSS Architecture',
      'Sub-second page load times with 90+ Google PageSpeed Guarantee',
      'Integrated Lead Capture, WhatsApp Funnels, and CRM Webhooks',
      'Full Technical On-Page SEO and Schema Markup Integration',
      'Zero Bloat, enterprise-grade security and SSL implementation'
    ],
    process: [
      { step: '01', title: 'Architecture & Wireframing', description: 'Information architecture, user journeys, conversion wireframes, and brand asset review.' },
      { step: '02', title: 'Luxury UI Design', description: 'Pixel-perfect mockups with brand color tokens, micro-interactions, and mobile layouts.' },
      { step: '03', title: 'Clean Full-Stack Build', description: 'Fast component development, responsive optimization, API integrations, and CMS hooks.' },
      { step: '04', title: 'Speed & Security QA', description: 'Cross-browser validation, Lighthouse 90+ verification, and production launch.' }
    ],

    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel', 'PostgreSQL'],
    benefits: [
      'Immediate credibility and prestigious brand perception',
      'Drastically lower bounce rates with sub-second page loads',
      'Frictionless mobile inquiry and checkout conversion flows',
      'Future-proof foundation ready for massive traffic surges'
    ],
    expectedResults: [
      { metric: '< 1.2s', label: 'Average Page Load Speed' },
      { metric: '+64%', label: 'Conversion Rate Improvement over Old Sites' },
      { metric: '95+', label: 'Google Lighthouse Performance Score' }
    ],
    faq: [
      { q: 'Will my website be easy to update later?', a: 'Yes. We provide intuitive headless CMS setups or streamlined editable configuration files, along with video training for your internal team.' },
      { q: 'Do you design mobile-first?', a: 'Absolutely. Over 80% of digital traffic in Pakistan and worldwide comes from smartphones; every button, card, and interaction is perfected for touch devices.' }
    ]
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO (Search Engine Optimization)',
    shortDesc: 'Dominant search visibility with technical excellence, high-intent keyword strategies, local search optimization, and authority-building content architecture.',
    tagline: 'Organic Search Authority',
    heroHeadline: 'Claim Page #1 on Google and Capture High-Intent Buyers',
    heroSubheadline: 'We execute data-driven SEO campaigns that transform Google into your most predictable, cost-free source of continuous inbound customer leads.',
    icon: 'TrendingUp',
    included: [
      'Comprehensive Technical Site Audit & Core Web Vitals remediation',
      'Buyer-Intent Keyword Research and Competitor Gap Analysis',
      'On-Page Optimization (Metadata, Semantic Headers, Internal Linking)',
      'Google Business Profile (GBP) & Local Map Pack Dominance',
      'Structured Data / JSON-LD Rich Snippets Engineering',
      'Authoritative Content Strategy and White-Hat Backlink Acquisition'
    ],
    process: [
      { step: '01', title: 'Deep Technical Diagnostics', description: 'Identify crawl errors, duplicate content, indexing barriers, and speed bottlenecks.' },
      { step: '02', title: 'Intent-Based Keyword Mapping', description: 'Map high-converting commercial search queries to dedicated landing pages.' },
      { step: '03', title: 'On-Page & Schema Elevation', description: 'Optimize headings, copy, internal link architecture, and local entity signals.' },
      { step: '04', title: 'Authority & Link Growth', description: 'Systematic content publication and high-trust external citation development.' }
    ],
    tools: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog', 'Google Analytics 4'],
    benefits: [
      'Zero ad-spend traffic that compounds month over month',
      'Highest quality inbound leads actively searching for your service',
      'Local market supremacy across Google Maps and regional queries',
      'Long-term digital asset value that competitors cannot switch off'
    ],
    expectedResults: [
      { metric: '+215%', label: 'Average 6-Month Organic Traffic Lift' },
      { metric: 'Top 3', label: 'Google Map Pack Rankings for Target Geographies' },
      { metric: '3.2x', label: 'Inbound Qualified Organic Inquiries' }
    ],
    faq: [
      { q: 'How long does SEO take to produce measurable revenue?', a: 'Technical and local SEO fixes often generate noticeable ranking and inquiry gains within 30 to 60 days. Broad competitive keywords typically compound significantly by month 3 to 6.' },
      { q: 'Do you optimize Google Maps (Local SEO)?', a: 'Yes! Local SEO for businesses targeting Bahawalpur, Lahore, Islamabad, Karachi, and global cities is a core specialty, driving direct calls and visits.' }
    ]
  },
  {
    id: 'social-media-management',
    slug: 'social-media-management',
    title: 'Social Media Management',
    shortDesc: 'Build an engaged, loyal community across Instagram, TikTok, LinkedIn, and Facebook with aesthetic visuals, trend-jacking short reels, and active reputation management.',
    tagline: 'Brand Community & Cultural Relevance',
    heroHeadline: 'Command Social Media Attention and Build an Obsessed Audience',
    heroSubheadline: 'We design premium visual grids, produce viral-format vertical reels, and manage your community to turn passive followers into active clients.',
    icon: 'Share2',
    included: [
      'Bespoke Aesthetic Social Brand Identity & Feed Layout Design',
      'Scripting, Editing & Color Grading of Vertical Short-Form Reels/TikToks',
      'Strategic Monthly Content Calendar and Scheduled Cross-Posting',
      'Copywriting with High-Engagement Hooks and Optimized Hashtags',
      'Community Management, Comment Engagement & Direct Message Handling',
      'Influencer Collaboration Strategy and Monthly Analytics Reviews'
    ],
    process: [
      { step: '01', title: 'Brand Aesthetic Discovery', description: 'Defining typography, color rules, tonality, and content pillars for your niche.' },
      { step: '02', title: 'Content Calendar Blueprint', description: 'Planning high-impact themes, product highlights, and educational reels.' },
      { step: '03', title: 'Production & Asset Polish', description: 'Graphic crafting, motion typography, and sound design for vertical video.' },
      { step: '04', title: 'Publishing & Community Growth', description: 'Peak-hour publishing, comment conversations, and growth analytics.' }
    ],
    tools: ['CapCut Pro', 'Premiere Pro', 'Figma', 'Later / Buffer', 'Canva Pro'],
    benefits: [
      'Unshakeable brand authority and visual sophistication',
      'Constant organic discovery through Instagram Reels & TikTok algorithms',
      'Active follower relationship nurturing that drives DM sales conversations',
      'Completely hands-off social execution so you focus on business operations'
    ],
    expectedResults: [
      { metric: '10x', label: 'Average Organic Video Impressions' },
      { metric: '+140%', label: 'Follower Engagement Rate Improvement' },
      { metric: '45+', label: 'Pieces of Polished Content Produced Monthly' }
    ],
    faq: [
      { q: 'Do you need footage from our office or products?', a: 'We can work either with photos/raw video clips you capture on your phone, or we can produce custom motion graphics and AI video assets completely from scratch.' },
      { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, TikTok, LinkedIn, and YouTube Shorts according to your core customer profile.' }
    ]
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    title: 'Google Ads',
    shortDesc: 'Intercept ready-to-buy customers at the precise moment they search for your services with surgical Google Search, Performance Max, and YouTube ad campaigns.',
    tagline: 'High-Intent Search Capture',
    heroHeadline: 'Capture Ready-to-Buy Customers at the Exact Moment of Intent',
    heroSubheadline: 'We build rigorous Google Search, Display, and Performance Max campaigns that monopolize top search spots with strict CPA controls.',
    icon: 'Search',
    included: [
      'High-Intent Exact & Phrase Match Keyword Structuring',
      'Negative Keyword lists to eliminate wasted ad budget instantly',
      'Compelling Responsive Search Ad (RSA) Copywriting & Asset Extensions',
      'Google Tag Manager, Enhanced Conversions & Value Tracking',
      'Performance Max (PMax) Asset Group and Audience Signal setup',
      'Landing Page Conversion Rate Audits and Bid Adjustments'
    ],
    process: [
      { step: '01', title: 'Search Intent Mapping', description: 'Pinpointing commercial and transactional queries with proven buyer willingness.' },
      { step: '02', title: 'Account Architecture', description: 'Single-Theme Ad Groups (STAG), negative keyword barriers, and conversion tags.' },
      { step: '03', title: 'Bid & Strategy Tuning', description: 'Deploying Target CPA / Target ROAS smart bidding after initial signal accumulation.' },
      { step: '04', title: 'Landing Page Harmonization', description: 'Aligning search ad copy with landing page messaging to boost Quality Scores.' }
    ],
    tools: ['Google Ads', 'Google Tag Manager', 'Google Merchant Center', 'SpyFu', 'Optmyzr'],
    benefits: [
      'Direct contact with customers who need your solution right now',
      'Immediate traffic generation from day one of campaign launch',
      'Higher Quality Scores resulting in lower cost-per-click than competitors',
      'Transparent attribution tracking every rupee or dollar to an exact phone call or lead'
    ],
    expectedResults: [
      { metric: '4.2x', label: 'Average Inbound ROAS' },
      { metric: '8.4%', label: 'Average Search Ad CTR (Industry avg 3.1%)' },
      { metric: '-42%', label: 'Cost Per Qualified Lead Reduction' }
    ],
    faq: [
      { q: 'What is the difference between Meta Ads and Google Ads?', a: 'Meta Ads pushes your offer to audiences based on interests and demographics (demand generation), while Google Ads captures people actively searching for your service right now (demand capture). Together, they form an unbeatable growth loop.' },
      { q: 'How do you stop budget wastage on Google Ads?', a: 'We enforce aggressive negative keyword lists, geo-fencing, dayparting, and continuous search query reviews to ensure every penny targets legitimate prospects.' }
    ]
  },
  {
    id: 'ai-ads-video',
    slug: 'ai-ads-video',
    title: 'AI Ads Video',
    shortDesc: 'Next-generation AI-powered video commercials, synthetic presenter hooks, and hyper-personalized creative variants produced at 10x speed and a fraction of traditional production costs.',
    tagline: 'Next-Gen Creative Velocity',
    heroHeadline: 'Hyper-Engaging AI Video Commercials Produced at 10x Speed',
    heroSubheadline: 'We harness state-of-the-art generative video models and sound synthesis to engineer viral, cinematic ad creatives that stop thumbs and drive orders.',
    icon: 'Sparkles',
    included: [
      'Custom Generative Scripting and Psychological Hook Architecture',
      'Photorealistic AI Presenters & Voice Synthesis in multiple accents/languages',
      'B-Roll Generation, Dynamic Product 3D Renders and Visual Effects',
      'High-Pacing Video Editing, Kinetic Captions and Sound Design',
      'Batch Creative Variations (5-10 hook variations per winner concept)',
      'Vertical (9:16) and Landscape (16:9) formats ready for TikTok, Reels & YouTube'
    ],
    process: [
      { step: '01', title: 'Concept & Script Engineering', description: 'Crafting 3-second hook formulas tailored to your customer avatars pain points.' },
      { step: '02', title: 'Generative Synthesis', description: 'Synthesizing voiceovers, realistic actors, custom cinematic scenery, and soundscapes.' },
      { step: '03', title: 'Post-Production & Motion Polish', description: 'Adding kinetic motion graphics, captions, sound impacts, and CTA cards.' },
      { step: '04', title: 'Multi-Variant Deployment', description: 'Exporting tailored aspect ratios and hook splits for ad channel testing.' }
    ],
    tools: ['Midjourney v6', 'Runway Gen-3', 'ElevenLabs', 'Premiere Pro', 'After Effects'],
    benefits: [
      'Drastically reduce video production overheads without studio shoots',
      'Test dozens of creative angles in days instead of waiting weeks',
      'Instant localization in Urdu, English, Arabic, and regional dialects',
      'Stand out from boring competitor ads with futuristic visual polish'
    ],
    expectedResults: [
      { metric: '10x', label: 'Faster Creative Production Turnaround' },
      { metric: '+85%', label: 'Thumb-Stop Rate on Short Video Feeds' },
      { metric: '-60%', label: 'Cost Per Completed 3-Second Video View' }
    ],
    faq: [
      { q: 'Do the AI presenters look and sound natural?', a: 'Yes. We utilize state-of-the-art voice models and video generators with natural cadence, pauses, facial micro-expressions, and professional studio audio mixing.' },
      { q: 'Can you feature my actual physical product in AI videos?', a: 'Yes! We blend real photos/videos of your products with AI-generated backgrounds, synthetic influencers holding or discussing your product, and motion typography.' }
    ]
  }
];

export const PACKAGES = [
  {
    name: 'Starter Growth',
    badge: 'Fast Start',
    price: 'Custom / Project',
    description: 'Perfect for local businesses ready to establish a professional digital presence and capture their first wave of consistent inbound inquiries.',
    features: [
      '1 Core Advertising Channel (Meta Ads or Google Ads)',
      'Monthly Creative Ad Asset Production (12 Assets)',
      'Custom High-Converting Landing Page Setup',
      'Conversion Tracking & Analytics Integration',
      'Bi-Weekly Strategy Performance Reviews',
      'Dedicated WhatsApp Communication Channel'
    ],
    popular: false,
  },
  {
    name: 'Scale & Accelerate',
    badge: 'Most Popular',
    price: 'Growth Partner',
    description: 'Engineered for ambitious brands ready to aggressively expand market share, dominate ad funnels, and scale predictable monthly revenue.',
    features: [
      'Multi-Channel Funnel (Meta Ads + Google Ads + Retargeting)',
      'Full Stack Next.js Web Experience or Redesign',
      'Weekly Creative Hook Production (Reels + AI Video Ads)',
      'Advanced Conversion API (CAPI) & Value Attribution',
      'Weekly In-Depth Performance Dashboards',
      'Direct Access to Senior Strategy Team'
    ],
    popular: true,
  },
  {
    name: 'Dominance Partner',
    badge: 'Full Omnichannel',
    price: 'Enterprise / Custom',
    description: 'Comprehensive 360-degree digital acquisition partner for market leaders who demand complete category supremacy and rapid scaling.',
    features: [
      'Full Omnichannel Suite: Paid Ads, SEO, Social & AI Video',
      'Custom Bespoke Web Development with ongoing CRO',
      'Continuous Creative Iteration & Studio-Grade AI Commercials',
      'Dedicated Account Growth Director & 24/7 Priority Support',
      'Custom CRM, Lead Routing & Sales Funnel Automation',
      'Guaranteed SLA and Weekly Growth Sprints'
    ],
    popular: false,
  }
];
