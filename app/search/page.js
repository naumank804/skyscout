import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhiteLabelSearch from "@/components/WhiteLabelSearch";

export const metadata = {
  title: "Search Cheap Flights from Canada | SkyScoutTravel.com",
  description:
    "Search and compare flights from 200+ airlines. Find cheap flights from Toronto, Vancouver, Montreal and all Canadian airports.",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-stone-925 pt-10 pb-4 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-serif text-stone-50 mb-2">
              Find your perfect flight
            </h1>
            <p className="text-stone-500 font-sans text-sm leading-relaxed">
              Compare 200+ airlines and 50+ booking agencies. Search by city name, add passengers, choose your cabin class.
            </p>
          </div>
        </section>

        {/* Search form + Results — both handled by WL widget */}
        <section className="py-8 px-4">
          <WhiteLabelSearch showResults={true} />
        </section>
      </main>

      <Footer />
    </>
  );
}
