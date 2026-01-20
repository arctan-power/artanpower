"use client";

import { motion } from "framer-motion";

export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-primary-navy to-[#1A2332] text-white"
    >
      <div className="container-width text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h1 md:text-5xl font-heading font-bold mb-6 text-white">
            Ready to Transform Your Grid Management?
          </h2>
          <p className="text-xl text-white text-opacity-90 mb-10 max-w-3xl mx-auto">
            Join leading utilities in securing and optimizing their
            infrastructure for the quantum era
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="bg-primary-orange text-white px-10 py-5 rounded-button font-medium text-lg hover:bg-opacity-90 transition-all hover:shadow-button hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-10 py-5 rounded-button font-medium text-lg hover:bg-white hover:text-primary-navy transition-all hover:shadow-button hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white text-opacity-80">
            <a
              href="mailto:contact@arctanpower.com"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>contact@arctanpower.com</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://linkedin.com/company/arctanpower"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
