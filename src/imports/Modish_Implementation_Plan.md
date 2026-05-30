# Detailed Implementation Plan
## Modish — Official Website
**Version:** 1.0
**Document Type:** Implementation Plan
**References:** PRD v1.0 · TRD v1.0 · Design UI/UX Brief v1.0 · Web Flow
**Status:** Ready for Execution
**Last Updated:** May 2026

---

## Table of Contents

1. [Project Summary & Scope](#1-project-summary--scope)
2. [Team Roles & Responsibilities](#2-team-roles--responsibilities)
3. [Master Timeline Overview](#3-master-timeline-overview)
4. [Phase 0 — Pre-Development Setup](#4-phase-0--pre-development-setup)
5. [Phase 1 — Project Foundation](#5-phase-1--project-foundation)
6. [Phase 2 — Shell & Global Components](#6-phase-2--shell--global-components)
7. [Phase 3 — Hero & Core Sections](#7-phase-3--hero--core-sections)
8. [Phase 4 — Secondary Sections](#8-phase-4--secondary-sections)
9. [Phase 5 — JavaScript & Interactions](#9-phase-5--javascript--interactions)
10. [Phase 6 — Responsive Design](#10-phase-6--responsive-design)
11. [Phase 7 — Performance & SEO](#11-phase-7--performance--seo)
12. [Phase 8 — Testing & QA](#12-phase-8--testing--qa)
13. [Phase 9 — Launch](#13-phase-9--launch)
14. [Phase 10 — Post-Launch](#14-phase-10--post-launch)
15. [Content & Asset Collection Tracker](#15-content--asset-collection-tracker)
16. [Risk Register](#16-risk-register)
17. [Open Questions Tracker](#17-open-questions-tracker)
18. [Definition of Done](#18-definition-of-done)

---

## 1. Project Summary & Scope

### 1.1 What We Are Building

A **static, single-page catalog + inquiry website** for Modish, a Mumbai-based custom merchandise brand. The site is a digital showroom — not an e-commerce store. There is no cart, no payment gateway, and no backend server.

| Attribute | Value |
|---|---|
| **Site Type** | Static HTML/CSS/JS single-page (SPA-like) |
| **Primary Goal** | Convert visitors into WhatsApp inquiries and qualified leads |
| **Total Sections** | 16 homepage sections + header + footer + modal |
| **Device Priority** | Mobile-first; fully responsive (320px → 2560px) |
| **Stack** | HTML5 + CSS3 (custom, no framework) + Vanilla JS (ES6+) |
| **Hosting** | Netlify (free tier recommended) |
| **Integrations** | WhatsApp (wa.me), Google Forms, PDF catalogs, Instagram |
| **V1 Exclusions** | Cart, payment, CMS, user accounts, live Instagram feed |

### 1.2 The 16 Homepage Sections (Build Order Reference)

| # | Section ID | Section Name | Priority |
|---|---|---|---|
| 01 | `#hero` | Hero Banner (Auto-Sliding) | 🔴 High |
| 02 | `.marquee` | Marquee Offer Ticker | 🟡 Medium |
| 03 | `#products` | Product Categories Grid | 🔴 High |
| 04 | `#why` | Why Choose Modish | 🟡 Medium |
| 05 | `#how-it-works` | How It Works (5 Steps) | 🟡 Medium |
| 06 | `#printing` | Printing Technologies | 🟡 Medium |
| 07 | `#stats` | Stats Counter | 🟡 Medium |
| 08 | `#diaries` | Diaries & Corporate Gifting | 🔴 High |
| 09 | `#clients` | Trusted Clients | 🟡 Medium |
| 10 | `#catalogs` | Catalog Downloads | 🔴 High |
| 11 | `#inquiry` | Inquiry / Quote Form | 🔴 High |
| 12 | `#wa-cta` | WhatsApp CTA Section | 🔴 High |
| 13 | `#about` | About Modish | 🟡 Medium |
| 14 | `#faq` | FAQ Accordion | 🟡 Medium |
| 15 | `#contact` | Contact Section | 🔴 High |
| 16 | `#footer` | Footer | 🟡 Medium |

### 1.3 Conversion Endpoints (Success Outcomes)

| Endpoint | Implementation | Tracking |
|---|---|---|
| WhatsApp Chat | `wa.me/919136867622?text=...` (6 unique messages) | GA event: `wa_click_*` |
| Google Forms Inquiry | `forms.gle/LyAS3k5qw1QpGVQ48` (opens in new tab) | GA event: `inquiry_form_submit` |
| Clothing Catalog PDF | `tinyurl.com/Modish-now` (opens in new tab) | GA event: `catalog_download_clothing` |
| Diary Catalog PDF | `tinyurl.com/Diary-modish` (opens in new tab) | GA event: `catalog_download_diary` |

---

## 2. Team Roles & Responsibilities

### 2.1 Recommended Team Structure

| Role | Responsibility | Who |
|---|---|---|
| **Project Owner** | Decision-maker; approves designs, content, and go-live | Modish Team |
| **UI/UX Designer** | Figma wireframes, hi-fi mockups, component library, prototype | Assign |
| **Frontend Developer** | HTML, CSS, JavaScript implementation | Assign |
| **Content Coordinator** | Copy, product specs, photos, FAQ answers | Modish Team |
| **QA Reviewer** | Cross-browser and device testing, accessibility audit | Developer or separate |
| **Project Manager / Coordinator** | Timeline tracking, task assignment, blocker escalation | Assign |

> **Lean team option:** For a 1–2 person team, the Developer takes on QA, and the Designer may also handle Project Management. Modish Team is always the Content Coordinator and Project Owner.

### 2.2 RACI Matrix (Key Deliverables)

| Deliverable | Project Owner | Designer | Developer | Content |
|---|---|---|---|---|
| PRD / TRD Review & Sign-off | **A** | R | R | I |
| Wireframes | I | **A** | C | I |
| Hi-Fi Mockups | **A** | R | C | I |
| Component Library | I | **A** | R | I |
| Product Content & Photos | **A** | I | I | R |
| HTML Structure | I | C | **A** | I |
| CSS Implementation | I | C | **A** | I |
| JS Modules | I | I | **A** | I |
| Responsive QA | C | C | **A** | I |
| Accessibility Audit | I | C | **A** | I |
| Go-Live Sign-off | **A** | I | R | I |

> **R** = Responsible (does the work) · **A** = Accountable (final decision) · **C** = Consulted · **I** = Informed

---

## 3. Master Timeline Overview

### 3.1 Phase Summary (8–10 Week Project)

| Phase | Name | Duration | Week(s) |
|---|---|---|---|
| **Phase 0** | Pre-Development Setup | 3–4 days | Week 1 |
| **Phase 1** | Project Foundation | 2–3 days | Week 1 |
| **Phase 2** | Shell & Global Components | 3–4 days | Week 1–2 |
| **Phase 3** | Hero & Core Sections | 5–6 days | Week 2–3 |
| **Phase 4** | Secondary Sections | 4–5 days | Week 3–4 |
| **Phase 5** | JavaScript & Interactions | 4–5 days | Week 4–5 |
| **Phase 6** | Responsive Design | 3–4 days | Week 5–6 |
| **Phase 7** | Performance & SEO | 2–3 days | Week 6 |
| **Phase 8** | Testing & QA | 4–5 days | Week 7 |
| **Phase 9** | Launch | 1–2 days | Week 8 |
| **Phase 10** | Post-Launch Monitoring | Ongoing | Week 9–10+ |

> **Note:** The timeline assumes content and photos are provided by Week 3. If delayed, development continues with placeholders and final content is swapped in during Phase 8.

### 3.2 Critical Path Dependencies

```
Phase 0 (Environment + Content kick-off)
       ↓
Phase 1 (CSS Variables + HTML skeleton)
       ↓
Phase 2 (Header + Footer + Floating WA)
       ↓
Phase 3 (Hero + Products + Inquiry Form + WA CTA)
       ↓  ←── Content/Photos needed by here
Phase 4 (Secondary Sections)
       ↓
Phase 5 (All JS Modules)
       ↓
Phase 6 (Responsive Design)
       ↓
Phase 7 (Performance + SEO)
       ↓
Phase 8 (Full QA + Cross-Browser Testing)
       ↓
Phase 9 (DNS + Hosting + Go Live)
       ↓
Phase 10 (Monitoring + KPIs)
```

### 3.3 Milestone Gates

| Milestone | Deliverable | Sign-off By |
|---|---|---|
| **M1** | All designs approved (wireframes + hi-fi) | Project Owner |
| **M2** | HTML/CSS structure complete with placeholders | Developer self-review |
| **M3** | All sections complete with real content | Project Owner review |
| **M4** | All JS interactions working | Developer self-review |
| **M5** | Mobile QA passed; responsive on all breakpoints | Developer + Project Owner |
| **M6** | Full QA checklist completed (100% pass rate) | Project Owner |
| **M7** | Domain live; HTTPS active; analytics tracking | Project Owner sign-off |

---

## 4. Phase 0 — Pre-Development Setup

**Duration:** 3–4 days | **Owner:** Developer + Project Manager

This phase lays the groundwork before a single line of code is written. Do not skip.

---

### Task 0.1 — Tool & Environment Setup

**Duration:** Half day | **Owner:** Developer

#### 0.1.1 Version Control Setup
```bash
# Create project repository on GitHub
git init modish-website
cd modish-website
git remote add origin https://github.com/[org]/modish-website.git
echo "# Modish Website" > README.md
git add . && git commit -m "chore: initial repo setup"
git push -u origin main
```

**Repository settings to configure:**
- [ ] Default branch: `main`
- [ ] Branch protection on `main` (require PR review before merge)
- [ ] Create development branch: `git checkout -b develop`
- [ ] Set up branch naming convention: `feat/`, `fix/`, `content/`, `style/`

#### 0.1.2 Folder Structure Creation
Create the complete folder structure defined in TRD Section 3.1:

```
modish-website/
├── index.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── components.css
│   ├── sections.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── slider.js
│   ├── modal.js
│   ├── counter.js
│   ├── scroll.js
│   ├── form.js
│   ├── marquee.js
│   └── nav.js
├── assets/
│   ├── images/
│   │   ├── products/      (placeholder: product-placeholder.svg)
│   │   ├── diaries/       (placeholder: diary-placeholder.svg)
│   │   ├── gallery/
│   │   ├── clients/
│   │   ├── hero/          (placeholder: hero-placeholder-[1-4].svg)
│   │   └── about/
│   ├── icons/             (all SVG icon files)
│   └── favicon/
├── .gitignore
├── README.md
├── netlify.toml
└── sitemap.xml
```

```bash
# Create all directories
mkdir -p css js assets/images/{products,diaries,gallery,clients,hero,about} assets/icons assets/favicon
touch css/{variables,reset,components,sections,animations,responsive}.css
touch js/{main,slider,modal,counter,scroll,form,marquee,nav}.js
touch index.html netlify.toml sitemap.xml .gitignore
```

#### 0.1.3 .gitignore Setup
```
# .gitignore
.DS_Store
Thumbs.db
*.log
node_modules/
.env
.env.local
dist/
```

#### 0.1.4 Local Development Server
Choose ONE of the following for local development:
- **VS Code + Live Server extension** (recommended for simplicity)
- **Python:** `python3 -m http.server 3000` in project root
- **Node.js:** `npx serve .` in project root

#### 0.1.5 netlify.toml Configuration
```toml
[build]
  publish = "."
  command = ""

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[redirects]]
  from  = "http://modish.in/*"
  to    = "https://www.modish.in/:splat"
  status = 301

[[redirects]]
  from  = "https://modish.in/*"
  to    = "https://www.modish.in/:splat"
  status = 301
```

#### 0.1.6 Placeholder Asset Creation
Create SVG placeholder files so the site renders structurally even without real photos:

```svg
<!-- assets/images/products/placeholder.svg -->
<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="600" fill="#F5F5F5"/>
  <text x="50%" y="50%" text-anchor="middle" dy=".35em"
        font-family="sans-serif" font-size="18" fill="#AAAAAA">
    Product Image
  </text>
</svg>
```
Create similar placeholders for: `hero-placeholder.svg`, `diary-placeholder.svg`, `client-logo-placeholder.svg`

---

### Task 0.2 — Hosting & Deployment Pipeline Setup

**Duration:** 2–3 hours | **Owner:** Developer

#### 0.2.1 Netlify Account Setup
1. Create account at netlify.com (free tier)
2. Connect GitHub repository: `New site → Import from Git → GitHub → modish-website`
3. Set build settings:
   - Build command: (leave empty — static site)
   - Publish directory: `.` (root)
4. Verify auto-deploy triggers on push to `main`

#### 0.2.2 Staging URL
- Netlify provides a default URL: `[random-name].netlify.app`
- Rename to something human-readable: `modish-staging.netlify.app`
- Share with Modish team for review throughout development

#### 0.2.3 Domain Preparation (if domain is ready)
If the domain (e.g. `modish.in`) is purchased:
1. Go to Netlify → Domain Settings → Add custom domain
2. Update DNS at domain registrar:
   - `A` Record: `75.2.60.5` (Netlify Load Balancer)
   - `CNAME www`: `modish-staging.netlify.app`
3. Enable HTTPS (Let's Encrypt — Netlify handles automatically)
4. Enable "Force HTTPS" redirect

> **If domain not yet purchased:** Continue with Netlify staging URL and connect domain in Phase 9.

---

### Task 0.3 — Design Assets Preparation

**Duration:** Design team parallel | **Owner:** Designer

#### 0.3.1 Design File Organization (Figma)
Create a Figma project with the following pages:
```
Figma Project: "Modish Website"
├── Page 1: Style Guide (colors, type, spacing, shadows)
├── Page 2: Component Library (buttons, cards, chips, form fields, modals)
├── Page 3: Desktop Wireframes (all 16 sections, 1440px)
├── Page 4: Mobile Wireframes (all 16 sections, 390px)
├── Page 5: Desktop Hi-Fi Mockups
├── Page 6: Mobile Hi-Fi Mockups
├── Page 7: Interactive States (hover, focus, error, success)
└── Page 8: Motion Specs (annotated animations)
```

#### 0.3.2 Design Token Export
Export CSS variables from Figma Style Guide that exactly match TRD Section 5.2 token names. Developer uses these to populate `css/variables.css`.

#### 0.3.3 SVG Icon Preparation
Export all required icons as optimized SVG files:
- WhatsApp icon
- Instagram icon
- Email / envelope icon
- Phone icon
- Location pin / map marker icon
- Download arrow icon
- Arrow right / chevron right icon
- Checkmark / tick icon
- Close (×) icon
- Hamburger (≡) icon
- Printer icon (for printing tech)
- Star / quality icon
- Delivery truck icon
- Process step icons (5 icons for How It Works)
- Why Choose icons (6 icons)

**SVG optimization:** Run through SVGO or squoosh before embedding. Remove unnecessary attributes. Ensure `fill="currentColor"` or `stroke="currentColor"` for easy color control.

---

### Task 0.4 — Content Collection Kickoff

**Duration:** Kickoff meeting (1 hour) | **Owner:** Project Manager + Modish Team

#### 0.4.1 Content Brief Document
Send the following content request to Modish team (see Section 15 for full tracker):

**Immediate needs (required before Phase 3):**
- Brand wordmark/logo: all variants (SVG + PNG)
- Brand story paragraph (100–150 words)
- 4 core brand values (name + one-liner each)
- Working hours (for WhatsApp CTA section)
- Stats numbers (orders, customers, cities, products)
- FAQ answers (8 questions from Design Brief)
- Contact details confirmation (phone, email, Instagram handle)

**Needed before Phase 4 (Week 3):**
- Product photos: 7 products × 1–3 photos each
- Hero banner images: 4 images (matching slide topics)
- Diary photos: 10 models × 1–2 photos each
- Client logos: 8 logos (PNG, transparent background)
- Print sample photos: 3–5 photos

**Content format requirements:**
- Photos: JPG or PNG, minimum 1200px wide, good lighting, clean background
- Text: Google Doc or plain text (no heavy formatting)
- Logos: AI, EPS, SVG, or high-resolution PNG preferred

#### 0.4.2 Google Drive Shared Folder
Set up a shared Google Drive folder structure for Modish to drop content:
```
Google Drive: Modish Website Content/
├── 01_Logo & Brand Assets/
├── 02_Product Photos/
│   ├── Round Neck/
│   ├── Oversized/
│   ├── Polo/
│   ├── Hoodie/
│   ├── Gym Vest/
│   ├── Tote Bag/
│   └── Accessories/
├── 03_Diary Photos/
├── 04_Hero Banner Images/
├── 05_Client Logos/
├── 06_Print Sample Photos/
├── 07_About & Team/
└── 08_Text Content/
    ├── Brand Story.txt
    ├── FAQ Answers.txt
    └── Product Specs.txt
```

---

### Task 0.5 — Design Review Meeting

**Duration:** 1–1.5 hours | **Owner:** All stakeholders

**Agenda:**
1. Walk through all 4 reference documents (PRD, TRD, Design Brief, Web Flow)
2. Confirm design direction and aesthetic brief
3. Confirm brand color HEX values (#F5C400 yellow, #0A0A0A black)
4. Confirm fonts: Syne + Manrope (Google Fonts)
5. Confirm conversion strategy (WhatsApp primary, form secondary)
6. Confirm content collection timeline
7. Confirm domain and hosting decisions
8. Open questions session (see Section 17)
9. Sign off on PRD scope and Design Brief

**Output:** Meeting notes, signed-off scope document, updated open questions log

---

## 5. Phase 1 — Project Foundation

**Duration:** 2–3 days | **Owner:** Developer
**Prerequisite:** Phase 0 complete; design tokens from designer

---

### Task 1.1 — HTML Skeleton (index.html)

**Duration:** 3–4 hours | **Owner:** Developer

Build the complete HTML document structure — all sections as empty shells with correct IDs, `aria-label` attributes, and semantic elements. No content yet; structure only.

#### 1.1.1 Document Head

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta: charset, viewport, compat -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <!-- SEO Meta -->
  <title>Modish – Custom T-Shirts, Hoodies & Corporate Merchandise | Mumbai</title>
  <meta name="description" content="Modish offers premium custom printed T-shirts, hoodies, corporate diaries and merchandise in Mumbai. Bulk orders welcome. Pan India delivery.">
  <meta name="keywords" content="custom t-shirts mumbai, bulk printing india, corporate merchandise, DTF printing, custom hoodies">
  <meta name="author" content="Modish">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.modish.in/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.modish.in/">
  <meta property="og:title" content="Modish – Wear Your Mood | Custom Merchandise Mumbai">
  <meta property="og:description" content="Premium custom printed T-shirts, hoodies, corporate diaries and merchandise. Pan India delivery.">
  <meta property="og:image" content="https://www.modish.in/assets/images/og-image.jpg">
  <meta property="og:site_name" content="Modish">
  <meta property="og:locale" content="en_IN">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Modish – Custom Merchandise Mumbai">
  <meta name="twitter:description" content="Premium custom printed T-shirts, hoodies, diaries. Pan India delivery.">
  <meta name="twitter:image" content="https://www.modish.in/assets/images/og-image.jpg">

  <!-- Theme color (browser UI) -->
  <meta name="theme-color" content="#F5C400">

  <!-- Favicon package -->
  <link rel="icon" type="image/ico" href="/assets/favicon/favicon.ico">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
  <link rel="manifest" href="/assets/favicon/site.webmanifest">

  <!-- Google Fonts: Preconnect first, then load -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <!-- CSS Load Order (must be in this sequence) -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/sections.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/responsive.css">

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Modish",
    "description": "Custom printed T-shirts, hoodies, corporate merchandise and diaries in Mumbai.",
    "url": "https://www.modish.in",
    "telephone": "+91-91368-67622",
    "email": "modish.new@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": "India",
    "sameAs": ["https://www.instagram.com/modish.now"]
  }
  </script>
</head>
```

#### 1.1.2 Document Body — Complete Section Shells

```html
<body>

  <!-- ① HEADER -->
  <header id="header" role="banner">
    <!-- Logo, Nav, CTAs — built in Phase 2 -->
  </header>

  <!-- ② MOBILE MENU -->
  <nav id="mobile-menu" role="navigation" aria-label="Mobile Navigation" aria-hidden="true">
    <!-- Built in Phase 2 -->
  </nav>

  <!-- ③ SKIP NAVIGATION LINK (Accessibility) -->
  <a href="#main-content" class="u-skip-link">Skip to main content</a>

  <main id="main-content">

    <!-- SECTION 01: HERO BANNER -->
    <section id="hero" aria-label="Featured Products Banner">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 02: MARQUEE TICKER -->
    <div class="marquee-section" aria-hidden="true">
      <!-- Built in Phase 4 -->
    </div>

    <!-- SECTION 03: PRODUCTS -->
    <section id="products" aria-labelledby="products-heading">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 04: WHY CHOOSE MODISH -->
    <section id="why" aria-labelledby="why-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 05: HOW IT WORKS -->
    <section id="how-it-works" aria-labelledby="how-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 06: PRINTING TECHNOLOGIES -->
    <section id="printing" aria-labelledby="printing-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 07: STATS COUNTER -->
    <section id="stats" aria-label="Modish Business Statistics">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 08: DIARIES & CORPORATE GIFTING -->
    <section id="diaries" aria-labelledby="diaries-heading">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 09: TRUSTED CLIENTS -->
    <section id="clients" aria-labelledby="clients-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 10: CATALOG DOWNLOADS -->
    <section id="catalogs" aria-labelledby="catalogs-heading">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 11: INQUIRY FORM -->
    <section id="inquiry" aria-labelledby="inquiry-heading">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 12: WHATSAPP CTA -->
    <section id="wa-cta" aria-label="WhatsApp Contact Call to Action">
      <!-- Built in Phase 3 -->
    </section>

    <!-- SECTION 13: ABOUT MODISH -->
    <section id="about" aria-labelledby="about-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 14: FAQ -->
    <section id="faq" aria-labelledby="faq-heading">
      <!-- Built in Phase 4 -->
    </section>

    <!-- SECTION 15: CONTACT -->
    <section id="contact" aria-labelledby="contact-heading">
      <!-- Built in Phase 4 -->
    </section>

  </main>

  <!-- ⑥ FOOTER -->
  <footer id="footer" role="contentinfo">
    <!-- Built in Phase 2 -->
  </footer>

  <!-- ⑦ FLOATING WHATSAPP BUTTON (fixed position, always visible) -->
  <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20help%20with%20a%20custom%20order."
     class="floating-wa"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="Chat on WhatsApp">
    <!-- WhatsApp SVG icon -->
  </a>

  <!-- ⑧ PRODUCT DETAIL MODAL -->
  <div id="product-modal"
       class="modal-overlay"
       role="dialog"
       aria-modal="true"
       aria-labelledby="modal-title"
       aria-hidden="true">
    <!-- Built in Phase 3 (product modal) -->
  </div>

  <!-- JS Scripts (bottom of body, defer) -->
  <script src="js/main.js" defer></script>

</body>
</html>
```

**Verification:** Open in browser, inspect DevTools → Elements. Confirm:
- [ ] `<html lang="en">` present
- [ ] One `<main>` element
- [ ] One `<header>` element
- [ ] One `<footer>` element
- [ ] All section IDs match TRD Section 4.4 table
- [ ] All ARIA attributes present
- [ ] Modal has `aria-hidden="true"` by default
- [ ] `<title>` and meta description present

---

### Task 1.2 — CSS Variables (Design Tokens)

**Duration:** 2–3 hours | **Owner:** Developer

Populate `css/variables.css` with the complete design token set from TRD Section 5.2. This is the single source of truth for all visual values. Every subsequent CSS file reads from here.

**Copy the complete `:root {}` block from TRD Section 5.2** including:
- All color tokens (`--color-yellow`, `--color-black`, `--color-white`, grey scale, WhatsApp green)
- Typography tokens (font stacks, all size tokens from `--text-xs` to `--text-hero`, all weight tokens)
- Spacing scale (12 steps: `--space-1` through `--space-24`)
- Border radius tokens (`--radius-sm` through `--radius-full`)
- Shadow tokens (`--shadow-sm` through `--shadow-yellow`)
- Transition tokens (`--transition-fast`, `--transition-base`, `--transition-slow`, `--transition-bounce`)
- Layout tokens (`--container-max`, `--container-pad`, `--header-height`, `--section-py`)
- Z-index scale (`--z-base` through `--z-toast`)

**Post-implementation check:**
```bash
# Count variable declarations — should be 60+
grep -c "^  --" css/variables.css
```

---

### Task 1.3 — CSS Reset

**Duration:** 30 minutes | **Owner:** Developer

Populate `css/reset.css` exactly as specified in TRD Section 5.4:
- Box-sizing reset
- Margin/padding reset
- `scroll-behavior: smooth` on `html`
- `-webkit-text-size-adjust: 100%` on `html`
- `font-family`, `font-size`, `color`, `background-color`, `line-height` on `body`
- `overflow-x: hidden` and `font-smoothing` on `body`
- `max-width: 100%; display: block` on `img, video`
- Reset on `a`, `button`, `input`, `textarea`, `select`
- `list-style: none` on `ul, ol`
- `font-family: var(--font-heading)` on all heading tags

**Verify:** Open `index.html` in browser. Check DevTools → Computed Styles. Confirm no default margins on `body`, `h1`, `ul`, `p`.

---

### Task 1.4 — CSS Layout Foundation

**Duration:** 2 hours | **Owner:** Developer

In `css/sections.css`, add:
- `.container` class (max-width, margin auto, horizontal padding)
- `.section` class (vertical padding via `--section-py`)
- Section background modifiers: `.section--yellow`, `.section--black`, `.section--grey`, `.section--white`
- Grid helper classes: `.grid-2`, `.grid-3`, `.grid-4`, `.grid-auto`
- Utility classes: `.u-text-center`, `.u-visually-hidden`, `.u-skip-link`

**Apply section backgrounds** to all sections in `index.html` now so the color cadence is visible immediately:
- `#products` → `section--white`
- `#why` → `section--grey`
- `#how-it-works` → `section--white`
- `#printing` → `section--black`
- `#stats` → `section--yellow`
- `#diaries` → `section--black`
- `#clients` → `section--grey`
- `#catalogs` → `section--white`
- `#inquiry` → `section--grey`
- `#wa-cta` → `section--yellow`
- `#about` → `section--white`
- `#faq` → `section--grey`
- `#contact` → `section--black`
- `footer` → `section--black`

**Verify:** Scroll through the page in browser. Confirm the Yellow → Black → White → Grey → Black → Yellow rhythm is correct even with empty sections.

---

### Task 1.5 — CSS Animation Keyframes

**Duration:** 1 hour | **Owner:** Developer

Populate `css/animations.css` with the full keyframe library from TRD Section 5.6:
- `@keyframes fadeInUp`
- `@keyframes fadeIn`
- `@keyframes marqueeScroll`
- `@keyframes countUp`
- `@keyframes pulseWA`
- `@keyframes slideInLeft`
- `.reveal` base class and `.is-visible` state
- Stagger delay classes: `.reveal-delay-1` through `.reveal-delay-5`
- `@media (prefers-reduced-motion: reduce)` block

---

### Task 1.6 — SVG Icon System

**Duration:** 1–2 hours | **Owner:** Developer

Create a centralized inline SVG sprite file or include SVGs directly in HTML where needed. For this project, inline SVGs are preferred (no external sprite dependency).

**Create SVG snippets for all required icons** (see Task 0.3.3 list). Test each:
- Renders at correct size
- Color controlled by `fill="currentColor"` or `stroke="currentColor"`
- `aria-hidden="true"` on decorative icons
- `aria-label` on standalone icon buttons

---

## 6. Phase 2 — Shell & Global Components

**Duration:** 3–4 days | **Owner:** Developer
**Prerequisite:** Phase 1 complete; logo files from Modish team

These components appear on every page and set the visual frame for the entire site.

---

### Task 2.1 — Sticky Header (Navigation Bar)

**Duration:** 4–6 hours | **Owner:** Developer

#### 2.1.1 Desktop Header HTML

```html
<header id="header" role="banner" class="site-header">
  <div class="container site-header__inner">

    <!-- Logo -->
    <a href="/" class="site-header__logo" aria-label="Modish — Home">
      <!-- SVG wordmark or <img> if raster -->
      <span class="site-header__brand">MODISH</span>
      <span class="site-header__tagline">Wear Your Mood</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="site-header__nav" role="navigation" aria-label="Main Navigation">
      <ul class="site-header__nav-list">
        <li><a href="#hero"        class="site-header__nav-link" data-nav-link>Home</a></li>
        <li><a href="#products"    class="site-header__nav-link" data-nav-link>Products</a></li>
        <li><a href="#diaries"     class="site-header__nav-link" data-nav-link>Diaries</a></li>
        <li><a href="#printing"    class="site-header__nav-link" data-nav-link>Services</a></li>
        <li><a href="#about"       class="site-header__nav-link" data-nav-link>About</a></li>
        <li><a href="#contact"     class="site-header__nav-link" data-nav-link>Contact</a></li>
      </ul>
    </nav>

    <!-- Header CTAs -->
    <div class="site-header__ctas">
      <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%27d%20like%20to%20know%20more%20about%20your%20products."
         class="btn btn--wa btn--sm"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chat on WhatsApp">
        <!-- WA SVG icon --> WhatsApp
      </a>
      <a href="#inquiry" class="btn btn--primary btn--sm">Get Quote</a>
    </div>

    <!-- Mobile Hamburger -->
    <button class="site-header__hamburger"
            id="hamburger-btn"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-menu">
      <!-- Hamburger SVG (3 lines) -->
    </button>

  </div>
</header>
```

#### 2.1.2 Mobile Menu HTML

```html
<nav id="mobile-menu"
     class="mobile-menu"
     role="navigation"
     aria-label="Mobile Navigation"
     aria-hidden="true">

  <!-- Close button -->
  <button class="mobile-menu__close"
          id="mobile-menu-close"
          aria-label="Close navigation menu">
    <!-- × SVG -->
  </button>

  <ul class="mobile-menu__list">
    <li><a href="#hero"     class="mobile-menu__link" data-mobile-link>Home</a></li>
    <li><a href="#products" class="mobile-menu__link" data-mobile-link>Products</a></li>
    <li><a href="#diaries"  class="mobile-menu__link" data-mobile-link>Diaries</a></li>
    <li><a href="#printing" class="mobile-menu__link" data-mobile-link>Services</a></li>
    <li><a href="#about"    class="mobile-menu__link" data-mobile-link>About</a></li>
    <li><a href="#contact"  class="mobile-menu__link" data-mobile-link>Contact</a></li>
  </ul>

  <!-- WhatsApp CTA at bottom of mobile menu -->
  <div class="mobile-menu__wa">
    <a href="https://wa.me/919136867622?text=Hi%20Modish!"
       class="btn btn--wa btn--full btn--lg"
       target="_blank"
       rel="noopener noreferrer">
      <!-- WA Icon --> Chat on WhatsApp
    </a>
  </div>

</nav>
```

#### 2.1.3 Header CSS Requirements

In `css/sections.css` and `css/components.css`, implement:

```css
/* Sticky behavior */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--header-height);
  background: var(--color-white);
  z-index: var(--z-sticky);
  transition: box-shadow var(--transition-base);
}

/* Shadow added by JS on scroll */
.site-header.is-scrolled {
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

/* Mobile menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--color-black);
  z-index: var(--z-overlay);
  transform: translateX(100%);
  transition: transform var(--transition-base);
}
.mobile-menu.is-open {
  transform: translateX(0);
}

/* Hamburger: visible only on mobile */
.site-header__hamburger { display: none; }
.site-header__nav       { display: flex; }
@media (max-width: 1023px) {
  .site-header__hamburger { display: flex; }
  .site-header__nav       { display: none; }
}
```

#### 2.1.4 Active Navigation Highlight
The JS module `nav.js` (built in Phase 5) will add `.is-active` class to nav links based on scroll position. CSS for the active state:
```css
.site-header__nav-link.is-active {
  font-weight: var(--weight-bold);
  border-bottom: 2px solid var(--color-yellow);
}
```

#### 2.1.5 Offset Body Content
Since header is fixed, the `<main>` content must be offset:
```css
main { padding-top: var(--header-height); }
```

**Verification Checklist:**
- [ ] Header fixed at top, height 70px
- [ ] Logo displays correctly
- [ ] All 6 nav links visible and clickable (desktop)
- [ ] WhatsApp button + Get Quote visible in header
- [ ] On mobile: only logo + WA icon + hamburger visible
- [ ] Hamburger opens mobile menu (using placeholder JS click handler for now)
- [ ] Mobile menu fills full screen, black background
- [ ] Menu links close the drawer on click

---

### Task 2.2 — Footer

**Duration:** 3–4 hours | **Owner:** Developer

#### 2.2.1 Footer HTML Structure

```html
<footer id="footer" role="contentinfo" class="site-footer section--black">
  <div class="container">
    <div class="site-footer__grid">

      <!-- Column 1: Brand -->
      <div class="site-footer__col">
        <a href="/" class="site-footer__logo" aria-label="Modish — Home">
          MODISH <span>Wear Your Mood</span>
        </a>
        <p class="site-footer__tagline">
          Custom merchandise crafted to represent your brand. Mumbai, India.
        </p>
        <div class="site-footer__social">
          <a href="https://www.instagram.com/modish.now" target="_blank" rel="noopener noreferrer"
             aria-label="Modish on Instagram"><!-- Instagram SVG --></a>
          <a href="https://wa.me/919136867622" target="_blank" rel="noopener noreferrer"
             aria-label="Modish on WhatsApp"><!-- WA SVG --></a>
        </div>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-title">Quick Links</h3>
        <ul class="site-footer__links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#diaries">Diaries</a></li>
          <li><a href="#printing">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#inquiry">Get a Quote</a></li>
        </ul>
      </div>

      <!-- Column 3: Products -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-title">Products</h3>
        <ul class="site-footer__links">
          <li><a href="#products">Round Neck T-Shirt</a></li>
          <li><a href="#products">Oversized T-Shirt</a></li>
          <li><a href="#products">Polo T-Shirt</a></li>
          <li><a href="#products">Premium Hoodie</a></li>
          <li><a href="#products">Gym Vest</a></li>
          <li><a href="#products">Tote Bag</a></li>
          <li><a href="#products">Accessories</a></li>
        </ul>
      </div>

      <!-- Column 4: Contact -->
      <div class="site-footer__col">
        <h3 class="site-footer__col-title">Contact</h3>
        <ul class="site-footer__contact-list">
          <li>
            <a href="https://wa.me/919136867622" target="_blank" rel="noopener noreferrer">
              +91 91368 67622
            </a>
          </li>
          <li>
            <a href="mailto:modish.new@gmail.com">modish.new@gmail.com</a>
          </li>
          <li>
            <a href="https://www.instagram.com/modish.now" target="_blank" rel="noopener noreferrer">
              @modish.now
            </a>
          </li>
          <li>Mumbai, India</li>
        </ul>
        <div class="site-footer__catalogs">
          <h4 class="site-footer__col-subtitle">Catalogs</h4>
          <a href="https://tinyurl.com/Modish-now" target="_blank" rel="noopener noreferrer">
            Clothing Catalog ↓
          </a>
          <a href="https://tinyurl.com/Diary-modish" target="_blank" rel="noopener noreferrer">
            Diary Collection ↓
          </a>
        </div>
      </div>

    </div>

    <!-- Footer Bottom Bar -->
    <div class="site-footer__bottom">
      <p>© 2025 Modish. All rights reserved.</p>
      <p>Made with ❤️ in Mumbai</p>
    </div>
  </div>
</footer>
```

**Verification Checklist:**
- [ ] 4-column grid on desktop
- [ ] Collapses to 2×2 on tablet, 1-column on mobile
- [ ] Logo, social icons visible
- [ ] All links work (nav anchors + external links)
- [ ] External links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] Copyright text present
- [ ] Footer matches `section--black` background

---

### Task 2.3 — Floating WhatsApp Button

**Duration:** 1.5 hours | **Owner:** Developer

```html
<a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20help%20with%20a%20custom%20order."
   class="floating-wa"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Chat on WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <!-- WhatsApp icon path -->
  </svg>
  <span class="floating-wa__tooltip">Chat on WhatsApp</span>
</a>
```

```css
.floating-wa {
  position: fixed;
  bottom: max(20px, env(safe-area-inset-bottom) + 12px);
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--color-whatsapp);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-floating);
  animation: pulseWA 2.5s infinite;
  transition: background var(--transition-base), transform var(--transition-base);
  box-shadow: var(--shadow-lg);
}
.floating-wa:hover {
  background: var(--color-whatsapp-dark);
  transform: scale(1.08);
}
/* Tooltip */
.floating-wa__tooltip {
  position: absolute;
  right: calc(100% + 12px);
  background: var(--color-black);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-family: var(--font-body);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  opacity: 0;
  transition: opacity var(--transition-base);
  pointer-events: none;
}
.floating-wa:hover .floating-wa__tooltip { opacity: 1; }
/* Desktop only tooltip */
@media (hover: none) { .floating-wa__tooltip { display: none; } }
```

**Verification Checklist:**
- [ ] Button visible in bottom-right corner
- [ ] Pulse animation running
- [ ] WhatsApp link opens correct number with pre-filled message
- [ ] Tooltip appears on hover (desktop)
- [ ] Button does not obscure content
- [ ] `aria-label="Chat on WhatsApp"` present

---

## 7. Phase 3 — Hero & Core Sections

**Duration:** 5–6 days | **Owner:** Developer
**Prerequisite:** Phase 2 complete; hero images (or placeholders) ready

These are the highest-priority sections — they drive the majority of conversions.

---

### Task 3.1 — Hero Banner (Section 01)

**Duration:** Full day (8 hours) | **Owner:** Developer
**Design Brief Ref:** Section 8.2

#### 3.1.1 Hero HTML Structure

```html
<section id="hero" aria-label="Featured Products Banner">
  <div class="hero" role="region">

    <!-- Slide 1: Custom T-Shirts (Black background) -->
    <div class="hero__slide is-active" aria-hidden="false" data-slide="0">
      <div class="hero__slide-bg hero__slide-bg--dark"></div>
      <div class="container hero__slide-content">
        <div class="hero__slide-text">
          <p class="hero__eyebrow">Custom Apparel</p>
          <h1 class="hero__title">
            Your Brand.<br>
            Printed to<br>
            Perfection.
          </h1>
          <p class="hero__subtitle">
            Premium custom T-shirts in 180 GSM cotton.
            MOQ as low as 20 units.
          </p>
          <div class="hero__ctas">
            <a href="#products" class="btn btn--yellow btn--lg">Browse Catalog</a>
            <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%27m%20interested%20in%20placing%20an%20order."
               class="btn btn--wa btn--lg"
               target="_blank" rel="noopener noreferrer">
               WhatsApp Now
            </a>
          </div>
        </div>
        <div class="hero__slide-visual">
          <picture>
            <source srcset="assets/images/hero/hero-slide-1.webp" type="image/webp">
            <img src="assets/images/hero/hero-slide-1.jpg"
                 alt="Custom printed T-shirts by Modish"
                 width="600" height="700"
                 loading="eager"
                 fetchpriority="high">
          </picture>
        </div>
      </div>
    </div>

    <!-- Slide 2: Bulk Orders (Yellow background) -->
    <div class="hero__slide" aria-hidden="true" data-slide="1">
      <!-- Similar structure, hero__slide-bg--yellow, different content -->
    </div>

    <!-- Slide 3: Corporate Diaries (Black background) -->
    <div class="hero__slide" aria-hidden="true" data-slide="2">
      <!-- Similar structure, hero__slide-bg--dark, diary imagery -->
    </div>

    <!-- Slide 4: Merchandise (Yellow background) -->
    <div class="hero__slide" aria-hidden="true" data-slide="3">
      <!-- Similar structure, hero__slide-bg--yellow -->
    </div>

    <!-- Dot Navigation -->
    <div class="hero__dots" role="tablist" aria-label="Slide Navigation">
      <button class="hero__dot is-active" role="tab" aria-selected="true"  aria-label="Slide 1 of 4" data-slide-to="0"></button>
      <button class="hero__dot"           role="tab" aria-selected="false" aria-label="Slide 2 of 4" data-slide-to="1"></button>
      <button class="hero__dot"           role="tab" aria-selected="false" aria-label="Slide 3 of 4" data-slide-to="2"></button>
      <button class="hero__dot"           role="tab" aria-selected="false" aria-label="Slide 4 of 4" data-slide-to="3"></button>
    </div>

  </div>
</section>
```

#### 3.1.2 Hero CSS Key Rules

```css
.hero { position: relative; overflow: hidden; height: calc(100vh - var(--header-height)); min-height: 600px; }
.hero__slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.4s ease; }
.hero__slide.is-active { opacity: 1; z-index: 1; }
.hero__slide-bg--dark   { background: var(--color-black); }
.hero__slide-bg--yellow { background: var(--color-yellow); }
.hero__slide-content { display: grid; grid-template-columns: 1fr 1fr; align-items: center; height: 100%; gap: var(--space-16); }
.hero__title { font-size: var(--text-hero); font-family: var(--font-heading); font-weight: 800; line-height: 1.0; }
.hero__dots { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 2; }
.hero__dot { width: 10px; height: 10px; border-radius: 999px; background: rgba(255,255,255,0.5); border: none; cursor: pointer; transition: width 0.3s ease, background 0.3s ease; }
.hero__dot.is-active { width: 24px; background: var(--color-yellow); }
/* Mobile: hide visual, single column */
@media (max-width: 767px) {
  .hero__slide-visual { display: none; }
  .hero__slide-content { grid-template-columns: 1fr; }
}
```

**Verification Checklist:**
- [ ] All 4 slides built with correct background colors (alternating black/yellow)
- [ ] Auto-slide logic placeholder in place (JS in Phase 5)
- [ ] Slide 1 visible by default, others `aria-hidden="true"`
- [ ] 4 dot buttons present with ARIA attributes
- [ ] Hero fills viewport height minus header
- [ ] On mobile: only text/CTAs visible, image hidden
- [ ] Hero image has `loading="eager"` and `fetchpriority="high"`
- [ ] Both CTAs in each slide link correctly

---

### Task 3.2 — Product Categories Section (Section 03)

**Duration:** Full day (8 hours) | **Owner:** Developer
**Design Brief Ref:** Sections 8.4, 7.2

#### 3.2.1 Product Data Structure
Define all 7 products as a JS data object in `js/modal.js`:

```javascript
const PRODUCT_DATA = {
  'round-neck': {
    name: 'Round Neck T-Shirt',
    descriptor: '180 GSM · 100% Cotton · Bio Wash',
    specs: ['180 GSM', '100% Cotton', 'Bio Wash', 'Ultra Soft Fabric'],
    colors: [
      { hex: '#0A0A0A', name: 'Black' },
      { hex: '#2d6a2d', name: 'Bottle Green' },
      { hex: '#e86a2b', name: 'Orange' },
      { hex: '#c9a6d4', name: 'Lavender' },
      { hex: '#800020', name: 'Maroon' },
      { hex: '#FFFFFF', name: 'White', border: true }
    ],
    bestFor: ['College Events', 'Team Wear', 'Brand Promotions', 'Personal Wear', 'Startup Merchandise'],
    printing: ['DTF Printing', 'Screen Printing', 'Embroidery'],
    badge: 'Bestseller',
    catalog: 'https://tinyurl.com/Modish-now',
    wa: 'Round Neck T-Shirt',
    image: 'assets/images/products/round-neck-tshirt.webp',
    imageFallback: 'assets/images/products/round-neck-tshirt.jpg'
  },
  'oversized': { /* ... */ },
  'polo': { /* ... */ },
  'hoodie': { /* ... */ },
  'gym-vest': { /* ... */ },
  'tote-bag': { /* ... */ },
  'accessories': { /* ... */ }
};
```

#### 3.2.2 Product Card HTML Template (× 7)
Build all 7 product cards. Each card uses identical structure with data attributes for JS:

```html
<!-- Section 03: Product Categories -->
<section id="products" class="section section--white" aria-labelledby="products-heading">
  <div class="container">

    <!-- Section Header -->
    <div class="section-header u-text-center reveal">
      <p class="section-header__eyebrow">OUR PRODUCTS</p>
      <h2 id="products-heading" class="section-header__title">What We Make</h2>
      <p class="section-header__subtitle">Premium custom merchandise, crafted to represent your brand.</p>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">

      <!-- Product Card: Round Neck T-Shirt -->
      <article class="product-card reveal" data-product="round-neck" aria-label="Round Neck T-Shirt product">
        <div class="product-card__thumb">
          <span class="product-card__badge">Bestseller</span>
          <picture>
            <source srcset="assets/images/products/round-neck-tshirt.webp" type="image/webp">
            <img src="assets/images/products/round-neck-tshirt.jpg"
                 alt="Custom Round Neck T-Shirt by Modish"
                 width="400" height="400"
                 loading="lazy">
          </picture>
        </div>
        <div class="product-card__info">
          <h3 class="product-card__name">Round Neck T-Shirt</h3>
          <p class="product-card__desc">180 GSM · 100% Cotton · Bio Wash</p>
          <div class="product-card__specs">
            <span class="chip">180 GSM</span>
            <span class="chip">Cotton</span>
            <span class="chip">Bio Wash</span>
          </div>
          <div class="product-card__colors" aria-label="Available colors: 6 options">
            <span class="color-dot" style="background:#0A0A0A" title="Black" aria-label="Black"></span>
            <span class="color-dot" style="background:#2d6a2d" title="Bottle Green" aria-label="Bottle Green"></span>
            <span class="color-dot" style="background:#e86a2b" title="Orange" aria-label="Orange"></span>
            <span class="color-dot" style="background:#c9a6d4" title="Lavender" aria-label="Lavender"></span>
            <span class="color-dot" style="background:#800020" title="Maroon" aria-label="Maroon"></span>
            <span class="color-dot color-dot--white" style="background:#FFFFFF" title="White" aria-label="White"></span>
          </div>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--outline btn--sm"
                  data-modal-target="round-neck"
                  aria-haspopup="dialog"
                  aria-label="View details for Round Neck T-Shirt">
            View Details
          </button>
          <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%27m%20interested%20in%20your%20Round%20Neck%20T-Shirt.%20Can%20you%20share%20pricing?"
             class="btn btn--wa btn--sm"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="WhatsApp inquiry for Round Neck T-Shirt">
            WhatsApp
          </a>
        </div>
      </article>

      <!-- Repeat for: Oversized, Polo, Hoodie, Gym Vest, Tote Bag, Accessories -->

    </div>
  </div>
</section>
```

#### 3.2.3 Product Grid CSS

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-10);
}
.product-card {
  background: var(--color-white);
  border: 1px solid var(--color-grey-200);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
  display: flex;
  flex-direction: column;
}
@media (hover: hover) {
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  }
}
.product-card__thumb {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--color-grey-50);
}
.product-card__thumb img { width: 100%; height: 100%; object-fit: cover; }
.product-card__badge {
  position: absolute;
  top: 12px; left: 12px;
  background: var(--color-yellow);
  color: var(--color-black);
  font-size: var(--text-xs);
  font-family: var(--font-body);
  font-weight: var(--weight-semibold);
  padding: 3px 10px;
  border-radius: var(--radius-full);
}
.product-card__info { padding: var(--space-4); flex: 1; }
.product-card__name { font-family: var(--font-heading); font-weight: 700; font-size: var(--text-xl); margin-bottom: 4px; }
.product-card__specs { display: flex; flex-wrap: wrap; gap: 4px; margin: var(--space-2) 0; }
.chip { font-size: 11px; font-family: var(--font-body); font-weight: 500; padding: 3px 10px; border-radius: var(--radius-full); background: var(--color-grey-100); border: 1px solid var(--color-grey-200); color: var(--color-grey-700); }
.product-card__colors { display: flex; gap: 6px; align-items: center; margin-top: var(--space-2); }
.color-dot { width: 18px; height: 18px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,0.15); cursor: default; transition: transform var(--transition-fast); }
.color-dot--white { border: 1.5px solid var(--color-grey-200); box-shadow: none; }
.color-dot:hover { transform: scale(1.2); }
.product-card__actions { display: flex; gap: var(--space-2); padding: var(--space-4); padding-top: 0; }
.product-card__actions .btn { flex: 1; }
```

**Verification Checklist:**
- [ ] All 7 product cards render correctly
- [ ] 4-column grid on desktop
- [ ] Images load (placeholder or real)
- [ ] Spec chips display correctly
- [ ] Color swatches render with correct colors
- [ ] "Bestseller" badge on appropriate cards
- [ ] Both buttons present on each card
- [ ] WhatsApp button URLs contain correct product name
- [ ] Cards have correct ARIA attributes

---

### Task 3.3 — Product Detail Modal

**Duration:** 4–5 hours | **Owner:** Developer
**Design Brief Ref:** Section 7.3

#### 3.3.1 Modal HTML Structure

```html
<div id="product-modal"
     class="modal-overlay"
     role="dialog"
     aria-modal="true"
     aria-labelledby="modal-title"
     aria-hidden="true">

  <div class="modal-overlay__bg" data-modal-close></div>

  <div class="modal">
    <button class="modal__close"
            data-modal-close
            aria-label="Close product details">
      <!-- × SVG -->
    </button>

    <div class="modal__body">
      <!-- Left: Image -->
      <div class="modal__image-col">
        <img id="modal-image"
             src=""
             alt=""
             width="400" height="400"
             loading="lazy">
      </div>

      <!-- Right: Product Info -->
      <div class="modal__info-col">
        <h2 id="modal-title" class="modal__product-name"></h2>
        <p class="modal__product-desc" id="modal-desc"></p>

        <div class="modal__section">
          <h4 class="modal__section-label">Specifications</h4>
          <div class="modal__specs" id="modal-specs"></div>
        </div>

        <div class="modal__section">
          <h4 class="modal__section-label">Available Colors</h4>
          <div class="modal__colors" id="modal-colors"></div>
        </div>

        <div class="modal__section">
          <h4 class="modal__section-label">Best For</h4>
          <ul class="modal__best-for" id="modal-best-for"></ul>
        </div>

        <div class="modal__section">
          <h4 class="modal__section-label">Printing Methods</h4>
          <div class="modal__printing" id="modal-printing"></div>
        </div>

        <div class="modal__ctas">
          <a id="modal-catalog-btn"
             href=""
             class="btn btn--outline btn--full"
             target="_blank"
             rel="noopener noreferrer">
            Download Catalog ↓
          </a>
          <a id="modal-wa-btn"
             href=""
             class="btn btn--wa btn--full"
             target="_blank"
             rel="noopener noreferrer">
            Chat on WhatsApp ↗
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

#### 3.3.2 Modal CSS Key Rules

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-base);
}
.modal-overlay.is-open {
  opacity: 1;
  pointer-events: auto;
}
.modal-overlay__bg {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  cursor: pointer;
}
.modal {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  max-width: 820px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.95);
  transition: transform var(--transition-base);
  z-index: 1;
}
.modal-overlay.is-open .modal {
  transform: scale(1);
}
.modal__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/* Mobile: full screen modal */
@media (max-width: 767px) {
  .modal-overlay { padding: 0; align-items: flex-end; }
  .modal { max-height: 92vh; border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
  .modal__body { grid-template-columns: 1fr; }
  .modal__image-col { aspect-ratio: 1/1; max-height: 280px; }
}
```

**Verification Checklist:**
- [ ] Modal hidden by default (`aria-hidden="true"`)
- [ ] Clicking "View Details" on any product card opens modal
- [ ] Modal populated with correct product data for each card
- [ ] Modal closes on: overlay click, × button, ESC key
- [ ] Body scroll locked while modal open
- [ ] Download Catalog opens PDF in new tab
- [ ] WhatsApp button opens chat with product-specific message
- [ ] Full-screen on mobile
- [ ] Focus trapped in modal (JS handles this in Phase 5)

---

### Task 3.4 — Inquiry / Quote Form (Section 11)

**Duration:** 4–5 hours | **Owner:** Developer
**Design Brief Ref:** Section 8.12, 7.6

#### 3.4.1 Form HTML Structure

```html
<section id="inquiry" class="section section--grey" aria-labelledby="inquiry-heading">
  <div class="container">

    <div class="section-header u-text-center reveal">
      <p class="section-header__eyebrow">GET STARTED</p>
      <h2 id="inquiry-heading" class="section-header__title">Request a Quote</h2>
      <p class="section-header__subtitle">Fill in your details and we'll get back to you within 24 hours.</p>
    </div>

    <div class="inquiry-layout">

      <!-- Form Card (Left) -->
      <div class="inquiry-form-card reveal">
        <form id="inquiry-form" novalidate>

          <div class="form-row form-row--2col">
            <div class="form-field">
              <label for="field-name" class="form-label">Full Name <span aria-hidden="true">*</span></label>
              <input type="text" id="field-name" name="name" class="form-input"
                     placeholder="Your full name"
                     required minlength="2"
                     autocomplete="name">
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
            <div class="form-field">
              <label for="field-phone" class="form-label">Mobile Number <span aria-hidden="true">*</span></label>
              <input type="tel" id="field-phone" name="phone" class="form-input"
                     placeholder="10-digit mobile number"
                     required
                     pattern="[6-9][0-9]{9}"
                     autocomplete="tel">
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
          </div>

          <div class="form-row form-row--2col">
            <div class="form-field">
              <label for="field-email" class="form-label">Email Address</label>
              <input type="email" id="field-email" name="email" class="form-input"
                     placeholder="your@email.com"
                     autocomplete="email">
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
            <div class="form-field">
              <label for="field-city" class="form-label">City <span aria-hidden="true">*</span></label>
              <input type="text" id="field-city" name="city" class="form-input"
                     placeholder="Your city"
                     required minlength="2"
                     autocomplete="address-level2">
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
          </div>

          <div class="form-row form-row--2col">
            <div class="form-field">
              <label for="field-product" class="form-label">Product Required <span aria-hidden="true">*</span></label>
              <select id="field-product" name="product" class="form-input form-select" required>
                <option value="" disabled selected>Select a product</option>
                <option value="Round Neck T-Shirt">Round Neck T-Shirt</option>
                <option value="Oversized T-Shirt">Oversized T-Shirt</option>
                <option value="Polo T-Shirt">Polo T-Shirt</option>
                <option value="Hoodie">Premium Hoodie</option>
                <option value="Gym Vest">Gym Vest</option>
                <option value="Tote Bag">Tote Bag</option>
                <option value="Accessories">Accessories</option>
                <option value="Corporate Diary">Corporate Diary</option>
                <option value="Other">Other</option>
              </select>
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
            <div class="form-field">
              <label for="field-quantity" class="form-label">Quantity <span aria-hidden="true">*</span></label>
              <input type="number" id="field-quantity" name="quantity" class="form-input"
                     placeholder="e.g. 50"
                     required min="1">
              <p class="form-error" role="alert" aria-live="polite"></p>
            </div>
          </div>

          <div class="form-field">
            <label for="field-message" class="form-label">Message / Requirements</label>
            <textarea id="field-message" name="message" class="form-input form-textarea"
                      rows="4"
                      placeholder="Any specific requirements, design details, or questions?"></textarea>
          </div>

          <button type="submit" class="btn btn--primary btn--full btn--lg" id="form-submit">
            Get My Quote →
          </button>

        </form>

        <!-- Success State (hidden by default) -->
        <div class="inquiry-success" id="inquiry-success" aria-live="polite" hidden>
          <div class="inquiry-success__icon">✓</div>
          <h3 class="inquiry-success__title">Request Submitted!</h3>
          <p class="inquiry-success__msg">
            Our team will WhatsApp you within 24 hours.
          </p>
          <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%27ve%20submitted%20an%20inquiry%20and%20would%20like%20to%20discuss%20further."
             class="btn btn--wa btn--full"
             target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp Instead
          </a>
        </div>
      </div>

      <!-- Info Panel (Right) -->
      <div class="inquiry-info reveal reveal-delay-2">
        <div class="inquiry-info__card">
          <div class="inquiry-info__accent"></div>
          <h3 class="inquiry-info__title">Getting a Quote is Easy</h3>
          <ul class="inquiry-info__benefits">
            <li>✓ Response within 24 hours</li>
            <li>✓ Free digital mockup provided</li>
            <li>✓ No minimum commitment to inquire</li>
            <li>✓ WhatsApp follow-up included</li>
          </ul>
          <div class="inquiry-info__divider"></div>
          <p class="inquiry-info__alt-text">Prefer to chat directly?</p>
          <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote."
             class="btn btn--wa btn--full"
             target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp →
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
```

**Verification Checklist:**
- [ ] All 7 form fields present with correct types
- [ ] All required fields have `required` attribute
- [ ] All fields have associated `<label>` with matching `for`/`id`
- [ ] Phone field has `pattern` validation attribute
- [ ] Dropdown has 9 product options
- [ ] Submit button full-width
- [ ] Success state hidden by default
- [ ] Info panel present with 4 benefit bullets
- [ ] WhatsApp alternative link present in info panel
- [ ] Error `<p>` tags present for each field (empty initially)

---

### Task 3.5 — WhatsApp CTA Section (Section 12)

**Duration:** 1.5 hours | **Owner:** Developer

```html
<section id="wa-cta" class="section section--yellow" aria-label="WhatsApp contact call to action">
  <div class="container u-text-center">
    <div class="wa-cta reveal">
      <p class="wa-cta__eyebrow">INSTANT SUPPORT</p>
      <h2 class="wa-cta__title">Need Instant Pricing?</h2>
      <p class="wa-cta__subtitle">
        Your message gets a reply in under 24 hours.<br>
        Mon–Sat, 10am–7pm IST
      </p>
      <a href="https://wa.me/919136867622?text=Hi%20Modish!%20I%20need%20a%20quote%20for%20a%20bulk%20order."
         class="btn btn--wa btn--xl"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Chat on WhatsApp for instant pricing">
        <!-- WA Icon --> Chat on WhatsApp
      </a>
    </div>
  </div>
</section>
```

---

### Task 3.6 — Diaries Section (Section 08)

**Duration:** 4–5 hours | **Owner:** Developer

Build the full diaries section with 10 diary cards and 5 gift set entries. Follow the same pattern as product cards but with dark background styling.

**10 Diary Products:**
Elasto · Loopify · Cork · Trinity · Magneto · Trio · Mobilo · Clutch · Epitome · Coffee Cork

Each diary card:
- Diary name (H3)
- Closure type tag + material tag (yellow chips)
- Best-for description (1 line, grey)
- "Gift Set" badge on: Elasto, Loopify, Magneto, Trio, Mobilo

**Section CTA:**
```html
<div class="diaries-cta u-text-center">
  <a href="https://tinyurl.com/Diary-modish"
     class="btn btn--yellow btn--lg"
     target="_blank"
     rel="noopener noreferrer"
     aria-label="View Diary Catalog PDF">
    View Diary Catalog ↓
  </a>
</div>
```

---

### Task 3.7 — Catalog Downloads Section (Section 10)

**Duration:** 2 hours | **Owner:** Developer

```html
<section id="catalogs" class="section section--white" aria-labelledby="catalogs-heading">
  <div class="container">
    <div class="section-header u-text-center reveal">
      <p class="section-header__eyebrow">RESOURCES</p>
      <h2 id="catalogs-heading" class="section-header__title">Download Our Catalogs</h2>
      <p class="section-header__subtitle">Browse our full product range. Share with your team.</p>
    </div>
    <div class="catalogs-grid reveal">

      <!-- Card 1: Clothing Catalog -->
      <div class="catalog-card">
        <div class="catalog-card__accent"></div>
        <div class="catalog-card__body">
          <!-- Catalog icon/illustration placeholder -->
          <div class="catalog-card__icon" aria-hidden="true"><!-- SVG icon --></div>
          <h3 class="catalog-card__title">Clothing Catalog</h3>
          <p class="catalog-card__desc">
            T-Shirts, Hoodies, Gym Vests, Tote Bags and Accessories.
            Full specifications and color options.
          </p>
          <a href="https://tinyurl.com/Modish-now"
             class="btn btn--yellow btn--full"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Download Modish Clothing Catalog PDF">
            ↓ Download Clothing Catalog
          </a>
          <p class="catalog-card__helper">Opens PDF in new tab</p>
        </div>
      </div>

      <!-- Card 2: Diary Collection -->
      <div class="catalog-card">
        <div class="catalog-card__accent"></div>
        <div class="catalog-card__body">
          <div class="catalog-card__icon" aria-hidden="true"><!-- SVG icon --></div>
          <h3 class="catalog-card__title">Diary Collection</h3>
          <p class="catalog-card__desc">
            10 diary models and 5 gift sets for corporate gifting.
            Premium covers, closure types, and customization options.
          </p>
          <a href="https://tinyurl.com/Diary-modish"
             class="btn btn--yellow btn--full"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="Download Modish Diary Collection PDF">
            ↓ Download Diary Catalog
          </a>
          <p class="catalog-card__helper">Opens PDF in new tab</p>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

## 8. Phase 4 — Secondary Sections

**Duration:** 4–5 days | **Owner:** Developer
**Prerequisite:** Phase 3 complete; content from Modish team

---

### Task 4.1 — Marquee Ticker (Section 02)

**Duration:** 1.5 hours | **Owner:** Developer

```html
<div class="marquee-section" aria-hidden="true">
  <div class="marquee-track">
    <div class="marquee-content">
      <span>🎁 Bulk Order Discounts</span>
      <span class="marquee-dot">·</span>
      <span>✏️ Free Design Support</span>
      <span class="marquee-dot">·</span>
      <span>🚚 Pan India Delivery</span>
      <span class="marquee-dot">·</span>
      <span>🖨️ DTF Printing Available</span>
      <span class="marquee-dot">·</span>
      <span>👕 Custom T-Shirts</span>
      <span class="marquee-dot">·</span>
      <span>🎪 Event Merchandise</span>
      <span class="marquee-dot">·</span>
      <span>🎉 Corporate Gifting</span>
      <span class="marquee-dot">·</span>
      <span>⭐ Quality Guaranteed</span>
      <span class="marquee-dot">·</span>
    </div>
    <!-- Duplicate for seamless loop -->
    <div class="marquee-content" aria-hidden="true">
      <!-- exact copy of above -->
    </div>
  </div>
</div>
```

```css
.marquee-section { background: var(--color-black); overflow: hidden; height: 44px; display: flex; align-items: center; }
.marquee-track { display: flex; }
.marquee-content {
  display: flex; align-items: center; gap: 0;
  white-space: nowrap;
  font-size: var(--text-sm);
  font-family: var(--font-body);
  font-weight: var(--weight-medium);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0 20px;
  animation: marqueeScroll 32s linear infinite;
}
.marquee-content span { padding: 0 16px; }
.marquee-dot { color: var(--color-yellow); }
.marquee-track:hover .marquee-content { animation-play-state: paused; }
```

---

### Task 4.2 — Why Choose Modish (Section 04)

**Duration:** 2–3 hours | **Owner:** Developer

Build 6 benefit cards in a grid. Each card:
- Large icon (40×40px SVG)
- Title (Syne Bold 18px)
- Description (Manrope 14px, grey, max 2 lines)
- White card, 1px border, 16px radius
- Hover: translateY(-3px) + 3px yellow left-border

```html
<section id="why" class="section section--grey" aria-labelledby="why-heading">
  <div class="container">
    <div class="section-header u-text-center reveal">
      <p class="section-header__eyebrow">WHY MODISH</p>
      <h2 id="why-heading">Why Brands Choose Us</h2>
    </div>
    <div class="why-grid">
      <!-- 6 cards: Premium Quality, Printing Technologies, Digital Mockups, Quality Check, Pan India Delivery, Competitive Pricing -->
    </div>
  </div>
</section>
```

---

### Task 4.3 — How It Works (Section 05)

**Duration:** 2–3 hours | **Owner:** Developer

Horizontal 5-step process flow with yellow numbered circles connected by dashed yellow line:

1. Send Your Design
2. Receive Digital Mockup
3. Production Begins
4. Quality Check
5. Delivery to Your Door

Desktop: horizontal with connector line. Mobile: vertical stack with left border line.

---

### Task 4.4 — Printing Technologies (Section 06)

**Duration:** 2 hours | **Owner:** Developer

4 dark cards on black section background:
- DTF Printing
- Screen Printing
- Embroidery
- Sublimation Printing

Each card: icon, title, "Best for" yellow chips, brief benefits list.

---

### Task 4.5 — Stats Counter (Section 07)

**Duration:** 1.5 hours | **Owner:** Developer

```html
<section id="stats" class="section section--yellow" aria-label="Modish Business Statistics">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-item">
        <p class="stat-number" data-count="500" data-suffix="+">0+</p>
        <p class="stat-label">Orders Completed</p>
      </div>
      <div class="stat-item">
        <p class="stat-number" data-count="200" data-suffix="+">0+</p>
        <p class="stat-label">Happy Customers</p>
      </div>
      <div class="stat-item">
        <p class="stat-number" data-count="15" data-suffix="+">0+</p>
        <p class="stat-label">Cities Delivered</p>
      </div>
      <div class="stat-item">
        <p class="stat-number" data-count="5000" data-suffix="+">0+</p>
        <p class="stat-label">Products Printed</p>
      </div>
    </div>
  </div>
</section>
```

> **Content Note:** Replace placeholder numbers (500, 200, 15, 5000) with real values from Modish team.

---

### Task 4.6 — Trusted Clients (Section 09)

**Duration:** 1.5 hours | **Owner:** Developer

Dual-row marquee of client name chips:

```html
<section id="clients" class="section section--grey" aria-labelledby="clients-heading">
  <div class="container">
    <div class="section-header u-text-center">
      <p class="section-header__eyebrow">TRUSTED BY</p>
      <h2 id="clients-heading">Brands That Wear Modish</h2>
    </div>
  </div>
  <!-- Full-width marquee (outside container) -->
  <div class="clients-marquee" aria-label="Our clients" role="list">
    <div class="clients-marquee__row" aria-hidden="true">
      <!-- Row 1: left to right -->
      <div class="clients-marquee__track">
        <div class="clients-marquee__content">
          <span class="client-chip" role="listitem">Chandrabhan Sharma College</span>
          <span class="client-chip" role="listitem">Empower</span>
          <span class="client-chip" role="listitem">Agam Yoga</span>
          <span class="client-chip" role="listitem">Graaura</span>
          <span class="client-chip" role="listitem">Gurukrupa Catering</span>
          <span class="client-chip" role="listitem">Vatika</span>
          <span class="client-chip" role="listitem">Kid's Tutorial</span>
          <span class="client-chip" role="listitem">Azz Diagnostic</span>
        </div>
        <!-- Duplicate for seamless loop -->
        <div class="clients-marquee__content" aria-hidden="true"><!-- copy --></div>
      </div>
    </div>
    <!-- Row 2: right to left (reverse direction) -->
    <div class="clients-marquee__row clients-marquee__row--reverse" aria-hidden="true">
      <!-- Same content, animation-direction: reverse -->
    </div>
  </div>
</section>
```

---

### Task 4.7 — About Modish (Section 13)

**Duration:** 2 hours | **Owner:** Developer

2-column layout: brand story + core values (left), brand highlight card (right).

---

### Task 4.8 — FAQ Section (Section 14)

**Duration:** 2–3 hours | **Owner:** Developer

Accordion FAQ with 8 questions. Each item:

```html
<div class="faq-item">
  <button class="faq-question"
          aria-expanded="false"
          aria-controls="faq-answer-1">
    <span>What is your minimum order quantity (MOQ)?</span>
    <span class="faq-icon" aria-hidden="true">+</span>
  </button>
  <div class="faq-answer"
       id="faq-answer-1"
       aria-hidden="true">
    <p>Answer text here...</p>
  </div>
</div>
```

---

### Task 4.9 — Contact Section (Section 15)

**Duration:** 1.5 hours | **Owner:** Developer

4 contact cards (dark section). Each is a clickable `<a>` tag:
- WhatsApp: `wa.me/919136867622`
- Instagram: `instagram.com/modish.now`
- Email: `mailto:modish.new@gmail.com`
- Location: Mumbai, India (Google Maps link optional)

---

## 9. Phase 5 — JavaScript & Interactions

**Duration:** 4–5 days | **Owner:** Developer
**Prerequisite:** All HTML sections built; CSS complete

All JS modules are initialized from `main.js` with try/catch isolation.

---

### Task 5.1 — main.js Entry Point

```javascript
// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const modules = [
    { name: 'Header',        fn: initHeader },
    { name: 'Hero Slider',   fn: initHeroSlider },
    { name: 'Marquee',       fn: initMarquee },
    { name: 'Scroll Reveal', fn: initScrollReveal },
    { name: 'Stats Counter', fn: initStatsCounter },
    { name: 'Modals',        fn: initModals },
    { name: 'FAQ',           fn: initFAQ },
    { name: 'Form',          fn: initForm },
    { name: 'Smooth Scroll', fn: initSmoothScroll },
  ];

  modules.forEach(({ name, fn }) => {
    try {
      fn();
    } catch (err) {
      console.warn(`[Modish] Module "${name}" failed to initialize:`, err);
    }
  });
});
```

---

### Task 5.2 — nav.js — Header & Mobile Menu

**Responsibilities:**
1. Add `.is-scrolled` class to header on scroll past 50px
2. Toggle mobile menu open/close (hamburger + close button)
3. Close mobile menu on nav link click
4. Active nav link tracking via IntersectionObserver
5. Prevent body scroll while mobile menu is open

**Active nav tracking logic:** Observe all sections. When a section is in the viewport (top 40% of viewport), mark the corresponding nav link as `.is-active`. Use `rootMargin: '-30% 0px -60% 0px'`.

**Full implementation** follows TRD Section 6.2 specification.

---

### Task 5.3 — slider.js — Hero Banner

**Implement exactly as specified in TRD Section 6.3:**
- `INTERVAL = 4500ms` auto-advance
- `showSlide(index)` function updates: slide active class + ARIA hidden + dot active/selected states
- `startTimer()` / `stopTimer()` functions
- Dot click: stop → show → start
- Mouseenter/mouseleave: stop/start on `.hero` section
- Touch swipe: 50px threshold, touchstart + touchend listeners with `{passive: true}`
- `showSlide(0)` + `startTimer()` on init

---

### Task 5.4 — scroll.js — Reveal & Smooth Scroll

**Scroll Reveal:**
Implement IntersectionObserver as specified in TRD Section 6.4:
- Threshold: 0.12
- rootMargin: `'0px 0px -40px 0px'`
- On intersection: add `.is-visible` class + unobserve (fires once)

**Smooth Scroll:**
Override default anchor behavior for all internal `href="#..."` links:
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--header-height')) || 70;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: 'smooth'
      });
    }
  });
});
```

---

### Task 5.5 — counter.js — Stats Animation

**Implement exactly as specified in TRD Section 6.5:**
- Find all `[data-count]` elements
- IntersectionObserver on `#stats` section at threshold: 0.5
- On entry: animate each counter from 0 to `data-count` over 2000ms
- Use `requestAnimationFrame` loop with easeOut curve
- Append `data-suffix` value (e.g., "+")
- Only animate once (`hasAnimated` flag)
- Replace placeholder values with real numbers from Modish team

---

### Task 5.6 — modal.js — Product Detail Modal

**Implement full PRODUCT_DATA object** (7 products with all spec data).

**`populateModal(productKey)` function:**
```javascript
function populateModal(key) {
  const p = PRODUCT_DATA[key];
  if (!p) return;

  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.descriptor;
  document.getElementById('modal-image').src = p.image;
  document.getElementById('modal-image').alt = `${p.name} — custom printed by Modish`;

  // Specs chips
  const specsEl = document.getElementById('modal-specs');
  specsEl.innerHTML = p.specs.map(s => `<span class="chip">${s}</span>`).join('');

  // Color swatches
  const colorsEl = document.getElementById('modal-colors');
  colorsEl.innerHTML = p.colors.map(c =>
    `<span class="color-dot${c.border ? ' color-dot--white' : ''}"
           style="background:${c.hex}"
           title="${c.name}"
           aria-label="${c.name}"></span>`
  ).join('');

  // Best for list
  const bestForEl = document.getElementById('modal-best-for');
  bestForEl.innerHTML = p.bestFor.map(b => `<li>${b}</li>`).join('');

  // Printing method chips
  const printEl = document.getElementById('modal-printing');
  printEl.innerHTML = p.printing.map(m => `<span class="chip chip--outline">${m}</span>`).join('');

  // CTAs
  document.getElementById('modal-catalog-btn').href = p.catalog;
  document.getElementById('modal-wa-btn').href =
    `https://wa.me/919136867622?text=${encodeURIComponent(`Hi Modish! I'm interested in your ${p.name}. Can you share pricing?`)}`;
}
```

**`initModals()` function:**
- Bind `click` on all `[data-modal-target]` buttons
- Call `populateModal()` on open
- Add `is-open` to overlay + remove `aria-hidden`
- Lock body scroll
- Move focus to close button
- Close on: close button click, overlay click, ESC keydown
- On close: restore focus to the trigger button

---

### Task 5.7 — faq.js — Accordion

```javascript
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon   = item.querySelector('.faq-icon');

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Optionally close all others (one-at-a-time accordion)
      items.forEach(other => {
        const otherBtn    = other.querySelector('.faq-question');
        const otherAnswer = other.querySelector('.faq-answer');
        const otherIcon   = other.querySelector('.faq-icon');
        if (other !== item) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherAnswer.setAttribute('aria-hidden', 'true');
          otherAnswer.style.maxHeight = '0';
          otherIcon.textContent = '+';
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', !isOpen);
      answer.setAttribute('aria-hidden', isOpen);
      icon.textContent = isOpen ? '+' : '−';
      answer.style.maxHeight = isOpen ? '0' : answer.scrollHeight + 'px';
    });
  });
}
```

---

### Task 5.8 — form.js — Inquiry Form Validation

**Implement full validation logic as specified in TRD Section 6.8:**

```javascript
const RULES = {
  'field-name':     { required: true, minLength: 2, errorMsg: 'Please enter your full name' },
  'field-phone':    { required: true, pattern: /^[6-9]\d{9}$/, errorMsg: 'Enter a valid 10-digit mobile number' },
  'field-email':    { required: false, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, errorMsg: 'Enter a valid email address' },
  'field-product':  { required: true, errorMsg: 'Please select a product' },
  'field-quantity': { required: true, min: 1, errorMsg: 'Please enter a quantity' },
  'field-city':     { required: true, minLength: 2, errorMsg: 'Please enter your city' },
};
```

**On submit:**
1. Prevent default
2. Validate all fields; show errors inline
3. If valid: `window.open('https://forms.gle/LyAS3k5qw1QpGVQ48', '_blank')`
4. Show `#inquiry-success` div, hide form
5. Scroll success state into view

**Real-time validation:** Add `blur` event listener on each field to validate immediately when user leaves the field (better UX than waiting for submit).

---

### Task 5.9 — marquee.js — Pause on Hover

The marquee CSS handles animation. JS only adds the pause-on-hover behavior (CSS `animation-play-state` is controlled via a class):

```javascript
function initMarquee() {
  const tracks = document.querySelectorAll('.marquee-track, .clients-marquee__track');
  tracks.forEach(track => {
    track.addEventListener('mouseenter', () => {
      track.querySelectorAll('[class*="content"]').forEach(el => {
        el.style.animationPlayState = 'paused';
      });
    });
    track.addEventListener('mouseleave', () => {
      track.querySelectorAll('[class*="content"]').forEach(el => {
        el.style.animationPlayState = 'running';
      });
    });
  });
}
```

---

### Task 5.10 — Image Error Fallback

Add to `main.js` after DOMContentLoaded:

```javascript
// Broken image fallback
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
    this.src = 'assets/images/products/placeholder.svg';
    this.alt = 'Image unavailable';
  }, { once: true });
});
```

---

## 10. Phase 6 — Responsive Design

**Duration:** 3–4 days | **Owner:** Developer
**Prerequisite:** All sections built; all JS working on desktop

All responsive work goes in `css/responsive.css`. Mobile-first approach: base styles are for mobile, `min-width` media queries expand for larger screens.

---

### Task 6.1 — Breakpoint Implementation

Implement the full breakpoint system from TRD Section 7.1 and Design Brief Section 6.3. For every component, verify the column counts match the grid table:

| Component | xs | sm | md | lg | xl |
|---|---|---|---|---|---|
| Products | 1 | 2 | 2 | 3 | 4 |
| Diaries | 1 | 2 | 3 | 4 | 5 |
| Printing Tech | 1 | 2 | 2 | 4 | 4 |
| Why Choose | 1 | 2 | 3 | 3 | 4 |
| Stats | 2 | 2 | 4 | 4 | 4 |
| Contact Cards | 1 | 2 | 2 | 4 | 4 |
| Footer | 1 | 2 | 2 | 4 | 4 |
| Catalog Cards | 1 | 1 | 2 | 2 | 2 |

---

### Task 6.2 — Mobile-Specific Overrides

Implement all mobile behaviors from Design Brief Section 10.2:

```css
/* Mobile: hide hero visual */
@media (max-width: 767px) {
  .hero__slide-visual { display: none; }
  .hero__slide-content { grid-template-columns: 1fr; }
}

/* Mobile: vertical steps */
@media (max-width: 767px) {
  .steps { flex-direction: column; }
  .steps__connector { display: none; }
}

/* Mobile: full-width modal */
@media (max-width: 767px) {
  .modal-overlay { padding: 0; align-items: flex-end; }
  .modal { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
  .modal__body { grid-template-columns: 1fr; }
}

/* Mobile: stacked catalog cards */
@media (max-width: 767px) {
  .catalogs-grid { grid-template-columns: 1fr; }
}

/* Hover effects — desktop only */
@media (hover: none) {
  .product-card:hover,
  .why-card:hover,
  .diary-card:hover { transform: none; box-shadow: none; }
}

/* Form inputs: 16px minimum on mobile (prevents iOS zoom) */
@media (max-width: 767px) {
  .form-input { font-size: 16px; }
}
```

---

### Task 6.3 — Typography Responsive Scaling

Apply `clamp()` for fluid type sizing:

```css
.hero__title      { font-size: clamp(36px, 6vw, 80px); }
.section-header__title { font-size: clamp(28px, 4vw, 52px); }
.product-card__name    { font-size: clamp(16px, 2vw, 20px); }
.stat-number           { font-size: clamp(40px, 5vw, 64px); }
```

---

### Task 6.4 — Safe Area & Notch Handling

Apply iOS safe area to floating WA button (Task 2.3 already includes this). Also apply to fixed footer content if applicable.

---

### Task 6.5 — Cross-Device Visual QA

Using browser DevTools device emulation, test every section at:
- 375px (iPhone SE)
- 390px (iPhone 14)
- 360px (Android mid-range)
- 768px (iPad)
- 1024px (iPad Pro / small desktop)
- 1280px (standard desktop)
- 1920px (full HD)

**For each device, verify:**
- [ ] No horizontal scroll
- [ ] No text overflow
- [ ] All buttons are tap-friendly (≥44px)
- [ ] Floating WA button visible and not clipped
- [ ] Hero text readable at all sizes
- [ ] Modal works correctly (full-screen on mobile)

---

## 11. Phase 7 — Performance & SEO

**Duration:** 2–3 days | **Owner:** Developer

---

### Task 7.1 — Image Optimization

**For every image in the project:**

1. Convert to WebP using Squoosh, ImageMagick, or similar:
```bash
# Using cwebp (install: brew install webp)
cwebp -q 80 round-neck-tshirt.jpg -o round-neck-tshirt.webp
```

2. Verify sizes meet TRD Section 8.3 budgets:
   - Hero images: ≤150KB each
   - Product thumbnails: ≤80KB each
   - Diary images: ≤80KB each

3. Ensure all `<img>` tags have:
   - `width` and `height` attributes (prevents CLS)
   - `loading="lazy"` (except hero images: `loading="eager"`)
   - `alt` text that describes the image for screen readers
   - Wrapped in `<picture>` with `<source type="image/webp">` fallback

4. Create `assets/images/og-image.jpg` — 1200×630px for social sharing

---

### Task 7.2 — Favicon Package

Generate full favicon package from the Modish M monogram logo:

```
assets/favicon/
├── favicon.ico        (32×32, multi-size ICO)
├── favicon-16.png     (16×16)
├── favicon-32.png     (32×32)
├── apple-touch-icon.png (180×180, no transparency)
└── site.webmanifest
```

Use **RealFaviconGenerator.net** with the Modish M monogram on a yellow background.

**site.webmanifest:**
```json
{
  "name": "Modish – Custom Merchandise",
  "short_name": "Modish",
  "description": "Custom T-Shirts, Hoodies, Corporate Gifts in Mumbai",
  "start_url": "/",
  "display": "browser",
  "background_color": "#FFFFFF",
  "theme_color": "#F5C400",
  "icons": [
    { "src": "/assets/favicon/favicon-32.png", "sizes": "32x32", "type": "image/png" },
    { "src": "/assets/favicon/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
  ]
}
```

---

### Task 7.3 — SEO Implementation

#### 7.3.1 Structured Data Validation
Verify the LocalBusiness JSON-LD in `<head>` (added in Phase 1) using Google's Rich Results Test: `search.google.com/test/rich-results`

#### 7.3.2 Heading Hierarchy Audit
Run through the page and verify:
- Exactly ONE `<h1>` (hero headline)
- One `<h2>` per section (section titles)
- `<h3>` for card titles, never skipping a level

#### 7.3.3 Alt Text Audit
Check every `<img>` has descriptive `alt` text. Decorative images use `alt=""`.

#### 7.3.4 Sitemap
Update `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.modish.in/</loc>
    <lastmod>2026-05-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

#### 7.3.5 robots.txt
Create at root:
```
User-agent: *
Allow: /
Sitemap: https://www.modish.in/sitemap.xml
```

---

### Task 7.4 — Google Analytics Setup

Add GA4 tracking snippet to `<head>` in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

> **Note:** Replace `GA_MEASUREMENT_ID` with Modish team's actual GA4 Property ID.

**Event tracking — add to relevant JS modules:**

```javascript
// In form.js — on successful submit
gtag('event', 'inquiry_form_submit', { event_category: 'conversion' });

// In modal.js — on modal open
gtag('event', 'modal_open', { product_name: productKey });

// Add to each WA link as data attribute, tracked on click:
document.querySelectorAll('[data-ga-event]').forEach(el => {
  el.addEventListener('click', () => {
    gtag('event', el.getAttribute('data-ga-event'), { event_category: 'conversion' });
  });
});
```

**Add `data-ga-event` attributes to all major CTAs:**
| Element | `data-ga-event` |
|---|---|
| Header WhatsApp button | `wa_click_header` |
| Hero CTA WhatsApp | `wa_click_hero` |
| Each product card WA | `wa_click_product` |
| Floating WA button | `wa_click_floating` |
| WA CTA section | `wa_click_cta_section` |
| Clothing catalog link | `catalog_download_clothing` |
| Diary catalog link | `catalog_download_diary` |

---

### Task 7.5 — Performance Audit

Run **Google PageSpeed Insights** on the Netlify staging URL.

**Targets (from PRD Section 13 KPIs):**
- LCP: < 2.5s
- CLS: < 0.1
- FCP: < 1.5s
- Mobile score: > 80
- Desktop score: > 90

**Common fixes:**
- If LCP is slow: ensure hero image has `fetchpriority="high"` and `loading="eager"`
- If CLS is high: ensure all `<img>` have `width` and `height` attributes
- If fonts cause render-blocking: verify `rel="preconnect"` and `display=swap` are on Google Fonts link
- If JS is render-blocking: ensure `<script defer>` on all JS files

---

## 12. Phase 8 — Testing & QA

**Duration:** 4–5 days | **Owner:** Developer + Project Owner

Use the complete Pre-Launch Testing Checklist from TRD Section 16.1.

---

### Task 8.1 — Functional Testing

Work through **every item** in TRD Section 16.1 Functional Tests:

```
NAVIGATION & SCROLL
[ ] All 6 nav links scroll to correct sections
[ ] Smooth scroll behavior works (not jump)
[ ] Active nav link updates on scroll
[ ] Header shadow appears on scroll past 50px
[ ] Hamburger opens mobile menu
[ ] Mobile menu closes on link click
[ ] Mobile menu closes on × button click

HERO SLIDER
[ ] Slides auto-advance every 4.5 seconds
[ ] Slides pause on mouseenter
[ ] Slides resume on mouseleave
[ ] Dot navigation changes to correct slide
[ ] Touch swipe left → next slide (mobile)
[ ] Touch swipe right → previous slide (mobile)
[ ] ARIA attributes update on slide change

PRODUCT SECTION
[ ] All 7 product cards render correctly
[ ] "View Details" opens correct modal for each card
[ ] Modal populated with correct product data
[ ] Modal closes on X button click
[ ] Modal closes on overlay click
[ ] Modal closes on ESC key
[ ] Body scroll locked while modal open
[ ] Focus moves to modal on open
[ ] Focus returns to trigger button on close
[ ] WhatsApp button on each card opens WA with correct pre-filled message
[ ] Modal WhatsApp button opens WA with product name in message
[ ] Modal catalog button opens PDF in new tab

STATS COUNTER
[ ] Numbers are 0 on page load
[ ] Numbers animate when #stats enters viewport
[ ] Animation uses easeOut (decelerates near end)
[ ] Does NOT re-animate if you scroll away and back

INQUIRY FORM
[ ] Required fields show errors on empty submit
[ ] Phone validates: must start with 6-9, be 10 digits
[ ] Phone rejects: 1234567890 (starts with 1), 987654321 (9 digits)
[ ] Email validates format if entered (optional field)
[ ] Product dropdown required
[ ] Quantity required, must be ≥ 1
[ ] City required
[ ] On valid submit: Google Form opens in new tab
[ ] On valid submit: Success state shows on page
[ ] Real-time validation: error shows on field blur

FAQ ACCORDION
[ ] Each question expands on click
[ ] Expanded question shows − icon; closed shows + icon
[ ] Previous question closes when new one opens
[ ] Keyboard accessible: Enter and Space toggle

WHATSAPP LINKS
[ ] Header WhatsApp button opens WA with "know more" message
[ ] Hero CTA opens WA with "order" message
[ ] Floating button opens WA with "help" message
[ ] WA CTA section opens WA with "bulk quote" message
[ ] All links open in new tab with rel="noopener noreferrer"

CATALOG LINKS
[ ] Clothing catalog opens tinyurl.com/Modish-now in new tab
[ ] Diary catalog opens tinyurl.com/Diary-modish in new tab
[ ] Both links verified to be working (not 404)

MARQUEE TICKERS
[ ] Offer ticker scrolls continuously
[ ] Client chip ticker scrolls continuously
[ ] Both pause on hover (desktop)

FLOATING WA BUTTON
[ ] Always visible in bottom-right corner
[ ] Pulse animation running
[ ] Correct link with pre-filled message
[ ] Tooltip shows on hover (desktop)
[ ] Never covered by other elements
```

---

### Task 8.2 — Responsive & Cross-Device Testing

Test the full page at each device in TRD Section 10.3. Use Chrome DevTools device emulation for initial testing, then test on real devices if available.

**Priority devices:**
- iPhone SE (375px) — smallest supported mobile
- iPhone 14 Pro (393px) — most common iOS size in India
- Samsung Galaxy S23 (360px) — common Android size
- iPad (820px) — tablet
- Desktop 1280px
- Desktop 1920px

For each device:
- [ ] No horizontal scroll (set `overflow: auto` on body and check scrollWidth = clientWidth)
- [ ] Hero fills viewport height minus header
- [ ] Product grid columns correct
- [ ] Modal is full-screen on mobile, centered on desktop
- [ ] Floating WA button not clipped by browser chrome
- [ ] All text readable without zooming
- [ ] All tap targets ≥ 44px

---

### Task 8.3 — Cross-Browser Testing

Test in all browsers from TRD Section 10.1:

| Browser | Version | Check |
|---|---|---|
| Chrome (Android) | Latest | [ ] |
| Chrome (Desktop) | Latest | [ ] |
| Safari (iOS) | Latest | [ ] |
| Safari (macOS) | Latest | [ ] |
| Firefox | Latest | [ ] |
| Edge | Latest | [ ] |
| Samsung Internet | Latest | [ ] |

**Common browser-specific issues to watch for:**
- Safari: `backdrop-filter` may need `-webkit-` prefix for blur effects
- Safari iOS: form input font size must be ≥16px or keyboard zoom occurs
- Firefox: `scroll-behavior: smooth` may need polyfill check
- Samsung Internet: test marquee animation performance

---

### Task 8.4 — Accessibility Audit

Use **axe DevTools** browser extension or WAVE tool:

1. Install axe DevTools extension → Run on the page
2. Fix all **Violations** (critical errors) before launch
3. Review **Best Practices** and fix where feasible

**Manual checks:**
- [ ] Tab through entire page without mouse — all elements reachable in logical order
- [ ] Focus ring visible on all interactive elements (yellow outline)
- [ ] Modal: Tab cannot leave modal while it's open
- [ ] Hero slider: screen reader can navigate slides via dots
- [ ] FAQ: `aria-expanded` toggles correctly on keyboard
- [ ] Images: all have descriptive alt text
- [ ] Form: all inputs have labels, errors announce via `aria-live`
- [ ] Color-only information: error state uses text + border color (not color alone)

---

### Task 8.5 — Link Verification

Check every external link is working:
- [ ] `wa.me/919136867622` — WhatsApp opens
- [ ] `tinyurl.com/Modish-now` — PDF opens
- [ ] `tinyurl.com/Diary-modish` — PDF opens
- [ ] `forms.gle/LyAS3k5qw1QpGVQ48` — Google Form opens
- [ ] `instagram.com/modish.now` — Instagram opens
- [ ] `mailto:modish.new@gmail.com` — email client opens

---

### Task 8.6 — Content Review

With Modish team, walk through every section:
- [ ] All product names and specs are correct
- [ ] All diary names are correct
- [ ] Stat numbers are approved
- [ ] FAQ answers are complete and accurate
- [ ] Brand story is approved
- [ ] Contact details are correct
- [ ] Real photos are in place (not placeholders)
- [ ] Copyright year is correct (© 2025 or 2026?)
- [ ] Working hours are confirmed

---

### Task 8.7 — Final Performance Check

Before launch, run PageSpeed Insights one more time (with real images in place):
- [ ] Mobile score > 80
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] No render-blocking resources

---

## 13. Phase 9 — Launch

**Duration:** 1–2 days | **Owner:** Developer + Project Owner

---

### Task 9.1 — Domain Connection

**Steps (if not done in Phase 0):**

1. Purchase domain (if not yet): GoDaddy / BigRock / Namecheap (recommend: `modish.in`)
2. In Netlify → Site Settings → Domain Management → Add custom domain
3. Update DNS at registrar:
   ```
   A     @    75.2.60.5
   CNAME www  [your-site].netlify.app
   ```
4. Wait for DNS propagation (up to 48 hours, usually < 2 hours)
5. Verify: `www.modish.in` loads correctly
6. Enable HTTPS: Netlify auto-provisions Let's Encrypt certificate
7. Enable "Force HTTPS" in Netlify settings
8. Verify: `http://modish.in` redirects to `https://www.modish.in`

---

### Task 9.2 — Pre-Launch Final Checklist

```
FINAL GO-LIVE CHECKLIST

DOMAIN & HOSTING
[ ] Custom domain connected and resolving correctly
[ ] HTTPS enabled; certificate active
[ ] HTTP → HTTPS redirect working
[ ] modish.in → www.modish.in redirect working
[ ] Netlify headers (security headers) active

ANALYTICS
[ ] Google Analytics GA4 snippet in <head>
[ ] GA4 Property ID is correct (not placeholder)
[ ] Test event fires in GA4 DebugView
[ ] WhatsApp click event fires when tested
[ ] Catalog download event fires when tested

SEO
[ ] <title> contains primary keywords
[ ] Meta description present (150–160 chars)
[ ] Canonical URL matches www.modish.in
[ ] OG image accessible at /assets/images/og-image.jpg
[ ] JSON-LD structured data validates (Rich Results Test)
[ ] sitemap.xml accessible at /sitemap.xml
[ ] robots.txt accessible at /robots.txt

CONTENT
[ ] All placeholder images replaced with real product photos
[ ] All placeholder stats replaced with real numbers
[ ] All FAQ answers are complete
[ ] Brand story is finalized
[ ] Contact details are correct and tested
[ ] Copyright year is current

FUNCTIONALITY (Quick Smoke Test)
[ ] Hero slider auto-advances
[ ] One product modal opens and closes correctly
[ ] Form validation triggers on empty submit
[ ] One WhatsApp link opens WA with correct message
[ ] Catalog link opens PDF
[ ] FAQ accordion expands/collapses
[ ] Floating WA button visible and working

PERFORMANCE
[ ] PageSpeed mobile > 80
[ ] No console errors in browser DevTools
[ ] No broken image errors

MOBILE
[ ] Site works on an actual iPhone and Android device
[ ] WhatsApp links open the WA app (not browser)

SIGN-OFF
[ ] Project Owner (Modish team) has reviewed and approved
[ ] Developer confirms all checklist items pass
```

---

### Task 9.3 — Launch Announcement

Once live:
1. Share `https://www.modish.in` with Modish team
2. Modish team updates Instagram bio link to website
3. Modish team shares website link in WhatsApp Business profile
4. Optional: Modish team posts on Instagram announcing the new website

---

### Task 9.4 — Google Search Console Setup

1. Go to `search.google.com/search-console`
2. Add property: `https://www.modish.in`
3. Verify via HTML tag method (add to `<head>`)
4. Submit sitemap: `https://www.modish.in/sitemap.xml`
5. Check for crawl errors after 48 hours

---

## 14. Phase 10 — Post-Launch

**Duration:** Ongoing (Week 9–10+) | **Owner:** Project Owner + Developer (on call)

---

### Task 10.1 — KPI Monitoring (Week 1–4 Post-Launch)

Monitor all KPIs from PRD Section 13 in Google Analytics. Review weekly initially, then monthly:

| KPI | Target (3 months) | Measurement Tool |
|---|---|---|
| Monthly WhatsApp Clicks | 100+ clicks/month | GA4 Event |
| Catalog Views | 50+ views/month | GA4 Event + tinyurl analytics |
| Inquiry Form Submissions | 20+ submissions/month | Google Forms responses |
| Organic Traffic | 200+ monthly visitors | GA4 + Search Console |
| Bounce Rate | < 60% | GA4 |
| Avg. Session Duration | > 1m 30s | GA4 |
| Mobile Traffic Share | > 65% | GA4 |

---

### Task 10.2 — Bug Fix Window (Week 1–2 Post-Launch)

**Any bugs reported by Modish team or found in live testing:**
- Priority 1 (broken functionality, broken links): fix within 24 hours
- Priority 2 (visual inconsistencies, responsive issues): fix within 72 hours
- Priority 3 (minor copy changes, image swaps): batch and deploy within 1 week

---

### Task 10.3 — Content Updates

Regular maintenance tasks for Modish team:
- Update stat numbers as they grow
- Add new client names to trusted clients marquee
- Add new FAQ items if common questions emerge
- Update working hours / contact details if they change
- Swap out hero images for seasonal campaigns

> **Developer note:** Create a simple "Content Update Guide" (1-page doc) showing Modish team exactly which lines of `index.html` to edit for each type of content change.

---

### Task 10.4 — V2 Planning

Based on KPI data and user feedback from Months 1–3, plan V2 features:

| V2 Feature | Trigger for Building |
|---|---|
| Individual product pages (`/products/oversized-tshirt`) | If organic traffic grows and SEO opportunity is clear |
| Admin CMS for product management | If Modish team wants to update products without developer |
| Live Instagram feed embed | When Instagram Basic Display API access is confirmed |
| Customer testimonials / reviews | When Modish has collected 5+ written reviews |
| WhatsApp Community join button | If community engagement becomes a priority |
| Hindi language version | If significant non-English traffic is detected |
| Custom quotation calculator | If inquiry form conversations reveal consistent need |

---

## 15. Content & Asset Collection Tracker

### 15.1 Content Status Table

| # | Item | Required By | Owner | Status |
|---|---|---|---|---|
| C1 | Brand wordmark SVG + PNG (all variants) | Phase 1 | Modish | ⏳ Pending |
| C2 | Brand story (100–150 words) | Phase 4 | Modish | ⏳ Pending |
| C3 | 4 Core values (name + 1-liner each) | Phase 4 | Modish | ⏳ Pending |
| C4 | Working hours | Phase 3 | Modish | ⏳ Pending |
| C5 | Stats numbers (4 figures) | Phase 4 | Modish | ⏳ Pending |
| C6 | FAQ answers (8+ answers) | Phase 4 | Modish | ⏳ Pending |
| C7 | Contact details confirmation | Phase 2 | Modish | ⏳ Pending |
| C8 | Product photos (7 products × 1–3) | Phase 3 | Modish | ⏳ Pending |
| C9 | Hero banner images (4 images) | Phase 3 | Modish | ⏳ Pending |
| C10 | Diary photos (10 models × 1–2) | Phase 3 | Modish | ⏳ Pending |
| C11 | Client logos (8, PNG transparent) | Phase 4 | Modish | ⏳ Pending |
| C12 | Print sample photos (3–5) | Phase 4 | Modish | ⏳ Pending |
| C13 | About/team/workspace photos (optional) | Phase 4 | Modish | ⏳ Pending |

### 15.2 Asset Acceptance Criteria

| Asset Type | Min Resolution | Max File Size | Format |
|---|---|---|---|
| Hero images | 1920 × 1080px | 1MB (pre-conversion) | JPG or PNG |
| Product photos | 800 × 800px | 500KB (pre-conversion) | JPG or PNG |
| Diary photos | 800 × 800px | 500KB (pre-conversion) | JPG or PNG |
| Client logos | 400 × 200px | 50KB | PNG (transparent) or SVG |
| Brand logo | Vector | N/A | AI, EPS, or SVG preferred |
| Brand story | 100–150 words | N/A | Plain text or Google Doc |

---

## 16. Risk Register

| # | Risk | Probability | Impact | Mitigation |
|---|---|---|---|---|
| R1 | Product photos not delivered on time | High | High | Develop with SVG placeholders; swap real images in Phase 8 |
| R2 | Stats numbers not confirmed | Medium | Low | Use placeholder values (500+, 200+, etc.); easy to update |
| R3 | Domain not yet purchased/transferred | Medium | High | Development proceeds on Netlify staging URL; domain connected in Phase 9 |
| R4 | Google Forms changes its URL | Low | Medium | Test form redirect monthly; if URL changes, update one constant in form.js |
| R5 | WhatsApp number changes | Low | High | All WA URLs stored as a single constant in JS; easy one-line update |
| R6 | tinyurl catalog links break | Medium | Medium | Add backup direct PDF hosting; update links in 3 places (HTML + form.js) |
| R7 | Font CDN (Google Fonts) fails | Very Low | Low | Font fallback stack defined in CSS variables; site remains readable |
| R8 | Netlify free tier limits hit | Low | Low | 100GB bandwidth/month free; switch to paid if >50K visitors/month |
| R9 | Instagram API changes for live feed | N/A | N/A | Not in V1 scope; live feed deferred to V2 |
| R10 | Project scope creep (new sections/features) | Medium | High | Strictly follow PRD V1 scope; document new requests for V2 backlog |

---

## 17. Open Questions Tracker

From PRD Section 16 + new questions raised during implementation planning:

| # | Question | Owner | Priority | Status |
|---|---|---|---|---|
| Q1 | What are the actual stats numbers? | Modish | 🟡 Medium | ⏳ Pending |
| Q2 | Will product photos be available before Phase 3? | Modish | 🔴 High | ⏳ Pending |
| Q3 | What is the domain name? (modish.in?) | Modish | 🔴 High | ⏳ Pending |
| Q4 | Should inquiry form embed Google Form or use redirect? | Modish | 🟡 Medium | Decided: Redirect (per TRD) |
| Q5 | Are client logos available? | Modish | 🟡 Medium | ⏳ Pending |
| Q6 | Should product pricing be shown on the website? | Modish | 🟡 Medium | ⏳ Pending |
| Q7 | What is the preferred hosting? | Modish | 🟡 Medium | Decided: Netlify |
| Q8 | Any additional product categories? | Modish | 🟢 Low | ⏳ Pending |
| Q9 | Should T&C page be standalone? | Modish | 🟢 Low | ⏳ Pending |
| Q10 | What working hours should be displayed? | Modish | 🟡 Medium | ⏳ Pending |
| Q11 | What is the GA4 Property ID? | Modish | 🔴 High | ⏳ Pending |
| Q12 | What year to use in copyright? 2025 or 2026? | Modish | 🟢 Low | ⏳ Pending |
| Q13 | Should FAQ be one-at-a-time or multiple-open accordion? | Modish | 🟢 Low | ⏳ Pending |
| Q14 | Should the Accessories card have a "Coming Soon" badge? | Modish | 🟢 Low | ⏳ Pending |
| Q15 | Should Location card in Contact open Google Maps? | Modish | 🟢 Low | ⏳ Pending |

---

## 18. Definition of Done

A phase is complete only when **all** of the following are true for that phase:

### Phase-Level DoD

| Check | Meaning |
|---|---|
| Code committed | All work is committed to Git with descriptive commit messages |
| Deployed to staging | Netlify staging URL reflects the latest build |
| Self-reviewed | Developer has reviewed their own work in the browser |
| No console errors | Browser DevTools shows zero JS errors or CSS warnings |
| Stakeholder review | Project Owner has reviewed and approved the phase |

### Section-Level DoD (for each of the 16 sections)

| Check | Meaning |
|---|---|
| HTML correct | Semantic structure, ARIA labels, heading hierarchy correct |
| CSS matches design | Colors, typography, spacing match Design Brief specs |
| Responsive | Verified at xs/sm/md/lg/xl breakpoints |
| Interactive states | Hover, focus, active states implemented |
| ARIA complete | All interactive elements have correct ARIA attributes |
| Links work | All internal anchors and external links tested |
| Images optimized | WebP format, correct dimensions, lazy loading |
| Content final | Real content (not placeholder) approved by Modish team |

### Final Launch DoD

| Check | Meaning |
|---|---|
| Full QA pass | Every item in Phase 8 testing checklist passes |
| Performance targets met | PageSpeed mobile > 80, LCP < 2.5s, CLS < 0.1 |
| Accessibility pass | Zero axe violations; manual keyboard test passes |
| Content approved | Modish team has signed off on all copy and images |
| Analytics tracking | GA4 events verified in DebugView |
| Domain live | Custom domain with HTTPS resolving correctly |
| Project Owner sign-off | Final approval received from Modish team |

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Implementation Plan | Initial plan derived from PRD v1.0, TRD v1.0, Design Brief v1.0, Web Flow |

---

*This Implementation Plan is the operational blueprint for building the Modish website. All development work should follow the phase sequence and task specifications in this document. Deviations require documentation and approval before proceeding. Questions about any task should be raised in the team communication channel before implementation, not after.*
