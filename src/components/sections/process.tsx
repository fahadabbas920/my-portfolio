import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LifecycleTimeline } from "@/components/ui/lifecycle-timeline";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="From design to post-launch support"
            description="The general lifecycle these engagements follow — from first requirements and an MVP, through to staying involved after launch, not just writing the code in between."
          />
        </Reveal>

        <Reveal delay={80} className="mt-14">
          <LifecycleTimeline />
        </Reveal>
      </Container>
    </section>
  );
}
