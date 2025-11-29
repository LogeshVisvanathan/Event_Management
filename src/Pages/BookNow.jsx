// src/Pages/BookNow.jsx
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

// quick vendor lookup (same ids as Vendors.jsx)
const VENDORS = {
  "dream-weavers": {
    id: "dream-weavers",
    name: "Dream Weavers Event Planners",
    city: "Chennai",
    basePrice: 45000, // ₹
  },
  "elegant-moments": {
    id: "elegant-moments",
    name: "Elegant Moments Photography",
    city: "Bengaluru",
    basePrice: 30000,
  },
  "floral-fantasy": {
    id: "floral-fantasy",
    name: "Floral Fantasy Decor",
    city: "Coimbatore",
    basePrice: 25000,
  },
  "gourmet-bites": {
    id: "gourmet-bites",
    name: "Gourmet Bites Catering",
    city: "Chennai",
    basePrice: 20000,
  },
  "sonic-waves": {
    id: "sonic-waves",
    name: "Sonic Waves DJ",
    city: "Hyderabad",
    basePrice: 12000,
  },
  "harmony-strings": {
    id: "harmony-strings",
    name: "Harmony Strings Quartet",
    city: "Chennai",
    basePrice: 18000,
  },
};

export default function BookNow() {
  const { vendorId } = useParams();
  const vendor = VENDORS[vendorId] ?? null;
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(100);
  const [packageType, setPackageType] = useState("standard"); // standard / premium / elite
  const [paymentMethod, setPaymentMethod] = useState("gpay");
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!vendor) {
      // if unknown vendor, send back to vendors
      const t = setTimeout(() => navigate("/vendors"), 1200);
      return () => clearTimeout(t);
    }
  }, [vendor, navigate]);

  if (!vendor) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="text-lg">Vendor not found. Redirecting to vendors…</p>
      </section>
    );
  }

  // pricing calculation (simple sample)
  const packageMultiplier = packageType === "standard" ? 1 : packageType === "premium" ? 1.5 : 2;
  const guestSurcharge = Math.max(0, guests - 100) * 40; // ₹40 per extra guest
  const subtotal = Math.round((vendor.basePrice * packageMultiplier) + guestSurcharge);
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handlePayNow = (e) => {
    e.preventDefault();
    // fake payment flow
    setLoadingPayment(true);
    setTimeout(() => {
      setLoadingPayment(false);
      setShowSuccess(true);
      // Here you would call your backend / payment gateway instead
    }, 1600);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link to="/vendors" className="text-sm text-slate-600 hover:underline">
          ← Back to vendors
        </Link>
        <div className="text-sm text-slate-500">Secure checkout • Payments in INR (₹)</div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr,420px]">
        <div className="rounded-2xl bg-white/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
          <h2 className="text-2xl font-semibold text-slate-900">{vendor.name}</h2>
          <p className="mt-1 text-sm text-slate-600">Book your event with {vendor.name} ({vendor.city})</p>

          <form onSubmit={handlePayNow} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Event date</label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Guests (approx.)</label>
              <input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-3 py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Package</label>
              <div className="mt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setPackageType("standard")}
                  className={`flex-1 rounded-2xl px-3 py-2 text-sm ${packageType === "standard" ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  Standard
                </button>
                <button
                  type="button"
                  onClick={() => setPackageType("premium")}
                  className={`flex-1 rounded-2xl px-3 py-2 text-sm ${packageType === "premium" ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  Premium
                </button>
                <button
                  type="button"
                  onClick={() => setPackageType("elite")}
                  className={`flex-1 rounded-2xl px-3 py-2 text-sm ${packageType === "elite" ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-700"}`}
                >
                  Elite
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Payment method</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {[
                  { id: "gpay", label: "GPay / UPI" },
                  { id: "card", label: "Card (Credit/Debit)" },
                  { id: "upi", label: "UPI (Other)" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((p) => (
                  <label
                    key={p.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-3 py-2 text-sm ${paymentMethod === p.id ? "border-sky-400 bg-sky-50" : "border-slate-200 bg-white"}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={p.id}
                      checked={paymentMethod === p.id}
                      onChange={() => setPaymentMethod(p.id)}
                      className="h-4 w-4"
                    />
                    <span>{p.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
              <div className="flex items-center justify-between">
                <div>Subtotal</div>
                <div>₹{subtotal.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between mt-1">
                <div>Tax (18%)</div>
                <div>₹{tax.toLocaleString()}</div>
              </div>
              <div className="mt-3 flex items-center justify-between text-lg font-semibold">
                <div>Total</div>
                <div>₹{total.toLocaleString()}</div>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <button
                type="submit"
                disabled={loadingPayment}
                className="flex-1 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-2 text-white font-semibold shadow"
              >
                {loadingPayment ? "Processing…" : `Pay ₹${total.toLocaleString()} now`}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* right column: summary + CTA */}
        <aside className="sticky top-28">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 p-6 text-white shadow-lg transform transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold">Quick summary</h3>
            <p className="mt-2 text-sm text-slate-200">{vendor.name} — {vendor.city}</p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <div>Package</div>
                <div className="font-medium">{packageType}</div>
              </div>
              <div className="flex justify-between">
                <div>Guests</div>
                <div className="font-medium">{guests}</div>
              </div>
              <div className="flex justify-between">
                <div>Payment</div>
                <div className="font-medium">{paymentMethod.toUpperCase()}</div>
              </div>
            </div>

            <div className="mt-5">
              <div className="rounded-lg bg-white/10 px-3 py-2 text-sm">Total: <strong className="ml-2">₹{total.toLocaleString()}</strong></div>
            </div>
          </div>
        </aside>
      </div>

      {/* success modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowSuccess(false)}
          />

          <div className="relative z-10 w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-center shadow-2xl transition-transform duration-500 animate-fade-in-up">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-white text-2xl shadow-lg">
              ✓
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Payment successful</h3>
            <p className="mt-2 text-sm text-slate-600">
              Your booking with <strong>{vendor.name}</strong> is confirmed for <strong>{date || "selected date"}</strong>.
            </p>

            <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Booking amount</span>
                <strong>₹{total.toLocaleString()}</strong>
              </div>
              <div className="mt-1 text-xs text-slate-500">Payment method: {paymentMethod.toUpperCase()}</div>
            </div>

            <div className="mt-5 flex gap-3">
              <Link
                to="/vendor-dashboard"
                className="flex-1 rounded-full bg-sky-600 px-4 py-2 text-white"
                onClick={() => setShowSuccess(false)}
              >
                Go to dashboard
              </Link>
              <button
                className="flex-1 rounded-full border border-slate-200 px-4 py-2"
                onClick={() => {
                  setShowSuccess(false);
                  navigate("/vendors");
                }}
              >
                Browse vendors
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 420ms ease both;
        }
        @keyframes fadeInUp {
          from { transform: translateY(12px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
