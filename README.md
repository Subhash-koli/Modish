
  # Modish — Catalog & Lead Generation Website

A modern, responsive web application for showcasing Modish's bespoke merchandise and custom diary printing services. Built with React, Vite, and Tailwind CSS.

**🌐 Live Site:** [Modish Website](https://modish-now.com)  
**📧 Contact:** [Get In Touch](mailto:hello@modish.com)  
**💬 WhatsApp:** [Chat with us](https://wa.me/919136867622)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Building](#building)
- [Usage](#usage)
- [Components](#components)
- [Styling & Design System](#styling--design-system)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **📱 Fully Responsive Design** — Optimized for desktop, tablet, and mobile devices
- **🛍️ Product Catalog** — Browse complete range of t-shirts, hoodies, diaries, and accessories
- **💌 Lead Generation Forms** — Inquiry forms with validation and WhatsApp integration
- **📸 Image Gallery** — Showcase product variants and printing techniques
- **⚡ Fast Performance** — Built with Vite for instant HMR and optimized builds
- **🎨 Modern UI** — Clean, professional design using shadcn/ui components
- **🔍 SEO Optimized** — Semantic HTML and meta tags for better search visibility
- **📱 Bottom Mobile Bar** — Easy access to CTA buttons on mobile devices
- **💬 WhatsApp Integration** — Direct messaging with pre-filled inquiry details
- **📊 Analytics Ready** — Structure supports Google Analytics integration

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 18.3.1 |
| **Build Tool** | Vite 6.3.5 |
| **Styling** | Tailwind CSS 4.1.12 |
| **Component Library** | shadcn/ui |
| **UI Icons** | Lucide React 0.487.0 |
| **State Management** | React Hooks |
| **Form Handling** | React Hook Form 7.55.0 |
| **Animations** | Motion (Framer Motion alternative) |
| **Carousel** | Embla Carousel React |
| **Charts & Analytics** | Recharts 2.15.2 |
| **Notifications** | Sonner 2.0.3 |
| **Package Manager** | pnpm (Workspace) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main application component
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mobile menu
│   │   ├── HeroBanner.tsx      # Main hero section with featured products
│   │   ├── ProductGrid.tsx     # Product showcase grid
│   │   ├── ProductModal.tsx    # Product detail modal
│   │   ├── InquiryForm.tsx     # Lead capture form
│   │   ├── WhyChooseSection.tsx # USP section
│   │   ├── HowItWorks.tsx      # Process explanation
│   │   ├── PrintingTech.tsx    # Printing technique showcase
│   │   ├── StatsCounter.tsx    # Key metrics display
│   │   ├── DiariesSection.tsx  # Custom diary showcase
│   │   ├── TrustedClients.tsx  # Client logos
│   │   ├── CatalogDownloads.tsx # PDF download section
│   │   ├── AboutSection.tsx    # Company information
│   │   ├── FAQSection.tsx      # Frequently asked questions
│   │   ├── ContactSection.tsx  # Contact information
│   │   ├── Footer.tsx          # Site footer
│   │   ├── FloatingWhatsApp.tsx # Floating WhatsApp button
│   │   ├── MobileBottomBar.tsx # Mobile CTA bar
│   │   ├── MarqueeTicker.tsx   # Scrolling text ticker
│   │   └── ui/                 # shadcn/ui components (buttons, forms, etc.)
│   ├── imports/
│   │   ├── LOGO_*.jpeg         # Logo files
│   │   ├── Modish catalog/     # Product images
│   │   ├── Custom Diary catalog/ # Diary samples
│   │   └── *.md                # Documentation files
│   └── styles/
│       ├── globals.css         # Global styles
│       ├── fonts.css           # Custom fonts
│       ├── theme.css           # Design token variables
│       ├── tailwind.css        # Tailwind directives
│       └── index.css           # Component-specific styles
├── main.tsx                    # React entry point
├── vite-env.d.ts              # Vite type definitions
└── vite.config.ts             # Vite configuration

public/
├── index.html                 # HTML template
└── [assets]

Guidelines.md                  # Design system guidelines
ATTRIBUTIONS.md               # Open source attributions
.gitignore                    # Git ignore rules
package.json                  # Dependencies & scripts
postcss.config.mjs            # PostCSS configuration
vite.config.ts                # Vite build configuration
README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 16.x (latest LTS recommended)
- **pnpm** ≥ 8.x (or npm/yarn as alternatives)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Catalog and Lead Generation Website"
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   Or with npm:
   ```bash
   npm install
   ```

### Development

Start the development server with hot module replacement (HMR):

```bash
pnpm run dev
```

The app will be available at `http://localhost:5173`

**Features during development:**
- Fast refresh on file changes
- Full TypeScript support with type checking
- Tailwind CSS JIT compilation
- Console error/warning messages

### Building

Create a production-optimized build:

```bash
pnpm run build
```

Output files are generated in the `dist/` directory.

**Build optimizations:**
- Tree shaking of unused code
- CSS minification and purging
- Asset compression
- Code splitting for faster loads

---

## 📖 Usage

### Available Scripts

| Command | Purpose |
|---------|---------|
| `pnpm run dev` | Start development server on port 5173 |
| `pnpm run build` | Build for production to `dist/` folder |
| `pnpm install` | Install or update dependencies |

### Page Sections

The website is organized into logical sections (all with `id` anchors for linking):

- **#home** — Header and hero banner
- **#products** — Product showcase grid
- **#diaries** — Custom diary section
- **#printing** — Printing technology showcase
- **#about** — Company information
- **#contact** — Contact and inquiry form
- **#inquiry** — Lead capture form

### Navigation

- **Desktop:** Full navigation menu in header with active section highlighting
- **Mobile:** Hamburger menu with full-screen drawer overlay
- **Global:** Bottom action bar with WhatsApp and Get Quote CTAs on mobile

---

## 🎨 Components

### Core Components

#### Header.tsx
Main navigation with:
- Logo and branding
- Desktop navigation menu
- Mobile hamburger menu
- Active section tracking
- WhatsApp & Quote CTAs

#### ProductGrid.tsx
Displays products with:
- 3-column grid (responsive)
- Product cards with images and specs
- Click-to-expand modal view
- Variant showcase

#### InquiryForm.tsx
Lead capture with:
- Name, mobile, email fields
- Product selection dropdown
- Quantity input
- Message textarea
- Form validation
- Google Form submission
- WhatsApp pre-fill

#### FloatingWhatsApp.tsx
Persistent WhatsApp button for direct messaging

#### MobileBottomBar.tsx
Sticky bottom bar on mobile with:
- WhatsApp CTA
- Get Quote button

### UI Components (shadcn/ui)

Located in `src/app/components/ui/`:
- Button, Input, Textarea
- Select, Dialog, Drawer
- Accordion, Alert, Badge
- Form, Card, Skeleton
- And 30+ more...

---

## 🎨 Styling & Design System

### Design Tokens

Defined in `src/styles/theme.css`:

```css
/* Colors */
--modish-black: #000000
--modish-white: #FFFFFF
--modish-yellow: #FFD700
--modish-yellow-dark: #FFC700
--modish-whatsapp: #25D366
--modish-grey-*: Various grey tones

/* Spacing */
--modish-space-*: 4px increments (4, 8, 12, 16, ...)

/* Typography */
--font-heading: 'Heading Font'
--font-body: 'Body Font'

/* Radius & Shadows */
--modish-radius-*: Rounded corners
--modish-shadow-*: Box shadows
```

### Tailwind CSS

Custom Tailwind configuration in `tailwind.config.js` (if present) or using default Tailwind with custom CSS variables.

### CSS Organization

```
styles/
├── fonts.css       → Font imports and face definitions
├── globals.css     → Global element styles
├── theme.css       → Design system variables
├── tailwind.css    → Tailwind imports and directives
└── index.css       → Component-specific overrides
```

---

## ⚙️ Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
- React plugin for JSX support
- Tailwind CSS plugin for JIT compilation
- Asset include rules for media files
- Path alias @ → src/
```

### Environment Variables

Create `.env` file if needed:
```env
VITE_API_URL=https://api.example.com
VITE_GA_ID=your-google-analytics-id
```

### Build Targets

- Modern browsers (ES2020+)
- Mobile browsers (iOS Safari, Chrome Android)
- Fallback support via polyfills (if needed)

---

## 👥 Contributing

### Code Style

- **Formatting:** Consistent with React best practices
- **Naming:** camelCase for variables/functions, PascalCase for components
- **Props:** Use TypeScript interfaces for component props
- **Styling:** Prefer Tailwind classes over inline styles (except for dynamic values)

### Adding a New Component

1. Create component file in `src/app/components/`
2. Use TypeScript and React Hooks
3. Export as named export
4. Import and use in parent component
5. Add responsive styles using Tailwind

Example:
```typescript
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export function MyComponent({ title, children }: Props) {
  return (
    <div className="my-custom-class">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

---

## 📄 License

This project is proprietary to Modish. All rights reserved.

---

## 📞 Support

- **Email:** hello@modish.com
- **WhatsApp:** +91 91368-67622
- **Website:** https://modish-catalog.com

---

## 🔗 Related Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Design Guidelines](./guidelines/Guidelines.md)

---

**Last Updated:** May 30, 2026  
**Version:** 1.0.0
  