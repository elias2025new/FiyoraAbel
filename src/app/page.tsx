import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedListings from "@/components/FeaturedListings";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <FeaturedListings />
      <WhyWorkWithMe />
      <Testimonials />
      <ServiceAreas />
      <LeadCaptureForm />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
