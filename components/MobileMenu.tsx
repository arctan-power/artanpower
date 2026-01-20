"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  scrollToSection,
}: MobileMenuProps) {
  const menuItems = [
    { label: "About Us", id: "about" },
    { label: "Solutions", id: "solutions" },
    { label: "Technology", id: "technology" },
    { label: "Contact", id: "contact" },
  ];

  const handleClick = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <span className="text-primary-navy font-heading font-bold text-xl">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="text-primary-navy hover:text-primary-orange transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-6">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleClick(item.id)}
                        className="w-full text-left text-primary-navy hover:text-primary-orange transition-colors font-medium text-lg py-2"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t">
                <button
                  onClick={() => handleClick("contact")}
                  className="w-full bg-primary-orange text-white px-6 py-3 rounded-button font-medium hover:bg-opacity-90 transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
