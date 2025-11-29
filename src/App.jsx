// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// main pages
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Vendors from "./Pages/Vendors";
import Contact from "./Pages/Contact";
import Chat from "./Pages/Chat";
import EventLayouts from "./Pages/EventLayouts";

// booking + payment flow (new)
import BookNow from "./Pages/BookNow";
import Checkout from "./Pages/Checkout";
import PaymentSuccess from "./Pages/PaymentSuccess";

// dashboards
import VendorDashboard from "./Pages/VendorDashboard";
import AdminDashboard from "./Pages/AdminDashboard";

// auth pages
import VendorLogin from "./Pages/VendorLogin";
import VendorSignup from "./Pages/VendorSignup";
import AdminLogin from "./Pages/AdminLogin";
import AdminSignup from "./Pages/AdminSignup";

// vendor profile detail page
import VendorProfile from "./Pages/VendorProfile";

export default function App() {
  return (
    <>
      {/* animated soft gradient blobs (global background) */}
      <div className="app-bg-orbit" />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-6 pb-16">
          <Routes>
            {/* ---------- main nav routes ---------- */}
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/contact" element={<Contact />} />

            {/* vendor profile detail page */}
            <Route path="/vendors/:vendorId" element={<VendorProfile />} />

            {/* booking & payment flow */}
            <Route path="/book/:vendorId" element={<BookNow />} />
            <Route path="/checkout/:bookingId" element={<Checkout />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />

            {/* layouts detail page */}
            <Route path="/events/:eventId/layouts" element={<EventLayouts />} />

            {/* ---------- dashboards ---------- */}
            <Route path="/vendor-dashboard" element={<VendorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* ---------- chat ---------- */}
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/:vendorId" element={<Chat />} />

            {/* ---------- generic auth (optional) ---------- */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />

            {/* ---------- vendor auth ---------- */}
            <Route path="/vendor-login" element={<VendorLogin />} />
            <Route path="/vendor-signup" element={<VendorSignup />} />

            {/* ---------- admin auth ---------- */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-signup" element={<AdminSignup />} />

            {/* ---------- 404 fallback ---------- */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

/* --------- simple placeholder pages for generic auth + 404 ---------- */

function LoginPage() {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-3xl bg-white/80 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <h1 className="mb-2 text-2xl font-semibold text-slate-900">
        Sign in to Eventify
      </h1>
      <p className="mb-6 text-sm text-slate-600">
        This can later be replaced by a combined Vendor / Admin login screen,
        or you can just keep using the dedicated vendor / admin pages.
      </p>
      <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-sm text-slate-500">
        Generic login form goes here.
      </div>
    </section>
  );
}

function GetStartedPage() {
  return (
    <section className="mx-auto mt-10 max-w-4xl rounded-3xl bg-white/80 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
      <h1 className="mb-2 text-2xl font-semibold text-slate-900">
        Get Started with Eventify
      </h1>
      <p className="mb-6 text-sm text-slate-600">
        You can later turn this into a vendor onboarding / signup wizard.
      </p>
      <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-sm text-slate-500">
        Get Started content goes here.
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="mx-auto mt-16 max-w-xl text-center">
      <h1 className="mb-3 text-3xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mb-6 text-sm text-slate-600">
        The page you’re looking for doesn’t exist. Use the navigation above to
        go back.
      </p>
    </section>
  );
}
