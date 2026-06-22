import { useState } from "react";
// Link import removed for test-safety (avoids requiring Router context in unit tests)

import { useAuth } from "../context/AuthContext";

// Tests may render CarbonForm without AuthProvider.
// Avoid crashing by treating user as unauthenticated when auth context is missing.
const useOptionalAuth = () => {
  try {
    return useAuth();
  } catch {
    return { user: null };
  }
};

import { calculateCarbon, calculateCarbonBreakdown } from "../utils/carbonCalculator";
import { getCarbonAdvice } from "../services/gemini";
import { saveCarbonRecord } from "../services/carbonService";
import Loader from "./Loader";
import { carbonSchema } from "../validation/carbonSchema";

const InputField = ({
  id,
  icon,
  label,
  type,
  value,
  onChange,
  placeholder,
  disabled
}) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block text-sm font-semibold text-white/90 mb-2"
    >
      {icon} {label}
    </label>

    <input
      id={id}
      aria-label={label}
      aria-required="true"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50 backdrop-blur-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
    />
  </div>
);

function CarbonForm() {
  const { user } = useOptionalAuth();

  const isLoggedIn = Boolean(user);

  const [carKm, setCarKm] = useState("");
  const [electricityUnits, setElectricityUnits] = useState("");
  const [diet, setDiet] = useState("veg");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiAdvice, setAiAdvice] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hard stop if not authenticated
    if (!isLoggedIn) return;

    setFormError("");

    const formData = {
      carKm: Number(carKm),
      electricityUnits: Number(electricityUnits),
      diet
    };

    const validation = carbonSchema.safeParse(formData);

    if (!validation.success) {
      setFormError(validation.error.errors[0].message);
      return;
    }

    const carValue = Number(carKm);
    const electricityValue = Number(electricityUnits);

    if (isNaN(carValue) || isNaN(electricityValue)) {
      setFormError("Please enter valid numbers.");
      return;
    }

    if (carValue < 0 || electricityValue < 0) {
      setFormError("Values cannot be negative.");
      return;
    }

    if (carValue > 100000 || electricityValue > 100000) {
      setFormError("Input value too large.");
      return;
    }

    const breakdown = calculateCarbonBreakdown(carKm, electricityUnits, diet);
    const total = calculateCarbon(carKm, electricityUnits, diet);
    setResult(total);

    try {
      await saveCarbonRecord({
        carKm: parseFloat(carKm),
        electricityUnits: parseFloat(electricityUnits),
        diet,
        transportEmission: breakdown.transportEmission,
        electricityEmission: breakdown.electricityEmission,
        foodEmission: breakdown.foodEmission,
        total: parseFloat(total),
        createdAt: new Date()
      });
    } catch (error) {
      console.log("Firebase error:", error);
      setFormError("Failed to save data. Please try again.");
    }
  };

  const generateAdvice = async () => {
    // Hard stop if not authenticated
    if (!isLoggedIn) return;

    setLoading(true);
    try {
      const advice = await getCarbonAdvice(result, carKm, electricityUnits, diet);
      setAiAdvice(advice);
    } catch (error) {
      console.log("Error generating advice:", error);
      setFormError("Failed to generate AI insights. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const disabled = !isLoggedIn;

  return (
    <section
      aria-label="Carbon footprint calculator section"
      id="calculator"
      className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent sm:text-5xl lg:text-6xl">
            🧮 Carbon Footprint Calculator
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
            Measure your environmental impact and discover personalized ways to reduce your carbon footprint
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:shadow-3xl sm:p-8 lg:p-12 relative">
          {/* Auth overlay */}
          {!isLoggedIn && (
            <div
              className="absolute inset-0 z-20 backdrop-blur-xl bg-slate-900/40 flex items-center justify-center p-6"
              aria-hidden="false"
            >
              <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-3">🔒 Please login to calculate your carbon footprint.</p>
                  <p className="text-sm text-white/70 mb-6">
                    Sign in to enable calculations and save your results securely.
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href="/login"
                      className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      👤 Login
                    </a>
                  </div>

                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields */}
            <div className="space-y-5">
              <InputField
                id="carKm"
                icon="🚗"
                label="Monthly Car Travel"
                type="number"
                value={carKm}
                onChange={(e) => setCarKm(e.target.value)}
                placeholder="Enter kilometers (e.g., 500)"
                disabled={disabled}
              />

              <InputField
                id="electricityUnits"
                icon="⚡"
                label="Monthly Electricity Units"
                type="number"
                value={electricityUnits}
                onChange={(e) => setElectricityUnits(e.target.value)}
                placeholder="Enter units (e.g., 150)"
                disabled={disabled}
              />

              {/* Diet Selection */}
              <div>
                <label
                  htmlFor="diet"
                  className="block text-sm font-semibold text-white/90 mb-2"
                >
                  🍽️ Diet Type
                </label>
                <select
                  id="diet"
                  aria-label="Diet Type"
                  aria-required="true"
                  value={diet}
                  onChange={(e) => setDiet(e.target.value)}
                  disabled={disabled}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400/50 backdrop-blur-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="veg" className="bg-slate-900">
                    🥗 Vegetarian (Lower Emissions)
                  </option>
                  <option value="mixed" className="bg-slate-900">
                    🍗 Mixed Diet
                  </option>
                  <option value="nonveg" className="bg-slate-900">
                    🥩 Non-Vegetarian (Higher Emissions)
                  </option>
                </select>
              </div>
            </div>

            {/* Error Message */}
            {formError && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                ⚠️ {formError}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={disabled}
              className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              🔢 Calculate Carbon Footprint
            </button>
          </form>

          {/* Result Section */}
          {result && (
            <div className="mt-10 space-y-6 animate-fade-in">
              {/* Result Card */}
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 p-8 rounded-2xl backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-white/80 mb-2">📊 Your Carbon Footprint</h3>
                <div className="flex items-end gap-3">
                  <p className="text-5xl font-bold text-green-400">{result}</p>
                  <p className="text-2xl text-white/70 mb-2">kg CO₂</p>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  Based on your transport, energy, and diet choices this month
                </p>
              </div>

              {/* Tips Card */}
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 border border-cyan-400/30 p-6 rounded-2xl backdrop-blur-lg">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">💡 Quick Tips</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Consider carpooling or using public transport</li>
                  <li>• Switch to renewable energy sources</li>
                  <li>• Plant-based meals reduce emissions by up to 60%</li>
                </ul>
              </div>

              {/* AI Insights Button */}
              {loading ? (
                <Loader />
              ) : (
                <button
                  onClick={generateAdvice}
                  disabled={disabled}
                  className="w-full bg-linear-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  🤖 Get AI Sustainability Coach
                </button>
              )}

              {/* AI Advice Section */}
              {aiAdvice && (
                <div className="bg-linear-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 p-8 rounded-2xl backdrop-blur-lg animate-fade-in">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">🎓 AI Sustainability Coach</h3>
                  <div className="text-white/80 leading-relaxed space-y-3 text-sm whitespace-pre-wrap">
                    {aiAdvice}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Message */}
        <p className="text-center text-white/50 text-sm mt-8">
          Your data is securely saved to help track your sustainability journey over time 🌱
        </p>
      </div>
    </section>
  );
}

export default CarbonForm;

