import { useMemo } from 'react';

const HOUSES = {
  gryffindor: {
    name: 'Gryffindor',
    primary: 'from-red-700 to-yellow-500',
    accent: 'text-yellow-300',
    ring: 'ring-red-600/60',
    badge: 'bg-gradient-to-br from-red-800 to-amber-600',
  },
  slytherin: {
    name: 'Slytherin',
    primary: 'from-emerald-700 to-slate-400',
    accent: 'text-emerald-300',
    ring: 'ring-emerald-600/60',
    badge: 'bg-gradient-to-br from-emerald-800 to-slate-500',
  },
  hufflepuff: {
    name: 'Hufflepuff',
    primary: 'from-amber-500 to-stone-600',
    accent: 'text-amber-200',
    ring: 'ring-amber-500/60',
    badge: 'bg-gradient-to-br from-yellow-600 to-stone-600',
  },
  ravenclaw: {
    name: 'Ravenclaw',
    primary: 'from-sky-700 to-amber-700',
    accent: 'text-sky-300',
    ring: 'ring-sky-600/60',
    badge: 'bg-gradient-to-br from-sky-800 to-amber-700',
  },
};

export default function Hero({ theme, setTheme }) {
  const t = useMemo(() => HOUSES[theme], [theme]);

  useMemo(() => {
    const id = 'cinzel-decorative-font';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${t.primary} opacity-20`} />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col items-center text-center gap-6">
          <span className={`px-3 py-1 rounded-full ${t.badge} text-white text-xs tracking-widest uppercase shadow ring-1 ${t.ring}`}>
            Pick your House theme
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(HOUSES).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`group relative overflow-hidden rounded-lg ring-1 ${val.ring} p-3 bg-black/30 backdrop-blur shadow hover:shadow-lg transition`}
                aria-label={`Switch to ${val.name} theme`}
              >
                <div className={`h-10 w-full rounded bg-gradient-to-r ${val.primary} opacity-70 group-hover:opacity-100 transition`} />
                <div className="mt-2 text-xs text-white/80">{val.name}</div>
              </button>
            ))}
          </div>

          <h1
            className={`mt-6 text-4xl sm:text-6xl font-black ${t.accent}`}
            style={{ fontFamily: 'Cinzel Decorative, serif', letterSpacing: '0.02em' }}
          >
            Sharnabh Banerjee
          </h1>
          <p className="max-w-2xl text-white/80">
            Welcome to my wizarding portfolio — choose your house, wave the wand, and explore spells of design and code.
          </p>
        </div>
      </div>
    </section>
  );
}

export { HOUSES };