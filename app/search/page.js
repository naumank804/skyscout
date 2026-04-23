import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhiteLabelSearch from "@/components/WhiteLabelSearch";

export const metadata = {
  title: "Search Cheap Flights from Canada | SkyScout.ca",
  description:
    "Search and compare flights from 200+ airlines. Find cheap flights from Toronto, Vancouver, Montreal and all Canadian airports. Book directly with zero service fees.",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero banner */}
        <section className="bg-stone-925 pt-12 pb-6 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif text-stone-50 mb-2">
              Find your perfect flight
            </h1>
            <p className="text-stone-500 font-sans text-[15px] leading-relaxed">
              Compare prices from 200+ airlines. Search by city name, add passengers, choose cabin class — and book directly.
            </p>
          </div>
        </section>

        {/* White Label Search Widget */}
        <section className="relative -mt-2 z-10">
          <WhiteLabelSearch />
        </section>

        {/* Results appear below via the widget */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div id="tpwl-tickets"></div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
