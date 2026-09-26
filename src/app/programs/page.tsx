import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Deliverables from "@/components/Deliverables";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import { faqs, programs } from "@/lib/data";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Program Packages" sub="From a one-month starter program to full NABH / JCI accreditation readiness." />
      <section className="section py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">Prices are indicative and depend on bed size, staff count and scope. Final quote after baseline visit.</p>
      </section>
      <section className="bg-orange-50/60 py-16">
        <div className="section">
          <SectionHeading eyebrow="Every package includes" title="What Your Hospital Receives" />
          <Deliverables />
        </div>
      </section>
      <section className="section max-w-3xl py-16">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-navy-100 bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy-900">
                {f.q}
                <span className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
