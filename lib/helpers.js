// ─── Client-side helpers ───
// All actual API calls go through /api/flights and /api/destinations
// server-side routes to keep the token secure.

export function formatDuration(minutes) {
  if (!minutes) return "—";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

export function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatShortDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export const AIRPORTS = [
  { code: "YYZ", city: "Toronto", province: "ON" },
  { code: "YVR", city: "Vancouver", province: "BC" },
  { code: "YUL", city: "Montreal", province: "QC" },
  { code: "YOW", city: "Ottawa", province: "ON" },
  { code: "YHM", city: "Hamilton", province: "ON" },
  { code: "YYC", city: "Calgary", province: "AB" },
  { code: "YEG", city: "Edmonton", province: "AB" },
  { code: "YWG", city: "Winnipeg", province: "MB" },
  { code: "YHZ", city: "Halifax", province: "NS" },
  { code: "YQB", city: "Quebec City", province: "QC" },
  { code: "YXE", city: "Saskatoon", province: "SK" },
  { code: "YQR", city: "Regina", province: "SK" },
  { code: "YYJ", city: "Victoria", province: "BC" },
  { code: "YKF", city: "Kitchener-Waterloo", province: "ON" },
];

// IATA city name lookup (common destinations)
export const CITY_NAMES = {
  LHR: "London", LGW: "London", STN: "London", LON: "London",
  CDG: "Paris", ORY: "Paris", PAR: "Paris",
  FCO: "Rome", ROM: "Rome",
  BCN: "Barcelona", MAD: "Madrid",
  AMS: "Amsterdam", FRA: "Frankfurt", MUC: "Munich",
  LIS: "Lisbon", OPO: "Porto",
  DUB: "Dublin", KEF: "Reykjavik",
  IST: "Istanbul", ATH: "Athens",
  BUD: "Budapest", PRG: "Prague", VIE: "Vienna",
  CUN: "Cancún", MEX: "Mexico City", PVR: "Puerto Vallarta",
  MBJ: "Montego Bay", NAS: "Nassau", PUJ: "Punta Cana",
  SJU: "San Juan", BOG: "Bogotá", MDE: "Medellín",
  LIM: "Lima", SCL: "Santiago", GRU: "São Paulo",
  BKK: "Bangkok", SIN: "Singapore", HKG: "Hong Kong",
  NRT: "Tokyo", KIX: "Osaka", ICN: "Seoul",
  DEL: "Delhi", BOM: "Mumbai", DXB: "Dubai",
  SYD: "Sydney", MEL: "Melbourne", AKL: "Auckland",
  JFK: "New York", LAX: "Los Angeles", SFO: "San Francisco",
  MIA: "Miami", FLL: "Fort Lauderdale", ORD: "Chicago",
  ATL: "Atlanta", SEA: "Seattle", BOS: "Boston",
  DFW: "Dallas", DEN: "Denver", LAS: "Las Vegas",
  YYZ: "Toronto", YVR: "Vancouver", YUL: "Montreal",
  YOW: "Ottawa", YYC: "Calgary", YEG: "Edmonton",
  YHZ: "Halifax", YWG: "Winnipeg",
  CPH: "Copenhagen", OSL: "Oslo", ARN: "Stockholm", HEL: "Helsinki",
  WAW: "Warsaw", BER: "Berlin", ZRH: "Zurich", GVA: "Geneva",
  EDI: "Edinburgh", MAN: "Manchester",
  CMB: "Colombo", KUL: "Kuala Lumpur", MNL: "Manila",
  HNL: "Honolulu", PPT: "Tahiti",
  CAI: "Cairo", JNB: "Johannesburg", CPT: "Cape Town",
  CMN: "Casablanca", RAK: "Marrakech",
};

export function getCityName(iata) {
  return CITY_NAMES[iata] || iata;
}
