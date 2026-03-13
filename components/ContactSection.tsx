"use client";

import ContactForm from "@/components/Contact"; // Renaming the default export from components/Contact.tsx to avoid name clash if needed, but here it is fine.
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-10 scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05] uppercase">
            Growth? <br />
            <span className="text-primary">Let&apos;s talk.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us what you&apos;re building and we&apos;ll get back within one
            business day.
            <br className="hidden md:block" /> For urgent queries, ping us on
            WhatsApp.
          </p>
        </motion.div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
