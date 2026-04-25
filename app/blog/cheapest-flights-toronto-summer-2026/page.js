import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "The 15 Cheapest Flights from Toronto This Summer (2026) | SkyScoutTravel.com",
  description: "The cheapest round-trip flights from Toronto Pearson (YYZ) for summer 2026. Deals under $300 to Cancún, Fort Lauderdale, Bogotá, Lisbon, and more.",
  openGraph: {
    title: "The 15 Cheapest Flights from Toronto This Summer (2026)",
    description: "We crunched thousands of routes. Here are the absolute cheapest flights from YYZ for summer 2026.",
  },
};

const DEALS = [
  { rank: 1, city: "Cancún, Mexico", code: "CUN", price: 279, note: "Multiple dates in June. Swoop and Flair often compete on this route, driving prices down." },
  { rank: 2, city: "Fort Lauderdale, USA", code: "FLL", price: 199, note: "Best prices in early June before school's out. Spirit and Flair both fly direct." },
  { rank: 3, city: "Bogotá, Colombia", code: "BOG", price: 329, note: "Avianca runs direct from YYZ. Prices drop midweek for July departures." },
  { rank: 4, city: "Lisbon, Portugal", code: "LIS", price: 449, note: "Incredible for Europe. TAP Air Portugal direct flights. Best prices for late August." },
  { rank: 5, city: "Montego Bay, Jamaica", code: "MBJ", price: 319, note: "WestJet and Air Canada both compete on this popular route." },
  { rank: 6, city: "London, UK", code: "LHR", price: 499, note: "Air Transat often has deals. Gatwick (LGW) can be even cheaper." },
  { rank: 7, city: "Reykjavik, Iceland", code: "KEF", price: 399, note: "Icelandair direct from YYZ. Summer is peak season but deals still exist." },
  { rank: 8, city: "Dublin, Ireland", code: "DUB", price: 459, note: "Aer Lingus direct. Book 6-8 weeks ahead for best prices." },
  { rank: 9, city: "San Juan, Puerto Rico", code: "SJU", price: 349, note: "No passport needed for US citizens, but Canadians do need one." },
  { rank: 10, city: "Barcelona, Spain", code: "BCN", price: 479, note: "Air Transat summer seasonal direct flights offer great value." },
  { rank: 11, city: "Nassau, Bahamas", code: "NAS", price: 339, note: "Quick 3-hour direct flight. Great for long weekend getaways." },
  { rank: 12, city: "Mexico City, Mexico", code: "MEX", price: 359, note: "Aeromexico and Air Canada both fly direct. Incredible food scene." },
  { rank: 13, city: "Paris, France", code: "CDG", price: 519, note: "Air France and Air Canada direct. Try midweek departures for best prices." },
  { rank: 14, city: "Punta Cana, DR", code: "PUJ", price: 379, note: "Multiple charter and scheduled carriers. All-inclusive resorts make it even better value." },
  { rank: 15, city: "Azores, Portugal", code: "PDL", price: 429, note: "Hidden gem. SATA Airlines seasonal direct flights from YYZ." },
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
            <Link href="/blog" className="text-sm font-sans text-stone-500 no-underline hover:text-amber-warmth mb-6 inline-block">
              ← Back to Blog
            </Link>
            <div className="flex gap-3 items-center mb-4">
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-amber-warmth bg-amber-900/20 px-2 py-0.5 rounded">
                Deals
              </span>
              <span className="text-[12px] font-sans text-stone-500">April 20, 2026</span>
              <span className="text-[12px] font-sans text-stone-500">· 8 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              The 15 Cheapest Flights from Toronto This Summer
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              We analyzed thousands of routes departing from Pearson (YYZ) for June, July, and August 2026. Here are the absolute cheapest round-trip flights — including some incredible deals under $300 CAD.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="font-sans text-stone-600 leading-relaxed mb-10">
              <p className="mb-4">
                Summer travel from Toronto doesn&apos;t have to break the bank. While peak season prices can be brutal, there are always routes where competition between airlines keeps fares surprisingly low.
              </p>
              <p className="mb-4">
                We&apos;ve compiled the best deals we&apos;re consistently seeing for summer 2026 departures from YYZ. All prices are round-trip in CAD and were available at the time of writing — though flight prices change constantly, so use these as a guide and search for live prices.
              </p>
              <p>
                <strong>Pro tip:</strong> The cheapest flights are almost always on Tuesdays and Wednesdays. Departing midweek can save you $50–$150 on most routes.
              </p>
            </div>

            {/* Deals list */}
            {DEALS.map((deal) => (
              <div key={deal.rank} className="border-b border-stone-200 py-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-serif text-stone-300 mt-1 w-8 flex-shrink-0">
                    {deal.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h2 className="text-xl font-serif m-0">{deal.city}</h2>
                      <div className="text-right">
                        <span className="text-2xl font-serif text-stone-900">${deal.price}</span>
                        <span className="text-[12px] font-sans text-stone-400 ml-1">CAD RT</span>
                      </div>
                    </div>
                    <p className="text-sm font-sans text-stone-500 leading-relaxed mt-2 mb-3">
                      {deal.note}
                    </p>
                    <Link
                      href={`/search?to=${deal.code}`}
                      className="text-[13px] font-sans font-semibold text-amber-warmth no-underline hover:underline"
                    >
                      Search live prices for {deal.city.split(",")[0]} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom CTA */}
            <div className="mt-12 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">Want deals like these in your inbox?</h3>
                <p className="text-stone-500 font-sans text-sm mb-6">
                  We send out the best flight deals from Canadian airports every week. Free, forever.
                </p>
                <Link
                  href="/"
                  className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors"
                >
                  Subscribe to Deal Alerts →
                </Link>
              </div>
            </div>

            {/* Methodology */}
            <div className="mt-10 p-6 bg-stone-100 rounded-lg">
              <h4 className="text-sm font-sans font-bold text-stone-500 uppercase tracking-wide mb-2">Methodology</h4>
              <p className="text-[13px] font-sans text-stone-500 leading-relaxed m-0">
                Prices were compiled from searches conducted between April 1–20, 2026 for round-trip flights departing YYZ between June 1 and August 31, 2026. We used the Kiwi.com Tequila API to aggregate fares from 200+ airlines. All prices shown in CAD. Actual prices may vary based on travel dates, availability, and booking timing. SkyScoutTravel earns a commission when you book through our links at no extra cost to you.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
