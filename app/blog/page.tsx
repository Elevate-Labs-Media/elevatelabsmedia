import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Insights & Updates from Elevate Labs",
  description:
    "Stay updated with the latest trends in digital marketing, web development, and branding from the Elevate Labs team.",
  alternates: {
    canonical: "/blog",
  },
};

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-32">
      <Blog />
    </div>
  );
};

export default BlogPage;
