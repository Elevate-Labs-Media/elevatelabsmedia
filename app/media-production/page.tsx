"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Photography",
    description:
      "Capture stunning, high-resolution images that tell your brand's story and make a lasting impact.",
  },
  {
    title: "Video Production",
    description:
      "Create compelling video content—from concept development to filming and editing—for any platform or purpose.",
  },
  {
    title: "Video Editing",
    description:
      "Transform raw footage into polished, engaging videos with professional editing, effects, transitions, and color correction.",
  },
  {
    title: "Post-Production",
    description:
      "Polish your content with expert editing, color correction, sound mixing, and final touches to achieve the highest quality.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
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

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MediaProductionPage() {
  return (
    <>
      <main className="bg-background text-white min-h-screen pt-24 pb-20 relative z-10 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(171,221,55,0.15)_0%,_transparent_70%)] rounded-full -z-10 pointer-events-none" />

        <section className="relative px-4 md:px-10 py-20 md:py-32 z-10 flex flex-col items-center justify-center min-h-[50vh]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight"
            >
              Media <span className="text-primary italic">Production</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We deliver high-quality visual storytelling through video,
              photography, and audio to engage, inform, and inspire your
              audience.
            </motion.p>
          </div>
        </section>

        <section className="px-4 md:px-10 pb-20 md:pb-32 bg-background border-t border-white/10 pt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Handling newlines for specifically formatted lists like Print Design */}
                  <div className="text-gray-400 text-base md:text-lg leading-relaxed space-y-2">
                    {service.description.split("\n").map((line, idx) => {
                      if (line.startsWith(">")) {
                        return (
                          <p
                            key={idx}
                            className="pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-primary before:opacity-50"
                          >
                            {line.replace("> ", "")}
                          </p>
                        );
                      }
                      return (
                        <p
                          key={idx}
                          className={
                            idx === 0 && service.description.includes(">")
                              ? "font-semibold mb-3 text-white"
                              : ""
                          }
                        >
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
