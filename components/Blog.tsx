"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Navigating the 2026 UAE Advertiser Permit for Creators",
    category: "Influencer Marketing",
    date: "March 5, 2026",
    description:
      "A complete guide to the new UAE Media Council regulations and how brands must adapt their digital influencer strategies to stay compliant.",
  },
  {
    title: "Dubai's Emergence as the Global B2B Brands Hub",
    category: "Market Expansion",
    date: "Feb 28, 2026",
    description:
      "Why international tech and fintech companies are aggressively expanding their digital footprint and branding efforts into the UAE.",
  },
  {
    title: "Hyper-Personalized Branding: The New Standard in the UAE",
    category: "Branding",
    date: "Feb 15, 2026",
    description:
      "How AI-driven audience insights are helping top UAE brands move strictly beyond generic messaging to craft highly targeted visual identities.",
  },
  {
    title: "The Dominance of Short-Form Video in Middle East SEO",
    category: "SEO & Content",
    date: "Jan 30, 2026",
    description:
      "Video isn't just for engagement anymore. Discover how optimizing reels and short-form video content is dominating search engine rankings in the UAE.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Blog = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 text-xl mb-6">
            <span className="text-primary animate-spin">✱</span>
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Latest Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05]">
            Our <span className="text-primary italic">Journal</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Thoughts, trends, and strategies from the forefront of digital
            innovation in the UAE.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group cursor-pointer p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] transition-colors relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
                <div className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center">
                  <ArrowUpRight strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6 w-full">
                <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-500 font-mono text-xs md:text-sm">
                  {blog.date}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight flex-grow pr-8">
                {blog.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-auto">
                {blog.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
