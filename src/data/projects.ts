export type Project = {
  slug: string;
  name: string;
  industry: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  confidential: boolean;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "scripter-digital",
    name: "Scripter Digital",
    industry: "Healthcare SaaS",
    role: "Full-Stack Engineer",
    description:
      "A multi-portal healthcare SaaS platform serving practitioners, organizations, patients and super admins, each with distinct workflows, permissions and data access.",
    highlights: [
      "Practitioner, organization, patient and super-admin portals on one platform",
      "Role-based access control across four distinct user types",
      "Full-stack feature development from data model to UI",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "RBAC"],
    confidential: true,
  },
  {
    slug: "property-care-ai",
    name: "Property Care AI",
    industry: "Real Estate SaaS",
    role: "Full-Stack Engineer",
    description:
      "A real-estate SaaS platform with dedicated admin and agent experiences, incorporating AI-assisted workflows to support day-to-day property operations.",
    highlights: [
      "Separate admin and agent-facing workflows on a shared platform",
      "AI-assisted features integrated into core operational flows",
      "End-to-end feature ownership from API to interface",
    ],
    technologies: ["Next.js", "TypeScript", "AI Integrations", "PostgreSQL"],
    confidential: true,
  },
  {
    slug: "clarifi-benefits",
    name: "Clarifi Benefits",
    industry: "Healthcare / Insurance",
    role: "Full-Stack Engineer",
    description:
      "A dental and health benefits reimbursement platform spanning web and mobile, combining OCR and AI-assisted document processing with Stripe-based payment workflows for claims.",
    highlights: [
      "Web and mobile applications sharing a common backend",
      "OCR and AI-assisted processing for claims and reimbursement documents",
      "Stripe integration for payment and reimbursement workflows",
    ],
    technologies: ["Node.js", "Express", "FastAPI", "Stripe", "OCR / AI"],
    confidential: true,
  },
  {
    slug: "replyiq",
    name: "ReplyIQ",
    industry: "Social Platform Integrations",
    role: "Full-Stack Engineer",
    description:
      "A social platform product built around integrations with external platforms, connecting third-party APIs into a single, reliable workflow.",
    highlights: [
      "Integration layer coordinating multiple external platform APIs",
      "Reliability-focused handling of third-party data and auth flows",
    ],
    technologies: ["TypeScript", "Node.js", "REST APIs", "Third-Party Integrations"],
    confidential: true,
  },
  {
    slug: "vendify",
    name: "Vendify",
    industry: "Vendor / Marketplace SaaS",
    role: "Full-Stack Engineer",
    description:
      "A vendor and seller-focused application supporting seller-side operations and workflows within a broader marketplace product.",
    highlights: ["Seller-facing features built on a modern React/Next.js stack"],
    technologies: ["React", "Next.js", "TypeScript"],
    confidential: true,
  },
];
