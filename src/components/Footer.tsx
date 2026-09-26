import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { nav, programs, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="section grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block rounded-xl bg-white p-3">
            <Image src="/logo.png" alt="MedStandard" width={1280} height={310} className="h-10 w-auto" />
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            MedStandard helps hospitals convert policies and guidelines into trained staff, standardized procedures and
            measurable compliance — for safer patients, stronger teams and sustainable excellence.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-accent">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Programs</h4>
          <ul className="space-y-2 text-sm">
            {programs.map((p) => <li key={p.slug}><Link href={`/programs/${p.slug}`} className="hover:text-accent">{p.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold text-white">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-accent" /><a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{site.address}</a></li>
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-accent" /><a href={site.phoneHref}>{site.phone}</a></li>
            <li className="flex gap-3"><Mail size={18} className="shrink-0 text-accent" /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li className="flex gap-3"><Globe size={18} className="shrink-0 text-accent" /><a href={site.webHref} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{site.web}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section flex flex-col items-center justify-between gap-2 py-5 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} MedStandard. All rights reserved.</p>
          <p className="text-center text-[11px] tracking-[0.15em] text-accent sm:tracking-[0.3em]">TRAINING • COMPLIANCE • EXCELLENCE</p>
        </div>
      </div>
    </footer>
  );
}
