"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-5 md:py-8 flex items-center justify-between text-left group gap-4"
      >
        <span
          className={`text-lg md:text-2xl font-bold transition-colors leading-tight ${
            isOpen
              ? "text-primary placeholder-green-400"
              : "text-white group-hover:text-primary"
          }`}
        >
          {question}
        </span>
        <span
          className={`p-2 rounded-full border shrink-0 transition-all ${
            isOpen
              ? "border-primary text-primary rotate-180 bg-primary/10"
              : "border-white/20 text-white group-hover:border-primary group-hover:text-primary"
          }`}
        >
          {isOpen ? (
            <Minus size={18} className="md:w-6 md:h-6" />
          ) : (
            <Plus size={18} className="md:w-6 md:h-6" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 leading-relaxed text-sm md:text-lg max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = ({
  items,
}: {
  items: { question: string; answer: string }[];
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};
