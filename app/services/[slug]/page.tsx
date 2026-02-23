import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Contact from "@/components/Contact";

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({
    slug,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = SERVICES[slug as keyof typeof SERVICES];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Elevate Labs`,
    description: service.description,
  };
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES[slug as keyof typeof SERVICES];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* <Link
          href="/#services"
          scroll={false}
          className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </Link> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {service.title}
            </h1>
            <div className="w-24 h-1 bg-primary mb-8" />
            <p className="text-xl text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
            <ul className="grid gap-4">
              {service.subServices.map((sub, i) => (
                <li
                  key={i}
                  className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span className="text-lg">{sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Dynamic CTA / Contact Section pre-filled for this service could go here */}
        <div className="border-t border-white/10 pt-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            Ready to elevate your {service.title}?
          </h2>
          <Contact defaultService={service.title} />
        </div>
      </div>
    </div>
  );
}
