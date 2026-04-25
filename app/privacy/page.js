import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | SkyScoutTravel.com",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto font-sans text-stone-600 leading-relaxed">
          <h1 className="text-3xl font-serif text-stone-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-stone-400 mb-8">Last updated: April 2026</p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Information We Collect</h2>
          <p className="mb-4">
            SkyScoutTravel.com collects minimal personal information. When you use our flight search, queries are sent directly to the Kiwi.com Tequila API — we do not store your search history on our servers.
          </p>
          <p className="mb-4">
            If you subscribe to our deal alerts, we collect your email address solely for the purpose of sending you flight deal notifications. You can unsubscribe at any time.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Cookies & Analytics</h2>
          <p className="mb-4">
            We use Google Analytics to understand how visitors use our site. This collects anonymous usage data including pages visited, time on site, and device type. No personally identifiable information is collected through analytics.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Affiliate Links</h2>
          <p className="mb-4">
            When you click a booking link on SkyScoutTravel, you are redirected to Kiwi.com where your booking is processed. We earn a commission on completed bookings at no extra cost to you. Kiwi.com has its own privacy policy governing how they handle your booking data.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Data Storage</h2>
          <p className="mb-4">
            Your API key, if entered manually, is stored locally in your browser&apos;s localStorage. It is never sent to our servers.
          </p>

          <h2 className="text-xl font-serif text-stone-900 mt-8 mb-3">Contact</h2>
          <p className="mb-4">
            For privacy-related questions, contact us at privacy@skyscouttravel.com.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
