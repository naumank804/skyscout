import "./globals.css";

export const metadata = {
  title: "SkyScout.ca — Find Cheap Flights from Canada to Anywhere",
  description:
    "SkyScout helps Canadian travelers find the cheapest flights worldwide. Search 200+ airlines, set price alerts, and book with zero service fees. Flights from Toronto, Vancouver, Montreal & more.",
  keywords: [
    "cheap flights Canada",
    "cheap flights Toronto",
    "cheap flights Vancouver",
    "flight deals Canada",
    "budget travel Canada",
    "YYZ flights",
    "cheap international flights",
    "flight search Canada",
  ],
  openGraph: {
    title: "SkyScout.ca — Cheap Flights from Canada",
    description:
      "Find impossibly cheap flights from Canadian airports to anywhere in the world. Zero fees, 200+ airlines.",
    url: "https://skyscout.ca",
    siteName: "SkyScout",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyScout.ca — Cheap Flights from Canada",
    description:
      "Find impossibly cheap flights from Canadian airports to anywhere in the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://skyscout.ca",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <head>
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
