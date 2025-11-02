function Book({ title, img, description, github }) {
  return (
    <a href={github} target="_blank" rel="noreferrer" className="group block">
      <div className="relative h-60 sm:h-72 [perspective:1200px]">
        <div className="absolute inset-0 grid grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl">
          {/* Right page (about) */}
          <div className="col-span-1 bg-amber-50/90 text-black p-4 flex flex-col">
            <h4 className="font-black text-lg mb-2">{title}</h4>
            <p className="text-sm opacity-80 line-clamp-5">{description}</p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100">
              View on GitHub →
            </span>
          </div>
          {/* Left page (image) */}
          <div className="col-span-1 relative overflow-hidden">
            <img src={img} alt="cover" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
        {/* Cover that flips */}
        <div className="absolute inset-0 rounded-xl origin-left [transform-style:preserve-3d] transition-transform duration-700 group-hover:-rotate-y-60">
          <div className="absolute inset-0 bg-amber-900 text-amber-100 p-4 flex items-end justify-start shadow-inner" style={{backfaceVisibility:'hidden'}}>
            <span className="font-bold">{title}</span>
          </div>
          <div className="absolute inset-0 bg-amber-800/90" style={{transform:'rotateY(180deg)', backfaceVisibility:'hidden'}} />
        </div>
        {/* Spine */}
        <div className="absolute left-0 top-0 h-full w-2 bg-amber-950 rounded-l-xl" />
      </div>
    </a>
  );
}

export default function Projects({ accentClass }) {
  const projects = [
    {
      title: 'SpellCast UI',
      img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=800&q=60',
      description: 'A component library of arcane buttons, inputs, and layouts imbued with delightful micro‑interactions.',
      github: 'https://github.com/'
    },
    {
      title: 'Phoenix API',
      img: 'https://images.unsplash.com/photo-1517512006864-7edc3b933137?auto=format&fit=crop&w=800&q=60',
      description: 'Blazing REST endpoints with FastAPI, optimized for rapid rebirths and hot reloads.',
      github: 'https://github.com/'
    },
    {
      title: 'Quill Notes',
      img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=60',
      description: 'A markdown‑first note app with magical search charms and offline persistence.',
      github: 'https://github.com/'
    },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,215,128,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-extrabold ${accentClass}`}>Projects</h2>
        <p className="mt-3 text-white/80">Hover a book to open and reveal its secrets.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Book key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
