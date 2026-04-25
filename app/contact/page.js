import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | SkyScout.ca",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-serif text-stone-900 mb-4">Get in Touch</h1>
          <p className="font-sans text-stone-500 leading-relaxed mb-10">
            Have questions, feedback, or a partnership inquiry? We&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-2xl">📧</span>
              <h3 className="text-lg font-serif mt-3 mb-1">General Inquiries</h3>
              <a href="mailto:hello@skyscouttravel.com" className="text-sm font-sans text-amber-warmth no-underline">
                hello@skyscouttravel.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-2xl">🤝</span>
              <h3 className="text-lg font-serif mt-3 mb-1">Partnerships</h3>
              <a href="mailto:partners@skyscouttravel.com" className="text-sm font-sans text-amber-warmth no-underline">
                partners@skyscouttravel.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-2xl">🐛</span>
              <h3 className="text-lg font-serif mt-3 mb-1">Bug Reports</h3>
              <a href="mailto:support@skyscouttravel.com" className="text-sm font-sans text-amber-warmth no-underline">
                support@skyscouttravel.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <span className="text-2xl">📝</span>
              <h3 className="text-lg font-serif mt-3 mb-1">Press</h3>
              <a href="mailto:press@skyscouttravel.com" className="text-sm font-sans text-amber-warmth no-underline">
                press@skyscouttravel.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
