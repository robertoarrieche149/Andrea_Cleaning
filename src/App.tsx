import React, { useState, useEffect } from "react";

import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Introduction from "./components/layout/Introduction";
import WorkGallery from "./components/layout/WorkGallery";
import ServiceTasks from "./components/layout/ServiceTasks";
import Coverage from "./components/layout/Coverage";
import EstimateForm from "./components/layout/EstimateForm";
import Footer from "./components/layout/Footer";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler for stickiness
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToEstimate = () => {
    const element = document.getElementById("estimate-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-primary selection:text-white antialiased">
      
      {/* 1. NAVBAR / HEADER */}
      <Header isScrolled={isScrolled} />

      {/* 2. HERO SECTION */}
      <Hero onBookNowClick={scrollToEstimate} />

      {/* 3. INTRODUCTION / VALUE PROP */}
      <Introduction />

      {/* 4. WORK GALLERY */}
      <WorkGallery />

      {/* 5. DETAILED SERVICE TASKS */}
      <ServiceTasks />

      {/* 6. COVERAGE & FREQUENCIES */}
      <Coverage />

      {/* 7. ESTIMATE LEAD FORM */}
      <EstimateForm />

      {/* 8. FOOTER */}
      <Footer />

    </div>
  );
}
