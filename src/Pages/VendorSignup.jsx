// src/Pages/VendorSignup.jsx
export default function VendorSignup() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-3xl border border-sky-100 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <h1 className="mb-2 text-center text-2xl font-semibold text-slate-900">
          Join as Vendor
        </h1>
        <p className="mb-6 text-center text-xs text-slate-500">
          Create your vendor profile, showcase your work and start receiving
          event bookings.
        </p>

        {/* simple layout, you can expand later */}
        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 outline-none"
            placeholder="Business name"
          />
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 outline-none"
            placeholder="Category (Decorator, DJ...)"
          />
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 outline-none"
            placeholder="Contact email"
          />
          <input
            className="rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 text-sm focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100 outline-none"
            placeholder="City"
          />
        </div>

        <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(56,189,248,0.55)] transition hover:-translate-y-[1px] hover:shadow-[0_20px_50px_rgba(56,189,248,0.65)]">
          Create Vendor Account
        </button>
      </div>
    </div>
  );
}
