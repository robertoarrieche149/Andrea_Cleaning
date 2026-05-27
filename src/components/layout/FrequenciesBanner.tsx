import React from "react";
import { motion } from "motion/react";

export default function FrequenciesBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-2xl p-6 sm:p-8 shadow-xl text-center relative overflow-hidden"
      id="frequencies-banner"
    >
      {/* Ambient Background sparkle circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl translate-y-12 -translate-x-12" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left md:max-w-xl">
          <span className="bg-brand-500/40 text-brand-100 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-brand-300/30">
            Custom Frequencies Available
          </span>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-3">
            Available Frequencies: Weekly, Bi-Weekly, Monthly
          </h3>
          <p className="text-brand-100 text-sm mt-2">
            Maintain consistency or request single visits. Get exclusive discounts of up to 15% on recurring contracts in the Atlanta region!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 shrink-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl text-center min-w-[90px] sm:min-w-[110px]">
            <p className="text-xs text-brand-100 font-bold">✨ Weekly</p>
            <span className="text-xs font-extrabold text-white">-15% Off</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl text-center min-w-[90px] sm:min-w-[110px]">
            <p className="text-xs text-brand-100 font-bold">✨ Bi-Weekly</p>
            <span className="text-xs font-extrabold text-white">-10% Off</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl text-center min-w-[90px] sm:min-w-[110px]">
            <p className="text-xs text-brand-100 font-bold">✨ Monthly</p>
            <span className="text-xs font-extrabold text-white">-5% Off</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
