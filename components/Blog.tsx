"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Why We're the Best Marketing Agency in UAE for 2026",
    category: "Agency Excellence",
    date: "March 5, 2026",
    description:
      "Discover how our data-driven strategies and creative excellence make us the top choice for brands looking to dominate the UAE market across Dubai and Abu Dhabi.",
  },
  {
    title: "Digital Transformation in Abu Dhabi: A Strategic Guide",
    category: "Market Expansion",
    date: "Feb 28, 2026",
    description:
      "From web development to performance marketing, see how we're helping Abu Dhabi-based businesses scale their digital presence with precision and localized expertise.",
  },
  {
    title: "Creative Photography in UAE: Capturing Brand Excellence",
    category: "Media Production",
    date: "Feb 15, 2026",
    description:
      "Cinematic photography and visual storytelling that sets Dubai and Abu Dhabi brands apart. Learn why visual quality is the new standard for the best marketing agency in UAE.",
  },
  {
    title: "The Future of Web Development and SEO in Dubai",
    category: "Tech & SEO",
    date: "Jan 30, 2026",
    description:
      "High-performance websites and technical SEO strategies tailored for the competitive Dubai market. How the best marketing agency UAE stays ahead of the digital curve.",
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
          className="mb-16 md:mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 text-xl mb-6">
            <span className="text-primary animate-spin">✱</span>
            <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Latest Insights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05] uppercase">
            Insights? <br />
            <span className="text-primary">Our Journal.</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed mx-auto">
            Insights from the best marketing agency in UAE. Exploring digital
            innovation and growth strategies across Dubai and Abu Dhabi.
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
