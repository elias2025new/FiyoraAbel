"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, HeartHandshake, FileSearch } from "lucide-react";

const valueProps = [
  {
    title: "Unmatched Local Expertise",
    description: "Born and raised in Addis Ababa, my intimate knowledge of the city's diverse neighborhoods ensures you find the perfect location that fits your lifestyle.",
    icon: <MapIcon />,
  },
  {
    title: "Client-Centric Approach",
    description: "Your goals are my priority. I listen carefully, advise honestly, and negotiate fiercely to secure the best possible outcome for you.",
    icon: <HeartHandshake size={36} />,
  },
  {
    title: "Seamless Transactions",
    description: "Real estate can be complex. I handle the intricacies of paperwork, legalities, and logistics so you can focus on your next chapter.",
    icon: <FileSearch size={36} />,
  },
  {
    title: "Aftaza Properties Network",
    description: "Backed by the prestigious Aftaza Properties brokerage, you gain access to an exclusive network of buyers, sellers, and off-market opportunities.",
    icon: <ShieldCheck size={36} />,
  }
];

// Helper icon
function MapIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/>
      <path d="M15 5.764v15"/>
      <path d="M9 3.236v15"/>
    </svg>
  );
}

export default function WhyWorkWithMe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-clay" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-terracotta font-bold tracking-widest uppercase text-sm mb-4 block">The Fyora Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
            Why Work With Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-terracotta shadow-sm">
                {prop.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">{prop.title}</h3>
                <p className="text-charcoal-light leading-relaxed text-lg">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
