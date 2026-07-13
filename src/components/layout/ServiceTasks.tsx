import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Plus, Minus, CheckSquare, Sparkles, ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  items: string[];
}

export default function ServiceTasks() {
  // Mobile accordion state for the 3 main columns
  const [openMainCol, setOpenMainCol] = useState<number | null>(0); // Default open Col 1
  
  // Accordion state for Regular Cleaning rooms
  const [openRoom, setOpenRoom] = useState<number | null>(0); // Default open first room

  const regularRooms: AccordionItem[] = [
    {
      title: "Kitchen",
      items: [
        "Sanitize and wipe countertops & backsplashes",
        "Clean outer surfaces of appliances (fridge, stove, dishwasher)",
        "Deep clean microwave interior and exterior",
        "Scrub and sanitize sinks, polish chrome faucets",
        "Sweep and damp-mop floor surfaces",
        "Empty trash bins and replace liners"
      ]
    },
    {
      title: "Bathroom",
      items: [
        "Sanitize and deep clean toilet, inside and out",
        "Wash and scrub shower stalls, glass doors, and tubs",
        "Wipe countertops, sinks, and vanity areas",
        "Clean and polish all mirrors and chrome fixtures",
        "Mop floors with professional disinfectant",
        "Wipe baseboards and light fixtures"
      ]
    },
    {
      title: "Living Room",
      items: [
        "Dust furniture, tables, shelves, and decor items",
        "Vacuum carpets, rugs, and upholstered seating",
        "Dust window sills, blinds, and baseboards",
        "Clean glass table tops and TV screen borders",
        "Empty trash and remove visible cobwebs",
        "Wipe light switches and door handles"
      ]
    },
    {
      title: "Bedroom",
      items: [
        "Dust all furniture, dressers, and nightstands",
        "Vacuum carpets and mop hard floor surfaces",
        "Neatly make the bed and change linens (if provided)",
        "Dust mirrors, frames, ceiling fans, and lamps",
        "Wipe window sills and empty wastebaskets"
      ]
    },
    {
      title: "Laundry Room",
      items: [
        "Wipe external surfaces of washing machine & dryer",
        "Dust shelves, cabinets, and storage surfaces",
        "Vacuum and damp mop floors",
        "Empty trash bins and dust doors"
      ]
    }
  ];

  const deepExtras = [
    { id: "baseboards", label: "Baseboards detailed hand-wiping", checked: true },
    { id: "ceilingfans", label: "Ceiling fans & light fixtures detailed dusting", checked: true },
    { id: "oven", label: "Interior Oven deep scrubbing & degreasing", checked: true },
    { id: "windows", label: "Interior Windows cleaning & sill wiping", checked: true },
    { id: "fridge", label: "Interior Refrigerator sanitizing & deodorizing", checked: true }
  ];

  const moveInOutDetails = [
    "Inside kitchen cabinets, shelves & drawers sanitized",
    "Inside bathroom cabinets & medicine chests cleaned",
    "Complete interior refrigerator & freezer deep clean",
    "Complete interior oven deep degrease & wash",
    "Detailed cleaning of baseboards, door frames & doors",
    "Dusting and cleaning of all closets and shelving",
    "Detailed cleaning of window frames, sills, and tracks",
    "Full sanitization and deep scrubbing of all home surfaces",
    "Double vacuuming and disinfection of hard floors"
  ];

  const toggleMainCol = (idx: number) => {
    setOpenMainCol(openMainCol === idx ? null : idx);
  };

  const toggleRoom = (idx: number) => {
    setOpenRoom(openRoom === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100" id="tasks-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-brand-accent/10 text-brand-primary border border-brand-accent/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-accent" />
            Detailed Service Checklist
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-primary mt-4 tracking-tight">
            What We Do in Every Visit
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-650 text-base sm:text-lg">
            Complete transparency on every clean. Hover or select our specific services to inspect the comprehensive checklist we deliver.
          </p>
        </div>

        {/* Responsive Layout: 3 Columns in Desktop, Accordions in Mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-start">
          
          {/* Column 1: Regular Cleaning */}
          <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-brand-primary text-white rounded-xl">01</span>
              <h3 className="font-display font-bold text-xl text-slate-900">Regular Cleaning</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Standard top-notch maintenance. Click on any room below to see what tasks are included.
            </p>
            
            <div className="space-y-3">
              {regularRooms.map((room, rIdx) => {
                const isOpen = openRoom === rIdx;
                return (
                  <div key={rIdx} className="bg-white border border-slate-150 rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => toggleRoom(rIdx)}
                      className="w-full px-4 py-3 flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:text-brand-primary transition-colors cursor-pointer"
                    >
                      <span>{room.title}</span>
                      {isOpen ? <Minus className="h-4 w-4 text-brand-secondary" /> : <Plus className="h-4 w-4 text-brand-secondary" />}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-slate-100 bg-slate-50/50"
                        >
                          <ul className="p-4 space-y-2 text-xs text-slate-600">
                            {room.items.map((item, iIdx) => (
                              <li key={iIdx} className="flex items-start gap-2">
                                <Check className="h-3.5 w-3.5 text-brand-accent shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Deep Cleaning (Additional Services) */}
          <div className="bg-brand-secondary/5 border border-brand-secondary/10 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-brand-primary text-white rounded-xl">02</span>
              <h3 className="font-display font-bold text-xl text-slate-900">Deep Cleaning Extras</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Additional deep clean services included automatically in deep packages or requested as add-ons.
            </p>

            <div className="space-y-4">
              {deepExtras.map((extra) => (
                <div key={extra.id} className="flex items-center gap-3.5 bg-white border border-slate-150 rounded-xl p-4 shadow-xs">
                  <CheckSquare className="h-5 w-5 text-brand-accent shrink-0 fill-brand-accent/5" />
                  <span className="text-sm font-bold text-slate-700 leading-tight">{extra.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl text-center text-xs text-brand-primary font-bold">
              ✨ Restores your home to model-like condition!
            </div>
          </div>

          {/* Column 3: Move In / Out */}
          <div className="bg-brand-accent/5 border border-brand-accent/10 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2 bg-brand-primary text-white rounded-xl">03</span>
              <h3 className="font-display font-bold text-xl text-slate-900">Move Out / In</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Top-to-bottom thorough sanitize for empty spaces. Perfect for deposit return or settling in.
            </p>

            <ul className="space-y-3 bg-white border border-slate-150 rounded-2xl p-5 shadow-xs">
              {moveInOutDetails.map((detail, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2.5 text-xs text-slate-650 leading-relaxed">
                  <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Mobile Accordion View (1 col with accordions) */}
        <div className="lg:hidden space-y-4">
          {/* Mobile Col 1 Accordion: Regular Cleaning */}
          <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleMainCol(0)}
              className="w-full bg-slate-50 px-5 py-4 flex items-center justify-between text-left font-display font-bold text-slate-900 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 bg-brand-primary text-white text-xs rounded-lg">01</span>
                <span>Regular Cleaning Checklist</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-brand-primary transition-transform duration-300 ${openMainCol === 0 ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {openMainCol === 0 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden bg-white border-t border-slate-150"
                >
                  <div className="p-4 space-y-3">
                    {regularRooms.map((room, rIdx) => {
                      const isOpen = openRoom === rIdx;
                      return (
                        <div key={rIdx} className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50">
                          <button
                            onClick={() => toggleRoom(rIdx)}
                            className="w-full px-4 py-2.5 flex items-center justify-between text-left font-bold text-xs text-slate-800 cursor-pointer"
                          >
                            <span>{room.title}</span>
                            {isOpen ? <Minus className="h-3.5 w-3.5 text-brand-secondary" /> : <Plus className="h-3.5 w-3.5 text-brand-secondary" />}
                          </button>
                          {isOpen && (
                            <ul className="px-4 pb-4 pt-1 space-y-2 text-[11px] text-slate-650 border-t border-slate-100 bg-white">
                              {room.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2">
                                  <Check className="h-3.5 w-3.5 text-brand-accent shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Col 2 Accordion: Deep Cleaning */}
          <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleMainCol(1)}
              className="w-full bg-slate-50 px-5 py-4 flex items-center justify-between text-left font-display font-bold text-slate-900 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 bg-brand-primary text-white text-xs rounded-lg">02</span>
                <span>Deep Cleaning Extras</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-brand-primary transition-transform duration-300 ${openMainCol === 1 ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {openMainCol === 1 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden bg-white border-t border-slate-150"
                >
                  <div className="p-5 space-y-4">
                    {deepExtras.map((extra) => (
                      <div key={extra.id} className="flex items-center gap-3.5 bg-slate-50 border border-slate-150 rounded-xl p-3.5 shadow-xs">
                        <CheckSquare className="h-5 w-5 text-brand-accent shrink-0" />
                        <span className="text-xs font-bold text-slate-700 leading-tight">{extra.label}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Col 3 Accordion: Move Out / In */}
          <div className="border border-slate-150 rounded-2xl overflow-hidden shadow-xs">
            <button
              onClick={() => toggleMainCol(2)}
              className="w-full bg-slate-50 px-5 py-4 flex items-center justify-between text-left font-display font-bold text-slate-900 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 bg-brand-primary text-white text-xs rounded-lg">03</span>
                <span>Move Out / In Checklist</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-brand-primary transition-transform duration-300 ${openMainCol === 2 ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {openMainCol === 2 && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden bg-white border-t border-slate-150"
                >
                  <ul className="p-5 space-y-3 text-xs text-slate-650">
                    {moveInOutDetails.map((detail, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2.5 leading-relaxed">
                        <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
