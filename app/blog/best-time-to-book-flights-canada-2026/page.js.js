import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Best Time to Book Flights from Canada in 2026: Data-Backed Guide | SkyScoutTravel",
  description:
    "When should you book flights from Canada? We analyzed fare data to find the ideal booking windows for domestic, US, Caribbean, Europe, and Asia flights. Save $200+ with the right timing.",
  keywords: [
    "best time to book flights Canada",
    "when to book flights Canada",
    "cheapest time to fly from Canada",
    "best day to book flights Canada",
    "how far in advance to book flights",
    "cheap flight booking tips Canada",
    "flight price trends Canada 2026",
  ],
  openGraph: {
    title: "Best Time to Book Flights from Canada in 2026",
    description:
      "Data-backed guide on when to book flights from Canada. The ideal booking window for every destination type.",
  },
};

const BOOKING_WINDOWS = [
  {
    destination: "Within Canada",
    examples: "Toronto ↔ Vancouver, Montreal ↔ Calgary",
    idealWindow: "3-6 weeks before",
    priceRange: "$200-$500 RT",
    tip: "Domestic flights in Canada are expensive relative to distance. The sweet spot is 3-6 weeks out — earlier than that and airlines haven't released their competitive fares, later and cheap seats are gone. Porter Airlines has shaken up domestic pricing on routes they serve — always check them.",
    avoid: "Booking less than 2 weeks before departure. Last-minute domestic fares in Canada are brutal — expect $600+ for Toronto to Vancouver.",
  },
  {
    destination: "United States",
    examples: "Toronto → NYC, Vancouver → LA, Montreal → Miami",
    idealWindow: "4-8 weeks before",
    priceRange: "$150-$400 RT",
    tip: "Cross-border flights are surprisingly affordable thanks to competition from US carriers. Buffalo (BUF), Bellingham (BLI), and Plattsburgh (PBG) airports just across the border can be 30-50% cheaper than flying from Canadian airports. Factor in the drive time and it's often worth it.",
    avoid: "Holiday weekends (Thanksgiving, July 4th, Memorial Day). Prices spike 40-60% around US holidays.",
  },
  {
    destination: "Caribbean & Mexico",
    examples: "Toronto → Cancún, Montreal → Punta Cana, Calgary → Varadero",
    idealWindow: "6-10 weeks before",
    priceRange: "$300-$600 RT",
    tip: "This is Canada's biggest leisure market and prices follow very predictable patterns. Book 6-10 weeks ahead for the best fares. Charter carriers (Sunwing) often release seats at the last minute if flights aren't full, but this is risky. Package deals (flight + all-inclusive hotel) are frequently better value than flight-only.",
    avoid: "March Break (mid-March) and Christmas/New Year. These peak weeks see 50-80% price increases. Book 3+ months ahead if you must fly during these periods.",
  },
  {
    destination: "Europe",
    examples: "Toronto → London, Montreal → Paris, Vancouver → Amsterdam",
    idealWindow: "2-4 months before",
    priceRange: "$500-$900 RT",
    tip: "European flights need the longest lead time to get good prices. Air Transat, WestJet, and the European flag carriers release their best transatlantic fares 2-4 months before departure. For peak summer (July-August), book 4-6 months ahead. Shoulder season (April-May, September-October) offers the best combination of price and weather.",
    avoid: "Booking less than 3 weeks before a summer departure. Walk-up transatlantic fares can exceed $2,000.",
  },
  {
    destination: "Asia & Oceania",
    examples: "Vancouver → Tokyo, Toronto → Delhi, Montreal → Bangkok",
    idealWindow: "3-6 months before",
    priceRange: "$700-$1,500 RT",
    tip: "Long-haul Asian routes need the most advance booking. The cheapest fares are released 3-6 months out and sell quickly. Vancouver has a significant advantage for Asian destinations — it's 2-3 hours closer than Toronto. Chinese carriers (Air China, China Eastern, Hainan) often offer the lowest fares with a connection in their hub city.",
    avoid: "Lunar New Year (January/February), Golden Week (late April/early May for Japan), and Chinese National Day (early October). Fares to Asia spike during these periods.",
  },
];

const DAY_TIPS = [
  {
    myth: "Flights are always cheapest on Tuesdays",
    reality: "Partially true. Airlines often release sales on Tuesday evenings, which means Tuesday night through Wednesday morning can see lower prices. But the difference is typically $10-30, not the hundreds that viral posts claim. Being flexible with your travel dates saves far more than obsessing over booking day.",
  },
  {
    myth: "Prices drop if you wait until the last minute",
    reality: "Almost never true for flights from Canada. Unlike hotels or cruise ships, airlines rarely discount unsold seats. Last-minute fares are almost always the most expensive. The exception is charter flights to sun destinations, where operators occasionally dump unsold seats at low prices.",
  },
  {
    myth: "Use incognito mode to get cheaper prices",
    reality: "This was debunked years ago. Airlines and search engines do not raise prices based on your search history or cookies. Using incognito mode makes no difference to the fares you see. Price changes you notice between searches are due to normal fare fluctuations, not tracking.",
  },
  {
    myth: "Booking directly with the airline is always cheapest",
    reality: "Not necessarily. Online travel agencies and metasearch engines (like SkyScoutTravel) compare prices across multiple booking sources. Sometimes an agency has a negotiated rate that's lower than the airline's own website. Always compare before booking.",
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
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider bg-amber-900/20 px-2 py-0.5 rounded" style={{ color: "#D4A373" }}>Research</span>
              <span className="text-[12px] font-sans text-stone-500">May 2, 2026</span>
              <span className="text-[12px] font-sans text-stone-500">· 14 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              Best Time to Book Flights from Canada in 2026
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              Is booking on Tuesday really cheaper? How far ahead should you book? We analyzed fare trends from Canadian airports to separate fact from fiction and find the real booking sweet spots.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Quick answer box */}
            <div className="bg-stone-100 rounded-xl p-6 mb-10">
              <h3 className="text-lg font-serif mb-3">The Short Answer</h3>
              <div className="font-sans text-sm text-stone-600 leading-relaxed">
                <p className="m-0 mb-2">There&apos;s no single &ldquo;best time&rdquo; — it depends on where you&apos;re going:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-white rounded-lg p-3">
                    <strong className="text-stone-900">Domestic:</strong>
                    <span className="block text-stone-600">3-6 weeks before</span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <strong className="text-stone-900">USA:</strong>
                    <span className="block text-stone-600">4-8 weeks before</span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <strong className="text-stone-900">Caribbean/Mexico:</strong>
                    <span className="block text-stone-600">6-10 weeks before</span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <strong className="text-stone-900">Europe:</strong>
                    <span className="block text-stone-600">2-4 months before</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:col-span-2">
                    <strong className="text-stone-900">Asia/Oceania:</strong>
                    <span className="block text-stone-600">3-6 months before</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                &ldquo;When should I book my flight?&rdquo; is the most common question we get. And the answer isn&apos;t a single magic number — it depends entirely on where you&apos;re going, when you&apos;re traveling, and which airlines serve that route.
              </p>
              <p>
                We&apos;ve tracked fare patterns from every major Canadian airport and here&apos;s what we&apos;ve found: the ideal booking window varies by destination, but one rule is universal — <strong>being flexible with your travel dates saves more money than any booking trick.</strong>
              </p>
            </div>

            {/* Booking windows by destination */}
            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-6">
              Ideal Booking Windows by Destination
            </h2>

            <div className="space-y-6 mb-10">
              {BOOKING_WINDOWS.map((b, i) => (
                <div key={i} className="bg-white border border-stone-200 rounded-xl p-6">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                    <h3 className="text-xl font-serif m-0">{b.destination}</h3>
                    <span className="text-sm font-sans font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">{b.idealWindow}</span>
                  </div>
                  <p className="text-[13px] font-sans text-stone-400 mb-3">{b.examples}</p>
                  <p className="text-[13px] font-sans text-stone-400 mb-3">Typical prices: {b.priceRange}</p>
                  <p className="text-sm font-sans text-stone-600 leading-relaxed mb-3">{b.tip}</p>
                  <p className="text-sm font-sans leading-relaxed m-0">
                    <strong className="text-red-700">Avoid:</strong>{" "}
                    <span className="text-stone-600">{b.avoid}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Best days */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              Best Days to Fly (Not Book — Fly)
            </h2>
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                The day you <strong>travel</strong> matters more than the day you <strong>book</strong>. Here&apos;s what the data shows:
              </p>
              <div className="bg-stone-50 rounded-lg p-6 space-y-3 text-sm">
                <p className="m-0"><strong className="text-stone-900">Cheapest days to depart:</strong> Tuesday, Wednesday, Thursday</p>
                <p className="m-0"><strong className="text-stone-900">Most expensive days to depart:</strong> Friday, Sunday</p>
                <p className="m-0"><strong className="text-stone-900">Typical savings:</strong> $50-$150 for midweek vs weekend on the same route</p>
                <p className="m-0"><strong className="text-stone-900">Saturday exception:</strong> Saturday departures are often cheaper than Friday or Sunday — the business travel premium pushes those days up while Saturday is mostly leisure.</p>
              </div>
            </div>

            {/* Myths debunked */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-6">
              Booking Myths: Debunked
            </h2>

            <div className="space-y-4 mb-10">
              {DAY_TIPS.map((d, i) => (
                <div key={i} className="bg-stone-50 rounded-lg p-6">
                  <h3 className="text-base font-serif mb-2">Myth: &ldquo;{d.myth}&rdquo;</h3>
                  <p className="text-sm font-sans text-stone-600 leading-relaxed m-0">
                    <strong className="text-stone-800">Reality:</strong> {d.reality}
                  </p>
                </div>
              ))}
            </div>

            {/* The real strategy */}
            <h2 className="text-2xl font-serif text-stone-900 mt-14 mb-4">
              The Real Strategy That Works
            </h2>
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                Forget the tricks. The travelers who consistently pay the least for flights do three things:
              </p>
              <div className="bg-stone-100 rounded-lg p-6 space-y-4 text-sm">
                <div>
                  <strong className="text-stone-900 block mb-1">1. Be flexible with dates</strong>
                  <span>A Tuesday departure instead of Friday can save $100+. Shifting your trip by one week can save even more.</span>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">2. Book in the right window</strong>
                  <span>Use the destination-specific windows above. Not too early, not too late.</span>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">3. Compare across all sources</strong>
                  <span>Use a search engine that compares airlines and agencies side by side. A 30-second comparison can save $200.</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">Ready to find the best price?</h3>
                <p className="text-stone-500 font-sans text-sm mb-6">
                  Search flights from any Canadian airport. We compare 200+ airlines and 50+ agencies to find you the lowest fare.
                </p>
                <a href="/search" className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors">
                  Search Flights Now →
                </a>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 p-6 bg-stone-100 rounded-lg">
              <h4 className="text-sm font-sans font-bold text-stone-500 uppercase tracking-wide mb-2">About this guide</h4>
              <p className="text-[13px] font-sans text-stone-500 leading-relaxed m-0">
                Booking windows and price ranges are based on fare trends observed from Canadian airports throughout 2025-2026. Individual routes may vary. SkyScoutTravel earns a commission when you book through our links at no extra cost to you.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
