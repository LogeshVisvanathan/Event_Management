// src/Pages/Contact.jsx
export default function Contact() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-sky-50 via-cyan-50 to-transparent" />

      <section className="mx-auto max-w-6xl px-4 pt-20 pb-24">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">
            Get in Touch
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Have questions about vendors, pricing or custom event flows? Our
            team is happy to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr]">
          {/* form */}
          <form className="rounded-[28px] bg-white/95 p-7 shadow-xl space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Your full name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
            </div>

            <Field
              label="Event Type"
              as="select"
              options={[
                "Marriage Function",
                "Engagement",
                "Puberty Ceremony",
                "Birthday",
                "Meeting / Corporate",
                "Baby Shower",
                "Others",
              ]}
            />

            <Field
              label="Message"
              as="textarea"
              rows={4}
              placeholder="Tell us about your event, preferred dates, city and budget..."
            />

            <button className="mt-2 w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(56,189,248,0.5)] transition hover:brightness-105">
              Send Message
            </button>
          </form>

          {/* info & FAQ */}
          <div className="space-y-5">
            <div className="rounded-3xl bg-white/95 p-6 shadow-lg">
              <h2 className="mb-3 text-sm font-semibold text-slate-900">
                Contact Information
              </h2>
              <InfoRow label="Email" value="hello@eventify.com" icon="✉️" />
              <InfoRow label="Call" value="+91-98765 43210" icon="📞" />
              <InfoRow
                label="Visit"
                value="123 Event Street, City, State"
                icon="📍"
              />
              <InfoRow label="Business Hours" value="Mon–Sat, 9 AM – 7 PM" icon="⏱" />
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-[1px] shadow-xl">
              <div className="rounded-[22px] bg-slate-900/95 p-5 text-xs text-slate-200">
                <h3 className="mb-2 text-sm font-semibold text-white">
                  Quick Questions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <span className="font-medium text-sky-300">
                      How far in advance should I book?
                    </span>
                    <br />
                    We recommend 2–6 months for the best vendor availability.
                  </li>
                  <li>
                    <span className="font-medium text-sky-300">
                      Do you charge consultation fees?
                    </span>
                    <br />
                    No. Initial consultations are free with no obligation.
                  </li>
                  <li>
                    <span className="font-medium text-sky-300">
                      Can I change vendors after booking?
                    </span>
                    <br />
                    Yes, subject to availability and policy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  as,
  options,
  rows = 3,
  type = "text",
  placeholder = "",
}) {
  const base =
    "mt-1 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100";
  if (as === "textarea") {
    return (
      <div>
        <label className="text-xs font-medium text-slate-700">{label}</label>
        <textarea
          rows={rows}
          className={base + " resize-none"}
          placeholder={placeholder}
        />
      </div>
    );
  }
  if (as === "select") {
    return (
      <div>
        <label className="text-xs font-medium text-slate-700">{label}</label>
        <select className={base}>
          <option value="">Select...</option>
          {options?.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div>
      <label className="text-xs font-medium text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={base}
      />
    </div>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div className="mt-3 flex items-start gap-3 text-xs text-slate-700">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm">
        {icon}
      </div>
      <div>
        <p className="font-medium text-slate-900">{label}</p>
        <p className="text-slate-600">{value}</p>
      </div>
    </div>
  );
}
