export default function SectionHeading({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-10 ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      {eyebrow && <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-slate-600">{sub}</p>}
      <div className={`mt-4 flex gap-1.5 ${center ? "justify-center" : ""}`}>
        <span className="h-1 w-10 rounded bg-accent" />
        <span className="h-1 w-4 rounded bg-brand-teal" />
      </div>
    </div>
  );
}
