"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Key, TrendingUp, Building, MapPin } from "lucide-react";

const services = [
  {
    title: "Buying a Home",
    description: "From cozy apartments to sprawling estates, I guide you through the Addis Ababa market to find a property that perfectly matches your lifestyle.",
    icon: <Key size={32} />,
  },
  {
    title: "Selling Your Property",
    description: "Maximize your property's value with expert staging advice, professional photography, and targeted digital marketing campaigns.",
    icon: <TrendingUp size={32} />,
  },
  {
    title: "Luxury Rentals",
    description: "Discover exclusive long-term rental properties in premium neighborhoods for expats, diplomats, and discerning locals.",
    icon: <Building size={32} />,
  },
  {
    title: "Property Consultation",
    description: "Get data-driven insights into market trends, investment opportunities, and property valuation in Ethiopia's growing real estate sector.",
    icon: <MapPin size={32} />,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-clay" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Bespoke Real Estate Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-charcoal-light"
          >
            Whether you are expanding your investment portfolio or searching for your forever home, I offer comprehensive services tailored to your needs.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group border border-charcoal/5"
            >
              <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center text-terracotta mb-6 group-hover:scale-110 group-hover:bg-terracotta group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
