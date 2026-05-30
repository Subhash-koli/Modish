# Design UI/UX Brief
## Modish — Official Website
**Version:** 1.0
**Document Type:** Design Brief
**Status:** Ready for Design
**Last Updated:** May 2026

---

## Table of Contents

1. [Design Vision & Philosophy](#1-design-vision--philosophy)
2. [User Experience Strategy](#2-user-experience-strategy)
3. [Visual Identity System](#3-visual-identity-system)
4. [Typography Design System](#4-typography-design-system)
5. [Color System](#5-color-system)
6. [Spacing, Grid & Layout System](#6-spacing-grid--layout-system)
7. [Component Library](#7-component-library)
8. [Section-by-Section Design Specifications](#8-section-by-section-design-specifications)
9. [Interaction & Motion Design](#9-interaction--motion-design)
10. [Mobile & Responsive UX](#10-mobile--responsive-ux)
11. [Conversion-Focused Design Principles](#11-conversion-focused-design-principles)
12. [Accessibility Design Guidelines](#12-accessibility-design-guidelines)
13. [Design Deliverables Checklist](#13-design-deliverables-checklist)
14. [Design Handoff Notes](#14-design-handoff-notes)

---

## 1. Design Vision & Philosophy

### 1.1 One-Line Design Vision

> **Bold editorial energy meets street-smart catalog — every scroll deepens trust, every touchpoint nudges a WhatsApp tap.**

### 1.2 Design Pillars

| Pillar | What It Means in Practice |
|---|---|
| **Energy Over Elegance** | The brand is youthful, expressive, and high-energy. Design must feel alive — not corporate or sterile. Bold headlines, high-contrast palettes, punchy CTAs. |
| **Conversion by Design** | This is not a portfolio. Every section has a job to do. CTAs are prominent, WhatsApp is ever-present, and the scroll path guides users toward inquiry. |
| **Catalog Clarity** | Products and specs must be scannable at a glance. No information overload — use chips, swatches, and modals to layer depth progressively. |
| **Trust at Every Step** | Client logos, stats counters, printing tech details, and process steps all exist to reduce friction for bulk/B2B buyers. Design must give these sections proper weight. |
| **Mobile-First Delight** | Over 65% of traffic is expected on mobile. The layout, tap targets, typography, and interactions must feel native to a phone — not shrunk-down desktop. |

### 1.3 Aesthetic Direction

**Genre:** Bold Editorial × Streetwear Catalog × B2B Credibility

Think — the high-energy visual language of a premium streetwear brand (Represent, Madhappy, Cider) but grounded enough to win over an HR manager ordering 500 hoodies. Not luxury-minimal. Not generic SaaS. High contrast, generous whitespace, bold type, sections that breathe yet pop.

**What to avoid:**
- Corporate blue tones, soft pastels, rounded-everything "SaaS beige"
- Cluttered layouts that overwhelm first-time visitors
- Dark UI for the entire site (use dark sections as punctuation, not the default)
- Stock photo aesthetics — product photography should feel real and tactile

---

## 2. User Experience Strategy

### 2.1 The Three Audiences & Their Design Needs

#### Audience A — Individual / Personal Buyer (B2C)
**Entry:** Instagram link or Google search → mobile
**Mindset:** "Does this look legit? What can I get made? How do I order?"
**Design Need:** Fast trust-building → product discovery → frictionless WhatsApp path
**Key Sections:** Hero → Products → How It Works → WhatsApp CTA → Contact

#### Audience B — Small Business / Startup (B2B Small)
**Entry:** WhatsApp referral or Google → desktop or mobile
**Mindset:** "Are their products right for my brand? What quality can I expect?"
**Design Need:** Spec transparency → quality signals → catalog download → inquiry form
**Key Sections:** Products → Printing Tech → Why Choose Modish → Catalog Downloads → Inquiry Form

#### Audience C — Corporate / Institutional Buyer (B2B Large)
**Entry:** Referral, direct URL, Instagram DM → likely desktop
**Mindset:** "Can I trust this vendor? Have they worked with brands like mine?"
**Design Need:** Social proof → diaries/gifting section → trusted clients → formal inquiry path
**Key Sections:** Trusted Clients → Stats Counter → Diaries → Catalog → Inquiry Form → Contact

### 2.2 Primary User Flow (Conversion Funnel)

```
ENTRY
  ↓
HERO BANNER — Captures attention, establishes brand, two CTAs
  ↓
MARQUEE TICKER — Reinforces offers (bulk discounts, pan India, DTF)
  ↓
PRODUCT GRID — Discovery; user finds relevant product
  ↓  (fork)
  ├── View Details → Product Modal → WhatsApp Inquiry   (warm lead)
  └── Continue scrolling
         ↓
  WHY CHOOSE / HOW IT WORKS — Trust-building for hesitant buyers
         ↓
  STATS + TRUSTED CLIENTS — Social proof, credibility
         ↓
  DIARIES SECTION — Secondary product category
         ↓
  CATALOG DOWNLOAD — User downloads PDF (top-of-funnel asset)
         ↓
  INQUIRY FORM — Formal lead capture
         ↓
  WHATSAPP CTA SECTION — Bold conversion push
         ↓
  FAQ — Removes remaining objections
         ↓
CONVERSION OUTCOME
  ├── WhatsApp chat initiated
  ├── Google Form submitted
  └── PDF catalog downloaded
```

### 2.3 UX Design Principles for This Project

**1. Progressive Disclosure**
Start broad (hero showcases all categories), then let users drill deeper (product grid → modal → WhatsApp). Never dump all specs upfront.

**2. WhatsApp as the Primary Conversion Path**
Every major section ends with or contains a WhatsApp trigger. The floating button ensures it's always one tap away. Design must make WhatsApp feel like the natural next step — not an interruption.

**3. Reduce Cognitive Load**
Use chips for specs (not tables). Use color swatches (not dropdown lists). Use icons for process steps. Information should be glanceable.

**4. Confidence Architecture**
Sequence trust signals strategically: stats early in the scroll → client logos → printing tech expertise → FAQs. By the time a buyer reaches the inquiry form, their questions are already answered.

**5. Section Alternation for Rhythm**
Alternate between light sections (white/grey) and dark sections (black/yellow) to create visual rhythm that prevents scroll fatigue.

---

## 3. Visual Identity System

### 3.1 Brand Personality Keywords

| Dimension | Expression |
|---|---|
| **Energy** | Punchy, High-voltage, Movement |
| **Attitude** | Confident, Direct, No-nonsense |
| **Quality** | Premium, Artisanal, Crafted |
| **Accessibility** | Friendly, Approachable, Clear |

### 3.2 Design Language Attributes

| Attribute | Specification |
|---|---|
| **Aesthetic Feel** | Bold Editorial × Streetwear Catalog |
| **Contrast Philosophy** | High contrast; black on yellow, white on black |
| **Card Style** | Rounded corners (12–20px), subtle shadow, hover lift |
| **Section Rhythm** | Yellow → Black → White/Grey → Black → Yellow |
| **Density** | Generous padding (sections breathe) + dense product cards (information-rich) |
| **Illustration Style** | None; product photography + flat icons only |
| **Icon Style** | Outline icons or filled geometric; consistent stroke weight of 1.5–2px |

### 3.3 Logo Usage Specifications

| Usage Context | Version | Background |
|---|---|---|
| Sticky header (default) | MODISH wordmark + tagline | White/transparent |
| Dark sections / footer | MODISH wordmark — white | Black |
| Yellow CTA sections | MODISH wordmark — black | Yellow (#F5C400) |
| Favicon | M monogram | Yellow or black |
| OG / Social share image | Full lockup (wordmark + tagline) | Black background |

**Logo clear-space rule:** Minimum padding = height of the "M" letter on all four sides.

**Tagline:** "Wear Your Mood" — always displayed beneath the wordmark at approximately 55% of the wordmark size, using Manrope Medium.

---

## 4. Typography Design System

### 4.1 Font Pairing

| Role | Font | Source | Rationale |
|---|---|---|---|
| Display / Headings | **Syne** | Google Fonts | Geometric, bold, modern; matches the youthful, expressive brand personality. Distinctive at large sizes. |
| Body / UI | **Manrope** | Google Fonts | Highly legible, clean, slightly technical; ideal for specs, descriptions, and form fields. |

### 4.2 Type Scale

| Token | Size | Weight | Line Height | Use Case |
|---|---|---|---|---|
| `--text-hero` | clamp(40px, 6vw, 80px) | Syne 800 | 1.0–1.1 | Hero H1 headline |
| `--text-5xl` | 64px | Syne 800 | 1.1 | Section display titles (desktop) |
| `--text-4xl` | 52px | Syne 700 | 1.1 | Section headings (desktop) |
| `--text-3xl` | 40px | Syne 700 | 1.2 | Section headings (mobile) |
| `--text-2xl` | 32px | Syne 700 | 1.2 | Sub-section headings |
| `--text-xl` | 24px | Syne 600 | 1.3 | Card titles, modal headings |
| `--text-lg` | 20px | Manrope 600 | 1.4 | Large body, hero subheads |
| `--text-md` | 17px | Manrope 500 | 1.6 | Standard body, product descriptions |
| `--text-base` | 15px | Manrope 400 | 1.6 | Default body, form text |
| `--text-sm` | 13px | Manrope 500 | 1.5 | Labels, spec chips, badges |
| `--text-xs` | 11px | Manrope 500 | 1.4 | Captions, helper text, small tags |

### 4.3 Heading Hierarchy Rules

| Tag | Usage | Example |
|---|---|---|
| `<h1>` | **Exactly one per page** — Hero headline | "Your Mood. Your Brand. Your Story." |
| `<h2>` | One per major section | "Our Products", "How It Works", "Why Choose Modish" |
| `<h3>` | Product/card titles | "Oversized T-Shirt", "Elasto Diary", "DTF Printing" |
| `<h4>` | Card subsections | "Specifications", "Best For", "Available Colors" |

### 4.4 Typography Design Notes

- **Section eyebrow labels:** Uppercase Manrope 500, 11px, letter-spacing 0.12em, use brand accent color or grey — placed above H2 headings to add editorial rhythm. Example: "OUR PRODUCTS" sits above "What We Make".
- **Hero headlines:** Break into 2–3 short lines using `<br>` for designed line breaks, not auto-wrap. Never exceed 4 words per line at hero scale.
- **Button text:** Always Syne Bold or Syne SemiBold, never Manrope. Uppercase optional for primary CTAs only.
- **Product spec chips:** Manrope Medium 11–12px. Compact, scannable.
- **No italic use** in this brand's UI — the aesthetic is straight and confident.

---

## 5. Color System

### 5.1 Core Palette

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-yellow` | `#F5C400` | 245, 196, 0 | Primary accent; CTA backgrounds, hero accents, stats section, hover highlights |
| `--color-yellow-dark` | `#D4A900` | 212, 169, 0 | Yellow button hover state |
| `--color-yellow-light` | `#FFF8D6` | 255, 248, 214 | Subtle yellow tint for cards on white backgrounds |
| `--color-black` | `#0A0A0A` | 10, 10, 10 | Primary text, dark section backgrounds, primary buttons |
| `--color-black-soft` | `#111111` | 17, 17, 17 | Dark card backgrounds |
| `--color-white` | `#FFFFFF` | 255, 255, 255 | Page background, white-section backgrounds, text on dark |
| `--color-grey-50` | `#FAFAFA` | 250, 250, 250 | Subtle section alt-background |
| `--color-grey-100` | `#F5F5F5` | 245, 245, 245 | Light section backgrounds (FAQ, About) |
| `--color-grey-200` | `#E8E8E8` | 232, 232, 232 | Borders, dividers, card borders |
| `--color-grey-400` | `#AAAAAA` | 170, 170, 170 | Placeholder text, disabled states |
| `--color-grey-500` | `#777777` | 119, 119, 119 | Subtext, secondary descriptions |
| `--color-grey-700` | `#444444` | 68, 68, 68 | Body text on white sections |
| `--color-whatsapp` | `#25D366` | 37, 211, 102 | WhatsApp buttons exclusively |
| `--color-whatsapp-dark` | `#1DA851` | 29, 168, 81 | WhatsApp button hover state |

### 5.2 Section Background Cadence

The site alternates backgrounds to create visual rhythm and prevent monotony. Follow this sequence from top to bottom:

| Section | Background | Text Color |
|---|---|---|
| Header | White (transparent on load) | Black |
| Hero Slide 1 (T-Shirts) | `#0A0A0A` (Black) | White + Yellow accents |
| Hero Slide 2 (Bulk Orders) | `#F5C400` (Yellow) | Black |
| Hero Slide 3 (Diaries) | `#0A0A0A` (Black) | White + Yellow accents |
| Hero Slide 4 (Merchandise) | `#F5C400` (Yellow) | Black |
| Marquee Ticker | `#0A0A0A` (Black) | White |
| Products | `#FFFFFF` (White) | Black |
| Why Choose Modish | `#F5F5F5` (Light Grey) | Black |
| How It Works | `#FFFFFF` (White) | Black |
| Printing Technologies | `#0A0A0A` (Black) | White |
| Stats Counter | `#F5C400` (Yellow) | Black |
| Diaries & Gifting | `#0A0A0A` (Black) | White |
| Trusted Clients | `#F5F5F5` (Light Grey) | Black |
| Catalog Downloads | `#FFFFFF` (White) | Black |
| Inquiry Form | `#F5F5F5` (Light Grey) | Black |
| WhatsApp CTA | `#F5C400` (Yellow) | Black |
| About Modish | `#FFFFFF` (White) | Black |
| FAQ | `#F5F5F5` (Light Grey) | Black |
| Contact | `#0A0A0A` (Black) | White |
| Footer | `#0A0A0A` (Black) | White |

### 5.3 Color Contrast Reference (Accessibility)

| Foreground | Background | Ratio | WCAG Level | Notes |
|---|---|---|---|---|
| Black `#0A0A0A` | Yellow `#F5C400` | 11.8:1 | **AAA** | ✅ Primary combo |
| White `#FFFFFF` | Black `#0A0A0A` | 19.6:1 | **AAA** | ✅ Dark sections |
| Black `#0A0A0A` | White `#FFFFFF` | 21:1 | **AAA** | ✅ Default |
| `#777777` | White `#FFFFFF` | 4.6:1 | **AA** | ✅ Subtext |
| White `#FFFFFF` | WhatsApp `#25D366` | 3.3:1 | **AA Large only** | ⚠️ Use bold text |
| `#444444` | `#F5F5F5` | 7.5:1 | **AAA** | ✅ Body on grey |

> **Design Rule:** Never use grey text on yellow backgrounds. Never use light grey text on white backgrounds for body copy.

---

## 6. Spacing, Grid & Layout System

### 6.1 Spacing Scale

| Token | Value | Use Case |
|---|---|---|
| `--space-1` | 4px | Icon-text gaps, tight chip padding |
| `--space-2` | 8px | Button icon gaps, small card gaps |
| `--space-3` | 12px | Chip internal padding, compact item gaps |
| `--space-4` | 16px | Standard card padding, form field gaps |
| `--space-5` | 20px | Section sub-element spacing |
| `--space-6` | 24px | Card grid gaps, standard padding |
| `--space-8` | 32px | Large card padding, section sub-groups |
| `--space-10` | 40px | Section headings to content gap |
| `--space-12` | 48px | Large section padding |
| `--space-16` | 64px | Section vertical padding (mobile) |
| `--space-20` | 80px | Section vertical padding (desktop) |
| `--space-24` | 96px | Large decorative spacing |

### 6.2 Container & Layout

| Variable | Value | Purpose |
|---|---|---|
| `--container-max` | 1280px | Maximum content width |
| `--container-pad` | 24px (mobile) / 48px (desktop) | Horizontal content margin |
| `--header-height` | 70px | Sticky header height |
| `--section-py` | 80px (desktop) / 64px (mobile) | Standard vertical section padding |

### 6.3 Responsive Grid System

| Breakpoint | Screen Width | Behavior |
|---|---|---|
| `xs` | < 480px | Single column; full-bleed cards |
| `sm` | 480px+ | 2 columns for most grids |
| `md` | 768px+ | 3 columns; tablet-optimized |
| `lg` | 1024px+ | 4 columns; desktop-ready |
| `xl` | 1280px+ | Full desktop layout; constrained by `--container-max` |

**Grid column behavior by component:**

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

## 7. Component Library

This section defines the visual and behavioral specification for every reusable UI element.

---

### 7.1 Buttons

**Button Size Variants:**

| Variant | Padding | Font Size | Border Radius | Use |
|---|---|---|---|---|
| `btn--sm` | 9px 18px | 12px | 8px | Product cards, inline actions |
| `btn--md` (default) | 13px 26px | 14px | 12px | Section CTAs, form submit |
| `btn--lg` | 16px 36px | 16px | 12px | Hero CTAs, section-level primaries |
| `btn--xl` | 20px 48px | 18px | 16px | WhatsApp CTA section button |

**Button Type Variants:**

| Variant | Default State | Hover State | Use Case |
|---|---|---|---|
| `btn--primary` | Black bg + Yellow text | Yellow bg + Black text | Main CTAs (Get Quote, View Details) |
| `btn--yellow` | Yellow bg + Black text | Black bg + Yellow text | Supporting CTAs (Browse, Download) |
| `btn--outline` | Transparent + Black border + Black text | Black bg + Yellow text | Tertiary actions |
| `btn--wa` | WhatsApp Green bg + White text | Darker green bg | All WhatsApp triggers |
| `btn--white` | White bg + Black text | Transparent + White border + White text | CTAs on dark/black sections |

**Button Rules:**
- All buttons use Syne font, bold weight
- Minimum tap target: 44px height (add padding if needed)
- Transition: 0.3s ease on background, color, border
- Active state: scale(0.97) for press feedback
- All buttons include hover transform: slight translateY(-1px) + enhanced box-shadow
- WhatsApp buttons always include the WhatsApp logo icon (SVG, left-aligned in button)

---

### 7.2 Product Cards

**Card Structure (top to bottom):**

```
┌─────────────────────────────────┐
│  [Badge: "Bestseller" | "New"]  │  ← Optional floating tag
│                                 │
│     Product Image               │  ← Aspect ratio: 4:3 or 1:1
│                                 │
├─────────────────────────────────┤
│  Product Name (H3, Syne Bold)   │
│  Short descriptor (Manrope 13px)│
│                                 │
│  [Chip] [Chip] [Chip]           │  ← GSM, material, etc.
│                                 │
│  ● ● ● ● ● ●                    │  ← Color swatches (18px circles)
│                                 │
│  [View Details]  [WhatsApp]     │  ← Two CTAs (outline + WA)
└─────────────────────────────────┘
```

**Card Visual Specs:**
- Border radius: 16px
- Background: White
- Border: 1px solid `--color-grey-200`
- Box shadow: `0 4px 24px rgba(0,0,0,0.06)`
- Hover: translateY(-4px) + enhanced shadow (`0 12px 40px rgba(0,0,0,0.12)`)
- Transition: 0.3s ease

**Color Swatches:**
- Size: 18px × 18px circles
- Border: White 2px border-ring with outer shadow
- White swatch: add 1.5px `--color-grey-200` border to distinguish from card background
- Tooltip on hover: color name (Manrope 11px)
- Maximum 6 swatches displayed; if more, show "+N"

**Spec Chips:**
- Padding: 4px 10px
- Border radius: 999px (pill shape)
- Background: `--color-grey-100`
- Border: 1px solid `--color-grey-200`
- Font: Manrope Medium 11px, `--color-grey-700`

---

### 7.3 Product Detail Modal

**Modal Layout — Desktop (max-width: 800px, centered):**

```
┌───────────────────────────────────────────────────┐
│                                               [×]  │
├──────────────────────┬────────────────────────────┤
│                      │  Product Name (H2)          │
│                      │  Material descriptor        │
│  Product Image       │                             │
│  (1:1, full-height)  │  Specifications             │
│                      │  [Chip] [Chip] [Chip]       │
│                      │                             │
│                      │  Available Colors           │
│                      │  ● ● ● ● ● ●               │
│                      │                             │
│                      │  Best For                   │
│                      │  • College Events           │
│                      │  • Team Wear                │
│                      │                             │
│                      │  Printing Methods           │
│                      │  [DTF] [Screen] [Embroidery]│
│                      │                             │
│                      │  [Download Catalog]         │
│                      │  [Chat on WhatsApp ↗]       │
└──────────────────────┴────────────────────────────┘
```

**Mobile Modal:** Full screen (100vw × 100vh), close button top-right, scrollable content, sticky CTA buttons at bottom.

**Modal Behavior:**
- Opens with fade-in + scale(0.95 → 1) animation (200ms)
- Overlay: black at 60% opacity
- Close: X button, overlay click, ESC key
- Body scroll locked while open
- Focus trapped within modal

---

### 7.4 Section Heading Component

A consistent heading treatment used across all sections:

```
[EYEBROW TEXT]          ← Manrope 500, 11px, uppercase, letter-spacing 0.12em
Section Title           ← Syne 800, varies by section (32–52px)
Supporting subtitle     ← Manrope 400, 17px, --color-grey-500, max-width 600px
```

**Alignment:**
- Default: Center-aligned (most sections)
- Exception: About section and some dual-column sections use left-aligned headings

---

### 7.5 FAQ Accordion

**Collapsed State:**
```
┌───────────────────────────────────────┬───┐
│  Question text (Syne Bold 16px)       │ + │
└───────────────────────────────────────┴───┘
```

**Expanded State:**
```
┌───────────────────────────────────────┬───┐
│  Question text (Syne Bold 16px)       │ − │
├───────────────────────────────────────┴───┤
│  Answer text (Manrope 400, 15px)          │
│  line-height: 1.7, color: --grey-700      │
└───────────────────────────────────────────┘
```

- Icon animation: rotate(0deg → 45deg) on expand, 0.2s ease
- Answer panel: max-height animation from 0 to auto (use CSS + JS for smooth)
- Bottom border on each item: 1px `--color-grey-200`
- Active question: background tints to `--color-yellow-light`
- One open at a time OR allow multiple — confirm with Modish team

---

### 7.6 Inquiry Form Fields

| Field | Type | Validation | Error Message |
|---|---|---|---|
| Full Name | Text input | Required, min 2 chars | "Please enter your full name" |
| Mobile Number | Tel input | Required, 10-digit Indian (6–9 start) | "Enter a valid 10-digit mobile number" |
| Email | Email input | Optional, standard email format | "Enter a valid email address" |
| Product Required | Select dropdown | Required | "Please select a product" |
| Quantity | Number input | Required, min 1 | "Please enter a quantity" |
| City | Text input | Required, min 2 chars | "Please enter your city" |
| Message | Textarea (4 rows) | Optional | — |

**Form Field Visual Specs:**
- Height: 52px for single-line inputs
- Padding: 0 16px
- Border: 1.5px solid `--color-grey-200`
- Border radius: 10px
- Focus border: 1.5px solid `--color-black`
- Error border: 1.5px solid `#E53E3E`
- Error text: 12px Manrope, red, appears below field
- Label: Manrope SemiBold, 13px, above field, `--color-black`
- Placeholder: `--color-grey-400`
- Font size: 16px minimum (prevents iOS auto-zoom)
- Background: White (even inside grey section)

---

### 7.7 Floating WhatsApp Button

- **Size:** 56px × 56px circle
- **Position:** Fixed, bottom-right: 20px from edges on mobile; 28px on desktop
- **Background:** `--color-whatsapp`
- **Icon:** WhatsApp SVG, white, 28px
- **Pulse animation:** `box-shadow` pulse ring, `--color-whatsapp` at 50% opacity, every 2.5s
- **Tooltip:** "Chat on WhatsApp", appears on hover (desktop only), Manrope 12px, black bg, white text, left of button
- **z-index:** `--z-floating: 700` (above all content except modals)
- **Hide rule:** Never hidden — always visible

---

### 7.8 Navigation Bar

**Desktop Layout:**
```
[MODISH logo + "Wear Your Mood"] · · · [Home] [Products] [Diaries] [Services] [About] [Contact] · [WhatsApp] [Get Quote ▶]
```

**Visual Specs:**
- Height: 70px
- Background: White (with bottom-border on scroll: 1px `--color-grey-200` + subtle shadow)
- Logo area: left-aligned
- Nav links: Manrope SemiBold 14px, `--color-black`, hover color: `--color-yellow-dark`, hover underline optional
- Active link: font-weight 700, `--color-black`, underline with `--color-yellow` (2px bottom border)
- CTA buttons: right-aligned, WhatsApp button (green, small) + Get Quote button (black-primary)
- Transition: background + shadow smoothly appear on scroll past 50px

**Mobile Layout:**
```
[MODISH logo]                [WhatsApp icon] [☰ Hamburger]
```

- Hamburger menu opens a full-width overlay drawer (not push or sidebar)
- Drawer: black background, white nav links, Syne 700 24px, 16px vertical padding each
- Drawer has a WhatsApp CTA at the bottom
- Close button (×) top-right of drawer

---

### 7.9 Marquee Ticker

- **Height:** 44px
- **Background:** `--color-black`
- **Text:** Manrope Medium 13px, white, uppercase, letter-spacing 0.08em
- **Separator:** · (bullet) in `--color-yellow`, margin 0 20px
- **Speed:** 30–35s for full loop (smooth, readable)
- **Pause on hover:** `animation-play-state: paused` on mouseover
- **Content repeats:** Duplicate the text block to create seamless loop

---

## 8. Section-by-Section Design Specifications

---

### 8.1 Header — Sticky Navigation

**States:**

| State | Appearance |
|---|---|
| Default (at top) | Background: White, no shadow |
| Scrolled (>50px) | Background: White with `box-shadow: 0 2px 20px rgba(0,0,0,0.08)`, subtle transition |
| On dark section | Background: stays white (does not change to transparent on dark hero) |

**Design Notes:**
- Logo treatment: MODISH wordmark in black, "Wear Your Mood" in Manrope 11px grey beneath
- Nav link spacing: 28px gap between links
- Mobile: show only logo + WhatsApp icon + hamburger; hide all text links
- CTA button "Get Quote" always present in header, scrolls to #inquiry

---

### 8.2 Hero Banner (Section 01)

**Slide Layout — Desktop:**

```
┌──────────────────────────────────────────────────────────────────┐
│ [DARK/YELLOW BACKGROUND — full viewport height minus header]      │
│                                                                   │
│   ┌─────────────────────────┐    ┌──────────────────────────┐    │
│   │                         │    │                          │    │
│   │  EYEBROW: "OUR PRODUCTS"│    │                          │    │
│   │                         │    │   Product Visual /       │    │
│   │  Bold Hero              │    │   Hero Image             │    │
│   │  Headline               │    │   (full-height)          │    │
│   │  Here                   │    │                          │    │
│   │                         │    │                          │    │
│   │  Supporting subtext     │    │                          │    │
│   │  one or two lines max   │    │                          │    │
│   │                         │    │                          │    │
│   │  [Browse Catalog]  [WA] │    │                          │    │
│   └─────────────────────────┘    └──────────────────────────┘    │
│                                                                   │
│                    ● ○ ○ ○  (slide dots)                         │
└──────────────────────────────────────────────────────────────────┘
```

**Slide Themes:**

| Slide | Topic | Background | Text Color | CTA Style |
|---|---|---|---|---|
| Slide 1 | Custom T-Shirts | Black `#0A0A0A` | White + Yellow headline | Yellow CTA + WA green |
| Slide 2 | Bulk Orders | Yellow `#F5C400` | Black | Black CTA + WA green |
| Slide 3 | Corporate Diaries | Black `#0A0A0A` | White + Yellow headline | Yellow CTA + WA green |
| Slide 4 | Merchandise | Yellow `#F5C400` | Black | Black CTA + WA green |

**Slide Dot Navigation:**
- Dots: 10px circles, white/yellow (matches slide theme), gap 8px
- Active: wider oval (24px width), filled
- Position: bottom-center of hero section, 24px from bottom
- Animation: width transition on active change

**Slide Transition:** Crossfade (opacity transition), duration 400ms ease

**Mobile Hero:** Text only (no product visual), 100vw full-bleed, min-height 85vh

---

### 8.3 Marquee Ticker (Section 02)

**Items (in order):**
`🎁 Bulk Order Discounts` · `✏️ Free Design Support` · `🚚 Pan India Delivery` · `🖨️ DTF Printing Available` · `👕 Custom T-Shirts` · `🎪 Event Merchandise` · `🎉 Corporate Gifting` · `⭐ Quality Guaranteed`

**Design Note:** Emoji before each item adds visual rhythm without being playful. Can be replaced with small SVG icons if preferred. Confirm with Modish team.

---

### 8.4 Product Categories (Section 03)

**Section Layout:**

- Eyebrow: "OUR PRODUCTS"
- H2: "What We Make"
- Subtext: "Premium custom merchandise, crafted to represent your brand."
- Grid: 4 columns (desktop) → 2 (tablet) → 1 (mobile)
- Product Count: 7 cards (Round Neck · Oversized · Polo · Hoodie · Gym Vest · Tote Bag · Accessories)

**Product Card Image Treatment:**
- Background: white or `--color-grey-50`
- Product centered, with slight top-crop (show item from torso up)
- Aspect ratio: 1:1 or 4:3
- No product card shadow on image area — shadow on full card only

**Badge Usage:**
- "Bestseller" — Round Neck or Oversized (confirm with Modish)
- "Popular" — Hoodie
- No badges on all cards (keep it selective for authenticity)

---

### 8.5 Why Choose Modish (Section 04)

**Layout:** 6-card grid, `--color-grey-100` background

**Card Content (each):**

```
[Large Icon — 40px × 40px — yellow or black fill]
Card Title (Syne Bold 18px)
Short description (Manrope 14px, --grey-500, 2 lines max)
```

**Cards:**
1. Premium Quality — fabric + printing standards
2. Multiple Printing Technologies — DTF / Screen / Embroidery / Sublimation
3. Digital Mockups Before Production — see before you pay
4. Quality Check at Every Step — zero-defect process
5. Pan India Delivery — ship anywhere in India
6. Competitive Pricing — value without compromise

**Card Visual:** White card, 1px `--color-grey-200` border, 16px radius, hover: translateY(-3px) + yellow left-border accent (3px)

---

### 8.6 How It Works — Process Flow (Section 05)

**Layout:**
- Horizontal flow with numbered steps (desktop)
- Vertical stacked with left connector line (mobile)
- Connector line: 1px dashed `--color-yellow`, connects step number circles

**Step Visual:**
```
[Circle: step number, yellow bg]
      |
[Step Icon]
Step Title (Syne SemiBold 15px)
Short description (Manrope 13px, grey)
```

**5 Steps:**
1. Send Your Design
2. Receive Digital Mockup
3. Production Begins
4. Quality Check
5. Delivery to Your Door

**Connector:** Yellow dashed line, horizontal on desktop (above the step circles), hidden on mobile

---

### 8.7 Printing Technologies (Section 06)

**Background:** Black (`#0A0A0A`)

**Layout:** 4 cards in a row (desktop), 2×2 (tablet), 1 column (mobile)

**Card Design (dark cards on black section):**
- Background: `#111111` (slightly lighter than section bg)
- Border: 1px solid `rgba(255,255,255,0.08)`
- Border radius: 16px
- Hover: border color to `--color-yellow` (0.5), subtle glow
- Icon: Geometric illustration or icon, white/yellow
- Title: Syne Bold, white
- Best-for tags: yellow chips (small)
- Benefits: white body text

**4 Technologies:**
1. DTF Printing — best for: multicolor designs, photo prints
2. Screen Printing — best for: single-color bulk, long-lasting
3. Embroidery — best for: premium workwear, caps, polo
4. Sublimation — best for: sportswear, all-over prints

---

### 8.8 Stats Counter (Section 07)

**Background:** Yellow `#F5C400`

**Layout:** 4 stats in a horizontal row

**Stat Item:**
```
[Number Counter: bold, Syne 800, 56px]
[Suffix: +]
[Label: Manrope Medium 15px, black, uppercase, letter-spacing]
```

**4 Stats:**
- Orders Completed
- Happy Customers
- Cities Delivered
- Products Printed

**Animation:** Count up from 0 on first viewport entry. Use easeOut for natural deceleration (not linear). Trigger once, not on re-entry.

**Design Note:** This section should feel triumphant. Consider a subtle diagonal stripe or texture pattern in a slightly darker yellow as a background texture (not overpowering).

---

### 8.9 Diaries & Corporate Gifting (Section 08)

**Background:** Black `#0A0A0A`

**Section Header:**
- Eyebrow: "CORPORATE GIFTING" (yellow text)
- H2: "Premium Diaries & Gift Sets" (white)
- Subtext: "Crafted for brands that want to leave a lasting impression." (grey)

**Diary Card Design:**
```
┌────────────────────────┐
│   Diary Image          │  ← soft warm background
│   (1:1 ratio)          │
├────────────────────────┤
│  Diary Name (H3)       │  ← Syne Bold, white
│  [Tag] [Tag]           │  ← closure type, material (yellow chips)
│  Best for description  │  ← Manrope 12px, grey
└────────────────────────┘
```

- Card background: `#111111`
- Hover: card border animates to yellow
- Grid: 5 columns (desktop) → 3 (tablet) → 2 (mobile)

**Gift Sets Sub-section:**
- Collapsible or separate row below diary grid
- Visual: "Gift Set" badge on relevant diary cards

**Section CTA:**
- "View Diary Catalog" — yellow button (btn--yellow btn--lg)
- Opens external PDF in new tab

---

### 8.10 Trusted Clients (Section 09)

**Background:** `--color-grey-100`

**Section Header:**
- Eyebrow: "TRUSTED BY"
- H2: "Brands That Wear Modish"

**Client Display:**
- Horizontal scrolling marquee of client name chips/badges
- Two marquee rows moving in opposite directions (adds visual depth)
- Chip design: white background, 1px border, Manrope SemiBold 13px, black text, 8px 16px padding, pill shape
- If logos available: show logo inside chip; if not, text chip works well

**8 Clients:**
Chandrabhan Sharma College · Empower · Agam Yoga · Graaura · Gurukrupa Catering · Vatika · Kid's Tutorial · Azz Diagnostic

---

### 8.11 Catalog Downloads (Section 10)

**Layout:** 2 large catalog cards, side by side (desktop), stacked (mobile)

**Catalog Card Design:**
```
┌──────────────────────────────────────────────┐
│                                              │
│  [Catalog Cover Illustration or Icon]       │
│                                              │
│  Catalog Name (Syne Bold 22px)              │
│  Description (Manrope 14px, grey)           │
│                                              │
│  [↓ Download Clothing Catalog]              │  ← btn--yellow or btn--outline
│  "Opens PDF in new tab"                     │  ← helper text, 11px grey
│                                              │
└──────────────────────────────────────────────┘
```

- Card background: White with yellow accent strip on left (4px vertical bar in yellow)
- Border: 1px `--color-grey-200`, radius 16px
- Hover: slight lift + yellow shadow (`--shadow-yellow`)

**2 Catalogs:**
1. Clothing Catalog — T-Shirts, Hoodies, Accessories
2. Diary Collection — All 10 models + gift sets

---

### 8.12 Inquiry / Quote Form (Section 11)

**Background:** `--color-grey-100`

**Layout — Desktop:** 2-column (form left 60%, info panel right 40%)
**Layout — Mobile:** Single column, full-width

**Info Panel (Right Column):**
```
[Yellow accent bar — 4px top border]
Getting a Quote is Easy
✓ Response within 24 hours
✓ Free digital mockup provided  
✓ No minimum commitment to inquire
✓ WhatsApp follow-up included

[Chat on WhatsApp instead →]
```

**Form Visual:**
- Form card: white background, 16px radius, `--shadow-md`
- Label: Manrope SemiBold 13px
- Input: 52px height, 1.5px border, 10px radius
- Submit button: `btn--primary btn--full btn--lg` — "Get My Quote →"
- Success state: replace form with confirmation card (green checkmark + message)

---

### 8.13 WhatsApp CTA Section (Section 12)

**Background:** Yellow `#F5C400`

**Layout:** Full-width, text-center, generous vertical padding (80px+)

```
"Need Instant Pricing?"          ← Syne 800, 48–56px, black
Your message gets a reply        ← Manrope 17px, black
in under 24 hours.

Mon–Sat, 10am–7pm               ← Manrope 13px, --grey-700

[💬 Chat on WhatsApp]           ← btn--wa btn--xl, centered
```

**Design Note:** This is a conversion-critical section. Keep it clean — just the headline, subtext, hours, and CTA. Nothing else. The yellow background does the heavy lifting visually.

---

### 8.14 About Modish (Section 13)

**Background:** White

**Layout — Desktop:** 2-column (text left, brand card right)

**Left Column:**
- Eyebrow: "OUR STORY"
- H2: "Made in Mumbai. Worn Across India."
- Brand mission paragraph (2–3 sentences)
- 4 Core Values as visual tiles (icon + title + one-liner)

**Right Column — Brand Highlight Card:**
```
┌──────────────────────────────┐
│  [Yellow top accent bar]     │
│                              │
│     MODISH                   │  ← Large wordmark
│     Wear Your Mood           │
│                              │
│  Mumbai, India               │
│  Est. 2022                   │
│                              │
│  Custom Merchandise          │
│  Pan India Delivery          │
│  B2B & B2C Orders            │
└──────────────────────────────┘
```

- Card: black background, yellow accent, Syne typography

**4 Core Values:**
- Designed on request (placeholder: Quality · Creativity · Reliability · Transparency)
- Icon + bold title + 1-line description in small tiles

---

### 8.15 FAQ Section (Section 14)

**Background:** `--color-grey-100`

**Layout:** Single column, centered (max-width 780px), or 2-column grid (desktop)

**Section Header:**
- Eyebrow: "FAQ"
- H2: "Everything You Need to Know"

**8 Required Questions:**
1. What is your minimum order quantity (MOQ)?
2. Do you provide design mockups before production?
3. How does the bulk ordering process work?
4. What are your delivery timelines?
5. What printing methods do you offer?
6. How is pricing determined?
7. Can I customize colors, sizes, and placements?
8. What is your return or replacement policy?

**Accordion Design:** See Section 7.5 above.

---

### 8.16 Contact Section (Section 15)

**Background:** Black `#0A0A0A`

**Layout:** 4 contact cards in a horizontal row (desktop), 2×2 grid (tablet), stacked (mobile)

**Contact Card Design:**
```
┌──────────────────────┐
│  [Icon, white, 32px] │
│  [Contact Type]      │  ← Manrope SemiBold, yellow, 12px uppercase
│  [Contact Value]     │  ← Syne Bold, white, 18px
│  [Label]             │  ← Manrope 12px, grey
└──────────────────────┘
```

- Card background: `#111111`
- Border: 1px `rgba(255,255,255,0.08)`
- Hover: border to `--color-yellow`, icon color to yellow
- All cards are clickable links

**4 Cards:**
| Icon | Type | Value | Action |
|---|---|---|---|
| WhatsApp icon | WhatsApp | +91 91368 67622 | Opens wa.me chat |
| Instagram icon | Instagram | @modish.now | Opens instagram.com/modish.now |
| Email icon | Email | modish.new@gmail.com | Opens mailto |
| Location pin | Location | Mumbai, India | Opens Google Maps (optional) |

---

### 8.17 Footer (Section 16)

**Background:** Black `#0A0A0A`
**Top border:** 1px solid `rgba(255,255,255,0.1)`

**Layout:** 4-column grid (desktop), 2×2 (tablet), stacked (mobile)

**Column 1 — Brand:**
- MODISH wordmark (white)
- "Wear Your Mood" tagline
- 1-line brand summary
- Social icons: Instagram + WhatsApp

**Column 2 — Quick Links:**
- Home · Products · Diaries · Services · About · Contact

**Column 3 — Products:**
- Round Neck · Oversized · Polo · Hoodie · Gym Vest · Tote Bag · Accessories

**Column 4 — Contact:**
- WhatsApp number (link)
- Email (link)
- Instagram (link)
- Quick catalog download links

**Footer Bottom Bar:**
- Full-width black bar below columns
- Left: "© 2025 Modish. All rights reserved."
- Right: "Made in Mumbai 🧡" or similar — adds personality

---

## 9. Interaction & Motion Design

### 9.1 Scroll Reveal Animations

**Default Reveal:**
- Elements animate from `opacity: 0; transform: translateY(28px)` → `opacity: 1; transform: translateY(0)`
- Duration: 0.6s ease
- Trigger: IntersectionObserver at 12% visibility threshold
- Fires once only (no repeat on re-entry)

**Stagger for Grids:**
When multiple cards appear simultaneously, stagger their reveal:
- Card 1: 0ms delay
- Card 2: 80ms delay
- Card 3: 160ms delay
- Card 4: 240ms delay
- Card 5+: continue at 80ms intervals

### 9.2 Hover Microinteractions

| Element | Hover Behavior |
|---|---|
| Product card | translateY(-4px) + enhanced shadow |
| Why Choose card | translateY(-3px) + 3px left yellow border appears |
| Printing tech card | Border color animates to yellow |
| Diary card | Border color animates to yellow |
| Catalog card | Lift + yellow box-shadow |
| Contact card | Border + icon color animate to yellow |
| Nav links | Underline grows from center (using pseudo-element scale) |
| Buttons | Background/color swap + translateY(-1px) |
| Color swatches | Scale(1.2) + tooltip appears |

### 9.3 Transition Standards

| Purpose | Duration | Easing |
|---|---|---|
| Hover state changes | 0.2s | ease |
| Card hovers (lift) | 0.3s | cubic-bezier(0.4, 0, 0.2, 1) |
| Modal open/close | 0.2s | ease |
| Scroll reveal | 0.6s | ease |
| Stats counter | 2.0s | easeOut |
| Hero slide transition | 0.4s | ease |
| Mobile menu open/close | 0.3s | cubic-bezier(0.4, 0, 0, 1) |
| Button active press | 0.08s | ease |

### 9.4 WhatsApp Pulse Animation

```css
@keyframes pulseWA {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
  70%  { box-shadow: 0 0 0 18px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
```
- Repeats every 2.5s (animation-duration: 2.5s, iteration: infinite)
- Provides a subtle "alive" signal that encourages interaction

### 9.5 Accessibility — Reduced Motion

All animations must respect `prefers-reduced-motion: reduce`:
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all transitions and animations */
  /* Reveal elements immediately without animation */
}
```

---

## 10. Mobile & Responsive UX

### 10.1 Mobile-First Design Priorities

1. **Hero must load fast and feel native** — minimum content above fold: headline + one CTA + slide indicator
2. **Product cards at 2-column grid minimum** — single column feels too sparse below 480px
3. **All CTAs thumb-friendly** — minimum 44px tap targets, CTA buttons full-width in cramped layouts
4. **WhatsApp first on mobile** — floating button must be immediately visible; push above any cookie banners
5. **Form inputs ≥ 16px font** — prevents auto-zoom on iOS Safari
6. **No hover-only affordances** — anything shown on hover desktop must be visible by default on mobile

### 10.2 Critical Mobile-Specific Design Decisions

| Component | Mobile Behavior |
|---|---|
| Header | Logo + WA icon + hamburger only; no nav links |
| Hero | Text + CTAs only; product image hidden (saves space, loads faster) |
| Process steps | Vertical stack with connecting left border line |
| Product modal | Full-screen overlay (100vh × 100vw), scrollable |
| Catalog cards | Stacked vertically, full-width |
| FAQ | Single column, full-width accordion |
| Inquiry form | Single-column, full-width fields |
| Footer | 1-column stack; brand info first |

### 10.3 Touch Interaction Requirements

- **Swipe on Hero:** Left swipe → next slide; right swipe → previous slide (50px minimum delta)
- **Scrolling marquees:** Touch-passthrough (don't capture scroll); pause on touch-hold
- **Modals:** Close on swipe-down (like native bottom sheets) — optional enhancement
- **Color swatches:** Tap to select, show tooltip for 1.5s on tap (mobile can't hover)

### 10.4 Safe Area & Notch Handling

```css
/* Floating WA button — respect iPhone notch/home bar */
.floating-wa {
  bottom: max(20px, env(safe-area-inset-bottom) + 12px);
  right: max(20px, env(safe-area-inset-right) + 12px);
}
```

---

## 11. Conversion-Focused Design Principles

### 11.1 CTA Hierarchy Rules

Every visible screen (desktop) or scroll position (mobile) should have at least one conversion path visible. Priority order:

1. **WhatsApp (always visible)** — floating button covers this globally
2. **Section-level CTA** — most sections have a CTA that leads toward inquiry or WhatsApp
3. **Product-level CTA** — each product card has a direct WhatsApp button
4. **Form as last resort** — for buyers who prefer structured inquiry

### 11.2 WhatsApp Message Design

Pre-filled WhatsApp messages must feel human, specific, and low-friction. They should make the user feel like they've already started a conversation.

| Trigger | Message |
|---|---|
| Header button | "Hi Modish! I'd like to know more about your products." |
| Hero CTA | "Hi Modish! I'm interested in placing an order. Can you help?" |
| Product card | "Hi Modish! I'm interested in your [Product Name]. Can you share pricing?" |
| Floating button | "Hi Modish! I need help with a custom order. 😊" |
| WhatsApp CTA section | "Hi Modish! I need a quote for a bulk order." |
| Inquiry form alternate | "Hi Modish! I've submitted an inquiry and would like to discuss further." |
| Diary/catalog | "Hi Modish! I just viewed your catalog. Can we discuss an order?" |

### 11.3 Urgency & Trust Signals

**Use these design tactics strategically:**
- Stats counter section: positioned before the inquiry form to build confidence
- Trusted clients: shown after stats for double social proof punch
- "Response within 24 hours" text near inquiry form and WhatsApp CTA
- Working hours displayed in WhatsApp CTA section
- Quality check step in the How It Works flow (reassures about quality)
- FAQ near end of page to clear final objections before contact section

---

## 12. Accessibility Design Guidelines

### 12.1 WCAG 2.1 Level AA Compliance Requirements

| Criterion | Design Decision |
|---|---|
| **Color contrast** | All text meets 4.5:1 minimum; black on yellow = 11.8:1 (AAA) |
| **Non-text contrast** | UI components (borders, icons) meet 3:1 against background |
| **Touch target size** | All interactive elements minimum 44×44px |
| **Focus visible** | All interactive elements have a visible focus ring (use 2px offset `--color-yellow` outline for brand alignment) |
| **Keyboard navigation** | Tab order follows visual reading order; modals trap focus correctly |
| **Alternative text** | All product images, icons, and hero images have descriptive alt text |
| **Heading structure** | Exactly one H1; logical H2→H3→H4 hierarchy |
| **Form labels** | Every input has a visible label (not just placeholder) |
| **Error identification** | Form errors shown adjacent to fields in red, not color alone |
| **Motion** | All animations respect `prefers-reduced-motion` |
| **Language** | `<html lang="en">` declared |

### 12.2 Focus Ring Design

Replace default browser outline with branded focus ring:
```css
:focus-visible {
  outline: 2px solid var(--color-yellow);
  outline-offset: 3px;
  border-radius: 4px;
}
```

This keeps accessibility while matching the brand palette.

### 12.3 ARIA Requirements Summary

| Component | Required ARIA |
|---|---|
| Modal | `role="dialog"` `aria-modal="true"` `aria-labelledby` `aria-hidden` |
| Hero slider | `role="region"` `aria-label` `aria-live="polite"` |
| Slide dots | `role="tablist"` with `role="tab"` `aria-selected` per dot |
| FAQ accordion | `aria-expanded` on button + `aria-controls` pointing to answer panel |
| Marquee | `aria-hidden="true"` (decorative, not critical content) |
| Floating WA button | `aria-label="Chat on WhatsApp"` |
| Form | Proper `<label for="">` on all fields |

---

## 13. Design Deliverables Checklist

### 13.1 Required Design Files (from Design Team)

| # | Deliverable | Format | Priority |
|---|---|---|---|
| D1 | Desktop Wireframes — all 16 sections | Figma / PDF | 🔴 High |
| D2 | Mobile Wireframes — all 16 sections | Figma / PDF | 🔴 High |
| D3 | High-Fidelity Desktop Mockups | Figma | 🔴 High |
| D4 | High-Fidelity Mobile Mockups | Figma | 🔴 High |
| D5 | Component Library / UI Kit | Figma | 🔴 High |
| D6 | Hero Slide Designs (4 variants) | Figma / PNG | 🔴 High |
| D7 | Product Detail Modal — desktop + mobile | Figma | 🔴 High |
| D8 | Navigation states (default, scrolled, mobile open) | Figma | 🔴 High |
| D9 | Hover state annotations for all interactive elements | Figma annotations | 🟡 Medium |
| D10 | Motion spec / prototype (key interactions) | Figma prototype or Lottie | 🟡 Medium |
| D11 | Dark section designs (Printing Tech, Diaries, Contact) | Figma | 🔴 High |
| D12 | Inquiry form — empty, error, success states | Figma | 🔴 High |
| D13 | Color + typography style guide | Figma | 🟡 Medium |
| D14 | OG image for social sharing (1200 × 630) | PNG/JPG | 🟡 Medium |

### 13.2 Content Required from Modish Team

| # | Content Item | Quantity | Notes |
|---|---|---|---|
| C1 | Product flat-lay photos | 1–3 per product | WebP preferred, 600×600px min |
| C2 | Hero banner product shots | 4 images | Vertical orientation, high resolution |
| C3 | Diary product photos | 1–2 per diary model | Clean background |
| C4 | Print sample photos (DTF, screen, embroidery) | 3–5 total | Show texture/quality |
| C5 | Client logos | 8 logos | PNG transparent background |
| C6 | Brand wordmark / logo files | All variants | SVG + PNG |
| C7 | Stats numbers | 4 figures | Orders, customers, cities, products |
| C8 | Brand story copy | 100–150 words | Mission, vision, brief history |
| C9 | Core values (4) | 4 names + 1-liners | For About section tiles |
| C10 | Working hours | 1 line | For WhatsApp CTA section |
| C11 | FAQ answers | 8+ answers | Match 8 core questions in brief |

---

## 14. Design Handoff Notes

### 14.1 For the Developer

**Fonts:** Load via Google Fonts CDN. Use `rel="preconnect"` for performance.
```
Syne: weights 400, 600, 700, 800
Manrope: weights 300, 400, 500, 600, 700
```

**Icons:** Deliver all icons as inline SVG, not an icon font or image files. This ensures crisp rendering, easy color control via `currentColor`, and no CDN dependency.

**CSS Architecture:** Use CSS custom properties (variables) for all colors, font sizes, spacing, and z-index values. Never use raw hex or px values in component styles.

**JS Approach:** Vanilla JS only. No jQuery, no frameworks. All modules wrapped in try/catch for isolated failure.

**Images:** All delivered in WebP with JPG fallback via `<picture>` element. All include `width` and `height` attributes and `loading="lazy"` (except above-fold hero images which use `loading="eager"` and `fetchpriority="high"`).

### 14.2 Design QA Checkpoints

Before handoff, verify:
- [ ] All button states (default, hover, focus, active, disabled) designed
- [ ] All form states (empty, filled, error, success) designed
- [ ] Modal designed for desktop (centered) and mobile (full-screen)
- [ ] Navigation designed for default, scrolled, and mobile-open states
- [ ] Hero designed for all 4 slides, both color themes
- [ ] Dark sections (Printing Tech, Diaries, Contact) designed with proper contrast
- [ ] Stats counter section designed for both before and after animation state
- [ ] All 16 sections include a mobile version
- [ ] WhatsApp buttons use `#25D366` consistently (no approximations)
- [ ] Yellow `#F5C400` is exact — not warm-shifted or bright-shifted

### 14.3 Design-to-Development Spec Sheet

Include in Figma:
- Exact HEX values on every color (not named/swatch-only)
- Exact spacing values for each component in px
- Font size, weight, and line-height for every text element
- Border width, border-radius, and shadow values
- Hover state overlays with diff annotation (what changes)
- Animation notes (duration, easing, direction) for all motion elements
- Breakpoint behavior note on every section/component

---

## Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | May 2026 | Design Brief | Initial brief derived from PRD v1.0, TRD v1.0, and Web Flow document |

---

*This Design UI/UX Brief is the single source of design truth for the Modish website. All UI/UX design, visual design, and prototyping work should align with the specifications in this document. Any deviations require documentation and team approval before implementation.*
