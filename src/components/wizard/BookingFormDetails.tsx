import React from "react";
import { User, Mail, Phone, MapPin, Building, ChevronLeft, Send, Sparkles, MessageSquare } from "lucide-react";
import { FormData } from "../../types/booking";

interface BookingFormDetailsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  isSubmitting: boolean;
  formattedSelectedDate: string;
  selectedTime: string;
  selectedServiceId: string | null;
}

export default function BookingFormDetails({
  formData,
  onChange,
  onSubmit,
  onBack,
  isSubmitting,
  formattedSelectedDate,
  selectedTime,
  selectedServiceId
}: BookingFormDetailsProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
      
      <div className="space-y-4">
        {/* Selection Summary Banner */}
        <div className="bg-brand-900 text-white rounded-2xl p-5 shadow-xl relative overflow-hidden" id="summary-banner-step2">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="h-20 w-20" />
          </div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-200 bg-brand-800/60 px-2.5 py-1 rounded-full border border-brand-700/50">
            Resumen de la Cita de Evaluación
          </span>
          <p className="font-display font-extrabold text-base sm:text-lg mt-3" id="booking-estimate-title">
            Visita Técnica - 60 min | {formattedSelectedDate} a las {selectedTime}
          </p>
          <p className="text-xs text-brand-200 mt-1">
            Servicio a Evaluar: <span className="capitalize font-bold text-white">{selectedServiceId ? `${selectedServiceId} Cleaning` : "Evaluación General"}</span>
          </p>
        </div>

        <div className="text-center sm:text-left pt-2">
          <span className="text-xs font-bold tracking-wider text-brand-600 uppercase bg-brand-50 px-2.5 py-1 rounded-sm">
            Step 2 of 3
          </span>
          <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mt-2">
            Ingresa tus datos de contacto y dirección
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Toda la información proporcionada es estrictamente confidencial para coordinar la visita.
          </p>
        </div>

        {/* Customer details input grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-slate-400" />
              <span>Nombre Completo *</span>
            </label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={onChange}
              placeholder="Ej: John Doe"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-slate-400" />
              <span>Correo Electrónico *</span>
            </label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={onChange}
              placeholder="Ej: johndoe@gmail.com"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              <span>Teléfono *</span>
            </label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={onChange}
              placeholder="Ej: +1 (404) 555-0199"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Address */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              <span>Dirección Física *</span>
            </label>
            <input 
              type="text" 
              name="address"
              required
              value={formData.address}
              onChange={onChange}
              placeholder="Ej: 123 Peachtree St NE"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Apt / Suite */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Building className="h-3.5 w-3.5 text-slate-400" />
              <span>Apt / Suite (Opcional)</span>
            </label>
            <input 
              type="text" 
              name="apt"
              value={formData.apt}
              onChange={onChange}
              placeholder="Ej: Apt 4B"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* City */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Ciudad *</span>
            </label>
            <input 
              type="text" 
              name="city"
              required
              value={formData.city}
              onChange={onChange}
              placeholder="Ej: Atlanta"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* State */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Estado *</span>
            </label>
            <input 
              type="text" 
              name="state"
              required
              value={formData.state}
              onChange={onChange}
              placeholder="GA"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Zip */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span>Código Postal *</span>
            </label>
            <input 
              type="text" 
              name="zip"
              required
              value={formData.zip}
              onChange={onChange}
              placeholder="Ej: 30301"
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
            />
          </div>

          {/* Optional brief instructions */}
          <div className="space-y-1 md:col-span-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
              <span>Instrucciones Especiales / Comentarios (Opcional)</span>
            </label>
            <textarea 
              name="comments"
              value={(formData as any).comments || ""}
              onChange={onChange}
              placeholder="Ej: Deseo evaluar la limpieza de una alfombra específica, tengo dos perros, etc."
              rows={2}
              className="w-full px-3 py-2.5 border border-slate-250 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50 resize-none"
            />
          </div>

        </div>
      </div>

      {/* Step Action Buttons */}
      <div className="flex gap-4 pt-6 border-t border-slate-100">
        <button 
          type="button"
          onClick={onBack}
          className="w-1/3 py-3 border border-slate-250 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-1"
        >
          <ChevronLeft className="h-4.5 w-4.5" />
          <span>Volver</span>
        </button>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="flex-1 py-3 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-350 text-white font-bold rounded-xl shadow-lg shadow-brand-500/10 active:scale-97 disabled:active:scale-100 transition cursor-pointer text-xs sm:text-sm flex items-center justify-center gap-2 border border-transparent"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              <span>Confirmando...</span>
            </>
          ) : (
            <>
              <Send className="h-4.5 w-4.5" />
              <span>Solicitar Visita Técnica</span>
            </>
          )}
        </button>
      </div>

    </form>
  );
}
