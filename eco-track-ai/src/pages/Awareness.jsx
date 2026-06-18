import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Awareness() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
            <Navbar />
            
            {/* Background Animation blobs - shared with Dashboard/Hero */}
            <div className="pointer-events-none fixed inset-0 overflow-hidden">
                <div className="absolute left-8 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl animate-float" />
                <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
                <div className="absolute bottom-0 left-1/4 h-128 w-lg rounded-full bg-sky-500/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Header Section */}
                <header className="theme-surface-strong mb-12 overflow-hidden rounded-4xl p-8 text-center shadow-2xl">
                    <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
                        Knowledge for Change
                    </div>
                    <h1 className="mb-6 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                        Carbon <span className="gradient-text">Awareness</span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                        Learn how your daily activities impact the environment
                        and discover practical ways to reduce carbon emissions
                        for a sustainable future.
                    </p>
                </header>

                {/* What is Carbon Footprint */}
                <section className="theme-surface mb-8 rounded-4xl p-8 shadow-2xl">
                    <div className="max-w-4xl">
                        <h2 className="mb-6 text-3xl font-black tracking-tight theme-text sm:text-4xl">
                            What is a Carbon Footprint?
                        </h2>
                        <p className="text-lg leading-8 theme-muted">
                            A carbon footprint is the total amount of greenhouse gases,
                            mainly carbon dioxide (CO₂), released into the atmosphere
                            through everyday activities such as transportation,
                            electricity consumption, food production, and waste generation.
                            The larger your carbon footprint, the greater your contribution
                            to climate change and global warming.
                        </p>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className="mb-12">
                    <h2 className="mb-10 text-center text-3xl font-black tracking-tight theme-text sm:text-4xl">
                        Why Should We Care?
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="theme-surface rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-4 text-4xl">🔥</div>
                            <h3 className="mb-3 text-xl font-black theme-text">Climate Change</h3>
                            <p className="text-sm leading-6 theme-muted">
                                Increased carbon emissions lead to rising temperatures,
                                extreme weather events, droughts, floods, and melting glaciers.
                            </p>
                        </div>

                        <div className="theme-surface rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-4 text-4xl">🌫️</div>
                            <h3 className="mb-3 text-xl font-black theme-text">Air Pollution</h3>
                            <p className="text-sm leading-6 theme-muted">
                                Carbon emissions contribute to poor air quality and
                                respiratory diseases affecting millions of people.
                            </p>
                        </div>

                        <div className="theme-surface rounded-3xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="mb-4 text-4xl">🌿</div>
                            <h3 className="mb-3 text-xl font-black theme-text">Future Generations</h3>
                            <p className="text-sm leading-6 theme-muted">
                                Sustainable choices today help protect natural resources
                                and biodiversity for future generations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sources */}
                <section className="mb-12">
                    <h2 className="mb-10 text-center text-3xl font-black tracking-tight theme-text sm:text-4xl">
                        Major Emission Sources
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="theme-surface border border-white/5 rounded-3xl p-8">
                            <h3 className="mb-6 flex items-center gap-3 text-2xl font-black theme-text">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-xl">🚗</span>
                                Transportation
                            </h3>
                            <ul className="space-y-3 theme-muted text-sm">
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Cars and motorcycles</li>
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Flights and air travel</li>
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> Fuel-powered transport</li>
                            </ul>
                        </div>

                        <div className="theme-surface border border-white/5 rounded-3xl p-8">
                            <h3 className="mb-6 flex items-center gap-3 text-2xl font-black theme-text">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-xl">⚡</span>
                                Electricity Usage
                            </h3>
                            <ul className="space-y-3 theme-muted text-sm">
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Coal-powered grid energy</li>
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> High energy appliances</li>
                                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Cooling and heating systems</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Reduction Tips */}
                <section className="theme-surface mb-12 rounded-4xl p-8 shadow-2xl">
                    <h2 className="mb-10 text-center text-3xl font-black tracking-tight theme-text sm:text-4xl">
                        Simple Ways to Reduce
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                            <h3 className="mb-4 flex items-center gap-3 font-black theme-text">
                                <span className="text-emerald-400">🚲</span> Sustainable Mobility
                            </h3>
                            <ul className="space-y-2 text-sm theme-muted">
                                <li>✓ Walk short distances or use bicycles</li>
                                <li>✓ Transition to public transportation</li>
                                <li>✓ Optimize commuting via carpooling</li>
                            </ul>
                        </div>
                        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                            <h3 className="mb-4 flex items-center gap-3 font-black theme-text">
                                <span className="text-cyan-400">💡</span> Energy Efficiency
                            </h3>
                            <ul className="space-y-2 text-sm theme-muted">
                                <li>✓ Switch to smart LED lighting</li>
                                <li>✓ Unplug standby electronics</li>
                                <li>✓ Set thermostat to optimal levels (24–26°C)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Daily Checklist */}
                <section className="mb-12">
                    <h2 className="mb-10 text-center text-3xl font-black tracking-tight theme-text sm:text-4xl">
                        Daily Green Habits
                    </h2>
                    <div className="theme-surface mx-auto max-w-2xl rounded-4xl p-8 shadow-2xl">
                        <div className="space-y-4">
                            {[
                                "Used Public Transport",
                                "Switched Off Unused Lights",
                                "Avoided Single-use Plastics",
                                "Recycled or Composted Waste",
                                "Conserved Water Usage"
                            ].map((habit, i) => (
                                <label key={i} className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10">
                                    <input type="checkbox" className="h-6 w-6 rounded border-white/20 bg-slate-800 text-emerald-500 focus:ring-emerald-500/50" />
                                    <span className="font-bold theme-text">{habit}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pledge CTA */}
                <section className="theme-surface-strong overflow-hidden rounded-4xl p-8 text-center shadow-2xl sm:p-12">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-6 text-4xl text-emerald-500 font-black theme-text">Take the Green Pledge</h2>
                        <p className="mb-10 text-lg theme-muted">
                            Commit to a more sustainable lifestyle today. Receive a digital certificate
                            and join a community of environmental leaders.
                        </p>
                        <Link
                            to="/pledge"
                            className="btn btn-primary font-extrabold text-emerald-400 inline-flex h-14 items-center px-10 text-lg"
                        >
                            🌍 Take The Pledge
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Awareness;