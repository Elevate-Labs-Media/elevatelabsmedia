"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye } from "lucide-react";
import Image from "next/image";

// --- About Component ---

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <section className="py-16 md:py-28 px-4" id="about" ref={heroRef}>
      <div className="max-w-7xl px-6 md:px-12 mx-auto">
        <div className="relative mb-16">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-12 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-primary animate-spin">✱</span>
              <span className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
                About Us
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1butHop65C/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                title="Follow on Facebook"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.instagram.com/elevatelabsmedia?igsh=cmR1bHVqOWVmempk"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                title="Follow on Instagram"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/elevate-labs-media/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                title="Follow on LinkedIn"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>

          <figure className="relative group pt-10">
            <svg
              className="w-full shadow-2xl rounded-[2.5rem] overflow-hidden"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 56"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.775610 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.466030 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                href="/images/about-us.png"
              ></image>
            </svg>
          </figure>

          {/* Decorative experience badge */}
          <div className="absolute -bottom-6 left-12 bg-primary text-black px-6 py-3 rounded-2xl font-bold shadow-lg flex items-center gap-2">
            <span className="text-2xl">10+</span>
            <span className="text-xs uppercase leading-tight">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-12 lg:gap-20">
          <div className="w-full">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              custom={0}
              className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight text-center w-full whitespace-nowrap"
            >
              Digital Marketing. Strategic Storytelling.
            </motion.h2>

            <div className="space-y-4 text-gray-300 text-lg leading-normal w-full">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={1}
                className="text-left"
              >
                At Elevate Labs, we bring brands to life through dynamic
                strategies, creative storytelling, and visually impactful
                digital experiences. With a deep understanding of branding,
                design, and modern digital engagement, we craft campaigns and
                content that capture attention, inspire action, and deliver
                measurable results.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={2}
                className="text-left"
              >
                Our team of passionate creatives, marketers, designers, and
                visual storytellers works collaboratively to create powerful
                brand experiences. From strategic social media marketing to
                high-quality photography and cinematic video production, we
                provide a full spectrum of advertising and media solutions
                tailored to elevate your brand.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={3}
                className="text-left"
              >
                At Elevate Labs, we believe every brand has a unique story — our
                mission is to transform that story into meaningful connections
                that resonate with audiences and drive sustainable business
                growth.
              </motion.p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                custom={4}
                className="pt-4"
              >
                <a
                  href="/elevate-labs-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/10"
                >
                  Download Profile
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mt-24 grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.07] transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-normal text-left">
              Our mission is to empower businesses by transforming their ideas
              and vision into compelling digital and visual experiences. Through
              strategic creativity and innovative marketing solutions, we help
              brands build stronger connections with their audiences, increase
              engagement, and achieve long-term growth and brand loyalty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.07] transition-colors group"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:scale-110 transition-transform">
              <Eye className="text-primary" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-normal text-left">
              Our vision is to become a leading creative and marketing agency
              recognized for innovation, reliability, and excellence in
              advertising, branding, and multimedia production. We aim to set
              new standards in creative communication while helping brands grow
              and thrive in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
