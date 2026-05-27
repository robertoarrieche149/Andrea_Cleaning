import React, { useState } from "react";
import { motion } from "motion/react";
import { X, MessageSquare } from "lucide-react";

interface SmsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SmsModal({ isOpen, onClose }: SmsModalProps) {
  const [smsPhone, setSmsPhone] = useState("");
  const [smsSent, setSmsSent] = useState(false);

  const handleSmsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (smsPhone.trim()) {
      setSmsSent(true);
      const textMessage = `Hola! Mi número es ${smsPhone}. Quisiera un presupuesto gratuito para Andrea's Cleaning Services en Atlanta.`;
      
      // Open direct SMS protocol
      window.open(`sms:+584129884955?body=${encodeURIComponent(textMessage)}`, "_blank");
      
      setTimeout(() => {
        setSmsSent(false);
        setSmsPhone("");
        onClose();
      }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      
      {/* Modal Box */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl z-10 border border-slate-100"
        id="sms-quote-modal"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-brand-50 text-brand-600 rounded-xl border border-brand-100/50">
            <MessageSquare className="h-6 w-6 text-brand-600" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900">
              Get an Instant Text Quote
            </h3>
            <p className="text-xs text-slate-500">Free estimation. Direct SMS message.</p>
          </div>
        </div>

        {smsSent ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center text-emerald-800 text-xs sm:text-sm font-medium"
          >
            <p className="font-bold mb-1 text-base">✨ Redactando SMS...</p>
            <p>Se abrirá tu aplicación de mensajería SMS para enviar la solicitud de presupuesto a Andrea.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSmsSubmit} className="space-y-4">
            <p className="text-xs text-slate-650 leading-relaxed">
              Ingresa tu número de teléfono móvil a continuación y generaremos un mensaje de texto SMS pre-redactado para enviar directamente a nuestra línea de atención en Atlanta.
            </p>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Tu Número de Teléfono:
              </label>
              <input 
                type="tel" 
                required
                placeholder="+1 (404) 123-4567"
                value={smsPhone}
                onChange={(e) => setSmsPhone(e.target.value)}
                className="w-full px-4 py-3 border border-slate-250 rounded-xl text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-brand-500 focus:border-brand-500 bg-slate-50/50"
              />
            </div>
            <div className="bg-slate-50 p-2.5 rounded-lg text-[11px] text-slate-400 text-center">
              Al enviar, se abrirá tu aplicación de mensajería nativa. Aplican tarifas estándar de tu operador.
            </div>
            <button 
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all cursor-pointer text-xs sm:text-sm"
            >
              Iniciar Mensaje de Texto SMS
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
