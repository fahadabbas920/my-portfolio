"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import { SectionLink } from "@/components/ui/section-link";
import {
  ArrowUpRightIcon,
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-border bg-bg/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <Link href="/" className="font-mono text-sm font-medium tracking-tight text-fg">
            {siteConfig.name}
          </Link>

          <button
            type="button"
            className="group inline-flex h-10 items-center gap-2.5 rounded-full border border-border pl-4 pr-1.5 text-sm font-medium text-fg transition-colors hover:border-border-strong hover:bg-surface"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-sidebar"
            onClick={() => setOpen(true)}
          >
            Menu
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface text-fg-muted transition-colors group-hover:text-fg">
              <MenuIcon className="h-4 w-4" />
            </span>
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-60 bg-bg/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="site-sidebar"
        aria-hidden={!open}
        className={`fixed inset-y-0 right-0 z-70 flex w-full max-w-sm flex-col border-l border-border bg-bg transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-mono text-sm font-medium tracking-tight text-fg"
          >
            {siteConfig.name}
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface hover:text-fg"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-1 px-6 sm:px-8">
          {navLinks.map((link, index) => (
            <SectionLink
              key={link.hash}
              hash={link.hash}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 py-2.5 text-3xl font-semibold tracking-tight text-fg-muted transition-colors hover:text-fg sm:text-4xl"
            >
              <span className="font-mono text-xs text-fg-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="border-t border-border px-6 py-6 sm:px-8">
          <SectionLink
            hash="contact"
            onClick={() => setOpen(false)}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
          >
            Get in touch
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </SectionLink>

          <div className="mt-6 flex items-center gap-5">
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
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="text-fg-subtle transition-colors hover:text-fg"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
