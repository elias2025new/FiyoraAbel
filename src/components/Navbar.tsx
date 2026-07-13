"use client";

import { motion } from "framer-motion";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-clay/80 backdrop-blur-md border-b border-charcoal/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-charcoal">
              Fyora Abel
            </span>
            <span className="hidden sm:inline-block text-sm text-charcoal-light border-l border-charcoal/20 pl-2">
              Aftaza Properties
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["Services", "Listings", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-charcoal-light hover:text-terracotta transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+251900575151"
              className="flex items-center gap-2 bg-terracotta text-white px-5 py-2.5 rounded-full hover:bg-terracotta-light transition-colors shadow-sm hover:shadow-md"
            >
              <Phone size={16} />
              <span className="font-medium text-sm">Call Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal p-2 focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-clay border-b border-charcoal/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {["Services", "Listings", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-charcoal hover:bg-white/50 rounded-md"
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+251900575151"
              className="mt-4 flex justify-center items-center gap-2 bg-terracotta text-white px-5 py-3 rounded-full hover:bg-terracotta-light transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
