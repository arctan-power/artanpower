"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "🔐",
    title: "Quantum Threat",
    description:
      "Quantum computers will break current encryption by 2030, exposing critical infrastructure to catastrophic cyberattacks",
  },
  {
    icon: "⚡",
    title: "Grid Complexity",
    description:
      "Integration of renewables, distributed assets, and real-time data creates unprecedented operational challenges",
  },
  {
    icon: "👁️",
    title: "Visibility Gaps",
    description:
      "Operators lack tools to predict failures and visualize their entire network in real-time",
  },
];

export default function ProblemStatement() {
  return (
    <section
      id="challenge"
      className="section-padding bg-background-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-4 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-primary-navy"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-orange uppercase text-sm font-semibold tracking-wider">
            THE CHALLENGE
          </span>
          <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mt-4 mb-6">
            Power Grids Face Unprecedented Challenges
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-card shadow-card hover:shadow-hover transition-all hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-h3 font-heading font-bold text-primary-navy mb-4">
                {problem.title}
              </h3>
              <p className="text-body text-primary-gray leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
