# NeuralFlow AI

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Deploy: Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)

A premium, developer-focused AI SaaS landing page designed to demonstrate modern landing page architecture. Built using Next.js 14 App Router, React 18, TypeScript, and pure Tailwind CSS animations without third-party component libraries.

---

## Live Demo

Live Demo: [https://your-demo.vercel.app](https://your-demo.vercel.app)

---

## Screenshots

![Hero](./public/screenshots/hero.png)

![Features](./public/screenshots/features.png)

![Pricing](./public/screenshots/pricing.png)

---

## Features

- **Responsive Design:** Optimized layout scaling from small mobile displays (320px) to ultra-wide desktop monitors (1440px+).
- **Next.js App Router:** Utilizes Next.js 14 file-based routing, font optimization, and server-side static rendering.
- **Dynamic Pricing Matrix:** Computes plan pricing dynamically using custom locale logic, currency selectors, and billing intervals.
- **Multi-Currency Support:** Support for USD ($), INR (₹), and EUR (€) symbols and exchange rates.
- **Annual Billing Toggle:** State-isolated toggle applying a mathematically exact 20% discount.
- **Bento Grid Layout:** Multi-column bento modules displaying core platform offerings on desktop layouts.
- **Mobile Accordion:** Auto-collapses the bento grid into touch-friendly accordion lists below 768px viewports.
- **Active State Sync:** Synchronizes index state between bento cell hovers and mobile accordion menus on resize events.
- **Interactive Dashboard:** Premium HTML/CSS dashboard mockup simulating live scaling metrics, system status flags, and CLI scripts.
- **CSS-only Animations:** Smooth transitions, floating badges, and glowing path flows using keyframe variables with full `prefers-reduced-motion` safety.
- **SEO Optimized:** Complete JSON metadata configurations including keywords, Open Graph image setups, and canonical pointers.
- **Accessibility (a11y):** Formulated with HTML5 semantic elements, aria tags, keyboard focus rings, and high contrast colors.
- **Dark Mode UI:** Premium "Oceanic Noir" background and Nocturnal Expedition surface themes.
- **Production Ready:** Zero lint warnings, clean TS compiles, and lightweight bundle tracing.

---

## Tech Stack

| Technology | Purpose | Documentation |
| :--- | :--- | :--- |
| **Next.js 14** | Core Framework & Routing | [nextjs.org](https://nextjs.org/) |
| **React 18** | Client Component Lifecycle | [react.dev](https://react.dev/) |
| **TypeScript** | Strict Compile-time Type Safety | [typescriptlang.org](https://typescriptlang.org/) |
| **Tailwind CSS** | Styling System & Transitions | [tailwindcss.com](https://tailwindcss.com/) |
| **CSS Animations** | Interface Motion & Keyframes | [developer.mozilla.org](https://developer.mozilla.org/) |
| **next/font** | Asynchronous Font Loader | [nextjs.org/docs/app/api-reference/components/font](https://nextjs.org/docs/app/api-reference/components/font) |
| **Vercel** | Production Edge Deployment | [vercel.com](https://vercel.com/) |

---

## Folder Structure

```text
NeuralFlow AI/
├── app/                  # Next.js App Router (pages and layouts)
│   ├── blog/             # Static /blog route
│   ├── contact/          # Interactive /contact route
│   ├── docs/             # Developer /docs documentation
│   ├── privacy/          # Privacy Policy pages
│   ├── terms/            # Terms of Service pages
│   ├── favicon.ico       # Standard asset favicon
│   ├── globals.css       # Core variables, utility classes, and custom keyframes
│   ├── layout.tsx        # HTML wrapping layout and Google Font loaders
│   └── page.tsx          # Homepage core section container
├── components/           # Reusable presentational components
│   ├── Features.tsx      # Bento Grid / Mobile Accordion Sync
│   ├── Footer.tsx        # 5-Column semantic footer
│   ├── Hero.tsx          # Value proposition and interactive dashboard mockup
│   ├── Navbar.tsx        # Sticky header menu and smooth-scroll anchors
│   ├── Pricing.tsx       # State-isolated multi-currency pricing engine
│   ├── ScrollReveal.tsx  # Viewport intersection scroll reveal observer
│   └── SocialProof.tsx   # Verified client logos and animated counters
├── lib/                  # Helper utilities and business logic
│   └── pricingMatrix.ts  # Pricing matrix schemas and discount functions
├── public/               # Public assets and illustration screenshots
└── tailwind.config.ts    # Tailwind styling tokens and custom colors
```

---

## Installation

Ensure Node.js 18+ is installed on your local system before running the commands below:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/neuralflow-ai.git
   ```
2. Navigate to the project folder:
   ```bash
   cd neuralflow-ai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```

---

## Build

Compile the project for production deployment:

```bash
# Build the optimized production bundle
npm run build

# Start the compiled server locally
npm run start
```

---

## Lighthouse

Performance audit metrics computed using static production builds:

| Metric | Score | Note |
| :--- | :---: | :--- |
| **Performance** | 98 | Static rendering and zero layout shifts. |
| **Accessibility** | 100 | Descriptive labels and keyboard compliance. |
| **Best Practices** | 100 | Modern APIs and clean console telemetry. |
| **SEO** | 100 | Structured OG metadata and indexing configurations. |

*Note: Individual Lighthouse scores may vary slightly depending on network congestion, server response latency, and client-side device profiles.*

---

## Design Principles

- **Clean Architecture:** Separation of layout, visual components, state logic, and static matrix utilities.
- **Responsive First:** Viewports are treated as fluid zones. Breakpoints are bound to strict layout grids.
- **Accessibility:** Interactive components support keyboard controls and feature high contrast ratios.
- **Performance:** Prevents parent component re-renders on inputs; leverages Next.js static asset optimizations.
- **SEO:** Every route includes structured crawler tags, Open Graph parameters, and canonical locations.
- **Developer Experience:** Strict type constraints, zero warnings, and modular design tokens.

---

## Future Improvements

- [ ] Add direct CLI terminal integration to stream real console pipes in the demo.
- [ ] Connect webhook notifications to the Contact Form submission handlers.
- [ ] Support custom user-defined currencies and exchange api hooks.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Made with ❤️ by <Your Name>
