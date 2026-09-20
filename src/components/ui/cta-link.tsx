import Link from "next/link";
import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  external,
  icon,
}: CtaLinkProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:bg-fg/90"
      : "border border-border text-fg hover:border-border-strong hover:bg-surface";

  const externalProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};

  return (
    <Link href={href} className={`${base} ${styles}`} {...externalProps}>
      {children}
      {icon}
    </Link>
  );
}
