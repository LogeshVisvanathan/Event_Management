// src/Pages/VendorLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorLogin() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake navigation – replace with real auth later
    if (mode === "login") {
      navigate("/vendor-dashboard");
    } else {
      navigate("/vendor-dashboard"); // or /vendor-onboarding
    }
  };

  return (
    <section className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 pb-16 lg:flex-row lg:items-stretch lg:px-2">
      {/* soft gradient glows */}
      <div className="pointer-events-none absolute -left-40 top-[-140px] h-72 w-72 rounded-full bg-gradient-to-br from-sky-300/45 via-cyan-300/40 to-emerald-300/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-[-160px] h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-300/45 via-sky-300/40 to-indigo-300/40 blur-3xl" />

      {/* LEFT: copy / mini cards (same as before) */}
      <div className="relative flex flex-1 flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live vendor console</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Event Partner
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Log in to manage bookings, showcase your best work, and chat with
            clients in real time. Every update here reflects instantly on the
            Eventify marketplace.
          </p>
        </div>

        {/* feature pills */}
        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            title="Smart Bookings"
            desc="Accept / decline with one tap and auto-notify clients."
            icon="⚡"
          />
          <FeatureCard
            title="Portfolio Hub"
            desc="Upload shoots, decor sets, and service packages."
            icon="🎞️"
          />
          <FeatureCard
            title="Live Chat"
            desc="Coordinate details with WhatsApp-style messaging."
            icon="💬"
          />
        </div>

        {/* stats pills */}
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-600">
          <StatChip label="< 5 min • Avg. response" color="from-sky-400 to-cyan-400" />
          <StatChip label="18+ • Bookings this month" color="from-emerald-400 to-teal-400" />
          <StatChip label="4.9★ • Client rating" color="from-indigo-400 to-sky-400" />
        </div>
      </div>

      {/* RIGHT: inline panel with mode switch (no popup stack) */}
      <div className="relative flex flex-1 items-center justify-center">
        <div
          className="
            relative w-full max-w-md rounded-[1.75rem]
            border border-white/80 bg-white/90
            shadow-[0_16px_45px_rgba(15,23,42,0.14)]
            backdrop-blur-xl px-8 pb-8 pt-6
            transition-all duration-500
            hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(56,189,248,0.55)]
          "
        >
          {/* top label */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Vendor Console
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                {mode === "login" ? "Vendor Login" : "Create Vendor Account"}
              </h2>
            </div>
          </div>

          {/* mode switch (login / signup) */}
          <div className="mb-6 flex justify-center">
            <div className="relative flex w-64 items-center rounded-full bg-slate-100/90 p-1 text-xs font-medium text-slate-500">
              {/* sliding highlight */}
              <div
                className={`
                  absolute inset-y-1 w-[50%] rounded-full bg-white shadow-sm
                  transition-transform duration-300
                  ${mode === "login" ? "translate-x-0" : "translate-x-full"}
                `}
              />
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`relative z-10 flex-1 py-1.5 transition-colors ${
                  mode === "login" ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`relative z-10 flex-1 py-1.5 transition-colors ${
                  mode === "signup" ? "text-slate-900" : "text-slate-500"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* forms */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 transition-all duration-300"
          >
            {/* Email */}
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="vendor-email"
                className="flex items-center justify-between text-xs font-medium text-slate-600"
              >
                <span>Email</span>
                <span className="text-[10px] text-slate-400">
                  {mode === "login"
                    ? "Use your vendor account email"
                    : "This will be your login ID"}
                </span>
              </label>
              <input
                id="vendor-email"
                type="email"
                required
                placeholder="vendor@example.com"
                className="
                  w-full rounded-2xl border border-slate-200
                  bg-white/80 px-3.5 py-2.5 text-sm text-slate-800
                  shadow-inner shadow-slate-100 outline-none
                  transition focus:border-sky-500 focus:bg-white
                  focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6)]
                "
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="vendor-password"
                className="flex items-center justify-between text-xs font-medium text-slate-600"
              >
                <span>Password</span>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-[10px] text-sky-600 hover:text-sky-700"
                  >
                    Forgot?
                  </button>
                )}
              </label>
              <input
                id="vendor-password"
                type="password"
                required
                placeholder="••••••••"
                className="
                  w-full rounded-2xl border border-slate-200
                  bg-white/80 px-3.5 py-2.5 text-sm text-slate-800
                  shadow-inner shadow-slate-100 outline-none
                  transition focus:border-emerald-500 focus:bg-white
                  focus:shadow-[0_0_0_1px_rgba(16,185,129,0.6)]
                "
              />
            </div>

            {/* extra fields for signup */}
            {mode === "signup" && (
              <div className="space-y-1.5 text-sm transition-all duration-300">
                <label
                  htmlFor="vendor-business"
                  className="text-xs font-medium text-slate-600"
                >
                  Business / Brand Name
                </label>
                <input
                  id="vendor-business"
                  type="text"
                  required
                  placeholder="Dream Weavers Event Planners"
                  className="
                    w-full rounded-2xl border border-slate-200
                    bg-white/80 px-3.5 py-2.5 text-sm text-slate-800
                    shadow-inner shadow-slate-100 outline-none
                    transition focus:border-sky-500 focus:bg-white
                    focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6)]
                  "
                />
              </div>
            )}

            {/* remember / terms row */}
            <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400"
                />
                <span>
                  {mode === "login" ? "Remember this device" : "I accept terms"}
                </span>
              </label>
              <span className="hidden sm:inline">
                Secure via AES-256, SSL
              </span>
            </div>

            {/* button text changes with mode */}
            <button
              type="submit"
              className="
                group relative mt-2 inline-flex w-full items-center justify-center
                overflow-hidden rounded-2xl bg-gradient-to-r
                from-sky-500 via-cyan-500 to-emerald-400
                px-4 py-2.5 text-sm font-semibold text-white
                shadow-[0_16px_40px_rgba(56,189,248,0.55)]
                transition-all duration-300
                hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(56,189,248,0.7)]
                active:translate-y-0 active:shadow-[0_10px_30px_rgba(56,189,248,0.45)]
              "
            >
              <span className="relative z-10">
                {mode === "login"
                  ? "Login to Vendor Dashboard"
                  : "Create Vendor Account"}
              </span>
              <span className="relative z-10 ml-1 text-xs opacity-80 transition-transform duration-300 group-hover:translate-x-1">
                {mode === "login" ? "➜" : "✨"}
              </span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-white/55 via-white/10 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </button>
          </form>

          {/* helper text */}
          <p className="mt-4 text-center text-[11px] text-slate-500">
            {mode === "login" ? (
              <>
                New to Eventify?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-medium text-sky-600 hover:text-sky-700"
                >
                  Switch to Sign Up
                </button>
              </>
            ) : (
              <>
                Already have a vendor account?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-medium text-sky-600 hover:text-sky-700"
                >
                  Back to Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- small sub-components ---- */

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        group flex flex-col gap-1 rounded-2xl border border-white/80 bg-white/80
        px-4 py-3 text-xs text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-sm transition-transform duration-300
        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(56,189,248,0.35)]
      "
    >
      <div className="flex items-center gap-2 text-slate-800">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50 text-base">
          {icon}
        </span>
        <span className="text-[11px] font-semibold">{title}</span>
      </div>
      <p className="text-[11px] leading-snug text-slate-500">{desc}</p>
    </div>
  );
}

function StatChip({ label, color }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] shadow-sm backdrop-blur">
      <span
        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${color} shadow-[0_0_0_4px_rgba(125,211,252,0.35)]`}
      />
      <span className="text-slate-700">{label}</span>
    </div>
  );
}
