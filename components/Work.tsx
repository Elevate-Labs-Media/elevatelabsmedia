"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";

// Defines the structure for each image item in the gallery
type ImageItem = {
  id: number | string;
  url: string;
  span: string; // Tailwind CSS grid span classes (e.g., "md:col-span-2")
};

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    } as const,
  },
};

// Animation variants for each gallery item
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 } as const,
  },
};

// Modal component for displaying the selected image with navigation
const ImageModal = ({
  items,
  currentIndex,
  onIndexChange,
  onClose,
}: {
  items: ImageItem[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) => {
  const item = items[currentIndex];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % items.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + items.length) % items.length);
  };

  if (!mounted) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-2xl px-4"
      onClick={onClose}
    >
      {/* Modal Navigation Buttons */}
      <div className="absolute inset-x-4 md:inset-x-8 top-1/2 -translate-y-1/2 flex justify-between z-[110] pointer-events-none">
        <button
          onClick={handlePrev}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black hover:scale-110 transition-all pointer-events-auto shadow-2xl"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="p-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black hover:scale-110 transition-all pointer-events-auto shadow-2xl"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <motion.div
        key={currentIndex}
        initial={{ scale: 0.9, opacity: 0, scaleZ: 0.5 }}
        animate={{ scale: 1, opacity: 1, scaleZ: 1 }}
        exit={{ scale: 0.9, opacity: 0, scaleZ: 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-6xl w-full flex flex-col items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative group">
          <img
            src={item.url}
            alt="Work project"
            className="h-auto max-h-[85vh] w-auto rounded-2xl object-contain shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
          />
        </div>
      </motion.div>

      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-red-500 text-white rounded-full transition-all backdrop-blur-md border border-white/20 z-[120] hover:rotate-90"
        aria-label="Close image view"
      >
        <X size={28} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-sm shadow-xl">
        <span className="text-primary font-bold">{currentIndex + 1}</span> /{" "}
        {items.length}
      </div>
    </motion.div>,
    document.body,
  );
};

const imageItems: ImageItem[] = [
  { id: 1, url: "/images/work/premium-eyewear.png", span: "" },
  { id: 2, url: "/images/work/i2.png", span: "" },
  { id: 3, url: "/images/work/i3.png", span: "" },
  { id: 4, url: "/images/work/k1.png", span: "md:col-span-2" },
  { id: 5, url: "/images/work/aj4.png", span: "md:col-span-2" },
  { id: 6, url: "/images/work/m1.png", span: "" },
  { id: 7, url: "/images/work/m2.png", span: "" },
  { id: 8, url: "/images/work/m3.png", span: "md:col-span-2" },
  { id: 9, url: "/images/work/p1.png", span: "" },
  { id: 10, url: "/images/work/p2.png", span: "" },
  { id: 11, url: "/images/work/p3.png", span: "md:col-span-2" },
  { id: 12, url: "/images/work/k2.png", span: "" },
  { id: 13, url: "/images/work/v1.png", span: "md:col-span-2" },
];

const Work = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });

  // Calculate the draggable area constraint
  useEffect(() => {
    const calculateConstraints = () => {
      if (gridRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const gridWidth = gridRef.current.scrollWidth;
        const newConstraint = Math.min(0, containerWidth - gridWidth - 32);
        setDragConstraint(newConstraint);
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  const handleNext = () => {
    const currentX = x.get();
    const step = 400; // Average item width + gap
    const nextX = Math.max(currentX - step, dragConstraint);
    x.set(nextX);
  };

  const handlePrev = () => {
    const currentX = x.get();
    const step = 400;
    const nextX = Math.min(currentX + step, 0);
    x.set(nextX);
  };

  return (
    <section
      id="work"
      ref={targetRef}
      className="relative w-full overflow-hidden py-12 md:py-20 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-12 md:mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[1.05] uppercase">
            Projects? <br />
            <span className="text-primary">Our Work.</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl leading-relaxed mx-auto mt-6">
            A showcase of our high-performance digital marketing campaigns,
            cinematic brand stories, and data-driven success in the UAE.
          </p>
        </motion.div>
      </div>

      <div className="relative group/gallery">
        {/* Navigation Buttons for Gallery - Now relative to gallery container */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black transition-all pointer-events-auto shadow-xl"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-md hover:bg-primary hover:text-black transition-all pointer-events-auto shadow-xl"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div
          ref={containerRef}
          className="relative w-full cursor-grab active:cursor-grabbing"
        >
          <motion.div
            className="w-max"
            style={{ x: springX }}
            drag="x"
            dragConstraints={{ left: dragConstraint, right: 0 }}
            dragElastic={0.05}
          >
            <motion.div
              ref={gridRef}
              className="grid auto-cols-[16rem] md:auto-cols-[22rem] grid-flow-col gap-4 md:gap-8 px-4 md:px-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {imageItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={cn(
                    "group relative flex h-[22rem] md:h-[30rem] w-[16rem] md:w-full cursor-pointer items-end overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-primary/50",
                    item.span,
                  )}
                  whileHover={{ scale: 0.98 }}
                  onClick={() => setSelectedIndex(index)}
                >
                  <img
                    src={item.url}
                    alt="Work project"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary border border-primary/30">
                      <X className="rotate-45" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <ImageModal
              items={imageItems}
              currentIndex={selectedIndex}
              onIndexChange={setSelectedIndex}
              onClose={() => setSelectedIndex(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
