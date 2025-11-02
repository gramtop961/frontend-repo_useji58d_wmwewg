import { useEffect, useMemo, useRef, useState } from 'react';
import Hero, { HOUSES } from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';

function MagicWandCursor({ accentColor = '#fde68a' }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [down, setDown] = useState(false);
  const last = useRef({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const dx = x - last.current.x;
      const dy = y - last.current.y;
      const a = Math.atan2(dy, dx);
      setAngle(a * 180 / Math.PI);
      last.current = { x, y };
      setPos({ x, y });
    };
    const md = () => setDown(true);
    const mu = () => setDown(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', md);
    window.addEventListener('mouseup', mu);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', md);
      window.removeEventListener('mouseup', mu);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-10px, -10px) rotate(${angle}deg)`
        }}
        className="absolute"
      >
        {/* Wand shaft */}
        <div className="origin-left" style={{ width: 120, height: 6, borderRadius: 4, background: 'linear-gradient(90deg, #1f2937, #0b0b0b)', boxShadow: '0 0 8px rgba(0,0,0,0.5)'}} />
        {/* Wand tip glow */}
        <div className="absolute -right-2 -top-1" style={{ width: 10, height: 10, borderRadius: '50%', background: down ? accentColor : '#ddd', boxShadow: down ? `0 0 16px 6px ${accentColor}` : '0 0 6px 1px #ddd' }} />
      </div>
    </div>
  );
}

function BackgroundAudio() {
  useEffect(() => {
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_d0c4a094-8b16-4fb1-b5a1-1a9361ff717a.mp3?filename=harry-potter-theme-26645.mp3');
    audio.loop = true;
    audio.volume = 0.25;
    const play = () => audio.play().catch(() => {});
    document.addEventListener('click', play, { once: true });
    return () => { audio.pause(); };
  }, []);
  return null;
}

export default function App() {
  const [theme, setTheme] = useState('gryffindor');
  const t = useMemo(() => HOUSES[theme], [theme]);

  useEffect(() => {
    document.documentElement.classList.add('bg-black');
  }, []);

  return (
    <div className="min-h-screen text-white cursor-none" style={{background: 'radial-gradient(1200px 600px at 10% -10%, rgba(255,255,255,0.06), transparent), radial-gradient(800px 400px at 110% 10%, rgba(255,255,255,0.06), transparent), linear-gradient(180deg, rgba(0,0,0,1), rgba(20,20,20,1))'}}>
      <BackgroundAudio />
      <MagicWandCursor accentColor={t.name === 'Slytherin' ? '#6ee7b7' : t.name === 'Ravenclaw' ? '#7dd3fc' : t.name === 'Hufflepuff' ? '#fde68a' : '#fbbf24'} />

      {/* Top shimmer */}
      <div className={`fixed inset-x-0 top-0 h-24 bg-gradient-to-b ${t.primary} opacity-20 pointer-events-none`} />

      <Hero theme={theme} setTheme={setTheme} />
      <About accentClass={t.accent} />
      <Experience accentClass={t.accent} />
      <Projects accentClass={t.accent} />

      <footer className="py-10 text-center text-white/60">
        <p>© {new Date().getFullYear()} Sharnabh Banerjee. Mischief Managed.</p>
      </footer>
    </div>
  );
}
