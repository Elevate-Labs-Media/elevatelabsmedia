"use client";

import { Accordion } from "@/components/Accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How do I start my project with Elevate Labs Media in the UAE?",
    answer:
      "We begin with a free consultation to understand your brand identity. Our experts conduct a thorough audit of your social media presence and brand identity score. After checking your digital footprint, our team provides a detailed quotation. Once confirmed, we begin working closely with you as your strategic partner in the UAE.",
  },
  {
    question: "Do you provide website and mobile app development services?",
    answer:
      "Absolutely. We specialize in high-performance website development and custom mobile app development. Our team takes the time to understand your specific requirements, providing a full workflow and expert suggestions from start to finish to ensures your digital platform excels.",
  },
  {
    question: "What creative and media production services do you offer?",
    answer:
      "We offer full creative support across the UAE, including branding, creative design, professional photoshoots, cinematic shoots, and high-impact advertisements. We support brands in building a powerful digital presence through immersive storytelling and visual excellence.",
  },
  {
    question: "How does Elevate Labs Media support brand growth?",
    answer:
      "We work through brands to support their digital presence and creative strategy. From initial brand identity to long-term SEO and advertisements, we provide the full-scale support needed for brands to rise and thrive in competitive markets like Dubai and Abu Dhabi.",
  },
  {
    question: "Is your support available throughout the United Arab Emirates?",
    answer:
      "Yes, we have full support over the UAE. Whether you are looking for a marketing agency in Dubai, Abu Dhabi, or any other emirate, our team is equipped to handle your requirements with local expertise and world-class digital standards.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32 px-4 md:px-10 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono text-primary border border-primary/30 rounded-full bg-accent/10 backdrop-blur-sm tracking-wider uppercase">
            ✱ FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tighter leading-[0.9] uppercase">
            Curious? <br />
            <span className="text-primary italic">We&apos;ve got you.</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about scaling your brand with the{" "}
            <strong>best marketing agency in UAE</strong>.
          </p>
        </motion.div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
