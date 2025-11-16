// src/Pages/Chat.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VENDORS = [
  {
    id: "dream-weavers",
    name: "Dream Weavers Event Planners",
    role: "Event Planner",
    rating: 5.0,
    city: "Chennai",
  },
  {
    id: "elegant-moments",
    name: "Elegant Moments Photography",
    role: "Photographer",
    rating: 4.9,
    city: "Bengaluru",
  },
  {
    id: "floral-fantasy",
    name: "Floral Fantasy Decor",
    role: "Decorator",
    rating: 4.9,
    city: "Coimbatore",
  },
  {
    id: "gourmet-bites",
    name: "Gourmet Bites Catering",
    role: "Caterer",
    rating: 4.8,
    city: "Chennai",
  },
  {
    id: "sonic-waves",
    name: "Sonic Waves DJ Services",
    role: "DJ",
    rating: 4.7,
    city: "Hyderabad",
  },
  {
    id: "harmony-strings",
    name: "Harmony Strings Quartet",
    role: "Live Music",
    rating: 4.8,
    city: "Chennai",
  },
];

export default function Chat() {
  const { vendorId } = useParams();
  const navigate = useNavigate();

  const [activeId, setActiveId] = useState(
    vendorId && VENDORS.find((v) => v.id === vendorId)?.id
      ? vendorId
      : VENDORS[0].id
  );
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const activeVendor = useMemo(
    () => VENDORS.find((v) => v.id === activeId) ?? VENDORS[0],
    [activeId]
  );

  // keep URL in sync when param changes
  useEffect(() => {
    if (vendorId && vendorId !== activeId) {
      const exists = VENDORS.find((v) => v.id === vendorId);
      if (exists) setActiveId(vendorId);
    }
  }, [vendorId, activeId]);

  const handleSelectVendor = (id) => {
    setActiveId(id);
    navigate(`/chat/${id}`);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: "me", text: message.trim() },
    ]);
    setMessage("");
  };

  return (
    <section className="relative mx-auto flex h-[calc(100vh-120px)] max-w-6xl overflow-hidden rounded-3xl bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
      {/* soft background glows */}
      <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 -z-10 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-60 w-60 -z-10 rounded-full bg-emerald-400/15 blur-3xl" />

      {/* LEFT SIDEBAR */}
      <aside className="flex w-72 flex-col border-r border-slate-100 bg-slate-50/80">
        <div className="border-b border-slate-100 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Messages
          </p>
        </div>

        <div className="px-3 pb-3 pt-3">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs text-slate-500 shadow-sm">
            <span>🔍</span>
            <input
              placeholder="Search vendors..."
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-4">
          {VENDORS.map((v) => {
            const active = v.id === activeId;
            return (
              <button
                key={v.id}
                onClick={() => handleSelectVendor(v.id)}
                className={`mb-2 flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-xs transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-sky-50 via-cyan-50 to-emerald-50 shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
                    : "hover:bg-slate-100/80"
                }`}
              >
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400 text-[11px] text-white">
                  <div className="absolute inset-[2px] rounded-full bg-slate-900/90" />
                  <span className="relative flex h-full items-center justify-center font-semibold">
                    {v.role[0]}
                  </span>
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-slate-900/80 bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.45)]" />
                </div>

                <div className="flex flex-1 flex-col">
                  <span className="text-[11px] font-semibold text-slate-900 line-clamp-1">
                    {v.name}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {v.role} • {v.city}
                  </span>
                </div>

                <span className="rounded-full bg-slate-900 px-1.5 py-0.5 text-[9px] font-semibold text-amber-300">
                  ★ {v.rating}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <div className="flex flex-1 flex-col">
        {/* header */}
        <header className="flex items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-tr from-sky-400 via-cyan-400 to-emerald-400">
              <div className="absolute inset-[2px] rounded-full bg-slate-900/90" />
              <span className="relative flex h-full items-center justify-center text-xs font-semibold text-white">
                {activeVendor.role[0]}
              </span>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border border-slate-900/80 bg-emerald-400 shadow-[0_0_0_4px_rgba(16,185,129,0.5)]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {activeVendor.name}
              </p>
              <p className="text-[11px] text-slate-500">
                {activeVendor.role} • <span className="text-emerald-500">Online</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-500">
            <button className="rounded-full border border-slate-200 bg-white p-2 text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600">
              📞
            </button>
            <button className="rounded-full border border-slate-200 bg-white p-2 text-xs shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600">
              📹
            </button>
          </div>
        </header>

        {/* messages area */}
        <div className="relative flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 via-sky-50/50 to-emerald-50/30 px-6 py-6">
          {/* subtle scrolling grid bg */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.18)_1px,transparent_0)] bg-[length:24px_24px] opacity-40" />

          {messages.length === 0 ? (
            <div className="relative flex h-full flex-col items-center justify-center text-center text-sm text-slate-500">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.25)] transition-transform duration-500 animate-bounce">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-base font-semibold text-slate-800">
                Start a conversation
              </p>
              <p className="mt-1 max-w-sm text-xs text-slate-500">
                Send a message to <span className="font-medium">{activeVendor.name}</span>{" "}
                to check availability, pricing and layout options in real time.
              </p>
            </div>
          ) : (
            <div className="relative flex flex-col gap-3">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className="flex justify-end animate-[fadeIn_0.25s_ease-out]"
                >
                  <div className="max-w-xs rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-3 py-2 text-xs text-white shadow-lg">
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* input bar */}
        <div className="border-t border-slate-100 bg-white/90 px-4 py-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-2 shadow-sm">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={`Type a message to ${activeVendor.name}...`}
              className="flex-1 bg-transparent text-xs text-slate-700 outline-none"
            />
            <button className="rounded-full px-2 text-lg hover:scale-110 transition">
              😊
            </button>
            <button
              onClick={handleSend}
              className="rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send ➤
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
