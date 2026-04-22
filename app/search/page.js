"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlightCard from "@/components/FlightCard";
import { AIRPORTS } from "@/lib/helpers";

function todayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split("T")[0];
}

function SearchContent() {
  const params = useSearchParams();

  const [origin, setOrigin] = useState("YYZ");
  const [destination, setDestination] = useState(params.get("to") || "");
  const [dateFrom, setDateFrom] = useState(todayPlus(7));
  const [dateTo, setDateTo] = useState(todayPlus(21));
  const [currency, setCurrency] = useState("CAD");
  const [directOnly, setDirectOnly] = useState(false);

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [sortBy, setSortBy] = useState("price");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setFlights([]);
    setSearched(true);

    try {
      const p = new URLSearchParams({
        origin,
        currency,
        direct: directOnly.toString(),
        limit: "30",
      });
      if (destination) p.set("destination", destination);
      if (dateFrom) p.set("depart_date", dateFrom);
      if (dateTo) p.set("return_date", dateTo);

      const res = await fetch(`/api/flights?${p}`);
      const data = await res.json();

      if (!data.success) throw new Error(data.error || "Search failed");
      setFlights(data.data || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const sorted = [...flights].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "duration") return (a.duration || 9999) - (b.duration || 9999);
    if (sortBy === "stops") return (a.transfers || 0) - (b.transfers || 0);
    return 0;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen py-10 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">Find your next deal</h1>
          <p className="text-[15px] font-sans text-stone-500 mb-8">
            Leave destination blank to explore the cheapest flights anywhere in the world. Powered by Aviasales via Travelpayouts.
          </p>

          {/* SEARCH FORM */}
          <div className="bg-white rounded-xl border border-stone-200 p-7 shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1.5">From</label>
                <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-sm font-sans">
                  {AIRPORTS.map((a) => (
                    <option key={a.code} value={a.code}>{a.code} — {a.city}, {a.province}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1.5">To (blank = anywhere)</label>
                <input
                  type="text"
                  placeholder="e.g. LHR, CDG, CUN"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value.toUpperCase())}
                  className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-sm font-sans"
                />
              </div>
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1.5">Depart</label>
                <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-sm font-sans" />
              </div>
              <div>
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1.5">Return</label>
                <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-sm font-sans" />
              </div>
            </div>

            <div className="flex gap-4 items-end flex-wrap mb-4">
              <div className="flex-1 min-w-[120px]">
                <label className="block text-[11px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1.5">Currency</label>
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-stone-300 bg-stone-50 text-sm font-sans">
                  {["CAD", "USD", "EUR", "GBP"].map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm font-sans text-stone-500 pb-2.5 cursor-pointer">
                <input type="checkbox" checked={directOnly} onChange={(e) => setDirectOnly(e.target.checked)} className="accent-amber-700" />
                Direct flights only
              </label>
            </div>

            <button
              className="w-full py-3.5 bg-stone-900 text-stone-50 rounded-lg text-base font-sans font-semibold border-none cursor-pointer hover:bg-stone-800 transition-colors disabled:opacity-50"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : `Search Flights from ${origin}`}
            </button>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="text-center py-20">
              <div className="animate-float text-5xl">✈</div>
              <h3 className="text-stone-700 mt-4 font-serif">Scanning worldwide routes...</h3>
              <p className="text-stone-400 font-sans text-sm">Finding the cheapest deals from cached price data</p>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-sans mb-5">
              ⚠️ {error}
            </div>
          )}

          {/* RESULTS */}
          {!loading && flights.length > 0 && (
            <>
              <div className="flex justify-between items-center mb-5 flex-wrap gap-3">
                <h2 className="text-xl font-serif m-0">
                  {flights.length} deal{flights.length !== 1 ? "s" : ""} found from {origin}
                </h2>
                <div className="flex gap-1.5">
                  {[
                    { key: "price", label: "💰 Cheapest" },
                    { key: "duration", label: "⏱ Fastest" },
                    { key: "stops", label: "✈ Fewest stops" },
                  ].map((s) => (
                    <button
                      key={s.key}
                      onClick={() => setSortBy(s.key)}
                      className={`px-3.5 py-1.5 rounded-md text-[12px] font-sans border cursor-pointer transition-colors ${
                        sortBy === s.key
                          ? "border-amber-warmth bg-amber-50 text-amber-warmth font-semibold"
                          : "border-stone-200 bg-white text-stone-500"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {sorted.map((f, i) => (
                <FlightCard key={f.id || i} flight={f} currency={currency} rank={i} />
              ))}

              <p className="text-center text-[13px] font-sans text-stone-400 mt-6">
                Prices are from recent search cache and may vary. Click any deal to see live pricing.
              </p>
            </>
          )}

          {/* EMPTY */}
          {searched && !loading && !error && flights.length === 0 && (
            <div className="text-center py-20">
              <span className="text-5xl">🌎</span>
              <h3 className="text-stone-700 mt-3 font-serif">No flights found</h3>
              <p className="text-stone-400 font-sans text-sm">
                Try a different route, wider date range, or leave destination blank to search everywhere.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans text-stone-400">Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
