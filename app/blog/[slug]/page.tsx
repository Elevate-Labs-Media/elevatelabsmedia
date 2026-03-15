import { blogs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((p) => p.slug === slug);
  if (!blog) return { title: "Not Found" };
  return { title: `${blog.title} | Elevate Labs Media`, description: blog.description };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogDetailClient blog={blog} />
      <Footer />
    </>
  );
}
