"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "1000+", label: "Scenarios Analyzed", icon: "📊" },
  { number: "<1 min", label: "Analysis Time", icon: "⚡" },
  { number: "100%", label: "Quantum Protected", icon: "🛡️" },
];

export default function SolutionOverview() {
  return (
    <section
      id="solutions"
      className="section-padding bg-white"
    >
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-orange uppercase text-sm font-semibold tracking-wider">
              OUR SOLUTION
            </span>
            <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mt-4 mb-6">
              Introducing ArcGrid
            </h2>
            <p className="text-xl text-primary-gray mb-6 font-semibold">
              The AI-Powered Grid Intelligence Platform with Quantum-Grade
              Security
            </p>
            <p className="text-body text-primary-gray leading-relaxed mb-8">
              ArcGrid revolutionizes power grid management by combining
              cutting-edge artificial intelligence, advanced geographic
              visualization, and post-quantum cryptography. Our platform
              analyzes thousands of scenarios in minutes, identifies critical
              vulnerabilities before they become costly outages, and protects
              your infrastructure for the quantum future.
            </p>
          </motion.div>

          {/* Right: Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 bg-gradient-to-br from-primary-navy to-accent-cyan rounded-card shadow-card overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center p-8">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl font-semibold">Dashboard Preview</p>
                <p className="text-sm opacity-80 mt-2">
                  Geographic grid visualization with AI overlays
                </p>
              </div>
            </div>
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-10 gap-2 h-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-white animate-pulse"
                    style={{
                      animationDelay: `${i * 0.02}s`,
                      animationDuration: "3s",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background-light p-8 rounded-card text-center hover:shadow-card transition-all"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary-navy mb-2">
                {stat.number}
              </div>
              <div className="text-body text-primary-gray">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
