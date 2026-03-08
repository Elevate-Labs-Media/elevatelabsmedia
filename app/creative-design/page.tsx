"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Graphic Design",
    description:
      "Create visually appealing designs for print and digital media, from brochures to social media posts.",
  },
  {
    title: "Company Profile Designing",
    description:
      "Professionally written and designed company profiles to represent your brand.",
  },
  {
    title: "Print Designing",
    description:
      "Brochures, flyers, business cards, banners, and all forms of print media.",
  },
  {
    title: "Motion Graphics",
    description:
      "Create dynamic, engaging animations and videos to convey messages in a more impactful way.",
  },
  {
    title: "Packaging Design",
    description:
      "Develop creative packaging that stands out on the shelf and reinforces your brand identity.",
  },
  {
    title: "Illustration",
    description:
      "Bring concepts to life with custom illustrations that add a unique, artistic touch to your brand.",
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

export default function CreativeDesignPage() {
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
              Creative <span className="text-primary italic">Design</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We transform ideas into visually striking designs that capture
              attention, communicate messages, and elevate brand experiences.
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
                  className="group p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
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
