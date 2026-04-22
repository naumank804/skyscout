import { NextResponse } from "next/server";

const TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
const MARKER = process.env.TRAVELPAYOUTS_MARKER;
const BASE = "https://api.travelpayouts.com";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const origin = searchParams.get("origin") || "YYZ";
  const destination = searchParams.get("destination") || "";
  const departDate = searchParams.get("depart_date") || "";
  const returnDate = searchParams.get("return_date") || "";
  const currency = searchParams.get("currency") || "CAD";
  const direct = searchParams.get("direct") || "false";
  const limit = searchParams.get("limit") || "30";
  const page = searchParams.get("page") || "1";

  if (!TOKEN) {
    return NextResponse.json({ error: "API token not configured" }, { status: 500 });
  }

  try {
    let results = [];

    if (destination && destination !== "-") {
      // ── Search specific route ──
      // Use v3 prices_for_dates for best results
      const params = new URLSearchParams({
        origin,
        destination,
        currency,
        direct,
        limit,
        page,
        sorting: "price",
        token: TOKEN,
      });
      if (departDate) params.set("departure_at", departDate);
      if (returnDate) params.set("return_at", returnDate);

      const res = await fetch(`${BASE}/aviasales/v3/prices_for_dates?${params}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
      }
      const data = await res.json();

      if (data.success && data.data) {
        results = data.data.map((t) => ({
          id: `${t.origin}-${t.destination}-${t.departure_at}`,
          origin: t.origin,
          destination: t.destination,
          originAirport: t.origin_airport,
          destinationAirport: t.destination_airport,
          price: t.value,
          currency: data.currency || currency.toLowerCase(),
          airline: t.gate, // booking gate
          airlineCode: t.airline,
          flightNumber: t.flight_number,
          departureAt: t.departure_at,
          returnAt: t.return_at,
          transfers: t.number_of_changes,
          duration: t.duration,
          durationTo: t.duration_to,
          durationBack: t.duration_back,
          link: t.link,
          bookingLink: `https://www.aviasales.com/search/${t.link}?marker=${MARKER}`,
        }));
      }
    } else {
      // ── Cheapest to anywhere ──
      const params = new URLSearchParams({
        origin,
        destination: "-",
        currency,
        token: TOKEN,
      });
      if (departDate) params.set("depart_date", departDate);
      if (returnDate) params.set("return_date", returnDate);

      const res = await fetch(`${BASE}/v1/prices/cheap?${params}`);
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`API error ${res.status}: ${text}`);
      }
      const data = await res.json();

      if (data.success && data.data) {
        for (const [destCode, stops] of Object.entries(data.data)) {
          for (const [stopKey, ticket] of Object.entries(stops)) {
            results.push({
              id: `${origin}-${destCode}-${ticket.departure_at}`,
              origin,
              destination: destCode,
              price: ticket.price,
              currency: data.currency || currency.toLowerCase(),
              airlineCode: ticket.airline,
              flightNumber: ticket.flight_number,
              departureAt: ticket.departure_at,
              returnAt: ticket.return_at,
              transfers: parseInt(stopKey),
              link: null,
              bookingLink: `https://www.aviasales.com/search/${origin}${ticket.departure_at?.slice(0,10).replace(/-/g,"")}${destCode}1?marker=${MARKER}`,
            });
          }
        }
        // Sort by price
        results.sort((a, b) => a.price - b.price);
      }
    }

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
