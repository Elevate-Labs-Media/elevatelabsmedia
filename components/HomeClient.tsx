"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";
import TopographicBackground from "@/components/TopographicBackground";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HomeClient() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fade-in and Slide-up on Scroll for every section
      const sections = gsap.utils.toArray<HTMLElement>(".gsap-section");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { y: 60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // Starts animating when top of section hits 85% of viewport
            },
          },
        );
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <main ref={container} className="relative min-h-screen bg-black">
      <TopographicBackground />
      <div className="relative z-10">
        <section id="hero" className="bg-dark-1">
          <Hero />
        </section>
        <section className="bg-dark-2 gsap-section">
          <Services />
        </section>
        <section className="bg-dark-1 gsap-section">
          <Work />
        </section>
        <section className="bg-dark-1 gsap-section">
          <About />
        </section>
        <section className="bg-dark-2 gsap-section">
          <FAQ />
        </section>
        <section className="bg-dark-1 gsap-section">
          <Blog />
        </section>

        <section className="bg-dark-1 gsap-section">
          <ContactSection />
        </section>
        <Footer />
      </div>
    </main>
  );
}
