"use client";

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        setStatus('sending');

        emailjs
            .sendForm('service_w4ehq17', 'template_ls2em6n', form.current, {
                publicKey: 'XR7hy2NvuKPVARIUd',
            })
            .then(
                () => {
                    setStatus('success');
                    form.current?.reset();
                    setTimeout(() => setStatus('idle'), 3000);
                },
                (error: any) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 3000);
                },
            );
    };

    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-black text-center">
            <h2 className="text-[10vw] leading-none font-bold uppercase tracking-tighter mb-12">Let's Talk</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you. Send us a message and let's start something together.</p>

            <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                        <input type="text" name="name" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                        <input type="email" name="email" required className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                </div>



                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                    <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-gray-200 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                </button>
            </form>

            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm uppercase tracking-widest text-gray-500">
                <div>
                    <h4 className="text-white mb-4">Socials</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white mb-4">Location</h4>
                    <p>New York, NY<br />10001, USA</p>
                </div>
                <div>
                    <h4 className="text-white mb-4">Call</h4>
                    <p>+1 (555) 000-0000</p>
                </div>
                <div>
                    <h4 className="text-white mb-4">Legal</h4>
                    <p>Privacy Policy<br />Terms of Service</p>
                </div>
            </div>
        </section>
    );
}
