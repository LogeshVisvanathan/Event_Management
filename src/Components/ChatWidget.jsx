const sampleMessages = [
  { id: 1, from: "client", text: "Hi, is 12th Dec available for wedding?" },
  { id: 2, from: "vendor", text: "Yes, we are available. Venue confirmed?" },
  { id: 3, from: "client", text: "Yes, in Chennai. Need full decor + catering." },
];

export default function ChatWidget() {
  return (
    <div className="flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold">Chat with Client</p>
          <p className="text-[0.65rem] text-slate-500">
            Order #ORD-2024-018 • Wedding
          </p>
        </div>
        <span className="text-[0.65rem] rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5">
          Online
        </span>
      </div>
      <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto text-xs">
        {sampleMessages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.from === "vendor" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl ${
                m.from === "vendor"
                  ? "bg-black text-white rounded-br-sm"
                  : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <form className="px-3 py-2 border-t border-slate-200 flex items-center gap-2">
        <input
          placeholder="Type a message..."
          className="flex-1 text-xs bg-white rounded-full px-3 py-2 outline-none border border-slate-200"
        />
        <button className="text-xs px-3 py-1.5 rounded-full bg-black text-white">
          Send
        </button>
      </form>
    </div>
  );
}
