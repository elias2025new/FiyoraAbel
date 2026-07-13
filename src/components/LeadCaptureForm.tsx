"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { useInView } from "react-intersection-observer";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(9, "Please enter a valid phone number"),
  intent: z.enum(["buying", "selling", "renting", "consultation"]),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      intent: "buying",
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Placeholder for actual submission logic (e.g., API route, Formspree)
    console.log("Form Data Submitted:", data);
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-clay relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 rounded-l-[100px] -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Let's Make Your Next Move
            </h2>
            <p className="text-xl text-charcoal-light mb-8 max-w-md">
              Whether you're ready to buy, sell, or simply exploring your options in Addis Ababa, I'm here to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-charcoal">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-charcoal-light uppercase tracking-wider">Call Me</div>
                  <a href="tel:+251900575151" className="text-xl font-medium hover:text-terracotta transition-colors">+251 900 575 151</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-charcoal/5 relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
                      <input
                        id="name"
                        {...register("name")}
                        className={`w-full px-4 py-3 bg-clay/50 border ${errors.name ? 'border-red-500' : 'border-clay'} rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1">Phone Number</label>
                      <input
                        id="phone"
                        {...register("phone")}
                        className={`w-full px-4 py-3 bg-clay/50 border ${errors.phone ? 'border-red-500' : 'border-clay'} rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all`}
                        placeholder="+251 900 575 151"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 bg-clay/50 border ${errors.email ? 'border-red-500' : 'border-clay'} rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label htmlFor="intent" className="block text-sm font-medium text-charcoal mb-1">I am looking to...</label>
                    <select
                      id="intent"
                      {...register("intent")}
                      className="w-full px-4 py-3 bg-clay/50 border border-clay rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="buying">Buy a property</option>
                      <option value="selling">Sell my property</option>
                      <option value="renting">Rent a property</option>
                      <option value="consultation">Get a consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">Message (Optional)</label>
                    <textarea
                      id="message"
                      {...register("message")}
                      rows={3}
                      className="w-full px-4 py-3 bg-clay/50 border border-clay rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all resize-none"
                      placeholder="Tell me a bit about what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-charcoal text-white py-4 rounded-xl hover:bg-terracotta transition-colors font-medium text-lg disabled:opacity-70 disabled:cursor-not-allowed group shadow-md"
                  >
                    <span>{isSubmitting ? "Sending..." : "Request Consultation"}</span>
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                  </button>
                  
                  <p className="text-xs text-charcoal-light text-center mt-4">
                    Your information is 100% confidential.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-serif text-charcoal mb-4">Thank You!</h3>
                  <p className="text-charcoal-light text-lg">
                    Your request has been received. I will be in touch with you shortly to discuss your real estate goals.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
