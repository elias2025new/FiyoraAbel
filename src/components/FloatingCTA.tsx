"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling past a certain point
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      const pastHero = scrollPosition > windowHeight * 0.5;
      const nearFooter = scrollPosition + windowHeight > documentHeight - 600;

      // Always show after hero, optionally hide near footer if desired
      setIsVisible(pastHero && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
        >
          <a
            href="tel:+251900575151"
            className="flex items-center justify-center gap-2 bg-charcoal text-white px-6 py-4 rounded-full font-medium shadow-lg hover:bg-charcoal/90 hover:-translate-y-1 transition-all duration-300"
            aria-label="Call Now"
          >
            <Phone size={20} className="animate-pulse" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          
          <a
            href="https://t.me/+251900575151"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#229ED9] text-white p-3 rounded-full shadow-md hover:bg-[#229ED9]/90 hover:-translate-y-1 transition-all duration-300 group relative"
            aria-label="Message on Telegram"
          >
            <Send size={16} className="relative right-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            {/* Tooltip on hover */}
            <span className="absolute right-full mr-3 bg-white text-charcoal text-xs font-medium px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Telegram
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
