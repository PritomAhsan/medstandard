import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import type { Service } from "@/lib/data";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      href={`/services#${s.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-navy-100 bg-white p-4 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-navy-900/5 sm:flex-col sm:items-start sm:gap-0 sm:p-6"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-teal to-navy-700 text-white transition group-hover:from-accent group-hover:to-accent-600 sm:size-14">
        <Icon name={s.icon} size={24} />
      </span>
      <div className="flex-1 sm:mt-5 sm:flex sm:flex-col">
        <h3 className="font-bold text-navy-900">{s.title}</h3>
        <p className="mt-1 flex-1 text-sm text-slate-600">{s.short}</p>
      </div>
      <ArrowRight size={18} className="shrink-0 text-accent sm:hidden" />
      <span className="mt-4 hidden items-center gap-1 text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100 sm:flex">
        Learn more <ArrowRight size={15} />
      </span>
    </Link>
  );
}
