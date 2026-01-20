"use client";

import { motion } from "framer-motion";

const securityFeatures = [
  "ML-DSA (Digital Signatures)",
  "ML-KEM (Key Encapsulation)",
  "SLH-DSA (Stateless Hash-Based Signatures)",
  "Quantum-Resistant Authentication",
  "Secure SCADA/OT Communications",
];

export default function QuantumSecurity() {
  return (
    <section className="section-padding bg-[#FFF5E6]">
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Shield visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl">🛡️</div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-4 border-primary-orange rounded-full animate-pulse opacity-50" />
                </div>
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-accent-cyan rounded-full"
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

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-orange uppercase text-sm font-semibold tracking-wider">
              QUANTUM-GRADE SECURITY
            </span>
            <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mt-4 mb-6">
              Protected Against Tomorrow's Threats
            </h2>
            <p className="text-body text-primary-gray leading-relaxed mb-8">
              As quantum computers advance, today's encryption will become
              obsolete. ArcGrid is built from the ground up with NIST-approved
              post-quantum cryptography, ensuring your critical infrastructure
              remains secure for decades to come.
            </p>
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-accent-green text-xl">✓</span>
                  <span className="text-body text-primary-gray">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
