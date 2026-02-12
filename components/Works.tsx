"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const works = [
    { id: 1, title: "Neon BRAND", category: "Branding", img: "https://picsum.photos/id/20/800/600" },
    { id: 2, title: "Urban Fashion", category: "Web Design", img: "https://picsum.photos/id/26/800/600" },
    { id: 3, title: "Tech Corp", category: "Development", img: "https://picsum.photos/id/60/800/600" },
    { id: 4, title: "Coffee House", category: "Social Media", img: "https://picsum.photos/id/48/800/600" },
    { id: 5, title: "Travel App", category: "UI/UX", img: "https://picsum.photos/id/36/800/600" },
];

export default function Works() {
    return (
        <section id="works" className="py-24 bg-[#0a0a0a]">
            <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
                <h2 className="text-6xl font-bold uppercase tracking-tighter">Selected<br />Works</h2>
                <div className="hidden md:block text-gray-400">Drag to explore</div>
            </div>

            <div className="pl-6 md:pl-12">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.2 },
                    }}
                    pagination={{ clickable: true }}
                    className="pb-12"
                >
                    {works.map((work) => (
                        <SwiperSlide key={work.id}>
                            <div className="group relative aspect-[4/5] overflow-hidden bg-gray-900 cursor-pointer">
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-sm text-gray-300 uppercase mb-1">{work.category}</p>
                                    <h3 className="text-2xl font-bold">{work.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
