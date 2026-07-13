"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const headline = "Trusted Real Estate Agent in Addis Ababa";
  
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Soft Color */}
      <div className="absolute inset-0 bg-gradient-to-br from-clay to-white z-0" />
      
      {/* Soft Parallax shapes */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-tight mb-6">
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
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-charcoal-light mb-8 max-w-lg"
          >
            Navigating the Addis Ababa market with elegance, expertise, and an unwavering commitment to your real estate goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-charcoal text-white px-8 py-4 rounded-full hover:bg-terracotta transition-colors shadow-lg"
            >
              <span>Work With Me</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#listings"
              className="flex items-center gap-2 bg-white text-charcoal border border-charcoal/10 px-8 py-4 rounded-full hover:bg-clay transition-colors shadow-sm"
            >
              View Listings
            </a>
          </motion.div>
        </div>
        
        {/* Image / Headshot */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[600px] w-full max-w-md mx-auto md:ml-auto"
        >
          <div className="absolute inset-0 bg-terracotta/10 rounded-t-full rounded-b-3xl transform rotate-3 scale-105" />
          <div className="relative h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/headshot.png"
              alt="Fyora Abel - Real Estate Agent in Addis Ababa making a call sign, full body photo"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto object-contain object-bottom"
              fetchPriority="high"
            />
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-clay flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white font-bold text-xl">
              10+
            </div>
            <div>
              <p className="text-sm font-bold text-charcoal">Years</p>
              <p className="text-xs text-charcoal-light">Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
