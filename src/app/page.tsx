import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2, Stethoscope } from "lucide-react";
import ConsultForm from "@/components/ConsultForm";
import CtaBand from "@/components/CtaBand";
import Deliverables from "@/components/Deliverables";
import Icon from "@/components/Icon";
import ProgramCard from "@/components/ProgramCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import TrainingTabs from "@/components/TrainingTabs";
import { programs, reasons, services, stats } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-white">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="section relative grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div>
            <span className="chip"><Stethoscope size={14} />Hospital Safety & Compliance Program</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-navy-900 sm:text-5xl xl:text-[3.4rem]">
              Build a safer hospital. <span className="text-brand-teal">Deliver better care.</span>{" "}
              <span className="text-accent">Meet international standards.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              MedStandard helps hospitals convert policies and guidelines into trained staff, standardized procedures and
              measurable compliance — for safer patients, stronger teams and sustainable excellence.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <Link href="/programs" className="btn-accent">Explore Programs <ArrowRight size={16} /></Link>
              <Link href="/trainings" className="btn-outline">Upcoming Trainings</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-navy-800">
              {["IPSG aligned", "NABH / JCI readiness", "Certified trainers"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-brand-teal" />{t}</li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
              <Image src="/hero.jpg" alt="Doctor and nurses walking in a hospital corridor" width={383} height={340} priority className="h-72 w-full object-cover sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
            </div>
            <div className="relative -mt-16 mx-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-navy-100 sm:mx-8">
              <p className="font-bold text-navy-900">Get a free safety consultation</p>
              <p className="mb-4 text-xs text-slate-500">Tell us about your hospital — we reply within 1 working day.</p>
              <ConsultForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-800">
        <div className="section grid grid-cols-2 gap-6 py-10 text-center text-white md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-accent sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section py-20">
        <SectionHeading eyebrow="What we do" title="Our Core Services" sub="Eight practical training and compliance areas that cover the full patient-safety journey." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-navy-50/60 py-20">
        <div className="section grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading center={false} eyebrow="The challenge" title="Why It Matters in Bangladesh" sub="Hospitals across the country face the same recurring gaps. Addressing them is not just good practice — it's a responsibility." />
            <div className="rounded-2xl bg-gradient-to-r from-accent to-orange-500 p-6 text-white shadow-lg">
              <Award className="mb-2" />
              <p className="text-lg font-bold italic">&ldquo;Standards save lives. Every trained staff member is a safer patient.&rdquo;</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.text} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-navy-100">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-navy-700 text-white"><Icon name={r.icon} size={22} /></span>
                <p className="text-sm font-medium text-navy-800">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section py-20">
        <SectionHeading eyebrow="Packages" title="Our Program Packages" sub="Choose a structured program that fits your hospital's size and goals. Every package is customized after a baseline visit." />
        <div className="mobile-scroll gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-orange-50/60 py-16">
        <div className="section">
          <SectionHeading eyebrow="Outcomes" title="What Your Hospital Receives" />
          <Deliverables />
        </div>
      </section>

      {/* Trainings */}
      <section className="section py-20">
        <SectionHeading eyebrow="Open for enrollment" title="Upcoming Trainings & Workshops" sub="Individual professionals can join our open courses. Certificates are provided on completion." />
        <TrainingTabs limit={8} swipe />
        <div className="mt-10 text-center">
          <Link href="/trainings" className="btn-outline">View all trainings <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-50/60 py-20">
        <div className="section">
          <SectionHeading eyebrow="Client reviews" title="What Hospitals Say" />
        </div>
        <Testimonials />
      </section>

      <CtaBand />
    </>
  );
}
