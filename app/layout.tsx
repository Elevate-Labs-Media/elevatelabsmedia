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
  metadataBase: new URL("https://elevatelabs.media"), // Replace with actual production URL
  title: {
    default: "Elevate Labs | Precision Marketing & Creative Excellence",
    template: "%s | Elevate Labs",
  },
  description:
    "Elevate Labs is a high-performance digital marketing agency dedicated to scaling brands. We fuse data-driven precision with creative storytelling.",
  keywords: [
    "digital marketing",
    "web development",
    "branding",
    "e-commerce",
    "SEO",
    "Elevate Labs",
    "media production",
  ],
  authors: [{ name: "Elevate Labs Team" }],
  creator: "Elevate Labs",
  publisher: "Elevate Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elevatelabs.media",
    siteName: "Elevate Labs",
    title: "Elevate Labs | Enterprise Digital Solutions & Growth Marketing",
    description:
      "Elevate Your Online Presence with High-Performance Digital Systems.",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I will create a placeholder task
        width: 1200,
        height: 630,
        alt: "Elevate Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Labs | Enterprise Digital Solutions & Growth Marketing",
    description:
      "Elevate Your Online Presence with High-Performance Digital Systems.",
    images: ["/og-image.png"],
    creator: "@elevatelabs", // If applicable
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
