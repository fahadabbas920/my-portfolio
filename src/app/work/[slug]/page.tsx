import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { ProjectCover } from "@/components/ui/project-cover";
import { LifecycleTimeline } from "@/components/ui/lifecycle-timeline";
import { ArrowLeftIcon, ArrowUpRightIcon, LockIcon } from "@/components/ui/icons";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="py-16 sm:py-20">
      <Container>
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <ArrowLeftIcon className="h-3.5 w-3.5" />
          Back to selected work
        </Link>

        <div className="mt-8">
          <p className="font-mono text-sm text-accent">{project.industry}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {project.name}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-muted">
            <span>{project.role}</span>
            {project.confidential ? (
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-subtle">
                <LockIcon className="h-3.5 w-3.5" />
                Confidential — client and product details withheld
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <ProjectCover project={project} size="lg" />
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-fg-subtle">
                Overview
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-fg-muted">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-fg-subtle">
                Highlights
              </h2>
              <ul className="mt-3 space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-fg-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-fg-subtle">
                How a project like this gets built
              </h2>
              <div className="mt-6">
                <LifecycleTimeline />
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-mono text-xs uppercase tracking-wide text-fg-subtle">
                Technology
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
            >
              Discuss a similar project
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {prev || next ? (
          <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-8 text-sm">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="text-fg-muted transition-colors hover:text-fg"
              >
                ← {prev.name}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="text-fg-muted transition-colors hover:text-fg"
              >
                {next.name} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        ) : null}
      </Container>
    </article>
  );
}
