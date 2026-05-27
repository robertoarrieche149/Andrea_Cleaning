import React from "react";
import { CheckCircle } from "lucide-react";
import { FormData } from "../../types/booking";

interface BookingSuccessProps {
  formData: FormData;
  formattedSelectedDate: string;
  selectedTime: string;
  onReset: () => void;
}

export default function BookingSuccess({
  formData,
  formattedSelectedDate,
  selectedTime,
  onReset
}: BookingSuccessProps) {
  return (
    <div className="text-center py-10 px-4 max-w-lg mx-auto flex-1 flex flex-col items-center justify-center space-y-6">
      
      <div className="p-4 bg-emerald-50 text-emerald-500 rounded-full border border-emerald-100/50 shadow-md animate-bounce">
        <CheckCircle className="h-12 w-12 text-emerald-550" />
      </div>

      <div className="space-y-2">
        <h3 className="font-display font-black text-2xl sm:text-3xl text-emerald-900 leading-tight">
          ¡Gracias por reservar!
        </h3>
        <p className="font-display text-lg font-extrabold text-slate-800">
          See you Soon.
        </p>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-1">
          La confirmación de la cita y los detalles de la visita se enviarán a: <strong className="text-slate-900 underline">{formData.email}</strong>
        </p>
      </div>

      {/* Confirmation Metadata Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4.5 w-full space-y-3 text-left shadow-xs">
        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest text-center border-b border-slate-200/60 pb-2">
          Detalles de tu Solicitud
        </span>
        <p className="font-sans font-extrabold text-sm text-slate-800 text-center" id="success-estimate-text">
          Visita de Evaluación - 60 min | {formattedSelectedDate} - {selectedTime}
        </p>
        <div className="grid grid-cols-2 gap-3 text-xs text-slate-500 pt-1">
          <div>
            <span className="text-[10px] block text-slate-400 font-bold uppercase tracking-wider">Nombre:</span>
            <span className="font-semibold text-slate-800">{formData.name}</span>
          </div>
          <div>
            <span className="text-[10px] block text-slate-400 font-bold uppercase tracking-wider">Dirección:</span>
            <span className="font-semibold text-slate-800">
              {formData.address}{formData.apt ? `, Apt ${formData.apt}` : ""}, {formData.city}, {formData.state}
            </span>
          </div>
        </div>
      </div>

      {/* Reset button */}
      <button 
        onClick={onReset}
        className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition duration-200 active:scale-95 cursor-pointer text-sm font-sans w-full shadow-md"
      >
        Volver al inicio
      </button>

    </div>
  );
}
