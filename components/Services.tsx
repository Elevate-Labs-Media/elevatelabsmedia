"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { title: "SEO Optimization", desc: "Rank higher and drive traffic." },
    { title: "Content Strategy", desc: "Stories that convert." },
    { title: "Social Media", desc: "Build a loyal community." },
    { title: "Web Development", desc: "Fast, responsive, secure." },
    { title: "PPC Advertising", desc: "Maximize your ROI." },
    { title: "Branding", desc: "Stand out from the crowd." },
];

export default function Services() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".service-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, { scope: container });

    return (
        <section id="services" ref={container} className="py-24 px-6 md:px-12 bg-black text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-6xl font-bold uppercase tracking-tighter">Our<br />Services</h2>
                <p className="text-gray-400 max-w-sm mt-8 md:mt-0">Comprehensive digital solutions tailored to elevate your brand in the modern landscape.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-white/20">
                {services.map((s, i) => (
                    <div key={i} className="service-item group border-r border-b border-white/20 p-10 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer relative overflow-hidden">
                        <div className="flex justify-between items-start mb-12">
                            <span className="text-sm font-mono">0{i + 1}</span>
                            <FaArrowRight className="text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                        <p className="text-gray-500 group-hover:text-gray-800 transition-colors">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
