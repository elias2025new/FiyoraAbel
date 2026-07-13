"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Home, Users, Star, Award } from "lucide-react";

export default function TrustBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Home size={24} />, value: "150+", label: "Properties Sold" },
    { icon: <Users size={24} />, value: "200+", label: "Happy Clients" },
    { icon: <Star size={24} />, value: "5.0", label: "Average Rating" },
    { icon: <Award size={24} />, value: "Top 1%", label: "Aftaza Properties" },
  ];

  return (
    <section className="bg-charcoal text-white py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-charcoal-light/30">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-terracotta mb-3">{stat.icon}</div>
              <div className="text-3xl font-serif font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300 tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
