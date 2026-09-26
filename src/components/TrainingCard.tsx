import Link from "next/link";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import type { Training } from "@/lib/data";

const fmt = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

export default function TrainingCard({ t }: { t: Training }) {
  return (
    <div className="flex flex-col rounded-2xl border border-navy-100 bg-white p-5 shadow-sm transition hover:shadow-lg">
      <div className="flex items-center justify-between">
        <span className="chip">
          <MapPin size={12} />
          {t.mode}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${
            t.status === "ongoing" ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-accent"
          }`}
        >
          {t.status}
        </span>
      </div>
      <h3 className="mt-4 flex-1 font-bold leading-snug text-navy-900">{t.title}</h3>
      <div className="mt-4 space-y-1.5 text-sm text-slate-600">
        <p className="flex items-center gap-2"><CalendarDays size={15} className="text-brand-teal" />Start: {fmt(t.date)}</p>
        <p className="flex items-center gap-2"><Clock size={15} className="text-brand-teal" />Duration: {t.duration}</p>
        <p className="flex items-center gap-2"><Users size={15} className="text-brand-teal" />{t.seats} seats</p>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-navy-100 pt-4">
        <p className="text-sm">
          {t.oldFee && <span className="mr-2 text-slate-400 line-through">{t.oldFee}</span>}
          <span className="font-bold text-navy-900">{t.fee}</span>
        </p>
        <Link
          href={`/contact?training=${encodeURIComponent(t.title)}#consult`}
          className="rounded-full bg-navy-700 px-4 py-2 text-xs font-semibold text-white hover:bg-accent"
        >
          Enroll
        </Link>
      </div>
    </div>
  );
}
