import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 h-full w-full" />

      <Container>
        <Reveal>
          <p className="font-mono text-sm text-accent">{siteConfig.location}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-4 max-w-2xl text-xl font-medium text-fg sm:text-2xl">
            {siteConfig.role}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            I build and ship production SaaS products — working from product requirements
            through architecture, implementation and deployment, and leading teams to deliver
            substantial applications end to end.
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
            >
              View My Work
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
