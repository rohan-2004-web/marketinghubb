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
    canonical: "https://www.marketinghubb.in/",
  },
  openGraph: {
    title: "MarketingHubb - Best Digital Marketing Agency in Varanasi",
    description: "Professional digital marketing services in Varanasi. Boost your online presence with our expert team.",
    url: "https://www.marketinghubb.in",
    siteName: "MarketingHubb",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.marketinghubb.in/image/logo.jpg",
        width: 1200,
        height: 630,
        alt: "MarketingHubb logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketingHubb - Best Digital Marketing Agency in Varanasi",
    description: "Professional digital marketing services in Varanasi. Boost your online presence with our expert team.",
    images: ["https://www.marketinghubb.in/image/logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0c62a9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
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
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/",
                "https://www.instagram.com/",
                "https://www.linkedin.com/"
              ],
              "image": "https://www.marketinghubb.in/image/logo.jpg",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.marketinghubb.in/image/logo.jpg",
                "width": 250,
                "height": 60
              }
            }),
          }}
        />
        <Navigation />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
