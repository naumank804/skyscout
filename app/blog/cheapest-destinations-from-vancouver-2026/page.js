import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "10 Cheapest International Destinations from Vancouver (2026) | SkyScoutTravel",
  description:
    "Find the cheapest flights from Vancouver in 2026. Honolulu from $349, Los Angeles from $179, Tokyo from $599. Best deals from YVR to Asia, USA, Mexico and beyond.",
  keywords: [
    "cheap flights from Vancouver",
    "cheapest flights from YVR",
    "Vancouver cheap flights 2026",
    "Vancouver to Asia cheap",
    "Vancouver to Hawaii cheap",
    "budget flights Vancouver",
    "cheap international flights Vancouver",
  ],
  openGraph: {
    title: "10 Cheapest International Destinations from Vancouver (2026)",
    description:
      "LA from $179, Honolulu from $349, Tokyo from $599. The cheapest places to fly from Vancouver.",
  },
};

const DESTINATIONS = [
  {
    rank: 1,
    city: "Los Angeles",
    country: "USA",
    code: "LAX",
    price: 179,
    flightTime: "2h 45m direct",
    airlines: "WestJet, Air Canada, Flair, United, Delta, American",
    bestMonths: "January, February, October, November",
    tip: "The cheapest international flight from Vancouver. Six airlines compete on this route which keeps fares incredibly low. Flair regularly drops below $150 round trip for carry-on only fares. Perfect for a long weekend — you can leave Friday after work and be at Santa Monica Beach by dinner.",
  },
  {
    rank: 2,
    city: "San Francisco",
    country: "USA",
    code: "SFO",
    price: 199,
    flightTime: "2h 30m direct",
    airlines: "Air Canada, WestJet, United, Alaska Airlines",
    bestMonths: "January, February, March, November",
    tip: "Similar distance and pricing to LA but with fewer carriers so deals are slightly less frequent. Alaska Airlines often has the best fares. Great for a tech-and-food weekend trip.",
  },
  {
    rank: 3,
    city: "Seattle",
    country: "USA",
    code: "SEA",
    price: 149,
    flightTime: "0h 55m direct",
    airlines: "Air Canada, Alaska Airlines, Delta",
    bestMonths: "Year-round",
    tip: "Under an hour in the air — practically a bus ride. But consider driving or taking the Bolt Bus instead, which can be $30-50 each way. Flying only makes sense if you find ultra-cheap fares or are connecting onwards.",
  },
  {
    rank: 4,
    city: "Honolulu",
    country: "Hawaii, USA",
    code: "HNL",
    price: 349,
    flightTime: "6h direct",
    airlines: "WestJet, Air Canada, Hawaiian Airlines",
    bestMonths: "September, October, November, January",
    tip: "Vancouver is the cheapest Canadian city to fly to Hawaii from — direct flights are only 6 hours. WestJet runs seasonal direct service and their sale fares can dip to $299. The sweet spot is flying in shoulder season when prices drop but weather is still perfect.",
  },
  {
    rank: 5,
    city: "Puerto Vallarta",
    country: "Mexico",
    code: "PVR",
    price: 329,
    flightTime: "4h 45m direct",
    airlines: "WestJet, Air Canada, Sunwing, Flair",
    bestMonths: "May, June, September, October, November",
    tip: "Vancouver to Puerto Vallarta is a hugely competitive route with multiple carriers. Shoulder season (May-June, September-November) offers the best balance of price and weather. All-inclusive packages through WestJet Vacations can be outstanding value.",
  },
  {
    rank: 6,
    city: "Cancún",
    country: "Mexico",
    code: "CUN",
    price: 379,
    flightTime: "5h 15m direct",
    airlines: "WestJet, Air Canada, Sunwing",
    bestMonths: "May, September, October, November",
    tip: "Slightly more expensive than Puerto Vallarta from YVR but still very affordable. Direct flights are seasonal — in winter you may need to connect through Calgary or Toronto. Check both CUN and PVR and pick whichever is cheaper.",
  },
  {
    rank: 7,
    city: "Tokyo",
    country: "Japan",
    code: "NRT",
    price: 599,
    flightTime: "9h 30m direct",
    airlines: "Air Canada, ANA, JAL, Zipair",
    bestMonths: "January, February, March, November",
    tip: "Vancouver is Canada's gateway to Asia — it's 2-3 hours closer than Toronto. Zipair (Japan Airlines' budget carrier) launched direct YVR-NRT service with fares starting around $499. This has forced Air Canada and ANA to compete harder. Cherry blossom season (late March-April) sees higher prices.",
  },
  {
    rank: 8,
    city: "Seoul",
    country: "South Korea",
    code: "ICN",
    price: 649,
    flightTime: "10h 30m direct",
    airlines: "Air Canada, Korean Air",
    bestMonths: "January, February, March, November",
    tip: "Korean Air runs daily direct flights and frequently has sales. Seoul is also an excellent connecting hub for Southeast Asia — Korean Air connections to Bangkok, Ho Chi Minh City, and Manila can be cheaper than flying direct from Vancouver.",
  },
  {
    rank: 9,
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    price: 649,
    flightTime: "9h 15m direct",
    airlines: "Air Canada, British Airways, WestJet",
    bestMonths: "January, February, November",
    tip: "Longer and more expensive than flying from Toronto to London, but still competitive. WestJet's Dreamliner service to Gatwick (LGW) is often cheaper than Heathrow options. If London is flexible, checking Toronto departures may save $100-150.",
  },
  {
    rank: 10,
    city: "Sydney",
    country: "Australia",
    code: "SYD",
    price: 899,
    flightTime: "16h+ (1 stop)",
    airlines: "Air Canada (via connecting), Qantas (via connecting), Cathay Pacific (via HKG)",
    bestMonths: "February, March, May, November",
    tip: "No direct flights exist from Vancouver to Sydney, but connecting through Asian hubs (Hong Kong, Singapore, Tokyo) can offer good value. Cathay Pacific via Hong Kong is often the cheapest option. Remember: Australia's summer is Canada's winter, so January-February means warm weather at both ends.",
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
            <a href="/blog" className="text-sm font-sans text-stone-500 no-underline hover:text-amber-warmth mb-6 inline-block">
              ← Back to Blog
            </a>
            <div className="flex gap-3 items-center mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider bg-amber-900/20 px-2 py-0.5 rounded" style={{ color: "#D4A373" }}>Deals</span>
              <span className="text-[12px] font-sans text-stone-500">May 2, 2026</span>
              <span className="text-[12px] font-sans text-stone-500">· 12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              10 Cheapest International Destinations from Vancouver (2026)
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              Vancouver&apos;s position on the Pacific Rim makes it Canada&apos;s best-connected city for Asia and the US West Coast. Here are the 10 cheapest places you can fly from YVR — with prices, airlines, and insider tips for each route.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Quick stats */}
            <div className="bg-stone-100 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-serif mb-3">Flying from Vancouver: Key Advantages</h3>
              <div className="font-sans text-sm text-stone-600 leading-relaxed space-y-2">
                <p className="m-0"><strong className="text-stone-900">Closest to Asia:</strong> YVR is 2-3 hours closer to Tokyo, Seoul, and Hong Kong than Toronto — shorter flights and cheaper fares.</p>
                <p className="m-0"><strong className="text-stone-900">US West Coast access:</strong> LA, San Francisco, and Seattle are all under 3 hours and often under $200 round trip.</p>
                <p className="m-0"><strong className="text-stone-900">Hawaii gateway:</strong> Vancouver offers the cheapest Hawaii flights in Canada at just 6 hours direct.</p>
              </div>
            </div>

            {/* Intro */}
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                If you live in Vancouver, you have a geographic advantage that most Canadians don&apos;t: you&apos;re closer to Asia and the US West Coast than any other major Canadian city. That translates directly into cheaper flights and shorter travel times.
              </p>
              <p>
                We tracked fares from Vancouver International (YVR) across every major route and compiled the 10 cheapest international destinations you can fly to right now. All prices are round-trip in CAD.
              </p>
            </div>

            {/* Destination list */}
            {DESTINATIONS.map((d) => (
              <div key={d.rank} className="border-b border-stone-200 py-8 last:border-b-0">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-serif text-stone-300 mt-1 w-8 flex-shrink-0">
                    {d.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                      <h3 className="text-xl font-serif m-0">{d.city}, {d.country}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-serif text-stone-900">${d.price}</span>
                        <span className="text-[12px] font-sans text-stone-400 ml-1">CAD RT</span>
                      </div>
                    </div>
                    <div className="font-sans text-sm text-stone-500 mb-3 space-y-1">
                      <p className="m-0"><strong className="text-stone-700">Airlines:</strong> {d.airlines}</p>
                      <p className="m-0"><strong className="text-stone-700">Flight time:</strong> {d.flightTime}</p>
                      <p className="m-0"><strong className="text-stone-700">Cheapest months:</strong> {d.bestMonths}</p>
                    </div>
                    <p className="text-sm font-sans text-stone-600 leading-relaxed mb-3">{d.tip}</p>
                    <a href="/search" className="text-[13px] font-sans font-semibold no-underline hover:underline" style={{ color: "#D4A373" }}>
                      Search Vancouver → {d.city} flights →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">Flying from Vancouver?</h3>
                <p className="text-stone-500 font-sans text-sm mb-6">
                  Search live prices from YVR to any destination. Compare all airlines and find the cheapest fare.
                </p>
                <a href="/search" className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors">
                  Search Flights from Vancouver →
                </a>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 p-6 bg-stone-100 rounded-lg">
              <h4 className="text-sm font-sans font-bold text-stone-500 uppercase tracking-wide mb-2">About this guide</h4>
              <p className="text-[13px] font-sans text-stone-500 leading-relaxed m-0">
                Prices reflect typical deal fares seen in 2026 for round-trip flights from Vancouver International (YVR). All prices in CAD. Actual fares change daily. SkyScoutTravel earns a commission when you book through our links at no extra cost to you.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
