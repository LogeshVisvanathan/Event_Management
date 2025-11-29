// src/Pages/VendorSignup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Demo implementation:
 * - saves vendor objects to localStorage under key "eventify_vendors"
 * - certificate is stored as a base64 data URL (demo only) + filename
 * Replace with real upload endpoint (FormData -> server -> cloud storage) in production.
 */

export default function VendorSignup() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    businessName: "",
    category: "",
    email: "",
    city: "",
    password: "",
  });

  const [certFile, setCertFile] = useState(null); // { name, size, dataUrl }
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const maxBytes = 5 * 1024 * 1024; // 5MB

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleFile(e) {
    setError("");
    const f = e.target.files?.[0];
    if (!f) return setCertFile(null);

    if (f.type !== "application/pdf") {
      setError("Please upload a PDF certificate.");
      return;
    }
    if (f.size > maxBytes) {
      setError("PDF is too large (max 5 MB).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setCertFile({
        name: f.name,
        size: f.size,
        dataUrl: reader.result, // base64 data url
      });
    };
    reader.readAsDataURL(f);
  }

  function getVendors() {
    try {
      return JSON.parse(localStorage.getItem("eventify_vendors") || "[]");
    } catch {
      return [];
    }
  }

  function saveVendor(vendor) {
    const arr = getVendors();
    arr.push(vendor);
    localStorage.setItem("eventify_vendors", JSON.stringify(arr));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const { businessName, category, email, city, password } = form;

    if (!businessName || !category || !email || !password) {
      setError("Please fill the required fields.");
      return;
    }

    // check duplicate email
    const existing = getVendors().find((v) => v.email === email.toLowerCase());
    if (existing) {
      setError("An account with this email already exists. Please login instead.");
      return;
    }

    setBusy(true);
    // In real app: upload certificate to server/cloud and return URL + store on vendor record
    // Here: store the base64 string (demo only)
    const vendor = {
      id: `vendor_${Date.now()}`,
      businessName,
      category,
      email: email.toLowerCase(),
      city,
      password, // NOTE: do NOT store plaintext in production. Use server + hashed password.
      createdAt: new Date().toISOString(),
      certificate: certFile
        ? { filename: certFile.name, dataUrl: certFile.dataUrl, status: "pending" }
        : null,
      certificateStatus: certFile ? "pending" : "none",
      verified: false,
    };

    // simulate async save
    setTimeout(() => {
      saveVendor(vendor);
      setBusy(false);
      // navigate to login with message
      nav("/vendor-login", { state: { justSignedUp: true } });
    }, 700);
  }

  return (
    <section className="mx-auto my-8 max-w-3xl rounded-2xl bg-white/80 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
      <h2 className="mb-2 text-2xl font-semibold text-slate-900">Join as Vendor</h2>
      <p className="mb-6 text-sm text-slate-600">
        Create your vendor profile, upload certification (PDF) and start receiving event bookings.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Business name"
            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none"
            required
          />
          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category (Decorator, DJ...)"
            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Contact email"
            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none"
            required
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 outline-none"
            required
          />
          <div className="flex items-center gap-3">
            <label className="w-full rounded-xl border border-dashed border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-600">
              <div className="text-xs text-slate-500">Upload certification (PDF, optional)</div>
              <input
                onChange={handleFile}
                accept="application/pdf"
                type="file"
                className="mt-2 w-full cursor-pointer bg-transparent text-sm"
              />
            </label>
          </div>
        </div>

        {certFile && (
          <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{certFile.name}</div>
                <div className="text-xs text-slate-500">{(certFile.size/1024/1024).toFixed(2)} MB</div>
              </div>
              <div className="flex gap-2">
                <a
                  href={certFile.dataUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/90 px-3 py-1 text-xs text-sky-600 shadow-sm"
                >
                  Preview
                </a>
                <button
                  type="button"
                  onClick={() => setCertFile(null)}
                  className="rounded-full bg-red-50 px-3 py-1 text-xs text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-slate-500">
              Upload status: <span className="font-medium">Pending (will be reviewed by admin)</span>
            </div>
          </div>
        )}

        {error && <div className="text-sm text-red-600">{error}</div>}

        <div>
          <button
            disabled={busy}
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-md"
          >
            {busy ? "Creating account..." : "Create Vendor Account"}
          </button>
        </div>
      </form>
    </section>
  );
}
