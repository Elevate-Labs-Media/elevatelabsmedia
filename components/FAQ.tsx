"use client";

import { Accordion } from "@/components/Accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does Elevate Labs offer?",
    answer:
      "We offer a comprehensive suite of digital services including Digital Marketing, Branding, E-commerce Solutions, Creative Design, Media Production, and Web Development.",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "Project timelines vary based on complexity. A standard landing page can take 2-3 weeks, while a complex corporate website or e-commerce platform may take 6-10 weeks.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "We work with both! Whether you're a new startup looking to make a splash or an established enterprise needing a digital transformation, we have the expertise to scale with you.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We tailor our pricing to each project's specific needs and goals. Contact us for a free consultation and quote.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide post-launch support and maintenance packages to ensure your digital assets remain secure, up-to-date, and performing optimally.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Questions? <br />{" "}
            <span className="text-primary">We have answers.</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to know about working with Elevate Labs.
          </p>
        </motion.div>
        <Accordion items={faqs} />
      </div>
    </section>
  );
};

export default FAQ;
