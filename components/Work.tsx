"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FinTech Revolution",
    category: "App Development",
    color: "bg-blue-500",
  },
  { title: "Neon Energy", category: "Branding", color: "bg-green-500" },
  { title: "Urban Fashion", category: "E-Commerce", color: "bg-purple-500" },
  {
    title: "Tech Summit 2025",
    category: "Event Coverage",
    color: "bg-orange-500",
  },
];

const Work = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            SELECTED WORK
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 md:mb-20">
            A showcase of our recent projects where design meets technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <div
                className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-primary font-mono text-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold group-hover:translate-x-2 transition-transform">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
