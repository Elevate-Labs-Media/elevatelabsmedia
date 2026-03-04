import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Next Project with Elevate Labs",
  description:
    "Ready to elevate your online presence? Get in touch with Elevate Labs for enterprise digital solutions and growth marketing.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-32">
      <ContactSection />
    </div>
  );
};

export default ContactPage;
