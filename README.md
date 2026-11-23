# Dharan SEO Consultancy Website (Nepal)

A high-performance, semantically architected **29-page static SEO consultancy website** tailored for an SEO expert firm based in **Dharan, Sunsari, Koshi Province, Nepal** — pre-configured for zero-build **Vercel** deployment.

Built with pure semantic HTML5, lightweight CSS3, deferred vanilla JavaScript, interconnected Schema.org JSON-LD (`@graph`), and zero external build dependencies—engineered for top Core Web Vitals, Google Organic Search, Local SEO, Topical Authority, and AI Answer Engines.

## Deploy on Vercel (1-Click / Zero Build)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsayarbhujel01-create%2Fdharan-seo-consultancy)

Or import directly from [vercel.com/new](https://vercel.com/new) using these settings:
- **Framework Preset:** `Other`
- **Root Directory:** `.`
- **Build Command:** *(leave empty)*
- **Output Directory:** `.`

### Included Vercel Optimizations
- [`vercel.json`](./vercel.json): Enforces `cleanUrls: true` and `trailingSlash: true` (matching all canonical URLs and `sitemap.xml` with clean 308 redirects), immutable 1-year caching for `/assets/*`, fresh cache revalidation for `sitemap.xml` / `robots.txt` / `llms.txt`, and security headers (`HSTS`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`).
- [`.vercelignore`](./.vercelignore): Keeps local helper scripts (`preview.ps1`) and internal markdown checklists out of public production deployments.
- [`404.html`](./404.html): Branded, `noindex, follow` custom 404 error page served automatically by Vercel with HTTP `404` status.

## Information Architecture (Three-Layer Topical Map)

### A. Entity Home & Five Core Commercial Money Pages
- `/` — Homepage (Entity Home, Interactive SEO Priority Finder, Generic vs. Specialist Comparison)
- `/seo-services-dharan/` — SEO Services in Dharan (17 sections)
- `/local-seo-services-dharan/` — Local SEO Services in Dharan (16 sections)
- `/technical-seo-services-nepal/` — Technical SEO Services Nepal (17 sections)
- `/on-page-seo-services-nepal/` — Website & On-Page SEO Services Nepal (17 sections)
- `/ecommerce-seo-services-nepal/` — E-commerce SEO Services Nepal (17 sections)

### B. Outer Section: Topical Authority Knowledge Hub (`/resources/`)
15 dedicated supporting SEO guides (3 per Core Money Page) with Centerpiece Annotation Answer Boxes, structured checklists/tables, `Article` + `FAQPage` JSON-LD, and contextual internal linking back to their parent money pages.

### C. Trust, Entity & Conversion Layer
- `/about/` — Consultancy Identity & E-E-A-T Placeholders
- `/seo-process/` — Six-Phase White-Hat Methodology
- `/free-seo-audit/` — Primary Website Audit Lead Capture Page
- `/contact/` — Consultation Form, WhatsApp, Click-to-Call & Koshi Province Coverage
- `/case-studies/` — Evidence-First Results Framework (Zero Fabricated Claims)
- `/privacy-policy/` & `/terms-of-service/`

### Technical & AI Search Files
- `robots.txt` — Search & AI crawler directives
- `sitemap.xml` — Complete XML sitemap covering all 29 canonical URLs
- `llms.txt` — Structured directory for AI Answer Engines
- `site.webmanifest` — Web app manifest

## Local Preview (Windows, Zero Dependencies)

```powershell
powershell -ExecutionPolicy Bypass -File .\preview.ps1
```

Then visit `http://localhost:8080/`.

## Pre-Launch Configuration

Before publishing live on your custom domain, review [`SITE-CONFIG-CHECKLIST.md`](./SITE-CONFIG-CHECKLIST.md) to replace all clearly labeled placeholders (`domain`, `brand name`, `Dharan street address`, `phone`, `WhatsApp`, `email`, and `verified case study slots`).
