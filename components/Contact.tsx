"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactProps {
  defaultService?: string;
}

const Contact = ({ defaultService = "" }: ContactProps) => {
  const SERVICE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_kcpyfja";
  const TEMPLATE_ID =
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_bv2e4h8";
  const PUBLIC_KEY =
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "VB8j2z5iDb_Fj3Da2";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: defaultService,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formState.name,
          email: formState.email,
          service: formState.service,
          message: formState.message,
        },
        PUBLIC_KEY,
      );

      setStatus("success");

      // Reset form after success
      setFormState({
        name: "",
        email: "",
        service: defaultService,
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 bg-primary/10 border border-primary text-center rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-primary mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-white">
            Thank you for contacting us. We&apos;ll get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 bg-red-500/10 border border-red-500 text-red-500 text-center rounded-lg"
            >
              Something went wrong. Please contact us directly through our mail
              at{" "}
              <a
                href="mailto:info@elevatelabsmedia.ae"
                className="text-white hover:underline font-bold"
              >
                info@elevatelabsmedia.ae
              </a>
            </motion.div>
          )}
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 uppercase">
                Name
              </label>
              <input
                required
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 uppercase">
                Email
              </label>
              <input
                required
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
              />
            </div>
          </div>

          {/* Service */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-400 uppercase">
              Service Interest
            </label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
              placeholder="Creative Design, Media Production, Web Development. "
              value={formState.service}
              onChange={(e) =>
                setFormState({ ...formState, service: e.target.value })
              }
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-gray-400 uppercase">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors"
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 bg-primary text-black font-bold text-lg rounded-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
