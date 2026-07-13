"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-clay rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-charcoal-light italic">
                [Secondary Headshot Placeholder]
              </div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-terracotta/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Redefining Real Estate in Addis Ababa
              </h2>
              <div className="w-16 h-1 bg-terracotta mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-lg text-charcoal-light"
            >
              <p>
                As a premier agent with Aftaza Properties, I believe that buying or selling a home is more than just a transaction—it&apos;s a life-changing experience. With over a decade of dedicated service in the Addis Ababa market, I take pride in building relationships rooted in trust, transparency, and results.
              </p>
              <p>
                My approach is highly personalized. I take the time to understand your unique lifestyle needs and financial goals, ensuring that every step of the journey is seamless and stress-free. From uncovering hidden gems in Bole to securing the best possible price for your family home, my local expertise and global marketing strategies are your ultimate advantage.
              </p>
              <div className="pt-4">
                <a href="#contact" className="text-terracotta font-semibold hover:text-charcoal transition-colors uppercase tracking-widest text-sm flex items-center gap-2">
                  Let&apos;s talk about your vision
                  <span className="text-xl">&rarr;</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
