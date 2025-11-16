// src/Pages/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // hook this to real auth later
    navigate("/admin-dashboard");
  };

  return (
    <section className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-10 px-4 pb-16 lg:flex-row lg:items-stretch lg:px-2">
      {/* soft neon gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-[-140px] h-72 w-72 rounded-full bg-gradient-to-br from-indigo-300/45 via-sky-300/40 to-cyan-300/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-[-160px] h-80 w-80 rounded-full bg-gradient-to-tr from-violet-300/45 via-sky-300/40 to-emerald-300/40 blur-3xl" />

      {/* LEFT: copy + feature cards */}
      <div className="relative flex flex-1 flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live admin console</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Control the{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
              Eventify Network
            </span>
          </h1>
          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Log in to review vendors, monitor live bookings, and keep the entire
            Eventify marketplace running smoothly in real time.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon="📊"
            title="Overview"
            desc="Track bookings, revenue, and platform health at a glance."
          />
          <FeatureCard
            icon="🛡️"
            title="Vendor Control"
            desc="Approve vendors, handle reports, and manage categories."
          />
          <FeatureCard
            icon="⚙️"
            title="Config Hub"
            desc="Update banners, promos, and feature flags instantly."
          />
        </div>

        <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-600">
          <StatChip label="99.9% • Uptime" color="from-emerald-400 to-teal-400" />
          <StatChip label="24/7 • Monitoring" color="from-indigo-400 to-sky-400" />
          <StatChip label="AES-256 • Security" color="from-cyan-400 to-emerald-400" />
        </div>
      </div>

      {/* RIGHT: inline panel with login/signup switch */}
      <div className="relative flex flex-1 items-center justify-center">
        <div
          className="
            relative w-full max-w-md rounded-[1.75rem]
            border border-white/80 bg-white/90
            shadow-[0_16px_45px_rgba(15,23,42,0.14)]
            backdrop-blur-xl px-8 pb-8 pt-6
            transition-all duration-500
            hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(129,140,248,0.55)]
          "
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                Admin Console
              </p>
              <h2 className="text-xl font-semibold text-slate-900">
                {mode === "login" ? "Admin Login" : "Create Admin Account"}
              </h2>
            </div>
          </div>

          {/* mode switch */}
          <div className="mb-6 flex justify-center">
            <div className="relative flex w-64 items-center rounded-full bg-slate-100/90 p-1 text-xs font-medium text-slate-500">
              <div
                className={`
                  absolute inset-y-1 w-1/2 rounded-full bg-white shadow-sm
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

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 transition-all duration-300"
          >
            {/* email */}
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="admin-email"
                className="flex items-center justify-between text-xs font-medium text-slate-600"
              >
                <span>Email</span>
                <span className="text-[10px] text-slate-400">
                  {mode === "login"
                    ? "Use your admin account email"
                    : "This will be your admin login"}
                </span>
              </label>
              <input
                id="admin-email"
                type="email"
                required
                placeholder="admin@eventify.com"
                className="
                  w-full rounded-2xl border border-slate-200
                  bg-white/80 px-3.5 py-2.5 text-sm text-slate-800
                  shadow-inner shadow-slate-100 outline-none
                  transition focus:border-indigo-500 focus:bg-white
                  focus:shadow-[0_0_0_1px_rgba(129,140,248,0.7)]
                "
              />
            </div>

            {/* password */}
            <div className="space-y-1.5 text-sm">
              <label
                htmlFor="admin-password"
                className="flex items-center justify-between text-xs font-medium text-slate-600"
              >
                <span>Password</span>
                {mode === "login" && (
                  <button
                    type="button"
                    className="text-[10px] text-indigo-600 hover:text-indigo-700"
                  >
                    Forgot?
                  </button>
                )}
              </label>
              <input
                id="admin-password"
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
                  htmlFor="admin-name"
                  className="text-xs font-medium text-slate-600"
                >
                  Admin Name
                </label>
                <input
                  id="admin-name"
                  type="text"
                  required
                  placeholder="Platform Supervisor"
                  className="
                    w-full rounded-2xl border border-slate-200
                    bg-white/80 px-3.5 py-2.5 text-sm text-slate-800
                    shadow-inner shadow-slate-100 outline-none
                    transition focus:border-indigo-500 focus:bg-white
                    focus:shadow-[0_0_0_1px_rgba(129,140,248,0.7)]
                  "
                />
              </div>
            )}

            {/* remember / terms */}
            <div className="flex items-center justify-between pt-1 text-xs text-slate-500">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-slate-300 text-indigo-500 focus:ring-indigo-400"
                />
                <span>
                  {mode === "login" ? "Trust this device" : "I accept admin terms"}
                </span>
              </label>
              <span className="hidden sm:inline">
                Enforced with role-based access
              </span>
            </div>

            {/* button */}
            <button
              type="submit"
              className="
                group relative mt-2 inline-flex w-full items-center justify-center
                overflow-hidden rounded-2xl
                bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400
                px-4 py-2.5 text-sm font-semibold text-white
                shadow-[0_16px_40px_rgba(129,140,248,0.6)]
                transition-all duration-300
                hover:-translate-y-[2px] hover:shadow-[0_20px_55px_rgba(129,140,248,0.8)]
                active:translate-y-0 active:shadow-[0_10px_30px_rgba(79,70,229,0.5)]
              "
            >
              <span className="relative z-10">
                {mode === "login" ? "Enter Admin Dashboard" : "Create Admin Account"}
              </span>
              <span className="relative z-10 ml-1 text-xs opacity-80 transition-transform duration-300 group-hover:translate-x-1">
                {mode === "login" ? "➜" : "⚡"}
              </span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-white/55 via-white/10 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
            </button>
          </form>

          {/* helper text */}
          <p className="mt-4 text-center text-[11px] text-slate-500">
            {mode === "login" ? (
              <>
                Need a new admin seat?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Switch to Sign Up
                </button>
              </>
            ) : (
              <>
                Already an admin?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-medium text-indigo-600 hover:text-indigo-700"
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

/* sub components */

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      className="
        group flex flex-col gap-1 rounded-2xl border border-white/80 bg-white/80
        px-4 py-3 text-xs text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-sm transition-transform duration-300
        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(129,140,248,0.35)]
      "
    >
      <div className="flex items-center gap-2 text-slate-800">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 text-base">
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
        className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${color} shadow-[0_0_0_4px_rgba(165,180,252,0.35)]`}
      />
      <span className="text-slate-700">{label}</span>
    </div>
  );
}
