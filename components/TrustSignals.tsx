"use client";

import { motion } from "framer-motion";

const credentials = [
  "Published IEEE Research",
  "Collaboration with National Laboratories",
  "Partnership with Major Utilities",
  "Master's in Quantum Computing (Paris-Saclay)",
];

const partners = [
  { name: "Oak Ridge National Lab", logo: "🔬" },
  { name: "Tennessee Valley Authority", logo: "⚡" },
  { name: "University of Tennessee", logo: "🎓" },
  { name: "IEEE Publications", logo: "📚" },
];

export default function TrustSignals() {
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
          <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mb-12">
            Trusted by Leading Organizations
          </h2>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 bg-background-light rounded-card hover:shadow-card transition-all"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <p className="text-sm text-primary-gray text-center font-medium">
                  {partner.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-2 bg-background-light p-4 rounded-card"
              >
                <span className="text-accent-green text-xl">✓</span>
                <span className="text-body text-primary-gray">{credential}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background-light p-8 md:p-12 rounded-card text-center max-w-4xl mx-auto"
        >
          <div className="text-4xl mb-4">"</div>
          <p className="text-xl md:text-2xl text-primary-navy font-medium mb-6 italic">
            Arctan Power's technology represents the future of grid management,
            combining cutting-edge AI with quantum-grade security to protect
            critical infrastructure.
          </p>
          <div className="text-primary-gray">
            <p className="font-semibold">Industry Expert</p>
            <p className="text-sm">Power Systems Research</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
