# Technical Requirements Document (TRD)
## Modish — Official Website
**Version:** 1.0
**Prepared By:** Claude (Anthropic)
**References:** Modish Website PRD v1.0
**Status:** Draft — Awaiting Review
**Last Updated:** May 2026

---

## Table of Contents

1. [Technical Overview](#1-technical-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project File & Folder Structure](#3-project-file--folder-structure)
4. [HTML Architecture](#4-html-architecture)
5. [CSS Architecture](#5-css-architecture)
6. [JavaScript Architecture](#6-javascript-architecture)
7. [Responsive Design Specifications](#7-responsive-design-specifications)
8. [Performance Budget](#8-performance-budget)
9. [Asset Management](#9-asset-management)
10. [Browser & Device Compatibility](#10-browser--device-compatibility)
11. [Integration Technical Specifications](#11-integration-technical-specifications)
12. [SEO Technical Implementation](#12-seo-technical-implementation)
13. [Accessibility Implementation](#13-accessibility-implementation)
14. [Security Requirements](#14-security-requirements)
15. [Hosting & Deployment](#15-hosting--deployment)
16. [Testing Requirements](#16-testing-requirements)
17. [Code Standards & Conventions](#17-code-standards--conventions)
18. [Component Specifications](#18-component-specifications)
19. [Error Handling](#19-error-handling)
20. [Future-Proofing & V2 Readiness](#20-future-proofing--v2-readiness)

---

## 1. Technical Overview

### 1.1 Architecture Summary

The Modish website is a **static multi-section single-page website** (SPA-like experience without a framework). It uses no backend server, no database, and no server-side rendering. All dynamic behavior (slider, modals, form validation, counters, smooth scroll) is handled with **vanilla JavaScript**.

```
┌─────────────────────────────────────────────────┐
│               USER'S BROWSER                    │
│                                                 │
│  HTML (structure) + CSS (style) + JS (behavior) │
│             ↕               ↕                   │
│       Google Fonts      SVG Assets              │
│       (CDN loaded)      (inline/local)          │
│                                                 │
│  External Links (open new tab):                 │
│  ├── WhatsApp (wa.me)                           │
│  ├── Google Forms (forms.gle)                   │
│  ├── Catalog PDFs (tinyurl)                     │
│  └── Instagram (instagram.com)                  │
└─────────────────────────────────────────────────┘
         │
         ↓ (hosted on)
  Static File Host (Netlify / Vercel / GitHub Pages)
```

### 1.2 Why Static (No Backend)?

| Reason | Explanation |
|---|---|
| No dynamic data needed | Products don't change frequently; PDFs serve as catalog |
| No user accounts | No login, no order management, no cart |
| Maximum performance | Static files load fastest; no server-side processing lag |
| Zero hosting cost | Netlify/Vercel/GitHub Pages host static sites free |
| Easy maintenance | Non-technical team can update HTML directly |
| No security vulnerabilities | No database = no SQL injection, no server attacks |

### 1.3 Core Technical Constraints

| Constraint | Detail |
|---|---|
| No build tool required | No Webpack, Vite, or bundler for V1 |
| No JavaScript framework | No React, Vue, Angular — plain HTML/CSS/JS |
| No external CSS libraries | No Bootstrap, Tailwind — custom CSS only |
| No icon libraries | Inline SVGs only (no FontAwesome, no Heroicons CDN) |
| No backend | No Node.js, PHP, Python server |
| No database | No MySQL, Firebase, MongoDB |
| Fonts via CDN only | Google Fonts via `<link>` tag |

---

## 2. Technology Stack

### 2.1 Confirmed Stack

| Layer | Technology | Version | Justification |
|---|---|---|---|
| Markup | HTML5 | HTML Living Standard | Semantic, accessible, SEO-friendly structure |
| Styling | CSS3 | Latest | Custom properties, Grid, Flexbox, animations |
| Scripting | Vanilla JavaScript | ES6+ | No dependencies, fastest load, sufficient for V1 needs |
| Fonts | Google Fonts | via CDN | Syne (headings) + Manrope (body) |
| Icons | Inline SVG | — | No CDN dependency, fully customizable, crisp at any size |
| Hosting | Netlify (recommended) | Latest | Free tier, instant deploys from Git, HTTPS auto |
| Version Control | Git + GitHub | — | Source of truth, enables Netlify auto-deploy |

### 2.2 Font Specifications

```html
<!-- Load in <head> — must be first external resource -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Font | Role | Weights Loaded | Used For |
|---|---|---|---|
| Syne | Display / Heading | 400, 600, 700, 800 | All headings (H1–H4), nav links, buttons, labels, product names |
| Manrope | Body | 300, 400, 500, 600, 700 | Body copy, descriptions, specs, form fields, footers |

**Font fallback stack:**
```css
--font-heading: 'Syne', 'Arial Black', sans-serif;
--font-body: 'Manrope', 'Helvetica Neue', Arial, sans-serif;
```

### 2.3 Rejected Technologies (and Why)

| Technology | Rejected Because |
|---|---|
| Bootstrap | Overrides too much; adds 30KB+ unused CSS; produces generic look |
| Tailwind CSS | Requires build step; not suitable for simple static V1 |
| React / Vue | Unnecessary complexity for a catalog site; hurts SEO without SSR |
| jQuery | No added value over vanilla JS for this project; extra 30KB |
| FontAwesome | Entire library for a few icons; use inline SVG instead |
| Firebase | Overkill; Google Forms handles submissions for V1 |
| WordPress | CMS overhead; security maintenance; slow without optimization |

---

## 3. Project File & Folder Structure

### 3.1 Recommended Folder Architecture

```
modish-website/
│
├── index.html                  ← Main homepage (entire single-page site)
│
├── css/
│   ├── main.css                ← All styles (or inline in <style> for V1)
│   ├── variables.css           ← CSS custom properties (colors, fonts, spacing)
│   ├── reset.css               ← Browser normalization
│   ├── components.css          ← Reusable components (buttons, cards, chips)
│   ├── sections.css            ← Per-section styles
│   ├── animations.css          ← Keyframes, transitions, scroll reveal
│   └── responsive.css          ← All media queries
│
├── js/
│   ├── main.js                 ← Entry point — initializes all modules
│   ├── slider.js               ← Hero banner slider logic
│   ├── modal.js                ← Product detail modal logic
│   ├── counter.js              ← Stats counter animation
│   ├── scroll.js               ← Smooth scroll, scroll reveal, active nav
│   ├── form.js                 ← Inquiry form validation
│   ├── marquee.js              ← Marquee ticker (if JS-assisted)
│   └── nav.js                  ← Mobile menu toggle, sticky header
│
├── assets/
│   ├── images/
│   │   ├── products/
│   │   │   ├── round-neck-tshirt.webp
│   │   │   ├── oversized-tshirt.webp
│   │   │   ├── polo-tshirt.webp
│   │   │   ├── hoodie.webp
│   │   │   ├── gym-vest.webp
│   │   │   ├── tote-bag.webp
│   │   │   └── accessories.webp
│   │   ├── diaries/
│   │   │   ├── elasto.webp
│   │   │   ├── loopify.webp
│   │   │   ├── cork.webp
│   │   │   ├── trinity.webp
│   │   │   ├── magneto.webp
│   │   │   ├── trio.webp
│   │   │   ├── mobilo.webp
│   │   │   ├── clutch.webp
│   │   │   ├── epitome.webp
│   │   │   └── coffee-cork.webp
│   │   ├── gallery/
│   │   │   └── (completed order photos from Modish team)
│   │   ├── clients/
│   │   │   └── (client logos if available)
│   │   ├── hero/
│   │   │   ├── hero-slide-1.webp
│   │   │   ├── hero-slide-2.webp
│   │   │   ├── hero-slide-3.webp
│   │   │   └── hero-slide-4.webp
│   │   └── about/
│   │       └── team-or-workshop.webp
│   │
│   ├── icons/
│   │   └── (inline SVGs — no separate icon files needed)
│   │
│   └── favicon/
│       ├── favicon.ico         ← 32×32 ICO format
│       ├── favicon-16.png
│       ├── favicon-32.png
│       ├── apple-touch-icon.png ← 180×180 for iOS
│       └── site.webmanifest    ← PWA manifest
│
├── .gitignore
├── README.md
├── netlify.toml                ← Netlify deploy config
└── sitemap.xml                 ← For SEO crawlers
```

> **V1 Simplified Option:** All CSS can be written inline in `<style>` and all JS inline in `<script>` within `index.html` for the first draft. Separate files recommended from V1.1 onwards for maintainability.

### 3.2 File Naming Conventions

| Rule | Example |
|---|---|
| All filenames lowercase | `round-neck-tshirt.webp` ✅ / `RoundNeckTShirt.webp` ❌ |
| Hyphens for spaces | `gym-vest.webp` ✅ / `gym_vest.webp` ❌ |
| No special characters | `tshirt.webp` ✅ / `t-shirt!.webp` ❌ |
| Descriptive names | `elasto-diary-brown.webp` ✅ / `img1.webp` ❌ |
| Version suffix if needed | `hero-slide-1-v2.webp` |

---

## 4. HTML Architecture

### 4.1 Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- 4.2: Meta Tags Block -->
  <!-- 4.3: Preconnect / Font Links -->
  <!-- 4.4: CSS Links -->
  <!-- 4.5: Favicon Block -->
</head>
<body>

  <!-- ① HEADER -->
  <header id="header" role="banner">...</header>

  <!-- ② MOBILE MENU (hidden by default) -->
  <nav id="mobile-menu" role="navigation" aria-label="Mobile Navigation">...</nav>

  <!-- MAIN CONTENT -->
  <main id="main-content">

    <!-- ③ HERO SLIDER -->
    <section id="hero" aria-label="Featured Products Banner">...</section>

    <!-- ④ MARQUEE TICKER -->
    <div class="marquee-section" aria-hidden="true">...</div>

    <!-- ⑤ PRODUCTS -->
    <section id="products" aria-labelledby="products-heading">...</section>

    <!-- ⑥ WHY CHOOSE MODISH -->
    <section id="why" aria-labelledby="why-heading">...</section>

    <!-- ⑦ HOW IT WORKS -->
    <section id="how-it-works" aria-labelledby="how-heading">...</section>

    <!-- ⑧ PRINTING TECHNOLOGIES -->
    <section id="printing" aria-labelledby="printing-heading">...</section>

    <!-- ⑨ STATS COUNTER -->
    <section id="stats" aria-label="Modish Business Statistics">...</section>

    <!-- ⑩ DIARIES & CORPORATE GIFTING -->
    <section id="diaries" aria-labelledby="diaries-heading">...</section>

    <!-- ⑪ TRUSTED CLIENTS -->
    <section id="clients" aria-labelledby="clients-heading">...</section>

    <!-- ⑫ CATALOG DOWNLOADS -->
    <section id="catalogs" aria-labelledby="catalogs-heading">...</section>

    <!-- ⑬ INQUIRY FORM -->
    <section id="inquiry" aria-labelledby="inquiry-heading">...</section>

    <!-- ⑭ WHATSAPP CTA -->
    <section id="wa-cta" aria-label="WhatsApp Contact Call to Action">...</section>

    <!-- ⑮ ABOUT -->
    <section id="about" aria-labelledby="about-heading">...</section>

    <!-- ⑯ FAQ -->
    <section id="faq" aria-labelledby="faq-heading">...</section>

    <!-- ⑰ CONTACT -->
    <section id="contact" aria-labelledby="contact-heading">...</section>

  </main>

  <!-- ⑱ FOOTER -->
  <footer id="footer" role="contentinfo">...</footer>

  <!-- ⑲ FLOATING WHATSAPP BUTTON (fixed position) -->
  <div class="floating-wa">...</div>

  <!-- ⑳ PRODUCT DETAIL MODAL -->
  <div id="product-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">...</div>

  <!-- JS Scripts — bottom of body -->
  <script src="js/main.js"></script>

</body>
</html>
```

### 4.2 Required Meta Tags

```html
<!-- Primary Meta -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Modish – Custom T-Shirts, Hoodies & Corporate Merchandise | Mumbai</title>
<meta name="description" content="Modish offers premium custom printed T-shirts, hoodies, corporate diaries and merchandise in Mumbai. Bulk orders welcome. Pan India delivery. WhatsApp us today.">
<meta name="keywords" content="custom t-shirts mumbai, bulk printing india, corporate merchandise, DTF printing, custom hoodies, corporate diaries, personalized merchandise">
<meta name="author" content="Modish">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.modish.in/">

<!-- Open Graph (for WhatsApp / Instagram / Facebook previews) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.modish.in/">
<meta property="og:title" content="Modish – Wear Your Mood | Custom Merchandise Mumbai">
<meta property="og:description" content="Premium custom printed T-shirts, hoodies, corporate diaries and merchandise. Pan India delivery.">
<meta property="og:image" content="https://www.modish.in/assets/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Modish">
<meta property="og:locale" content="en_IN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Modish – Custom Merchandise Mumbai">
<meta name="twitter:description" content="Premium custom printed T-shirts, hoodies, diaries. Pan India delivery.">
<meta name="twitter:image" content="https://www.modish.in/assets/images/og-image.jpg">

<!-- Theme Color (browser UI on mobile) -->
<meta name="theme-color" content="#F5C400">
```

### 4.3 Semantic HTML Rules

| Element | Usage Rule |
|---|---|
| `<header>` | Only once — site-wide header |
| `<main>` | Wraps all page sections; only one per page |
| `<section>` | Each major content block; must have an `aria-label` or `aria-labelledby` |
| `<nav>` | Navigation blocks only (header nav, mobile menu, footer nav) |
| `<footer>` | Site-wide footer |
| `<article>` | Self-contained content (future blog posts) |
| `<aside>` | Sidebar or supplementary content |
| `<h1>` | Exactly ONE per page — hero headline |
| `<h2>` | One per section heading |
| `<h3>` | Subsection or card headings within sections |
| `<button>` | Interactive controls — NOT `<div>` or `<span>` |
| `<a>` | Navigation and external links — NOT `<div>` |
| `<form>` | Inquiry form wrapper |
| `<label>` | Every form input must have an associated label |

### 4.4 Section ID Convention

All section IDs must be short, lowercase, hyphenated, and match nav anchor links:

| Section | ID | Nav Anchor |
|---|---|---|
| Hero | `id="hero"` | `href="#hero"` |
| Products | `id="products"` | `href="#products"` |
| Why Choose | `id="why"` | `href="#why"` |
| How It Works | `id="how-it-works"` | `href="#how-it-works"` |
| Printing | `id="printing"` | — (not in nav) |
| Stats | `id="stats"` | — (not in nav) |
| Diaries | `id="diaries"` | `href="#diaries"` |
| Clients | `id="clients"` | — (not in nav) |
| Catalogs | `id="catalogs"` | `href="#catalogs"` |
| Inquiry Form | `id="inquiry"` | `href="#inquiry"` |
| WhatsApp CTA | `id="wa-cta"` | — (not in nav) |
| About | `id="about"` | `href="#about"` |
| FAQ | `id="faq"` | `href="#faq"` |
| Contact | `id="contact"` | `href="#contact"` |

---

## 5. CSS Architecture

### 5.1 CSS File Load Order

```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/responsive.css">  <!-- ALWAYS LAST -->
```

### 5.2 CSS Custom Properties (Design Tokens)

All design values must be defined as CSS variables. **Never use raw hex codes, font names, or spacing values directly in component styles.**

```css
/* css/variables.css */

:root {

  /* ── COLORS ── */
  --color-yellow:        #F5C400;
  --color-yellow-dark:   #D4A900;
  --color-yellow-light:  #FFF8D6;
  --color-black:         #0A0A0A;
  --color-black-soft:    #111111;
  --color-white:         #FFFFFF;
  --color-grey-50:       #FAFAFA;
  --color-grey-100:      #F5F5F5;
  --color-grey-200:      #E8E8E8;
  --color-grey-400:      #AAAAAA;
  --color-grey-500:      #777777;
  --color-grey-700:      #444444;
  --color-whatsapp:      #25D366;
  --color-whatsapp-dark: #1DA851;

  /* ── TYPOGRAPHY ── */
  --font-heading:  'Syne', 'Arial Black', sans-serif;
  --font-body:     'Manrope', 'Helvetica Neue', Arial, sans-serif;

  --text-xs:   11px;
  --text-sm:   13px;
  --text-base: 15px;
  --text-md:   17px;
  --text-lg:   20px;
  --text-xl:   24px;
  --text-2xl:  32px;
  --text-3xl:  40px;
  --text-4xl:  52px;
  --text-5xl:  64px;
  --text-hero: clamp(40px, 6vw, 80px);

  --weight-light:      300;
  --weight-regular:    400;
  --weight-medium:     500;
  --weight-semibold:   600;
  --weight-bold:       700;
  --weight-extrabold:  800;

  --line-tight:   1.1;
  --line-snug:    1.3;
  --line-normal:  1.6;
  --line-relaxed: 1.75;

  --letter-wide:  0.05em;
  --letter-wider: 0.1em;

  /* ── SPACING ── */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;

  /* ── BORDER RADIUS ── */
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   28px;
  --radius-full: 9999px;

  /* ── SHADOWS ── */
  --shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md:  0 4px 24px rgba(0, 0, 0, 0.08);
  --shadow-lg:  0 12px 48px rgba(0, 0, 0, 0.14);
  --shadow-xl:  0 24px 80px rgba(0, 0, 0, 0.18);
  --shadow-yellow: 0 8px 32px rgba(245, 196, 0, 0.35);

  /* ── TRANSITIONS ── */
  --transition-fast:   0.15s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base:   0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:   0.5s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-bounce: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  /* ── LAYOUT ── */
  --container-max:  1280px;
  --container-pad:  24px;
  --header-height:  70px;
  --section-py:     var(--space-20);   /* 80px vertical padding for sections */

  /* ── Z-INDEX SCALE ── */
  --z-base:     1;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-overlay:  500;
  --z-modal:    600;
  --z-floating: 700;
  --z-toast:    800;
}
```

### 5.3 CSS Naming Convention (BEM)

Use **BEM (Block__Element--Modifier)** naming:

```css
/* Block */
.product-card { }

/* Element */
.product-card__thumb { }
.product-card__info { }
.product-card__title { }
.product-card__specs { }
.product-card__actions { }

/* Modifier */
.product-card--featured { }
.product-card--diary { }

/* Utility classes (u- prefix) */
.u-text-center { text-align: center; }
.u-mb-4 { margin-bottom: var(--space-4); }
.u-visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
```

### 5.4 CSS Reset Requirements

```css
/* css/reset.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  font-size: 16px;
}
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-black);
  background-color: var(--color-white);
  line-height: var(--line-normal);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img, video { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
button { cursor: pointer; border: none; background: none; font-family: inherit; font-size: inherit; }
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
}
ul, ol { list-style: none; }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); line-height: var(--line-tight); }
```

### 5.5 Container & Layout System

```css
/* Standard section wrapper */
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

/* Section base styles */
.section {
  padding: var(--section-py) 0;
}
.section--yellow { background: var(--color-yellow); }
.section--black  { background: var(--color-black); }
.section--grey   { background: var(--color-grey-100); }
.section--white  { background: var(--color-white); }

/* Grid helpers */
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-6); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-6); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-6); }
.grid-auto { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-6); }
```

### 5.6 Animation Keyframes

```css
/* css/animations.css */

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulseWA {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70%  { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* Scroll reveal base class */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for grid items */
.reveal-delay-1 { transition-delay: 0.08s; }
.reveal-delay-2 { transition-delay: 0.16s; }
.reveal-delay-3 { transition-delay: 0.24s; }
.reveal-delay-4 { transition-delay: 0.32s; }
.reveal-delay-5 { transition-delay: 0.40s; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

---

## 6. JavaScript Architecture

### 6.1 JS File Load Strategy

```html
<!-- Load JS at bottom of <body>, AFTER all HTML -->
<!-- Use defer on external scripts -->
<script src="js/main.js" defer></script>
```

> **Rule:** Never use `document.write()`. All DOM manipulation via `querySelector`, `addEventListener`, `classList`.

### 6.2 Module Structure (main.js)

```javascript
// js/main.js — Entry point
// Initializes all modules after DOM is ready

document.addEventListener('DOMContentLoaded', () => {
  initHeader();       // Sticky header + mobile menu
  initHeroSlider();   // Auto-sliding hero banner
  initMarquee();      // Marquee ticker (CSS handles it; JS adds pause-on-hover)
  initScrollReveal(); // Intersection Observer for scroll animations
  initStatsCounter(); // Animated number counters
  initModals();       // Product detail modal
  initFAQ();          // FAQ accordion
  initForm();         // Inquiry form validation
  initSmoothScroll(); // Nav anchor smooth scrolling
  initFloatingWA();   // Floating WhatsApp button show/hide
});
```

### 6.3 Hero Slider Specification

```javascript
// js/slider.js
// Spec: 4 slides, auto-advance 4500ms, fade transition, dot navigation

function initHeroSlider() {
  const slides     = document.querySelectorAll('.hero__slide');
  const dots       = document.querySelectorAll('.hero__dot');
  const INTERVAL   = 4500;  // ms between auto-advance
  let currentSlide = 0;
  let timer        = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('is-active', i === index);
      s.setAttribute('aria-hidden', i !== index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      d.setAttribute('aria-selected', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function startTimer() { timer = setInterval(nextSlide, INTERVAL); }
  function stopTimer()  { clearInterval(timer); }

  // Dot click navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopTimer(); showSlide(i); startTimer(); });
  });

  // Pause on hover (desktop)
  const heroSection = document.getElementById('hero');
  heroSection.addEventListener('mouseenter', stopTimer);
  heroSection.addEventListener('mouseleave', startTimer);

  // Touch swipe support (mobile)
  let touchStartX = 0;
  heroSection.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  heroSection.addEventListener('touchend', e => {
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(delta) > 50) {
      stopTimer();
      showSlide(delta < 0
        ? (currentSlide + 1) % slides.length
        : (currentSlide - 1 + slides.length) % slides.length);
      startTimer();
    }
  });

  showSlide(0);
  startTimer();
}
```

### 6.4 Scroll Reveal — Intersection Observer

```javascript
// js/scroll.js

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
```

### 6.5 Stats Counter Specification

```javascript
// js/counter.js

function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  let hasAnimated = false;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !hasAnimated) {
      hasAnimated = true;
      counters.forEach(counter => {
        const target   = parseInt(counter.getAttribute('data-count'), 10);
        const suffix   = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // ms
        const step     = target / (duration / 16);
        let current    = 0;

        const tick = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(tick);
          } else {
            counter.textContent = target + suffix;
          }
        };
        requestAnimationFrame(tick);
      });
    }
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats');
  if (statsSection) observer.observe(statsSection);
}
```

**HTML Data Attributes for Counters:**
```html
<span data-count="500"  data-suffix="+">0+</span>  <!-- Orders -->
<span data-count="200"  data-suffix="+">0+</span>  <!-- Customers -->
<span data-count="15"   data-suffix="+">0+</span>  <!-- Cities -->
<span data-count="5000" data-suffix="+">0+</span>  <!-- Products -->
```

### 6.6 Product Modal Specification

```javascript
// js/modal.js

const PRODUCT_DATA = {
  'round-neck': {
    name:     'Round Neck T-Shirt',
    specs:    ['180 GSM', '100% Cotton', 'Bio Wash', 'Ultra Soft Fabric'],
    colors:   ['#000000','#2d6a2d','#e86a2b','#c9a6d4','#800020','#FFFFFF'],
    colorNames: ['Black','Bottle Green','Orange','Lavender','Maroon','White'],
    bestFor:  ['College Events','Teams','Brand Promotions','Personal Wear','Startup Merchandise'],
    printing: ['DTF Printing','Screen Printing','Embroidery'],
    catalog:  'https://tinyurl.com/Modish-now'
  },
  // ... additional products
};

function initModals() {
  const modal      = document.getElementById('product-modal');
  const closeBtn   = modal.querySelector('.modal__close');
  const overlay    = modal.querySelector('.modal__overlay');

  // Open modal
  document.querySelectorAll('[data-modal-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productKey = btn.getAttribute('data-modal-target');
      populateModal(productKey);
      modal.classList.add('is-open');
      modal.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden'; // Prevent background scroll
      closeBtn.focus(); // Focus trap
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}
```

### 6.7 WhatsApp Pre-filled Message Builder

```javascript
// js/whatsapp.js

const WA_NUMBER = '919136867622';
const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;

const WA_MESSAGES = {
  default:    'Hi Modish! I need help with a custom order. 😊',
  header:     'Hi Modish! I\'d like to know more about your products.',
  hero:       'Hi Modish! I\'m interested in placing an order. Can you help?',
  bulkOrder:  'Hi Modish! I\'m interested in a bulk order. Can you share details and pricing?',
  quote:      'Hi Modish! I need a quote. Can you help?',
  catalog:    'Hi Modish! I just downloaded your catalog. Can we discuss an order?',
  product:    (name) => `Hi Modish! I\'m interested in your ${name}. Can you share pricing and MOQ?`,
  diary:      (name) => `Hi Modish! I\'m interested in the ${name} diary for corporate gifting. Can you share details?`,
};

function buildWALink(type, productName = '') {
  const message = typeof WA_MESSAGES[type] === 'function'
    ? WA_MESSAGES[type](productName)
    : WA_MESSAGES[type] || WA_MESSAGES.default;
  return WA_BASE + encodeURIComponent(message);
}

// Usage: <a href="" data-wa-type="product" data-wa-product="Oversized T-Shirt">
document.querySelectorAll('[data-wa-type]').forEach(el => {
  const type        = el.getAttribute('data-wa-type');
  const productName = el.getAttribute('data-wa-product') || '';
  el.href = buildWALink(type, productName);
});
```

### 6.8 Form Validation Specification

```javascript
// js/form.js

function initForm() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  const RULES = {
    name:     { required: true, minLength: 2 },
    phone:    { required: true, pattern: /^[6-9]\d{9}$/ },
    email:    { required: false, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    product:  { required: true },
    quantity: { required: true, min: 1 },
    city:     { required: true, minLength: 2 },
    message:  { required: false },
  };

  form.addEventListener('submit', e => {
    e.preventDefault();
    const isValid = validateForm(form, RULES);
    if (isValid) {
      window.open('https://forms.gle/LyAS3k5qw1QpGVQ48', '_blank');
      showSuccessMessage();
    }
  });
}

function showError(field, message) {
  const errorEl = field.parentElement.querySelector('.form__error');
  field.classList.add('is-error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(field) {
  field.classList.remove('is-error');
  const errorEl = field.parentElement.querySelector('.form__error');
  if (errorEl) errorEl.textContent = '';
}
```

---

## 7. Responsive Design Specifications

### 7.1 Breakpoint System

```css
/* Breakpoint tokens (mobile-first approach) */
/*
  xs:  < 480px   (small phones)
  sm:  480px+    (large phones)
  md:  768px+    (tablets)
  lg:  1024px+   (small desktops / landscape tablets)
  xl:  1280px+   (standard desktops)
  2xl: 1536px+   (large desktops)
*/

/* Usage in CSS: */
@media (min-width: 480px)  { /* sm */  }
@media (min-width: 768px)  { /* md */  }
@media (min-width: 1024px) { /* lg */  }
@media (min-width: 1280px) { /* xl */  }
@media (min-width: 1536px) { /* 2xl */ }
```

### 7.2 Grid Behavior Per Breakpoint

| Component | xs (< 480px) | sm (480px) | md (768px) | lg (1024px) | xl (1280px) |
|---|---|---|---|---|---|
| Header nav | Hidden | Hidden | Hidden | Visible | Visible |
| Mobile hamburger | Visible | Visible | Visible | Hidden | Hidden |
| Hero layout | 1 col, no visual | 1 col | 2 col | 2 col | 2 col |
| Products grid | 1 col | 2 col | 2 col | 3 col | 4 col |
| Why Choose grid | 1 col | 2 col | 3 col | 3 col | 4 col |
| Services grid | 1 col | 1 col | 2 col | 3 col | 3 col |
| Stats grid | 2 col | 2 col | 4 col | 4 col | 4 col |
| Diaries grid | 1 col | 2 col | 3 col | 4 col | 5 col |
| Catalog grid | 1 col | 1 col | 2 col | 2 col | 2 col |
| Inquiry inner | 1 col | 1 col | 1 col | 2 col | 2 col |
| About inner | 1 col | 1 col | 1 col | 2 col | 2 col |
| Footer grid | 1 col | 2 col | 2 col | 4 col | 4 col |
| FAQ grid | 1 col | 1 col | 2 col | 2 col | 2 col |
| Contact grid | 1 col | 2 col | 2 col | 4 col | 4 col |

### 7.3 Typography Scale Per Breakpoint

```css
/* Hero H1 — fluid scaling */
.hero__title {
  font-size: clamp(36px, 6vw, 80px);
  /* 36px on mobile → scales up → 80px on wide desktop */
}

/* Section headings */
.section__title {
  font-size: clamp(28px, 4vw, 52px);
}

/* Card headings */
.card__title {
  font-size: clamp(16px, 2vw, 20px);
}
```

### 7.4 Touch & Mobile UX Requirements

| Requirement | Specification |
|---|---|
| Minimum tap target | 44px × 44px (Apple HIG / WCAG standard) |
| Tap highlight | Remove default: `-webkit-tap-highlight-color: transparent` |
| Hover effects | Only on `@media (hover: hover)` — not triggered by touch |
| Mobile menu | Full-width overlay, font size ≥ 18px, 12px vertical padding per link |
| Form inputs | Font size ≥ 16px (prevents iOS auto-zoom on focus) |
| Horizontal scroll | Must be zero — all content fits within viewport width |
| Floating WA button | Bottom: 20px right: 20px on mobile; larger 28px offset on desktop |
| Hero swipe | Left/right swipe to change slides on mobile |

### 7.5 Viewport-Specific Display Rules

```css
/* Hide hero product illustration on mobile (saves space) */
@media (max-width: 767px) {
  .hero__visual { display: none; }
}

/* Stack catalog cards on mobile */
@media (max-width: 767px) {
  .catalog-card {
    flex-direction: column;
    text-align: center;
  }
}

/* Horizontal scroll steps on mobile → vertical stack */
@media (max-width: 767px) {
  .steps {
    flex-direction: column;
  }
  .steps::before { display: none; } /* Remove connector line */
}
```

---

## 8. Performance Budget

### 8.1 Core Web Vitals Targets

| Metric | Full Name | Target | Measurement Tool |
|---|---|---|---|
| LCP | Largest Contentful Paint | < 2.5s | PageSpeed Insights |
| FID / INP | First Input Delay / Interaction to Next Paint | < 100ms | Chrome DevTools |
| CLS | Cumulative Layout Shift | < 0.1 | PageSpeed Insights |
| FCP | First Contentful Paint | < 1.5s | PageSpeed Insights |
| TTFB | Time to First Byte | < 600ms | WebPageTest |

### 8.2 Asset Size Budget

| Asset Type | Max Size (per file) | Max Total Budget |
|---|---|---|
| HTML (index.html) | 80KB | 80KB |
| CSS (all files combined) | 60KB | 60KB |
| JavaScript (all files combined) | 50KB | 50KB |
| Hero image (WebP) | 150KB each | 600KB total |
| Product images (WebP) | 80KB each | 1.5MB total |
| Diary images (WebP) | 80KB each | 800KB total |
| Fonts (loaded via CDN) | N/A | ~80KB (cached after first load) |
| **Total page weight** | — | **< 3MB** |

### 8.3 Image Requirements

| Image | Format | Resolution | Max File Size |
|---|---|---|---|
| Hero background images | WebP | 1920 × 1080px | 150KB |
| Product card thumbnails | WebP | 600 × 600px | 80KB |
| Product modal images | WebP | 800 × 600px | 100KB |
| Diary product images | WebP | 600 × 600px | 80KB |
| Gallery photos | WebP | 800 × 800px | 100KB |
| Client logos | WebP / SVG | 200 × 80px | 20KB |
| OG image (social share) | JPG | 1200 × 630px | 200KB |
| Favicon | ICO + PNG | 32×32, 180×180 | 5KB |

### 8.4 Image Optimization Rules

```html
<!-- All images MUST use lazy loading -->
<img src="assets/images/products/oversized-tshirt.webp"
     alt="Oversized T-Shirt Custom Printed"
     width="600"
     height="600"
     loading="lazy"
     decoding="async">

<!-- Hero image (above fold) — eager loading, no lazy -->
<img src="assets/images/hero/hero-slide-1.webp"
     alt="Custom Printed T-Shirts by Modish"
     width="1920"
     height="1080"
     loading="eager"
     fetchpriority="high">
```

> **Rule:** Always specify `width` and `height` attributes on all `<img>` tags to prevent layout shift (CLS).

### 8.5 Critical CSS

The first 10KB of CSS must contain:
- All header styles
- Hero section styles
- Marquee ticker styles
- Font declarations
- CSS variables

This CSS should be **inlined** in `<head>` to avoid render-blocking on first load. Remaining CSS loads via `<link>` with `media="print" onload` trick or standard `<link rel="stylesheet">`.

---

## 9. Asset Management

### 9.1 Favicon Package

Required files for complete cross-browser / cross-platform favicon support:

```html
<!-- In <head> -->
<link rel="icon" type="image/ico" href="/assets/favicon/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
<link rel="manifest" href="/assets/favicon/site.webmanifest">
<meta name="msapplication-TileColor" content="#F5C400">
<meta name="theme-color" content="#F5C400">
```

### 9.2 Web App Manifest (site.webmanifest)

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
    { "src": "/assets/favicon/favicon-32.png",    "sizes": "32x32",   "type": "image/png" },
    { "src": "/assets/favicon/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
  ]
}
```

### 9.3 Inline SVG Icon System

All icons are inline SVG — no CDN icon library. Icons reference the brand color variable:

```html
<!-- WhatsApp Icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M17.472 14.382..." fill="currentColor"/>
</svg>

<!-- Instagram Icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <rect x="2" y="2" width="20" height="20" rx="5".../>
</svg>
```

> Icons used: WhatsApp, Instagram, Email, Phone, Location, Download, Arrow, Check, Close (×), Hamburger

---

## 10. Browser & Device Compatibility

### 10.1 Browser Support Matrix

| Browser | Version | Support Level |
|---|---|---|
| Chrome (Android) | Latest 2 | ✅ Full support |
| Chrome (Desktop) | Latest 2 | ✅ Full support |
| Safari (iOS) | Latest 2 | ✅ Full support |
| Safari (macOS) | Latest 2 | ✅ Full support |
| Firefox | Latest 2 | ✅ Full support |
| Edge (Chromium) | Latest 2 | ✅ Full support |
| Samsung Internet | Latest 2 | ✅ Full support |
| Opera Mini | Latest | ⚠️ Basic support (no animations) |
| Internet Explorer 11 | All | ❌ Not supported |

### 10.2 CSS Feature Compatibility

| Feature | Fallback Required? |
|---|---|
| CSS Grid | No (all modern browsers) |
| CSS Flexbox | No (all modern browsers) |
| CSS Custom Properties | No (all modern browsers) |
| CSS `clamp()` | No (all modern browsers) |
| `clip-path` | No (with `-webkit-` prefix for Safari) |
| `backdrop-filter` | Yes — fallback solid background |
| `scroll-behavior: smooth` | Graceful degradation (JS polyfill optional) |
| `IntersectionObserver` | Yes — if not supported, show elements immediately |
| WebP images | Yes — provide JPG fallback using `<picture>` element |

```html
<!-- WebP with JPG fallback -->
<picture>
  <source srcset="product.webp" type="image/webp">
  <img src="product.jpg" alt="Product name" loading="lazy" width="600" height="600">
</picture>
```

### 10.3 Device Testing Checklist

| Device | Screen Size | Priority |
|---|---|---|
| iPhone SE (2022) | 375 × 667px | 🔴 High |
| iPhone 14 Pro | 393 × 852px | 🔴 High |
| Samsung Galaxy S23 | 360 × 780px | 🔴 High |
| iPad (10th gen) | 820 × 1180px | 🟡 Medium |
| iPad Pro 12.9" | 1024 × 1366px | 🟡 Medium |
| MacBook Air 13" | 1280 × 800px | 🔴 High |
| Full HD Desktop | 1920 × 1080px | 🔴 High |
| 4K Desktop | 2560 × 1440px | 🟢 Low |

---

## 11. Integration Technical Specifications

### 11.1 WhatsApp Integration

```
Direct Chat URL format:
https://wa.me/{country_code}{phone_number}?text={url_encoded_message}

Modish Chat URL:
https://wa.me/919136867622?text=Hi%20Modish!%20I%27d%20like%20to%20know%20more.

WhatsApp Community Link:
https://chat.whatsapp.com/HgVJlFGOdkv4OTm8OXVv82?mode=ems_copy_c
```

**Implementation Rules:**
- All WhatsApp links open in `target="_blank"` with `rel="noopener noreferrer"`
- Each WhatsApp CTA uses a unique, contextual pre-filled message
- Floating WA button uses the default message
- No WhatsApp embed widget — links only (avoids JS SDK overhead)

### 11.2 Google Forms Integration

```
Form URL:
https://forms.gle/LyAS3k5qw1QpGVQ48

Options for V1:
Option A: Redirect — form.addEventListener('submit') → window.open(FORM_URL)
Option B: Embed  — <iframe> with Google Form embedded
```

**Recommended: Option A (Redirect)**
- Collect name/phone/product in the website form for context
- On submit: open Google Form in new tab
- Show on-page success message: "Request submitted! Our team will WhatsApp you within 24 hours."

**Why not Option B (embed)?**
- Google Forms iframes are fixed height and don't match brand styling
- Can't customize form appearance to match Modish design
- No mobile-friendly control

### 11.3 PDF Catalog Links

```
Clothing Catalog:
https://tinyurl.com/Modish-now

Diary Collection:
https://tinyurl.com/Diary-modish
```

**Implementation:**
```html
<a href="https://tinyurl.com/Modish-now"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Download Modish Clothing Catalog PDF">
  Download Clothing Catalog
</a>
```

### 11.4 Instagram Integration

```
Profile URL:
https://www.instagram.com/modish.now

V1: Static link to Instagram profile only
V2: Instagram Basic Display API for live feed
```

### 11.5 Google Analytics Setup

```html
<!-- Add before </head> — replace GA_MEASUREMENT_ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Events to Track:**
| Event Name | Trigger |
|---|---|
| `wa_click_header` | Header WhatsApp button |
| `wa_click_hero` | Hero CTA WhatsApp |
| `wa_click_product` | Product card WhatsApp button |
| `wa_click_floating` | Floating button |
| `wa_click_cta_section` | WhatsApp CTA section |
| `catalog_download_clothing` | Clothing catalog button |
| `catalog_download_diary` | Diary catalog button |
| `inquiry_form_submit` | Form submission |
| `modal_open` | Product modal opened |

---

## 12. SEO Technical Implementation

### 12.1 Structured Data (JSON-LD)

```html
<!-- LocalBusiness Schema — add in <head> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Modish",
  "description": "Custom printed T-shirts, hoodies, corporate merchandise and diaries in Mumbai.",
  "url": "https://www.modish.in",
  "logo": "https://www.modish.in/assets/images/logo.png",
  "image": "https://www.modish.in/assets/images/og-image.jpg",
  "telephone": "+91-91368-67622",
  "email": "modish.new@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": "India",
  "sameAs": [
    "https://www.instagram.com/modish.now"
  ],
  "openingHours": "Mo-Sa 10:00-19:00"
}
</script>
```

### 12.2 Heading Hierarchy (SEO + Accessibility)

```
<h1> — Exactly 1 per page
  Example: "Your Mood. Your Brand. Your Story." (Hero)

<h2> — One per major section
  Example: "Our Products", "Why Choose Modish", "How It Works"

<h3> — Product/card titles within sections
  Example: "Oversized T-Shirt", "DTF Printing", "Elasto Diary"

<h4> — Sub-items within cards
  Example: "Specifications", "Best For", "Available Colors"
```

### 12.3 URL & Anchor Structure

| Page | URL |
|---|---|
| Homepage | `https://www.modish.in/` |
| Products anchor | `https://www.modish.in/#products` |
| Diaries anchor | `https://www.modish.in/#diaries` |
| Catalogs anchor | `https://www.modish.in/#catalogs` |
| About anchor | `https://www.modish.in/#about` |
| Contact anchor | `https://www.modish.in/#contact` |

### 12.4 Sitemap.xml

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

### 12.5 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://www.modish.in/sitemap.xml
```

---

## 13. Accessibility Implementation

### 13.1 WCAG 2.1 Level AA Compliance Checklist

| Criterion | Implementation |
|---|---|
| 1.1.1 Non-text content | All images have descriptive `alt` text; decorative images use `alt=""` |
| 1.3.1 Info and relationships | Semantic HTML elements only (no div-soup) |
| 1.4.3 Contrast (minimum) | All text on backgrounds must meet 4.5:1 ratio (black text on yellow ✅) |
| 1.4.4 Resize text | No fixed pixel font sizes below 12px; uses rem/em for body text |
| 2.1.1 Keyboard | All interactive elements reachable and operable by keyboard |
| 2.1.2 No keyboard trap | Modal releases focus on close; focus returns to trigger |
| 2.4.3 Focus order | Logical focus order matching visual reading order |
| 2.4.4 Link purpose | Link text describes destination (no "Click here", no "Read more") |
| 2.4.6 Headings | Descriptive heading labels for every section |
| 3.1.1 Language | `<html lang="en">` set |
| 3.2.2 On input | Form doesn't submit on focus; only on explicit submit button |
| 3.3.1 Error identification | Form errors shown adjacent to fields with clear messages |
| 4.1.2 Name, role, value | All custom UI (modal, slider) has correct ARIA attributes |

### 13.2 ARIA Attributes

```html
<!-- Modal -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-hidden="true">
  <h2 id="modal-title">Product Name</h2>
</div>

<!-- Hero slider -->
<div role="region" aria-label="Featured Products" aria-live="polite">
  <div role="tabpanel" aria-hidden="false">...</div>
</div>

<!-- Slider dots navigation -->
<div role="tablist" aria-label="Slide Navigation">
  <button role="tab" aria-selected="true" aria-label="Slide 1 of 4"></button>
</div>

<!-- FAQ accordion -->
<button aria-expanded="false" aria-controls="faq-answer-1">Question text</button>
<div id="faq-answer-1" aria-hidden="true">Answer text</div>
```

### 13.3 Color Contrast Reference

| Combo | Ratio | Pass? |
|---|---|---|
| Black (#0A0A0A) on Yellow (#F5C400) | 11.8:1 | ✅ AAA |
| White (#FFFFFF) on Black (#0A0A0A) | 19.6:1 | ✅ AAA |
| Black on White | 21:1 | ✅ AAA |
| #777777 on White | 4.6:1 | ✅ AA |
| White on #25D366 (WhatsApp green) | 3.3:1 | ⚠️ Passes for large text only — use bold |

---

## 14. Security Requirements

### 14.1 Static Site Security Headers

Configure via `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Content-Security-Policy = """
      default-src 'self';
      script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src https://www.google-analytics.com;
      frame-src https://docs.google.com;
    """
```

### 14.2 External Link Security

```html
<!-- All external links MUST include rel="noopener noreferrer" -->
<a href="https://wa.me/..." target="_blank" rel="noopener noreferrer">WhatsApp</a>
```

### 14.3 Form Security

- No server-side processing — Google Forms handles submission
- No sensitive data stored client-side
- No `localStorage` or `sessionStorage` used for PII
- Phone number field: only numeric input validated client-side

---

## 15. Hosting & Deployment

### 15.1 Recommended: Netlify

```
Why Netlify:
✅ Free tier (100GB bandwidth/month)
✅ Automatic HTTPS (Let's Encrypt)
✅ Git-based deployments (push to main → auto-deploy)
✅ Global CDN
✅ Custom domain support
✅ Form handling (optional alternative to Google Forms)
✅ Deploy previews for every pull request
```

### 15.2 Deployment Flow

```
Local Machine
    ↓  git push origin main
GitHub Repository (github.com/modish/website)
    ↓  Netlify webhook triggered automatically
Netlify Build (static — no build step needed)
    ↓  Deploy
Netlify CDN Edge Nodes (global)
    ↓  Serve
https://www.modish.in
```

### 15.3 Custom Domain Setup

```
Step 1: Buy domain (modish.in recommended) from GoDaddy / BigRock / Namecheap
Step 2: Add domain in Netlify Dashboard → Domain Settings
Step 3: Update DNS at registrar:
        A Record     →  75.2.60.5 (Netlify IP)
        CNAME www    →  <netlify-site>.netlify.app
Step 4: Enable HTTPS in Netlify (automatic via Let's Encrypt)
Step 5: Force HTTPS redirect (Netlify setting)
```

### 15.4 netlify.toml

```toml
[build]
  publish = "."        # Root directory (index.html at root)
  command = ""         # No build command needed for static

[[redirects]]
  from  = "http://modish.in/*"
  to    = "https://www.modish.in/:splat"
  status = 301

[[redirects]]
  from  = "https://modish.in/*"
  to    = "https://www.modish.in/:splat"
  status = 301
```

---

## 16. Testing Requirements

### 16.1 Pre-Launch Testing Checklist

#### Functional Tests
```
[ ] All navigation links scroll to correct sections
[ ] Mobile hamburger opens/closes correctly
[ ] Hero slider auto-advances every 4.5 seconds
[ ] Hero slider dot navigation works
[ ] Hero slider swipe works on mobile
[ ] All product "View Details" buttons open correct modal
[ ] Modals close on: X button / overlay click / ESC key
[ ] All WhatsApp buttons open WhatsApp with correct pre-filled message
[ ] Catalog download buttons open PDFs in new tab
[ ] Inquiry form: all validations trigger correctly
[ ] Inquiry form: invalid phone shows error
[ ] Inquiry form: successful submission opens Google Form
[ ] Stats counter animates on scroll into view
[ ] Scroll reveal animations trigger correctly
[ ] Floating WA button is always visible
[ ] FAQ accordion expands/collapses correctly
[ ] Active nav link updates on scroll
[ ] Back to top button appears after scrolling
```

#### Responsive Tests
```
[ ] iPhone SE (375px) — full page scroll test
[ ] iPhone 14 (393px) — full page scroll test
[ ] Android mid-range (360px) — full page scroll test
[ ] iPad (768px) — full page test
[ ] iPad Pro (1024px) — full page test
[ ] Desktop 1280px — full page test
[ ] Desktop 1920px — full page test
[ ] No horizontal scroll at any breakpoint
[ ] No text overflow / cropping at any breakpoint
[ ] Touch targets ≥ 44px on all interactive elements
```

#### Performance Tests
```
[ ] Google PageSpeed Insights — Mobile score > 80
[ ] Google PageSpeed Insights — Desktop score > 90
[ ] LCP < 2.5s on mobile (throttled 4G)
[ ] CLS < 0.1
[ ] Total page weight < 3MB
[ ] All images use WebP
[ ] All images have width/height attributes
[ ] Fonts load via preconnect
```

#### Accessibility Tests
```
[ ] Run axe DevTools or WAVE audit — 0 errors
[ ] Tab through entire page — all elements reachable
[ ] All images have alt text
[ ] Color contrast passes for all text
[ ] Modal has correct ARIA attributes
[ ] Form has labels for all inputs
[ ] Screen reader test (basic VoiceOver / TalkBack)
```

#### Browser Tests
```
[ ] Chrome latest (Android + Desktop)
[ ] Safari latest (iOS + macOS)
[ ] Firefox latest
[ ] Edge latest
[ ] Samsung Internet latest
```

#### Link Tests
```
[ ] All WhatsApp links open correctly (wa.me format)
[ ] Clothing catalog PDF link opens (tinyurl.com/Modish-now)
[ ] Diary catalog PDF link opens (tinyurl.com/Diary-modish)
[ ] Google Forms link opens correctly
[ ] Instagram link opens @modish.now
[ ] Email link opens mail client
[ ] All external links open in new tab
[ ] No broken internal anchor links
[ ] No 404 errors on any asset
```

---

## 17. Code Standards & Conventions

### 17.1 HTML Conventions

```
- 2-space indentation
- Double quotes for attribute values
- Lowercase for all tags and attributes
- Self-close void elements: <img />, <input />, <br />
- Always include alt on <img>
- Use data-* attributes for JS hooks (not class or id)
- Comment each major section:  <!-- ═══ SECTION: PRODUCTS ═══ -->
```

### 17.2 CSS Conventions

```
- 2-space indentation
- One property per line
- Single space after colon
- Blank line between rules
- Order properties: layout → box model → typography → visual → animation
- Group related rules with comments
- Use CSS variables — never raw hex values in component styles
- Mobile-first media queries (min-width, not max-width) in responsive.css
```

### 17.3 JavaScript Conventions

```
- 2-space indentation
- const by default; let when reassignment needed; never var
- camelCase for variables and functions
- PascalCase for constructor functions / classes
- UPPER_SNAKE_CASE for constants
- Arrow functions for callbacks
- Descriptive function names: initHeroSlider() not slider()
- Comment complex logic with // explanation
- No inline JS in HTML (no onclick="")
- All event listeners via addEventListener()
- Use data-* attributes to connect HTML to JS behaviors
```

### 17.4 Git Commit Convention

```
feat:     New feature or section
fix:      Bug fix
style:    CSS / visual changes
refactor: Code reorganization (no behavior change)
content:  Text or image updates
perf:     Performance improvement
docs:     README or documentation updates
chore:    Config files, .gitignore, etc.

Examples:
git commit -m "feat: add hero slider with 4 slides"
git commit -m "fix: modal not closing on mobile tap"
git commit -m "content: update product specs for polo shirt"
git commit -m "perf: convert all images to WebP"
```

---

## 18. Component Specifications

### 18.1 Button Component Spec

```css
/* Base button — all variants extend this */
.btn {
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            8px;
  padding:        13px 26px;
  border-radius:  var(--radius-md);
  font-family:    var(--font-heading);
  font-weight:    var(--weight-bold);
  font-size:      14px;
  letter-spacing: 0.4px;
  line-height:    1;
  cursor:         pointer;
  transition:     background var(--transition-base),
                  color var(--transition-base),
                  border-color var(--transition-base),
                  transform var(--transition-fast),
                  box-shadow var(--transition-base);
  white-space:    nowrap;
  border:         2px solid transparent;
}
.btn:active { transform: scale(0.97); }
.btn--sm  { padding: 9px 18px; font-size: 12px; }
.btn--lg  { padding: 16px 36px; font-size: 16px; }
.btn--full { width: 100%; }

/* Variants */
.btn--primary { background: var(--color-black); color: var(--color-yellow); border-color: var(--color-black); }
.btn--primary:hover { background: var(--color-yellow); color: var(--color-black); }

.btn--yellow  { background: var(--color-yellow); color: var(--color-black); border-color: var(--color-yellow); }
.btn--yellow:hover { background: var(--color-black); color: var(--color-yellow); border-color: var(--color-black); }

.btn--outline { background: transparent; color: var(--color-black); border-color: var(--color-black); }
.btn--outline:hover { background: var(--color-black); color: var(--color-yellow); }

.btn--wa { background: var(--color-whatsapp); color: #fff; border-color: var(--color-whatsapp); }
.btn--wa:hover { background: var(--color-whatsapp-dark); border-color: var(--color-whatsapp-dark); }

.btn--white { background: var(--color-white); color: var(--color-black); border-color: var(--color-white); }
.btn--white:hover { background: transparent; color: var(--color-white); border-color: var(--color-white); }
```

### 18.2 Product Card Component Spec

```html
<!-- Data attributes connect JS behaviors -->
<div class="product-card reveal"
     data-product="oversized"
     tabindex="0"
     role="article"
     aria-label="Oversized T-Shirt product card">

  <div class="product-card__thumb thumb--oversized">
    <picture>
      <source srcset="assets/images/products/oversized-tshirt.webp" type="image/webp">
      <img src="assets/images/products/oversized-tshirt.jpg"
           alt="Custom Oversized T-Shirt by Modish"
           width="600" height="400"
           loading="lazy">
    </picture>
    <span class="product-card__badge">Bestseller</span>
  </div>

  <div class="product-card__info">
    <h3 class="product-card__title">Oversized T-Shirt</h3>
    <p class="product-card__desc">210 GSM · Cotton Loopknit · Bio Wash</p>
    <div class="product-card__specs">
      <span class="chip">210 GSM</span>
      <span class="chip">Cotton Loopknit</span>
      <span class="chip">Bio Wash</span>
    </div>
    <div class="product-card__colors" aria-label="Available colors">
      <span class="color-dot" style="background:#000"   title="Black"></span>
      <span class="color-dot" style="background:#2d6a2d" title="Bottle Green"></span>
      <span class="color-dot" style="background:#e86a2b" title="Orange"></span>
      <span class="color-dot" style="background:#c9a6d4" title="Lavender"></span>
      <span class="color-dot" style="background:#800020" title="Maroon"></span>
      <span class="color-dot" style="background:#fff;border:1.5px solid #ddd" title="White"></span>
    </div>
  </div>

  <div class="product-card__actions">
    <button class="btn btn--outline btn--sm"
            data-modal-target="oversized"
            aria-haspopup="dialog">
      View Details
    </button>
    <a class="btn btn--wa btn--sm"
       href="https://wa.me/919136867622?text=Hi%20Modish!%20I%27m%20interested%20in%20your%20Oversized%20T-Shirt.%20Can%20you%20share%20pricing?"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="WhatsApp inquiry for Oversized T-Shirt">
      WhatsApp
    </a>
  </div>

</div>
```

---

## 19. Error Handling

### 19.1 Image Load Failure

```javascript
// Replace broken images with a branded placeholder
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () {
    this.src = 'assets/images/placeholder.svg';
    this.alt = 'Image unavailable';
  });
});
```

### 19.2 Font Load Failure

```css
/* Fallback font stack ensures readable text even if Google Fonts fails */
--font-heading: 'Syne', 'Arial Black', 'Impact', sans-serif;
--font-body:    'Manrope', 'Helvetica Neue', Arial, sans-serif;
```

### 19.3 JavaScript Errors

```javascript
// Wrap all init functions with try/catch to prevent one failure
// from breaking other modules
document.addEventListener('DOMContentLoaded', () => {
  const modules = [
    initHeader, initHeroSlider, initScrollReveal,
    initStatsCounter, initModals, initFAQ,
    initForm, initSmoothScroll
  ];
  modules.forEach(fn => {
    try { fn(); }
    catch (err) { console.warn(`[Modish] Module failed: ${fn.name}`, err); }
  });
});
```

### 19.4 Network/External Link Failure

- All external links (WhatsApp, PDFs, Instagram) open in new tab
- If user has WhatsApp not installed, wa.me redirects to WhatsApp Web
- No website functionality depends on external resources loading

---

## 20. Future-Proofing & V2 Readiness

### 20.1 V2 Feature Placeholders

Write the code so these can be added without restructuring:

| V2 Feature | V1 Preparation |
|---|---|
| CMS / Product editor | Use `data-*` attributes on all product cards; easy to make data-driven |
| Individual product pages | Use semantic IDs; easy to create `/products/oversized-tshirt.html` later |
| Shopping cart | Don't hard-code "no cart" into architecture; leave room for header cart icon |
| Blog / SEO articles | Reserve `/blog/` folder in structure |
| Instagram live feed | Add `id="instagram-feed"` section placeholder |
| Live chat (Tidio / Crisp) | Reserve z-index layer `--z-floating: 700` for 3rd-party widgets |
| Multi-language (Hindi) | Use `lang` attribute and `data-i18n` on text nodes from the start |

### 20.2 Scalability Rules

```
- Never hardcode product count — use loops / templates
- All product data in a single JS object (PRODUCT_DATA) — easy to move to JSON/API later
- CSS component classes must work in isolation — no tight coupling to sections
- All section IDs stable — changing IDs would break analytics event tracking
- Keep JS modules separate — easy to add/remove without touching HTML
```

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Claude (Anthropic) | Initial TRD based on PRD v1.0 |

---

*This TRD is the technical blueprint for the Modish website. Any deviation from these specifications during development should be documented with a reason and approved before implementation.*
