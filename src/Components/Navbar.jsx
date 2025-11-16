// src/Components/Navbar.jsx
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "Vendors", path: "/vendors" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // which auth routes are active
  const isVendorLogin = location.pathname === "/vendor-login";
  const isVendorSignup = location.pathname === "/vendor-signup";
  const isAdminLogin = location.pathname === "/admin-login";
  const isAdminSignup = location.pathname === "/admin-signup";

  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-white/40 bg-white/70 shadow-[0_12px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-2">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-gradient-to-tr from-sky-400 via-cyan-300 to-emerald-300 shadow-md">
              <div className="absolute inset-[6px] rounded-2xl bg-white/80" />
              <span className="relative flex h-full items-center justify-center text-xs font-semibold tracking-[0.18em] text-slate-800">
                EV
              </span>
            </div>

            <div className="leading-tight">
              <span className="block text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
                Premium Event Management
              </span>
              <NavLink
                to="/"
                className="text-2xl font-semibold tracking-[0.35em] text-slate-900"
              >
                EVENTIFY
              </NavLink>
            </div>
          </div>

          {/* Center: main links (desktop) */}
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`group relative px-1 py-1 transition ${
                    active ? "text-slate-900" : "hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`
                      absolute inset-x-0 -bottom-1 h-[2px] origin-center rounded-full
                      bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400
                      transition-transform duration-300
                      ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </NavLink>
              );
            })}
          </div>

          {/* Right: Vendor & Admin switches (desktop) */}
          <div className="hidden items-center gap-4 text-[11px] lg:flex">
            {/* VENDOR SWITCH – soft neon chip */}
            <div className="relative flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-200/70 via-cyan-200/60 to-sky-200/60 p-[1px] shadow-[0_12px_30px_rgba(34,197,235,0.45)]">
              {/* outer glass shell */}
              <div className="relative flex items-center rounded-full bg-white/90 px-2 py-1">
                {/* glowing ring behind label */}
                <span className="mr-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[9px] font-semibold tracking-[0.18em] text-emerald-700 shadow-[0_0_0_5px_rgba(45,212,191,0.35)]">
                  V
                </span>

                <span className="mr-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-500/70">
                  Vendor
                </span>

                {/* switch track */}
                <div className="relative ml-1 flex h-7 w-[118px] items-center overflow-hidden rounded-full bg-slate-100/80">
                  {/* sliding pill */}
                  <span
                    className={`
                      absolute inset-y-[3px] w-[56px] rounded-full bg-gradient-to-r
                      from-sky-500 via-cyan-400 to-emerald-400
                      shadow-[0_8px_20px_rgba(56,189,248,0.6)]
                      transition-transform duration-300 ease-out
                      ${isVendorSignup ? "translate-x-[58px]" : "translate-x-0"}
                    `}
                  />
                  {/* labels */}
                  <NavLink
                    to="/vendor-login"
                    className={`relative z-10 flex-1 text-center text-[11px] font-medium transition-transform duration-200 ${
                      isVendorSignup
                        ? "text-slate-500"
                        : "text-white drop-shadow-sm scale-[1.02]"
                    }`}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/vendor-signup"
                    className={`relative z-10 flex-1 text-center text-[11px] font-medium transition-transform duration-200 ${
                      isVendorSignup
                        ? "text-sky-700 scale-[1.02]"
                        : "text-slate-500"
                    }`}
                  >
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </div>

            {/* ADMIN SWITCH – stronger cyber bar */}
            <div className="relative flex items-center rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-emerald-400 p-[2px] shadow-[0_16px_40px_rgba(56,189,248,0.75)]">
              {/* glow aura */}
              <div className="pointer-events-none absolute inset-0 rounded-full bg-sky-400/40 blur-xl opacity-70" />

              <div className="relative flex items-center rounded-full bg-slate-950/10 px-2 py-1 backdrop-blur-md">
                <span className="mr-2 rounded-full bg-white/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  Admin
                </span>

                <div className="relative flex h-7 w-[130px] items-center overflow-hidden rounded-full bg-white/15">
                  {/* sliding pill */}
                  <span
                    className={`
                      absolute inset-y-[3px] w-[64px] rounded-full bg-white
                      shadow-[0_10px_26px_rgba(15,23,42,0.35)]
                      transition-transform duration-300 ease-out
                      ${isAdminSignup ? "translate-x-[64px]" : "translate-x-0"}
                    `}
                  />

                  <NavLink
                    to="/admin-login"
                    className={`relative z-10 flex-1 text-center text-[11px] font-medium transition-transform duration-200 ${
                      isAdminSignup
                        ? "text-white/80"
                        : "text-sky-700 scale-[1.02]"
                    }`}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/admin-signup"
                    className={`relative z-10 flex-1 text-center text-[11px] font-medium transition-transform duration-200 ${
                      isAdminSignup
                        ? "text-sky-700 scale-[1.02]"
                        : "text-white/80"
                    }`}
                  >
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:border-sky-300 hover:shadow-md lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="relative h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-slate-800 transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-slate-800 transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-slate-800 transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile dropdown (simple list) */}
      {open && (
        <div className="border-b border-white/60 bg-white/95 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center justify-between rounded-xl px-3 py-2
                    transition
                    ${
                      active
                        ? "bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 text-slate-900"
                        : "text-slate-700 hover:bg-slate-50"
                    }
                  `}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 shadow-[0_0_0_4px_rgba(125,211,252,0.3)]" />
                  )}
                </NavLink>
              );
            })}

            {/* Mobile auth buttons */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              <NavLink
                to="/vendor-login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-sky-100 bg-sky-50/80 px-3 py-2 text-center font-medium text-sky-700 transition hover:bg-white"
              >
                Vendor Login
              </NavLink>
              <NavLink
                to="/vendor-signup"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-sky-100 bg-sky-50/80 px-3 py-2 text-center font-medium text-sky-700 transition hover:bg-white"
              >
                Vendor Sign Up
              </NavLink>
              <NavLink
                to="/admin-login"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-2 text-center font-semibold text-white shadow-md"
              >
                Admin Login
              </NavLink>
              <NavLink
                to="/admin-signup"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-2 text-center font-semibold text-white shadow-md"
              >
                Admin Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
