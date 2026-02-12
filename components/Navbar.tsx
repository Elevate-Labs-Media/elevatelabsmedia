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
        <header ref={containerRef} className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter z-50 uppercase">
                Elevate Labs Media
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
                {["Home", "Services", "Works", "Blog", "Contact"].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors">
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-2xl">
                {isOpen ? <HiX /> : <HiMenuAlt4 />}
            </button>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center -translate-y-full z-40"
            >
                <nav className="flex flex-col gap-6 text-center">
                    {["Home", "Services", "Works", "Blog", "FAQ", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-bold uppercase tracking-tighter hover:text-gray-400 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="mt-12 flex gap-6 text-xl">
                    <Link href="#" className="hover:text-gray-400"><FaFacebookF /></Link>
                    <Link href="#" className="hover:text-gray-400"><FaInstagram /></Link>
                    <Link href="#" className="hover:text-gray-400"><FaLinkedinIn /></Link>
                </div>
            </div>
        </header>
    );
}
