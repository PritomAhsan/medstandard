import type { Metadata } from "next";
import Image from "next/image";
import { Eye, GraduationCap, ShieldCheck, Target, UserRound } from "lucide-react";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { stats } from "@/lib/data";

export const metadata: Metadata = { title: "About" };

const team = [
  { name: "Dr. [Founder Name]", role: "Founder & Lead Trainer", bio: "MBBS, MPH — Patient safety & quality specialist" },
  { name: "Dr. [Name]", role: "Head of Clinical Training", bio: "BLS / ACLS certified instructor" },
  { name: "[Name]", role: "Infection Control Lead", bio: "Certified Infection Control Nurse" },
  { name: "[Name]", role: "Quality & Accreditation Consultant", bio: "NABH / JCI assessor experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero title="About MedStandard" sub="Training • Compliance • Excellence" />
      <section className="section grid items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading center={false} eyebrow="Who we are" title="Standards that save lives" />
          <p className="text-slate-600">
            MedStandard was founded by practising clinicians who saw the same gap in hospital after hospital: excellent
            policies on paper, but inconsistent practice on the ward. We bridge that gap with hands-on training,
            standardized SOPs and measurable audits — built for the realities of healthcare in Bangladesh.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-navy-50 p-5"><Target className="text-accent" /><p className="mt-2 font-bold text-navy-900">Our Mission</p><p className="text-sm text-slate-600">Make safe, standardized care the everyday norm in every hospital we work with.</p></div>
            <div className="rounded-xl bg-navy-50 p-5"><Eye className="text-accent" /><p className="mt-2 font-bold text-navy-900">Our Vision</p><p className="text-sm text-slate-600">A Bangladesh where every patient receives care that meets international standards.</p></div>
          </div>
        </div>
        <div className="relative">
          <Image src="/hero.jpg" alt="Hospital team" width={383} height={340} className="h-96 w-full rounded-3xl object-cover shadow-2xl" />
        </div>
      </section>

      <section className="bg-navy-800">
        <div className="section grid grid-cols-2 gap-6 py-10 text-center text-white md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}><p className="text-3xl font-extrabold text-accent">{s.value}</p><p className="text-sm text-white/75">{s.label}</p></div>
          ))}
        </div>
      </section>

      <section className="section py-16">
        <SectionHeading eyebrow="Our approach" title="How We Work" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Evidence-based", d: "Aligned with WHO, IPSG, NABH and JCI standards." },
            { icon: GraduationCap, t: "Practical", d: "Manikin drills, simulations and on-the-floor coaching — not just lectures." },
            { icon: Target, t: "Measurable", d: "Pre/post tests, competency checklists and audit scores reported to management." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-navy-100 p-6 text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-teal/10 text-brand-teal"><I /></span>
              <p className="mt-4 font-bold text-navy-900">{t}</p>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/60 py-16">
        <div className="section">
          <SectionHeading eyebrow="Our team" title="Meet the Trainers" />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.role} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-navy-100 sm:p-6">
                <span className="mx-auto grid size-16 place-items-center sm:size-24 rounded-full bg-gradient-to-br from-navy-100 to-navy-50 text-navy-600"><UserRound size={44} /></span>
                <p className="mt-4 font-bold text-navy-900">{m.name}</p>
                <p className="text-sm font-semibold text-accent">{m.role}</p>
                <p className="mt-1 text-xs text-slate-500">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
