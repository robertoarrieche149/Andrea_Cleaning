import React from "react";
import { Sparkles, Phone, Mail, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          
          {/* Box 1: About */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-display font-extrabold text-xl mb-4">
              <Sparkles className="h-5 w-5 text-brand-400" />
              <span>Andrea's Cleaning Services</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Providing premium and deep residential cleaning across Atlanta, Georgia and surrounding metropolitan areas. Fully customizable scheduling tailored precisely to your family's safety and comfort.
            </p>
          </div>

          {/* Box 2: Working Hours */}
          <div className="text-center">
            <h4 className="text-white font-display font-bold text-lg mb-4">Service Schedule</h4>
            <ul className="text-sm space-y-2.5">
              <li>Monday – Saturday: <span className="text-white font-semibold">8:00 AM – 6:00 PM</span></li>
              <li>Sunday: <span className="text-slate-500">Closed (By appointment only)</span></li>
              <li className="pt-2 text-brand-400 font-medium font-display">📍 Atlanta, Georgia</li>
            </ul>
          </div>

          {/* Box 3: Touch point */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-display font-bold text-lg mb-4">Get In Touch</h4>
            <p className="text-sm leading-relaxed mb-4">
              Ready to schedule your visit or have specific questions about service details?
            </p>
            <div className="flex flex-col gap-2 items-center md:items-end">
              <a 
                href="tel:+584129884955" 
                className="inline-flex items-center gap-2 bg-brand-650 hover:bg-brand-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all font-mono"
              >
                <Phone className="h-4 w-4" />
                +58 (412) 988-4955
              </a>
              <a 
                href="mailto:Aesg1414@Gmail.com" 
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all font-mono border border-slate-700"
              >
                <Mail className="h-4 w-4 text-brand-400" />
                Aesg1414@Gmail.com
              </a>
            </div>
          </div>

        </div>

        {/* Accepted Payment Methods Visual Section */}
        <div className="mt-12 text-center" id="accepted-payments">
          <h5 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-4">
            Accepted Payment Methods
          </h5>
          <div className="flex justify-center items-center gap-3">
            {/* Cash */}
            <div className="bg-slate-800 border border-slate-700/60 rounded-lg py-2 px-4 shadow-xs flex items-center gap-1.5 transition-colors hover:border-slate-600 group">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">Cash</span>
            </div>
            {/* Zelle */}
            <div className="bg-slate-800 border border-slate-700/60 rounded-lg py-2 px-4 shadow-xs flex items-center gap-1.5 transition-colors hover:border-slate-600 group">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">Zelle</span>
            </div>
            {/* Cards */}
            <div className="bg-slate-800 border border-slate-700/60 rounded-lg py-2 px-4 shadow-xs flex items-center gap-1.5 transition-colors hover:border-slate-600 group">
              <CreditCard className="h-3.5 w-3.5 text-brand-400 group-hover:text-brand-350 transition-colors" />
              <span className="text-xs font-bold text-white group-hover:text-brand-350 transition-colors">Cards</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Andrea's Cleaning Services. All rights reserved.</p>
          <p className="mt-1.5 text-slate-600">Designed with absolute precision for professional home care.</p>
        </div>

      </div>
    </footer>
  );
}
