import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fyora Abel | Real Estate Agent in Addis Ababa | Aftaza Properties",
  description: "Expert real estate services in Addis Ababa with Aftaza Properties. Whether buying or selling, Fyora Abel is your trusted agent.",
  keywords: ["real estate agents", "property agent", "real estate marketing", "real estate", "realtor agent", "sell my property", "marketing for real estate agents", "real estate for sale", "real estate broker", "estate agent", "find a real estate agent", "best estate agents", "top real estate agents", "find a realtor", "local real estate agents", "real estate buyers", "best real estate agent", "real estate companies", "buyers agent", "property for sale", "free estate agents", "getting into real estate", "best estate agent in my area", "real estate agent career", "sell your property", "Apartment for sale", "Shop for sale"],
  openGraph: {
    title: "Fyora Abel | Real Estate Agent in Addis Ababa",
    description: "Expert real estate services in Addis Ababa with Aftaza Properties.",
    url: "https://example.com",
    siteName: "Fyora Abel Real Estate",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Placeholder for Google Ads conversion tracking snippet */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script> */}
        
        {/* Placeholder for GA4 snippet */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateAgent", "LocalBusiness"],
              name: "Fyora Abel - Real Estate Agent",
              image: "https://example.com/headshot.jpg",
              "@id": "https://example.com",
              url: "https://example.com",
              telephone: "+251900575151",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bole",
                addressLocality: "Addis Ababa",
                addressRegion: "Addis Ababa",
                addressCountry: "ET"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 8.9806,
                longitude: 38.7578
              },
              areaServed: ["Bole", "Kazanchis", "Old Airport", "CMC"],
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
