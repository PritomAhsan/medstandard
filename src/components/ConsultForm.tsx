"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { programs } from "@/lib/data";

export default function ConsultForm({ compact = false, defaultProgram = "", defaultNote = "" }: { compact?: boolean; defaultProgram?: string; defaultNote?: string }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <CheckCircle2 size={48} className="text-brand-teal" />
        <p className="mt-3 font-bold text-navy-900">Thank you!</p>
        <p className="text-sm text-slate-600">Our team will contact you within one working day.</p>
      </div>
    );
  const input =
    "w-full rounded-lg border border-navy-100 bg-white px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <input required placeholder="Hospital / Organization name" className={input} />
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input required placeholder="Your name" className={input} />
        <input required type="tel" placeholder="Phone number" className={input} />
      </div>
      {!compact && <input type="email" placeholder="Email address" className={input} />}
      <select defaultValue={defaultProgram} className={input}>
        <option value="">— Select a program —</option>
        {programs.map((p) => (
          <option key={p.slug} value={p.slug}>{p.title}</option>
        ))}
        <option value="custom">Custom / Open training</option>
      </select>
      {!compact && <textarea rows={4} defaultValue={defaultNote} placeholder="Tell us about your hospital (beds, staff, goals)" className={input} />}
      <button className="btn-accent w-full">Request Free Consultation</button>
    </form>
  );
}
