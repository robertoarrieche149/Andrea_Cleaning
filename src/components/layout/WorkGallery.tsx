import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Sparkles, X } from "lucide-react";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
  tag: string;
}

export default function WorkGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "/assets/images/baño-limpio.webp",
      alt: "Sparkling clean bathroom tile grout - Andrea's Cleaning LLC in Huntsville AL",
      tag: "Bathroom Cleaning"
    },
    {
      id: 2,
      type: "image",
      src: "/assets/images/baño-limpio2.webp",
      alt: "Disinfected pristine bathroom sink and mirror - Andrea's Cleaning LLC in Madison AL",
      tag: "Bathroom Cleaning"
    },
    {
      id: 3,
      type: "image",
      src: "/assets/images/baño-limpio3.webp",
      alt: "Sanitized spotless bathtub and shower space - Andrea's Cleaning LLC in Hampton Cove AL",
      tag: "Bathroom Cleaning"
    },
    {
      id: 4,
      type: "image",
      src: "/assets/images/cocina-limpia.webp",
      alt: "Polished countertops and kitchen stove - Andrea's Cleaning LLC in New Market AL",
      tag: "Kitchen Cleaning"
    },
    {
      id: 5,
      type: "image",
      src: "/assets/images/habitacion-limpia-vacia2.webp",
      alt: "Deep cleaned empty bedroom after transition - Andrea's Cleaning LLC move-in service in Huntsville AL",
      tag: "Move In/Out"
    },
    {
      id: 6,
      type: "image",
      src: "/assets/images/habitacion-vacia-limpia.webp",
      alt: "Spotless bedroom hardwood floors and dusting - Andrea's Cleaning LLC local cleaning in Madison AL",
      tag: "Bedroom Cleaning"
    },
    {
      id: 7,
      type: "image",
      src: "/assets/images/habitacion-vacia-limpia-alfombra.webp",
      alt: "Vacuumed clean carpet and baseboards in bedroom - Andrea's Cleaning LLC in Hampton Cove AL",
      tag: "Carpet & Floors"
    },
    {
      id: 8,
      type: "image",
      src: "/assets/images/sala-vacia-limpia.webp",
      alt: "Welcoming and clean spacious living room - Andrea's Cleaning LLC residential services in Alabama",
      tag: "Living Room"
    },
    {
      id: 9,
      type: "video",
      src: "/assets/video/0712.mp4",
      alt: "Interactive preview of our professional cleaning process - Andrea's Cleaning LLC video",
      tag: "Process Video"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-100" id="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-brand-100 text-brand-primary border border-brand-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-secondary" />
            Our Quality Gallery
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-brand-primary mt-4 tracking-tight">
            See the Spotless Results
          </h2>
          <div className="h-1.5 w-20 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-650 text-base sm:text-lg">
            A premium collection of our real transformations. We deliver visual excellence 
            in every home across Madison, Huntsville, Hampton Cove, and New Market.
          </p>
        </div>

        {/* 3x3 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-80 cursor-pointer"
            >
              {item.type === "image" ? (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                    <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{item.tag}</span>
                    <h4 className="text-white font-display font-bold text-lg mt-1">Spotless Transformation</h4>
                    <p className="text-slate-200 text-xs mt-1">100% Satisfaction Guarantee</p>
                  </div>
                </>
              ) : (
                <div 
                  onClick={() => setActiveVideo(item.src)}
                  className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden"
                >
                  {/* We can use the background video playing in loop as interactive thumbnail */}
                  <video
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  
                  {/* Play Button overlay */}
                  <div className="relative z-10 p-5 bg-brand-primary text-white rounded-full shadow-lg group-hover:scale-110 active:scale-95 transition-transform duration-300">
                    <Play className="h-8 w-8 fill-current text-brand-secondary" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-left z-10">
                    <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{item.tag}</span>
                    <h4 className="text-white font-display font-bold text-lg mt-1">Watch Us In Action</h4>
                    <p className="text-slate-350 text-xs mt-1">Click to play video</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-full sm:h-auto max-w-4xl bg-slate-950 sm:rounded-2xl overflow-hidden shadow-2xl z-10 sm:border border-white/10 flex flex-col justify-center"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 cursor-pointer z-20 border border-white/10 backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="w-full h-full sm:h-[85vh]">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
