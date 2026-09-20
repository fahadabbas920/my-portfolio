"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";

const PAGE_SIZE = 4;

export function SelectedWorkGrid({ projects }: { projects: Project[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, PAGE_SIZE);

  return (
    <>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={index * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {!expanded && projects.length > PAGE_SIZE ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface"
          >
            Load more projects
          </button>
        </div>
      ) : null}
    </>
  );
}
