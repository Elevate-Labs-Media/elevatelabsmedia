"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  description: string;
  fullContent: React.ReactNode;
}

const blogs: BlogPost[] = [
  {
    title: "Why We're the Best Marketing Agency in UAE for 2026",
    category: "Agency Excellence",
    date: "March 5, 2026",
    description:
      "Discover how our data-driven strategies and creative excellence make us the top choice for brands looking to dominate the UAE market.",
    fullContent: (
      <div className="space-y-6">
        <p>In the rapidly evolving landscape of 2026, being the <strong>best marketing agency in UAE</strong> requires more than just standard digital services; it demands a fusion of data-driven precision and creative storytelling. At Elevate Labs Media, we have redefined what a <strong>marketing agency UAE</strong> should be by focusing on high-impact brand activations and localized strategy.</p>
        <h4 className="text-xl font-bold text-white uppercase flex items-center gap-2 mt-8">
          <span className="text-primary tracking-tighter italic">Strategic Growth</span> in Dubai & Abu Dhabi
        </h4>
        <p>Whether you are looking for <strong>digital marketing Dubai</strong> experts or strategic consultancy in Abu Dhabi, our team delivers measurable ROI. We understand the unique cultural and competitive nuances of the UAE market, ensuring your brand doesn&apos;t just join the conversation—it leads it.</p>
        <ul className="space-y-4 text-gray-400 mt-6">
          <li className="flex gap-4">
            <span className="text-primary font-black">/</span>
            <p><strong>Data-First Approach</strong>: Every campaign is backed by deep analytics and market research tailored for the UAE audience.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-black">/</span>
            <p><strong>Creative Excellence</strong>: Our designs are crafted to captivate the modern UAE consumer across all social platforms.</p>
          </li>
          <li className="flex gap-4">
            <span className="text-primary font-black">/</span>
            <p><strong>Global Standards</strong>: We bring international quality to the heart of the Middle East, setting the benchmark for <strong>marketing agency UAE</strong> services.</p>
          </li>
        </ul>
        <p>As the <strong>best marketing agency in UAE</strong>, our commitment is to your brand&apos;s long-term success, helping you scale through innovative performance marketing and cinematic brand narratives.</p>
      </div>
    ),
  },
  {
    title: "Digital Transformation in Abu Dhabi: A Strategic Guide",
    category: "Market Expansion",
    date: "Feb 28, 2026",
    description:
      "From web development to performance marketing, see how we're helping Abu Dhabi-based businesses scale their digital presence.",
    fullContent: (
      <div className="space-y-6">
        <p>Abu Dhabi is witnessing an unprecedented <strong>digital transformation</strong>. For businesses to remain competitive, a robust digital infrastructure is essential. As a leader in <strong>web development Abu Dhabi</strong>, we provide the technical foundation for brands to excel online.</p>
        <h4 className="text-xl font-bold text-white uppercase flex items-center gap-2 mt-8">
          <span className="text-primary tracking-tighter italic">High-Performance</span> Web Solutions
        </h4>
        <p>Our <strong>web development Abu Dhabi</strong> team focuses on speed, security, and user experience. We build more than just websites; we create high-performance digital platforms that serve as the heartbeat of your business strategy.</p>
        <p>Combined with our <strong>SEO services UAE</strong>, we ensure that your business is not only beautiful but also discoverable by your target audience. We bridge the gap between technical excellence and marketing success in the capital.</p>
        <p>Partnering with the <strong>best marketing agency in UAE</strong> gives you access to the latest technologies in AI integration, custom software, and scalable e-commerce solutions tailored specifically for the Abu Dhabi market.</p>
      </div>
    ),
  },
  {
    title: "Creative Photography in UAE: Capturing Brand Excellence",
    category: "Media Production",
    date: "Feb 15, 2026",
    description:
      "Cinematic photography and visual storytelling that sets Dubai and Abu Dhabi brands apart.",
    fullContent: (
      <div className="space-y-6">
        <p>In the age of visual social media, the quality of your brand&apos;s imagery is its primary calling card. Our <strong>media production Dubai</strong> studio specializes in <strong>cinematic photography UAE</strong>, capturing the essence of your brand with unmatched clarity and artistic vision.</p>
        <h4 className="text-xl font-bold text-white uppercase flex items-center gap-2 mt-8">
          <span className="text-primary tracking-tighter italic">Visual Storytelling</span> for Premium Brands
        </h4>
        <p>From high-end fashion shoots to grand architecture in Abu Dhabi, our <strong>creative photography UAE</strong> team uses state-of-the-art equipment and post-production techniques. We create visuals that aren&apos;t just seen—they&apos;re felt.</p>
        <p>As a <strong>marketing agency UAE</strong>, we integrate these visuals into your overall strategy, ensuring consistency across all touchpoints. High-quality media is the key to building trust and authority in the competitive luxury markets of Dubai and beyond.</p>
        <p>Discover how the <strong>best marketing agency in UAE</strong> can transform your brand&apos;s perception through world-class video production and cinematic storytelling.</p>
      </div>
    ),
  },
  {
    title: "The Future of Web Development and SEO in Dubai",
    category: "Tech & SEO",
    date: "Jan 30, 2026",
    description:
      "High-performance websites and technical SEO strategies tailored for the competitive Dubai market.",
    fullContent: (
      <div className="space-y-6">
        <p>The Dubai market is saturated with digital competition. To stand out, you need a partner who understands the intricacies of <strong>SEO services Dubai</strong> and modern <strong>web development Dubai</strong> standards.</p>
        <h4 className="text-xl font-bold text-white uppercase flex items-center gap-2 mt-8">
          <span className="text-primary tracking-tighter italic">Dominating</span> Search Rankings
        </h4>
        <p>Our <strong>SEO services Dubai</strong> are built on technical excellence. We optimize for speed, mobile responsiveness, and semantic search, ensuring your brand ranks at the top for the keywords that matter most in the region.</p>
        <p>We combine this with world-class <strong>web development Dubai</strong> to create websites that convert visitors into loyal customers. Every line of code we write is optimized for performance and search engine visibility from day one.</p>
        <p>Stay ahead of the competition with the <strong>best marketing agency UAE</strong>, where we combine cutting-edge tech with aggressive SEO strategies to dominate the Dubai digital landscape.</p>
      </div>
    ),
  },
];

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
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleOpen = (blog: BlogPost) => {
    setSelectedBlog(blog);
    // Smooth scroll to top of blog section
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClose = () => {
    setSelectedBlog(null);
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="py-20 md:py-32 px-4 md:px-10 min-h-[60vh] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedBlog ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-16 text-center">
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-primary border border-primary/30 rounded-full bg-accent/10 backdrop-blur-sm tracking-wider uppercase">
                  ✱ Latest Insights
                </div>
                <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
                  Insights? <br />
                  <span className="text-primary italic">Our Journal.</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                  Insights from the <strong>best marketing agency in UAE</strong>. Exploring digital
                  innovation and <strong>digital marketing Dubai</strong> strategies.
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
                    onClick={() => handleOpen(blog)}
                    className="group cursor-pointer p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-primary font-bold text-xs uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">
                        {blog.category}
                      </span>
                      <div className="w-10 h-10 bg-white/10 group-hover:bg-primary group-hover:text-black rounded-full flex items-center justify-center transition-all duration-500">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {blog.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
            >
              <button
                onClick={handleClose}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12 group uppercase text-xs font-bold tracking-widest"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Journal
              </button>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 bg-primary/10 rounded-full">
                  {selectedBlog.category}
                </span>
                <span className="text-gray-500 font-mono text-sm">{selectedBlog.date}</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-white mb-16 leading-[0.9] uppercase tracking-tighter">
                {selectedBlog.title}
              </h1>

              <div className="text-gray-300 leading-relaxed text-lg max-w-4xl">
                {selectedBlog.fullContent}
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2 uppercase">Ready to scale?</h4>
                  <p className="text-gray-500">Work with the <strong>best marketing agency in UAE</strong>.</p>
                </div>
                <button
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      const contactSection = document.getElementById("contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                  className="px-10 py-4 bg-primary text-black font-black text-lg rounded-full hover:scale-105 transition-transform uppercase italic tracking-tighter shadow-[0_0_20px_rgba(171,221,55,0.3)]"
                >
                  Start a Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;
