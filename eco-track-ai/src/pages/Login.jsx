import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailPattern = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    []
  );

  function validate() {
    const nextErrors = {};

    const trimmedEmail = email.trim();
    if (!trimmedEmail) nextErrors.email = "Email is required.";
    else if (!emailPattern.test(trimmedEmail))
      nextErrors.email = "Enter a valid email address.";

    if (!password) nextErrors.password = "Password is required.";
    else if (password.length < 8)
      nextErrors.password = "Password must be at least 8 characters.";

    return nextErrors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast.error("Fix the highlighted fields.");
      return;
    }

    try {
      setIsLoading(true);
      await login(email.trim(), password);
      toast.success("Welcome back! Logging you in...");
      navigate("/dashboard");
    } catch (err) {
      const message = err?.message || "Login failed. Please try again.";
      setFormError(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-slate-950/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-70";

  const errorRing = "border-red-500/80 focus:ring-red-500/60";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      {/* Background */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-slate-950" />

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-96 w-169 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-lg rounded-full bg-fuchsia-500/10 blur-3xl" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.08)_1px,transparent_1px)] bg-size-[36px_36px] opacity-40 mask-[radial-gradient(ellipse_at_center,black_55%,transparent_75%)]"
        />
      </div>

      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-cyan-500/10 via-transparent to-transparent" />

          <div className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              Login to EcoTrack
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Enter your credentials to continue tracking your impact.
            </p>
          </div>

          {formError ? (
            <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {formError}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={`${inputBase} ${
                  fieldErrors?.email ? errorRing : "border-white/10"
                }`}
                autoComplete="email"
                disabled={isLoading}
              />
              {fieldErrors?.email ? (
                <p className="mt-2 text-xs text-red-300">
                  {fieldErrors.email}
                </p>
              ) : null}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-xs font-medium text-slate-200">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`${inputBase} ${
                  fieldErrors?.password ? errorRing : "border-white/10"
                }`}
                autoComplete="current-password"
                disabled={isLoading}
              />
              {fieldErrors?.password ? (
                <p className="mt-2 text-xs text-red-300">
                  {fieldErrors.password}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group relative mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:from-cyan-400 hover:to-indigo-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <span className="inline-flex items-center">
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-100"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                </span>
              ) : null}

              <span>{isLoading ? "Logging in..." : "Login"}</span>
            </button>

            <p className="pt-1 text-center text-sm text-slate-300">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

