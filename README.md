# INVEST YO SARL — Corporate Website

> Modern professional corporate website for INVEST YO SARL, a Moroccan company specialized in electromechanical, industrial equipment, metal construction, logistics, and digital solutions.

---

## 📁 Project Structure

```
investyo-website/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Strengths.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ScrollToTop.tsx
│   │   └── seo/
│   │       └── SEOHead.tsx
│   ├── hooks/
│   │   ├── useInView.ts
│   │   └── useCounter.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   └── validation.ts
│   ├── styles/
│   │   └── index.css
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd investyo-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Branding Guidelines

### Logo Concept
The INVEST YO logo consists of:
- **Monogram**: "IY" in Playfair Display Bold within a rounded amber square
- **Wordmark**: "INVEST YO" in Playfair Display 700 with "SARL" subtitle in DM Sans uppercase

### Color Palette

| Token         | Hex       | Usage                            |
|---------------|-----------|----------------------------------|
| Navy          | `#0A1628` | Primary background, text         |
| Deep Blue     | `#0F2847` | Secondary backgrounds            |
| Steel         | `#1E3A5F` | Tertiary, card backgrounds       |
| Amber/Accent  | `#F59E0B` | CTAs, highlights, brand accent   |
| Amber Hover   | `#D97706` | Button hover states              |
| Light         | `#F1F5F9` | Section backgrounds (light)      |
| White         | `#FFFFFF` | Cards, text on dark              |
| Gray          | `#94A3B8` | Secondary text                   |
| Dark Gray     | `#334155` | Body text on light backgrounds   |

### Typography

| Role     | Font              | Weights         | Usage                    |
|----------|-------------------|-----------------|--------------------------|
| Display  | Playfair Display  | 600, 700, 800   | Headings, hero titles    |
| Body     | DM Sans           | 300–700         | Body text, UI elements   |

### Spacing Scale
Based on Tailwind defaults: 4px base unit.
- Section padding: `py-24` (96px) to `py-28` (112px)
- Component gaps: `gap-4` (16px) to `gap-12` (48px)

### Brand Voice (French)
- Professional, confident, technical
- Emphasize expertise & reliability
- Use industry-specific terminology

---

## 🔍 SEO Implementation

### Meta Tags
Each page includes comprehensive meta tags via `react-helmet-async`:
- Title, description, keywords
- Open Graph (Facebook, LinkedIn)
- Twitter Cards
- Canonical URLs

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "INVEST YO SARL",
  "url": "https://investyo.ma",
  "logo": "https://investyo.ma/logo.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rue 64 Quartier Taghalef",
    "addressLocality": "M'Rirt",
    "addressRegion": "Khénifra",
    "addressCountry": "MA"
  },
  "telephone": "+212630715846",
  "email": "ste.investyo@gmail.com",
  "foundingDate": "2024-03-08",
  "founder": { "@type": "Person", "name": "Younes Ouamira" }
}
```

### Performance
- Lazy-loaded sections via `IntersectionObserver`
- Optimized fonts with `display=swap`
- Tree-shaken icons (inline SVG)
- CSS animations preferred over JS

---

## ♿ Accessibility

- Semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- `aria-expanded` on expandable cards
- Keyboard-navigable menu and forms
- Sufficient color contrast (WCAG AA)
- Focus-visible indicators on inputs

---

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload `dist/` folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
```

### cPanel / Shared Hosting
1. Run `npm run build`
2. Upload contents of `dist/` to `public_html/`
3. Add `.htaccess` for SPA routing:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## 🛠 Tech Stack

| Technology      | Purpose                |
|-----------------|------------------------|
| React 18        | UI Framework           |
| TypeScript      | Type Safety            |
| Vite            | Build Tool             |
| TailwindCSS 3   | Utility-first CSS      |
| React Router 6  | Client-side Routing    |
| react-helmet    | SEO Meta Tags          |

---

## 📄 License

© 2024–2026 INVEST YO SARL. All rights reserved.

---

*Built with precision for INVEST YO SARL — M'Rirt, Khénifra, Morocco*
