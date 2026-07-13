"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Abebe T.",
    role: "Homebuyer",
    quote: "Fyora made the process of buying our first home in Addis so incredibly smooth. Her knowledge of the Bole area is unmatched. Highly recommend!",
  },
  {
    name: "Sara K.",
    role: "Property Investor",
    quote: "I have worked with many agents, but Fyora stands out. She helped me secure a prime commercial space in Kazanchis at a fantastic price. Professional and sharp.",
  },
  {
    name: "Dawit M.",
    role: "Seller",
    quote: "Selling our family home was an emotional journey. Fyora handled everything with such grace and got us an offer well above our asking price within weeks.",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  return (
    <section className="py-24 bg-charcoal text-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Client Success Stories</h2>
          <div className="w-16 h-1 bg-terracotta mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 md:px-12">
                  <div className="text-center">
                    <div className="flex justify-center gap-1 text-gold mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-serif italic text-clay leading-relaxed mb-10">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-xl">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm tracking-widest uppercase mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
