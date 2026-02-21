"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "98%", label: "Success Rate" },
  { value: "50+", label: "Team Members" },
  { value: "10+", label: "Years Experience" },
];

const About = () => {
  return (
    <section className="py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            WE ARE THE <br />
            <span className="text-primary">ARCHITECTS</span> OF <br />
            THE DIGITAL FUTURE.
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Elevate Labs is a premium digital agency focused on crafting bespoke
            digital experiences. We combine strategy, design, and technology to
            help brands thrive in the modern world.
          </p>
          <p className="text-gray-400">
            From startups to Fortune 500 companies, we have partnered with
            visionaries to build products that users love and businesses rely
            on.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="p-8 border border-white/10 rounded-2xl bg-white/5 text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
