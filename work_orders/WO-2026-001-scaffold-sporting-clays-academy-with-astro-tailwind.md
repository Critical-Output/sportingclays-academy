---
id: WO-2026-001
title: Scaffold Sporting Clays Academy with Astro + Tailwind
goal: Replace the existing sportingclays.academy site with a new Astro + Tailwind build. Modern, fast, SEO-optimized marketing site for the Sporting Clays Academy brand.
context: []
acceptance_criteria:
  - Astro project initialized with Tailwind CSS
  - Responsive landing page with hero, instructor bios, course previews, testimonials, CTA
  - "SEO optimized: meta tags, Open Graph, structured data (Course schema)"
  - Mobile-first responsive design
  - RudderStack tracking snippet integrated for cross-domain analytics
  - Link decoration for cross-domain identity (append anonymous_id to platform links)
  - Contact form with Resend email integration
  - DialedIQ voice agent embed/widget placeholder
  - Cloudflare Pages deployment configuration
  - "Performance target: Lighthouse score > 90 on all metrics"
non_goals: []
stop_conditions:
  - If existing site content/assets are not available, use placeholder content and note blocker
  - If Cloudflare Pages deployment config is blocked by DNS, deploy to Netlify as fallback
priority: 1
tags: []
estimate_hours: 0.5
status: done
created_at: 2026-02-17
updated_at: 2026-02-19
depends_on: []
era: v0
---
## Notes
- 
