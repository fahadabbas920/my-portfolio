import type { LifecycleIconName } from "@/components/ui/icons";

export type LifecycleStage = {
  title: string;
  description: string;
  icon: LifecycleIconName;
};

export const projectLifecycle: LifecycleStage[] = [
  {
    title: "Discovery & requirements",
    description:
      "Understanding the problem, the users and the constraints before writing any code — turning ambiguous requirements into a scoped plan.",
    icon: "search",
  },
  {
    title: "Architecture & design",
    description:
      "Defining the data model, system architecture and UI approach, with an eye on what the product needs to support as it grows.",
    icon: "compass",
  },
  {
    title: "Development",
    description:
      "Building the feature set end to end — frontend, backend, integrations — with regular check-ins to keep scope and quality aligned.",
    icon: "code",
  },
  {
    title: "QA & testing",
    description:
      "Verifying the product against real workflows and edge cases, not just the happy path, before it reaches users.",
    icon: "shieldCheck",
  },
  {
    title: "Launch & deployment",
    description:
      "Shipping to production with a deployment process that's repeatable, and monitoring closely once real traffic hits the system.",
    icon: "rocket",
  },
  {
    title: "Post-launch support",
    description:
      "Staying involved after launch — fixing issues, refining based on real usage and continuing to ship as the product evolves.",
    icon: "lifeBuoy",
  },
];
