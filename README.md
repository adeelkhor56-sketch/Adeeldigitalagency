# Adeel Digital Agency – Your Growth Partner
*Premier Digital Marketing & Web Engineering Agency in Bahawalpur, Pakistan*

---

## 🚀 Overview

Adeel Digital Agency is an Awwwards-caliber, high-performance agency website engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. It showcases six core service verticals, interactive case studies, dynamic client reviews, playbooks, and lead-generation funnels.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router with SSG/Static Optimization)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS with custom dark luxury tokens (Gold `#F5B301` / `#C98A00`, Obsidian `#0A0A0A`, Surface `#141414`)
- **Animations**: Framer Motion (Split-word hero reveal, 3D card tilts, rising rocket sequence, SVG spline graph drawing, accordion mechanics)
- **Smooth Scrolling**: Lenis smooth scroll engine
- **Typography**: Sora (Headings) + Inter (Body) via `next/font/google`
- **Lead Capture & API**: Next.js API route (`/api/quote`) with in-memory rate limiting, Zod schema validation, honeypot spam protection, and Resend email integration

---

## 📁 Project Structure

```
├── app/
│   ├── api/quote/route.ts        # Lead submission backend API
│   ├── about/page.tsx            # Founder story, skills, timeline, values
│   ├── blog/page.tsx             # Growth articles listing
│   ├── blog/[slug]/page.tsx      # In-depth growth playbooks
│   ├── contact/page.tsx          # Full contact form, map embed & channels
│   ├── faq/page.tsx              # Categorized interactive FAQ accordion
│   ├── portfolio/page.tsx        # Filterable case studies with ROI metrics
│   ├── services/page.tsx         # 6 core services & 3 pricing packages
│   ├── services/[slug]/page.tsx  # Dedicated pages for each service
│   ├── testimonials/page.tsx     # Client ratings, reviews & video slots
│   ├── privacy-policy/page.tsx   # Legal privacy policy
│   ├── terms/page.tsx            # Legal terms of service
│   ├── not-found.tsx             # Custom branded 404
│   ├── sitemap.ts                # Dynamic XML sitemap generator
│   ├── robots.ts                 # Robots.txt generator
│   └── page.tsx                  # Complete reference-inspired homepage
├── components/                   # Reusable UI & animation components
├── data/                         # Typed centralized data files
│   ├── services.ts               # Services & pricing packages
│   ├── portfolio.ts              # Case studies & metrics
│   ├── testimonials.ts           # Reviews & client marquee
│   ├── blog.ts                   # Growth articles & authors
│   └── faq.ts                    # FAQ items categorized
├── docs/
│   └── motion-notes.md           # Motion choreography analysis
└── public/
    ├── logo.png                  # Original AD gold brand logo
    ├── hero-adeel.jpg            # Hero portrait (white shirt, suit)
    └── about-adeel.jpg           # About portrait (black shirt, blazer)
```

---

## 💻 Local Development Setup

1. **Clone or open the directory**:
   ```bash
   cd "d:/adeel website"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API key (free at https://resend.com) to receive email notifications at `adeeldigitalagency@gmail.com`.

4. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Validate all site routes & links**:
   ```bash
   npm run check-links
   ```

---

## 🌐 Vercel Deployment Instructions

1. Push this project to your GitHub, GitLab, or Bitbucket account.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository.
4. Set the Framework Preset to **Next.js**.
5. Add Environment Variables in Vercel Project Settings:
   - `RESEND_API_KEY`: Your Resend API Key
   - `NEXT_PUBLIC_APP_URL`: `https://your-custom-domain.com`
6. Click **Deploy**. Vercel will automatically build the static pages and deploy the site to global edge nodes with instant SSL.

---

## ✏️ Guide: How to Customize Content

### 1. Changing Contact Information
Edit `/lib/utils.ts` in the `AGENCY_CONFIG` object:
- `phone`: WhatsApp number
- `email`: Official email
- `whatsappUrl`: Direct link to WhatsApp
- `facebookUrl` / `instagramUrl`: Social handles

### 2. Updating Testimonials
Edit `/data/testimonials.ts` to replace placeholder client quotes with your latest client wins and feedback.

### 3. Adding Portfolio Case Studies
Edit `/data/portfolio.ts` to add new projects with their industry metrics (e.g. ROAS, page speed, lead volumes).

### 4. Publishing New Blog Articles
Add items to the `BLOG_POSTS` array in `/data/blog.ts`. The App Router automatically generates static pages for each new slug.
