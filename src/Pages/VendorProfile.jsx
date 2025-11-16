// src/Pages/VendorProfile.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const VENDOR_PROFILE_DATA = {
  "dream-weavers-event-planners": {
    name: "Dream Weavers Event Planners",
    role: "Event Planner",
    rating: 5.0,
    city: "Chennai",
    heroImage:
      "https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=1600",
    avatar:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    tagline:
      "From concept to execution, we meticulously plan and coordinate your dream event.",
    email: "plan@dreamweavers.com",
    websiteLabel: "Visit Website",
    websiteUrl: "#",
    specializations: ["Marriage Function", "Engagement", "Birthday", "Corporate"],
    whyChooseUs: [
      "Professional and experienced team",
      "Attention to detail and premium quality",
      "Customised solutions for every event",
      "Excellent customer service & quick responses",
    ],
    portfolio: [
      {
        title: "Elegant Lakeside Wedding",
        category: "Marriage Function",
        year: "2023",
        image:
          "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600",
        blurb:
          "Sunset ceremony, floral arch, and curated sit-down dinner for 200 guests.",
      },
      {
        title: "Tropical Engagement Party",
        category: "Engagement",
        year: "2024",
        image:
          "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600",
        blurb:
          "Garden engagement with fairy-light canopy, tiki bar, and live band.",
      },
      {
        title: "Grand 50th Birthday Bash",
        category: "Birthday",
        year: "2024",
        image:
          "https://images.pexels.com/photos/1449794/pexels-photo-1449794.jpeg?auto=compress&cs=tinysrgb&w=1600",
        blurb:
          "Ballroom celebration with jazz band, vintage theme, and immersive decor.",
      },
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        initials: "S",
        rating: 5,
        timeAgo: "2 weeks ago",
        text: "Absolutely amazing service! They made our wedding day perfectly stress-free. Highly recommended.",
      },
      {
        name: "Michael Chen",
        initials: "M",
        rating: 5,
        timeAgo: "1 month ago",
        text: "Creative, organised, and super patient. The team exceeded our expectations.",
      },
      {
        name: "Emily Davis",
        initials: "E",
        rating: 5,
        timeAgo: "2 months ago",
        text: "Attention to detail was insane. Our guests still talk about the decor!",
      },
    ],
  },

  "elegant-moments-photography": {
    name: "Elegant Moments Photography",
    role: "Photographer",
    rating: 4.9,
    city: "Bengaluru",
    heroImage:
      "https://images.pexels.com/photos/1444449/pexels-photo-1444449.jpeg?auto=compress&cs=tinysrgb&w=1600",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
    tagline:
      "Capturing timeless stories with natural light, clean edits, and real emotions.",
    email: "hello@elegantmoments.com",
    websiteLabel: "View Portfolio Site",
    websiteUrl: "#",
    specializations: ["Wedding Photography", "Engagement Shoots", "Event Coverage"],
    whyChooseUs: [
      "Editorial-style edits with true-to-life colours",
      "Backup team & backup gear for critical events",
      "Curated albums + short highlight films",
      "Fast delivery and online gallery access",
    ],
    portfolio: [
      {
        title: "Sunset Beach Ceremony",
        category: "Marriage Function",
        year: "2023",
        image:
          "https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600",
        blurb:
          "Golden-hour portraits with candid reception coverage till the after-party.",
      },
      {
        title: "Old-Town Engagement Walk",
        category: "Engagement",
        year: "2024",
        image:
          "https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&w=1600",
        blurb:
          "Street-style shoot with a mix of posed and documentary-style frames.",
      },
    ],
    reviews: [
      {
        name: "Karthik & Aishwarya",
        initials: "KA",
        rating: 5,
        timeAgo: "3 weeks ago",
        text: "Photos look like they belong in a magazine. We loved the candid shots.",
      },
      {
        name: "Riya Mehta",
        initials: "R",
        rating: 4.8,
        timeAgo: "2 months ago",
        text: "Very friendly team and super patient during our family portraits.",
      },
    ],
  },

  // you can add more vendors here with the same structure
};

const TABS = ["Portfolio", "About", "Reviews"];

export default function VendorProfile() {
  const { vendorId } = useParams();
  const [activeTab, setActiveTab] = useState("Portfolio");

  const data =
    VENDOR_PROFILE_DATA[vendorId] ?? VENDOR_PROFILE_DATA["dream-weavers-event-planners"];

  const avgRatingLabel = `${data.rating.toFixed(1)} out of 5 stars`;

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-8">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50" />
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

      {/* back link */}
      <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
        <Link
          to="/vendors"
          className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
        >
          <span>←</span> Back to vendors
        </Link>
        <span className="hidden sm:inline">Identity-verified • Real customer reviews</span>
      </div>

      {/* HERO SECTION */}
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.5fr),minmax(0,1.1fr)]">
        {/* left: info */}
        <div className="rounded-3xl bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.16)]">
          <div className="flex flex-wrap items-center gap-4">
            {/* avatar */}
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-slate-200">
              {data.avatar ? (
                <img
                  src={data.avatar}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
              ) : null}
              <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-[10px] text-white shadow-lg">
                ★ {data.rating.toFixed(1)}
              </div>
            </div>

            <div className="flex-1 min-w-[220px]">
              <h1 className="text-2xl font-semibold text-slate-900">
                {data.name}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 font-semibold uppercase tracking-[0.16em] text-white">
                  {data.role}
                </span>
                <span className="inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-sky-700">
                  {data.city}
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                  {avgRatingLabel}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-slate-600">{data.tagline}</p>

          {/* contact row */}
          <div className="mt-5 grid gap-3 text-xs text-slate-600 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                ✉
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Email
                </p>
                <p className="font-medium text-slate-800">{data.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm">
                🌐
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Website
                </p>
                <button className="font-medium text-sky-600 hover:text-emerald-500">
                  {data.websiteLabel}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* right: get in touch card */}
        <div className="relative">
          <div className="absolute inset-0 translate-y-3 rounded-[32px] bg-sky-500/25 blur-2xl" />
          <div className="relative h-full rounded-[28px] bg-slate-950/95 px-6 py-5 text-slate-100 shadow-[0_20px_70px_rgba(15,23,42,0.9)]">
            <h2 className="text-base font-semibold">Get in touch</h2>
            <p className="mt-1 text-xs text-slate-300">
              Share your event details and the vendor will respond with
              availability, pricing, and layout suggestions.
            </p>

            <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_40px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]">
              Start Conversation
            </button>

            <div className="mt-4 grid gap-2 text-[11px] text-slate-300">
              <div className="flex items-center justify-between">
                <span>Avg. response time</span>
                <span className="font-semibold text-emerald-300">
                  &lt; 15 minutes
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bookings this month</span>
                <span className="font-semibold text-sky-300">18+</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-1 text-[11px] text-amber-300">
              {"★★★★★".split("").map((star, idx) => (
                <span key={idx}>★</span>
              ))}
              <span className="ml-1 text-slate-300">{avgRatingLabel}</span>
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-10">
        <div className="relative mx-auto max-w-3xl rounded-full bg-slate-100 p-1">
          {/* moving pill */}
          <div
            className={`absolute top-1 h-[32px] w-1/3 rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-transform duration-300`}
            style={{
              transform: `translateX(${
                activeTab === "Portfolio" ? 0 : activeTab === "About" ? 100 : 200
              }%)`,
            }}
          />
          <div className="relative grid grid-cols-3 text-xs font-semibold text-slate-500">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 transition-colors ${
                  activeTab === tab ? "text-slate-900" : "hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT */}
        <div className="mt-6">
          {activeTab === "Portfolio" && <PortfolioTab portfolio={data.portfolio} />}
          {activeTab === "About" && (
            <AboutTab
              specializations={data.specializations}
              whyChooseUs={data.whyChooseUs}
            />
          )}
          {activeTab === "Reviews" && <ReviewsTab reviews={data.reviews} rating={data.rating} />}
        </div>
      </div>
    </section>
  );
}

/* ---------- TAB COMPONENTS ---------- */

function PortfolioTab({ portfolio }) {
  return (
    <div
      className="grid gap-5 md:grid-cols-3"
    >
      {portfolio.map((item, idx) => (
        <div
          key={item.title}
          className="overflow-hidden rounded-2xl bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(56,189,248,0.55)]"
          style={{ transitionDelay: `${idx * 80}ms` }}
        >
          <div className="h-40 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="px-4 pb-4 pt-3 text-xs text-slate-600">
            <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
              {item.category} • {item.year}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-1 text-xs">{item.blurb}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AboutTab({ specializations, whyChooseUs }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-3xl bg-white/90 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.14)]">
        <h3 className="text-sm font-semibold text-slate-900">Specialisations</h3>
        <p className="mt-1 text-xs text-slate-600">
          Expert in designing unforgettable experiences for:
        </p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {specializations.map((s) => (
            <span
              key={s}
              className="rounded-full bg-sky-50 px-3 py-1 text-sky-700"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white/90 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.14)]">
        <h3 className="text-sm font-semibold text-slate-900">Why choose us</h3>
        <ul className="mt-3 space-y-2 text-xs text-slate-700">
          {whyChooseUs.map((reason) => (
            <li key={reason} className="flex items-start gap-2">
              <span className="mt-[3px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-[10px] text-white">
                ✓
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ReviewsTab({ reviews, rating }) {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl bg-white/90 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.14)]">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <p className="text-3xl font-semibold text-slate-900">
              {rating.toFixed(1)}
            </p>
            <div className="mt-1 flex gap-1 text-amber-400">
              {"★★★★★".split("").map((s, idx) => (
                <span key={idx}>★</span>
              ))}
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Based on customer reviews
            </p>
          </div>
          <p className="max-w-md text-xs text-slate-600">
            Clients consistently rate this vendor for their professionalism,
            quality of service, and attention to detail.
          </p>
        </div>
      </div>

      {reviews.map((r, idx) => (
        <div
          key={r.name + idx}
          className="flex gap-4 rounded-3xl bg-white/90 p-5 shadow-[0_10px_28px_rgba(15,23,42,0.12)] transition-transform duration-400 hover:-translate-y-1"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            {r.initials}
          </div>
          <div className="flex-1 text-xs text-slate-700">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-900">{r.name}</span>
              <span className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </span>
              <span className="text-[11px] text-slate-400">{r.timeAgo}</span>
            </div>
            <p className="mt-1">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
