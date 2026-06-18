function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      <div className="relative flex items-center justify-center">

        {/* Outer Ring */}
        <div className="h-24 w-24 rounded-full border-4 border-cyan-500/20"></div>

        {/* Neon Spinner */}
        <div className="absolute h-24 w-24 rounded-full border-t-4 border-cyan-400 border-r-4 border-r-transparent animate-spin neon-loader"></div>

        {/* Inner Ring */}
        <div className="absolute h-16 w-16 rounded-full border-4 border-emerald-500/20"></div>

        {/* Inner Spinner */}
        <div
          className="absolute h-16 w-16 rounded-full border-t-4 border-emerald-400 border-l-4 border-l-transparent animate-spin"
          style={{ animationDirection: "reverse" }}
        />

        {/* Center Earth */}
        <div className="absolute flex items-center justify-center h-10 w-10 rounded-full bg-slate-900 shadow-[0_0_30px_#22d3ee]">
          🌍
        </div>

      </div>

      <h3 className="mt-6 text-lg font-bold text-cyan-300 animate-pulse">
        AI Sustainability Coach
      </h3>

      <p className="mt-2 text-sm text-white/60">
        Generating personalized eco insights...
      </p>

    </div>
  );
}

export default Loader;