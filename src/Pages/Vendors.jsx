// src/Pages/Vendors.jsx
import { Link } from "react-router-dom";

export default function Vendors() {
  const vendors = [
    {
      id: "dream-weavers",
      name: "Dream Weavers Event Planners",
      role: "Event Planner",
      rating: 5.0,
      city: "Chennai",
    },
    {
      id: "elegant-moments",
      name: "Elegant Moments Photography",
      role: "Photographer",
      rating: 4.9,
      city: "Bengaluru",
    },
    {
      id: "floral-fantasy",
      name: "Floral Fantasy Decor",
      role: "Decorator",
      rating: 4.9,
      city: "Coimbatore",
    },
    {
      id: "gourmet-bites",
      name: "Gourmet Bites Catering",
      role: "Caterer",
      rating: 4.8,
      city: "Chennai",
    },
    {
      id: "sonic-waves",
      name: "Sonic Waves DJ Services",
      role: "DJ",
      rating: 4.7,
      city: "Hyderabad",
    },
    {
      id: "harmony-strings",
      name: "Harmony Strings Quartet",
      role: "Live Music",
      rating: 4.8,
      city: "Chennai",
    },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 via-sky-50/60 to-transparent" />

      <section className="mx-auto max-w-6xl px-4 pt-20 pb-24">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">
              Our Vendors
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Every vendor is identity-verified, rated by real guests and mapped
              to the right event categories.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-800">
              {vendors.length}
            </span>{" "}
            curated vendors available
          </p>
        </div>

        {/* filter bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl bg-white/90 p-4 shadow-sm">
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-xs text-slate-500">
            <span>🔍</span>
            <input
              placeholder="Search vendors (planner, DJ, décor, caterer...)"
              className="w-full bg-transparent outline-none"
            />
          </div>

          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
            <option>All Categories</option>
            <option>Event Planner</option>
            <option>Photographer</option>
            <option>Decorator</option>
            <option>Caterer</option>
            <option>DJ</option>
          </select>

          <select className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600">
            <option>Highest Rated</option>
            <option>Most Booked</option>
            <option>Budget Friendly</option>
          </select>
        </div>

        {/* vendor cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {vendors.map((v) => (
            <article
              key={v.id}
              className="neon-card/strong group flex gap-4 rounded-3xl bg-white/95 p-5 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 text-sm text-white shadow-lg">
                <div className="absolute inset-[3px] rounded-[18px] bg-slate-900/90" />
                <span className="relative flex h-full items-center justify-center text-xs font-semibold">
                  {v.role.split(" ")[0]}
                </span>
                <span className="absolute -bottom-1 -right-1 rounded-full bg-black/80 px-1.5 py-0.5 text-[9px] font-semibold text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.6)]">
                  ★ {v.rating}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {v.name}
                  </h2>
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                    {v.city}
                  </span>
                </div>

                <p className="text-[11px] text-slate-600">
                  Specialised in {v.role.toLowerCase()} for weddings,
                  engagements, birthdays and corporate events.
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                  <span className="rounded-full bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 px-2 py-1 text-sky-700">
                    Verified • Real reviews
                  </span>
                  <span>Avg. response time &lt; 15 min</span>
                </div>

                <div className="mt-3 flex gap-2">
                  <button className="flex-1 rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
                    View Profile
                  </button>

                  {/* ROUTES TO CHAT PAGE */}
                  <Link
                    to={`/chat/${v.id}`}
                    className="flex-1 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-2 text-center text-[11px] font-semibold text-white shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Contact / Chat
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
