"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-12 md:py-20 px-4 md:px-10 min-h-[60vh] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          key="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div id="blog-header" className="mb-16 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-primary border border-primary/30 rounded-full bg-accent/10 backdrop-blur-sm tracking-wider uppercase">
              ✱ Latest Insights
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
              Insights? <br />
              <span className="text-primary italic">Our Journal.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Insights from the <strong>best marketing agency in UAE</strong>.
              Exploring digital innovation and{" "}
              <strong>digital marketing Dubai</strong> strategies.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="h-full"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors leading-tight mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {blog.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
