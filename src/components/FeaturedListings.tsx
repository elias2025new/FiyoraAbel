"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, BedDouble, Bath, SquareArrowOutUpRight } from "lucide-react";
import { useCallback } from "react";

const listings = [
  {
    id: 1,
    title: "Modern Villa in Bole",
    price: "150,000,000 ETB",
    beds: 5,
    baths: 4,
    area: "850 sqm",
    imagePlaceholder: "Bole Villa Image",
  },
  {
    id: 2,
    title: "Luxury Apartment, Kazanchis",
    price: "45,000,000 ETB",
    beds: 3,
    baths: 2,
    area: "210 sqm",
    imagePlaceholder: "Kazanchis Apartment Image",
  },
  {
    id: 3,
    title: "Family Home in Old Airport",
    price: "85,000,000 ETB",
    beds: 4,
    baths: 3.5,
    area: "500 sqm",
    imagePlaceholder: "Old Airport Home Image",
  },
  {
    id: 4,
    title: "Commercial Space, CMC",
    price: "120,000,000 ETB",
    beds: 0,
    baths: 2,
    area: "1200 sqm",
    imagePlaceholder: "CMC Commercial Image",
  },
];

export default function FeaturedListings() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="listings" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-charcoal-light">
              Explore an exclusive selection of Addis Ababa&apos;s finest real estate.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="hidden md:flex gap-4 mt-6 md:mt-0"
          >
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white hover:border-terracotta transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {listings.map((listing) => (
                <div key={listing.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white rounded-2xl overflow-hidden border border-clay hover:shadow-xl transition-shadow group">
                    <div className="aspect-[4/3] bg-clay relative overflow-hidden flex items-center justify-center">
                       {/* Placeholder for Property Image */}
                       <div className="text-charcoal-light italic font-medium z-10">
                         [{listing.imagePlaceholder}]
                       </div>
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-20" />
                    </div>
                    <div className="p-6">
                      <div className="text-terracotta font-bold text-xl mb-2">{listing.price}</div>
                      <h3 className="text-xl font-serif text-charcoal mb-4 line-clamp-1">{listing.title}</h3>
                      
                      <div className="flex gap-4 text-charcoal-light text-sm mb-6 border-b border-clay pb-4">
                        {listing.beds > 0 && (
                          <div className="flex items-center gap-1">
                            <BedDouble size={16} />
                            <span>{listing.beds} Beds</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Bath size={16} />
                          <span>{listing.baths} Baths</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <SquareArrowOutUpRight size={16} />
                          <span>{listing.area}</span>
                        </div>
                      </div>
                      
                      <a href="#contact" className="block w-full text-center py-3 bg-clay text-charcoal font-medium rounded-lg group-hover:bg-charcoal group-hover:text-white transition-colors">
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden gap-4 mt-8 justify-center">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
