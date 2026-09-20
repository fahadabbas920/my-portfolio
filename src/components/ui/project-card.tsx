"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/tag";
import { ProjectCover } from "@/components/ui/project-cover";
import { ArrowUpRightIcon, LockIcon } from "@/components/ui/icons";

const VISIBLE_HIGHLIGHTS = 2;

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = project.highlights.length > VISIBLE_HIGHLIGHTS;
  const visibleHighlights = expanded
    ? project.highlights
    : project.highlights.slice(0, VISIBLE_HIGHLIGHTS);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-fg-subtle">{project.industry}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">
              {project.name}
            </h3>
          </div>
          {project.confidential ? (
            <span
              title="Project details are confidential"
              className="mt-1 flex items-center gap-1.5 whitespace-nowrap font-mono text-xs text-fg-subtle"
            >
              <LockIcon className="h-3.5 w-3.5" />
              Confidential
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-fg-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {visibleHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 text-sm text-fg-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 self-start text-xs font-medium text-accent transition-colors hover:text-accent/80"
          >
            {expanded
              ? "Show less"
              : `Show ${project.highlights.length - VISIBLE_HIGHLIGHTS} more`}
          </button>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
          <span className="text-fg-subtle">{project.role}</span>
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
          >
            See more details
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
