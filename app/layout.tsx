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
  title: {
    default:
      "Elevate Labs Media | Best Digital Marketing & Creative Agency in UAE",
    template: "%s | Elevate Labs Media",
  },
  description:
    "Elevate Labs Media: Best digital marketing & creative agency in UAE. Scaling brands in Dubai & Abu Dhabi with precision web development. Scale your brand today!",
  keywords: [
    "digital marketing agency UAE",
    "creative agency Dubai",
    "best marketing agency UAE",
    "best marketing agency Abu Dhabi",
    "web development UAE",
    "web development Dubai",
    "web development Abu Dhabi",
    "branding Dubai",
    "e-commerce solutions UAE",
    "SEO services UAE",
    "Elevate Labs Media",
    "media production Dubai",
    "cinematic photography UAE",
    "creative photography Dubai",
    "professional photography Abu Dhabi",
    "commercial photography UAE",
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
    type: "website",
    locale: "en_US",
    url: "https://elevatelabsmedia.ae",
    siteName: "Elevate Labs Media",
    title:
      "Elevate Labs Media | Best Digital Marketing & Creative Agency in UAE",
    description:
      "Best digital marketing & web development agency in UAE. Scaling brands in Dubai & Abu Dhabi with precision. Scale your brand today!",
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
    title:
      "Elevate Labs Media | Best Digital Marketing & Creative Agency in UAE",
    description:
      "Best digital marketing & web development agency in UAE. Scaling brands in Dubai & Abu Dhabi with precision. Scale your brand today!",
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
