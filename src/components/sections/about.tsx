import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="About" title="A bit about my work" />
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
          <Reveal>
            <div className="aspect-4/5 w-full max-w-60">
              <Image
                src="/fahad-portfolio.png"
                alt="Fahad Abbas"
                width={560}
                height={700}
                className="h-full w-full object-cover rounded-2xl"
                priority
              />
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted"
          >
            <p>
              I&apos;m a Full-Stack SaaS Engineer and Product Engineer based in Lahore,
              Pakistan. My background is strongest in frontend engineering — React and Next.js
              — but I work end to end: backend services, data modeling, integrations,
              deployment, and the technical leadership to take a product from requirements to
              production.
            </p>
            <p>
              I use AI-assisted tools to move faster, never as a substitute for understanding
              what I&apos;m shipping — every decision I make is one I can explain. I&apos;m
              continuing to build depth in SaaS architecture and developer experience, with a
              focus on the practical parts of getting products in front of real users.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
