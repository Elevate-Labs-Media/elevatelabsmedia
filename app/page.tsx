import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Works />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
