# Product Requirements Document (PRD)
## Modish — Official Website
**Version:** 1.0  
**Prepared By:** Claude (Anthropic)  
**Status:** Draft — Awaiting Review  
**Last Updated:** May 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Business Goals & Objectives](#2-business-goals--objectives)
3. [Target Audience](#3-target-audience)
4. [Website Type & Scope](#4-website-type--scope)
5. [Sitemap & Page Structure](#5-sitemap--page-structure)
6. [Section-Level Feature Requirements](#6-section-level-feature-requirements)
7. [Functional Requirements](#7-functional-requirements)
8. [Design & Brand Requirements](#8-design--brand-requirements)
9. [Content Requirements](#9-content-requirements)
10. [Technical Requirements](#10-technical-requirements)
11. [Integrations](#11-integrations)
12. [SEO Requirements](#12-seo-requirements)
13. [Success Metrics (KPIs)](#13-success-metrics-kpis)
14. [Out of Scope](#14-out-of-scope)
15. [Assumptions & Constraints](#15-assumptions--constraints)
16. [Open Questions](#16-open-questions)

---

## 1. Project Overview

### 1.1 Brand Summary

| Field | Details |
|---|---|
| **Brand Name** | Modish |
| **Tagline** | Wear Your Mood |
| **Industry** | Custom Merchandise, Apparel Printing, Corporate Gifting |
| **Location** | Mumbai, India |
| **Service Area** | Pan India |
| **Instagram** | @modish.now |
| **WhatsApp** | +91 91368 67622 |
| **Email** | modish.new@gmail.com |

### 1.2 What Is Being Built

A **catalog + inquiry + lead generation website** that acts as Modish's primary digital presence. The website is NOT an e-commerce store with a shopping cart or payment gateway. It is a **digital product showroom** where visitors discover products, explore specifications, download catalogs, and initiate purchase conversations via WhatsApp or an inquiry form.

### 1.3 One-Line Definition

> A mobile-friendly, fast-loading catalog website that showcases Modish's full product range and converts visitors into qualified WhatsApp inquiries and sales leads.

---

## 2. Business Goals & Objectives

### 2.1 Primary Goals

| # | Goal | Why It Matters |
|---|---|---|
| G1 | Increase WhatsApp inquiries and order-related conversations | WhatsApp is the primary sales channel |
| G2 | Showcase the full product catalog (apparel + diaries + accessories) | Visitors need to discover the full range before inquiring |
| G3 | Generate qualified leads through the inquiry form | Captures name, number, product interest for follow-up |
| G4 | Enable catalog downloads (PDF) | Buyers share catalogs internally before ordering |

### 2.2 Secondary Goals

| # | Goal |
|---|---|
| G5 | Build brand credibility through client logos, stats, and portfolio |
| G6 | Support bulk/B2B buyers with relevant information |
| G7 | Improve SEO presence for keywords like "Custom T-Shirts Mumbai" |
| G8 | Serve as a shareable link when promoting on Instagram/WhatsApp |
| G9 | Reduce repetitive questions by providing product specs, MOQ, FAQs |

---

## 3. Target Audience

### 3.1 Primary Audiences

#### Audience A — Individual / Personal Buyer (B2C)
- **Who:** Students, individuals wanting custom printed apparel or gifts
- **Need:** Quick info on product quality, printing options, how to order
- **Behavior:** Mobile-first, Instagram-driven discovery, WhatsApp-comfortable
- **Decision Driver:** Design quality + affordability + ease of ordering

#### Audience B — Small Business / Startup (B2B Small)
- **Who:** Startup founders, small business owners, influencers
- **Need:** Custom branded merchandise, promotional products
- **Behavior:** Browses catalog, checks specifications, sends WhatsApp inquiry
- **Decision Driver:** Brand alignment + quality + pricing + turnaround time

#### Audience C — Corporate / Institutional Buyer (B2B Large)
- **Who:** HR managers, event coordinators, college fest organizers, NGOs
- **Need:** Bulk orders of custom apparel or corporate-gifting diaries
- **Behavior:** Downloads catalog, wants to see past clients, submits formal inquiry
- **Decision Driver:** Past clients + quality assurance + bulk pricing + reliability

### 3.2 Secondary Audiences

- **Colleges & Educational Institutions** — College fest merch, sports team uniforms
- **Fitness Brands & Gyms** — Custom gym vests and sports apparel
- **Event Management Companies** — Event-specific merchandise

---

## 4. Website Type & Scope

### 4.1 Website Classification

| Attribute | Definition |
|---|---|
| **Type** | Catalog + Inquiry + Lead Generation |
| **NOT** | E-commerce (no cart, no payment, no accounts) |
| **Structure** | Single-page scrollable homepage + category/product detail sections |
| **Device Priority** | Mobile-first, fully responsive |

### 4.2 Scope Summary

**In Scope:**
- Full homepage with all catalog sections
- Product listing and detail views (modal or dedicated page)
- Inquiry/quote request form
- Catalog PDF download pages
- About, FAQ, Contact sections
- WhatsApp integration throughout
- SEO-optimized pages

**Out of Scope (V1):**
- Shopping cart / checkout
- Payment gateway (Razorpay, Stripe, etc.)
- User login / accounts
- Live chat widget (other than WhatsApp)
- Admin CMS / product management panel *(can be added in V2)*
- Blog / content marketing section
- Instagram live feed *(can be added once API access is confirmed)*

---

## 5. Sitemap & Page Structure

```
modish.in (or chosen domain)
│
├── / (Homepage — one long scroll)
│   ├── Header (sticky navigation)
│   ├── Hero Banner (auto-sliding)
│   ├── Marquee Offer Ticker
│   ├── Product Categories
│   ├── Why Choose Modish
│   ├── How It Works (5 steps)
│   ├── Printing Technologies
│   ├── Stats Counter
│   ├── Diaries & Corporate Gifting
│   ├── Trusted Clients
│   ├── Download Catalogs
│   ├── Inquiry / Quote Form
│   ├── WhatsApp CTA
│   ├── About Modish
│   ├── FAQ
│   ├── Contact
│   └── Footer
│
├── /products (or scroll anchor to products section)
│   └── Individual product detail modals (overlay on homepage)
│
├── /diaries (or scroll anchor to diaries section)
│
├── /catalogs (Catalog download page)
│
├── /about (About page or scroll anchor)
│
└── /contact (Contact page or scroll anchor)
```

> **Note:** V1 can be a single-page design with smooth scroll anchors. Dedicated subpages (e.g., `/products/oversized-tshirt`) can be added in V2 for SEO benefits.

---

## 6. Section-Level Feature Requirements

Each section below is a required block of the homepage.

---

### 6.1 Header (Always Visible — Sticky)

| Element | Requirement |
|---|---|
| Logo | Modish wordmark (text-based logo + dot accent) |
| Tagline | "Wear Your Mood" beneath logo |
| Navigation Links | Home · Products · Diaries · Services · About · Contact |
| WhatsApp Button | Opens WhatsApp chat — always visible in header |
| Get Quote Button | Scrolls to or opens the inquiry form |
| Mobile Hamburger | Collapsible menu on mobile |
| Sticky behavior | Stays fixed on scroll; adds shadow on scroll |
| Active link highlight | Current section highlighted in nav |

**Priority:** 🔴 High

---

### 6.2 Hero Banner (Auto-Sliding)

| Element | Requirement |
|---|---|
| Slides | Minimum 4 slides, auto-changing every 4–5 seconds |
| Slide Content | Headline + subheading + 2 CTA buttons + product visual |
| Slide Themes | Alternate between Yellow and Black backgrounds |
| Slide Topics | (1) Custom T-Shirts, (2) Bulk Orders, (3) Corporate Diaries, (4) Merchandise |
| Navigation Dots | Clickable dots for manual slide navigation |
| CTA Buttons per slide | "Browse Catalog" + "WhatsApp Now" (or contextual CTAs) |
| Auto-play | Yes, with pause-on-hover behavior |

**Priority:** 🔴 High

---

### 6.3 Marquee Offer Ticker

| Element | Requirement |
|---|---|
| Style | Full-width scrolling black bar |
| Content | Rotating offer messages (e.g., "Bulk Order Discounts · Free Design Support · Pan India Delivery · DTF Printing Available · Custom T-Shirts · Event Merchandise") |
| Speed | Continuous left-scroll, smooth |
| Pause on hover | Yes |

**Priority:** 🟡 Medium

---

### 6.4 Product Categories Grid

| Element | Requirement |
|---|---|
| Categories | Round Neck T-Shirt, Oversized T-Shirt, Polo T-Shirt, Hoodie, Gym Vest, Tote Bag, Accessories (Coasters/Magnets/Mousepads/Keychains) |
| Card Contents | Product visual, name, key spec chips (GSM, material), color swatches, "View Details" button, "WhatsApp Inquiry" button |
| Interaction | Clicking "View Details" opens a product detail modal |
| Layout | Responsive grid (4 columns desktop → 2 columns tablet → 1 column mobile) |

**Priority:** 🔴 High

---

### 6.5 Product Detail Modal

| Element | Requirement |
|---|---|
| Trigger | "View Details" button on product card |
| Content | Product name, product visual, full specifications, available colors, best-use cases, printing options |
| Actions | "Download Catalog" button, "WhatsApp Inquiry" button |
| Close behavior | Click outside modal or X button |
| Mobile | Full-screen modal on mobile |

**Priority:** 🔴 High

---

### 6.6 Why Choose Modish

| Element | Requirement |
|---|---|
| Layout | Icon card grid (6–7 cards) |
| Cards | Premium Quality · Multiple Printing Technologies · Digital Mockups · Quality Check · Pan India Delivery · Transparent Process · Competitive Pricing |
| Hover effect | Card highlights on hover |

**Priority:** 🟡 Medium

---

### 6.7 How It Works (Process Steps)

| Element | Requirement |
|---|---|
| Steps | 5 steps: Send Design → Mockup → Production → Quality Check → Delivery |
| Layout | Horizontal steps with connector line (desktop), vertical stack (mobile) |
| Visuals | Step numbers, icons, short descriptions |

**Priority:** 🟡 Medium

---

### 6.8 Printing Technologies

| Element | Requirement |
|---|---|
| Technologies | DTF Printing, Screen Printing, Embroidery, Sublimation Printing |
| Card Content | Name, best-for use cases, benefits |
| Layout | 4-column card grid |

**Priority:** 🟡 Medium

---

### 6.9 Stats Counter

| Element | Requirement |
|---|---|
| Background | Yellow (#F5C400) full-width bar |
| Stats | Orders Completed · Happy Customers · Cities Delivered · Products Printed |
| Animation | Numbers count up when section enters viewport |
| Values | To be confirmed by Modish team (placeholder values in V1) |

**Priority:** 🟡 Medium

---

### 6.10 Diaries & Corporate Gifting Section

| Element | Requirement |
|---|---|
| Background | Dark/black section for visual contrast |
| Products | Elasto, Loopify, Cork, Trinity, Magneto, Trio, Mobilo, Clutch, Epitome, Coffee Cork |
| Card Content | Diary name, key features (closure type, material), best-for tags |
| Gift Sets | Mention gift set options (Elasto, Loopify, Magneto, Trio, Mobilo gift sets) |
| CTA | "View Diary Catalog" → links to `https://tinyurl.com/Diary-modish` |

**Priority:** 🔴 High

---

### 6.11 Trusted Clients

| Element | Requirement |
|---|---|
| Style | Horizontal scrolling chip marquee |
| Clients to Display | Chandrabhan Sharma College · Empower · Agam Yoga · Graaura · Gurukrupa Catering · Vatika · Kid's Tutorial · Azz Diagnostic |
| Layout | Logo chips/badges with client names, continuous scroll |

**Priority:** 🟡 Medium

---

### 6.12 Catalog Downloads

| Element | Requirement |
|---|---|
| Catalogs Available | (1) Clothing Catalog — `https://tinyurl.com/Modish-now` · (2) Diary Collection — `https://tinyurl.com/Diary-modish` |
| Card Content | Catalog name, brief description, download/view button |
| Action | Opens PDF in new tab |

**Priority:** 🔴 High

---

### 6.13 Inquiry / Quote Request Form

| Element | Requirement |
|---|---|
| Form Fields | Full Name · Mobile Number · Email · Product Required (dropdown) · Quantity · City · Message/Requirement |
| Product Dropdown Options | Round Neck T-Shirt, Oversized T-Shirt, Polo T-Shirt, Hoodie, Gym Vest, Tote Bag, Accessories, Corporate Diary, Other |
| Submit Action | Submits to `https://forms.gle/LyAS3k5qw1QpGVQ48` OR opens WhatsApp with pre-filled message |
| Validation | All required fields must be filled before submission |
| Confirmation | Show success message after submission |

**Priority:** 🔴 High

---

### 6.14 WhatsApp CTA Section

| Element | Requirement |
|---|---|
| Background | Bold yellow full-width section |
| Headline | "Need Instant Pricing?" or "Chat With Us on WhatsApp" |
| CTA Button | Large green button → opens `https://wa.me/919136867622` |
| Supporting Text | Response time message, working hours |

**Priority:** 🔴 High

---

### 6.15 About Modish

| Element | Requirement |
|---|---|
| Content | Brand story, mission, vision |
| Visual Element | Brand highlight card with logo treatment |
| Values | Show 4 core brand values as visual tiles |

**Priority:** 🟡 Medium

---

### 6.16 FAQ Section

| Element | Requirement |
|---|---|
| Questions | Minimum 8 FAQs covering: MOQ, mockups, bulk orders, delivery, printing methods, pricing, customization, returns |
| Layout | Accordion or 2-column Q&A cards |
| Expandable | Click to expand answers (accordion behavior) |

**Priority:** 🟡 Medium

---

### 6.17 Contact Section

| Element | Requirement |
|---|---|
| Contact Details | WhatsApp (+91 91368 67622), Instagram (@modish.now), Email (modish.new@gmail.com), Location (Mumbai, India) |
| Layout | Contact info cards grid |
| Links | WhatsApp opens chat, Instagram opens profile, Email opens mail client |

**Priority:** 🔴 High

---

### 6.18 Footer

| Element | Requirement |
|---|---|
| Columns | Brand info + tagline · Quick Links · Product Categories · Contact Info |
| Social Links | Instagram, WhatsApp |
| Copyright | "© 2025 Modish. All rights reserved." |
| Catalog Links | Quick download links in footer |

**Priority:** 🟡 Medium

---

### 6.19 Floating WhatsApp Button

| Element | Requirement |
|---|---|
| Behavior | Fixed bottom-right, always visible across all pages |
| Style | Green circle button with WhatsApp icon |
| Tooltip | "Chat on WhatsApp" on hover |
| Animation | Subtle pulse effect to attract attention |
| Link | `https://wa.me/919136867622` |

**Priority:** 🔴 High

---

## 7. Functional Requirements

### 7.1 Navigation & UX

| ID | Requirement | Priority |
|---|---|---|
| F1 | Smooth scroll to sections when nav links are clicked | 🔴 High |
| F2 | Active nav link updates as user scrolls through sections | 🟡 Medium |
| F3 | Back-to-top button after scrolling 500px | 🟢 Low |
| F4 | All external links open in new tab | 🔴 High |
| F5 | Page loads within 3 seconds on mobile (3G equivalent) | 🔴 High |

### 7.2 Hero Slider

| ID | Requirement | Priority |
|---|---|---|
| F6 | Auto-advances every 4–5 seconds | 🔴 High |
| F7 | Pauses on hover | 🟡 Medium |
| F8 | Manual dot navigation | 🔴 High |
| F9 | Smooth fade or slide transition | 🔴 High |

### 7.3 Product Cards & Modals

| ID | Requirement | Priority |
|---|---|---|
| F10 | Product cards display spec chips and color swatches | 🔴 High |
| F11 | Clicking "View Details" opens a modal overlay | 🔴 High |
| F12 | Modal shows full specs, colors, best-for, printing options | 🔴 High |
| F13 | Modal has "WhatsApp Inquiry" button with pre-filled product name in message | 🔴 High |
| F14 | Modal closes on overlay click or ESC key | 🟡 Medium |
| F15 | Each product card has individual WhatsApp inquiry button | 🔴 High |

### 7.4 Inquiry Form

| ID | Requirement | Priority |
|---|---|---|
| F16 | Client-side validation for all required fields | 🔴 High |
| F17 | Phone number validation (10-digit Indian number) | 🟡 Medium |
| F18 | Email validation | 🟡 Medium |
| F19 | Submission redirects to or opens Google Form | 🔴 High |
| F20 | Success confirmation message shown after submission | 🔴 High |

### 7.5 Stats Counter

| ID | Requirement | Priority |
|---|---|---|
| F21 | Numbers animate from 0 to target value on viewport entry | 🟡 Medium |
| F22 | Counter only triggers once (not re-animates on re-entry) | 🟡 Medium |

### 7.6 WhatsApp Pre-filled Messages

| Trigger Location | Pre-filled Message |
|---|---|
| Header "WhatsApp Now" | "Hi Modish! I'd like to know more about your products." |
| Hero CTA | "Hi Modish! I'm interested in placing an order." |
| Product Card (per product) | "Hi Modish! I'm interested in your [Product Name]. Can you share pricing?" |
| Floating Button | "Hi Modish! I need help with a custom order." |
| WhatsApp CTA Section | "Hi Modish! I need a quote for a bulk order." |
| Inquiry Form (alternative) | "Hi Modish! I've submitted an inquiry and would like to discuss further." |

---

## 8. Design & Brand Requirements

### 8.1 Brand Colors

| Color | HEX | Usage |
|---|---|---|
| Primary Yellow | `#F5C400` | Hero backgrounds, CTA buttons, accents, highlights, stats section |
| Primary Black | `#000000` / `#0A0A0A` | Typography, service section bg, dark cards, footer |
| White | `#FFFFFF` | Page backgrounds, card backgrounds, white text on dark |
| Light Grey | `#F8F8F8` | Section alternating backgrounds |
| Grey | `#888888` | Subtext, secondary descriptions |
| WhatsApp Green | `#25D366` | WhatsApp buttons only |

### 8.2 Typography

| Role | Font | Weight |
|---|---|---|
| Headings / Display | Syne (Google Fonts) | 700, 800 |
| Body / UI | Manrope (Google Fonts) | 400, 500, 600, 700 |

> **Why Syne?** It's bold, geometric, modern — matches Modish's youthful, expressive brand personality.
> **Why Manrope?** Highly legible, clean, technical feel — great for product specs and descriptions.

### 8.3 Design Language

| Attribute | Direction |
|---|---|
| **Aesthetic** | Bold editorial × streetwear catalog |
| **Feel** | Modern, premium, youthful, high-energy |
| **Spacing** | Generous padding — breathable layouts |
| **Section Alternation** | Yellow → Black → White → Black → Yellow for visual rhythm |
| **Cards** | Rounded corners (12–20px), subtle shadows, hover lift effect |
| **Buttons** | Bold, high-contrast, clear hierarchy (Primary / Secondary / WhatsApp) |
| **Animations** | Scroll reveal, hover transitions, counter animation — CSS-only preferred |

### 8.4 Logo Usage

| Version | Use Case |
|---|---|
| Wordmark (MODISH + tagline) | Website header, footer |
| Monogram (M icon) | Favicon, mobile header (condensed) |
| Black on Yellow | Header background |
| White on Black | Dark sections, footer |

### 8.5 Button Hierarchy

| Type | Style | Use Case |
|---|---|---|
| Primary | Black background + Yellow text | Main CTAs (Get Quote, View Products) |
| Secondary | Yellow background + Black text | Supporting CTAs (Browse Catalog, Download) |
| Outline | Black border + Black text | Tertiary actions |
| WhatsApp | Green background + White text | All WhatsApp triggers |

---

## 9. Content Requirements

### 9.1 Product Content

| Product | Needs |
|---|---|
| Round Neck T-Shirt | Specs, 6 colors, best-for list |
| Oversized T-Shirt | Specs, 6 colors, best-for list |
| Polo T-Shirt | Specs, 6 colors, best-for list |
| Premium Hoodie | Specs, 6 colors, best-for list |
| Gym Vest | Specs, 4 colors, best-for list |
| Tote Bag | Features, size, use cases |
| Accessories Bundle | Coasters, Fridge Magnets, Mouse Pads, Keychains — brief descriptions |
| 10 Diary Models | Name, closure type, features, best-for |
| 5 Gift Sets | Contents + best-for |

### 9.2 Images Required (from Modish Team)

> **Note:** The following images need to be provided by the Modish team to populate the website. Placeholder visuals will be used during development.

| # | Image Type | Quantity Needed |
|---|---|---|
| 1 | Product flat-lay photos (per apparel item) | 1–3 per product |
| 2 | Color variant shots | Per product |
| 3 | Diary product photos | 1–2 per diary model |
| 4 | Printed sample photos (DTF, screen print, embroidery) | 3–5 total |
| 5 | Client order photos / finished product gallery | 8–12 photos |
| 6 | Packaging photos | 2–3 photos |
| 7 | Client logos (if available) | 8 client logos |
| 8 | Team / workspace photos (optional) | 2–3 photos |

### 9.3 Copy / Text Content

All copy is available in the provided Master Content Documents (MCD). The following will be used directly:
- Product names, specs, and best-for lists
- Brand story, mission, vision
- FAQ questions and answers
- Why Choose Modish points
- Terms & Conditions (for inquiry form footer)
- Contact details

---

## 10. Technical Requirements

### 10.1 Technology Stack

| Layer | Recommendation | Notes |
|---|---|---|
| **Frontend** | HTML5 + CSS3 + Vanilla JS | Single-file or multi-page; no framework needed for V1 |
| **Fonts** | Google Fonts (Syne + Manrope) | CDN-loaded, GDPR-compliant |
| **Icons** | Inline SVG | No icon library dependency |
| **Hosting** | GitHub Pages / Netlify / Vercel (free tier) or shared hosting | TBD by Modish team |
| **Domain** | Custom domain (e.g., modish.in) | TBD |

> **Alternative:** If a CMS is needed for the team to update products themselves, Webflow or Framer can be considered in V2.

### 10.2 Performance Requirements

| Metric | Target |
|---|---|
| Page Load Time | < 3 seconds on 4G |
| First Contentful Paint | < 1.5 seconds |
| Mobile Performance Score | > 80 (Google PageSpeed) |
| Image Optimization | WebP format, lazy loading |
| Total Page Weight | < 2MB (excluding PDFs) |

### 10.3 Compatibility

| Platform | Requirement |
|---|---|
| Mobile Browsers | Chrome (Android), Safari (iOS) — fully functional |
| Desktop Browsers | Chrome, Firefox, Safari, Edge — latest 2 versions |
| Screen Widths | 320px (small mobile) to 2560px (large desktop) |
| Touch Support | All interactive elements touch-friendly (min 44px tap targets) |

### 10.4 Accessibility

| Requirement | Standard |
|---|---|
| Alt text on all images | Required |
| Keyboard navigable | Required |
| Color contrast | WCAG AA minimum |
| Form labels | Properly associated |

---

## 11. Integrations

| Integration | Type | Details |
|---|---|---|
| **WhatsApp** | Link (wa.me) | `https://wa.me/919136867622` with pre-filled messages |
| **WhatsApp Community** | Link | `https://chat.whatsapp.com/HgVJlFGOdkv4OTm8OXVv82` |
| **Google Forms (Inquiry)** | Embed or redirect | `https://forms.gle/LyAS3k5qw1QpGVQ48` |
| **Instagram** | Link to profile | `https://www.instagram.com/modish.now` |
| **Clothing Catalog PDF** | External link (new tab) | `https://tinyurl.com/Modish-now` |
| **Diary Catalog PDF** | External link (new tab) | `https://tinyurl.com/Diary-modish` |
| **Google Analytics** | Tracking snippet | Optional in V1, recommended |
| **Instagram Feed** | Live embed | V2 (requires API) |

---

## 12. SEO Requirements

### 12.1 On-Page SEO

| Element | Requirement |
|---|---|
| Page Title | "Modish – Custom T-Shirts, Hoodies & Corporate Merchandise | Mumbai" |
| Meta Description | "Modish offers premium custom printed T-shirts, hoodies, corporate diaries and merchandise in Mumbai. Bulk orders. Pan India delivery. WhatsApp us today." |
| H1 Tag | One per page, includes primary keyword |
| H2/H3 Tags | Used for section headings throughout |
| Image Alt Text | Descriptive alt text on all images |
| Canonical URL | Self-referencing canonical tag |
| Schema Markup | LocalBusiness schema (name, address, phone) |
| Sitemap.xml | Auto-generated |

### 12.2 Target Keywords

**Primary:**
- Custom T-Shirts Mumbai
- Custom Printing India
- Bulk T-Shirt Printing Mumbai
- Corporate Merchandise Mumbai
- DTF Printing Mumbai

**Secondary:**
- Custom Hoodies India
- Corporate Diaries Mumbai
- Custom Tote Bags
- College Event Merchandise
- Startup Merchandise

---

## 13. Success Metrics (KPIs)

| Metric | Measurement Method | Target (3 months post-launch) |
|---|---|---|
| Monthly WhatsApp Clicks | Google Analytics event tracking | 100+ clicks/month |
| Catalog Downloads / Views | Google Analytics + tinyurl click tracking | 50+ views/month |
| Inquiry Form Submissions | Google Forms responses | 20+ submissions/month |
| Organic Traffic | Google Search Console | 200+ monthly visitors |
| Bounce Rate | Google Analytics | < 60% |
| Average Session Duration | Google Analytics | > 1 min 30 sec |
| Mobile Traffic Share | Google Analytics | > 65% |

---

## 14. Out of Scope (V1)

The following features will **NOT** be built in V1 and are deferred to future versions:

| Feature | Version |
|---|---|
| Shopping cart / add-to-cart functionality | V2 |
| Payment gateway (Razorpay, PayU, etc.) | V2 |
| User accounts / order tracking | V2 |
| Admin CMS / product editor panel | V2 |
| Live Instagram feed embed | V2 |
| Product reviews / testimonials widget | V2 |
| Multi-language support (Hindi) | V2 |
| Blog / content marketing | V3 |
| Custom quotation calculator | V3 |

---

## 15. Assumptions & Constraints

### Assumptions
1. Modish will provide product photos before the final website launch. Placeholder visuals will be used during development.
2. The Google Form (`forms.gle`) will continue to be the inquiry submission endpoint.
3. WhatsApp number (+91 91368 67622) is active and monitored during business hours.
4. Domain and hosting will be arranged by the Modish team.
5. The website will be built as a static HTML/CSS/JS website for V1.

### Constraints
1. No backend server or database is available for V1 — all submissions route to Google Forms.
2. Instagram feed live embed requires API approval — deferred to V2.
3. Product images depend on Modish team providing them — development proceeds with placeholder visuals.

---

## 16. Open Questions

These items need confirmation from the Modish team before or during development:

| # | Question | Owner | Status |
|---|---|---|---|
| Q1 | What are the actual stats numbers? (orders completed, customers served, cities delivered) | Modish | ⏳ Pending |
| Q2 | Will product images be provided before launch, or will stock visuals be used? | Modish | ⏳ Pending |
| Q3 | What is the domain name? (modish.in / modish.co.in / etc.) | Modish | ⏳ Pending |
| Q4 | Should the inquiry form embed directly on the website or redirect to Google Forms? | Modish | ⏳ Pending |
| Q5 | Are client logos available for the "Trusted By" section? | Modish | ⏳ Pending |
| Q6 | Should product pricing be displayed on the website? | Modish | ⏳ Pending |
| Q7 | Is there a preferred hosting platform? (GitHub Pages / Netlify / cPanel shared hosting) | Modish | ⏳ Pending |
| Q8 | Are there any additional product categories not covered in the MCD? | Modish | ⏳ Pending |
| Q9 | Should the terms & conditions page be a standalone page? | Modish | ⏳ Pending |
| Q10 | What working hours should be displayed in the contact section? | Modish | ⏳ Pending |

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Claude (Anthropic) | Initial draft based on MCD documents |

---

*This PRD is a living document. All changes should be versioned and reviewed by the Modish team before development begins.*
