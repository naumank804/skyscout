import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import WhiteLabelSearch from "@/components/WhiteLabelSearch";

export const metadata = {
  title: "Flight Search Results | SkyScout.ca",
  description:
    "Compare flight prices from 200+ airlines and book the cheapest deals.",
=======

export const metadata = {
  title: "Flight Search Results | SkyScout.ca",
  description: "Compare flight prices from 200+ airlines and book the cheapest deals.",
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD

      <main className="min-h-screen py-6 px-4">
        <WhiteLabelSearch showResults={true} />
      </main>

=======
      <main className="min-h-screen py-6 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Search form (optional — so users can refine) */}
          <div id="tpwl-search"></div>

          {/* Results injected by WL widget */}
          <div id="tpwl-tickets"></div>
        </div>
      </main>
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
      <Footer />
    </>
  );
}
