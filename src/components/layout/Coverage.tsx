import React from "react";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Coverage() {
  const serviceAreas = ["Madison", "Huntsville", "Hampton Cove", "New Market"];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100" id="coverage-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Local SEO Geographic Targeting Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-brand-primary to-brand-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden text-center sm:text-left"
          id="local-seo-banner"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-16 translate-x-16" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-secondary/20 rounded-full blur-3xl translate-y-16 -translate-x-16" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="h-4 w-4 text-brand-secondary" />
                Local SEO Service Area Notice
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                📍 Areas We Serve in Alabama
              </h3>
              <p className="text-slate-100 text-sm sm:text-base mt-3 leading-relaxed">
                To prevent invalid service requests, please note we operate strictly in the state of <strong>Alabama</strong>. 
                We do NOT service Atlanta, Georgia. We are proud to serve:
              </p>
              
              {/* Service Areas Badge Grid */}
              <div className="flex flex-wrap gap-2.5 mt-5 justify-center sm:justify-start">
                {serviceAreas.map((area, aIdx) => (
                  <span
                    key={aIdx}
                    className="bg-white text-brand-primary font-bold text-xs px-3.5 py-1.5 rounded-xl shadow-sm border border-slate-100"
                  >
                    {area}, AL
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 text-center lg:text-right">
              <p className="text-xs text-slate-350 uppercase tracking-widest font-bold">Outside our areas?</p>
              <h4 className="text-lg font-bold text-brand-secondary mt-1">Contact us directly to ask</h4>
              <p className="text-xs text-slate-200 mt-1">Special travel rates may apply</p>
              <a
                href="tel:+19382472787"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/90 text-brand-primary font-bold px-6 py-3 rounded-xl transition-all shadow-md mt-4 text-sm font-mono"
              >
                +1 (938) 247-2787
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
