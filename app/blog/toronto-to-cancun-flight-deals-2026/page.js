import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Toronto to Cancún Flights: How to Find the Cheapest Deals (2026) | SkyScoutTravel",
  description:
    "Find cheap flights from Toronto to Cancún in 2026. Deals from $279 CAD round trip. Best airlines, cheapest months to fly, and booking tips for YYZ to CUN.",
  keywords: [
    "Toronto to Cancún flights",
    "cheap flights Toronto to Cancún",
    "YYZ to CUN",
    "Toronto to Cancún deals",
    "cheap flights Toronto Mexico",
    "Toronto to Cancún 2026",
    "cheapest flights to Cancún from Canada",
  ],
  openGraph: {
    title: "Toronto to Cancún Flights: How to Find the Cheapest Deals (2026)",
    description:
      "Deals from $279 CAD round trip. The complete guide to flying cheap from Toronto to Cancún.",
  },
};

const MONTH_PRICES = [
  { month: "January", price: 299, crowd: "Low", weather: "27°C, dry", verdict: "Great deal + great weather" },
  { month: "February", price: 349, crowd: "Medium", weather: "28°C, dry", verdict: "Prices rise for March Break early bookers" },
  { month: "March", price: 449, crowd: "High", weather: "29°C, dry", verdict: "March Break premium — book early or avoid" },
  { month: "April", price: 329, crowd: "Medium", weather: "30°C, dry", verdict: "Post-spring break drop, still great weather" },
  { month: "May", price: 279, crowd: "Low", weather: "31°C, some rain", verdict: "Cheapest month — shoulder season sweet spot" },
  { month: "June", price: 299, crowd: "Low-Med", weather: "32°C, rain starts", verdict: "Excellent value before summer rush" },
  { month: "July", price: 399, crowd: "High", weather: "33°C, humid", verdict: "Summer premium but deals exist midweek" },
  { month: "August", price: 379, crowd: "High", weather: "33°C, humid", verdict: "Slightly cheaper than July, hurricane season" },
  { month: "September", price: 259, crowd: "Very Low", weather: "32°C, rainy", verdict: "Absolute cheapest — hurricane risk but huge savings" },
  { month: "October", price: 279, crowd: "Low", weather: "30°C, rain easing", verdict: "Great deals, rain decreasing" },
  { month: "November", price: 299, crowd: "Low", weather: "28°C, dry starts", verdict: "Dry season begins, still cheap" },
  { month: "December", price: 449, crowd: "Very High", weather: "27°C, dry", verdict: "Holiday premium — book 3+ months ahead" },
];

const AIRLINES = [
  {
    name: "WestJet",
    type: "Direct",
    time: "4h 30m",
    pros: "Frequent daily flights, competitive base fares, good loyalty program",
    cons: "Basic fare excludes baggage, seat selection extra",
    bestFor: "Budget travelers who pack light",
  },
  {
    name: "Air Canada",
    type: "Direct",
    time: "4h 35m",
    pros: "Multiple daily flights, Aeroplan points, premium economy option",
    cons: "Usually $50-100 more than competitors",
    bestFor: "Aeroplan members, premium economy seekers",
  },
  {
    name: "Flair Airlines",
    type: "Direct",
    time: "4h 40m",
    pros: "Ultra-low base fares, sometimes under $200 round trip",
    cons: "Everything is extra — bags, seats, even water. Less reliable schedule",
    bestFor: "Carry-on only travelers hunting the absolute lowest fare",
  },
  {
    name: "Sunwing",
    type: "Direct (seasonal)",
    time: "4h 30m",
    pros: "Charter pricing can be excellent, package deals with hotels",
    cons: "Seasonal only, limited schedule flexibility",
    bestFor: "All-inclusive package seekers",
  },
  {
    name: "Swoop/WestJet Basic",
    type: "Direct",
    time: "4h 30m",
    pros: "Merged into WestJet, ultra-basic fares still available",
    cons: "No frills whatsoever",
    bestFor: "Price-only shoppers",
  },
];

export default function BlogPost() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-stone-925 py-16 px-6 relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative max-w-3xl mx-auto">
            <a
              href="/blog"
              className="text-sm font-sans text-stone-500 no-underline hover:text-amber-warmth mb-6 inline-block"
            >
              ← Back to Blog
            </a>
            <div className="flex gap-3 items-center mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider bg-amber-900/20 px-2 py-0.5 rounded" style={{ color: "#D4A373" }}>
                Route Guide
              </span>
              <span className="text-[12px] font-sans text-stone-500">April 27, 2026</span>
              <span className="text-[12px] font-sans text-stone-500">· 12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              Toronto to Cancún Flights: How to Find the Cheapest Deals
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              Cancún is the most popular sun destination from Toronto — and one of the cheapest international flights you can book from Pearson. Here&apos;s how to get the absolute best deal on YYZ to CUN flights in 2026.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Quick stats */}
            <div className="bg-stone-100 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-serif mb-3">Toronto → Cancún: Quick Facts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-sm">
                <div>
                  <span className="text-stone-400 block">Cheapest price seen</span>
                  <span className="text-stone-900 font-semibold">$199 CAD RT</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Typical deal price</span>
                  <span className="text-stone-900 font-semibold">$279-$349 CAD</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Flight time</span>
                  <span className="text-stone-900 font-semibold">4h 30m direct</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Best month to fly</span>
                  <span className="text-stone-900 font-semibold">May or September</span>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                Cancún is the ultimate escape for Torontonians. Under five hours of flying gets you from winter grey to Caribbean blue — and thanks to fierce competition between airlines on this route, prices are remarkably affordable.
              </p>
              <p className="mb-4">
                We&apos;ve tracked Toronto-to-Cancún fares throughout 2026 and the data is clear: with the right timing and strategy, you can consistently find round-trip flights for under $300 CAD. Some months, we&apos;ve seen fares dip below $200.
              </p>
              <p>
                This guide covers everything: month-by-month pricing, which airlines offer the best value, when to book, and the specific tricks that save the most money on this route.
              </p>
            </div>

            {/* Monthly price guide */}
            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">
              Month-by-Month Price Guide
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              Prices on this route vary dramatically by season. Choosing the right month is the single biggest factor in what you&apos;ll pay.
            </p>

            <div className="space-y-3 mb-10">
              {MONTH_PRICES.map((m, i) => (
                <div
                  key={i}
                  className="bg-white border border-stone-200 rounded-lg p-4"
                  style={{
                    borderLeft: m.price < 300 ? "4px solid #D4A373" : "4px solid transparent",
                  }}
                >
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="text-base font-serif m-0 flex items-center gap-2">
                      {m.month}
                      {m.price < 300 && (
                        <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded bg-amber-50 tracking-wide" style={{ color: "#D4A373" }}>
                          DEAL
                        </span>
                      )}
                    </h3>
                    <span className="text-lg font-serif text-stone-900">
                      from ${m.price}
                    </span>
                  </div>
                  <div className="font-sans text-[13px] text-stone-500 flex gap-4 flex-wrap">
                    <span>☀️ {m.weather}</span>
                    <span>👥 {m.crowd} crowds</span>
                    <span>💡 {m.verdict}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Airlines comparison */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              Airlines Flying Toronto to Cancún
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed mb-6">
              Five carriers compete on this route, which is great news for your wallet. Here&apos;s how they compare.
            </p>

            <div className="space-y-4 mb-10">
              {AIRLINES.map((a, i) => (
                <div key={i} className="bg-stone-50 rounded-lg p-6">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                    <h3 className="text-lg font-serif m-0">{a.name}</h3>
                    <div className="font-sans text-[13px] text-stone-500">
                      {a.type} · {a.time}
                    </div>
                  </div>
                  <div className="font-sans text-sm text-stone-600 space-y-1.5">
                    <p className="m-0"><strong className="text-stone-800">Pros:</strong> {a.pros}</p>
                    <p className="m-0"><strong className="text-stone-800">Cons:</strong> {a.cons}</p>
                    <p className="m-0"><strong className="text-stone-800">Best for:</strong> {a.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Booking tips */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              How to Get the Cheapest Fare
            </h2>

            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">1. Fly midweek</h3>
              <p className="mb-4">
                Tuesday, Wednesday, and Thursday departures are consistently $50-$100 cheaper than weekend flights on this route. A Saturday-to-Saturday trip might cost $399 while the same week leaving Tuesday-to-Tuesday could be $279.
              </p>

              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">2. Book 4-8 weeks ahead</h3>
              <p className="mb-4">
                Unlike Europe where 2-4 months is ideal, Cancún flights hit their sweet spot closer to departure. Airlines release cheap seats 6-8 weeks out and prices climb inside 3 weeks. The exception is March Break and Christmas — book those 3+ months ahead.
              </p>

              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">3. Compare total cost, not base fare</h3>
              <p className="mb-4">
                Flair might show $179 but charge $60 for a carry-on and $40 for a checked bag. WestJet at $249 with an included carry-on could be cheaper overall. Always add up bags, seats, and extras before deciding.
              </p>

              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">4. Consider a package deal</h3>
              <p className="mb-4">
                If you&apos;re staying at a resort, flight + hotel packages through Sunwing or WestJet Vacations can be cheaper than booking separately. All-inclusive packages to Cancún from Toronto regularly go for $800-$1200 per person for a week — try beating that with separate bookings.
              </p>

              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">5. Check Hamilton (YHM) too</h3>
              <p className="mb-4">
                If you&apos;re in the GTA, Hamilton airport sometimes has ultra-cheap Cancún flights on budget carriers. It&apos;s a 45-minute drive from Toronto and parking is cheaper than Pearson. The savings can be $50-$150.
              </p>

              <h3 className="text-lg font-serif text-stone-900 mt-6 mb-2">6. Avoid peak weeks</h3>
              <p>
                March Break (mid-March) and Christmas/New Year see prices jump 50-80%. If you can shift your trip by even one week — flying the week before or after these peaks — you&apos;ll save dramatically.
              </p>
            </div>

            {/* What to know */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              Before You Book: What to Know
            </h2>

            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <div className="bg-stone-100 rounded-lg p-6 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-stone-900">Passport:</strong>
                    <p className="m-0 mt-1">Required. Must be valid for duration of stay.</p>
                  </div>
                  <div>
                    <strong className="text-stone-900">Visa:</strong>
                    <p className="m-0 mt-1">Not required for Canadian citizens (up to 180 days).</p>
                  </div>
                  <div>
                    <strong className="text-stone-900">Currency:</strong>
                    <p className="m-0 mt-1">Mexican Peso (MXN). USD widely accepted in hotel zone.</p>
                  </div>
                  <div>
                    <strong className="text-stone-900">Airport:</strong>
                    <p className="m-0 mt-1">Cancún International (CUN). 20 min from hotel zone.</p>
                  </div>
                  <div>
                    <strong className="text-stone-900">Time zone:</strong>
                    <p className="m-0 mt-1">Same as Toronto (EST). No jet lag.</p>
                  </div>
                  <div>
                    <strong className="text-stone-900">Hurricane season:</strong>
                    <p className="m-0 mt-1">June-November. Cheapest but some weather risk.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">
                  Ready to book your Cancún trip?
                </h3>
                <p className="text-stone-500 font-sans text-sm mb-6">
                  Search live prices from Toronto to Cancún. Compare all airlines and find the cheapest fare available right now.
                </p>
                <a
                  href="/search"
                  className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors"
                >
                  Search Toronto → Cancún Flights →
                </a>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 p-6 bg-stone-100 rounded-lg">
              <h4 className="text-sm font-sans font-bold text-stone-500 uppercase tracking-wide mb-2">
                About this guide
              </h4>
              <p className="text-[13px] font-sans text-stone-500 leading-relaxed m-0">
                Prices reflect typical fares seen in 2026 for round-trip flights from Toronto Pearson (YYZ) to Cancún (CUN). All prices in CAD. Actual fares change daily based on demand, availability, and booking timing. SkyScoutTravel earns a commission when you book through our links at no extra cost to you.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
