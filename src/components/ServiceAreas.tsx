"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin } from "lucide-react";

const areas = [
  "Bole",
  "Kazanchis",
  "Old Airport",
  "CMC",
  "Mekanisa",
  "Sarbet",
  "Ayat",
  "Piazza"
];

export default function ServiceAreas() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
            Serving Addis Ababa's Premier Neighborhoods
          </h2>
          <p className="text-charcoal-light max-w-2xl mx-auto">
            Deep local knowledge across the most sought-after residential and commercial districts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 px-6 py-3 bg-clay text-charcoal rounded-full font-medium border border-charcoal/5 hover:bg-terracotta hover:text-white hover:border-terracotta transition-colors shadow-sm"
            >
              <MapPin size={18} />
              <span>{area}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
