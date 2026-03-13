import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Elevate Labs Media",
  description:
    "Terms of Service for Elevate Labs Media - Our website usage rules and policies.",
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 italic">
            Last Updated: {lastUpdated}
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using the Elevate Labs Media website, you agree
              to be bound by these Terms of Service and all applicable laws and
              regulations in the United Arab Emirates. If you do not agree with
              any of these terms, you are prohibited from using or accessing
              this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              2. Website Usage Rules
            </h2>
            <p className="leading-relaxed mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the website in any way that violates local or international
                laws.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the
                website.
              </li>
              <li>
                Transmit any harmful code or interfere with the website's
                performance.
              </li>
              <li>
                Use any automated system to extract data from the website
                without our permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              3. Intellectual Property Rights
            </h2>
            <p className="leading-relaxed">
              All content on this website, including but not limited to text,
              graphics, logos, images, and software, is the property of Elevate
              Labs Media or its content suppliers and is protected by
              international copyright and intellectual property laws. You may
              not reproduce, distribute, or create derivative works from this
              content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              4. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              Elevate Labs Media shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of this
              website or inability to access it. We do not warrant that the
              website will be error-free or uninterrupted, or that the
              information provided is always complete or accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              5. Updates to Terms
            </h2>
            <p className="leading-relaxed">
              Elevate Labs Media reserves the right to modify these Terms of
              Service at any time without prior notice. By continuing to use the
              website after such changes are posted, you agree to be bound by
              the revised terms. We encourage you to review this page
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">
              6. Governing Law
            </h2>
            <p className="leading-relaxed">
              These terms are governed by and construed in accordance with the
              laws of the United Arab Emirates. Any disputes relating to these
              terms shall be subject to the exclusive jurisdiction of the courts
              of Abu Dhabi.
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
