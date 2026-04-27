import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cheap Flights from Toronto to Europe 2026: Complete Guide | SkyScoutTravel",
  description:
    "Find cheap flights from Toronto to Europe in 2026. London from $499, Lisbon from $449, Paris from $519. Best airlines, booking tips, and cheapest months to fly from YYZ to Europe.",
  keywords: [
    "cheap flights Toronto to Europe",
    "cheap flights from Toronto to Europe 2026",
    "Toronto to London cheap flights",
    "Toronto to Paris cheap",
    "YYZ to Europe deals",
    "cheapest flights Canada to Europe",
    "budget flights Toronto Europe",
  ],
  openGraph: {
    title: "Cheap Flights from Toronto to Europe 2026: Complete Guide",
    description:
      "London from $499, Lisbon from $449, Paris from $519. The complete guide to flying cheap from Toronto to Europe.",
  },
};

const ROUTES = [
  {
    city: "Lisbon",
    country: "Portugal",
    code: "LIS",
    price: 449,
    airlines: "TAP Air Portugal (direct), Air Transat (seasonal direct), Air Canada (via connecting)",
    flightTime: "7h direct",
    bestMonths: "March, April, October, November",
    tip: "Lisbon is consistently the cheapest European destination from Toronto. TAP runs direct flights year-round and frequently drops prices to compete with connecting itineraries. Midweek departures in shoulder season can go as low as $380.",
  },
  {
    city: "Dublin",
    country: "Ireland",
    code: "DUB",
    price: 459,
    airlines: "Aer Lingus (direct), WestJet (seasonal direct), Air Canada (direct)",
    flightTime: "6.5h direct",
    bestMonths: "January, February, March, November",
    tip: "Dublin benefits from heavy competition between Aer Lingus and WestJet. Book 6-8 weeks before departure for the sweet spot. The shortest flight to Europe from Toronto at just 6.5 hours.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    code: "BCN",
    price: 479,
    airlines: "Air Transat (seasonal direct), Air Canada (via connecting), Level (seasonal)",
    flightTime: "8h direct",
    bestMonths: "April, May, September, October",
    tip: "Air Transat runs seasonal direct flights in summer that offer excellent value. For winter travel, connecting through Lisbon on TAP is often the cheapest option.",
  },
  {
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    price: 499,
    airlines: "Air Transat, WestJet, Air Canada, British Airways (all direct)",
    flightTime: "7h direct",
    bestMonths: "January, February, March, November",
    tip: "London has the most competition of any European route from Toronto — four carriers fly direct. Check Gatwick (LGW) and Stansted (STN) too, as WestJet and budget carriers often fly there cheaper than Heathrow.",
  },
  {
    city: "Paris",
    country: "France",
    code: "CDG",
    price: 519,
    airlines: "Air France (direct), Air Transat (seasonal direct), Air Canada (direct)",
    flightTime: "7.5h direct",
    bestMonths: "January, February, October, November",
    tip: "Air France and Air Canada compete fiercely on this route. Watch for Air Transat seasonal fares in summer which can undercut the legacy carriers by $100+. Orly airport can sometimes be cheaper than CDG.",
  },
  {
    city: "Rome",
    country: "Italy",
    code: "FCO",
    price: 549,
    airlines: "Air Transat (seasonal direct), Air Canada (connecting), ITA Airways (connecting)",
    flightTime: "9h direct",
    bestMonths: "March, April, October, November",
    tip: "Direct flights are seasonal (summer only via Air Transat). In winter, connecting through Lisbon, London, or Frankfurt is cheapest. Milan (MXP) can sometimes be $50-100 cheaper than Rome.",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    code: "AMS",
    price: 529,
    airlines: "KLM (direct), Air Canada (connecting), WestJet (connecting)",
    flightTime: "7.5h direct",
    bestMonths: "January, February, March, November",
    tip: "KLM runs daily direct flights and frequently has sales. Amsterdam also makes an excellent hub for connecting to the rest of Europe via train — Paris is just 3.5 hours by high-speed rail.",
  },
  {
    city: "Reykjavik",
    country: "Iceland",
    code: "KEF",
    price: 399,
    airlines: "Icelandair (direct)",
    flightTime: "5.5h direct",
    bestMonths: "February, March, October, November",
    tip: "The shortest and often cheapest flight to Europe. Icelandair also offers free stopovers — fly to Iceland, spend a few days, then continue to mainland Europe on the same ticket at no extra airfare.",
  },
  {
    city: "Frankfurt",
    country: "Germany",
    code: "FRA",
    price: 559,
    airlines: "Lufthansa (direct), Condor (seasonal direct), Air Canada (direct)",
    flightTime: "8h direct",
    bestMonths: "January, February, October, November",
    tip: "Frankfurt is a major Lufthansa hub, making it a great connecting point if your final destination is elsewhere in Germany, Austria, or Eastern Europe. Condor seasonal flights can be significantly cheaper.",
  },
  {
    city: "Athens",
    country: "Greece",
    code: "ATH",
    price: 599,
    airlines: "Air Transat (seasonal direct), Air Canada (connecting)",
    flightTime: "10h direct",
    bestMonths: "April, May, September, October",
    tip: "Direct flights are summer only. For shoulder season travel, connecting through Istanbul on Turkish Airlines or through London is often cheapest. Consider flying into Athens and out of another Greek island to save on internal flights.",
  },
];

const TIPS = [
  {
    title: "Fly midweek",
    desc: "Tuesday and Wednesday departures are consistently $50-$150 cheaper than Friday or Sunday flights. This single tip can save you more than any other strategy.",
  },
  {
    title: "Book in the sweet spot",
    desc: "For Europe, the ideal booking window is 2-4 months before departure. Too early and prices are high, too late and the cheap seats are gone.",
  },
  {
    title: "Be flexible with airports",
    desc: "Flying into a secondary airport can save hundreds. London Gatwick vs Heathrow, Milan vs Rome, Porto vs Lisbon — the less popular airport is almost always cheaper.",
  },
  {
    title: "Use shoulder season",
    desc: "April-May and September-October offer the best combination of low prices and good weather. You can save 30-40% compared to peak July-August fares.",
  },
  {
    title: "Consider open-jaw tickets",
    desc: "Fly into one city and out of another (e.g., into Barcelona, out of Paris). This saves you a return trip and sometimes costs the same as a round trip to one city.",
  },
  {
    title: "Watch for airline sales",
    desc: "Air Transat, WestJet, and Air Canada all run seasonal sales 2-3 times per year. Sign up for our deal alerts to catch them.",
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
                Guide
              </span>
              <span className="text-[12px] font-sans text-stone-500">
                April 27, 2026
              </span>
              <span className="text-[12px] font-sans text-stone-500">
                · 15 min read
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              Cheap Flights from Toronto to Europe: The Complete Guide (2026)
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              Everything you need to know about flying from Toronto Pearson (YYZ) to Europe without overpaying. The cheapest routes, best airlines, optimal booking windows, and money-saving strategies.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                Europe is the most popular international destination for Canadian travelers, and Toronto Pearson is the busiest gateway. But flight prices can vary wildly — the difference between a great deal and a terrible one can be $400+ for the exact same route.
              </p>
              <p className="mb-4">
                We track prices on every major Toronto-to-Europe route year-round. This guide shares everything we&apos;ve learned: which destinations are cheapest, which airlines offer the best value, when to book, and the specific strategies that save real money.
              </p>
              <p>
                All prices below are in <strong>CAD, round-trip</strong>, and reflect typical deal prices we&apos;ve seen in 2026. Actual prices change daily — use these as benchmarks and search for live prices.
              </p>
            </div>

            {/* Key stat box */}
            <div className="bg-stone-100 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-serif mb-3">At a Glance: Toronto → Europe</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-sm">
                <div>
                  <span className="text-stone-400 block">Cheapest route</span>
                  <span className="text-stone-900 font-semibold">Reykjavik $399</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Best for first-timers</span>
                  <span className="text-stone-900 font-semibold">London $499</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Best value</span>
                  <span className="text-stone-900 font-semibold">Lisbon $449</span>
                </div>
                <div>
                  <span className="text-stone-400 block">Best booking window</span>
                  <span className="text-stone-900 font-semibold">2-4 months ahead</span>
                </div>
              </div>
            </div>

            {/* Section: Routes */}
            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-6">
              The 10 Cheapest European Destinations from Toronto
            </h2>

            {ROUTES.map((r, i) => (
              <div
                key={i}
                className="border-b border-stone-200 py-8 last:border-b-0"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-serif text-stone-300 mt-1 w-8 flex-shrink-0">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h3 className="text-xl font-serif m-0">
                        {r.city}, {r.country}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-serif text-stone-900">
                          ${r.price}
                        </span>
                        <span className="text-[12px] font-sans text-stone-400 ml-1">
                          CAD RT
                        </span>
                      </div>
                    </div>

                    <div className="font-sans text-sm text-stone-500 mb-3 space-y-1">
                      <p className="m-0">
                        <strong className="text-stone-700">Airlines:</strong>{" "}
                        {r.airlines}
                      </p>
                      <p className="m-0">
                        <strong className="text-stone-700">Flight time:</strong>{" "}
                        {r.flightTime}
                      </p>
                      <p className="m-0">
                        <strong className="text-stone-700">
                          Cheapest months:
                        </strong>{" "}
                        {r.bestMonths}
                      </p>
                    </div>

                    <p className="text-sm font-sans text-stone-600 leading-relaxed mb-3">
                      {r.tip}
                    </p>

                    <a
                      href="/search"
                      className="text-[13px] font-sans font-semibold no-underline hover:underline"
                      style={{ color: "#D4A373" }}
                    >
                      Search {r.city} flights →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Section: Tips */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-6">
              6 Ways to Save on Toronto-to-Europe Flights
            </h2>

            <div className="space-y-6 mb-10">
              {TIPS.map((t, i) => (
                <div key={i} className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-lg font-serif mb-2">
                    {i + 1}. {t.title}
                  </h3>
                  <p className="text-sm font-sans text-stone-600 leading-relaxed m-0">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Section: Airlines */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              Best Airlines for Toronto to Europe
            </h2>

            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                <strong className="text-stone-900">Air Transat</strong> — The
                budget king for transatlantic flights from Canada. They run
                seasonal direct routes to many European cities at prices that
                consistently undercut Air Canada and the European flag carriers.
                The trade-off is fewer frills and seasonal-only schedules.
              </p>
              <p className="mb-4">
                <strong className="text-stone-900">WestJet</strong> — Expanded
                significantly into transatlantic service. Direct flights to
                London, Dublin, Paris, and Rome at competitive prices. Their
                basic economy fares can be excellent value.
              </p>
              <p className="mb-4">
                <strong className="text-stone-900">Air Canada</strong> — The
                most routes and frequencies but rarely the cheapest. Best when
                they price-match competitors or when you need specific
                scheduling. Their Aeroplan program can offer good value for
                frequent flyers.
              </p>
              <p className="mb-4">
                <strong className="text-stone-900">Icelandair</strong> — Often
                the cheapest way to get to Europe, with a free stopover in
                Iceland. Great if you want to see two destinations for the price
                of one.
              </p>
              <p>
                <strong className="text-stone-900">
                  European flag carriers
                </strong>{" "}
                (TAP, Aer Lingus, KLM, Lufthansa, Air France) — Competitive on
                their home routes. TAP to Lisbon and Aer Lingus to Dublin are
                frequently the cheapest options on those specific routes.
              </p>
            </div>

            {/* Section: When to book */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              When to Book: The Price Calendar
            </h2>

            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                Flight prices from Toronto to Europe follow predictable seasonal
                patterns. Understanding them can save you hundreds.
              </p>

              <div className="bg-stone-100 rounded-lg p-6 mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-stone-900">
                      Cheapest to fly:
                    </strong>
                    <p className="m-0 mt-1">
                      January, February, March, November (excluding holidays)
                    </p>
                  </div>
                  <div>
                    <strong className="text-stone-900">
                      Best value (price + weather):
                    </strong>
                    <p className="m-0 mt-1">
                      April, May, September, October
                    </p>
                  </div>
                  <div>
                    <strong className="text-stone-900">
                      Most expensive:
                    </strong>
                    <p className="m-0 mt-1">
                      June 15 – August 31, Christmas/New Year
                    </p>
                  </div>
                  <div>
                    <strong className="text-stone-900">
                      Book how far ahead:
                    </strong>
                    <p className="m-0 mt-1">
                      2-4 months for best prices, 5+ months for peak summer
                    </p>
                  </div>
                </div>
              </div>

              <p>
                The golden rule: shoulder season (April-May, September-October)
                gives you the best combination of low prices and pleasant
                weather. You&apos;ll pay 30-40% less than peak summer and
                actually enjoy the destinations more without the crowds.
              </p>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">
                  Ready to find your deal to Europe?
                </h3>
                <p className="text-stone-500 font-sans text-sm mb-6">
                  Search live prices from Toronto to any European city. Compare
                  200+ airlines and book at the lowest price.
                </p>
                <a
                  href="/search"
                  className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors"
                >
                  Search Flights to Europe →
                </a>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 p-6 bg-stone-100 rounded-lg">
              <h4 className="text-sm font-sans font-bold text-stone-500 uppercase tracking-wide mb-2">
                About this guide
              </h4>
              <p className="text-[13px] font-sans text-stone-500 leading-relaxed m-0">
                Prices reflect typical deals seen in 2026 for round-trip flights
                from Toronto Pearson (YYZ). All prices in CAD. Actual fares
                change daily based on demand, availability, and booking timing.
                Search for live prices on our site for current availability.
                SkyScoutTravel earns a commission when you book through our links
                at no extra cost to you.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
