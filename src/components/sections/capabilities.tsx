import { capabilities } from "@/data/capabilities";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CapabilityIcon } from "@/components/ui/icons";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Capabilities"
            title="What I bring to a product"
            description="Organized around outcomes rather than a list of tools — this is what I'm actually responsible for on a project."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 50} className="bg-bg p-6 sm:p-8">
              <CapabilityIcon name={capability.icon} className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {capability.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
