"use client";

import { motion, Variants } from "framer-motion";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Premium Shopify Development",
    description:
      "Design and deployment of high-conversion Shopify storefronts. We build bespoke themes and integrate complex app ecosystems, ensuring your e-commerce platform is both aesthetically stunning and technically superior.",
  },
  {
    title: "Custom Web Architectures",
    description:
      "Developing high-performance, scalable web applications from the ground up. Our team utilizes modern frameworks to build secure and responsive digital platforms tailored perfectly to your business logic and data needs.",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating seamless iOS and Android experiences. We specialize in cross-platform and native mobile solutions that provide frictionless user journeys, high performance, and deep integration with device capabilities.",
  },
  {
    title: "UI/UX for Development",
    description:
      "Bridging the gap between design and code. We prioritize user-centric design principles to ensure your digital products are not just visually appealing but also intuitive, accessible, and conversion-focused.",
  },
  {
    title: "API & System Integration",
    description:
      "Connecting your digital ecosystem with robust API solutions. We ensure seamless data flow between your web/mobile apps and third-party services, from ERPs and CRMs to custom-built backend infrastructures.",
  },
  {
    title: "Scalable Backend Solutions",
    description:
      "Building the robust foundation for your digital growth. Our backend engineering focuses on security, speed, and reliability, providing the power needed to support complex features and high traffic volumes.",
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

export default function DevelopmentPage() {
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
              Web & Mobile{" "}
              <span className="text-primary italic">Development</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We deliver high-performance digital solutions ranging from premium
              Shopify storefronts to complex custom web and mobile applications.
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
