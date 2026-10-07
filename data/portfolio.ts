export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: 'Meta Ads' | 'Web Development' | 'SEO' | 'Social Media' | 'Google Ads' | 'AI Video';
  categoryFilter: string;
  summary: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  outcome: string;
  gradient: string;
}

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'case-1',
    slug: 'scaling-apex-apparel-meta-ads',
    title: 'Scaling Apex Apparel to 4.2x ROAS with Creative Hooks & CAPI',
    client: 'Apex Apparel Brand',
    category: 'Meta Ads',
    categoryFilter: 'meta-ads',
    summary: 'Restructuring Meta ad account architecture, setting up server-side Conversions API, and testing 20+ viral reels creative hooks.',
    metrics: [
      { value: '4.2x', label: 'Average ROAS' },
      { value: '+192%', label: 'Revenue Increase' },
      { value: '-34%', label: 'CPA Reduction' },
    ],
    challenge: 'High creative fatigue, soaring customer acquisition costs on iOS devices, and disjointed conversion tracking were stunting monthly order growth.',
    solution: 'We engineered full server-side CAPI tracking, produced UGC-style motion ads highlighting product fabric quality, and segmented retargeting into 3 distinct buyer psychology buckets.',
    outcome: 'Apex achieved consecutive record revenue months, maintaining a 4.2x blended ROAS during peak seasonal sales.',
    gradient: 'from-amber-500/20 to-yellow-600/10'
  },
  {
    id: 'case-2',
    slug: 'veloce-logistics-nextjs-revamp',
    title: 'Modernizing UK Freight Leader with Sub-Second Next.js Architecture',
    client: 'Veloce Logistics UK',
    category: 'Web Development',
    categoryFilter: 'web-development',
    summary: 'Transforming an outdated, slow corporate portal into a lightning-fast digital flagship that converts commercial freight shippers.',
    metrics: [
      { value: '0.8s', label: 'LCP Page Load' },
      { value: '99/100', label: 'Lighthouse Score' },
      { value: '+115%', label: 'Inbound Quotes' },
    ],
    challenge: 'Their legacy CMS took 5.2 seconds to load on mobile, resulting in an alarming 68% bounce rate from corporate logistics procurement managers.',
    solution: 'Rebuilt from the ground up using Next.js App Router, Tailwind CSS, bespoke SVG cargo flow diagrams, and a frictionless 2-step quote calculator.',
    outcome: 'Bounce rate fell to under 22%, mobile organic traffic surged, and direct freight quote inquiries more than doubled in the first quarter post-launch.',
    gradient: 'from-blue-500/20 to-amber-500/10'
  },
  {
    id: 'case-3',
    slug: 'chaudhry-healthcare-local-seo',
    title: 'Dominating Local Search and Google Maps for Southern Punjab Healthcare',
    client: 'Chaudhry Healthcare Complex',
    category: 'SEO',
    categoryFilter: 'seo',
    summary: 'Capturing #1 ranking across 40+ high-intent local medical queries and optimizing Google Business Profile for emergency and specialist care.',
    metrics: [
      { value: '#1', label: 'Google Map Pack Rank' },
      { value: '+210%', label: 'Direct Phone Calls' },
      { value: '+85%', label: 'Patient Inquiries' },
    ],
    challenge: 'Local patients were unable to locate specialized consultants due to missing structured local schema, unverified business citations, and zero keyword targeting.',
    solution: 'Audited and optimized their Google Business Profile, established 75+ clean local citations, embedded LocalBusiness JSON-LD schema, and published localized doctor specialty guides.',
    outcome: 'Chaudhry Healthcare now commands the top 3 positions for all core regional search terms, driving daily appointment phone calls and directions requests.',
    gradient: 'from-emerald-500/20 to-amber-500/10'
  },
  {
    id: 'case-4',
    slug: 'luxe-interiors-ai-video-ads',
    title: 'Producing High-Impact AI Video Commercials for Luxury Architectural Studio',
    client: 'Luxe Interiors Studio',
    category: 'AI Video',
    categoryFilter: 'ai-ads-video',
    summary: 'Deploying cinematic generative AI visuals and synthetic motion rendering to showcase opulent interior transformations without expensive film crews.',
    metrics: [
      { value: '10x', label: 'Production Velocity' },
      { value: '+240%', label: 'Organic Reel Views' },
      { value: '38', label: 'Qualified Villa Inquiries' },
    ],
    challenge: 'Client needed high-frequency visual ad content showcasing luxury aesthetics but lacked the budget and time for recurring physical location film shoots.',
    solution: 'Engineered custom AI video scripts using Runway Gen-3 and photorealistic lighting prompts, paired with luxury sound design and kinetic title animations.',
    outcome: 'Drove massive engagement across Instagram and TikTok, establishing Luxe Interiors as the premier design studio in Islamabad and attracting high-net-worth homeowners.',
    gradient: 'from-purple-500/20 to-amber-500/10'
  },
  {
    id: 'case-5',
    slug: 'smartpay-fintech-google-ads',
    title: 'Slashing B2B Acquisition Cost by 40% with Google Search & PMax',
    client: 'SmartPay Financial',
    category: 'Google Ads',
    categoryFilter: 'google-ads',
    summary: 'Pruning negative search waste, restructuring ad groups around commercial intent, and executing tight value-based smart bidding.',
    metrics: [
      { value: '-40%', label: 'Cost Per Lead (CPL)' },
      { value: '8.4%', label: 'Search Ad CTR' },
      { value: '3.9x', label: 'Verified Pipeline ROAS' },
    ],
    challenge: 'Broad match search keywords were consuming 45% of ad spend on irrelevant student queries, while actual business owners were slipping through uncaptured.',
    solution: 'Installed 300+ rigorous negative keywords, segmented exact phrase groups for payment gateway intent, and implemented Google Offline Conversion Tracking.',
    outcome: 'Qualified sales demo requests increased by 80% while overall monthly expenditure dropped, resulting in a 40% reduction in customer acquisition cost.',
    gradient: 'from-yellow-500/20 to-amber-600/10'
  },
  {
    id: 'case-6',
    slug: 'urban-fit-social-media-growth',
    title: 'Explosive Social Media Community Growth and Viral Short-Form Reels',
    client: 'UrbanFit Athletic Wear',
    category: 'Social Media',
    categoryFilter: 'social-media-management',
    summary: 'Architecting an engaging social presence through daily workout tips, dynamic athletic transitions, and trend-jacking video reels.',
    metrics: [
      { value: '1.4M', label: 'Organic Monthly Views' },
      { value: '+45K', label: 'Follower Growth' },
      { value: '620+', label: 'Direct DM Sales' },
    ],
    challenge: 'Stagnant feed aesthetics, inconsistent posting, and poor video pacing resulted in near-zero organic reach on Instagram and TikTok algorithms.',
    solution: 'Revamped brand visual grid guidelines, introduced high-energy hook templates, and managed community comments to push users into direct sales channels.',
    outcome: 'UrbanFit became a viral fitness phenomenon with over 1.4 million monthly views, generating hundreds of customer orders directly from direct messages.',
    gradient: 'from-rose-500/20 to-amber-500/10'
  }
];
