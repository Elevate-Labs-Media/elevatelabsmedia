import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Elevate Labs",
  description:
    "Find answers to common questions about our digital marketing, web development, and branding services.",
  alternates: {
    canonical: "/faq",
  },
};

const FAQPage = () => {
  return (
    <div className="min-h-screen pt-32">
      <FAQ />
    </div>
  );
};

export default FAQPage;
