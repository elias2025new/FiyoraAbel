"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Store } from "lucide-react";

export default function OnboardingPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenOnboardingPopup");
    
    if (!hasSeenPopup) {
      // Show the popup after a 1.5s delay for a smoother entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenOnboardingPopup", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-end md:bottom-8 md:right-8 md:left-auto pointer-events-none">
          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="pointer-events-auto relative w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/10 p-2 text-white transition-colors hover:bg-black/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header Image/Pattern Area */}
            <div className="relative h-24 w-full bg-gradient-to-br from-[#1A1A1A] to-[#333333]">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute -bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg ring-4 ring-white">
                <Store className="h-6 w-6 text-[#1A1A1A]" />
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-6 pt-8 text-left">
              <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                50 Premium Shops
              </h3>
              
              <div className="mb-5 space-y-2 text-gray-600">
                <p className="font-semibold text-gray-800">
                  9.55 m² – 39 m²
                </p>
                <p className="text-sm leading-relaxed">
                  Available on the Ground, First, Mezzanine, and Second floors.
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex items-center gap-3">
                <a
                  href="tel:+251900575151"
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black hover:shadow-md active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Call Now
                </a>
                
                <button
                  onClick={handleClose}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
