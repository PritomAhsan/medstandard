import type { Metadata } from "next";
import { Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import ConsultForm from "@/components/ConsultForm";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage(props: PageProps<"/contact">) {
  const sp = await props.searchParams;
  const program = typeof sp.program === "string" ? sp.program : "";
  const training = typeof sp.training === "string" ? sp.training : "";

  const items = [
    { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Globe, label: "Website", value: site.web, href: site.webHref },
    { icon: MapPin, label: "Address", value: site.address, href: site.mapUrl },
    { icon: Clock, label: "Office hours", value: site.hours },
  ];

  return (
    <>
      <PageHero title="Contact Us" sub="Let's discuss how we can make your hospital safer." />
      <section className="section grid gap-10 py-16 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {items.map(({ icon: I, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/10 text-accent"><I size={22} /></span>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                {href ? <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="font-semibold text-navy-900 hover:text-accent">{value}</a> : <p className="font-semibold text-navy-900">{value}</p>}
              </div>
            </div>
          ))}
          <div className="overflow-hidden rounded-xl ring-1 ring-navy-100">
            <iframe title="MedStandard location map" className="h-64 w-full border-0" loading="lazy" src={site.mapEmbed} />
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-navy-700 py-3 text-sm font-semibold text-white hover:bg-accent">
              <MapPin size={16} /> Get Directions on Google Maps
            </a>
          </div>
        </div>
        <div id="consult" className="scroll-mt-28 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-navy-100 sm:p-8">
          <h2 className="text-2xl font-bold text-navy-900">Book a Free Consultation</h2>
          <p className="mb-6 text-sm text-slate-500">Fill in the form and our team will get back to you within one working day.</p>
          <ConsultForm defaultProgram={program} defaultNote={training ? `I'd like to enroll in: ${training}` : ""} />
        </div>
      </section>
    </>
  );
}
