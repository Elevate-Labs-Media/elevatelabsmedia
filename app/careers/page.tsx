"use client";

import { motion } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Rocket,
  Heart,
  Laptop,
  TrendingUp,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Upload,
  Send,
} from "lucide-react";

const openPositions = [
  {
    title: "Social Media Manager",
    location: "Remote / Dubai",
    type: "Full Time",
    description:
      "Lead social strategies for high-growth brands. We're looking for a storyteller who understands trends, data, and community engagement.",
  },
  {
    title: "Graphic Designer",
    location: "Remote / Dubai",
    type: "Full Time",
    description:
      "Create stunning visual identities and digital assets. You should have a sharp eye for modern agency aesthetics and brand consistency.",
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote / Dubai",
    type: "Full Time",
    description:
      "Manage and optimize performance marketing campaigns. ROI-driven mindset and deep analytics knowledge required.",
  },
  {
    title: "Video Editor",
    location: "Remote / Dubai",
    type: "Full Time",
    description:
      "Produce cinematic content for social and web. Proficiency in Premiere Pro/After Effects and a flair for storytelling is key.",
  },
  {
    title: "Content Creator",
    location: "Remote / Dubai",
    type: "Full Time / Internship",
    description:
      "Produce engaging, platform-specific content. We need someone who lives and breathes digital culture and visual trends.",
  },
  {
    title: "Business Development Executive",
    location: "Dubai",
    type: "Full Time",
    description:
      "Drive growth by identifying new opportunities and building strategic partnerships with premium brands.",
  },
];

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Creative Work Culture",
    desc: "A vibrant environment that celebrates innovation and bold ideas.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Growth Opportunities",
    desc: "Clear paths for career advancement and skill development.",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Flexible Environment",
    desc: "Work-life balance with remote-first and flexible options.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Professional Development",
    desc: "Access to courses, workshops, and industry-leading mentors.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Impactful Work",
    desc: "Shape the future of global brands through strategic media.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Competitive Package",
    desc: "Rewards and benefits that reflect your expertise and impact.",
  },
];

const CareersPage = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="bg-background text-white min-h-screen pt-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative px-4 md:px-10 py-20 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-widest uppercase mb-8"
          >
            Careers at Elevate Labs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.05] tracking-tighter"
          >
            Join Our <span className="text-primary italic">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Build the future of digital creativity with Elevate Labs. We're a
            fast-growing creative and digital marketing agency helping brands
            grow through strategy, design, content, and performance marketing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#open-positions"
              className="px-10 py-5 bg-primary text-black font-black rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/20 inline-flex items-center gap-3"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Work With Us */}
      <section className="px-4 md:px-10 py-20 md:py-32 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Digital Marketing Jobs <br />
                <span className="text-primary">
                  Where Creativity Meets Performance
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Lightbulb />,
                    title: "Creative Workspace",
                    text: "Work in an environment where bold ideas are actually heard.",
                  },
                  {
                    icon: <TrendingUp />,
                    title: "Growth & Learning",
                    text: "We invest in your skills and provide paths for advancement.",
                  },
                  {
                    icon: <Users />,
                    title: "Collaborative Team",
                    text: "Sync with a team of innovators and master your craft.",
                  },
                  {
                    icon: <Rocket />,
                    title: "Exciting Projects",
                    text: "Shape narratives for some of the world's most exciting brands.",
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={scrollVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                alt="Collaborative and innovative team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Life at Elevate Labs */}
      <section className="px-4 md:px-10 py-20 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter">
              Life at Elevate Labs
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed italic">
              "We believe that the best work happens when creativity, technical
              precision, and passion collide. At Elevate Labs, we're not just a
              team; we're a collective of storytellers and strategists dedicated
              to redefining what's possible in the digital space. Our culture is
              built on trust, experimentation, and a relentless pursuit of
              excellence."
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section
        id="open-positions"
        className="px-4 md:px-10 py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
              Join Our Marketing Team
            </h2>
            <p className="text-gray-400">
              Current opportunities to elevate your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((job, i) => (
              <motion.div
                key={i}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-6 h-6 text-primary -rotate-45" />
                </div>
                <div className="flex gap-4 mb-6 text-xs font-bold uppercase tracking-widest text-primary">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  {job.description}
                </p>
                <a
                  href={`mailto:elevatelabsmedia@gmail.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="w-full py-4 rounded-xl border border-white/10 group-hover:bg-primary group-hover:text-black font-bold transition-all text-center block"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>

          {/* Send Your CV (Important Pro Tip) */}
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            className="mt-16 p-10 rounded-3xl border border-primary/20 bg-primary/5 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Don't see a role that fits you?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're always looking for talented creatives, marketers, designers,
              and innovators. Send us your CV and we'll get in touch when an
              opportunity arises.
            </p>
            <a
              href="mailto:elevatelabsmedia@gmail.com?subject=Talent Pool Application"
              className="text-primary font-bold hover:underline inline-flex items-center gap-2"
            >
              Send Us Your CV <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. Benefits */}
      <section className="px-4 md:px-10 py-20 md:py-32 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
              Creative Agency Careers
            </h2>
            <p className="text-gray-400">
              Why thousands want to join Elevate Labs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={scrollVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 p-6"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Application CTA */}
      <section id="contact" className="px-4 md:px-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            className="p-10 md:p-16 rounded-[40px] border border-white/10 bg-white/5 relative text-center"
          >
            <h2 className="text-4xl font-black mb-4 tracking-tighter">
              Ready to Join the Team?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              We're always excited to meet talented individuals. Send your CV
              and a brief introduction to our team.
            </p>

            <a
              href="mailto:elevatelabsmedia@gmail.com"
              className="inline-flex py-5 px-10 bg-primary text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 items-center justify-center gap-3"
            >
              careers@elevatelabsmedia.ae
              <Send size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
