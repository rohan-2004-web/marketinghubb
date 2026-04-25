import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import FloatingIcons from "./components/FloatingIcons";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketingHubb - Best Digital Marketing Agency in Varanasi",
  description: "Professional digital marketing services in Varanasi. Boost your online presence with our expert team.",
  keywords: [
    "best digital marketing agency in varanasi",
    "seo service in Varanasi",
    "digital marketing services varanasi",
    "local seo varanasi",
  ],
  metadataBase: new URL('https://www.marketinghubb.in'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MarketingHubb - Best Digital Marketing Agency in Varanasi",
    description: "Professional digital marketing services in Varanasi. Boost your online presence with our expert team.",
    url: "https://www.marketinghubb.in",
    siteName: "MarketingHubb",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MarketingHubb",
              "description": "MarketingHubb is the best digital marketing agency in Varanasi offering SEO, social media, PPC, web design and local marketing services.",
              "url": "https://www.marketinghubb.in",
              "telephone": "+917307260253",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mahmoorganj",
                "addressLocality": "Varanasi",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "221010",
                "addressCountry": "IN"
              },
              "areaServed": "Varanasi",
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/"
              ]
            })
          }}
        />
        <Navigation />
        {children}
        <Footer />
        <FloatingIcons />
      </body>
    </html>
  );
}
