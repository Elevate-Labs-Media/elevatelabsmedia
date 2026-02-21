"use client";

import { motion } from "framer-motion";
import { Code, Globe, PenTool, Smartphone, Zap, Monitor } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "High-performance websites built with Next.js and modern technologies.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    description: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Intuitive and beautiful user interfaces that drive engagement.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Branding",
    description:
      "Strategic brand identity design to make your business stand out.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software",
    description:
      "Tailored software solutions to solve complex business problems.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "SEO Optimization",
    description:
      "Data-driven strategies to improve your search engine rankings.",
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR EXPERTISE</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
