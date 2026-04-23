import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhiteLabelSearch from "@/components/WhiteLabelSearch";

export const metadata = {
  title: "Search Cheap Flights from Canada | SkyScout.ca",
  description:
<<<<<<< HEAD
    "Search and compare flights from 200+ airlines. Find cheap flights from Toronto, Vancouver, Montreal and all Canadian airports.",
=======
    "Search and compare flights from 200+ airlines. Find cheap flights from Toronto, Vancouver, Montreal and all Canadian airports. Book directly with zero service fees.",
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
};

export default function SearchPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
<<<<<<< HEAD
        {/* Header */}
        <section className="bg-stone-925 pt-10 pb-4 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-serif text-stone-50 mb-2">
              Find your perfect flight
            </h1>
            <p className="text-stone-500 font-sans text-sm leading-relaxed">
              Compare 200+ airlines and 50+ booking agencies. Search by city name, add passengers, choose your cabin class.
=======
        {/* Hero banner */}
        <section className="bg-stone-925 pt-12 pb-6 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif text-stone-50 mb-2">
              Find your perfect flight
            </h1>
            <p className="text-stone-500 font-sans text-[15px] leading-relaxed">
              Compare prices from 200+ airlines. Search by city name, add passengers, choose cabin class — and book directly.
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
            </p>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search form + Results — both handled by WL widget */}
        <section className="py-8 px-4">
          <WhiteLabelSearch showResults={true} />
=======
        {/* White Label Search Widget */}
        <section className="relative -mt-2 z-10">
          <WhiteLabelSearch />
        </section>

        {/* Results appear below via the widget */}
        <section className="px-6 pb-20">
          <div className="max-w-5xl mx-auto">
            <div id="tpwl-tickets"></div>
          </div>
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
        </section>
      </main>

      <Footer />
    </>
  );
}
