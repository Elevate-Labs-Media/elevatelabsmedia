"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
        });

        tl.from(".about-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })
            .from(".about-text", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            }, "-=0.5");

    }, { scope: container });

    return (
        <section id="about" ref={container} className="py-24 px-6 md:px-12 bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="about-title text-[8vw] md:text-6xl font-bold uppercase tracking-tighter leading-none mb-8">
                        Who<br />We Are
                    </h2>
                </div>
                <div className="space-y-8">
                    <p className="about-text text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                        Elevate Labs Media is a forward-thinking digital agency dedicated to transforming brands through innovative strategy and design.
                    </p>
                    <p className="about-text text-gray-500 leading-relaxed">
                        We believe in the power of digital storytelling. Our team of creatives, developers, and strategists work together to build immersive experiences that not only look stunning but drive real, measurable results for our clients. From crafting unique brand identities to developing high-performance websites, we are your partners in digital growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
