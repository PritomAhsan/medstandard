import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Core Services" sub="Practical, standards-based training and implementation support across every area of patient safety." />
      <section className="section space-y-6 py-16">
        {services.map((s, i) => (
          <article id={s.slug} key={s.slug} className="scroll-mt-28 grid gap-6 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm md:grid-cols-[auto_1fr_1fr] md:p-8">
            <span className={`grid size-16 place-items-center rounded-2xl text-white ${i % 2 ? "bg-accent" : "bg-gradient-to-br from-brand-teal to-navy-700"}`}>
              <Icon name={s.icon} size={30} />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-navy-900">{s.title}</h2>
              <p className="text-sm font-semibold text-accent">{s.short}</p>
              <p className="mt-3 text-slate-600">{s.detail}</p>
              <Link href="/contact#consult" className="mt-4 inline-block text-sm font-semibold text-navy-700 underline-offset-4 hover:underline">Request this training →</Link>
            </div>
            <ul className="grid content-start gap-2 rounded-xl bg-navy-50 p-5 text-sm text-navy-800">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-brand-teal" />{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
