import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SelectedWorkGrid } from "@/components/sections/selected-work-grid";

export function SelectedWork() {
  return (
    <section id="work" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Selected Work"
            title="Production SaaS I've helped build"
            description="A sample of the platforms I've worked on — spanning healthcare, real estate and vendor operations. Product and client details are confidential; the structure below reflects each engagement's scope and my role in it."
          />
        </Reveal>

        <SelectedWorkGrid projects={projects} />
      </Container>
    </section>
  );
}
