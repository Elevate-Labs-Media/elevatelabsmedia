"use client";

import ContactForm from "@/components/Contact"; // Renaming the default export from components/Contact.tsx to avoid name clash if needed, but here it is fine.
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">LET'S TALK</h2>
          <p className="text-xl text-gray-400">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
