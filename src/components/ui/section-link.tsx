"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export function SectionLink({
  hash,
  ...props
}: { hash: string } & Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();
  const href = pathname === "/" ? `#${hash}` : `/#${hash}`;

  return <Link href={href} {...props} />;
}
