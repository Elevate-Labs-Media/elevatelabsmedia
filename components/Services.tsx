"use client";

import { motion } from "framer-motion";
import {
  Code,
  Globe,
  PenTool,
  Smartphone,
  Zap,
  Monitor,
  ShoppingCart,
  Search,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Branding",
    slug: "branding",
    description:
      "Building resilient brand identities that resonate with your audience.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Data-driven strategies to amplify your brand's voice and maximize ROI.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Creative Design",
    slug: "creative-design",
    description:
      "Visual storytelling that captivates and converts with stunning aesthetics.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Media Production",
    slug: "media-production",
    description:
      "High-quality production services to bring your brand's narrative to life.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Development",
    slug: "e-commerce",
    description:
      "Robust, scalable, and sales-driven online stores tailored to your needs.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    slug: "seo-optimization",
    description:
      "Comprehensive strategies to improve your search engine rankings.",
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
            <Link key={index} href={`/services/${service.slug}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group h-full p-8 rounded-3xl glass glass-hover relative overflow-hidden"
              >
                {/* Glossy Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-glow">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
