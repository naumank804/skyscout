import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "How to Find Cheap Flights from Canada: The Complete Guide (2026) | SkyScoutTravel.com",
  description: "The ultimate guide for Canadian travelers. Learn flexible date searching, error fares, best booking windows, airline tricks, and the tools pros use to find cheap flights.",
};

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
                Guide
              </span>
              <span className="text-[12px] font-sans text-stone-500">April 18, 2026</span>
              <span className="text-[12px] font-sans text-stone-500">· 12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-stone-50 leading-tight mb-4">
              How to Find Cheap Flights from Canada
            </h1>
            <p className="text-stone-500 font-sans leading-relaxed">
              Everything Canadian travelers need to know about finding the lowest fares — from flexible date searching and error fares to the best booking windows and tools.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 px-6">
          <div className="max-w-3xl mx-auto font-sans text-stone-600 leading-relaxed">

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">1. Be Flexible with Your Dates</h2>
            <p className="mb-4">
              This is the single most impactful thing you can do. The difference between the cheapest and most expensive day to fly on the same route can be $200–$500. If you can be flexible by even a few days, you&apos;ll save significantly.
            </p>
            <p className="mb-4">
              Use tools that let you search across a range of dates rather than fixed dates. SkyScoutTravel&apos;s &ldquo;anywhere&rdquo; search lets you specify a departure window and trip length, then shows you the cheapest options across all dates and destinations.
            </p>
            <p className="mb-6">
              <strong>Best days to fly:</strong> Tuesdays and Wednesdays are consistently the cheapest for departures. Saturdays are usually the most expensive. For return flights, mid-week is again your best bet.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">2. Be Flexible with Your Destination</h2>
            <p className="mb-4">
              If your main goal is to get away for a good price, don&apos;t lock yourself into one destination. The &ldquo;explore everywhere&rdquo; approach — searching from your home airport with no fixed destination — often reveals incredible deals to places you might not have considered.
            </p>
            <p className="mb-6">
              For example, you might have your heart set on Paris at $700, but discover that Lisbon is $449, Barcelona is $479, and Dublin is $459. All incredible European cities, all significantly cheaper.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">3. Know Your Booking Window</h2>
            <p className="mb-4">
              The old advice of &ldquo;book 6 weeks ahead&rdquo; is too simplistic. The optimal booking window depends on where you&apos;re going:
            </p>
            <div className="bg-stone-100 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-stone-900">Domestic & US:</strong>
                  <p className="m-0 mt-1">1–3 months before departure</p>
                </div>
                <div>
                  <strong className="text-stone-900">Caribbean & Mexico:</strong>
                  <p className="m-0 mt-1">2–4 months before departure</p>
                </div>
                <div>
                  <strong className="text-stone-900">Europe:</strong>
                  <p className="m-0 mt-1">2–6 months before departure</p>
                </div>
                <div>
                  <strong className="text-stone-900">Asia & Oceania:</strong>
                  <p className="m-0 mt-1">3–8 months before departure</p>
                </div>
              </div>
            </div>
            <p className="mb-6">
              That said, last-minute deals do happen — especially on routes with lots of competition. The key is to set up price alerts so you catch drops whenever they happen.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">4. Use Canadian Budget Carriers</h2>
            <p className="mb-4">
              Canada&apos;s budget carrier landscape has evolved significantly. Flair Airlines, Swoop (now merged into WestJet), and Lynx Air (while it lasted) have forced legacy carriers to compete on popular leisure routes. Keep an eye on:
            </p>
            <p className="mb-6">
              Flair Airlines for domestic and US sun destinations, WestJet for Caribbean and Mexico, and Air Transat for Europe (especially in summer). Porter Airlines has also expanded significantly with their E195-E2 jets, now offering competitive transatlantic fares.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">5. Consider Nearby Airports</h2>
            <p className="mb-4">
              If you live in southern Ontario, don&apos;t just search YYZ. Hamilton (YHM), Buffalo (BUF), and even Detroit (DTW) can sometimes offer dramatically cheaper fares — especially US budget carriers operating from Buffalo.
            </p>
            <p className="mb-6">
              Similarly, Vancouverites should check Bellingham (BLI) and Seattle (SEA). Montrealers can look at Plattsburgh (PBG) for some US carriers.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">6. Watch for Error Fares</h2>
            <p className="mb-4">
              Airlines make pricing mistakes more often than you&apos;d think — currency conversion errors, missing fuel surcharges, or just typos. These &ldquo;error fares&rdquo; can mean $200 flights to Europe or $400 flights to Asia.
            </p>
            <p className="mb-6">
              The key is speed: error fares usually get corrected within hours. Follow deal alert accounts on social media and subscribe to newsletters (like ours) to catch them in time. Most airlines do honour error fares once booked, though there&apos;s no legal guarantee in Canada.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mt-10 mb-4">7. Use the Right Tools</h2>
            <p className="mb-6">
              Generic flight search engines work, but specialized tools give you an edge. SkyScoutTravel is built specifically for Canadian travelers — we search in CAD, focus on Canadian departure airports, and our &ldquo;anywhere&rdquo; search is designed to surface the cheapest global deals. Combined with price alerts, you&apos;ll never miss a deal from your home airport.
            </p>

            {/* CTA */}
            <div className="mt-10 p-8 bg-stone-925 rounded-xl text-center relative overflow-hidden">
              <div className="grain-overlay rounded-xl" />
              <div className="relative">
                <h3 className="text-2xl font-serif text-stone-50 mb-2">Ready to find your deal?</h3>
                <p className="text-stone-500 text-sm mb-6">
                  Put these tips into action. Search for the cheapest flights from any Canadian airport right now.
                </p>
                <Link
                  href="/search"
                  className="inline-block px-6 py-3 bg-stone-50 text-stone-900 rounded-lg text-sm font-sans font-semibold no-underline hover:bg-white transition-colors"
                >
                  Search Cheap Flights →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
