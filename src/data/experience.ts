export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  highlights: string[];
  primary: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "CloudEva Tech",
    role: "Software Development Engineer I",
    location: "Lahore, Pakistan",
    start: "Jan 2025",
    end: "Present",
    current: true,
    summary:
      "Building and leading delivery of production SaaS applications across the full stack — from requirements and architecture through implementation and deployment.",
    highlights: [
      "Contribute across frontend, backend, architecture, integrations and deployment on multiple SaaS products",
      "Lead teams across projects to keep delivery on track and technically sound",
      "Work directly with clients in Pakistan and Dubai to translate requirements into shipped features",
      "Build new SaaS applications from scratch and extend existing production systems",
    ],
    primary: true,
  },
  {
    company: "3 Amigos",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    start: "Nov 2024",
    end: "Jan 2025",
    current: false,
    summary: "Worked primarily on React-based applications.",
    highlights: ["Developed and maintained React application features"],
    primary: false,
  },
  {
    company: "Ventech Studio",
    role: "Associate Software Engineer",
    location: "Lahore, Pakistan",
    start: "Dec 2023",
    end: "Nov 2024",
    current: false,
    summary:
      "Worked across a broader web stack spanning React, Vue and Laravel-based applications.",
    highlights: [
      "Built features with React, TypeScript, Vue and Laravel/Inertia",
      "Worked with PHP, Node.js/Express and MySQL across projects",
    ],
    primary: false,
  },
];
