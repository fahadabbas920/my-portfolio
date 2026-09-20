import { approachPrinciples } from "@/data/approach";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

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
              <span className="font-mono text-sm text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-fg">
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
