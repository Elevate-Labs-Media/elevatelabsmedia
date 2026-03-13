"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  // We have removed the on-scroll hiding logic so the navbar stays sticky at all times.
  // The layout already uses `fixed top-0` which makes it sticky natively.

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isOpen ? "bg-black" : "bg-black/50 backdrop-blur-md"
        } text-white px-4 md:px-10 py-6`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <Link
            href="/#hero"
            className="pointer-events-auto z-50 flex items-center"
            onClick={(e) => {
              setIsOpen(false);
              // If we're already on the home page, we want a smooth scroll to top
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/logo.png"
              alt="Elevate Labs Media Logo"
              width={180}
              height={60}
              className="w-auto h-12 lg:pl-10 object-contain"
              priority
            />
          </Link>
          <button
            onClick={toggleOpen}
            className="pointer-events-auto z-50 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-full sm:w-[40vw] lg:w-[400px] h-[100dvh] bg-black/95 backdrop-blur-xl z-40 border-l border-white/10 flex flex-col px-12 pt-[120px] pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-auto mb-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      // Custom smooth scroll handling for hash links on the same page
                      if (link.href.startsWith("/#") && pathname === "/") {
                        const targetId = link.href.substring(2);
                        const element = document.getElementById(targetId);
                        if (element) {
                          e.preventDefault();
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                    className={`text-3xl md:text-5xl font-bold hover:text-primary transition-colors ${
                      pathname === link.href ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
