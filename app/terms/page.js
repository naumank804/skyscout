import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | SkyScout.ca",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto font-sans text-stone-600 leading-relaxed">
          <h1 className="text-3xl font-serif text-stone-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-stone-400 mb-8">Last updated: April 2026</p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Service Description</h2>
          <p className="mb-4">
            SkyScout.ca is a flight search and comparison tool that helps users find cheap flights. We aggregate flight data from third-party APIs and display results for informational purposes.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Pricing Accuracy</h2>
          <p className="mb-4">
            Flight prices displayed on SkyScout are pulled in real-time from third-party data providers. Prices change frequently and may differ from the final price at the time of booking. SkyScout does not guarantee the accuracy or availability of any displayed price.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Bookings</h2>
          <p className="mb-4">
            SkyScout does not process bookings directly. When you click a booking link, you are redirected to a third-party booking platform (Kiwi.com). Your booking relationship is with that platform and the airline, not with SkyScout.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Affiliate Disclosure</h2>
          <p className="mb-4">
            SkyScout earns affiliate commissions when users complete bookings through our links. This does not affect the price you pay. We are committed to showing the best deals regardless of commission rates.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Limitation of Liability</h2>
          <p className="mb-4">
            SkyScout is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of the service, including but not limited to missed flights, incorrect pricing, or booking errors on third-party platforms.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Contact</h2>
          <p className="mb-4">
            For questions about these terms, contact us at legal@skyscout.ca.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
