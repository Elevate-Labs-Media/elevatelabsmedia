"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "The Future of Digital Marketing in the UAE",
    category: "Trends",
    date: "Oct 24, 2025",
    description:
      "How AI and automation are reshaping the digital landscape in Dubai and Abu Dhabi.",
  },
  {
    title: "Why Your Brand Needs a Visual Identity Overhaul",
    category: "Branding",
    date: "Oct 18, 2025",
    description:
      "In a crowded market, standing out is not just an option—it's a necessity.",
  },
  {
    title: "SEO Strategies for Dubai Real Estate",
    category: "SEO",
    date: "Oct 10, 2025",
    description:
      "Specific tactics to rank higher in one of the most competitive sectors in the region.",
  },
  {
    title: "Video Content: The King of Engagement",
    category: "Media Production",
    date: "Sep 28, 2025",
    description:
      "Why high-quality video production is essential for social media growth in 2025.",
  },
];

const Blog = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">INSIGHTS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mb-20">
            Thoughts, trends, and strategies from the forefront of digital
            innovation in the UAE.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <span className="text-primary font-mono text-sm">
                  {blog.category}
                </span>
                <span className="text-gray-500 font-mono text-sm">
                  {blog.date}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors flex items-start gap-4">
                {blog.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {blog.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
