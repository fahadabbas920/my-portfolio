# Fahad Abbas — Portfolio

Personal portfolio site for Fahad Abbas, Full-Stack SaaS Engineer / Product Engineer. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Stack

- Next.js 16 (App Router, React Server Components)
- TypeScript
- Tailwind CSS v4
- Geist Sans / Geist Mono (`next/font`)
- No UI/animation libraries — hand-rolled scroll reveals via `IntersectionObserver`, respecting `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set your production domain:

```bash
cp .env.example .env.local
```

| Variable               | Required                          | Purpose                                                                                                                                                                                             |
| ---------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No (has a fallback)               | Used for canonical URLs, `sitemap.xml`, `robots.txt` and Open Graph metadata.                                                                                                                       |
| `RESEND_API_KEY`       | Yes, for the contact form to work | Sends contact form submissions to your inbox via [Resend](https://resend.com). Without it, the form shows a friendly error asking visitors to email you directly — the rest of the site works fine. |

### Setting up the contact form (Resend)

The contact form at the bottom of the page posts to `/api/contact`, which sends you an email via Resend using their free plan (3,000 emails/month, no credit card, no domain needed for this use case).

1. Sign up at [resend.com](https://resend.com) using the **same email address** as `siteConfig.email` in `src/data/site.ts` (currently `fahadabbas920@gmail.com`).
2. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).
3. Add it to `.env.local`: `RESEND_API_KEY=re_xxxxxxxx`.
4. Add the same variable in your hosting provider's environment variable settings before deploying (see [Deploying](#deploying) below).

This setup sends from Resend's shared `onboarding@resend.dev` address, which on the free plan can only deliver to the email you signed up with — that's exactly what you want here, since submissions should land in your own inbox. If you later want the "From" address to look like `@yourdomain.com`, verify a domain in Resend and update the `from` field in `src/app/api/contact/route.ts`.

## Editing content

All personal/site content lives in `src/data/` as plain TypeScript objects — no content is hardcoded inside components:

- `site.ts` — name, role, email, GitHub/LinkedIn links, site URL
- `nav.ts` — top navigation links
- `projects.ts` — Selected Work case studies
- `experience.ts` — professional timeline
- `capabilities.ts` — Engineering Capabilities cards
- `approach.ts` — Engineering Approach principles

`src/data/site.ts` has your real email, GitHub and LinkedIn set. `siteUrl` still falls back to a placeholder domain (`https://fahadabbas.dev`) — set `NEXT_PUBLIC_SITE_URL` once you have a real domain.

## Project structure

```
src/
  app/            Routes, layout, metadata, sitemap, robots, OG image
  components/
    layout/       Navbar, Footer
    sections/     Page sections (Hero, SelectedWork, Capabilities, ...)
    ui/           Reusable primitives (Reveal, Tag, ProjectCard, icons, ...)
  data/           Content, separated from presentation
```

## Building for production

```bash
npm run build
npm run start
```

## Deploying

This app has a server-side API route (`/api/contact`, used by the contact form), so it needs to run as a Node server — a static-file host won't work here.

### Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Set the `NEXT_PUBLIC_SITE_URL` and `RESEND_API_KEY` environment variables.
4. Deploy — Vercel auto-detects Next.js and runs the API route as a serverless function, no extra config needed.

### Render

Use a **Web Service**, not a Static Site — a Static Site only serves pre-built files and can't run `/api/contact`.

1. New → **Web Service**, connect this repository.
2. Runtime: **Node**.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm run start`
5. Add `NEXT_PUBLIC_SITE_URL` and `RESEND_API_KEY` under Environment.
6. Leave any "Publish Directory" field blank — it doesn't apply to a Web Service.

A `render.yaml` is included at the repo root, so you can also deploy this as a [Render Blueprint](https://render.com/docs/blueprint-spec) instead of configuring it by hand.
