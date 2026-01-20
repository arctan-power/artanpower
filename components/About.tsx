"use client";

import { motion } from "framer-motion";

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="section-padding bg-background-light"
    >
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-orange uppercase text-sm font-semibold tracking-wider">
            ABOUT US
          </span>
          <h2 className="text-h1 md:text-5xl font-heading font-bold text-primary-navy mt-4 mb-8">
            Built by Experts in Quantum Computing & Power Systems
          </h2>
          <p className="text-xl text-primary-gray max-w-4xl mx-auto leading-relaxed">
            Arctan Power was founded by AI and quantum computing experts with experience at leading industry in the field.
          </p>
          <p className="text-body text-primary-gray max-w-4xl mx-auto mt-6 leading-relaxed">
            Our team combines deep expertise in post-quantum cryptography,
            artificial intelligence, graph neural networks, and power system
            optimization to deliver the next generation of grid management
            technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
