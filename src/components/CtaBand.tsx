import Link from "next/link";
import { Building2, Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function CtaBand() {
  return (
    <section className="bg-gradient-to-r from-accent to-orange-500">
      <div className="section flex flex-col items-center gap-6 py-12 text-white md:flex-row">
        <Building2 size={56} strokeWidth={1.3} className="shrink-0" />
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Let&apos;s work together</p>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Upgrade Your Hospital&apos;s Safety &amp; Standards</h2>
          <p className="mt-1 text-sm text-white/85">Partner with MedStandard for training, compliance and sustainable quality improvement.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-accent">
            <Phone size={16} />
            {site.phone}
          </a>
          <Link href="/contact#consult" className="rounded-full border-2 border-white px-6 py-3 text-center text-sm font-bold text-white hover:bg-white hover:text-accent">
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
