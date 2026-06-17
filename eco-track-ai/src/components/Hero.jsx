import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 py-28 text-white"
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-10 top-10 h-72 w-72 animate-float rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-10 top-24 h-96 w-96 animate-float rounded-full bg-cyan-500/15 blur-3xl" style={{ animationDelay: "1.25s" }} />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 animate-float rounded-full bg-sky-500/10 blur-3xl" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl animate-fade-in">
          <span>⚡</span>
          Personal carbon intelligence for daily decisions
        </div>

        <h1 className="mx-auto max-w-5xl animate-slide-in-left text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Track your carbon footprint with a smarter, cleaner <span className="gradient-text">AI sustainability coach</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl animate-slide-in-right text-lg leading-8 text-white/72 sm:text-xl">
          Understand your impact, spot the biggest emission sources, and get clear reduction ideas in a polished dashboard experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-8 animate-scale-up sm:flex-row">
          <a href="#calculator" className="btn btn-primary w-full sm:w-auto font-mono text-fuchsia-500">
            Calculate Now
          </a>

          <Link to="/dashboard" className="btn btn-secondary w-full sm:w-auto font-mono text-fuchsia-500">
            View Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
