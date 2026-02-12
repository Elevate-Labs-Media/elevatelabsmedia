"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({ delay: 0.5 });

            tl.from(textRef.current?.querySelectorAll("span") || [], {
                y: 100,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
            })
                .from(".hero-text", {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    ease: "power2.out"
                }, "-=0.5");
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent z-0 pointer-events-none" />
            <h1 ref={textRef} className="text-[12vw] leading-[0.85] font-bold uppercase tracking-tighter mix-blend-difference z-10 relative">
                <div className="block overflow-hidden">
                    <span className="block">Digital</span>
                </div>
                <div className="block overflow-hidden">
                    <span className="block text-gray-500">Marketing</span>
                </div>
                <div className="block overflow-hidden">
                    <span className="block">Revolution</span>
                </div>
            </h1>
            <p className="hero-text mt-8 text-lg md:text-xl text-gray-400 max-w-xl z-10 relative">
                We build digital experiences that drive results.
            </p>
        </section>
    );
}
