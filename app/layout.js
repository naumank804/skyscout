import "./globals.css";
<<<<<<< HEAD
=======
import Script from "next/script";
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87

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
<<<<<<< HEAD
=======
    "YYZ flights",
    "cheap international flights",
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
  ],
  openGraph: {
    title: "SkyScout.ca — Cheap Flights from Canada",
    description:
<<<<<<< HEAD
      "Find impossibly cheap flights from Canadian airports to anywhere in the world.",
=======
      "Find impossibly cheap flights from Canadian airports to anywhere in the world. Zero fees, 200+ airlines.",
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
    url: "https://skyscout.ca",
    siteName: "SkyScout",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
<<<<<<< HEAD
=======
  // Replace with YOUR White Label ID from Travelpayouts dashboard
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
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
<<<<<<< HEAD

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
                host: "${process.env.NEXT_PUBLIC_SITE_URL || ""}",
                marker: "${process.env.TRAVELPAYOUTS_MARKER || "721635"}",
=======
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
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
              };
            `,
          }}
        />
<<<<<<< HEAD
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
=======
        <Script
          id="tpwl-main"
          strategy="afterInteractive"
          src={`https://tpwgts.com/wl_web/main.js?wl_id=${wlId}`}
          type="module"
        />
      </body>
>>>>>>> 97c5df1ef886039652ece197ded8a59bb3fc2f87
    </html>
  );
}
