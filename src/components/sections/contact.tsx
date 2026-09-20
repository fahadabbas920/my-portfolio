import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/ui/contact-form";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <p className="font-mono text-sm text-accent">Contact</p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
              Have a product to build or a technical problem to solve?
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-fg-muted">
              I&apos;m always open to hearing about interesting engineering problems and
              opportunities. Send a message, or reach me directly below.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <MailIcon className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
