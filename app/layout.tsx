import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevatelabsmedia.ae"),
  title: "Elevate Labs Media | Digital Marketing & Advertising Agency in Abu Dhabi",
  description:
    "Elevate Labs Media is a leading digital marketing, branding, and advertising agency in Abu Dhabi helping brands scale with SEO, performance marketing, web development, and creative photography and media production across the UAE.",
  keywords: [
    "digital marketing agency Abu Dhabi",
    "advertising agency Abu Dhabi",
    "marketing agency UAE",
    "branding Abu Dhabi",
    "branding agency UAE",
    "performance marketing UAE",
    "SEO agency Abu Dhabi",
    "web development Abu Dhabi",
    "creative photography Abu Dhabi",
    "media production Abu Dhabi",
    "cinematic photography UAE",
    "commercial photography UAE",
    "e-commerce solutions UAE",
    "SEO services UAE",
    "Elevate Labs Media",
    "creative agency Abu Dhabi",
    "best marketing agency UAE",
    "best marketing agency Abu Dhabi",
    "web development UAE",
  ],
  authors: [{ name: "Elevate Labs Media Team" }],
  creator: "Elevate Labs Media",
  publisher: "Elevate Labs Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Elevate Labs Media",
    description:
      "Leading digital marketing & advertising agency in Abu Dhabi helping brands scale.",
    url: "https://www.elevatelabsmedia.ae",
    siteName: "Elevate Labs Media",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elevate Labs Media - Best Digital Marketing Agency in UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Labs Media | Digital Marketing & Advertising Agency in Abu Dhabi",
    description:
      "Leading digital marketing & advertising agency in Abu Dhabi helping brands scale.",
    images: ["/og-image.png"],
    creator: "@elevatelabsmedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <CustomCursor />
        <LenisScroll>{children}</LenisScroll>
        <Navigation />
        <WhatsAppButton />
      </body>
    </html>
  );
}
