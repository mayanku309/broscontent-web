# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**broscontent.in** — website for an AI-powered marketing & automation agency exclusively serving dental clinics in India. B2B niche targeting dental clinic owners in Tier-1 and Tier-2 Indian cities.

**Core services:** AI lead generation, WhatsApp automation, appointment booking systems, AI content creation.

**Positioning:** Only Indian agency that is both dental-only AND AI-automation-first — this intersection is the core competitive differentiator and must be reflected in all copy.

---

## Tech Stack & Commands

**Framework:** Vite + React 18 (`react-router-dom` v7 for routing)  
**Deployment:** Vercel (auto-deploys from `main` branch)  
**Live site:** https://www.broscontent.in

```bash
npm install          # install dependencies
npm run dev          # start local dev server (localhost:5173)
npm run build        # production build (dist/)
npm run preview      # serve production build locally
npm run lint         # ESLint
```

---

## Site Architecture

All routes are defined in `src/App.jsx`. The app uses client-side routing — `BrowserRouter` wraps everything; `Navbar` and `Footer` render on every page.

```
/                          → src/pages/Home.jsx
/content-marketing-agency  → src/pages/ContentMarketingAgency.jsx
/services/ai-lead-generation   → src/pages/services/AILeadGeneration.jsx
/services/whatsapp-automation  → src/pages/services/WhatsAppAutomation.jsx
/services/appointment-systems  → src/pages/services/AppointmentSystems.jsx
/services/content-creation     → src/pages/services/ContentCreation.jsx
/blog                          → src/pages/blog/BlogIndex.jsx
/blog/how-to-get-more-patients-dental-clinic-india → src/pages/blog/HowToGetMorePatients.jsx
```

---

## Design System

CSS variables live in `src/index.css`. Key tokens:

| Variable | Value | Use |
|---|---|---|
| `--bg-primary` | `#09090b` | Page background |
| `--bg-secondary` | `#111113` | Alternate section background |
| `--bg-card` | `#16161a` | Card / elevated surface |
| `--accent` | `#d4a017` | Gold — CTAs, highlights, emphasis |
| `--text-primary` | `#fafafa` | Body text |
| `--text-secondary` | `#a1a1aa` | Secondary / descriptive text |
| `--font-heading` | Outfit | Section titles, h1–h3 |
| `--font-body` | Inter | Body copy |

---

## Component Patterns

**Reusable components** are in `src/components/`. Most have a paired `.css` file.

- `Button.jsx` — `variant="primary"` or `variant="secondary"`, accepts `onClick`, `style`, `type`, `disabled`
- `AuditForm.jsx` — full lead capture form; submits to WhatsApp. Embed at the bottom of any page.
- `FAQ.jsx` — collapsible FAQ with `useState` toggle. For service/blog pages, build an inline FAQ using the same `faq-item` / `faq-question` / `faq-answer` class pattern from `FAQ.css`.
- `Navbar.jsx` — scroll-aware, mobile hamburger. Navigation links use `scrollIntoView` for home page anchors.

**Styling pattern** used in pages: import component CSS files from `src/components/`, then use inline `style={{ }}` props with CSS variable references (e.g., `style={{ color: 'var(--accent)' }}`). No separate page-level CSS files are needed.

---

## SEO & Schema Rules

- Every service page must inject `Service` + `FAQPage` JSON-LD via `useEffect` (see `AILeadGeneration.jsx` for the exact pattern — creates a `<script>` tag, returns a cleanup that removes it on unmount)
- Blog articles inject `Article` + `FAQPage` JSON-LD (see `HowToGetMorePatients.jsx`)
- FAQ questions use `<h3>` with answer in the first sentence — answer-first format for AI search
- Every service page links to at least 2 other service pages via `<Link>` from `react-router-dom`
- `public/sitemap.xml` must be updated whenever a new page is added
- `public/robots.txt` is already configured correctly — do not modify

---

## Primary Target Keywords

- `dental clinic marketing India`
- `AI marketing for dentists`
- `dental lead generation India`
- `WhatsApp automation dental clinic`
- `dental appointment automation`
- `dental marketing agency India`

City-specific variants (Mumbai, Bangalore, Delhi) are high-intent targets for future landing pages.

---

## Lead Capture

`AuditForm.jsx` submits form data to WhatsApp number `+17052029483` as a pre-filled message. This is the primary lead capture mechanism across all pages.
