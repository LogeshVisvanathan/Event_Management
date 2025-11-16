// src/Pages/EventLayouts.jsx
import { useParams, Link } from "react-router-dom";

const EVENT_LAYOUT_DATA = {
  "marriage-function": {
    title: "Marriage Function Layouts",
    accent: "Sacred + modern mandap experiences",
    heroImage:
      "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blurb:
      "Design a ceremony that feels traditional at heart but visually fresh. Explore lighting, seating, and decor layouts tuned for South Indian weddings.",
    quickInfo: [
      { label: "Ideal guest count", value: "200 – 800" },
      { label: "Planning window", value: "3 – 6 months" },
      { label: "Recommended venues", value: "Banquet halls, open lawns" },
    ],
    includesLeft: [
      "Stage + mandap layout suggestions",
      "Bride / groom entry ideas",
      "Seating maps for family & VIPs",
    ],
    includesRight: [
      "Lighting + photo-friendly angles",
      "Food counter & live station planning",
      "Basic crowd movement flow",
    ],
  },
  "engagement-ceremony": {
    title: "Engagement Ceremony Layouts",
    accent: "Warm, intimate, photo-perfect setups",
    heroImage:
      "https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blurb:
      "Keep things cosy yet cinematic. These layouts focus on stunning backdrops, comfortable seating, and smooth ceremony flow.",
    quickInfo: [
      { label: "Ideal guest count", value: "80 – 300" },
      { label: "Planning window", value: "1.5 – 4 months" },
      { label: "Recommended venues", value: "Boutique halls, rooftops" },
    ],
    includesLeft: [
      "Ring exchange stage options",
      "Photo-wall & selfie spots",
      "Seating clusters for families",
    ],
    includesRight: [
      "Cake-cut & dance floor zoning",
      "Lighting mood presets",
      "Simple sound layout guidance",
    ],
  },
  "puberty-ceremony": {
    title: "Puberty Ceremony Layouts",
    accent: "Culturally rooted with graceful decor",
    heroImage:
      "https://images.pexels.com/photos/13090659/pexels-photo-13090659.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blurb:
      "Honor the tradition with layouts that keep elders comfortable and highlight rituals beautifully in photos and video.",
    quickInfo: [
      { label: "Ideal guest count", value: "150 – 500" },
      { label: "Planning window", value: "2 – 5 months" },
      { label: "Recommended venues", value: "Marriage halls, community spaces" },
    ],
    includesLeft: [
      "Ritual area zoning",
      "Seating for elders & priests",
      "Backdrops for main rituals",
    ],
    includesRight: [
      "Food serving & queue planning",
      "Stage for photos with guests",
      "Basic floor plan suggestions",
    ],
  },

  /* ---------------- NEW: Birthday Parties ---------------- */
  "birthday-party": {
    title: "Birthday Party Layouts",
    accent: "Playful, theme-ready spaces for all ages",
    heroImage:
      "https://images.pexels.com/photos/1543763/pexels-photo-1543763.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blurb:
      "From intimate first birthdays to loud teen parties, these layouts balance fun activity zones, cake moments and chill corners for parents.",
    quickInfo: [
      { label: "Ideal guest count", value: "40 – 150" },
      { label: "Planning window", value: "1 – 3 months" },
      {
        label: "Recommended venues",
        value: "Party halls, rooftops, backyards",
      },
    ],
    includesLeft: [
      "Theme-ready stage + cake table placement",
      "Dedicated kids play / games zone",
      "Photo booth & backdrop ideas",
    ],
    includesRight: [
      "Parent seating clusters with good visibility",
      "Snack counter + drinks zoning",
      "Basic music + lights placement",
    ],
  },

  /* ---------------- NEW: Baby Shower ---------------- */
  "baby-shower": {
    title: "Baby Shower Layouts",
    accent: "Soft, pastel-friendly layouts with cosy seating",
    heroImage:
      "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blurb:
      "Gentle, photo-ready layouts that keep the mom-to-be comfortable while giving guests plenty of space to mingle and bless.",
    quickInfo: [
      { label: "Ideal guest count", value: "30 – 120" },
      { label: "Planning window", value: "1 – 2 months" },
      {
        label: "Recommended venues",
        value: "Homes, boutique halls, cafes",
      },
    ],
    includesLeft: [
      "Main blessing chair + backdrop placement",
      "Walk-friendly aisles for rituals & gifts",
      "Gift + hamper display corner",
    ],
    includesRight: [
      "Pastel decor zoning suggestions",
      "Light snacks + dessert bar planning",
      "Photo angles for candid family shots",
    ],
  },
};

const SAMPLE_LAYOUTS = [
  {
    name: "Galaxy Aisle",
    subtitle: "LED floor walkway with overhead fairy lights.",
  },
  {
    name: "Lounge Clusters",
    subtitle: "Sofa pods mixed with dining tables for flexible seating.",
  },
  {
    name: "Minimal Mandap",
    subtitle: "Soft florals, clean lines, and neutral tones.",
  },
];

const RECOMMENDED_VENDORS = [
  {
    name: "Aura Weddings Co.",
    role: "Venue + Decor Partner",
    rating: "4.9",
    city: "Chennai",
  },
  {
    name: "PixelFrame Studios",
    role: "Photo & Video",
    rating: "4.8",
    city: "Bengaluru",
  },
  {
    name: "Sapphire Events",
    role: "End-to-end Planning",
    rating: "4.9",
    city: "Coimbatore",
  },
];

export default function EventLayouts() {
  const { eventId } = useParams();
  const data =
    EVENT_LAYOUT_DATA[eventId] ?? EVENT_LAYOUT_DATA["marriage-function"]; // fallback

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-8">
      {/* soft gradient backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50" />
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-60 w-60 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* breadcrumb + back link */}
      <div className="mb-6 flex items-center justify-between gap-4 text-xs text-slate-500">
        <Link
          to="/events"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
        >
          <span>←</span> Back to all events
        </Link>
        <span className="hidden md:inline">
          Layout suggestions • Not final floor plans
        </span>
      </div>

      {/* HERO: left text + right image card */}
      <div className="grid gap-8 md:grid-cols-[1.15fr,1fr]">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
            Smart layout studio
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            {data.title}
          </h1>
          <p className="mt-1 text-lg font-medium text-sky-600">
            {data.accent}
          </p>
          <p className="mt-3 max-w-xl text-sm text-slate-600">{data.blurb}</p>

          {/* quick chips */}
          <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
            {data.quickInfo.map((info) => (
              <div
                key={info.label}
                className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
                <span className="font-medium text-slate-700">
                  {info.label}:
                </span>
                <span className="text-slate-500">{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – FLOATING HERO CARD */}
        <div className="relative">
          <div className="absolute inset-0 translate-y-4 rounded-[32px] bg-sky-500/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[32px] bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.35)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(59,130,246,0.55)]">
            <div className="h-56 overflow-hidden">
              <img
                src={data.heroImage}
                alt={data.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="px-6 pb-5 pt-4 text-xs text-slate-500">
              <p className="mb-1 font-semibold uppercase tracking-[0.16em] text-slate-400">
                Layout snapshot
              </p>
              <p>
                This is a visual reference for spacing, zones, and flow. Your
                final layout will be customized to venue size.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT'S INCLUDED + QUICK INFO */}
      <div className="mt-10 grid gap-6 md:grid-cols-[1.4fr,0.9fr]">
        {/* Includes */}
        <div className="rounded-3xl bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <h2 className="text-lg font-semibold text-slate-900">
            What’s included in this layout pack
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Use this as a checklist when you coordinate with venues and
            planners.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <ul className="space-y-2 text-sm text-slate-700">
              {data.includesLeft.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-[10px] text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-sm text-slate-700">
              {data.includesRight.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-[10px] text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick info card */}
        <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 p-[1px] shadow-[0_18px_40px_rgba(56,189,248,0.55)]">
          <div className="h-full rounded-[22px] bg-slate-950/90 px-6 py-5 text-slate-100">
            <h2 className="text-base font-semibold">Book a layout consult</h2>
            <p className="mt-1 text-xs text-slate-300">
              Share your guest count & city and we’ll suggest 2–3 layouts that
              fit your venue.
            </p>

            <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-slate-900 shadow-[0_14px_40px_rgba(15,23,42,0.85)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]">
              Get free layout suggestions
              <span className="ml-1 text-[11px]">✨</span>
            </button>

            <p className="mt-3 text-[11px] text-slate-400">
              No payment required • You’ll only pay when you confirm a vendor.
            </p>
          </div>
        </div>
      </div>

      {/* SAMPLE LAYOUT CARDS */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-slate-900">
          Sample layout ideas
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Mix and match these concepts with your own decor and rituals.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {SAMPLE_LAYOUTS.map((layout, idx) => (
            <div
              key={layout.name}
              className="relative overflow-hidden rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)]"
              style={{
                transitionDelay: `${idx * 70}ms`,
              }}
            >
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-400/20 blur-xl" />
              <h3 className="relative text-sm font-semibold text-slate-900">
                {layout.name}
              </h3>
              <p className="relative mt-1 text-xs text-slate-600">
                {layout.subtitle}
              </p>
              <button className="relative mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600 hover:text-emerald-500">
                View layout sketch
                <span>↗</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED VENDORS */}
      <div className="mt-10">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Recommended vendors for this event type
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              These vendors work often with this layout style and know the
              flow.
            </p>
          </div>
          <Link
            to="/vendors"
            className="hidden rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-xs font-medium text-sky-700 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white md:inline-flex"
          >
            View all vendors →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {RECOMMENDED_VENDORS.map((v) => (
            <div
              key={v.name}
              className="group flex flex-col justify-between rounded-2xl bg-white/90 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(56,189,248,0.45)]"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  {v.role}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-slate-900">
                  {v.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{v.city}</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px]">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-amber-300 px-2 py-1 font-medium">
                  ★ {v.rating}
                </span>
                <Link
                  to="/vendors"
                  className="text-sky-600 transition group-hover:text-emerald-500"
                >
                  View profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
