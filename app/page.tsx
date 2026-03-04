import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevate Labs | Precision Marketing & Creative Excellence",
  description:
    "Elevate Labs is a high-performance digital marketing agency dedicated to scaling brands. We fuse data-driven precision with creative storytelling.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
