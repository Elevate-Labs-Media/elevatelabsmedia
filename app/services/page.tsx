"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Globe,
  PenTool,
  Smartphone,
  Zap,
  Monitor,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

// Helper to get icon based on slug (simplified for now)
const getIcon = (slug: string) => {
  switch (slug) {
    case "digital-marketing":
      return <Globe className="w-10 h-10" />;
    case "branding":
      return <Zap className="w-10 h-10" />;
    case "creative-design":
      return <PenTool className="w-10 h-10" />;
    case "media-production":
      return <Monitor className="w-10 h-10" />;
    default:
      return <Code className="w-10 h-10" />;
  }
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">OUR EXPERTISE</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand in
            the modern landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(SERVICES).map(([slug, service], index) => (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/services/${slug}`} className="block h-full group">
                <div className="h-full p-10 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group-hover:border-primary/50">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0 translate-x-4">
                    <ArrowRight className="text-primary w-8 h-8" />
                  </div>

                  <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500 origin-left">
                    {getIcon(slug)}
                  </div>

                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-400 mb-8">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.subServices.slice(0, 3).map((sub, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono border border-white/10 px-3 py-1 rounded-full text-gray-500"
                      >
                        {sub}
                      </span>
                    ))}
                    {service.subServices.length > 3 && (
                      <span className="text-xs font-mono border border-white/10 px-3 py-1 rounded-full text-gray-500">
                        +{service.subServices.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
