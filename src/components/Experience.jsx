export default function Experience({ accentClass }) {
  const items = [
    { year: '2024', title: 'Frontend Wizard', place: 'Hogwarts Tech', details: 'Led UI enchantments with React and animation spells.' },
    { year: '2023', title: 'Backend Alchemist', place: 'Ministry of Apps', details: 'Brewed FastAPI potions and scalable familiars in the cloud.' },
    { year: '2022', title: 'Apprentice', place: 'Order of Open Source', details: 'Contributed charms and refactors to community grimoires.' },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(#fff 1px, transparent 1px), radial-gradient(#fff 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
        }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-extrabold ${accentClass}`}>Experience</h2>
        <p className="mt-3 text-white/80">A Marauder's Map of my journey — mischief managed.</p>

        <div className="mt-10 relative bg-[rgba(20,20,20,0.6)] rounded-xl ring-1 ring-white/10 overflow-hidden">
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(1.2)'
          }} aria-hidden />
          <div className="relative p-8">
            <ol className="relative border-l border-amber-500/40 ml-4">
              {items.map((it, idx) => (
                <li key={idx} className="mb-8 ml-6">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-black ring-2 ring-amber-200/60">
                    ✶
                  </span>
                  <div className="bg-black/50 p-4 rounded-lg ring-1 ring-white/10 shadow">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded bg-white/10 ${accentClass}`}>{it.year}</span>
                      <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                      <span className="text-white/60">@ {it.place}</span>
                    </div>
                    <p className="mt-2 text-white/75">{it.details}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
