import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import ServicesSection from "./components/layout/ServicesSection";
import FrequenciesBanner from "./components/layout/FrequenciesBanner";
import BookingWizard from "./components/BookingWizard";
import Footer from "./components/layout/Footer";
import SmsModal from "./components/layout/SmsModal";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Scroll handler for stickiness
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById("booking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-500 selection:text-white antialiased">
      
      {/* 1. NAVBAR / HEADER */}
      <Header isScrolled={isScrolled} />

      {/* 2. HERO SECTION */}
      <Hero onBookNowClick={scrollToBooking} />

      {/* 3. SERVICES SECTION */}
      <ServicesSection 
        selectedServiceId={selectedService}
        onServiceSelect={handleServiceSelect}
      />

      {/* 4. FREQUENCIES BANNER (inside services container style) */}
      <div className="bg-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FrequenciesBanner />
        </div>
      </div>

      {/* 5. BOOKING SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100" id="booking-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
              Ready to Book Your Cleaning?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Select your service, choose a convenient date, and watch your spaces shine in Atlanta.
            </p>
          </div>

          <BookingWizard 
            selectedServiceId={selectedService} 
            onBookingReset={() => setSelectedService(null)} 
          />
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />

      {/* SMS INQUIRY MODAL Fallback/Interactive */}
      <AnimatePresence>
        {showQuoteModal && (
          <SmsModal 
            isOpen={showQuoteModal} 
            onClose={() => setShowQuoteModal(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
