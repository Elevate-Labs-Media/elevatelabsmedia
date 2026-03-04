"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TopographicBackground = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Fade in the background pattern on load
      gsap.from(container.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });

      // Subtle ambient motion
      gsap.to(".background-pattern", {
        scale: 1.05,
        duration: 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center",
      });

      // Parallax effect on scroll
      gsap.to(".background-pattern", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container, dependencies: [] },
  );

  return (
    <div
      ref={container}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03] select-none flex items-center justify-center"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="text-white background-pattern transform-gpu"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feDisplacementMap in="SourceGraphic" scale="25" />
        </filter>

        {/* Generative Topographic Lines using multiple circles with displacement */}
        <g
          filter="url(#noise)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx="500"
              cy="500"
              r={100 + i * 40}
              strokeDasharray={i % 2 === 0 ? "5,5" : "0"}
              opacity={0.5 - i * 0.02}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <circle
              key={`alt-${i}`}
              cx="200"
              cy="200"
              r={50 + i * 60}
              opacity={0.3 - i * 0.02}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <circle
              key={`alt2-${i}`}
              cx="800"
              cy="800"
              r={80 + i * 50}
              opacity={0.3 - i * 0.02}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default TopographicBackground;
