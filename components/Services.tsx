"use client";

import { useRef } from "react";
import {
  Globe,
  PenTool,
  Zap,
  Monitor,
  ShoppingCart,
  Search,
} from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        ".services-header",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        },
      );

      // Cards staggered animation
      gsap.fromTo(
        ".service-card",
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
          },
        },
      );
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section
      ref={container}
      className="py-12 md:py-20 px-4 md:px-10 services-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center services-header">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            OUR SERVICES
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              scroll={false}
              className="block h-full"
            >
              <div className="service-card group h-full p-8 rounded-3xl glass glass-hover relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
