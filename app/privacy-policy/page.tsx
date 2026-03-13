import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Elevate Labs Media",
  description:
    "Privacy Policy for Elevate Labs Media - How we handle and protect your data.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "March 10, 2026";

  return (
    <main className="min-h-screen bg-black text-gray-300 py-24 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-primary hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 italic">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Introduction
            </h2>
            <p className="leading-relaxed">
              At Elevate Labs Media, we are committed to protecting the privacy
              and security of our clients and website visitors. This Privacy
              Policy explains how we collect, use, and safeguard your
              information when you interact with our website and services in Abu
              Dhabi, United Arab Emirates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Information Collection
            </h2>
            <p className="leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out our contact forms or request a consultation.</li>
              <li>
                Communicate with us via email or other direct contact methods.
              </li>
              <li>Subscribe to our newsletters or updates.</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              This information may include your name, email address, phone
              number, company name, and details about your project or inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              How We Use Your Information
            </h2>
            <p className="leading-relaxed mb-4">
              The information we collect is used primarily to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Improve our website functionality and user experience.</li>
              <li>
                Communicate updates regarding our services and industry
                insights.
              </li>
              <li>
                Ensure the security and integrity of our digital platforms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Data Protection and Security
            </h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction. We use secure servers and encryption
              protocols to ensure that your data remains confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Cookie Usage
            </h2>
            <p className="leading-relaxed">
              Our website uses essential cookies to ensure basic functionality
              and to analyze traffic patterns in an anonymized manner. These
              cookies help us understand how visitors interact with our site,
              allowing us to provide a more seamless experience. You can manage
              your cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Third-Party Sharing
            </h2>
            <p className="leading-relaxed">
              Elevate Labs Media maintains a strict policy against selling,
              trading, or sharing your personal information with third parties
              for marketing purposes. Your data is only shared with trusted
              service providers who assist us in operating our website or
              conducting our business, provided they agree to keep this
              information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Data Retention
            </h2>
            <p className="leading-relaxed">
              We retain your personal information only for as long as necessary
              to fulfill the purposes for which it was collected, including for
              the purposes of satisfying any legal, accounting, or reporting
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              Policy Updates
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal and regulatory reasons. Any
              changes will be posted on this page with an updated "Last Updated"
              date.
            </p>
          </section>

          <section className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-6 mt-0">
              Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any queries please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
