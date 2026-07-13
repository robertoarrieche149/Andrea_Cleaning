import React from "react";
import { motion } from "motion/react";
import { 
  MapPin, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  Shield, 
  Sparkles 
} from "lucide-react";

interface HeroProps {
  onBookNowClick: () => void;
}

export default function Hero({ onBookNowClick }: HeroProps) {
  const phoneUrl = "tel:+19382472787";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background Video Loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105"
      >
        <source src="/assets/video/0712-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay with 40% opacity */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        
        {/* Location Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 bg-brand-primary/95 text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs shadow-lg uppercase tracking-wider border border-brand-secondary/35"
        >
          <MapPin className="h-4.5 w-4.5 text-brand-secondary" />
          Alabama Service Areas: Madison, Huntsville & More
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none max-w-4xl mx-auto drop-shadow-md"
          id="hero-title"
        >
          Andreas Cleaning LLC
        </motion.h1>

        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-3 font-display font-bold text-2xl sm:text-4xl text-brand-secondary tracking-wide uppercase drop-shadow-sm"
        >
          Professional Cleaning Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-xs"
          id="hero-subtitle"
        >
          Making Your Home Shine, One Room at a Time. Enjoy a fresh, spotless, and welcoming space.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* CTA 1 (Primary Corporate Blue) */}
          <button 
            onClick={onBookNowClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-600 active:scale-97 text-white font-bold rounded-full shadow-xl shadow-brand-900/40 hover:shadow-brand-primary/50 transition-all duration-200 flex items-center justify-center gap-2 group text-base cursor-pointer border border-brand-secondary/30"
            id="cta-book-now"
          >
            <span>Get a Free Estimate</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform text-brand-secondary" />
          </button>

          {/* CTA 2 (Call / Text) */}
          <a 
            href={phoneUrl}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 active:scale-97 border border-white/40 hover:border-white text-white font-bold rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
            id="cta-sms-quote"
          >
            <MessageSquare className="h-5 w-5 text-brand-secondary" />
            <span>Call / Text Us</span>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-slate-200 text-xs sm:text-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-brand-accent fill-brand-accent/10" />
            <span className="font-semibold text-brand-accent">100% Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-brand-secondary" />
            <span>Fully Insured & Bonded</span>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-2 col-span-1">
            <Sparkles className="h-5 w-5 text-brand-secondary" />
            <span>Locally Owned & Operated</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
