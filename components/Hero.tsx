"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const Hero = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play none play reset",
        },
      });

      // Text scramble for tagline
      tl.to(".hero-tagline", {
        text: "Precision Marketing & Creative Excellence",
        duration: 1.5,
        ease: "none",
      });

      // Split text reveal for title
      tl.fromTo(
        ".hero-title-word",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=1",
      );

      // Fade in paragraph
      tl.fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8",
      );

      // Slide up buttons
      tl.fromTo(
        ".hero-buttons",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // Magnetic effect on buttons
      const buttons = gsap.utils.toArray<HTMLElement>(".magnetic-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        });
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <section
      ref={container}
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden z-10 px-4"
    >
      <div className="mb-6">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-primary border border-primary/30 rounded-full bg-accent/10 backdrop-blur-sm tracking-wider min-h-[30px]">
          <span className="hero-tagline"></span>
        </div>
        <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-6 flex flex-col items-center">
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block">BEYOND DIGITAL</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-title-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 pb-2 uppercase">
              BOUNDARIES.
            </span>
          </div>
        </h1>
        <p className="hero-desc text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 px-4 leading-relaxed">
          We fuse data-driven precision with creative storytelling to build
          high-impact marketing strategies and bespoke digital experiences.
        </p>
      </div>

      <div className="hero-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
        <Link
          href="/contact"
          className="magnetic-btn group relative px-8 py-4 bg-primary text-black font-bold text-lg rounded-full transition-transform text-center"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            START A PROJECT{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
        </Link>
        <Link
          href="/#about"
          className="magnetic-btn px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm text-center"
        >
          About Us
        </Link>
      </div>
    </section>
  );
};

export default Hero;
