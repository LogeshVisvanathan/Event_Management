// src/Pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function PaymentSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};
  const booking = state.booking || null;
  const payment = state.payment || null;

  useEffect(() => {
    // if user reached here without data, redirect to vendors
    if (!booking || !payment) {
      const t = setTimeout(() => navigate("/vendors"), 1400);
      return () => clearTimeout(t);
    }
  }, [booking, payment, navigate]);

  if (!booking || !payment) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="rounded-xl bg-white/90 p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Payment complete</h3>
          <p className="mt-2 text-sm text-slate-600">Redirecting...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-sky-50 to-white/80 p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.06)]">
        <div className="mx-auto mb-6 inline-flex h-28 w-28 items-center justify-center rounded-full bg-white/90 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
          <svg className="h-16 w-16 stroke-emerald-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-slate-900">Payment successful</h2>
        <p className="mt-2 text-sm text-slate-600">
          Your booking is confirmed. We've sent a confirmation to your inbox.
        </p>

        <div className="mt-6 mx-auto max-w-2xl text-sm">
          <div className="mb-3 rounded-lg bg-white/90 p-4 text-left shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Booking</div>
                <div className="font-medium text-slate-800">{booking.id}</div>
                <div className="text-xs text-slate-500">{booking.packageLabel} • {booking.guests} guests</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Amount</div>
                <div className="font-medium text-slate-900">₹{payment.amount.toLocaleString()}</div>
                <div className="text-xs text-slate-400">{payment.method.toUpperCase()}</div>
              </div>
            </div>
            <div className="mt-3 text-xs text-slate-400">Transaction ID: <span className="text-xs text-slate-600">{payment.txId}</span></div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to={`/vendors/${booking.vendorId}`}
              className="rounded-2xl bg-white px-4 py-2 text-sm font-medium shadow-sm"
            >
              View vendor profile
            </Link>

            <button
              onClick={() => navigate("/vendor-dashboard")}
              className="rounded-2xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white"
            >
              Go to my dashboard
            </button>
          </div>
        </div>
      </div>

      {/* subtle confetti-like decorative elements (pure CSS) */}
      <ConfettiDecor />
    </section>
  );
}

function ConfettiDecor() {
  // purely decorative floating orbs
  return (
    <div aria-hidden className="pointer-events-none">
      <div className="absolute left-6 top-44 h-3 w-3 rounded-full bg-amber-300/70 blur-sm animate-pulse" />
      <div className="absolute right-12 top-56 h-2 w-2 rounded-full bg-sky-300/70 blur-sm animate-pulse" />
      <div className="absolute left-24 top-72 h-2 w-2 rounded-full bg-emerald-300/70 blur-sm animate-pulse" />
    </div>
  );
}
