import { experience } from "@/data/experience";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional timeline"
            description="Focused on scope and responsibility rather than a full résumé."
          />
        </Reveal>

        <ol className="mt-14 space-y-10">
          {experience.map((entry, index) => (
            <Reveal
              as="li"
              key={entry.company}
              delay={index * 60}
              className={`relative border-l pl-8 ${
                entry.primary ? "border-border-strong" : "border-border"
              }`}
            >
              <span
                className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
                  entry.primary ? "bg-accent" : "bg-fg-subtle"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3
                  className={
                    entry.primary
                      ? "text-lg font-semibold tracking-tight text-fg"
                      : "text-base font-medium text-fg-muted"
                  }
                >
                  {entry.role} · {entry.company}
                </h3>
                <p className="font-mono text-xs text-fg-subtle">
                  {entry.start} — {entry.end}
                  {entry.current ? (
                    <span className="ml-2 rounded-full bg-accent/10 px-2 py-0.5 text-accent">
                      Current
                    </span>
                  ) : null}
                </p>
              </div>

              <p className="mt-1 text-sm text-fg-subtle">{entry.location}</p>

              <p
                className={`mt-3 max-w-2xl text-sm leading-relaxed ${
                  entry.primary ? "text-fg-muted" : "text-fg-subtle"
                }`}
              >
                {entry.summary}
              </p>

              {entry.primary ? (
                <ul className="mt-4 space-y-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2 text-sm text-fg-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
