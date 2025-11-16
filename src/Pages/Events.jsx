// src/Pages/Events.jsx
import { Link } from "react-router-dom";

const EVENT_TYPES = [
  {
    id: "marriage-function",
    title: "Marriage Function",
    subtitle: "From mandap to music, perfectly orchestrated.",
    ratingLabel: "Avg. 4.7 ★ vendor rating",
    tag: "FEATURED",
    badge: "Smart recommendations",
    heroImg:
      "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "engagement-ceremony",
    title: "Engagement",
    subtitle: "Timeless rituals with modern experiences.",
    ratingLabel: "Avg. 4.7 ★ vendor rating",
    tag: "FEATURED",
    badge: "Smart recommendations",
    heroImg:
      "https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "puberty-ceremony",
    title: "Puberty Ceremony",
    subtitle: "Cultural milestones managed with care and grace.",
    ratingLabel: "Avg. 4.7 ★ vendor rating",
    tag: "FEATURED",
    badge: "Smart recommendations",
    heroImg:
      "https://images.pexels.com/photos/13090659/pexels-photo-13090659.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ⭐ NEW EVENT 1 — Birthday Party
  {
    id: "birthday-party",
    title: "Birthday Parties",
    subtitle: "Fun, memorable celebrations for all ages.",
    ratingLabel: "Avg. 4.8 ★ vendor rating",
    tag: "FEATURED",
    badge: "Top pick",
    heroImg:
      "https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  // ⭐ NEW EVENT 2 — Baby Shower
  {
    id: "baby-shower",
    title: "Baby Shower",
    subtitle: "Celebrate precious beginnings with elegance.",
    ratingLabel: "Avg. 4.9 ★ vendor rating",
    tag: "FEATURED",
    badge: "Best for families",
    heroImg:
      "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Events() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-6">
      <header className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
            Event Types We Power
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">
            Plan every milestone in one place.
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Explore curated layouts, vendor combos & smart recommendations for every celebration.
          </p>
        </div>
      </header>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {EVENT_TYPES.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col overflow-hidden rounded-3xl bg-white/80 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur-sm 
            transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(37,99,235,0.35)]"
          >
            {/* image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={event.heroImg}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute left-4 top-4 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                {event.tag}
              </div>
            </div>

            {/* content */}
            <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{event.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{event.subtitle}</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>{event.ratingLabel}</span>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-medium text-sky-700">
                  {event.badge}
                </span>
              </div>

              {/* View sample layouts link */}
              <Link
                to={`/events/${event.id}/layouts`}
                className="mt-2 inline-flex items-center justify-center rounded-full 
                bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 
                px-4 py-2 text-xs font-semibold text-white 
                shadow-[0_12px_30px_rgba(56,189,248,0.55)] 
                transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                View sample layouts <span className="ml-1 text-[11px]">➜</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
