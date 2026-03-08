import Link from "next/link";
import { SERVICES, NAV_LINKS } from "@/lib/constants";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background pt-20 pb-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Elevate Labs</h2>
          <p className="mb-6 leading-relaxed">
            Building the digital future with innovation, strategy, and design.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/share/1butHop65C/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/elevate-labs-media/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/elevatelabsmedia?igsh=cmR1bHVqOWVmempk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:elevatelabsmedia@gmail.com"
              aria-label="Email"
              className="text-white hover:text-primary transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors block text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services Column - Spans 2 columns on large screens to accommodate grid */}
        <div className="lg:col-span-2">
          <h3 className="text-white font-bold mb-6 text-lg">Our Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {Object.entries(SERVICES).map(([slug, service]) =>
              [
                "digital-marketing",
                "branding",
                "creative-design",
                "media-production",
                "e-commerce",
                "seo-optimization",
              ].includes(slug) ? (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {service.title}
                </Link>
              ) : (
                <div
                  key={slug}
                  className="text-gray-400 hover:text-primary transition-colors cursor-default"
                >
                  {service.title}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className="max-w-7xl mx-auto px-4 md:px-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Elevate Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
