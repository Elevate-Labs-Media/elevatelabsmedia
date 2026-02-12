"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMenuAlt4, HiX } from "react-icons/hi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (isOpen) {
                gsap.to(menuRef.current, {
                    y: 0,
                    duration: 1,
                    ease: "power4.inOut",
                });
            } else {
                gsap.to(menuRef.current, {
                    y: "-100%",
                    duration: 1,
                    ease: "power4.inOut",
                });
            }
        },
        { scope: containerRef, dependencies: [isOpen] }
    );

    return (
        <header ref={containerRef} className="fixed top-0 w-full z-50">
            <div className="flex justify-between items-center px-6 py-4 mix-blend-difference text-white relative z-50">
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                    Elevate Labs Media
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
                    {["Home", "About", "Services", "Works", "Blog", "FAQ", "Contact"].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl relative z-[101]">
                    <HiMenuAlt4 />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center -translate-y-full z-[100]"
            >
                <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-2xl text-white">
                    <HiX />
                </button>

                <nav className="flex flex-col gap-6 text-center">
                    {["Home", "About", "Services", "Works", "Blog", "FAQ", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors text-white"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="mt-12 flex gap-6 text-xl text-white">
                    <Link href="#" className="hover:text-gray-400"><FaFacebookF /></Link>
                    <Link href="#" className="hover:text-gray-400"><FaInstagram /></Link>
                    <Link href="#" className="hover:text-gray-400"><FaLinkedinIn /></Link>
                </div>
            </div>
        </header>
    );
}
