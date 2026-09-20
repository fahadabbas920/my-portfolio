import { projects } from "@/data/projects";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
