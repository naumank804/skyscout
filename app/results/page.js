import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhiteLabelSearch from "@/components/WhiteLabelSearch";

export const metadata = {
  title: "Flight Search Results | SkyScoutTravel.com",
  description:
    "Compare flight prices from 200+ airlines and book the cheapest deals.",
};

export default function ResultsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen py-6 px-4">
        <WhiteLabelSearch showResults={true} />
      </main>

      <Footer />
    </>
  );
}
