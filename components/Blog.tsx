"use client";
import { FaArrowRight } from "react-icons/fa";

const posts = [
    { id: 1, title: "The Future of Digital Marketing", date: "Oct 24, 2024", cat: "Trends" },
    { id: 2, title: "Mastering SEO in 2025", date: "Oct 18, 2024", cat: "SEO" },
    { id: 3, title: "Why Branding Matters More Than Ever", date: "Oct 12, 2024", cat: "Branding" },
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-6 md:px-12 bg-black text-white">
            <h2 className="text-6xl font-bold uppercase tracking-tighter mb-16">Latest<br />Insights</h2>

            <div className="flex flex-col border-t border-white/20">
                {posts.map((post) => (
                    <article key={post.id} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/20 hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer px-4">
                        <div className="mb-4 md:mb-0">
                            <span className="text-xs uppercase tracking-widest opacity-60 mb-2 block">{post.cat} — {post.date}</span>
                            <h3 className="text-3xl md:text-5xl font-bold">{post.title}</h3>
                        </div>
                        <div className="overflow-hidden">
                            <span className="flex items-center gap-2 text-lg font-bold -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                                SAY HELLO <FaArrowRight />
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
