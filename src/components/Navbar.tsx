"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="section flex h-18 items-center justify-between">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="MedStandard — Training, Compliance, Excellence" width={1280} height={310} priority className="h-11 w-auto mix-blend-multiply" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                active(n.href) ? "text-accent" : "text-navy-800 hover:text-accent"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact#consult" className="btn-accent ml-3 !py-2.5">Book Consultation</Link>
        </nav>
        <button aria-label="Toggle menu" className="rounded-lg p-2 text-navy-800 lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-navy-100 bg-white lg:hidden">
          <div className="section flex flex-col py-3">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                className={`py-3 text-sm font-semibold uppercase ${active(n.href) ? "text-accent" : "text-navy-800"}`}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact#consult" onClick={() => setOpen(false)} className="btn-accent mt-2">Book Consultation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
