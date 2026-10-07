import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { AGENCY_CONFIG } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sora',
});

export const metadata: Metadata = {
  metadataBase: new URL(AGENCY_CONFIG.siteUrl),
  title: {
    default: 'Adeel Digital Agency – Your Growth Partner | Bahawalpur, Pakistan',
    template: '%s | Adeel Digital Agency',
  },
  description:
    'Award-winning digital marketing and performance growth agency in Bahawalpur, Pakistan. Specializing in Meta Ads, Google Ads, Next.js Web Development, SEO, Social Media, and AI Video Commercials.',
  keywords: [
    'Digital Marketing Agency Bahawalpur',
    'Adeel Digital Agency',
    'Your Growth Partner',
    'Meta Ads Agency Pakistan',
    'Google Ads Specialist',
    'SEO Agency Bahawalpur',
    'Web Development Pakistan',
    'AI Video Ads'
  ],
  authors: [{ name: 'Adeel' }],
  creator: 'Adeel Digital Agency',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: AGENCY_CONFIG.siteUrl,
    title: 'Adeel Digital Agency – Your Growth Partner',
    description:
      'Scale your business with high-ROAS Meta Ads, surgical Google Ads, Next.js web applications, and AI video commercials.',
    siteName: 'Adeel Digital Agency',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Adeel Digital Agency – Your Growth Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adeel Digital Agency – Your Growth Partner',
    description:
      'Premier digital marketing and web engineering agency in Bahawalpur, Pakistan.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Adeel Digital Agency',
    image: `${AGENCY_CONFIG.siteUrl}/logo.png`,
    '@id': `${AGENCY_CONFIG.siteUrl}/#agency`,
    url: AGENCY_CONFIG.siteUrl,
    telephone: '+923068851548',
    email: AGENCY_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Model Town',
      addressLocality: 'Bahawalpur',
      addressRegion: 'Punjab',
      postalCode: '63100',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 29.3544,
      longitude: 71.6911,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
    ],
    priceRange: '$$',
    sameAs: [
      AGENCY_CONFIG.facebookUrl,
      AGENCY_CONFIG.instagramUrl,
      AGENCY_CONFIG.whatsappUrl,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-silver font-sans antialiased selection:bg-gold selection:text-black">
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <ScrollProgressBar />
          <Navbar />
          <main className="min-h-screen pt-20 sm:pt-24">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
