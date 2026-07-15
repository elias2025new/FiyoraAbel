"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headline = "Trusted Real Estate Agent in Addis Ababa";
  
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Soft Color */}
      <div className="absolute inset-0 bg-gradient-to-br from-clay to-white z-0" />
      
      {/* Soft Parallax shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col md:grid md:grid-cols-2 gap-y-8 md:gap-x-12 md:gap-y-6 items-center">
        
        {/* Text Content - Headline */}
        <div className="w-full md:col-start-1 md:row-start-1 z-10 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight md:mb-2 text-center md:text-left">
            {headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-2 md:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          {/* Amharic Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-terracotta mt-3 text-center md:text-left tracking-wide"
          >
            የንግድ ቦታ ይግዙ
          </motion.p>
        </div>
        
        {/* Image / Headshot */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:col-start-2 md:row-start-1 md:row-span-3 relative h-[450px] sm:h-[550px] md:h-[600px] max-w-md mx-auto md:ml-auto z-0 mt-4 md:mt-0"
        >
          <div className="absolute inset-0 bg-terracotta/10 rounded-t-full rounded-b-3xl transform rotate-3 scale-105" />
          <div className="relative h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.png"
              alt="Fyora Abel - Real Estate Agent in Addis Ababa making a call sign, full body photo"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom drop-shadow-xl"
              fetchPriority="high"
            />
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white p-4 rounded-xl md:rounded-2xl shadow-xl border border-clay flex items-center gap-3 md:gap-4 scale-95 md:scale-100 origin-bottom-left"
          >
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl">
              4+
            </div>
            <div>
              <p className="text-sm font-bold text-charcoal">Years</p>
              <p className="text-xs text-charcoal-light">Experience</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content - Paragraph */}
        <div className="w-full md:col-start-1 md:row-start-2 z-10 mt-6 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-charcoal-light max-w-lg mx-auto md:mx-0 text-center md:text-left"
          >
            Navigating the Addis Ababa market with elegance, expertise, and an unwavering commitment to your real estate goals.
          </motion.p>
        </div>

        {/* Text Content - Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="w-full md:col-start-1 md:row-start-3 z-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full hover:bg-terracotta transition-colors shadow-lg w-full sm:w-auto text-center"
          >
            <span>Work With Me</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#listings"
            className="flex items-center justify-center gap-2 bg-white text-charcoal border border-charcoal/10 px-8 py-4 rounded-full hover:bg-clay transition-colors shadow-sm w-full sm:w-auto text-center"
          >
            View Listings
          </a>
        </motion.div>

      </div>
    </section>
  );
}
