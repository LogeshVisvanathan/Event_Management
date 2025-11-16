// src/Pages/AdminDashboard.jsx
export default function AdminDashboard() {
  const vendorApprovals = [
    {
      id: 101,
      name: "Luxe Limousine Service",
      category: "Transportation",
      city: "Chennai",
      since: "2 days ago",
      status: "pending",
    },
    {
      id: 102,
      name: "Magic Moments Photo Booth",
      category: "Photo Booth",
      city: "Bengaluru",
      since: "5 days ago",
      status: "pending",
    },
  ];

  const latestBookings = [
    {
      id: "EVT-3421",
      client: "Akash & Priya",
      eventType: "Marriage",
      city: "Chennai",
      amount: "₹3.5L",
      status: "confirmed",
    },
    {
      id: "EVT-3390",
      client: "Sanjay",
      eventType: "Birthday",
      city: "Chennai",
      amount: "₹90K",
      status: "pending",
    },
    {
      id: "EVT-3377",
      client: "Karthik Family",
      eventType: "Puberty Ceremony",
      city: "Madurai",
      amount: "₹1.8L",
      status: "cancelled",
    },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-slate-50 via-sky-50/70 to-transparent" />

      <section className="mx-auto max-w-6xl px-4 pt-20 pb-24 space-y-8">
        {/* header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Admin Control Panel
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              Monitor platform health, approve new vendors and keep every event
              running smoothly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
              Role: <span className="font-semibold text-slate-900">Admin</span>
            </span>
            <span className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-1 text-white shadow-md">
              System Status: Online
            </span>
          </div>
        </header>

        {/* KPI cards */}
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <AdminStat
            label="Total Vendors"
            value="152"
            trend="+12 this month"
            gradient="from-sky-500 via-cyan-400 to-emerald-400"
          />
          <AdminStat
            label="Active Events"
            value="37"
            trend="7 live today"
            gradient="from-violet-500 via-sky-500 to-cyan-400"
          />
          <AdminStat
            label="Pending Approvals"
            value="5"
            trend="2 vendors, 3 events"
            gradient="from-amber-400 via-orange-300 to-sky-400"
          />
          <AdminStat
            label="Monthly GMV"
            value="₹48L"
            trend="+18% vs last month"
            gradient="from-emerald-400 via-teal-400 to-sky-400"
          />
        </section>

        {/* lower grid */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1.1fr]">
          {/* left – vendor approvals + bookings */}
          <section className="space-y-6">
            {/* vendor approvals */}
            <div className="neon-card rounded-[28px] bg-white/95 p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                    Vendor Approvals
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Review and approve vendors before they go live.
                  </p>
                </div>
                <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-700">
                  View all
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                {vendorApprovals.map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-3 transition hover:border-sky-200 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {v.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {v.category} • {v.city}
                      </p>
                      <p className="mt-1 text-[11px] text-slate-500">
                        Joined {v.since}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold text-amber-700">
                        Pending review
                      </span>
                      <div className="flex gap-2">
                        <button className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-700 transition hover:border-rose-200 hover:text-rose-600">
                          Reject
                        </button>
                        <button className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-1.5 text-[11px] font-semibold text-white shadow-md transition hover:brightness-105">
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* latest bookings */}
            <div className="rounded-[28px] bg-white/95 p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-slate-900">
                    Latest Bookings
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    At-a-glance view of recent transactions.
                  </p>
                </div>
                <select className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] text-slate-600">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>All time</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-xs text-slate-600">
                  <thead className="border-b border-slate-100 text-[11px] uppercase tracking-wide text-slate-500">
                    <tr>
                      <th className="py-2 pr-4">ID</th>
                      <th className="py-2 pr-4">Client</th>
                      <th className="py-2 pr-4">Event</th>
                      <th className="py-2 pr-4">City</th>
                      <th className="py-2 pr-4">Amount</th>
                      <th className="py-2 pr-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestBookings.map((b) => (
                      <tr
                        key={b.id}
                        className="border-b border-slate-50 last:border-0"
                      >
                        <td className="py-2 pr-4 font-medium text-slate-900">
                          {b.id}
                        </td>
                        <td className="py-2 pr-4">{b.client}</td>
                        <td className="py-2 pr-4">{b.eventType}</td>
                        <td className="py-2 pr-4">{b.city}</td>
                        <td className="py-2 pr-4">{b.amount}</td>
                        <td className="py-2 pr-4">
                          <StatusPill status={b.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* right – system widgets */}
          <aside className="space-y-5">
            <div className="rounded-[26px] bg-white/95 p-5 shadow-lg">
              <h3 className="mb-2 text-sm font-semibold text-slate-900">
                System Overview
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center justify-between">
                  <span>Chat server</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                    Online
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Payment gateway</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                    Healthy
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Email notifications</span>
                  <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-700">
                    Slight delay
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-[26px] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-[1px] shadow-xl">
              <div className="rounded-[24px] bg-slate-900/95 p-5 text-xs text-slate-200">
                <h3 className="mb-2 text-sm font-semibold text-white">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full bg-slate-800 px-3 py-1.5 text-[11px] hover:bg-slate-700">
                    View flags / reports
                  </button>
                  <button className="rounded-full bg-slate-800 px-3 py-1.5 text-[11px] hover:bg-slate-700">
                    Export vendor list
                  </button>
                  <button className="rounded-full bg-slate-800 px-3 py-1.5 text-[11px] hover:bg-slate-700">
                    Download bookings
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-slate-400">
                  These buttons are placeholders – hook them to your backend /
                  admin APIs later.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function AdminStat({ label, value, trend, gradient }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/95 p-4 shadow-lg">
      <div
        className={`pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-gradient-to-tr ${gradient} opacity-40 blur-2xl`}
      />
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-[11px] text-slate-500">{trend}</p>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    confirmed: {
      text: "Confirmed",
      cls: "bg-emerald-50 text-emerald-700 border border-emerald-100",
    },
    pending: {
      text: "Pending",
      cls: "bg-amber-50 text-amber-700 border border-amber-100",
    },
    cancelled: {
      text: "Cancelled",
      cls: "bg-rose-50 text-rose-700 border border-rose-100",
    },
  }[status];

  return (
    <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${map.cls}`}>
      {map.text}
    </span>
  );
}
