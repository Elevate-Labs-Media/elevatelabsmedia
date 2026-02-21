"use client";

import CanvasContainer from "@/components/CanvasContainer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Work from "@/components/Work";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CanvasContainer />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
}
