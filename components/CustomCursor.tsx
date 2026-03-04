"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const GRAIN_COUNT = 50;

export default function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const grainsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if it's a touch device
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      container.style.display = "none";
      return;
    }

    let inactivityTimer: NodeJS.Timeout;
    let isActive = false;
    let currentGrainIndex = 0;
    let lastSpawnTime = 0;

    const onMouseMove = (e: MouseEvent) => {
      isActive = true;

      const now = Date.now();
      if (now - lastSpawnTime > 20) {
        // Limit spawn rate
        lastSpawnTime = now;

        // Get the next grain to animate
        const grain = grainsRef.current[currentGrainIndex];
        if (grain) {
          // Randomize grain offset slightly for a magical scatter effect
          const scatterX = (Math.random() - 0.5) * 40;
          const scatterY = (Math.random() - 0.5) * 40;

          // Reset and instantly move grain to cursor position
          gsap.set(grain, {
            x: e.clientX + scatterX,
            y: e.clientY + scatterY,
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.5,
          });

          // Animate grain floating up and fading out
          gsap.to(grain, {
            y: e.clientY + scatterY - 50 - Math.random() * 30, // Float up
            x: e.clientX + scatterX + (Math.random() - 0.5) * 40, // Drift sideways
            opacity: 0,
            scale: 0,
            duration: 0.8 + Math.random() * 0.4,
            ease: "power1.out",
          });

          // Cycle through grains
          currentGrainIndex = (currentGrainIndex + 1) % GRAIN_COUNT;
        }
      }

      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        isActive = false;
      }, 300); // 300ms inactivity means we stop spawning grains
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearTimeout(inactivityTimer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block"
    >
      {[...Array(GRAIN_COUNT)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) grainsRef.current[i] = el;
          }}
          className="absolute w-2 h-2 rounded-full shadow-[0_0_8px_rgba(171,221,55,0.8)]"
          style={{
            background: "rgba(171, 221, 55, 1)",
            opacity: 0,
            transform: "translate(-50%, -50%)",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
