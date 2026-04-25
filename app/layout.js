import "./globals.css";


export const metadata = {
  title: "SkyScoutTravel.com — Find Cheap Flights from Canada to Anywhere",
  description:
    "SkyScout helps Canadian travelers find the cheapest flights worldwide. Search 200+ airlines, compare prices from 50+ agencies, and book with zero service fees.",
  keywords: [
    "cheap flights Canada",
    "cheap flights Toronto",
    "cheap flights Vancouver",
    "flight deals Canada",
    "budget travel Canada",
  ],
  openGraph: {
    title: "SkyScoutTravel.com — Cheap Flights from Canada",
    description:
      "Find impossibly cheap flights from Canadian airports to anywhere in the world.",
    url: "https://skyscouttravel.com",
    siteName: "SkyScoutTravel    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
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

        {/* 
          Travelpayouts White Label — MUST be in <head> as a raw script,
          NOT using next/script (which breaks on SPA navigation).
          Force English locale and CAD currency to override geo-detection.
        */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.TPWL_CONFIGURATION = {
                  locale: "en",
                  currency: "CAD",
                  marker: "721635",
                  resultsURL: "https://skyscouttravel.com/search",
              };
                `,
              }}
            />
        <script
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.type = "module";
                script.src = "https://tpwgts.com/wl_web/main.js?wl_id=${wlId}";
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
