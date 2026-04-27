"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhiteLabelSearch from "@/components/WhiteLabelSearch";
import Link from "next/link";

const STEPS = [
  { icon: "🔍", title: "Search", desc: "Type any city name, pick dates, add passengers and cabin class. Our engine compares 200+ airlines instantly." },
  { icon: "📊", title: "Compare", desc: "See all results sorted by price, duration, or stops. Filter by airline, time, and more — right on this site." },
  { icon: "🎫", title: "Book", desc: "Click to book with the airline or agency directly. We never charge service fees — what you see is what you pay." },
];

const WHY = [
  { icon: "🍁", title: "Canada-first", desc: "Built for Canadians. CAD pricing, Canadian airports, and routes that matter to you." },
  { icon: "🌍", title: "Full search engine", desc: "Type city names, not codes. Add multiple passengers. Choose economy, business, or first class." },
  { icon: "⚡", title: "Real-time prices", desc: "Live data from 200+ airlines and dozens of booking agencies. Not cached — real prices, right now." },
  { icon: "🔔", title: "Best price guaranteed", desc: "We compare every agency to show you the absolute lowest fare available for your route." },
  { icon: "🚫", title: "Zero fees", desc: "We never charge booking fees. You book directly with the airline or agency at the price shown." },
  { icon: "📱", title: "Mobile ready", desc: "Search on the go. Our site works beautifully on any device, any screen size." },
];

const DESTINATIONS = [
  { city: "Lisbon", code: "LIS", country: "Portugal", cc: "pt", tagline: "Sun-drenched streets & pastéis de nata", color: "#E8A87C" },
  { city: "Tokyo", code: "NRT", country: "Japan", cc: "jp", tagline: "Where tradition meets neon", color: "#C97B84" },
  { city: "Medellín", code: "MDE", country: "Colombia", cc: "co", tagline: "Eternal spring in the mountains", color: "#85B79D" },
  { city: "Reykjavik", code: "KEF", country: "Iceland", cc: "is", tagline: "Northern lights & volcanic wonders", color: "#7B8CDE" },
  { city: "Bangkok", code: "BKK", country: "Thailand", cc: "th", tagline: "Street food paradise under $20/day", color: "#D4A373" },
  { city: "Porto", code: "OPO", country: "Portugal", cc: "pt", tagline: "Port wine & azulejo tiles", color: "#6B9AC4" },
  { city: "Mexico City", code: "MEX", country: "Mexico", cc: "mx", tagline: "Tacos, museums & ancient ruins", color: "#C97B63" },
  { city: "Budapest", code: "BUD", country: "Hungary", cc: "hu", tagline: "Thermal baths & ruin bars", color: "#A8B88C" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ═══ HERO + SEARCH ═══ */}
      <section className="relative bg-stone-925 overflow-hidden">
        <div className="grain-overlay" />
        <div className="relative max-w-3xl mx-auto text-center px-6 pt-16 pb-4">
          <div className="inline-block px-4 py-1.5 bg-amber-900/15 rounded-full text-[13px] font-sans font-medium mb-6 border border-amber-900/20" style={{ color: "#D4A373" }}>
            ✈ Cheap flights from Canada
          </div>
          <h1 className="text-4xl md:text-6xl text-stone-50 leading-[1.05] mb-5 font-serif tracking-tight">
            Stop overpaying<br />for flights.
          </h1>
          <p className="text-lg text-stone-500 max-w-xl mx-auto mb-6 leading-relaxed font-sans">
            Compare prices from 200+ airlines and dozens of booking agencies.
            Find the cheapest flight from any Canadian airport to anywhere in the world.
          </p>
        </div>

        {/* Search widget in hero */}
        <div className="relative pb-8">
          <WhiteLabelSearch showResults={false} />
        </div>

        {/* Stats */}
        <div className="relative max-w-3xl mx-auto px-6 pb-14">
          <div className="flex justify-center gap-12 pt-8 border-t border-white/10">
            {[["200+", "Airlines"], ["50+", "Agencies"], ["$0", "Service fees"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="block text-3xl font-serif text-stone-50">{num}</span>
                <span className="text-[13px] font-sans text-stone-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-sans font-bold uppercase tracking-widest mb-3 block" style={{ color: "#D4A373" }}>How it works</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Three steps to your next adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white p-9 rounded-xl border border-stone-200 relative hover-lift">
                <span className="text-3xl">{s.icon}</span>
                <span className="absolute top-5 right-6 text-5xl font-serif text-stone-100">0{i + 1}</span>
                <h3 className="text-xl font-serif mt-4 mb-2">{s.title}</h3>
                <p className="text-sm font-sans text-stone-500 leading-relaxed m-0">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DESTINATIONS ═══ */}
      <section className="py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-sans font-bold uppercase tracking-widest mb-3 block" style={{ color: "#D4A373" }}>Inspiration</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Trending destinations from Canada</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {DESTINATIONS.map((d, i) => (
              <a
                key={i}
                href={`https://www.aviasales.com/search/YYZ1${d.code}1?marker=721635&locale=en&currency=CAD`}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-white p-6 rounded-lg hover-lift no-underline text-stone-900 block"
                style={{ borderTop: `3px solid ${d.color}` }}
              >
                <img
                  src={`https://flagcdn.com/36x27/${d.cc}.png`}
                  alt={d.country}
                  width={36}
                  height={27}
                  style={{ borderRadius: "3px" }}
                />
                <h3 className="text-lg font-serif mt-2.5 mb-0.5">{d.city}</h3>
                <span className="text-[13px] font-sans text-stone-400">{d.country}</span>
                <p className="text-[13px] font-sans text-stone-500 leading-relaxed mt-2.5 mb-2">{d.tagline}</p>
                <span className="text-[13px] font-sans font-semibold" style={{ color: d.color }}>Search deals →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEAL ALERTS ═══ */}
      <section className="py-20 px-6 bg-stone-925 text-center">
        <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          const email = e.target.email.value;
                          if (!email) return;
                          try {
                            await fetch("https://script.google.com/macros/s/AKfycby-r8OjhCCcwdysa7pawggY7u-KKhymKUOJI6Kn0-C4MQfpvms2Hc5MCbID-cKIij4mKw/exec", {
                              method: "POST",
                              mode: "no-cors",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ email }),
                            });
                            e.target.email.value = "";
                            alert("You're on the list! We'll email you when we find deals.");
                          } catch {
                            alert("Something went wrong. Please try again.");
                          }
                        }}
                        className="flex gap-2.5 max-w-md mx-auto flex-wrap justify-center"
                      >
                        <input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          required
                          className="flex-1 min-w-[220px] px-4 py-3.5 rounded-lg border border-stone-700 bg-stone-800 text-stone-50 text-[15px] font-sans outline-none"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3.5 bg-stone-50 text-stone-900 rounded-lg text-[15px] font-sans font-semibold border-none cursor-pointer hover:bg-white transition-colors flex-shrink-0"
                        >
                          Subscribe Free
                        </button>
        </form>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <span className="text-xs font-sans font-bold uppercase tracking-widest mb-3 block" style={{ color: "#D4A373" }}>Why SkyScout</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Built for Canadian travelers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <div key={i} className="p-7 rounded-lg border border-stone-200 bg-white hover-lift">
                <span className="text-3xl">{w.icon}</span>
                <h3 className="text-lg font-serif mt-3 mb-1.5">{w.title}</h3>
                <p className="text-sm font-sans text-stone-500 leading-relaxed m-0">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 px-6 bg-[#FAF7F2] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Ready to fly for less?</h2>
          <p className="text-stone-500 font-sans mb-8 leading-relaxed">
            Join thousands of Canadians who save hundreds on flights every year.
          </p>
          <a
            href="/search"
            className="inline-block px-8 py-4 bg-stone-900 text-stone-50 rounded-lg text-base font-sans font-semibold no-underline hover:bg-stone-800 transition-colors"
          >
            Start Searching — It&apos;s Free →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
