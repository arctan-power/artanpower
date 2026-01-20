"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] bg-white flex flex-col">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-width px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#hero" className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Arctan Power Logo" 
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-navy hover:text-primary-orange transition-colors font-medium"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-primary-navy hover:text-primary-orange transition-colors font-medium"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-primary-navy hover:text-primary-orange transition-colors font-medium"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-orange text-white px-6 py-2 rounded-button font-medium hover:bg-opacity-90 transition-all hover:shadow-button"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-primary-navy"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-32 pb-16">
        <div className="container-width px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero md:text-6xl lg:text-7xl font-heading font-bold text-primary-navy mb-6 text-balance">
              Securing & Optimizing Critical
              <br />
              Energy Infrastructure for the Quantum Era
            </h1>

            <p className="text-xl md:text-2xl text-primary-gray mb-10 max-w-3xl mx-auto text-balance">
              AI-powered grid intelligence with quantum-grade security for
              modern utilities and power systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-primary-orange text-white px-8 py-4 rounded-button font-medium text-lg hover:bg-opacity-90 transition-all hover:shadow-button hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Demo
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("solutions")}
                className="border-2 border-primary-navy text-primary-navy px-8 py-4 rounded-button font-medium text-lg hover:bg-primary-navy hover:text-white transition-all hover:shadow-button hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Grid Visualization Placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 relative h-64 md:h-96"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-8 gap-4 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-primary-navy rounded-full animate-pulse"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-accent-cyan rounded-full opacity-30 animate-pulse" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-sm text-primary-gray mb-2">Scroll to explore</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg
            className="w-6 h-6 text-primary-navy"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </section>
  );
}
