import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const row = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <figure key={i} className="w-80 shrink-0 rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
            <Quote className="text-accent" size={28} />
            <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">{t.quote}</blockquote>
            <figcaption className="mt-4 border-t border-navy-100 pt-3">
              <p className="text-sm font-bold uppercase text-navy-900">{t.name}</p>
              <p className="text-xs text-slate-500">{t.org}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
