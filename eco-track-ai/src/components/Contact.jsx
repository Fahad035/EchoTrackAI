function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-emerald-300/70">Get in touch</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            <span className="gradient-text">Contact</span> the EcoTrack team
          </h2>
          <p className="mt-4 text-white/60">
            Share feedback, partnership ideas, or sustainability questions.
          </p>
        </div>

        <form className="glass space-y-4 rounded-3xl p-8 shadow-2xl animate-scale-up">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white placeholder:text-white/45 focus:border-emerald-400/60"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white placeholder:text-white/45 focus:border-emerald-400/60"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white placeholder:text-white/45 focus:border-emerald-400/60"
          />

          <button className="w-full py-3 px-6 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-[0.99] animate-pulse hover:animate-none">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
