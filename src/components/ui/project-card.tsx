import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/ui/tag";
import { ArrowUpRightIcon, LockIcon } from "@/components/ui/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-fg-subtle">{project.industry}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
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
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-fg-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="text-fg-subtle">{project.role}</span>
        {project.caseStudyUrl ? (
          <Link
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
          >
            Case study
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        ) : (
          <span className="text-fg-subtle">Details on request</span>
        )}
      </div>
    </article>
  );
}
