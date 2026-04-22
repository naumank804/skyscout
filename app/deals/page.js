"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCityName, formatShortDate } from "@/lib/helpers";
import Link from "next/link";

const ORIGINS = [
  { code: "YYZ", city: "Toronto" },
  { code: "YVR", city: "Vancouver" },
  { code: "YUL", city: "Montreal" },
];

export default function DealsPage() {
  const [selectedOrigin, setSelectedOrigin] = useState("YYZ");
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDeals(selectedOrigin);
  }, [selectedOrigin]);

  const fetchDeals = async (origin) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/destinations?origin=${origin}&currency=CAD`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error);
      setDeals(data.data?.slice(0, 20) || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="bg-stone-925 py-16 px-6 text-center relative overflow-hidden">
          <div className="grain-overlay" />
          <div className="relative">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-warmth mb-3 block">Live Deals</span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-50 mb-4">Cheapest flights right now</h1>
            <p className="text-stone-500 font-sans max-w-lg mx-auto leading-relaxed mb-8">
              Real prices pulled live from airline data. Select your departure city to see the cheapest destinations available.
            </p>

            <div className="flex gap-2 justify-center">
              {ORIGINS.map((o) => (
                <button
                  key={o.code}
                  onClick={() => setSelectedOrigin(o.code)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-sans font-semibold border cursor-pointer transition-colors ${
                    selectedOrigin === o.code
                      ? "bg-stone-50 text-stone-900 border-stone-50"
                      : "bg-transparent text-stone-400 border-stone-600 hover:border-stone-400"
                  }`}
                >
                  {o.city} ({o.code})
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            {loading && (
              <div className="text-center py-16">
                <div className="animate-float text-4xl">✈</div>
                <p className="text-stone-400 font-sans mt-4">Loading deals from {selectedOrigin}...</p>
              </div>
            )}

            {error && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-sans">
                ⚠️ {error}
              </div>
            )}

            {!loading && deals.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {deals.map((d, i) => (
                  <a
                    key={i}
                    href={d.bookingLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bg-white rounded-xl border border-stone-200 p-6 no-underline text-stone-900 hover-lift block"
                    style={{ borderTop: i < 3 ? "3px solid #D4A373" : "3px solid transparent" }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <span className="text-[12px] font-sans font-semibold text-stone-400">{d.origin} → {d.destination}</span>
                        <h3 className="text-lg font-serif mt-0.5 mb-0">
                          {getCityName(d.destination)}
                        </h3>
                      </div>
                      {d.airlineCode && (
                        <img
                          src={`https://pics.avs.io/40/40/${d.airlineCode}.png`}
                          alt={d.airlineCode}
                          width={28}
                          height={28}
                          className="rounded"
                          onError={(e) => { e.target.style.display = "none"; }}
                        />
                      )}
                    </div>

                    <div className="text-[12px] font-sans text-stone-400 mt-2 flex gap-3">
                      {d.departureAt && <span>📅 {formatShortDate(d.departureAt)}</span>}
                      <span>{d.transfers === 0 ? "✅ Direct" : `🔄 ${d.transfers} stop${d.transfers > 1 ? "s" : ""}`}</span>
                    </div>

                    <div className="flex items-end gap-3 mt-3">
                      <div>
                        <span className="text-[12px] font-sans text-stone-400 block">From</span>
                        <span className="text-2xl font-serif text-stone-900">${d.price}</span>
                        <span className="text-[12px] font-sans text-stone-400 ml-1">CAD</span>
                      </div>
                    </div>
                    <span className="text-[13px] font-sans font-semibold text-amber-warmth mt-3 inline-block">
                      Book this deal →
                    </span>
                  </a>
                ))}
              </div>
            )}

            {!loading && deals.length === 0 && !error && (
              <div className="text-center py-16">
                <span className="text-4xl">🌍</span>
                <h3 className="font-serif text-stone-700 mt-3">No deals found from {selectedOrigin}</h3>
                <p className="text-stone-400 font-sans text-sm">Try a different departure city or check back later.</p>
              </div>
            )}

            <p className="text-center text-sm font-sans text-stone-400 mt-8 max-w-lg mx-auto leading-relaxed">
              Prices are from recent search data and may change. Click through to see live pricing and book.
              SkyScout earns a commission on bookings at no extra cost to you.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
