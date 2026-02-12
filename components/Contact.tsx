"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side - Form */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-12">Send us a message</h2>

                    <form className="space-y-12">
                        <div className="relative">
                            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-gray-800 py-4 focus:border-white outline-none transition-colors text-white placeholder-gray-600" />
                        </div>
                        <div className="relative">
                            <input type="email" placeholder="Your Email" className="w-full bg-transparent border-b border-gray-800 py-4 focus:border-white outline-none transition-colors text-white placeholder-gray-600" />
                        </div>
                        <div className="relative">
                            <textarea rows={4} placeholder="Your Message" className="w-full bg-transparent border-b border-gray-800 py-4 focus:border-white outline-none transition-colors text-white placeholder-gray-600 resize-none" />
                        </div>

                        <button type="submit" className="w-full bg-[#333] text-white font-bold uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-all duration-300">
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Side - Info */}
                <div className="w-full md:w-1/3 space-y-12">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-12">Contact Info</h2>

                    <div>
                        <h3 className="text-gray-500 font-bold mb-4">Where to Find Us</h3>
                        <p className="text-gray-400 leading-relaxed">
                            City Bay Business Center<br />
                            Office No 523 | Abu Hail<br />
                            Road Deira – Dubai
                        </p>
                    </div>

                    <div>
                        <h3 className="text-gray-500 font-bold mb-4">Email Us At</h3>
                        <a href="mailto:info@digtel.ae" className="text-gray-400 hover:text-white transition-colors">info@digtel.ae</a>
                    </div>

                    <div>
                        <h3 className="text-gray-500 font-bold mb-4">Call Us At</h3>
                        <a href="tel:+971503535409" className="text-gray-400 hover:text-white transition-colors">+971 503535409</a>
                    </div>

                    <div className="flex gap-6 text-xl pt-4">
                        <a href="#" className="text-white hover:text-gray-400 transition-colors"><FaFacebookF /></a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors"><FaInstagram /></a>
                        <a href="#" className="text-white hover:text-gray-400 transition-colors"><FaLinkedinIn /></a>
                    </div>
                </div>

            </div>
        </section>
    );
}
