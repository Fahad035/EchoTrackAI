import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import CarbonForm from "../components/CarbonForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { AuthProvider } from "../context/AuthContext";

function HomeContent() {
  // Keep links consistent with existing app behavior.
  const isLoggedIn = false;

  return (
    <>
      <Navbar />

      {/* Animated Hero (futuristic + glass) */}
      <section
        aria-label="EcoTrack AI homepage hero section"
        id="home"
        className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950 py-24 text-white"
      >
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl animate-float" />
          <div
            className="absolute top-24 -right-12 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl animate-float"
            style={{ animationDelay: "350ms" }}
          />
          <div
            className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl animate-float"
            style={{ animationDelay: "700ms" }}
          />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "46px 46px",
              maskImage: "radial-gradient(circle at 50% 20%, rgba(0,0,0,1), rgba(0,0,0,0) 60%)",
            }}
          />

          {/* Scanline */}
          <div className="absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-cyan-400/15 to-transparent opacity-60 animate-shimmer" />
        </div>

        {/* Floating eco icons */}

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-xl animate-fade-in">
            <span className="neon-loader inline-flex items-center justify-center">⚡</span>
            AI sustainability coach for daily decisions
          </div>

          <h1 className="mx-auto max-w-5xl font-black leading-tight tracking-tight text-4xl sm:text-5xl lg:text-7xl">
            Track your carbon footprint with a smarter, cleaner{" "}
            <span className="gradient-text">AI sustainability coach</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl animate-slide-in-right">
            Understand your impact, spot the biggest emission sources, and get clear reduction ideas in a polished,
            futuristic dashboard experience.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="#calculator" className="btn btn-primary w-full sm:w-auto font-mono text-cyan-300">
              Calculate Now <span className="opacity-90">→</span>
            </a>

            <Link to={isLoggedIn ? "/dashboard" : "/login"} className="btn btn-secondary w-full sm:w-auto font-mono text-cyan-300">
              {isLoggedIn ? "View Dashboard" : "Login to Start"}
            </Link>
          </div>

          {/* Quick feature strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-5xl mx-auto">
            {[
              { a: "Realtime", b: "Insights" },
              { a: "Glass UI", b: "Experience" },
              { a: "AI Coach", b: "Recommendations" },
              { a: "Save Trends", b: "Over Time" },
            ].map((it) => (
              <div
                key={it.a}
                className="glass rounded-3xl border-white/10 px-5 py-4 text-left hover:border-emerald-400/30 transition-all duration-300"
              >
                <p className="text-sm text-white/55">{it.b}</p>
                <p className="text-2xl font-black tracking-tight text-white">{it.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics counter section (static values in tests; ready for CountUp if installed) */}
      <section id="stats" aria-label="EcoTrack AI statistics" className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/70">Impact metrics</p>
            <h3 className="mt-3 text-4xl font-black sm:text-5xl">
              Future-ready sustainability, <span className="gradient-text">made measurable</span>
            </h3>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto">A quick snapshot of what EcoTrack AI helps users accomplish.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Kg CO₂ reduced", value: 1240, suffix: "+" },
              { label: "Monthly footprints mapped", value: 89200, suffix: "+" },
              { label: "Smarter actions suggested", value: 3.6, suffix: "x" },
              { label: "Eco insights delivered", value: 240000, suffix: "+" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass group rounded-3xl border-white/10 p-7 text-center hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)] transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="text-4xl font-black tracking-tight text-emerald-300 group-hover:text-emerald-200 transition-colors">
                    {s.value}
                  </div>
                  <div className="text-lg text-white/65">{s.suffix}</div>
                </div>
                <p className="mt-3 text-white/70 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep your existing calculator/contact/footer */}
      <CarbonForm />
      <Contact />

      {/* Feature cards */}
      <section id="features" aria-label="EcoTrack AI features" className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">What you get</p>
            <h3 className="mt-3 text-4xl font-black sm:text-5xl">
              Built for clarity, <span className="gradient-text">designed for motion</span>
            </h3>
            <p className="mt-4 text-white/60 max-w-2xl">Interactive hover effects + modern glassmorphism.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "AI Emission Breakdown",
                description: "Turn daily inputs into a clean carbon map so you know what matters most.",
                icon: "🧠",
              },
              {
                title: "Actionable Reduction Plan",
                description: "Get prioritized steps to cut emissions with realistic alternatives.",
                icon: "🧭",
              },
              {
                title: "Eco-Friendly Tracking",
                description: "Save results over time and watch your improvements compound.",
                icon: "📡",
              },
              {
                title: "Smart Education",
                description: "Learn quickly with insight snippets tailored to your lifestyle.",
                icon: "🌿",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="glass rounded-3xl border-white/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_0_36px_rgba(6,182,212,0.18)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl border border-white/15 bg-white/8 flex items-center justify-center text-2xl">{f.icon}</div>
                  <h4 className="text-lg font-black">{f.title}</h4>
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{f.description}</p>
                <div className="mt-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200/90">
                    Explore <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" aria-label="Testimonials" className="py-20 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-300/70">Voices</p>
            <h3 className="mt-3 text-4xl font-black sm:text-5xl">
              People love the <span className="gradient-text">future</span>
            </h3>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              {
                name: "Amina",
                role: "Sustainability Coach",
                quote: "EcoTrack AI makes carbon feel understandable. The recommendations are practical and motivating.",
                rating: 5,
              },
              {
                name: "Noah",
                role: "Student",
                quote: "Loved the futuristic UI and the breakdown—finally I can connect choices to emissions.",
                rating: 5,
              },
              {
                name: "Maya",
                role: "Remote Worker",
                quote: "The dashboard nudges me in the right direction. It’s like a carbon copilot.",
                rating: 5,
              },
            ].map((t) => (
              <div key={t.name} className="glass rounded-3xl border-white/10 p-7 transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">👤</span>
                    <div>
                      <p className="font-black">{t.name}</p>
                      <p className="text-xs text-white/60">{t.role}</p>
                    </div>
                  </div>
                  <div className="text-amber-300">{"★".repeat(t.rating)}</div>
                </div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section aria-label="Large CTA" className="py-24 bg-linear-to-br from-slate-950 via-slate-900 to-emerald-950">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 backdrop-blur-xl p-8 sm:p-12 glass">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl animate-float" />
              <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl animate-float" style={{ animationDelay: "400ms" }} />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(34,211,238,0.18), transparent 55%), radial-gradient(circle at 70% 80%, rgba(16,185,129,0.16), transparent 60%)",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between ">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/70">Ready to reduce?</p>
                <h3 className="mt-3 text-4xl font-black sm:text-5xl">
                  Start tracking in minutes—<span className="gradient-text">join the clean future</span>
                </h3>
                <p className="mt-4 text-white/60">
                  Calculate your footprint, get AI-driven suggestions, and keep your progress visible over time.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-end lg:w-auto">
                <a href="#calculator" className="btn btn-primary font-mono text-emerald-950 w-full sm:w-auto">
                  Calculate Now
                </a>
                <Link
                  to={isLoggedIn ? "/dashboard" : "/login"}
                  className="btn btn-secondary font-mono text-cyan-300 w-full sm:w-auto"
                >
                  {isLoggedIn ? "Go to Dashboard" : "Login"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function Home() {
  return (
    <AuthProvider>
      <HomeContent />
    </AuthProvider>
  );
}

export default Home;

