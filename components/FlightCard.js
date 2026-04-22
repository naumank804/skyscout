"use client";

import { formatDuration, formatShortDate, getCityName } from "@/lib/helpers";

export default function FlightCard({ flight, currency, rank }) {
  const isHot = rank < 3;
  const cityName = getCityName(flight.destination);
  const stops = flight.transfers ?? 0;

  return (
    <a
      href={flight.bookingLink}
      target="_blank"
      rel="noreferrer noopener"
      className="block bg-white rounded-xl border border-stone-200 mb-2.5 hover-glow overflow-hidden transition-shadow no-underline text-stone-900"
      style={{ borderLeft: isHot ? "4px solid #D4A373" : "4px solid transparent" }}
    >
      <div className="p-5 flex items-center justify-between flex-wrap gap-4">
        {/* Destination */}
        <div className="min-w-[140px]">
          {isHot && (
            <span className="text-[10px] font-bold font-sans px-2 py-0.5 rounded bg-amber-50 text-amber-warmth tracking-wide inline-block mb-1">
              TOP DEAL
            </span>
          )}
          <h3 className="text-xl font-serif m-0">{cityName}</h3>
          <span className="text-[13px] font-sans text-stone-400">
            {flight.origin} → {flight.destination}
          </span>
        </div>

        {/* Meta */}
        <div className="flex gap-5 flex-wrap font-sans text-[13px] text-stone-500">
          <span>📅 {formatShortDate(flight.departureAt)}</span>
          {flight.returnAt && (
            <span>↩ {formatShortDate(flight.returnAt)}</span>
          )}
          {flight.duration ? (
            <span>⏱ {formatDuration(flight.duration)}</span>
          ) : null}
          <span>
            {stops === 0
              ? "✅ Direct"
              : `🔄 ${stops} stop${stops > 1 ? "s" : ""}`}
          </span>
          {flight.airlineCode && (
            <span className="flex items-center gap-1">
              <img
                src={`https://pics.avs.io/36/36/${flight.airlineCode}.png`}
                alt={flight.airlineCode}
                width={18}
                height={18}
                className="rounded"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              {flight.airlineCode}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="text-right min-w-[100px]">
          <span className="block text-[11px] font-sans text-stone-400 uppercase">
            {currency}
          </span>
          <span className="text-[28px] font-serif text-stone-900">
            ${flight.price}
          </span>
          <span className="block text-[11px] font-sans text-amber-warmth font-semibold">
            Book →
          </span>
        </div>
      </div>
    </a>
  );
}
