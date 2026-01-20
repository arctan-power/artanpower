"use client";

import { motion } from "framer-motion";

const modules = [
  {
    name: "ARCGRID INTELLIGENCE™",
    icon: "🧠",
    description:
      "AI-powered contingency analysis and predictive failure detection",
  },
  {
    name: "ARCGRID VISION™",
    icon: "🗺️",
    description:
      "Geographic network visualization and topology mapping",
  },
  {
    name: "ARCGRID SENTINEL™",
    icon: "🛡️",
    description:
      "Post-quantum cryptography and quantum-resistant security",
  },
  {
    name: "ARCGRID COMMAND™",
    icon: "⚡",
    description:
      "Real-time operations dashboard and decision support system",
  },
];

export default function ProductModules() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary-navy to-[#1A2332] text-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-heading font-bold mb-6 text-white">
            Four Integrated Modules. One Powerful Platform.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 p-8 rounded-card hover:bg-opacity-20 hover:border-primary-orange transition-all hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {module.icon}
              </div>
              <h3 className="text-h3 font-heading font-bold mb-4">
                {module.name}
              </h3>
              <p className="text-body text-white text-opacity-90 mb-6 leading-relaxed">
                {module.description}
              </p>
              <button className="text-primary-orange font-medium hover:underline flex items-center group-hover:translate-x-2 transition-transform">
                Explore
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
