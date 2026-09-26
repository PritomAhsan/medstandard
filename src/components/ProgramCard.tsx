import Link from "next/link";
import { Check, Clock } from "lucide-react";
import type { Program } from "@/lib/data";

export default function ProgramCard({ p }: { p: Program }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className={`bg-gradient-to-br ${p.color} px-5 py-5 text-white`}>
        <h3 className="text-lg font-bold leading-snug">
          {p.no}. {p.title}
        </h3>
        <p className="text-xs text-white/80">{p.audience}</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-navy-800">
          <Clock size={16} className="text-accent" />
          {p.duration}
        </p>
        <p className="mt-3 rounded-lg bg-navy-50 px-3 py-2 text-center text-sm font-bold text-navy-800">{p.price}</p>
        <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-700">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-brand-teal" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-navy-100 pt-4 text-center text-xs font-semibold text-navy-700">{p.motto}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Link href={`/programs/${p.slug}`} className="rounded-full border border-navy-100 py-2 text-center text-xs font-semibold text-navy-700 hover:bg-navy-50">
            Details
          </Link>
          <Link href={`/contact?program=${p.slug}#consult`} className="rounded-full bg-accent py-2 text-center text-xs font-semibold text-white hover:bg-accent-600">
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
