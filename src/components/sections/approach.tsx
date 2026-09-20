import { approachPrinciples } from "@/data/approach";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CapabilityIcon } from "@/components/ui/icons";

export function Approach() {
  return (
    <section id="approach" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Approach"
            title="How I approach software development"
          />
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {approachPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 50} className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface">
                <CapabilityIcon name={principle.icon} className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-mono text-xs text-fg-subtle">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-semibold tracking-tight text-fg">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
