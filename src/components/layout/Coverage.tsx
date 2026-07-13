import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, Check, Sparkles } from "lucide-react";

interface FrequencyCard {
  title: string;
  discount: string;
  description: string;
  perks: string[];
}

export default function Coverage() {
  const frequencies: FrequencyCard[] = [
    {
      title: "Weekly Service",
      discount: "Save 15%",
      description: "Our most popular contract for busy family homes, keeping everything consistently pristine.",
      perks: ["Same dedicated cleaner", "Priority scheduling", "Flexible rescheduling"]
    },
    {
      title: "Bi-Weekly Service",
      discount: "Save 10%",
      description: "The ideal balance of cost and maintenance. Perfect for standard residential upkeep.",
      perks: ["Same day of the week", "All regular cleaning tasks", "Easy cancellation"]
    },
    {
      title: "Monthly Service",
      discount: "Save 5%",
      description: "A comprehensive periodic restoration to keep deep-seated dust and grime away.",
      perks: ["Deep check-up items", "Customized scheduling", "No long-term contracts"]
    },
    {
      title: "One-Time Service",
      discount: "Standard Rate",
      description: "Perfect for single events, post-construction cleanup, or refreshing your home before moving.",
      perks: ["Full detail sanitizing", "Immediate estimate", "No recurring commitments"]
    }
  ];

  const serviceAreas = ["Madison", "Huntsville", "Hampton Cove", "New Market"];

  return (
    <section className="py-20 bg-brand-primary/10 border-b border-brand-primary/20" id="coverage-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Frequencies Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brand-secondary" />
            Flexible Recurring Rates
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-primary mt-4 tracking-tight">
            Our Cleaning Frequencies
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-650 text-base sm:text-lg">
            Choose a plan that matches your schedule. Save on recurring services and keep your home beautiful year-round.
          </p>
        </div>

        {/* Frequencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {frequencies.map((freq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-slate-150 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Discount Badge */}
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-brand-accent/15 text-brand-primary border border-brand-accent/30 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    {freq.discount}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{freq.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-5 min-h-[48px]">{freq.description}</p>
                
                <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6">
                  {freq.perks.map((perk, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="#estimate-section"
                  className="block w-full py-2.5 text-center text-xs font-bold bg-brand-primary/5 border border-brand-primary/20 hover:border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white rounded-xl transition-all"
                >
                  Book {freq.title.split(" ")[0]}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

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
