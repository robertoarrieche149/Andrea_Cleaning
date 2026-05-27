import React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { services } from "../../data/services";

interface ServicesSectionProps {
  selectedServiceId: string | null;
  onServiceSelect: (serviceId: string) => void;
}

export default function ServicesSection({ selectedServiceId, onServiceSelect }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Our Professional Services
          </h2>
          <div className="h-1.5 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Whether you need regular upkeep or an ultimate deep revitalizing clean, our experienced team delivers perfection tailored specifically for your home in Atlanta, GA.
          </p>
        </div>

        {/* Grid: 1 col on mobile, 2 or 4 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            const isSelected = selectedServiceId === service.id;
            
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-slate-50 border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isSelected 
                    ? "ring-2 ring-brand-500 border-brand-500 shadow-xl scale-102" 
                    : "border-slate-150 shadow-xs hover:shadow-lg hover:border-brand-200"
                }`}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Top Accent Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-brand-50 text-brand-600 rounded-xl inline-block border border-brand-100/50">
                      <IconComponent className="h-6 w-6 text-brand-600" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                      Service 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mt-5">
                    {service.title}
                  </h3>

                  <p className="text-xs bg-brand-50 text-brand-700 inline-block px-2.5 py-1 rounded-md mt-2 font-semibold border border-brand-100/30">
                    {service.duration}
                  </p>

                  <p className="text-slate-650 mt-4 text-sm leading-relaxed min-h-[72px]">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">
                      What's Included:
                    </p>
                    <ul className="space-y-2.5">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600 text-left">
                          <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => onServiceSelect(service.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isSelected 
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/20" 
                        : "bg-slate-200 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border border-transparent hover:border-brand-200"
                    }`}
                  >
                    <span>Seleccionar</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
