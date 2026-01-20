"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🧠",
    title: "Predictive Intelligence",
    description:
      "AI-powered contingency analysis simulates thousands of failure scenarios, identifying critical buses and potential cascading failures before they occur.",
  },
  {
    icon: "🗺️",
    title: "Geographic Insight",
    description:
      "Advanced mapping integration visualizes your entire network topology, making complex electrical data intuitive and actionable.",
  },
  {
    icon: "⚡",
    title: "Real-Time Analysis",
    description:
      "Process grid data instantly with live status updates, enabling operators to make informed decisions in critical moments.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="section-padding bg-background-light">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mb-6">
            Comprehensive Grid Intelligence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-card shadow-card hover:shadow-hover transition-all hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-h3 font-heading font-bold text-primary-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-body text-primary-gray leading-relaxed mb-6">
                {feature.description}
              </p>
              <button className="text-primary-orange font-medium hover:underline flex items-center group-hover:translate-x-2 transition-transform">
                Learn More
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
