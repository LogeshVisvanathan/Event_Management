// src/Pages/Checkout.jsx
import { useState } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";

export default function Checkout() {
  const { bookingId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking ?? null;

  // fallback if no booking passed — show helpful message
  if (!booking) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-12 text-center">
        <div className="rounded-2xl bg-white/90 p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            No booking found
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We couldn't find your booking details. Please go back to the vendor
            page and create a booking first.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/vendors"
              className="rounded-2xl bg-sky-500 px-4 py-2 text-white"
            >
              Browse vendors
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const [paymentMethod, setPaymentMethod] = useState("gpay"); // gpay | card | cod
  const [cardNumber, setCardNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const amount = booking.guests * booking.perGuest; // INR

  const handlePayNow = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // simulate card validation
    if (paymentMethod === "card" && cardNumber.replace(/\s/g, "").length < 12) {
      alert("Please enter a valid card number (Demo validation).");
      setProcessing(false);
      return;
    }

    // simulate payment delay
    setTimeout(() => {
      const txId = `TXN-${Math.random().toString(36).slice(2, 10).toUpperCase()}`;
      // navigate to success route, pass booking + payment info
      navigate("/payment/success", {
        state: {
          booking,
          payment: {
            method: paymentMethod,
            amount,
            txId,
            paidAt: new Date().toISOString(),
            currency: "INR",
          },
        },
      });
    }, 1400);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <div className="grid gap-6 md:grid-cols-2">
        {/* booking summary */}
        <div className="rounded-2xl bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <h3 className="text-lg font-semibold text-slate-900">Checkout</h3>
          <p className="mt-1 text-sm text-slate-600">Confirm and pay</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-slate-100 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500">Booking ID</div>
                  <div className="font-medium">{booking.id}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">Date</div>
                  <div>{booking.date}</div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                <div>
                  <div className="text-xs text-slate-400">Package</div>
                  <div className="font-medium">{booking.packageLabel}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Guests</div>
                  <div className="font-medium">{booking.guests}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="text-sm text-slate-600">Amount</div>
                <div className="text-lg font-semibold">₹{amount.toLocaleString()}</div>
              </div>
            </div>

            <div className="text-sm text-slate-500">
              <div className="mb-1 font-medium text-slate-700">Notes</div>
              <div className="rounded-md bg-slate-50 p-3 text-xs">{booking.notes || "—"}</div>
            </div>
          </div>
        </div>

        {/* payment methods */}
        <div className="rounded-2xl bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          <h4 className="text-sm font-semibold text-slate-900">Payment</h4>
          <p className="mt-1 text-xs text-slate-500">Pay securely in INR</p>

          <form onSubmit={handlePayNow} className="mt-6 space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-600">Choose method</label>
              <div className="flex flex-col gap-2">
                <PaymentOption
                  id="gpay"
                  label="GPay / UPI"
                  subtitle="Fast & free"
                  active={paymentMethod === "gpay"}
                  onClick={() => setPaymentMethod("gpay")}
                />
                <PaymentOption
                  id="card"
                  label="Card"
                  subtitle="Visa / MasterCard"
                  active={paymentMethod === "card"}
                  onClick={() => setPaymentMethod("card")}
                />
                <PaymentOption
                  id="cod"
                  label="Cash / COD"
                  subtitle="Pay at event (availability varies)"
                  active={paymentMethod === "cod"}
                  onClick={() => setPaymentMethod("cod")}
                />
              </div>
            </div>

            {paymentMethod === "card" && (
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600">Card number</label>
                <input
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="4242 4242 4242 4242"
                  className="w-full rounded-2xl border border-slate-200 px-3 py-2 outline-none focus:border-indigo-400"
                  inputMode="numeric"
                />
              </div>
            )}

            <div className="mt-4 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={processing}
                className="rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-2 text-sm font-semibold text-white shadow-md disabled:opacity-60"
              >
                {processing ? "Processing..." : `Pay ₹${amount.toLocaleString()} • Pay now`}
              </button>
            </div>
          </form>

          <div className="mt-6 text-xs text-slate-400">
            By completing payment you agree to the vendor's terms. This demo
            uses simulated payments only.
          </div>
        </div>
      </div>
    </section>
  );
}

/* small subcomponents */

function PaymentOption({ id, label, subtitle, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-2 text-left transition-shadow ${
        active
          ? "bg-gradient-to-r from-sky-50 to-emerald-50 ring-1 ring-sky-200 shadow-sm"
          : "bg-white border border-slate-100"
      }`}
    >
      <div>
        <div className="text-sm font-medium text-slate-700">{label}</div>
        <div className="text-xs text-slate-400">{subtitle}</div>
      </div>
      <div>
        <div className={`h-5 w-5 rounded-full ${active ? "bg-sky-500" : "bg-slate-200"}`} />
      </div>
    </button>
  );
}
