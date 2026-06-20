import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const StatCard = ({ icon, label, value, unit, accent }) => (
  <div className={`theme-surface relative overflow-hidden rounded-[1.75rem] p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 ${accent}`}>
    <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/5 to-white/0" />
    <div className="relative flex items-start justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">{label}</p>
        <p className="mt-3 text-4xl font-black tracking-tight theme-text">{value}</p>
        <p className="mt-2 text-sm theme-muted">{unit}</p>
      </div>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-(--theme-border) bg-(--theme-surface-strong) text-3xl shadow-lg">
        {icon}
      </div>
    </div>
  </div>
);

const InsightCard = ({ eyebrow, title, description, accent = "from-emerald-500/15 to-cyan-500/10" }) => (
  <div className={`theme-surface rounded-3xl bg-linear-to-br ${accent} p-5`}>
    <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">{eyebrow}</p>
    <h3 className="mt-3 text-xl font-black theme-text">{title}</h3>
    <p className="mt-2 text-sm leading-6 theme-muted">{description}</p>
  </div>
);

const ActionStep = ({ step, title, text }) => (
  <div className="flex gap-4 rounded-2xl border border-(--theme-border) bg-(--theme-surface) p-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-400 to-cyan-500 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20">
      {step}
    </div>
    <div>
      <p className="font-bold theme-text">{title}</p>
      <p className="mt-1 text-sm leading-6 theme-muted">{text}</p>
    </div>
  </div>
);

const MetricLine = ({ label, value, percent, color }) => (
  <div className="rounded-2xl border border-(--theme-border) bg-(--theme-surface) p-4">
    <div className="flex items-center justify-between gap-4">
      <p className="text-sm font-semibold theme-text">{label}</p>
      <p className="text-sm font-bold theme-muted">{value}</p>
    </div>
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
      <div className={`h-full rounded-full bg-linear-to-r ${color}`} style={{ width: `${percent}%` }} />
    </div>
  </div>
);

import { useEffect, useMemo, useState } from "react";
import { getCarbonRecords } from "../services/dashboardService";

function Dashboard() {
  const COLORS = ["#10b981", "#06b6d4", "#f59e0b"];

  const [loading, setLoading] = useState(true);
  void loading;
  const [error, setError] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      setLoading(true);
      setError("");
      try {
        const res = await getCarbonRecords();
        if (isMounted) setRecords(Array.isArray(res) ? res : []);
      } catch (setError) {
        if (!isMounted) return;
        setError("Failed to load dashboard data. Please try again.");
        setRecords([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const aggregates = useMemo(() => {
    const transportTotal = records.reduce(
      (sum, r) => sum + (Number(r?.transportEmission) || 0),
      0
    );
    const electricityTotal = records.reduce(
      (sum, r) => sum + (Number(r?.electricityEmission) || 0),
      0
    );
    const foodTotal = records.reduce(
      (sum, r) => sum + (Number(r?.foodEmission) || 0),
      0
    );

    const submissionsCount = records.length;

    const totalFromField = records.reduce(
      (sum, r) => sum + (Number(r?.total) || 0),
      0
    );

    const total = totalFromField || transportTotal + electricityTotal + foodTotal;

    const data = [
      { name: "Transport", value: transportTotal },
      { name: "Electricity", value: electricityTotal },
      { name: "Food", value: foodTotal },
    ];

    const biggestSource = data.reduce((currentMax, entry) => {
      return entry.value > currentMax.value ? entry : currentMax;
    }, data[0]);

    return {
      data,
      total,
      transportTotal,
      electricityTotal,
      foodTotal,
      submissionsCount,
      biggestSource,
    };
  }, [records]);

  const goal = 200;
  const progress = (aggregates.total / goal) * 100;
  const progressClamped = Math.min(progress, 100);

  // Keep existing UX: savings potential is a friendly static value.
  // It’s shown alongside live metrics; you can adjust later to be data-driven.
  const potentialReduction = 42;

  const { data, biggestSource } = aggregates;

  const formatKg = (n) => {
    const num = Number(n);
    return Number.isFinite(num) ? Math.round(num) : 0;
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-8 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl animate-float" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-0 left-1/4 h-128 w-lg rounded-full bg-sky-500/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl space-y-8">
          <header className="theme-surface-strong overflow-hidden rounded-4xl p-6 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-200">
                  Live sustainability overview
                </div>
                <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight theme-text sm:text-5xl lg:text-6xl">
                  Your Personal Sustainability Command Center
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 theme-muted sm:text-lg">
                  Monitor your monthly footprint, identify key emission drivers, and access data-driven insights to optimize your environmental impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-auto"></div>
            </div>
          </header>

          <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                  icon="🌍"
                  label="Total footprint"
                  value={aggregates.total}
                  unit="kg CO₂ this month"
                  accent="bg-linear-to-br from-emerald-500/20 to-cyan-500/10"
                />
                <StatCard
                  icon="🎯"
                  label="Monthly goal"
                  value={goal}
                  unit="kg CO₂ target"
                  accent="bg-linear-to-br from-sky-500/20 to-blue-500/10"
                />
                <StatCard
                  icon="⚠️"
                  label="Main source"
                  value={aggregates.biggestSource.name}
                  unit={`${aggregates.biggestSource.value} kg CO₂`}
                  accent="bg-linear-to-br from-orange-500/20 to-rose-500/10"
                />
                <StatCard
                  icon="✨"
                  label="Savings potential"
                  value={`${potentialReduction}%`}
                  unit="from quick changes"
                  accent="bg-linear-to-br from-violet-500/20 to-fuchsia-500/10"
                />
              </div>

              <section className="theme-surface rounded-4xl p-6 shadow-2xl sm:p-8">
                {error && (
                  <div className="mb-4 rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    ⚠️ {error}
                  </div>
                )}

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">Carbon health</p>
                    <h2 className="mt-2 text-2xl font-black theme-text">Progress toward target</h2>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-400 to-cyan-500 px-4 py-2 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20">
                    {progress.toFixed(1)}% of target
                  </div>
                </div>

                <div className="mt-6 rounded-full bg-black/10 p-1">
                  <div
                    className="h-4 rounded-full bg-linear-to-r from-emerald-400 to-cyan-500 shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-700"
                    style={{ width: `${progressClamped}%` }}
                  />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <InsightCard
                    eyebrow="Trend"
                    title={progress > 100 ? "Above target" : "On track"}
                    description={progress > 100 ? "Transport and electricity are the fastest levers to pull if you want the chart to move dramatically." : "You are close to target and only need a few small habit changes to keep it there."}
                  />
                  <InsightCard
                    eyebrow="Top driver"
                    title={biggestSource.name}
                    description={`This category contributes ${biggestSource.value} kg CO₂ and should be the first thing you optimize.`}
                    accent="from-orange-500/15 to-rose-500/10"
                  />
                  <InsightCard
                    eyebrow="Opportunity"
                    title={`${potentialReduction}% reduction`}
                    description="A handful of high-impact changes can make next month’s dashboard look much stronger and more defensible."
                    accent="from-violet-500/15 to-fuchsia-500/10"
                  />
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="theme-surface rounded-4xl p-6 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">Executive summary</p>
                    <h2 className="mt-2 text-2xl font-black theme-text">What the data says</h2>
                  </div>
                  <span className="rounded-full border border-(--theme-border) bg-(--theme-surface-strong) px-3 py-1 text-xs font-bold theme-text">
                    Monthly
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <ActionStep
                    step="01"
                    title="Transport is the biggest lever"
                    text="Driving patterns dominate the footprint, so even one reduced commute can create a visible improvement."
                  />
                  <ActionStep
                    step="02"
                    title="Energy is a close second"
                    text="Electricity usage is high enough that a more efficient routine or renewable switch will matter."
                  />
                  <ActionStep
                    step="03"
                    title="Food completes the narrative"
                    text="Diet has the smallest slice, but it still rounds out the sustainability story for judges."
                  />
                </div>
              </section>

              <section className="theme-surface rounded-4xl p-6 shadow-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">Operational view</p>
                <h3 className="mt-2 text-2xl font-black theme-text">Contribution mix</h3>
                <div className="mt-5 space-y-4">
                  <MetricLine
                    label="Transport"
                    value={`${formatKg(aggregates.transportTotal)} kg CO₂`}
                    percent={aggregates.total ? (aggregates.transportTotal / aggregates.total) * 100 : 0}
                    color="from-rose-400 to-orange-500"
                  />
                  <MetricLine
                    label="Electricity"
                    value={`${formatKg(aggregates.electricityTotal)} kg CO₂`}
                    percent={aggregates.total ? (aggregates.electricityTotal / aggregates.total) * 100 : 0}
                    color="from-emerald-400 to-cyan-500"
                  />
                  <MetricLine
                    label="Food"
                    value={`${formatKg(aggregates.foodTotal)} kg CO₂`}
                    percent={aggregates.total ? (aggregates.foodTotal / aggregates.total) * 100 : 0}
                    color="from-amber-400 to-yellow-500"
                  />
                </div>
              </section>
            </aside>
          </section>

          <section className="grid gap-6 lg:grid-cols-2" id="charts">
            <div className="theme-surface rounded-4xl p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">Visualization</p>
                  <h2 className="mt-2 text-2xl font-black theme-text">Emission breakdown</h2>
                </div>
                <span className="rounded-full border border-(--theme-border) bg-(--theme-surface-strong) px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] theme-text">
                  Live view
                </span>
              </div>
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="var(--theme-muted)" tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--theme-muted)" tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.06)" }}
                    contentStyle={{
                      backgroundColor: "var(--theme-surface-strong)",
                      border: "1px solid var(--theme-border)",
                      borderRadius: "16px",
                      color: "var(--theme-text)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.24)"
                    }}
                  />
                  <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`bar-${entry.name}`} fill={COLORS[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="theme-surface rounded-4xl p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] theme-muted">Composition</p>
                  <h2 className="mt-2 text-2xl font-black theme-text">Category distribution</h2>
                </div>
                <span className="rounded-full border border-(--theme-border) bg-(--theme-surface-strong) px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] theme-text">
                  Styled chart
                </span>
              </div>
              <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={122}
                    paddingAngle={5}
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--theme-surface-strong)",
                      border: "1px solid var(--theme-border)",
                      borderRadius: "16px",
                      color: "var(--theme-text)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.24)"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="theme-surface-strong grid gap-6 rounded-4xl p-6 shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold text-cyan-300 uppercase tracking-[0.35em] theme-muted">Strategic Overview</p>
              <h2 className="mt-3 text-3xl font-black theme-text">Empowering Sustainable Choices</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 theme-muted">
                Our intelligent tracking system translates complex emission data into actionable steps. We highlight your biggest opportunities for reduction, helping you lead a more eco-conscious lifestyle.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <Link to="/" className="btn btn-secondary font-extrabold text-cyan-400 justify-center">
                Back to Home
              </Link>
              <a href="/#calculator" className="btn btn-primary font-extrabold text-cyan-400 justify-center">
                Recalculate Footprint
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
