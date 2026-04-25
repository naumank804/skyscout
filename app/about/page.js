import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About SkyScoutTravel.com | Cheap Flights for Canadians",
  description: "SkyScoutTravel helps Canadian travelers find the cheapest flights worldwide. Learn about our mission, how we work, and our affiliate model.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="bg-stone-925 py-16 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-warmth mb-3 block">About</span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-50 mb-4">We believe Canadians overpay for flights</h1>
            <p className="text-stone-500 font-sans max-w-lg mx-auto leading-relaxed">
              So we built something to fix it.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-2xl mx-auto font-sans text-stone-600 leading-relaxed">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Our Mission</h2>
            <p className="mb-6">
              SkyScoutTravel  exists for one reason: to help Canadian travelers find the cheapest possible flights. We search 200+ airlines, aggregate thousands of routes, and surface the deals that matter — all priced in CAD, all from Canadian airports.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mb-4">How We Make Money</h2>
            <p className="mb-6">
              We&apos;re fully transparent about our business model. When you find a deal on SkyScoutTravel and click through to book, we earn a small affiliate commission from the booking platform. This costs you nothing extra — you pay exactly the same price as if you&apos;d gone directly. We never charge service fees, and we never inflate prices.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mb-4">Why Canada-First?</h2>
            <p className="mb-6">
              Most flight deal sites are built for US travelers. Prices are in USD, airports are American, and the deals don&apos;t apply to us. We built SkyScout because we were tired of converting currencies and checking whether that &ldquo;amazing deal&rdquo; actually departed from a Canadian airport. Every feature is designed with Canadian travelers in mind.
            </p>

            <h2 className="text-2xl font-serif text-stone-900 mb-4">Our Data</h2>
            <p className="mb-6">
              Flight prices on SkyScoutTravel are pulled in real-time from the Kiwi.com Tequila API, which aggregates fares from over 200 airlines worldwide. Prices change constantly — what you see is a live snapshot, not cached or outdated data.
            </p>

            <div className="mt-10 text-center">
              <a
                href="/search"
                className="inline-block px-8 py-4 bg-stone-900 text-stone-50 rounded-lg text-base font-sans font-semibold no-underline hover:bg-stone-800 transition-colors"
              >
                Start Searching →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
