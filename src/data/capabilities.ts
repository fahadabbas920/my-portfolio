export type Capability = {
  title: string;
  description: string;
  icon: "layers" | "code" | "server" | "database" | "cloud" | "users";
};

export const capabilities: Capability[] = [
  {
    title: "Product Engineering",
    description:
      "Taking SaaS products from concept through production — understanding requirements, making technical decisions and shipping.",
    icon: "layers",
  },
  {
    title: "Frontend Engineering",
    description:
      "React and Next.js applications with strong component architecture, TypeScript and responsive, accessible UX.",
    icon: "code",
  },
  {
    title: "Backend Engineering",
    description:
      "Node.js, Express and FastAPI services — REST APIs, authentication, authorization and third-party integrations.",
    icon: "server",
  },
  {
    title: "SaaS Architecture",
    description:
      "Multi-tenant systems, role-based access control, data modeling and APIs structured to scale with the product.",
    icon: "database",
  },
  {
    title: "Cloud & Delivery",
    description:
      "Docker, CI/CD and cloud deployment across Vercel, Render and AWS, from staging environments to production releases.",
    icon: "cloud",
  },
  {
    title: "Technical Leadership",
    description:
      "Breaking down requirements, coordinating engineers and making the technical decisions that keep delivery on track.",
    icon: "users",
  },
];
