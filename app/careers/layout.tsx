import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Elevate Labs",
  description:
    "Explore exciting career opportunities at Elevate Labs. Join our creative team and grow your career in digital marketing, branding, design, and media production.",
  openGraph: {
    title: "Careers at Elevate Labs",
    description:
      "Explore exciting career opportunities at Elevate Labs. Join our creative team and grow your career in digital marketing, branding, design, and media production.",
    type: "website",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
