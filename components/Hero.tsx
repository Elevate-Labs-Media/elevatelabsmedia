"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-6"
      >
        <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-primary border border-primary/30 rounded-full bg-accent/10 backdrop-blur-sm">
          DIGITAL INNOVATION AGENCY
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6">
          BUILDING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            WHAT'S NEXT.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          We craft immersive digital experiences, high-performance websites, and
          cutting-edge applications for forward-thinking brands.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="/contact"
          className="group relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-2">
            START A PROJECT <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </Link>
        <Link
          href="/work"
          className="px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          SEE OUR WORK
        </Link>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
    </section>
  );
};

export default Hero;
