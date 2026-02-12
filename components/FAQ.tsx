"use client";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { cn } from "@/lib/utils";

const faqs = [
    { q: "What services do you offer?", a: "We offer 360-degree digital marketing services including SEO, PPC, Social Media Management, Content Creation, and Web Development." },
    { q: "How much do you charge?", a: "Our pricing is tailored to each project's scope and goals. Contact us for a custom quote." },
    { q: "Do you work with startups?", a: "Yes, we love working with ambitious startups to help them scale effectively." },
    { q: "What is your typical timeline?", a: "Timelines vary by project. A branding project might take 4-6 weeks, while a full website could take 8-12 weeks." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-24 px-6 md:px-12 bg-[#050505]">
            <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <h2 className="text-4xl font-bold uppercase tracking-tighter sticky top-24">FAQ</h2>
                </div>
                <div className="md:w-2/3 flex flex-col">
                    {faqs.map((f, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button onClick={() => toggle(i)} className="w-full text-left py-8 flex justify-between items-center group">
                                <span className="text-xl md:text-2xl font-bold group-hover:text-gray-300 transition-colors">{f.q}</span>
                                <span className="text-2xl">{openIndex === i ? <HiMinus /> : <HiPlus />}</span>
                            </button>
                            <div className={cn("overflow-hidden transition-all duration-500 ease-in-out", openIndex === i ? "max-h-40 opacity-100 mb-8" : "max-h-0 opacity-0")}>
                                <p className="text-gray-400 text-lg leading-relaxed">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
