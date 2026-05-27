import React from "react";
import { Phone } from "lucide-react";
import logoImg from "../../assets/logo.jpeg";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
      id="navbar-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-white p-1 rounded-xl transition-all shadow-sm border border-slate-100 group-hover:shadow-md">
            <img 
              src={logoImg} 
              alt="Andrea's Cleaning Logo" 
              className="h-10 sm:h-12 w-auto object-contain rounded-lg"
            />
          </div>
          <span className="font-display font-black text-lg sm:text-2xl tracking-tight text-brand-900 group-hover:text-brand-600 transition-colors">
            Andrea's Cleaning
          </span>
        </a>

        {/* Phone Number Right Aligned */}
        <div className="flex items-center">
          <a 
            href="tel:+584129884955" 
            className="flex items-center gap-2 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold px-4 py-2.5 rounded-full border border-brand-150 transition-all text-sm sm:text-base cursor-pointer shadow-xs"
          >
            <Phone className="h-4.5 w-4.5 animate-pulse text-brand-500" />
            <span className="hidden sm:inline">Call or Text: </span>
            <span className="font-mono text-brand-700">+58 (412) 988-4955</span>
          </a>
        </div>

      </div>
    </header>
  );
}
