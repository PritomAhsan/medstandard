export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-800/90 to-brand-teal/60" />
      <div className="section relative py-16 sm:py-20">
        <h1 className="text-4xl font-extrabold sm:text-5xl">{title}</h1>
        {sub && <p className="mt-3 max-w-2xl text-white/80">{sub}</p>}
      </div>
    </section>
  );
}
