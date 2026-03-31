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
    "seo company in varanasi",
    "digital marketing services varanasi",
    "local seo varanasi",
  ],
  metadataBase: new URL('https://marketinghubb.vercel.app'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MarketingHubb - Best Digital Marketing Agency in Varanasi",
    description: "Professional digital marketing services in Varanasi. Boost your online presence with our expert team.",
    url: "https://marketinghubb.vercel.app",
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
        <Navigation />
        {children}
        <Footer />
        <FloatingIcons />
      </body>
    </html>
  );
}
