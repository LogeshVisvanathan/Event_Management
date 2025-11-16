// src/Pages/AdminSignup.jsx
export default function AdminSignup() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl">
        <h1 className="mb-2 text-center text-2xl font-semibold text-slate-900">
          Create Admin Account
        </h1>
        <p className="mb-6 text-center text-xs text-slate-500">
          (For project demo you can keep this simple – later you can restrict it
          in backend.)
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Full name"
          />
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Email"
          />
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Phone"
          />
          <input
            type="password"
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
            placeholder="Password"
          />
        </div>

        <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(16,185,129,0.55)] transition hover:-translate-y-[1px] hover:shadow-[0_20px_50px_rgba(16,185,129,0.65)]">
          Create Admin Account
        </button>
      </div>
    </div>
  );
}
