import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCover({
  project,
  size = "sm",
}: {
  project: Project;
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={`relative overflow-hidden bg-surface ${
        size === "sm" ? "aspect-16/10" : "aspect-21/9"
      }`}
    >
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        fill
        sizes={size === "sm" ? "(min-width: 1024px) 50vw, 100vw" : "100vw"}
        className="object-cover object-top"
        priority={size === "lg"}
      />
    </div>
  );
}
