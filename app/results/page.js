import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Flight Search Results | SkyScout.ca",
  description: "Compare flight prices from 200+ airlines and book the cheapest deals.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-6 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Search form (optional — so users can refine) */}
          <div id="tpwl-search"></div>

          {/* Results injected by WL widget */}
          <div id="tpwl-tickets"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
