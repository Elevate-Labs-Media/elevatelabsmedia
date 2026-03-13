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
    title: "Brand Strategy",
    description:
      "Engineered brand identities that cut through the noise and build lasting market authority.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Performance Marketing",
    description:
      "Hyper-targeted campaigns driven by deep analytics to maximize customer acquisition and ROI.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Creative Content",
    description:
      "Visual storytelling that transforms passive viewers into loyal brand advocates.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Visual Production",
    description:
      "Cinematic media production that brings your brand's vision to life with technical precision.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Web & App Development",
    description:
      "Modern, high-performance digital solutions including websites, mobile applications, and e-commerce platforms.",
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
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
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05] uppercase">
            Expertise? <br />
            <span className="text-primary">Our Services.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group p-8 rounded-3xl glass relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
