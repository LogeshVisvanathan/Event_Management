// src/Pages/Home.jsx
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative">
      {/* cyber grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 cyber-grid" />

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-20 pb-24 lg:grid-cols-2">
        {/* left */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-3 py-1 text-xs font-medium text-sky-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.4)]" />
            Real-time vendor coordination
          </p>

          <h1 className="text-[2.6rem] leading-[1.05] font-semibold text-slate-900 sm:text-[3rem]">
            Plan{" "}
            <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              flawless events
            </span>{" "}
            with a{" "}
            <span className="bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent">
              cyber-smart platform
            </span>
            .
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-slate-600">
            From intimate engagements to grand weddings, Eventify connects you
            with verified vendors, live chat and smart tools to make every
            detail glow.
          </p>

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/events"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(56,189,248,0.6)] transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.02]"
            >
              Explore Events
              <span className="text-xs transition-transform group-hover:translate-x-0.5">
                ➜
              </span>
            </NavLink>

            <NavLink
              to="/vendors"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[2px] hover:border-sky-300 hover:shadow-md"
            >
              Find Vendors
            </NavLink>
          </div>

          <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-gradient-to-tr from-sky-400 to-emerald-400 opacity-80" />
              7+ event types (Marriage, Engagement, Puberty, Birthday & more)
            </div>
            <div className="flex items-center gap-2">
              <span className="neon-dot" />
              Rated vendors with transparent reviews
            </div>
          </div>
        </div>

        {/* right visual */}
        <div className="relative">
          <div className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300 opacity-60 blur-3xl" />
          <div className="pointer-events-none absolute -left-6 bottom-0 h-36 w-36 rounded-full bg-gradient-to-br from-violet-500 via-sky-400 to-cyan-300 opacity-40 blur-3xl" />

          <div className="float-soft relative rounded-[28px] bg-white/80 p-3 shadow-[0_18px_40px_rgba(15,23,42,0.18)] backdrop-blur">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=80"
                alt="Premium event dinner"
                className="h-72 w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* mini event stats */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              {[
                ["Marriage", "42 active"],
                ["Engagement", "18 active"],
                ["Birthday", "27 active"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="neon-card/soft rounded-2xl bg-slate-900/2 px-3 py-2"
                >
                  <p className="text-[10px] uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-900">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EVENT TYPES PREVIEW */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Event Types We Power
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From traditional ceremonies to modern parties.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Marriage Function", "Classic to luxury weddings"],
            ["Engagement", "Elegant pre-wedding moments"],
            ["Puberty Ceremony", "Cultural milestones, handled with care"],
            ["Baby Shower", "Joyful beginnings to remember"],
            ["Birthday", "Kids, teens & adults"],
            ["Meeting / Corporate", "Offsites, summits & launches"],
            ["Others", "Customize your own event"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="neon-card group flex flex-col rounded-2xl bg-white/90 p-4 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="mb-1 text-sm font-semibold text-slate-900">
                {title}
              </h3>
              <p className="text-[11px] text-slate-600">{desc}</p>
              <span className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 px-2.5 py-1 text-[10px] font-medium text-sky-700">
                Smart matching
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
