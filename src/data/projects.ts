export type Project = {
  slug: string;
  name: string;
  industry: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  confidential: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "healthcare-practitioner-platform",
    name: "Scripter Digital",
    industry: "Healthcare SaaS",
    role: "Full-Stack Engineer",
    description:
      "A multi-tenant platform connecting healthcare practitioners, clinics, and patients for consultations, prescriptions, and appointment scheduling, with support for clinical protocol templates, telehealth video calls, and integrated payments.",
    highlights: [
      "Built a versioned clinical-protocol (PGD) template system with semantic versioning, full cascade migration of subscriptions/consultations/documents on major version bumps, and automatic sign-off expiry notifications",
      "Implemented dual payment processor support (Stripe subscriptions + Mollie Connect OAuth) alongside AI-assisted clinical documentation using Claude via Pydantic AI and MCP",
      "Designed multi-tenant authorization across four distinct portals (practitioner, organization, patient, admin) with separate auth schemes — JWT, magic links, and custom patient tokens — plus org-privilege and subscription-tier gating enforced via decorators",
      "Integrated real-time features including SSE-based patient notifications and Whereby-powered telehealth video calls with token-based permalink auth",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Alembic",
      "TypeScript",
      "Next.js",
      "React",
      "Turborepo",
      "pnpm",
      "Stripe",
      "Mollie",
      "AWS S3",
      "Claude AI (Pydantic AI + MCP)",
      "APScheduler",
      "Tailwind CSS",
      "React Query",
      "React Hook Form + Zod",
    ],
    confidential: true,
    image: "/scripter-digital.png",
  },
  {
    slug: "director-discovery-platform",
    name: "Trohv",
    industry: "Media & Entertainment Tech",
    role: "Full-Stack Engineer",
    description:
      "A talent-discovery platform that helps advertising and production agencies search, evaluate, and book commercial directors. It ingests director portfolios and showreels at scale, uses AI to analyze video content, and matches directors to creative briefs based on style, technique, and genre.",
    highlights: [
      "Built an AI video-analysis pipeline (Google Gemini) that auto-tags director showreels with camera-technique and genre metadata, feeding a pgvector-backed embedding search and tag-density relevance scoring for brief-to-director matching",
      "Built a mass-import system that scrapes agency websites and parses PDF/DOCX/PPTX/Excel rosters (BeautifulSoup, lxml, pdfplumber, python-docx/pptx, openpyxl) with fuzzy duplicate detection (RapidFuzz) and a human review/approval queue for pending changes",
      "Designed a multi-role platform (agencies, directors, admins) with tokenized external share links, taxonomy management, film-award tracking, and a briefs workflow connecting agencies to matched director recommendations",
      "Built an async job architecture for video sourcing across YouTube/Vimeo (yt-dlp), website scraping, and scheduled weekly refresh/re-analysis of director profiles",
    ],
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "TanStack Query/Table",
      "React Hook Form",
      "Zod",
      "Tailwind CSS 4",
      "Radix UI / shadcn",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "pgvector",
      "Alembic",
      "Anthropic Claude API",
      "Google Gemini",
      "Cloudflare R2 (boto3)",
      "yt-dlp",
      "BeautifulSoup/lxml",
      "pandas",
      "JWT auth (python-jose, bcrypt)",
    ],
    confidential: true,
    image: "/trohv.png",
  },
  {
    slug: "basketbee",
    name: "BasketBee",
    industry: "Delivery Marketplace",
    role: "Full-Stack Engineer",
    description:
      "A multi-vendor, hyperlocal grocery delivery platform with cash-on-delivery checkout, live order tracking, and background GPS rider dispatch. Built for local shops to sell through one customer app while a platform admin approves and onboards vendors.",
    highlights: [
      "Designed a multi-tenant data model (stores, store_members, per-store orders) so a single cart can split across vendors into child orders with independent delivery fees, while Postgres RLS — not app code — enforces tenant isolation and role access for admins, vendors, riders, and customers",
      "Built atomic, trigger-based inventory management in Postgres (row-level locking on order insert, automatic restock on cancellation) to prevent overselling under concurrent checkouts, backed by a shared order-status state machine mirrored by a DB transition-guard trigger",
      "Shipped three coordinated surfaces on one Supabase backend — a Next.js PWA for customers, a role-gated Next.js ops console for admins/stock keepers, and an Expo/React Native rider app with TaskManager-based background GPS streamed over Supabase Realtime",
      "Kept third-party API keys server-only by routing all geocoding through a Supabase Edge Function proxy (Mapbox/Google, switchable at runtime via a settings table) instead of exposing secrets to any client bundle, and moved phone-based signup through a dedicated edge function using synthetic email accounts on top of Supabase Auth",
    ],
    technologies: [
      "TypeScript",
      "Next.js 16 / React 19",
      "Expo SDK 54 / React Native",
      "Supabase (Postgres, Auth, Realtime, Storage, Edge Functions/Deno)",
      "Tailwind CSS v4",
      "shadcn/ui + Radix UI",
      "Zod",
      "Turborepo + pnpm workspaces",
      "Mapbox / Google Maps APIs",
    ],
    confidential: true,
    image: "/basket-bee.png",
  },
  {
    slug: "inboxai",
    name: "InboxAI",
    industry: "Productivity SaaS",
    role: "Full-Stack Engineer",
    description:
      "A unified inbox web app that lets teams connect multiple Gmail and Outlook accounts and read, send, and manage email threads from a single chat-style interface, with organization-level user and role management.",
    highlights: [
      "Built OAuth2 integrations for both Gmail (Google APIs) and Outlook (Microsoft Graph via MSAL), with automatic access-token refresh and AES-256-CBC encryption of stored tokens/refresh tokens",
      "Designed a multi-tenant RBAC system (organizations, roles, permissions, module-based access) enforced end-to-end with CASL abilities on the frontend and Postgres RLS/foreign-key-scoped tables in Supabase",
      "Implemented a unified, provider-agnostic inbox that normalizes Gmail and Outlook messages into a common thread model with infinite-scroll pagination via TanStack Query",
      "Modeled the Postgres schema through 9 incremental Supabase migrations covering multi-org accounts, granular permissions/role_permissions, and linked email account views across providers",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase (Postgres, Auth, SSR)",
      "Tailwind CSS",
      "shadcn/ui (Radix UI)",
      "TanStack Query",
      "TanStack Table",
      "CASL",
      "Google APIs (googleapis, google-auth-library)",
      "Microsoft Graph API",
      "@azure/msal-node",
      "Zod",
      "React Hook Form",
    ],
    confidential: true,
    image: "/clarifi.png",
  },
];
