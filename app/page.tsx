import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevate Labs | Building What's Next in Digital & Marketing",
  description:
    "We build high-performance digital systems and data-driven marketing solutions. Enterprise digital solutions & growth-driven marketing.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
