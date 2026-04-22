import { NextResponse } from "next/server";

const TOKEN = process.env.TRAVELPAYOUTS_TOKEN;
const MARKER = process.env.TRAVELPAYOUTS_MARKER;
const BASE = "https://api.travelpayouts.com";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get("origin") || "YYZ";
  const currency = searchParams.get("currency") || "CAD";

  if (!TOKEN) {
    return NextResponse.json({ error: "API token not configured" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `${BASE}/v1/city-directions?origin=${origin}&currency=${currency}&token=${TOKEN}`
    );

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`API error ${res.status}: ${text}`);
    }

    const data = await res.json();
    let results = [];

    if (data.success && data.data) {
      results = Object.entries(data.data).map(([code, info]) => ({
        destination: code,
        origin: info.origin,
        price: info.price,
        transfers: info.transfers,
        airlineCode: info.airline,
        flightNumber: info.flight_number,
        departureAt: info.departure_at,
        returnAt: info.return_at,
        bookingLink: `https://www.aviasales.com/search/${info.origin}${info.departure_at?.slice(0,10).replace(/-/g,"")}${code}1?marker=${MARKER}`,
      }));
      results.sort((a, b) => a.price - b.price);
    }

    return NextResponse.json({ success: true, data: results, currency: data.currency });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
