"use client";

import { motion } from "framer-motion";

const technologies = [
  "Post-Quantum Cryptography (PQC)",
  "Graph Neural Networks (GNN)",
  "Quantum-Inspired Optimization (QUBO)",
  "AI Agent Systems",
  "Real-Time Data Processing",
  "Geographic Information Systems (GIS)",
  "Advanced Visualization",
  "Secure SCADA Integration",
];

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="section-padding bg-white"
    >
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-primary-navy to-primary-orange rounded-card opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Neural network visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-accent-cyan rounded-full animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border-2 border-primary-orange rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
                {Array.from({ length: 8 }).map((_, i) => {
                  const angle = (i * 45 * Math.PI) / 180;
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={i}
                      className="absolute w-4 h-4 bg-primary-navy rounded-full"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Technology List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-orange uppercase text-sm font-semibold tracking-wider">
              REVOLUTIONARY TECHNOLOGY
            </span>
            <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mt-4 mb-8">
              Built on Cutting-Edge AI & Quantum Science
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-background-light px-4 py-2 rounded-full border border-primary-navy border-opacity-20 hover:border-primary-orange hover:bg-primary-orange hover:bg-opacity-10 transition-all"
                >
                  <span className="text-primary-navy font-medium text-sm">
                    ✓ {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
