"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, BedDouble, Store, SquareArrowOutUpRight, Layers, X, CheckCircle2 } from "lucide-react";
import { useCallback, useState, useEffect } from "react";

const listings = [
  {
    id: 1,
    title: "Commercial Shops (50 Available)",
    price: "From 195,000 ETB / m²",
    beds: 0,
    area: "9.55 m² – 39 m²",
    floors: "Ground, 1st, Mezzanine & 2nd",
    imagePlaceholder: "Commercial Shops Image",
    details: {
      description: "የንግድ ሱቆች ከ9.55 እስከ 39 ካሬ ድረስ",
      variants: [
        { label: "ምድር ላይ (Ground Floor)", price: "295,000 ብር / ካሬ" },
        { label: "ሜዛኒን ላይ (Mezzanine)", price: "285,000 ብር / ካሬ" },
        { label: "1ኛ ወለል ላይ (1st Floor)", price: "245,000 ብር / ካሬ" },
        { label: "2ኛ ወለል ላይ (2nd Floor)", price: "195,000 ብር / ካሬ" },
      ],
      terms: [
        "ቅድመ ክፍያ 30% ነው",
        "100% ለሚከፍሉ 25% ቅናሽ ይደረጋል",
        "መረከቢያ ጊዜ ከ 6-8 ወር"
      ]
    }
  },
  {
    id: 2,
    title: "Luxury Apartments",
    price: "From 5,130,000 ETB",
    beds: 2,
    area: "76 m² – 139 m²",
    floors: "Multiple Variants",
    imagePlaceholder: "Luxury Apartments Image",
    details: {
      description: "አፓርትመንት ቤቶችን በካሬ በ90,000 ብር ብቻ",
      variants: [
        { label: "ባለ 3 መኝታ A (136 ካሬ)", price: "9,180,000 ብር" },
        { label: "ባለ 3 መኝታ B (139 ካሬ)", price: "9,382,500 ብር" },
        { label: "ባለ 2 መኝታ A (85 ካሬ)", price: "5,737,500 ብር" },
        { label: "ባለ 2 መኝታ B (76 ካሬ)", price: "5,130,000 ብር" },
      ],
      terms: [
        "ቅድመ ክፍያ ከ 20% ጀምሮ፣ ቀሪውን በ 2 አመት መክፈል ይቻላል",
        "100% ለሚከፍሉ የ30% ቅናሽ",
        "መረከብያ ጊዜ እስከ 1 አመት ከ6 ወር"
      ],
      amenities: [
        "ሊፍት (Elevator)",
        "ስታንድ ባይ ጀነሬተር (Standby Generator)",
        "የከርሰምድር ውሀ (Groundwater)"
      ]
    }
  }
];

export default function FeaturedListings() {
  const [selectedListing, setSelectedListing] = useState<typeof listings[0] | null>(null);

  useEffect(() => {
    if (selectedListing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedListing]);
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
                <div key={listing.id} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] pl-4">
                  <div className="bg-white rounded-2xl overflow-hidden border border-clay hover:shadow-xl transition-shadow group h-full flex flex-col">
                    <div className="aspect-[4/3] bg-clay relative overflow-hidden flex items-center justify-center cursor-pointer" onClick={() => setSelectedListing(listing)}>
                       {/* Placeholder for Property Image */}
                       <div className="text-charcoal-light italic font-medium z-10">
                         [{listing.imagePlaceholder}]
                       </div>
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-20" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-terracotta font-bold text-xl mb-2">{listing.price}</div>
                      <h3 className="text-xl font-serif text-charcoal mb-4 line-clamp-1">{listing.title}</h3>
                      
                      <div className="flex flex-wrap gap-3 text-charcoal-light text-sm mb-6 border-b border-clay pb-4">
                        {listing.beds > 0 && (
                          <div className="flex items-center gap-1">
                            <BedDouble size={16} />
                            <span>{listing.beds}+ Beds</span>
                          </div>
                        )}
                        {listing.id === 1 && (
                          <div className="flex items-center gap-1">
                            <Store size={16} />
                            <span>50 Shops</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <SquareArrowOutUpRight size={16} />
                          <span>{listing.area}</span>
                        </div>
                        {listing.floors && (
                          <div className="flex items-center gap-1">
                            <Layers size={16} />
                            <span>{listing.floors}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-auto pt-2">
                        <button onClick={() => setSelectedListing(listing)} className="block w-full text-center py-3 bg-clay text-charcoal font-medium rounded-lg hover:bg-terracotta hover:text-white transition-colors">
                          View Details & Options
                        </button>
                      </div>
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

        {/* Details Modal */}
        <AnimatePresence>
          {selectedListing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedListing(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-clay px-6 py-4 flex justify-between items-center z-10 shrink-0">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">{selectedListing.title}</h3>
                  <button onClick={() => setSelectedListing(null)} className="w-8 h-8 flex items-center justify-center rounded-full bg-clay/50 text-charcoal hover:bg-terracotta hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6 overflow-y-auto">
                  <p className="text-xl font-bold text-terracotta mb-6">{selectedListing.details.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-charcoal mb-4 border-b border-clay pb-2">Available Options</h4>
                    <div className="space-y-3">
                      {selectedListing.details.variants.map((variant, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-clay/30 p-3 rounded-lg">
                          <span className="font-medium text-charcoal">{variant.label}</span>
                          <span className="font-bold text-terracotta">{variant.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-charcoal mb-4 border-b border-clay pb-2">Terms & Conditions</h4>
                    <ul className="space-y-3">
                      {selectedListing.details.terms.map((term, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-charcoal-light">
                          <CheckCircle2 size={20} className="text-terracotta flex-shrink-0 mt-0.5" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {selectedListing.details.amenities && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-charcoal mb-4 border-b border-clay pb-2">Amenities Included</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedListing.details.amenities.map((amenity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-charcoal-light">
                            <CheckCircle2 size={18} className="text-terracotta/70 flex-shrink-0 mt-1" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="pt-4 border-t border-clay mt-auto shrink-0">
                    <a href="#contact" onClick={() => setSelectedListing(null)} className="flex items-center justify-center w-full py-4 bg-terracotta text-white font-bold rounded-xl hover:bg-charcoal transition-colors">
                      Contact Agent to Book
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
