# SkyScout.ca — Cheap Flights from Canada

A flight search platform for Canadian travelers powered by **Travelpayouts White Label**. Users search and compare flights from 200+ airlines directly on your site — with city name autocomplete, passenger selection, cabin class, and full results. You earn commission on every booking.

## What Changed (White Label Version)

The old version used raw API calls with airport codes only. This version uses **Travelpayouts White Label Web Widget**, which gives you:

- **City name autocomplete** — type "Paris" not "CDG"
- **Passenger selection** — adults, children, infants
- **Cabin class** — economy, business, first
- **Full search results on your site** — users don't leave
- **Booking links with your marker** — automatic commission tracking
- **50+ booking agencies compared** — not just one source

## Setup (10 minutes)

### 1. Create your White Label in Travelpayouts

1. Log in to [travelpayouts.com](https://www.travelpayouts.com)
2. Go to **Tools → White Label Web**
3. Click **Create White Label**
4. Choose **Widget** type (embeds into your existing site)
5. Enter your domain: `skyscout-two.vercel.app` (or your custom domain)
6. Customize colors, language, currency (set to CAD)
7. Save — note your **White Label ID** (number in the URL)

### 2. Configure & Deploy

```bash
cd skyscout
npm install

# Create .env.local
cp .env.example .env.local

# Edit .env.local — add your White Label ID:
# NEXT_PUBLIC_WL_ID=12345

npm run dev   # Test locally
vercel         # Deploy
```

### 3. Add Environment Variables in Vercel

In Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_WL_ID` = your White Label ID number
- `TRAVELPAYOUTS_MARKER` = 721635

## How It Works

1. User visits your site → sees Travelpayouts search form (city autocomplete, dates, passengers, class)
2. User searches → results appear on your site via the WL widget
3. User clicks "Book" → redirected to booking agency with your marker
4. User books → you earn commission automatically

## Project Structure

```
skyscout/
├── app/
│   ├── layout.js           # Root layout — loads WL script globally
│   ├── page.js             # Home — hero with embedded search
│   ├── search/page.js      # Search page with full WL widget
│   ├── results/page.js     # Results page (WL injects results here)
│   ├── blog/               # SEO blog posts
│   ├── about/page.js
│   ├── contact/page.js
│   ├── privacy/page.js
│   └── terms/page.js
├── components/
│   ├── Navbar.js
│   ├── Footer.js
│   └── WhiteLabelSearch.js  # WL search form container
├── jsconfig.json            # Path aliases
└── .env.example
```

## Customization

### Change WL colors/branding
Go to Travelpayouts Dashboard → White Label Web → Design tab. Change colors, add your logo, etc.

### Add hotel search
You can add hotel widgets to your WL page from the Travelpayouts dashboard.

## Revenue Model

- Commission on every flight booking (varies by agency, typically 1-3% of ticket price)
- Cookie lifetime: 1-180 days depending on the program
- Travelpayouts pays via PayPal, bank transfer, or other methods
- Minimum payout: $50

## License

MIT
