# SkyScout.ca — Cheap Flights from Canada

A flight deals platform for Canadian travelers. Powered by the **Travelpayouts / Aviasales API**. Earns affiliate commission on every booking.

## Quick Start

```bash
# 1. Install
npm install

# 2. Set up your API credentials
cp .env.example .env.local
# Edit .env.local with your Travelpayouts token and marker

# 3. Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Your Credentials

Add these to `.env.local`:

```
TRAVELPAYOUTS_TOKEN=your_new_token_here
TRAVELPAYOUTS_MARKER=721635
```

Get your token at: https://www.travelpayouts.com/programs/100/tools/api

**Important:** The token is server-side only (never exposed to the browser). All API calls go through Next.js API routes at `/api/flights` and `/api/destinations`.

## Deploy to Vercel

```bash
npm install -g vercel
vercel

# Add env vars:
vercel env add TRAVELPAYOUTS_TOKEN
vercel env add TRAVELPAYOUTS_MARKER
```

## How You Earn Money

Every "Book" link contains your marker ID (721635). When a user clicks through and books a flight on Aviasales, you earn a commission (typically 50-70% of Travelpayouts' revenue share). Bookings are tracked automatically.

## API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `/aviasales/v3/prices_for_dates` | Search flights on specific routes |
| `/v1/prices/cheap` | Cheapest flights anywhere from a city |
| `/v1/city-directions` | Popular destinations from a city |

All data is cached price data from recent searches. Rate limit: 100 requests/hour per IP.

## Project Structure

```
skyscout/
├── app/
│   ├── api/
│   │   ├── flights/route.js      # Server-side flight search
│   │   └── destinations/route.js # Server-side popular destinations
│   ├── page.js                   # Home
│   ├── search/page.js            # Flight search + results
│   ├── deals/page.js             # Live deals by city
│   ├── blog/                     # SEO blog posts
│   ├── about/page.js
│   ├── contact/page.js
│   ├── privacy/page.js
│   └── terms/page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── FlightCard.js
├── lib/
│   └── helpers.js                # Client-side utilities
└── .env.example
```

## Next Steps

- [ ] Register domain (skyscout.ca)
- [ ] Deploy to Vercel and add custom domain
- [ ] Set up Google Analytics
- [ ] Write monthly blog posts for SEO
- [ ] Set up email newsletter (ConvertKit/Mailchimp)
- [ ] Post deals on social media

## License

MIT
