import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navLinks } from "@/data/nav";
import { GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-medium text-fg">{siteConfig.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-fg-muted">
            {siteConfig.role} building and shipping production SaaS software.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <MailIcon className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-8 sm:gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
