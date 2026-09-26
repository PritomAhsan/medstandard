import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Clock, Wallet, Building2 } from "lucide-react";
import ConsultForm from "@/components/ConsultForm";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  return { title: programs.find((p) => p.slug === slug)?.title ?? "Program" };
}

export default async function ProgramDetail(props: PageProps<"/programs/[slug]">) {
  const { slug } = await props.params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = programs.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero title={p.title} sub={p.motto} />
      <section className="section grid gap-10 py-16 lg:grid-cols-[1fr_380px]">
        <div>
          <Link href="/programs" className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 hover:text-accent"><ArrowLeft size={16} />All programs</Link>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Building2, label: "Best for", value: p.audience.replace("For ", "") },
              { icon: Clock, label: "Duration", value: p.duration },
              { icon: Wallet, label: "Investment", value: p.price },
            ].map(({ icon: I, label, value }) => (
              <div key={label} className="rounded-xl bg-navy-50 p-5">
                <I className="text-accent" size={22} />
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{label}</p>
                <p className="font-bold text-navy-900">{value}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-10 text-2xl font-bold text-navy-900">What&apos;s included</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-800">
                <Check className="shrink-0 text-brand-teal" size={18} />{f}
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-bold text-navy-900">How it works</h2>
          <ol className="mt-4 space-y-4">
            {["Baseline visit & gap assessment", "Customized training plan & calendar", "On-site training, drills and SOP implementation", "Audit, competency assessment & final report"].map((s, i) => (
              <li key={s} className="flex items-center gap-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                <span className="text-slate-700">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside className="h-fit rounded-2xl border border-navy-100 bg-white p-6 shadow-lg lg:sticky lg:top-28">
          <p className="text-lg font-bold text-navy-900">Get a quote</p>
          <p className="mb-4 text-xs text-slate-500">Free consultation, no obligation.</p>
          <ConsultForm compact defaultProgram={p.slug} />
        </aside>
      </section>
      <section className="bg-navy-50/60 py-16">
        <div className="section">
          <h2 className="mb-6 text-2xl font-bold text-navy-900">Other programs</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o) => <ProgramCard key={o.slug} p={o} />)}
          </div>
        </div>
      </section>
    </>
  );
}
