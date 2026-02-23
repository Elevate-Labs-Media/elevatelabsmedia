// "use client";

// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import clsx from "clsx";

// const CustomCursor = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 700 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       cursorX.set(e.clientX - 16);
//       cursorY.set(e.clientY - 16);
//     };

//     const handleHoverStart = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (
//         target.tagName.toLowerCase() === "a" ||
//         target.tagName.toLowerCase() === "button" ||
//         target.closest("a") ||
//         target.closest("button")
//       ) {
//         setIsHovered(true);
//       } else {
//         setIsHovered(false);
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mouseover", handleHoverStart);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mouseover", handleHoverStart);
//     };
//   }, [cursorX, cursorY]);

//   return (
//     <motion.div
//       className={clsx(
//         "fixed top-0 left-0 w-8 h-8 border border-primary rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block",
//         {
//           "bg-primary scale-150 border-transparent": isHovered,
//         },
//       )}
//       style={{
//         translateX: cursorXSpring,
//         translateY: cursorYSpring,
//       }}
//     />
//   );
// };

// export default CustomCursor;
