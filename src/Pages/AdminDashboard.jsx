// src/Pages/AdminDashboard.jsx
import React, { useState } from "react";

const ORDERS = [
  {
    id: "ORD-2024-001",
    title: "Sarah & Mark’s Wedding Reception",
    status: "Accepted",
    date: "15 Aug 2024",
    amount: "₹12,500.75",
    notes:
      "Please ensure vegetarian options are clearly labeled. Guest count is 150.",
  },
  {
    id: "ORD-2024-002",
    title: "Baby Shower for Emily",
    status: "Pending",
    date: "22 Jun 2024",
    amount: "₹850",
    notes:
      "Looking for a pastel theme. Please confirm availability of balloon arch.",
  },
  {
    id: "ORD-2024-003",
    title: "Company Annual Meeting",
    status: "Completed",
    date: "05 Sep 2024",
    amount: "₹3,200.50",
    notes:
      "AV equipment setup required by 8:00 AM. Coffee and pastries for 50 attendees.",
  },
  {
    id: "ORD-2024-004",
    title: "Liam’s 5th Birthday Party",
    status: "Declined",
    date: "18 Jul 2024",
    amount: "₹19,500",
    notes: "Client exploring alternative dates – follow up next week.",
  },
];

const OVERVIEW_STATS = [
  {
    label: "Total Vendors",
    value: "152",
    sub: "+12 this month",
  },
  {
    label: "Active Events",
    value: "37",
    sub: "7 live today",
  },
  {
    label: "Pending Approvals",
    value: "5",
    sub: "2 vendors, 3 events",
  },
  {
    label: "Monthly GMV",
    value: "₹48L",
    sub: "+18% vs last month",
  },
];

const SYSTEM_PILLS = [
  { label: "Chat server", status: "Online", tone: "bg-emerald-100 text-emerald-700" },
  { label: "Payment gateway", status: "Healthy", tone: "bg-sky-100 text-sky-700" },
  { label: "Email notifications", status: "Slight delay", tone: "bg-amber-100 text-amber-700" },
];

const QUICK_ACTIONS = [
  "View flags / reports",
  "Export vendor list",
  "Download bookings",
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-8">
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-cyan-50 to-emerald-50" />
      <div className="pointer-events-none absolute -left-24 top-0 h-48 w-48 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-48 w-48 rounded-full bg-emerald-300/25 blur-3xl" />

      {/* header */}
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-500">
            Admin console
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-slate-900">
            Admin Control Panel
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-600">
            Monitor platform health, approve new vendors and keep every event
            running smoothly.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-xs text-slate-500">
          <p>
            Role:{" "}
            <span className="font-semibold text-slate-900">Admin</span>
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(34,197,94,0.45)]" />
            System Status: Online
          </span>
        </div>
      </header>

      {/* tab switch (Profile / Orders / Messages like in screenshots, plus overview) */}
      <div className="mb-6 flex rounded-2xl bg-white/80 p-1 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
        {[
          { id: "overview", label: "Overview" },
          { id: "orders", label: "Orders" },
          { id: "profile", label: "Profile" },
          { id: "messages", label: "Messages" },
        ].map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 rounded-2xl px-4 py-2 text-xs font-medium transition-all duration-300 ${
                active
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {active && (
                <span className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 shadow-[0_12px_35px_rgba(56,189,248,0.55)] transition-all" />
              )}
              <span className={active ? "text-white" : ""}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* animated tab content */}
      <div className="relative">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "messages" && <MessagesTab />}
      </div>
    </section>
  );
}

/* ------------------- OVERVIEW ------------------- */

function OverviewTab() {
  return (
    <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
      {/* top stats row */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {OVERVIEW_STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-3xl bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(59,130,246,0.45)]"
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-sky-500/15 via-cyan-400/10 to-emerald-400/20 blur-xl" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              {stat.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-slate-500">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* middle row: vendor approvals + system overview */}
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        {/* vendor approvals */}
        <div className="rounded-3xl bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Vendor Approvals
              </h2>
              <p className="text-xs text-slate-500">
                Review and approve vendors before they go live.
              </p>
            </div>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600 hover:border-sky-300 hover:text-sky-700">
              View all
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {[
              {
                name: "Luxe Limousine Service",
                category: "Transportation • Chennai",
                status: "Pending review",
                joined: "Joined 2 days ago",
              },
              {
                name: "Magic Moments Photo Booth",
                category: "Photo Booth • Bengaluru",
                status: "Pending review",
                joined: "Joined 5 days ago",
              },
            ].map((v, i) => (
              <div
                key={v.name}
                className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition-all duration-300 hover:border-sky-200 hover:bg-white"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {v.name}
                  </p>
                  <p className="text-[11px] text-slate-500">{v.category}</p>
                  <p className="mt-1 text-[10px] text-slate-400">
                    {v.joined}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-medium text-amber-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {v.status}
                  </span>
                  <div className="flex gap-2 text-[11px]">
                    <button className="rounded-full border border-slate-200 bg-white px-3 py-1 font-medium text-slate-600 hover:border-rose-300 hover:text-rose-600">
                      Reject
                    </button>
                    <button className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-1 font-semibold text-white shadow-md hover:shadow-lg">
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* system overview + quick actions */}
        <div className="space-y-4">
          <div className="rounded-3xl bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <h2 className="text-sm font-semibold text-slate-900">
              System Overview
            </h2>
            <div className="mt-3 space-y-3 text-xs">
              {SYSTEM_PILLS.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-slate-600">{p.label}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${p.tone}`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 px-5 py-4 text-slate-50 shadow-[0_18px_50px_rgba(15,23,42,0.9)]">
            <h2 className="text-sm font-semibold">Quick Actions</h2>
            <p className="mt-1 text-[11px] text-slate-400">
              These buttons are placeholders – hook them to your backend / admin
              APIs later.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action}
                  className="rounded-full bg-slate-800 px-3 py-1 font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-700"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* latest bookings (bottom row like screenshot) */}
      <div className="mt-6 rounded-3xl bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <div className="mb-3 flex items-center justify-between text-xs">
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Latest Bookings
            </h2>
            <p className="mt-1 text-slate-500">
              At-a-glance view of recent transactions.
            </p>
          </div>
          <select className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {ORDERS.map((o, i) => (
            <div
              key={o.id}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-xs transition-all duration-300 hover:border-sky-200 hover:bg-white"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {o.title}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  {o.id} • {o.date}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">
                  {o.amount}
                </p>
                <StatusBadge status={o.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------- ORDERS TAB (like “My Orders”) ------------------- */

function OrdersTab() {
  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">
        Orders & Requests
      </h2>
      <p className="mb-4 text-xs text-slate-500">
        Accept, monitor or decline orders placed by users across the platform.
      </p>

      <div className="space-y-4">
        {ORDERS.map((order, i) => (
          <div
            key={order.id}
            className="rounded-3xl bg-white/95 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform duration-400 hover:-translate-y-1.5 hover:shadow-[0_22px_60px_rgba(37,99,235,0.35)]"
            style={{ transitionDelay: `${i * 70}ms` }}
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">
                  {order.title}
                </h3>
                <p className="text-[11px] text-slate-500">{order.id}</p>
                <p className="mt-2 text-xs text-slate-600">
                  <span className="font-semibold">Notes:</span> {order.notes}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2 text-xs md:min-w-[220px]">
                <div className="flex items-center gap-2">
                  <StatusBadge status={order.status} />
                  <span className="text-slate-500">{order.date}</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  {order.amount}
                </p>
                <div className="flex gap-2">
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 hover:border-slate-300">
                    View Details
                  </button>
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-700 hover:border-sky-300 hover:text-sky-700">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------- PROFILE TAB (like screenshot) ------------------- */

function ProfileTab() {
  return (
    <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* left: profile card */}
        <div className="flex-1 rounded-3xl bg-white/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
          <h2 className="mb-4 text-sm font-semibold text-slate-900">
            Profile Information
          </h2>
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative h-20 w-20 overflow-hidden rounded-full bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 shadow-lg">
              <div className="absolute inset-[3px] rounded-full bg-slate-900/80" />
              <span className="relative flex h-full items-center justify-center text-xl font-semibold text-white">
                L
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Logesh Logesh
              </p>
              <p className="text-[11px] text-slate-500">Event Enthusiast</p>
            </div>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified Admin
            </span>
          </div>
        </div>

        {/* right: contact + account */}
        <div className="flex-[1.4] space-y-4">
          <div className="rounded-3xl bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Contact Information
              </h2>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-600 hover:border-sky-300 hover:text-sky-700">
                Edit Profile
              </button>
            </div>
            <div className="grid gap-4 text-xs md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-slate-800">
                  logeshviswa12@gmail.com
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-slate-400">Not provided</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
            <h2 className="mb-3 text-sm font-semibold text-slate-900">
              Account Details
            </h2>
            <div className="grid gap-4 text-xs md:grid-cols-2">
              <div>
                <p className="text-[11px] font-semibold text-slate-500">
                  Member Since
                </p>
                <p className="mt-1 text-slate-800">16 Nov 2025</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">
                  Last Login
                </p>
                <p className="mt-1 text-slate-800">16 Nov 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- MESSAGES TAB (like “No messages / Start chatting”) ------------------- */

function MessagesTab() {
  return (
    <div className="animate-[fadeIn_0.5s_ease-out]">
      <h2 className="mb-3 text-sm font-semibold text-slate-900">
        Recent Messages
      </h2>
      <div className="rounded-3xl bg-white/95 p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-400 shadow-inner">
          <span className="text-3xl">💬</span>
        </div>
        <h3 className="mt-3 text-base font-semibold text-slate-900">
          No Messages
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Start a conversation with vendors or users to see your messages here.
        </p>
        <button className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-5 py-2 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(56,189,248,0.6)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]">
          Start Chatting
        </button>
      </div>
    </div>
  );
}

/* ------------------- helpers ------------------- */

function StatusBadge({ status }) {
  let style =
    "bg-slate-100 text-slate-700 border border-slate-200";
  if (status === "Accepted")
    style = "bg-emerald-50 text-emerald-700 border border-emerald-100";
  if (status === "Pending")
    style = "bg-amber-50 text-amber-700 border border-amber-100";
  if (status === "Completed")
    style = "bg-sky-50 text-sky-700 border border-sky-100";
  if (status === "Declined")
    style = "bg-rose-50 text-rose-700 border border-rose-100";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium ${style}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
