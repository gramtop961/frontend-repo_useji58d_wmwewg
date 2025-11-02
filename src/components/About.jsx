export default function About({ accentClass }) {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-0 top-10 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-10 w-56 h-56 rounded-full bg-yellow-200/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl sm:text-4xl font-extrabold ${accentClass}`}>About Me</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          I am a full‑stack sorcerer of the web, brewing interfaces and conjuring backends. With a penchant for elegant spells
          of performance and accessibility, I craft experiences that feel enchanted yet grounded in solid engineering.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="bg-[rgba(20,20,20,0.6)] backdrop-blur rounded-xl p-6 ring-1 ring-white/10 shadow">
            <h3 className={`font-semibold ${accentClass}`}>Specialties</h3>
            <ul className="mt-3 space-y-2 text-white/80 list-disc list-inside">
              <li>React, TypeScript, Tailwind</li>
              <li>FastAPI, Node.js, MongoDB</li>
              <li>UX polish, animation, accessibility</li>
            </ul>
          </div>
          <div className="bg-[rgba(20,20,20,0.6)] backdrop-blur rounded-xl p-6 ring-1 ring-white/10 shadow relative overflow-hidden">
            <h3 className={`font-semibold ${accentClass}`}>Wizarding Traits</h3>
            <p className="mt-3 text-white/80">
              Curious, collaborative, and relentless about quality. I value clear communication and maintainable magic.
            </p>
            <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(transparent,black_70%)]" style={{backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0 2px, transparent 2px 6px)'}}/>
          </div>
        </div>

        <div className="mt-14">
          <h3 className={`text-2xl font-bold ${accentClass}`}>Contact</h3>
          <form
            className="mt-6 grid sm:grid-cols-2 gap-4 bg-black/30 backdrop-blur rounded-xl p-6 ring-1 ring-white/10"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Message from ${data.get('name')}`);
              const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
              window.location.href = `mailto:sharnabh@example.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Name</label>
              <input name="name" required className="px-3 py-2 rounded bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="px-3 py-2 rounded bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="you@owl.post"/>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" required rows={4} className="px-3 py-2 rounded bg-black/40 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Write your message..." />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button type="submit" className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition border border-white/10">
                Send Owl
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
