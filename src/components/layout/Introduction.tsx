import React from "react";
import { motion } from "motion/react";
import { Phone, CheckCircle2 } from "lucide-react";

export default function Introduction() {
  const phone = "+1 (938) 247-2787";
  const phoneUrl = "tel:+19382472787";

  return (
    <section className="py-20 bg-white border-b border-slate-100" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative p-6 sm:p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-xl max-w-md w-full">
              {/* Decorative accent element */}
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-brand-secondary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-brand-accent/10 rounded-full blur-xl" />
              
              <img 
                src="/assets/images/logo.webp" 
                alt="Andreas Cleaning LLC Official Logo" 
                className="w-full h-auto max-h-[300px] object-contain rounded-2xl mx-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Persuasive copy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-1 bg-brand-accent/10 text-brand-primary border border-brand-accent/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="h-4 w-4 text-brand-accent" />
              100% Satisfaction Guaranteed
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-primary leading-tight tracking-tight">
              Making Your Home Shine, <br/>
              <span className="text-slate-900">One Room at a Time.</span>
            </h2>

            <p className="text-slate-650 text-base sm:text-lg leading-relaxed">
              Enjoy a fresh, spotless, and welcoming home without lifting a finger. 
              At Andreas Cleaning LLC, we specialize in premium residential services tailored specifically to your needs. 
              Our experienced team uses advanced tools and precise attention to detail to ensure every space is beautifully sanitized.
            </p>

            <p className="text-slate-600 text-sm sm:text-base">
              Whether you need regular upkeep, detailed deep cleaning, or transitioning services, 
              we are Alabama's trusted professionals committed to safety, comfort, and unmatched excellence.
            </p>

            {/* Prominent Contact Info */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Direct Line (Call or Text)
                </span>
                <a 
                  href={phoneUrl}
                  className="font-display font-black text-3xl sm:text-4xl text-brand-primary hover:text-brand-secondary transition-colors inline-flex items-center gap-2 mt-1"
                >
                  <Phone className="h-7 w-7 text-brand-accent shrink-0" />
                  <span>{phone}</span>
                </a>
              </div>
              
              <div className="sm:ml-auto">
                <a 
                  href="#estimate-section"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary hover:bg-brand-600 active:scale-97 text-white font-bold rounded-xl shadow-md transition-all text-sm cursor-pointer"
                >
                  Request a Free Estimate
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
