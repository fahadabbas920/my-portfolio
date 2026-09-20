import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <SectionHeading eyebrow="About" title="A bit about my work" />
          </Reveal>

          <Reveal
            delay={80}
            className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted"
          >
            <p>
              I&apos;m a Full-Stack SaaS Engineer and Product Engineer based in Lahore,
              Pakistan, currently building production software at CloudEva Tech. My background
              is strongest in frontend engineering — React and Next.js in particular — but my
              work has grown to span backend services, data modeling, integrations and
              deployment.
            </p>
            <p>
              Beyond writing code, I&apos;ve taken on technical leadership across several SaaS
              projects: understanding requirements, breaking down work, making architectural
              decisions and coordinating delivery with the rest of the team. I&apos;ve worked
              on products from their earliest stages through to production, and on existing
              production systems that needed to keep evolving without breaking.
            </p>
            <p>
              I use modern AI-assisted development tools as part of my day-to-day workflow, the
              same way I&apos;d use any other tool — to move faster on well-understood
              problems, not as a substitute for understanding the system I&apos;m building.
              Every decision and every line that ships is one I can explain.
            </p>
            <p>
              I&apos;m continuing to build depth across the stack, with a particular interest
              in SaaS architecture, developer experience and the practical parts of getting
              products from an idea into something real users depend on.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
