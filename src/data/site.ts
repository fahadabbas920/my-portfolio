export const siteConfig = {
  name: "Fahad Abbas",
  role: "Full-Stack SaaS Engineer",
  tagline: "Product Engineer & Technical Lead",
  location: "Lahore, Pakistan",
  email: "fahadabbas920@gmail.com",
  github: "https://github.com/fahadabbas920",
  linkedin: "https://linkedin.com/in/fahadabbas920",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://fahadabbas.dev").replace(/\/+$/, ""),
  description:
    "Fahad Abbas is a Full-Stack SaaS Engineer and Product Engineer who builds and leads delivery of production software — from requirements and architecture through implementation and deployment.",
} as const;
