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
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
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
            <div className="relative h-32 w-full bg-gradient-to-br from-[#1A1A1A] to-[#333333]">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute -bottom-6 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-lg ring-4 ring-white">
                <Store className="h-8 w-8 text-[#1A1A1A]" />
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-8 pt-10 text-center">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                50 Premium Shops
              </h3>
              
              <div className="mb-6 space-y-3 text-gray-600">
                <p className="font-semibold text-lg text-gray-800">
                  9.55 m² – 39 m²
                </p>
                <p className="text-sm leading-relaxed">
                  Prime locations available on the Ground, First, Mezzanine, and Second floors. Perfect for your next business venture.
                </p>
              </div>

              {/* Call to Action */}
              <a
                href="tel:+251900575151"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-black hover:shadow-md active:scale-[0.98]"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
                Call Now If Interested
              </a>
              
              <button
                onClick={handleClose}
                className="mt-4 text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
