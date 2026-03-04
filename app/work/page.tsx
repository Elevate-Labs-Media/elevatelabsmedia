import Work from "@/components/Work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Portfolio of Digital Excellence | Elevate Labs",
  description:
    "Explore our portfolio of successful projects spanning digital marketing, web development, and creative design.",
  alternates: {
    canonical: "/work",
  },
};

const WorkPage = () => {
  return (
    <div className="min-h-screen pt-32">
      <Work />
    </div>
  );
};

export default WorkPage;
