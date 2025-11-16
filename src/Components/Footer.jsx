export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-[#b19363] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg tracking-[0.2em] mb-3">EVENTIFY</h3>
          <p className="text-sm text-white/80">
            Your destination for premium event planning and verified vendors.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Home</li>
            <li>Events</li>
            <li>Vendors</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Services</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Wedding Planning</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Vendor Management</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-sm">Get in Touch</h4>
          <p className="text-sm text-white/80 mb-3">
            Ready to plan your perfect event?
          </p>
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm hover:bg-slate-100 transition">
            Contact Us
          </button>
        </div>
      </div>
      <div className="border-t border-white/20 py-3 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Eventify. All rights reserved.
      </div>
    </footer>
  );
}
