"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function BackgroundGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 bg-transparent"
      style={{
        background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
}
