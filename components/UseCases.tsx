"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    icon: "📊",
    title: "Contingency Analysis",
    description:
      "Simulate N-1, N-2 contingencies across thousands of scenarios. Identify critical buses and prevent cascading failures.",
  },
  {
    icon: "🔋",
    title: "Renewable Integration",
    description:
      "Optimize grid operations as renewable penetration increases. Predict impacts and maintain stability.",
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Protect SCADA systems and critical communications with quantum-resistant encryption.",
  },
];

export default function UseCases() {
  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mb-6">
            Real-World Applications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background-light p-8 rounded-card shadow-card hover:shadow-hover transition-all hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{useCase.icon}</div>
              <h3 className="text-h3 font-heading font-bold text-primary-navy mb-4">
                {useCase.title}
              </h3>
              <p className="text-body text-primary-gray leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
