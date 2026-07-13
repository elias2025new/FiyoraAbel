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
            <div className="flex p-4 gap-4">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#1A1A1A]">
                  <Store className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      50 Premium Shops
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      <span className="font-semibold text-gray-800">9.55 m² – 39 m²</span> available on Ground, 1st, Mezzanine, & 2nd floors.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="ml-2 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Actions */}
                <div className="mt-3 flex items-center gap-3">
                  <a
                    href="tel:+251900575151"
                    className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#1A1A1A] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-black hover:shadow-md active:scale-95"
                  >
                    <Phone className="h-3 w-3 transition-transform group-hover:scale-110" />
                    Call Now
                  </a>
                  <button
                    onClick={handleClose}
                    className="flex-1 rounded-lg px-3 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
