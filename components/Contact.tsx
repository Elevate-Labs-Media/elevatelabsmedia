export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 md:px-12 bg-black text-center">
            <h2 className="text-[10vw] leading-none font-bold uppercase tracking-tighter mb-12">Let's Talk</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Have a project in mind? We'd love to hear from you. Send us a message and let's start something together.</p>

            <a href="mailto:hello@agency.com" className="inline-block border border-white/20 px-12 py-4 text-xl font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300 rounded-full">
                hello@agency.com
            </a>

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
