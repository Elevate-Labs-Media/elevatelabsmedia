"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/lib/blogs";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

interface Props {
  blog: BlogPost;
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BlogDetailClient({ blog }: Props) {
  const lenis = useLenis();
  const router = useRouter();

  useEffect(() => {
    // Prevent the scroll from jumping to the previous page's position
    const resetScroll = () => {
      window.scrollTo(0, 0);
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    resetScroll();
    const timeoutId = setTimeout(resetScroll, 50);
    return () => clearTimeout(timeoutId);
  }, [lenis, blog.slug]);

  return (
    <main className="bg-background text-white min-h-[85vh] pt-32 pb-16 md:pb-20 relative z-10 overflow-x-hidden px-4 sm:px-6 md:px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 relative overflow-hidden"
      >
        <motion.div variants={itemVariants}>
          <button
            onClick={() => {
              // Simply go back in browser history to perfectly restore the previous scroll coordinate
              if (typeof window !== "undefined" && window.history.length > 1) {
                router.back();
              } else {
                router.push("/#blog");
              }
            }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 md:mb-12 group uppercase text-xs font-bold tracking-widest cursor-pointer bg-transparent border-none p-0"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Journal
          </button>
        </motion.div>

        <motion.div
          variants={headingVariants}
          className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8"
        >
          <span className="text-primary font-bold text-xs uppercase tracking-widest px-3 md:px-4 py-1.5 bg-primary/10 rounded-full">
            {blog.category}
          </span>
          <span className="text-gray-500 font-mono text-sm">{blog.date}</span>
        </motion.div>

        <motion.h1
          variants={headingVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 md:mb-16 leading-[1.1] md:leading-[0.9] uppercase tracking-tighter"
        >
          {blog.title}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-4xl blog-content"
        >
          {blog.fullContent}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 border-t border-white/10"
        />
      </motion.div>
    </main>
  );
}
