"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling past hero, hide near footer
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      
      const pastHero = scrollPosition > windowHeight * 0.8;
      const nearFooter = scrollPosition + windowHeight > documentHeight - 600;

      setIsVisible(pastHero && !nearFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/90 backdrop-blur-md border-t border-charcoal/10 md:hidden flex gap-2 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <a
            href="tel:+251900575151"
            className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-3.5 rounded-xl font-medium"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <a
            href="#contact"
            className="flex-[0.5] flex items-center justify-center bg-clay text-charcoal border border-charcoal/10 py-3.5 rounded-xl"
            aria-label="Contact Form"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
