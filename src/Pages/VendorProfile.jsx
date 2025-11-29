// src/Pages/VendorProfile.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

            {/* <-- ROUTED LINK: opens chat for this vendor --> */}
            <Link
              to={`/chat/${encodeURIComponent(vendorId)}`}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_40px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01]"
              aria-label={`Start conversation with ${data.name}`}
            >
              Start Conversation
            </Link>

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

      {/* ----- Completed Events section (new) ----- */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Completed Events</h2>
        <p className="mb-6 text-sm text-slate-600 max-w-2xl">
          Add past events you've completed — these will display on your profile as examples of your work.
        </p>

        <CompletedEvents vendorId={vendorId} initialEvents={data.portfolio} />
      </div>
    </section>
  );
}

/* ---------- TAB COMPONENTS ---------- */

function PortfolioTab({ portfolio }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
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

/* ---------- Completed Events component (new) ---------- */

function CompletedEvents({ vendorId, initialEvents = [] }) {
  // key in localStorage to persist vendor's completed events
  const storageKey = `vendor:${vendorId}:completedEvents`;

  // load from localStorage or fall back to initialEvents (map portfolio to event shape)
  const loadInitial = () => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) return JSON.parse(raw);
    } catch (e) {
      // ignore parse errors
    }
    // map portfolio items to completed event schema
    return initialEvents.map((p, idx) => ({
      id: `init-${idx}`,
      title: p.title,
      category: p.category,
      date: p.year ? `${p.year}-01-01` : "",
      blurb: p.blurb,
      image: p.image,
      createdAt: Date.now() - idx * 1000,
    }));
  };

  const [events, setEvents] = useState(loadInitial);
  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    blurb: "",
    imageFile: null,
    imagePreview: null,
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(events));
    } catch (e) {
      // ignore
    }
  }, [events]);

  function onFileChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setForm((s) => ({ ...s, imageFile: null, imagePreview: null }));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, imageFile: file, imagePreview: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.title.trim()) return alert("Please enter event title.");
    const newEvent = {
      id: `evt-${Date.now()}`,
      title: form.title.trim(),
      category: form.category || "General",
      date: form.date || "",
      blurb: form.blurb || "",
      image: form.imagePreview || null,
      createdAt: Date.now(),
    };
    setEvents((prev) => [newEvent, ...prev]);
    setForm({ title: "", category: "", date: "", blurb: "", imageFile: null, imagePreview: null });
  }

  function handleRemove(id) {
    if (!confirm("Remove this completed event?")) return;
    setEvents((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="grid gap-6">
      {/* form */}
      <form
        onSubmit={handleAdd}
        className="rounded-2xl border border-slate-100 bg-white/90 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
      >
        <div className="grid gap-3 md:grid-cols-3">
          <div className="md:col-span-2 grid gap-3">
            <div className="grid gap-2">
              <label className="text-xs font-medium text-slate-600">Event title</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g., Sunset Lakeside Wedding"
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-xs font-medium text-slate-600">Category</label>
                <input
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  placeholder="Marriage / Engagement / Birthday"
                  className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
              <div className="w-1/2">
                <label className="text-xs font-medium text-slate-600">Date</label>
                <input
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  type="date"
                  className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600">Short description</label>
              <textarea
                value={form.blurb}
                onChange={(e) => setForm({ ...form, blurb: e.target.value })}
                rows={3}
                placeholder="One- or two-line summary of the event and what you delivered"
                className="w-full rounded-2xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-full rounded-2xl border border-dashed border-slate-200 p-3 text-center">
              <label className="mb-2 block text-xs font-medium text-slate-500">
                Upload photo (optional)
              </label>
              <input type="file" accept="image/*" onChange={onFileChange} />
              {form.imagePreview ? (
                <img
                  src={form.imagePreview}
                  alt="preview"
                  className="mt-3 max-h-28 w-full rounded-lg object-cover shadow-sm"
                />
              ) : (
                <div className="mt-3 text-[12px] text-slate-400">Preview will appear here</div>
              )}
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-1"
              >
                Add Completed Event
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* events list */}
      <div className="grid gap-4 md:grid-cols-3">
        {events.length === 0 && (
          <div className="col-span-full rounded-2xl border border-slate-100 bg-white/90 p-6 text-sm text-slate-600">
            No completed events yet — add one above to showcase your work.
          </div>
        )}

        {events.map((ev, idx) => (
          <div
            key={ev.id}
            className="overflow-hidden rounded-2xl bg-white/90 p-0 shadow-[0_12px_36px_rgba(15,23,42,0.08)] transition-transform duration-400 hover:-translate-y-1"
            style={{ animation: `fadeInUp 360ms ease ${idx * 60}ms both` }}
          >
            <div className="h-40 overflow-hidden bg-slate-100">
              {ev.image ? (
                <img src={ev.image} alt={ev.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-slate-400">
                  No image
                </div>
              )}
            </div>
            <div className="px-4 py-3 text-sm text-slate-700">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">
                    {ev.category} {ev.date ? `• ${ev.date.slice(0, 10)}` : ""}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {ev.title}
                  </h3>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => handleRemovePrompt(ev.id, handleRemove)}
                    className="rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-100"
                    title="Remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-600">{ev.blurb}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS keyframe for smooth entry (tailwind doesn't provide custom keyframes inline) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// helper that asks confirmation and calls handler (separate to keep JSX clean)
function handleRemovePrompt(id, handler) {
  if (confirm("Remove this completed event?")) handler(id);
}

