"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// --- VerticalCutReveal Component ---
interface TextProps {
  children: React.ReactNode;
  reverse?: boolean;
  transition?: any;
  splitBy?: "words" | "characters" | "lines" | string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  containerClassName?: string;
  wordLevelClassName?: string;
  elementLevelClassName?: string;
  onClick?: () => void;
  onStart?: () => void;
  onComplete?: () => void;
  autoStart?: boolean;
}

export interface VerticalCutRevealRef {
  startAnimation: () => void;
  reset: () => void;
}

interface WordObject {
  characters: string[];
  needsSpace: boolean;
}

const VerticalCutReveal = forwardRef<VerticalCutRevealRef, TextProps>(
  (
    {
      children,
      reverse = false,
      transition = {
        type: "spring",
        stiffness: 190,
        damping: 22,
      },
      splitBy = "words",
      staggerDuration = 0.2,
      staggerFrom = "first",
      containerClassName,
      wordLevelClassName,
      elementLevelClassName,
      onClick,
      onStart,
      onComplete,
      autoStart = true,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const text =
      typeof children === "string" ? children : children?.toString() || "";
    const [isAnimating, setIsAnimating] = useState(false);

    const splitIntoCharacters = (text: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), ({ segment }) => segment);
      }
      return Array.from(text);
    };

    const elements = useMemo(() => {
      const words = text.split(" ");
      if (splitBy === "characters") {
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      return splitBy === "words"
        ? text.split(" ")
        : splitBy === "lines"
          ? text.split("\n")
          : text.split(splitBy);
    }, [text, splitBy]);

    const getStaggerDelay = useCallback(
      (index: number) => {
        const total =
          splitBy === "characters"
            ? elements.reduce(
                (acc, word) =>
                  acc +
                  (typeof word === "string"
                    ? 1
                    : word.characters.length + (word.needsSpace ? 1 : 0)),
                0,
              )
            : elements.length;
        if (staggerFrom === "first") return index * staggerDuration;
        if (staggerFrom === "last")
          return (total - 1 - index) * staggerDuration;
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs(staggerFrom - index) * staggerDuration;
      },
      [elements.length, staggerFrom, staggerDuration, splitBy],
    );

    const startAnimation = useCallback(() => {
      setIsAnimating(true);
      onStart?.();
    }, [onStart]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      reset: () => setIsAnimating(false),
    }));

    useEffect(() => {
      if (autoStart) {
        startAnimation();
      }
    }, [autoStart, startAnimation]);

    const variants = {
      hidden: { y: reverse ? "-100%" : "100%" },
      visible: (i: number) => ({
        y: 0,
        transition: {
          ...transition,
          delay: ((transition?.delay as number) || 0) + getStaggerDelay(i),
        },
      }),
    };

    return (
      <span
        className={cn(
          containerClassName,
          "flex flex-wrap whitespace-pre-wrap",
          splitBy === "lines" && "flex-col",
        )}
        onClick={onClick}
        ref={containerRef}
        {...props}
      >
        <span className="sr-only">{text}</span>

        {(splitBy === "characters"
          ? (elements as WordObject[])
          : (elements as string[]).map((el, i) => ({
              characters: [el],
              needsSpace: i !== elements.length - 1,
            }))
        ).map((wordObj, wordIndex, array) => {
          const previousCharsCount = array
            .slice(0, wordIndex)
            .reduce((sum, word) => sum + word.characters.length, 0);

          return (
            <span
              key={wordIndex}
              aria-hidden="true"
              className={cn("inline-flex overflow-hidden", wordLevelClassName)}
            >
              {wordObj.characters.map((char, charIndex) => (
                <span
                  className={cn(
                    elementLevelClassName,
                    "whitespace-pre-wrap relative",
                  )}
                  key={charIndex}
                >
                  <motion.span
                    custom={previousCharsCount + charIndex}
                    initial="hidden"
                    animate={isAnimating ? "visible" : "hidden"}
                    variants={variants}
                    onAnimationComplete={
                      wordIndex === elements.length - 1 &&
                      charIndex === wordObj.characters.length - 1
                        ? onComplete
                        : undefined
                    }
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
              {wordObj.needsSpace && <span> </span>}
            </span>
          );
        })}
      </span>
    );
  },
);

VerticalCutReveal.displayName = "VerticalCutReveal";

// --- About Component ---

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-12 md:py-24 px-4" ref={heroRef}>
      <div className="max-w-6xl md:px-10 mx-auto">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-12 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-primary animate-spin">✱</span>
              <motion.span
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="text-sm font-medium text-gray-400"
              >
                WHO WE ARE
              </motion.span>
            </div>
            <div className="flex gap-4">
              <motion.a
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/facebook.svg"
                  alt="Follow Elevate Labs on Facebook"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </motion.a>
              <motion.a
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/instagram.svg"
                  alt="Follow Elevate Labs on Instagram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </motion.a>
              <motion.a
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-white/20 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
              >
                <Image
                  src="https://pro-section.ui-layouts.com/linkedin.svg"
                  alt="Follow Elevate Labs on LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </motion.a>
            </div>
          </div>

          <motion.figure
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, root: heroRef }}
            variants={scaleVariants}
            className="relative group pt-10"
          >
            <svg
              className="w-full shadow-2xl rounded-[2.5rem] overflow-hidden"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 56"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                href="/images/about-us.png"
              ></image>
            </svg>
          </motion.figure>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-8 text-sm">
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, root: heroRef }}
              variants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold">10+</span>
                <span className="text-gray-300">years of experience</span>
                <span className="text-gray-500">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-primary font-bold">50+</span>
                <span className="text-gray-300">team members</span>
              </div>
            </motion.div>
            <div className="lg:absolute right-0 bottom-24 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              {/* <motion.div
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-primary font-semibold">500+</span>
                <span className="text-gray-300 uppercase">clients</span>
              </motion.div> */}
              {/* <motion.div
                custom={7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-primary font-bold">98%</span>
                <span className="text-gray-300">success rate</span>
                <span className="text-gray-500 lg:hidden block">|</span>
              </motion.div> */}
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-white mb-8">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 1.5,
                }}
              >
                Crafting the next chapter of digital evolution.
              </VerticalCutReveal>
            </h2>

            <motion.div
              custom={9}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, root: heroRef }}
              variants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-gray-400"
            >
              <motion.div
                custom={10}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify mb-4">
                  Elevate Labs is a premier performance marketing agency
                  specializing in data-driven digital strategy and brand
                  transformation. We empower businesses to dominate their market
                  through analytical precision and innovative design solutions
                  that scale with the speed of culture.
                </p>
                <p className="leading-relaxed text-justify">
                  Our team of specialists works at the intersection of
                  technology and human connection, ensuring every campaign
                  resonates and every digital product performs at its peak.
                </p>
              </motion.div>
              <motion.div
                custom={11}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="sm:text-base text-xs"
              >
                <p className="leading-relaxed text-justify mb-8">
                  Elevate your brand with data-driven performance marketing and
                  high-impact visual storytelling. We specialize in building
                  authoritative brand identities and strategic digital presences
                  that drive measurable growth and deep audience engagement.
                </p>
                <div className="flex">
                  {/* Kept Company Profile link from original code */}
                  <a
                    href="/elevate-labs-profile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-primary text-black font-bold uppercase tracking-wide rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Company Profile
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* <div className="md:col-span-1">
            <div className="text-right">
              <motion.div
                custom={12}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="text-primary text-2xl font-bold mb-2 uppercase"
              >
                Elevate Labs
              </motion.div>
              <motion.div
                custom={13}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, root: heroRef }}
                variants={revealVariants}
                className="text-gray-400 text-sm mb-8 uppercase"
              >
                Premium Digital Agency
              </motion.div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
