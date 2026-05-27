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
  const smsBody = "Hola! Quisiera un presupuesto gratuito e información para el servicio de limpieza de Andrea's Cleaning.";
  const smsUrl = `sms:+584129884955?body=${encodeURIComponent(smsBody)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')` 
        }}
      />
      {/* Dark overlay with turquoise ambient tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-700/50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Location Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 bg-brand-500/95 text-white font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 backdrop-blur-xs shadow-lg uppercase tracking-wider border border-brand-300/35"
        >
          <MapPin className="h-4.5 w-4.5" />
          Atlanta, GA & Surrounding Areas
        </motion.div>

        {/* Main H1 Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto"
          id="hero-title"
        >
          Andrea's Cleaning Services — <br/>
          <span className="text-brand-100">Professional Home Care in Atlanta, GA</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto"
          id="hero-subtitle"
        >
          Enjoy a fresh, spotless, and welcoming home. We make your house shine, one room at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* CTA 1 (Primary Turquoise) */}
          <button 
            onClick={onBookNowClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-600 active:scale-97 text-white font-bold rounded-full shadow-xl shadow-brand-900/20 hover:shadow-brand-500/30 transition-all duration-200 flex items-center justify-center gap-2 group text-base cursor-pointer"
            id="cta-book-now"
          >
            <span>Reservar Visita de Evaluación</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2 (Secondary SMS) */}
          <a 
            href={smsUrl}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 active:scale-97 border border-white/40 hover:border-white text-white font-bold rounded-full backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer"
            id="cta-sms-quote"
          >
            <MessageSquare className="h-5 w-5 text-brand-200" />
            <span>Envíame un mensaje de texto</span>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-slate-350 text-xs sm:text-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-brand-350" />
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-brand-350" />
            <span>Fully Insured & Bonded</span>
          </div>
          <div className="hidden sm:flex items-center justify-center gap-2 col-span-1">
            <Sparkles className="h-5 w-5 text-brand-350" />
            <span>Locally Owned & Operated</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
