import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SkyScout.ca — Find Cheap Flights from Canada to Anywhere",
  description:
    "SkyScout helps Canadian travelers find the cheapest flights worldwide. Search 200+ airlines, compare prices from 50+ agencies, and book with zero service fees.",
  keywords: [
    "cheap flights Canada",
    "cheap flights Toronto",
    "cheap flights Vancouver",
    "flight deals Canada",
    "budget travel Canada",
    "YYZ flights",
    "cheap international flights",
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
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  // Replace with YOUR White Label ID from Travelpayouts dashboard
  const wlId = process.env.NEXT_PUBLIC_WL_ID || "1";

  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
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
      <body>
        {children}

        {/* Travelpayouts White Label Widget — loaded on every page */}
        <Script
          id="tpwl-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.TPWL_CONFIGURATION = {
                ...window.TPWL_CONFIGURATION,
                resultsURL: "/search",
              };
            `,
          }}
        />
        <Script
          id="tpwl-main"
          strategy="afterInteractive"
          src={`https://tpwgts.com/wl_web/main.js?wl_id=${wlId}`}
          type="module"
        />
      </body>
    </html>
  );
}
