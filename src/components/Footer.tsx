"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4">Fyora Abel</h3>
            <p className="text-gray-400 mb-6">
              Premier Real Estate Agent in Addis Ababa. Turning your property dreams into reality with Aftaza Properties.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-300">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#listings" className="text-gray-400 hover:text-white transition-colors">Featured Listings</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Fyora</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-300">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">Buying a Home</li>
              <li className="text-gray-400">Selling a Property</li>
              <li className="text-gray-400">Luxury Rentals</li>
              <li className="text-gray-400">Market Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-300">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-terracotta flex-shrink-0 mt-1" />
                <span>+251 900 575 151</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-terracotta flex-shrink-0 mt-1" />
                <span>fyora.abel@aftazaproperties.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-terracotta flex-shrink-0 mt-1" />
                <span>Bole, Addis Ababa, Ethiopia<br/>Aftaza Properties HQ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Keywords Block */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <h4 className="sr-only">Popular Real Estate Searches</h4>
          <p className="text-[11px] text-gray-500/60 leading-relaxed text-center max-w-6xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>real estate agents</span> &bull; 
            <span>property agent</span> &bull; 
            <span>real estate marketing</span> &bull; 
            <span>real estate</span> &bull; 
            <span>realtor agent</span> &bull; 
            <span>sell my property</span> &bull; 
            <span>marketing for real estate agents</span> &bull; 
            <span>real estate for sale</span> &bull; 
            <span>real estate broker</span> &bull; 
            <span>estate agent</span> &bull; 
            <span>find a real estate agent</span> &bull; 
            <span>best estate agents</span> &bull; 
            <span>top real estate agents</span> &bull; 
            <span>find a realtor</span> &bull; 
            <span>local real estate agents</span> &bull; 
            <span>real estate buyers</span> &bull; 
            <span>best real estate agent</span> &bull; 
            <span>real estate companies</span> &bull; 
            <span>buyers agent</span> &bull; 
            <span>property for sale</span> &bull; 
            <span>free estate agents</span> &bull; 
            <span>getting into real estate</span> &bull; 
            <span>best estate agent in my area</span> &bull; 
            <span>real estate agent career</span> &bull; 
            <span>sell your property</span> &bull; 
            <span>Apartment for sale</span> &bull; 
            <span>Shop for sale</span>
          </p>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Fyora Abel Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
